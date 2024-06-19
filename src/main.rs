use std::{env, error::Error, f64, fs::File, io::{self, BufReader}};
use serde::{Deserialize, Serialize};

#[derive(Serialize)]
struct BenchmarkResult {
    name: String,
	unit: String,
    value: f64,
}

#[derive(Serialize, Deserialize, Debug)]
struct Benchmark {
    name: String,
    command: String,
}

fn main() -> io::Result<()> {
    // Get the input file from the command line arguments.
    let args: Vec<String> = env::args().collect();
    let input_file = &args[1];

    // Parse the benchmarks from the input file.
    eprintln!("Parsing benchmarks from {input_file}:");

    let benchmarks = parse_benchmarks(input_file).unwrap();

    let loaded_benchmarks_str = serde_json::to_string_pretty(&benchmarks).unwrap();
    eprintln!("Loaded benchmarks:");
	eprintln!("{loaded_benchmarks_str}");


    // Run the benchmarks.
	eprintln!("Running benchmarks:");

    let mut results: Vec<BenchmarkResult> = Vec::new();
    for benchmark in &benchmarks {
        eprintln!("Running benchmark {0}: {1}", benchmark.name, benchmark.command);
        let benchmark_result = run_benchmark(benchmark);

        // Serialize the results to a JSON string for debugging.
        let results_str = serde_json::to_string_pretty(&benchmark_result).unwrap();
        eprintln!("Results: {results_str}");

        // Add the results to the overall results vector.
        results.extend(benchmark_result);
    }

    // Write the results to a file.
    let bench_json_str = serde_json::to_string_pretty(&results).unwrap();
	eprintln!("{bench_json_str}");
    std::fs::write("results.json", &bench_json_str).unwrap();

    eprintln!("Results written to results.json");

	Ok(())
}

fn parse_benchmarks(input_file: &String) -> Result<Vec<Benchmark>, Box<dyn Error>> {
    let file = File::open(input_file)?;
    let reader = BufReader::new(file);

    // Parse the JSON file into a Benchmark struct.
    let benchmarks: Vec<Benchmark> = serde_json::from_reader(reader)?;

    Ok(benchmarks)
}

fn run_benchmark(benchmark: &Benchmark) -> Vec<BenchmarkResult>{
    // Run the benchmark command and return the result.
    let output = std::process::Command::new("sh")
        .arg("-c")
        .arg(&benchmark.command)
        .output()
        .expect("failed to execute process");

    let output_str = String::from_utf8_lossy(&output.stdout);

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
    
    let mut parsed_benchmark_results: Vec<BenchmarkResult> = Vec::new();

    for sub_benchmark in output_str.split("---\n") {       
        // Split the sub_benchmark string by newline characters
        let lines: Vec<&str> = sub_benchmark.split('\n').collect();
        
        // Initialize a BenchmarkResult struct to hold the parsed data
        let mut benchmark_result: BenchmarkResult = BenchmarkResult {
            name: "".to_string(),
            unit: "".to_string(),
            value: 0.0,
        };
        
        let mut count = 0;
        // Iterate over each line and split by the colon
        for line in lines {
            count += 1;
            if let Some((key, value)) = line.split_once(": ") {
                match count {
                    1=>benchmark_result.name = value.to_string(),
                    2=>benchmark_result.unit = value.to_string(),
                    3=> {
                        let parsed_value: f64 = value.parse().unwrap();
                        benchmark_result.value = parsed_value;
                    },
                }
            }
        }

        parsed_benchmark_results.push(benchmark_result);
    }
    
    parsed_benchmark_results
}