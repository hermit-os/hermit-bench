use core::panic;
use regex::Regex;
use serde::{Deserialize, Serialize};
use std::process::{Command, Stdio};
use std::time::Duration;
use std::{
    env,
    error::Error,
    f64,
    fs::File,
    io::{self, BufReader},
    time::Instant,
};
use wait_timeout::ChildExt;

const TIMEOUT: Duration = Duration::from_secs(60 * 30); // 30 minutes timeout

// Output format to be compatible with github-action-benchmark
#[derive(Serialize)]
struct BenchmarkResult {
    name: String,
    unit: String,
    value: f64,
    group: String,
    range: f64,
    plot_group: String,
}

// Struct to parse the output of the benchmark, stores all data points in a single vector
struct BenchmarkResultRaw {
    name: String,
    unit: String,
    value: Vec<f64>,
    group: String,
    plot_group: String,
}

const DEFAULT_ITERATIONS: u32 = 1;
fn default_iterations() -> u32 {
    DEFAULT_ITERATIONS
}

fn default_group() -> String {
    "General".to_string()
}

fn default_plot_group() -> String {
    "none".to_string()
}

// Input format for the hermit JSON file
//
// A benchmark can either use a path to a file or a command to run.
// If a path is provided, the benchmark will determine the size of the file.
// If a command is provided, the benchmark will run the command and parse the output.
#[derive(Serialize, Deserialize, Debug)]
struct Benchmark {
    name: String,

    #[serde(default)]
    command: String,

    #[serde(default)]
    path: String,

    #[serde(default = "default_iterations")]
    iterations: u32, // The number of iterations to run the benchmark. Default is 1.

    #[serde(default = "bool::default")] // Default is false
    external_time: bool, // If true, the benchmark will be run with the external time command

    #[serde(default = "default_group")]
    group: String,

    #[serde(default = "default_plot_group")]
    plot_group: String,

    #[serde(default = "bool::default")] // Default is false
    absolute_path: bool, // If true, the path will not get the relative path added

    #[serde(default = "String::new")]
    pre_run_command: String,
}

