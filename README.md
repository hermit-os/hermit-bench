# hermit-bench

This repository is an action to benchmark [hermit-os](https://github.com/hermit-os/).

## Inputs
It requires `benchmark-file` as an input, which contains the path to a JSON benchmark file. 

## JSON file format
The JSON input file might look like this:
```json
[
  {
    "name": "dummy test",
    "command": "echo 'name: dummy test\nunit: n\nvalue: 1'",
    "iterations": 10
  },
  {
    "name": "other dummy test",
    "command": "echo 'name: other dummy test\nunit: n\nvalue: 10'",
  },
  {
    "name": "size of rusty_demo",
    "path": "/path/to/rusty_demo"
  }
]
```

The attributes are:
| Attribute  | Description | Default |
|---|---|---|
| `name`          | The name of the test                          | MUST BE SET AND UNIQUE |
| `command`       | The command to execute                        | ""    |
| `path`          | The path to the executable                    | ""    |
| `iterations`    | The number of times to execute the command    | 1     |
| `external_time` | Measure the time of the command externally    | false |


As can be seen, both `command` and `path` are optional. If `command` is set, it will be executed `iterations` times. If `path` is set, the size of the file at the given path will be measured (exactly one time regardless of `iterations`).

## Usage
The action will execute the commands in the JSON file and store the results in a file called `results.json`. This file can be passed to [github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark/) for further processing and plotting.

The outputs of any benchmark that is executed must follow the format:
```yaml
/*BENCHMARK OUTPUT*/
name: name
unit: unit
value: value
/*BENCHMARK OUTPUT END*/
```
It is recommended to use the crate [hermit_bench_output](https://crates.io/crates/hermit_bench_output) to generate the output.
