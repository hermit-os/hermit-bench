use hermit_bench_output::log_benchmark_data_with_group;
use hermit_bench_output::log_benchmark_data;

fn main() {
    log_benchmark_data_with_group("bench_1", "s", 10.0, "Test Plot Group 2");

    log_benchmark_data("bench_2", "s", 20.0);
}
