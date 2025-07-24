use core::panic;
use regex::Regex;
use serde::{Deserialize, Serialize};
use std::{
    env,
    error::Error,
    f64,
    fs::File,
    io::{self, BufReader},
    process::{Command, Stdio},
    time::{Duration, Instant},
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
    runner_name: String,
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

// Input format for the hermit yaml file
//
// A benchmark can either use a path to a file or a command to run.
// If a path is provided, the benchmark will determine the size of the file.
// If a command is provided, the benchmark will run the command and parse the output.
#[derive(Serialize, Deserialize, Debug)]
struct Benchmark {
    name: String,
    bin: String,
    hermit_rs_manifest_path: String, // The path to the Cargo.toml file of the benchmark binary.

    #[serde(default)]
    command: String,

    #[serde(default = "default_iterations")]
    iterations: u32, // The number of iterations to run the benchmark. Default is 1.

    #[serde(default = "bool::default")] // Default is false
    external_time: bool, // If true, the benchmark will be run with the external time command

    #[serde(default = "default_group")]
    group: String,

    #[serde(default = "default_plot_group")]
    plot_group: String,

    #[serde(default = "String::new")]
    pre_run_command: String,
}

fn main() -> io::Result<()> {
    // Get the input file from the command line arguments.
    let args: Vec<String> = env::args().collect();

    if args.len() < 4 {
        return Err(io::Error::new(
            io::ErrorKind::InvalidInput,
            "Usage: <program> <input_file> <relative_path> <runner_name>",
        ));
    }

    let input_file = &args[1];
    let relative_path = &args[2];
    let runner_name = &args[3];

    // Initialize the results vector.
    let mut results: Vec<BenchmarkResult> = Vec::new();

    // Construct the full path to the input file.
    let input_file = &format!("{relative_path}/{input_file}");

    // Parse the benchmarks from the input file.
    println!("Parsing benchmarks from {input_file}:");

    let mut benchmarks = parse_benchmarks(input_file).unwrap();

    let loaded_benchmarks_str = serde_yaml::to_string(&benchmarks).unwrap();
    println!("Loaded benchmarks:");
    println!("{loaded_benchmarks_str}");

    // Run the benchmarks.
    for benchmark in &mut benchmarks {
        // Build the benchmark, only if the build process is not in results
        if !results
            .iter()
            .any(|r| r.name == format!("{} File Size", benchmark.bin))
        {
            // Clear the target directory to ensure a clean build, but only if it exists
            let target_dir = format!("{relative_path}/target");
            if std::path::Path::new(&target_dir).exists() {
                std::fs::remove_dir_all(&target_dir).expect("Failed to clear target directory");
            }

            let build_time = build_binary(
                benchmark.bin.clone(),
                benchmark.hermit_rs_manifest_path.clone(),
                relative_path.clone(),
            );
            results.push(build_time);

            let file_size = get_size(benchmark, relative_path.to_string());
            results.push(file_size);
        }

        // Before command, change the working directory to the relative path
        benchmark.command = format!("cd {0} && {1}", relative_path, benchmark.command);

        if !benchmark.pre_run_command.is_empty() {
            // If there is a pre-run command, adapt it to the relative path
            benchmark.pre_run_command =
                format!("cd {0} && {1}", relative_path, benchmark.pre_run_command);
        }

        if benchmark.external_time {
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
    }

    // Add the runner name to each result
    for result in &mut results {
        result.runner_name = runner_name.clone();
    }

    // Write the results to the output file.
    let bench_json_str = serde_json::to_string_pretty(&results).unwrap();
    let output_path = format!("{}/{}", relative_path, "results.json");

    std::fs::write(output_path, &bench_json_str).unwrap();

    println!("Results written to ../results.json");

    Ok(())
}

fn parse_benchmarks(input_file: &String) -> Result<Vec<Benchmark>, Box<dyn Error>> {
    let file = File::open(input_file)?;
    let reader = BufReader::new(file);

    // Parse the JSON file into a Benchmark struct.
    let benchmarks: Vec<Benchmark> = serde_yaml::from_reader(reader)?;

    Ok(benchmarks)
}

fn run_benchmark(benchmark: &Benchmark) -> Vec<BenchmarkResult> {
    if !benchmark.pre_run_command.is_empty() {
        run_pre_run_command(benchmark);
    }

    println!(
        "Running benchmark {0}: {1}",
        benchmark.name, benchmark.command
    );

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
                runner_name: "".to_string(),
            };

            // Append the result to the corresponding benchmark in the results vector
            for result in &mut parse_benchmark_results {
                if result.name == sub_benchmark_caps[1] {
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
            runner_name: "".to_string(),
        };

        // Append the result to the results vector
        processed_benchmark_results.push(benchmark_result);
    }

    if processed_benchmark_results.is_empty() {
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
                eprintln!("Command failed with output: \n{stdout}\nAnd error: \n{stderr}");
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
            eprintln!("Command failed with output: \n{stdout}\nAnd error: \n{stderr}");
            panic!("Command timed out");
        }
    }
}

fn run_pre_run_command(benchmark: &Benchmark) {
    if !benchmark.pre_run_command.is_empty() {
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
                    eprintln!("Pre-run command failed with error: {stderr}");
                    panic!("Pre-run command failed");
                }
            }
            None => {
                child.kill().unwrap();
                panic!("Pre-run command timed out");
            }
        }

        println!(
            "Pre-run command for benchmark {0} completed successfully.",
            benchmark.name
        );
    }
}

fn build_binary(
    bin: String,
    hermit_rs_manifest_path: String,
    relative_path: String,
) -> BenchmarkResult {
    let build_benchmark = Benchmark {
        name: format!("{} Build Time", bin.clone()),
        bin: bin.clone(),
        hermit_rs_manifest_path: hermit_rs_manifest_path.clone(),
        command: format!(
            "cd {relative_path} && cargo build --manifest-path {hermit_rs_manifest_path} --bin {bin} \
            -Zbuild-std=core,alloc,std,panic_abort \
            --target x86_64-unknown-hermit \
            --release"
        ),
        iterations: 1,
        external_time: true,
        group: "Build".to_string(),
        plot_group: "none".to_string(),
        pre_run_command: "".to_string(),
    };

    external_time_benchmark(&build_benchmark, false)
}

fn get_size(benchmark: &Benchmark, relative_path: String) -> BenchmarkResult {
    let metadata = std::fs::metadata(format!(
        "{}/target/x86_64-unknown-hermit/release/{}",
        relative_path, benchmark.bin
    ))
    .expect("File not found or inaccessible");
    let size = metadata.len() as f64 / (1024 * 1024) as f64; // Convert to MB

    BenchmarkResult {
        name: format!("{} File Size", benchmark.bin.clone()),
        unit: "MB".to_string(),
        value: size,
        group: "File Size".to_string(),
        range: 0.0,
        plot_group: "none".to_string(),
        runner_name: "".to_string(),
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
        runner_name: "".to_string(),
    }
}
