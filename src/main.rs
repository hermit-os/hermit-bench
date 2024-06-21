use regex::Regex;
use serde::{Deserialize, Serialize};
use std::{
    env,
    error::Error,
    f64,
    fs::File,
    io::{self, BufReader},
    time::Instant,
};

// Output format to be compatible with github-action-benchmark
#[derive(Serialize)]
struct BenchmarkResult {
    name: String,
    unit: String,
    value: f64,
}

const DEFAULT_ITERATIONS: u32 = 1;
fn default_iterations() -> u32 {
    DEFAULT_ITERATIONS
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
}

fn main() -> io::Result<()> {
    // Get the input file from the command line arguments.
    let args: Vec<String> = env::args().collect();
    let input_file = &args[1];
    let relative_path = &args[2];

    // Construct the full path to the input file.
    let input_file = &format!("{}{}", relative_path, input_file);

    // Parse the benchmarks from the input file.
    println!("Parsing benchmarks from {input_file}:");

    let mut benchmarks = parse_benchmarks(input_file).unwrap();

    let loaded_benchmarks_str = serde_json::to_string_pretty(&benchmarks).unwrap();
    println!("Loaded benchmarks:");
    println!("{loaded_benchmarks_str}");

    // Run the benchmarks.
    let mut results: Vec<BenchmarkResult> = Vec::new();
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
            benchmark.command = format!("cd {0} && {1}", relative_path, benchmark.command);

            if benchmark.external_time == true {
                // External time benchmark
                let benchmark_result = external_time_benchmark(benchmark);

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
            benchmark.path = format!("{}/{}", relative_path, benchmark.path);
            println!("Determining size of file at {0}", benchmark.path);
            let benchmark_result = get_size(benchmark);
            results.push(benchmark_result);
        }
    }

    // Write the results to the output file.
    let bench_json_str = serde_json::to_string_pretty(&results).unwrap();
    let output_path = format!("{}/{}", relative_path, "results.json");

    std::fs::write(output_path, &bench_json_str).unwrap();

    println!("Results written to results.json");

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

    let mut parsed_benchmark_results: Vec<BenchmarkResult> = Vec::new();
    let format = Regex::new(r"\/\*BENCHMARK OUTPUT\*\/\nname:\s*(.+)\s*unit:\s*(.+)\s*value:\s*([0-9]*\.*[0-9]+)\n\/\*BENCHMARK OUTPUT END\*\/\n").unwrap();

    // Run the benchmark the specified number of times.
    for i in 0..benchmark.iterations {
        // Run the benchmark command and return the result.
        let output_str = run_benchmark_command(benchmark);

        // Split the output string by the separator, to get the individual sub-benchmarks
        //
        // Example string:
        //  /*BENCHMARK OUTPUT*/
        //  name: bench_sleep1
        //  unit: s
        //  value: 10.0
        //  /*BENCHMARK OUTPUT END*/
        //  /*BENCHMARK OUTPUT*/
        //  name: bench_sleep2
        //  unit: s
        //  value: 20.0
        //  /*BENCHMARK OUTPUT END*/
        for sub_benchmark_caps in format.captures_iter(&output_str) {
            // Initialize a BenchmarkResult struct to hold the parsed data
            let mut benchmark_result: BenchmarkResult = BenchmarkResult {
                name: "".to_string(),
                unit: "".to_string(),
                value: 0.0,
            };

            // Parse name, unit and value of the benchmark
            benchmark_result.name = sub_benchmark_caps[1].to_string();
            benchmark_result.unit = sub_benchmark_caps[2].to_string();
            // Average the results
            benchmark_result.value =
                sub_benchmark_caps[3].parse::<f64>().unwrap() / benchmark.iterations as f64;

            // If this isn't the first iteration, add the value to the existing benchmark
            if i == 0 {
                for result in &mut parsed_benchmark_results {
                    if result.name == benchmark_result.name {
                        // Average the results
                        result.value += sub_benchmark_caps[3].parse::<f64>().unwrap()
                            / benchmark.iterations as f64;
                    }
                }
            }

            // If this is the first iteration, add the benchmark result to the vector, to register a "new" benchmark
            // Also check if the benchmark has a name, if not, don't add it
            if i == 0 && benchmark_result.name != "" {
                parsed_benchmark_results.push(benchmark_result);
            }
        }
    }

    parsed_benchmark_results
}

fn run_benchmark_command(benchmark: &Benchmark) -> String {
    let output = std::process::Command::new("sh")
        .arg("-c")
        .arg(&benchmark.command)
        .output()
        .expect("failed to execute process");

    String::from_utf8_lossy(&output.stdout).to_string()
}

fn get_size(benchmark: &Benchmark) -> BenchmarkResult {
    let metadata = std::fs::metadata(&benchmark.path).unwrap();
    let size = metadata.len() as f64;

    BenchmarkResult {
        name: benchmark.name.clone(),
        unit: "bytes".to_string(),
        value: size,
    }
}

fn external_time_benchmark(benchmark: &Benchmark) -> BenchmarkResult {
    println!(
        "Running externally timed benchmark {0}: {1}",
        benchmark.name, benchmark.command
    );

    // Run the benchmark with the external time command
    let now = Instant::now();
    run_benchmark_command(benchmark);
    let elapsed_time = now.elapsed();

    BenchmarkResult {
        name: benchmark.name.clone(),
        unit: "s".to_string(),
        value: elapsed_time.as_secs_f64(),
    }
}