fn main() -> io::Result<()> {
    // Get the input file from the command line arguments.
    let args: Vec<String> = env::args().collect();
    
    if args.len() < 5 {
        return Err(io::Error::new(
            io::ErrorKind::InvalidInput,
            "Usage: <program> <input_file> <relative_path> <build_command> <benchmark_build>"
        ));
    }
    
    let input_file = &args[1];
    let relative_path = &args[2];
    let build_command = &args[3];

    let benchmark_build: bool = match args[4].to_lowercase().as_str() {
        "true" => true,
        "false" => false,
        _ => {
            return Err(io::Error::new(
                io::ErrorKind::InvalidInput,
                "Invalid value for benchmark_build",
            ));
        }
    };

    // Initialize the results vector.
    let mut results: Vec<BenchmarkResult> = Vec::new();

    let build_benchmark = Benchmark {
        name: "Build".to_string(),
        command: format!("cd {0} && {1}", relative_path, build_command),
        iterations: 1,
        path: "".to_string(),
        external_time: true,
        group: "General".to_string(),
        plot_group: "none".to_string(),
        absolute_path: false,
        pre_run_command: "".to_string(),
    };

    if benchmark_build {
        // Run the build command and treat it as a benchmark.
        let build_result = external_time_benchmark(&build_benchmark, false);

        // Add the results to the overall results vector.
        results.push(build_result);

    } else {
        // If the build benchmark is not needed, just run the command to build the project.
        run_benchmark_command(&build_benchmark);
    }

    // Construct the full path to the input file.
    let input_file = &format!("{}{}", relative_path, input_file);

    // Parse the benchmarks from the input file.
    println!("Parsing benchmarks from {input_file}:");

    let mut benchmarks = parse_benchmarks(input_file).unwrap();

    let loaded_benchmarks_str = serde_json::to_string_pretty(&benchmarks).unwrap();
    println!("Loaded benchmarks:");
    println!("{loaded_benchmarks_str}");

    // Run the benchmarks.
    for benchmark in &mut benchmarks {
        // Check if there is a command or a path, if not it's an invalid benchmark
        if benchmark.command == "" && benchmark.path == "" {
            eprintln!("Invalid benchmark: {0}", benchmark.name);
            return Err(io::Error::new(
                io::ErrorKind::InvalidInput,
                "Invalid benchmark",
            ));
        }
        // If it's a command benchmark.
        else if benchmark.command != "" {
            // Before command, change the working directory to the relative path
            if benchmark.absolute_path == false {
                benchmark.command = format!("cd {0} && {1}", relative_path, benchmark.command);
                benchmark.pre_run_command = format!("cd {0} && {1}", relative_path, benchmark.pre_run_command);
            }
            if benchmark.external_time == true {
                // External time benchmark
                let benchmark_result = external_time_benchmark(benchmark, true);

                // Serialize the results to a JSON string for debugging.
                let results_str = serde_json::to_string_pretty(&benchmark_result).unwrap();
                println!("Results: {results_str}");

                // Add the results to the overall results vector.
                results.push(benchmark_result);
            } else {
                // Internal time benchmark
                let benchmark_result = run_benchmark(benchmark);

                // Serialize the results to a JSON string for debugging.
                let results_str = serde_json::to_string_pretty(&benchmark_result).unwrap();
                println!("Results: {results_str}");

                // Add the results to the overall results vector.
                results.extend(benchmark_result);
            }
        } else {
            // Adapt relative path
            if benchmark.absolute_path == false {
                benchmark.path = format!("{}/{}", relative_path, benchmark.path);
            }
            println!("Determining size of file at {0}", benchmark.path);
            let benchmark_result = get_size(benchmark);
            results.push(benchmark_result);
        }
    }

    // Write the results to the output file.
    let bench_json_str = serde_json::to_string_pretty(&results).unwrap();
    let output_path = format!("{}/{}", relative_path, "../results.json");

    std::fs::write(output_path, &bench_json_str).unwrap();

    println!("Results written to ../results.json");

    Ok(())
}

fn parse_benchmarks(input_file: &String) -> Result<Vec<Benchmark>, Box<dyn Error>> {
    let file = File::open(input_file)?;
    let reader = BufReader::new(file);

    // Parse the JSON file into a Benchmark struct.
    let benchmarks: Vec<Benchmark> = serde_json::from_reader(reader)?;

    Ok(benchmarks)
}

