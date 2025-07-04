window.BENCHMARK_DATA = {
  "lastUpdate": 1751628007517,
  "repoUrl": "https://github.com/hermit-os/kernel",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mkroening@posteo.net",
            "name": "Martin Kröning",
            "username": "mkroening"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00286ad5d2890cc6952d7faf4d3be0c63ebf1e50",
          "message": "Merge pull request #1811 from hermit-os/ci-no-submodule\n\nci: don't populate overridden submodules",
          "timestamp": "2025-07-03T15:57:25Z",
          "tree_id": "05302e4e70583b2c55f4e7fe2c8f4f2b0c030468",
          "url": "https://github.com/hermit-os/kernel/commit/00286ad5d2890cc6952d7faf4d3be0c63ebf1e50"
        },
        "date": 1751559766572,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 81.530402961,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8544464111328125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.8817172649600001,
            "unit": "s",
            "range": 0.038931321647636956,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.8995681256,
            "unit": "s",
            "range": 0.02820011676888366,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.9075163659600002,
            "unit": "s",
            "range": 0.026311928730758157,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 65.830747222,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9557647705078125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 85.59368323802165,
            "unit": "%",
            "range": 11.675146943531077,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 60.65998838226059,
            "unit": "%",
            "range": 9.367182509437034,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 44.14294310488244,
            "unit": "%",
            "range": 4.631263845492297,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Kröning",
            "username": "mkroening",
            "email": "mkroening@posteo.net"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "260c073305fe7cc391a37359e7b8d3a04da785a1",
          "message": "Merge pull request #1812 from CarlWachter/feat/cb\n\nbench: publish benchmark data in separate workflow",
          "timestamp": "2025-07-04T10:45:23Z",
          "url": "https://github.com/hermit-os/kernel/commit/260c073305fe7cc391a37359e7b8d3a04da785a1"
        },
        "date": 1751628003519,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 76.845800516,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8544464111328125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.9866419053999997,
            "unit": "s",
            "range": 0.03178731276888651,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 1.0032984402400003,
            "unit": "s",
            "range": 0.029365117228132575,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 1.0166341830399999,
            "unit": "s",
            "range": 0.03865740374292385,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 73.928383951,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9557647705078125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 91.241180306012,
            "unit": "%",
            "range": 10.293156697451174,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 62.31430734964833,
            "unit": "%",
            "range": 8.619109627507902,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 43.82359262977929,
            "unit": "%",
            "range": 5.664002067516324,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Kröning",
            "username": "mkroening",
            "email": "mkroening@posteo.net"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "260c073305fe7cc391a37359e7b8d3a04da785a1",
          "message": "Merge pull request #1812 from CarlWachter/feat/cb\n\nbench: publish benchmark data in separate workflow",
          "timestamp": "2025-07-04T10:45:23Z",
          "url": "https://github.com/hermit-os/kernel/commit/260c073305fe7cc391a37359e7b8d3a04da785a1"
        },
        "date": 1751628006789,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "micro_benchmarks Build Time",
            "value": 77.281734716,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9636688232421875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 65.77786168,
            "unit": "ticks",
            "range": 3.08922082678613,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 34.05732584,
            "unit": "ticks",
            "range": 1.6007877513424869,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.626675359999997,
            "unit": "ticks",
            "range": 1.1212947255429635,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 74071.54867712218,
            "unit": "MByte/s",
            "range": 51298.469632331486,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41671.221383203105,
            "unit": "MByte/s",
            "range": 28953.97070110956,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28183.83100248883,
            "unit": "MByte/s",
            "range": 23127.340978291504,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 73377.06157638507,
            "unit": "MByte/s",
            "range": 50853.03709044918,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41909.142654195435,
            "unit": "MByte/s",
            "range": 29114.604723063407,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28925.26183519883,
            "unit": "MByte/s",
            "range": 23564.17464311966,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 66148.08941875875,
            "unit": "MByte/s",
            "range": 46097.40520660512,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41089.86303501898,
            "unit": "MByte/s",
            "range": 28495.437621867455,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28178.779226930637,
            "unit": "MByte/s",
            "range": 23125.082651847348,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 66625.44989611923,
            "unit": "MByte/s",
            "range": 46410.512040461,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41334.744323155406,
            "unit": "MByte/s",
            "range": 28668.146687251414,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28886.49410465223,
            "unit": "MByte/s",
            "range": 23531.11630318471,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 73.243042144,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.92303466796875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "Allocation success",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Deallocation success",
            "value": 70.06640352489524,
            "unit": "%",
            "range": 0.25613907600821256,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Pre-fail Allocations",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time",
            "value": 10973.09755751411,
            "unit": "Ticks",
            "range": 133.1775907538336,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 10973.09755751411,
            "unit": "Ticks",
            "range": 133.1775907538336,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 804.5891540913836,
            "unit": "Ticks",
            "range": 13.393136887662115,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 72.573806951,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9630661010742188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 14.019999999999996,
            "unit": "ns",
            "range": 0.5473572873361601,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 16.300000000000004,
            "unit": "ns",
            "range": 1.1180339887498951,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          }
        ]
      }
    ]
  }
}