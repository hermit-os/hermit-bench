use serde::{Deserialize, Serialize};
use std::{
    env,
    error::Error,
    f64,
    fs::File,
    io::{self, BufReader},
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

            println!(
                "Running benchmark {0}: {1}",
                benchmark.name, benchmark.command
            );
            let benchmark_result = run_benchmark(benchmark);

            // Serialize the results to a JSON string for debugging.
            let results_str = serde_json::to_string_pretty(&benchmark_result).unwrap();
            println!("Results: {results_str}");

            // Add the results to the overall results vector.
            results.extend(benchmark_result);
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
    let mut parsed_benchmark_results: Vec<BenchmarkResult> = Vec::new();

    // Run the benchmark the specified number of times.
    for i in 0..benchmark.iterations {
        // Run the benchmark command and return the result.
        let output_str = run_benchmark_command(benchmark);

        // Split the output string by the "---" separator, to get the individual sub-benchmarks
        //
        // Example string:
        // "name: bench_sleep
        //  unit: s
        //  value: 10.0
        //  ---
        //  name: bench_sleep2
        //  unit: s
        //  value: 20.0"
        for sub_benchmark in output_str.split("---\n") {
            if sub_benchmark.is_empty() {
                continue;
            }
            // Split the sub_benchmark string by newline characters
            let lines: Vec<&str> = sub_benchmark.split('\n').collect();

            // Initialize a BenchmarkResult struct to hold the parsed data
            let mut benchmark_result: BenchmarkResult = BenchmarkResult {
                name: "".to_string(),
                unit: "".to_string(),
                value: 0.0,
            };

            // Iterate over each line and split by the colon
            for line in lines {
                if let Some((key, value)) = line.split_once(": ") {
                    // Save all information to results on first iteration
                    if i == 0 {
                        if key == "name" {
                            benchmark_result.name =
                                value.to_string() + " - " + benchmark.name.as_str();
                        } else if key == "unit" {
                            benchmark_result.unit = value.to_string()
                        } else if key == "value" {
                            let parsed_value: f64 = value.parse().unwrap();
                            // Average the results
                            benchmark_result.value += parsed_value / benchmark.iterations as f64;
                        }
                    } else if key == "name" {
                        benchmark_result.name = value.to_string();
                    }
                    // Save only value to results on subsequent iterations
                    else if key == "value" {
                        for result in &mut parsed_benchmark_results {
                            if result.name == benchmark_result.name {
                                let parsed_value: f64 = value.parse().unwrap();
                                result.value += parsed_value / benchmark.iterations as f64;
                                // Average the results
                            }
                        }
                    }
                }
            }

            // If this is the first iteration, add the benchmark result to the vector, to register a "new" benchmark
            if i == 0 {
                parsed_benchmark_results.push(benchmark_result);
            }
        }

        // Remove the last element, as it is part of hermit, i.e.:
        // "Number of interrupts
        // [0][FPU]: 2011
        // [1][Timer]: 1"
        parsed_benchmark_results.pop();
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