fn run_benchmark(benchmark: &Benchmark) -> Vec<BenchmarkResult> {
    println!(
        "Running benchmark {0}: {1}",
        benchmark.name, benchmark.command
    );

    run_pre_run_command(benchmark);

    // Run unlogged benchmark, to warm up the system
    run_benchmark_command(benchmark);
    run_benchmark_command(benchmark);

    let mut parse_benchmark_results: Vec<BenchmarkResultRaw> = Vec::new();
    let format = Regex::new(r"\/\*BENCHMARK OUTPUT\*\/\nname:\s*(.+)\s*unit:\s*(.+)\s*value:\s*([0-9]*\.*[0-9]+)\nplot_group:\s*(.+)\s*\/\*BENCHMARK OUTPUT END\*\/\n").unwrap();
    // Split the output string by the separator, to get the individual sub-benchmarks
    //
    // Example string:
    //  /*BENCHMARK OUTPUT*/
    //  name: bench_sleep1
    //  unit: s
    //  value: 10.0
    //  plot_group:
    //  /*BENCHMARK OUTPUT END*/
    //  /*BENCHMARK OUTPUT*/
    //  name: bench_sleep2
    //  unit: s
    //  value: 20.0
    //  plot_group:
    //  /*BENCHMARK OUTPUT END*/
    // Run the benchmark for the first time to get all the benchmarks
    let mut output_str = run_benchmark_command(benchmark);
    for sub_benchmark_caps in format.captures_iter(&output_str) {
        // Check if the sub-benchmark has a plot group, if not, use the benchmark plot group
        let mut plot_group = benchmark.plot_group.clone();
        if sub_benchmark_caps[4].to_string() != " " {
            plot_group = sub_benchmark_caps[4].to_string();
        }

        // Initialize a BenchmarkResult struct to hold the parsed data
        let benchmark_result: BenchmarkResultRaw = BenchmarkResultRaw {
            name: sub_benchmark_caps[1].to_string(),
            unit: sub_benchmark_caps[2].to_string(),
            value: vec![sub_benchmark_caps[3].parse::<f64>().unwrap()],
            group: benchmark.group.clone(),
            plot_group: plot_group.clone(),
        };

        // Save the first iteration
        parse_benchmark_results.push(benchmark_result);
    }

    // Run the benchmark the specified number of times. Subtract one, since we already ran the benchmark once.
    for _ in 0..benchmark.iterations - 1 {
        // Run the benchmark command and return the result.
        output_str = run_benchmark_command(benchmark);

        for sub_benchmark_caps in format.captures_iter(&output_str) {
            // Check if the sub-benchmark has a plot group, if not, use the benchmark plot group
            let mut plot_group = benchmark.plot_group.clone();
            if sub_benchmark_caps[4].to_string() != " " {
                plot_group = sub_benchmark_caps[4].to_string();
            }

            // Initialize a BenchmarkResult struct to hold the parsed data
            let benchmark_result: BenchmarkResult = BenchmarkResult {
                name: sub_benchmark_caps[1].to_string(),
                unit: sub_benchmark_caps[2].to_string(),
                value: sub_benchmark_caps[3].parse::<f64>().unwrap(),
                group: benchmark.group.clone(),
                range: 0.0,
                plot_group: plot_group.clone(),
            };

            // Append the result to the corresponding benchmark in the results vector
            for result in &mut parse_benchmark_results {
                if result.name == sub_benchmark_caps[1].to_string() {
                    result.value.push(benchmark_result.value);
                }
            }
        }
    }

    // Convert the raw benchmark results to BenchmarkResult structs
    let mut processed_benchmark_results: Vec<BenchmarkResult> = Vec::new();
    for result in parse_benchmark_results {
        let mut average_time = 0.0;
        let mut times: Vec<f64> = Vec::new();

        // Calculate the average time and standard deviation
        for time in &result.value {
            average_time += time / benchmark.iterations as f64;
            times.push(*time);
        }

        let mut variance = 0.0;
        for time in &times {
            variance += (time - average_time).powi(2);
        }
        let standard_deviation = (variance / benchmark.iterations as f64).sqrt();

        // Create a BenchmarkResult struct with the parsed data
        let benchmark_result: BenchmarkResult = BenchmarkResult {
            name: result.name,
            unit: result.unit,
            value: average_time,
            group: result.group,
            range: standard_deviation,
            plot_group: result.plot_group,
        };

        // Append the result to the results vector
        processed_benchmark_results.push(benchmark_result);
    }

    if processed_benchmark_results.len() == 0 {
        println!("Error could not find result in output\n: {output_str}");
        panic!("Benchmark did not return any results");
    }

    processed_benchmark_results
}

