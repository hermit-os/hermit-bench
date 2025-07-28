# hermit-bench

This repository is an action to benchmark [hermit-os](https://github.com/hermit-os/).

## Inputs
It requires `benchmark-file` as an input, which contains the path to a yaml benchmark file. 

## YAML file format
The yaml input file might look like this:
```yaml
- name: test
  bin: rusty_demo
  command: cargo run --release --bin rusty_demo
  iterations: 10
  group: General
  plot_group: Demo results
  hermit_rs_manifest_path: examples/demo/Cargo.toml
- name: other test
  bin: other_demo
  pre_run_command: ls -l examples/other_demo
  command: cargo run --release --bin other_demo
  group: General
  plot_group: Other test results
```

The attributes are:
| Attribute  | Description | Default |
|---|---|---|
| `name`            | The name of the test                          | MUST BE SET AND UNIQUE |
| `bin`             | The name of the required binary               | MUST BE SET |
| `hermit_rs_manifest_path`   | The path to the Cargo.toml                    | MUST BE SET |
| `command`         | The command to execute                        | ""    |
| `iterations`      | The number of times to execute the command    | 1     |
| `external_time`   | Measure the time of the command externally    | false |
| `pre_run_command` | Command to run before the main command        | ""    |
| `group`           | The group to which the benchmark belongs      | "General"    |
| `plot_group`      | The group for plotting the results            | "none"    |


As can be seen, both `command` and `path` are optional. If `command` is set, it will be executed `iterations` times. If `path` is set, the size of the file at the given path will be measured (exactly one time regardless of `iterations`).

## Usage
The action will execute the commands in the JSON file and store the results in a file called `results.json`. This file can be passed to [github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark/) for further processing and plotting.

The outputs of any benchmark that is executed must follow the format:
```yaml
/*BENCHMARK OUTPUT*/
name: name
unit: unit
value: value
plot_group: group (empty equals no group)
/*BENCHMARK OUTPUT END*/
```
It is recommended to use the crate [hermit_bench_output](https://crates.io/crates/hermit_bench_output) to generate the output.

## License

Licensed under either of

 * Apache License, Version 2.0
   ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
 * MIT license
   ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.