fn run_benchmark_command(benchmark: &Benchmark) -> String {
    let mut child = Command::new("nice")
        .arg("-n0")
        .arg("sh")
        .arg("-c")
        .arg(&benchmark.command)
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .spawn()
        .expect("failed to execute process");

    match child.wait_timeout(TIMEOUT).unwrap() {
        Some(status) => {
            // Get the output of the command, if it terminated before the timeout
            let mut stdout = String::new();
            if let Some(mut stdout_handle) = child.stdout.take() {
                std::io::Read::read_to_string(&mut stdout_handle, &mut stdout).unwrap();
            }

            // If the command failed, print the output and error
            // Also disregard the error code 137, which parallel loves to throw
            if !status.success() && status.code().unwrap() != 137 {
                let mut stderr = String::new();
                if let Some(mut stderr_handle) = child.stderr.take() {
                    std::io::Read::read_to_string(&mut stderr_handle, &mut stderr).unwrap();
                }
                eprintln!(
                    "Command failed with output: \n{}\nAnd error: \n{}",
                    stdout, stderr
                );
                eprintln!("Exit code: {}", status.code().unwrap());
                panic!("Command failed");
            }
            stdout
        }
        None => {
            // The timeout elapsed
            child.kill().unwrap();

            // output the commands output message
            let mut stdout = String::new();
            if let Some(mut stdout_handle) = child.stdout.take() {
                std::io::Read::read_to_string(&mut stdout_handle, &mut stdout).unwrap();
            }

            let mut stderr = String::new();
            if let Some(mut stderr_handle) = child.stderr.take() {
                std::io::Read::read_to_string(&mut stderr_handle, &mut stderr).unwrap();
            }
            eprintln!(
                "Command failed with output: \n{}\nAnd error: \n{}",
                stdout, stderr
            );
            panic!("Command timed out");
        }
    }
}

fn run_pre_run_command(benchmark: &Benchmark) {
    if benchmark.pre_run_command != "" {
        println!(
            "Running pre-run command for benchmark {0}: {1}",
            benchmark.name, benchmark.pre_run_command
        );
        let mut child = Command::new("sh")
            .arg("-c")
            .arg(&benchmark.pre_run_command)
            .stdout(Stdio::piped())
            .stderr(Stdio::piped())
            .spawn()
            .expect("failed to execute pre-run command");

        match child.wait_timeout(TIMEOUT).unwrap() {
            Some(status) => {
                if !status.success() {
                    let mut stderr = String::new();
                    if let Some(mut stderr_handle) = child.stderr.take() {
                        std::io::Read::read_to_string(&mut stderr_handle, &mut stderr).unwrap();
                    }
                    eprintln!("Pre-run command failed with error: {}", stderr);
                    panic!("Pre-run command failed");
                }
            }
            None => {
                child.kill().unwrap();
                panic!("Pre-run command timed out");
            }
        }
    }
}

fn get_size(benchmark: &Benchmark) -> BenchmarkResult {
    let metadata = std::fs::metadata(&benchmark.path).expect("File not found or inaccessible");
    let size = metadata.len() as f64 / (1024 * 1024) as f64; // Convert to MB

    BenchmarkResult {
        name: benchmark.name.clone(),
        unit: "MB".to_string(),
        value: size,
        group: benchmark.group.clone(),
        range: 0.0,
        plot_group: benchmark.plot_group.clone(),
    }
}

fn external_time_benchmark(benchmark: &Benchmark, warmup: bool) -> BenchmarkResult {
    println!(
        "Running externally timed benchmark {0}: {1}",
        benchmark.name, benchmark.command
    );

    // Run the benchmark once to warm up the system
    if warmup {
        run_benchmark_command(benchmark);
        run_benchmark_command(benchmark);
    }

    let mut average_time = 0.0;
    let mut times: Vec<f64> = Vec::new();

    // Run the benchmark the specified number of times.
    for _ in 0..benchmark.iterations {
        // Run the benchmark with the external time command
        let now = Instant::now();
        run_benchmark_command(benchmark);
        let elapsed_time = now.elapsed();

        // Add the elapsed time to the average time
        average_time += elapsed_time.as_secs_f64() / benchmark.iterations as f64;

        // Add the elapsed time to the times vector
        times.push(elapsed_time.as_secs_f64());
    }

    // Determine the standard deviation of the times
    let mut variance = 0.0;
    for time in &times {
        variance += (time - average_time).powi(2);
    }
    let standard_deviation = (variance / benchmark.iterations as f64).sqrt();

    BenchmarkResult {
        name: benchmark.name.clone(),
        unit: "s".to_string(),
        value: average_time,
        group: benchmark.group.clone(),
        range: standard_deviation,
        plot_group: benchmark.plot_group.clone(),
    }
}
