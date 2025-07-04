window.BENCHMARK_DATA = {
  "lastUpdate": 1751648499244,
  "repoUrl": "https://github.com/hermit-os/kernel",
  "entries": {
    "Benchmark": [
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
          },
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
          "id": "4572428a4ecd2a828de10351340047eb4081c3c0",
          "message": "Merge pull request #1814 from hermit-os/select\n\nfeat(xtask): add support for http_server_select",
          "timestamp": "2025-07-04T16:25:14Z",
          "url": "https://github.com/hermit-os/kernel/commit/4572428a4ecd2a828de10351340047eb4081c3c0"
        },
        "date": 1751648498944,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "micro_benchmarks Build Time",
            "value": 70.299221272,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.96368408203125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 61.80068744000001,
            "unit": "ticks",
            "range": 3.7941827870611187,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 33.25329211999999,
            "unit": "ticks",
            "range": 2.1779455617582606,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.07083544,
            "unit": "ticks",
            "range": 1.376173138041172,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 79385.9457330014,
            "unit": "MByte/s",
            "range": 54851.18369133338,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 42141.12600303434,
            "unit": "MByte/s",
            "range": 29243.753699172958,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28782.266814524653,
            "unit": "MByte/s",
            "range": 23745.56896344714,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 79412.52454634492,
            "unit": "MByte/s",
            "range": 54868.36010740458,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 42433.527027435906,
            "unit": "MByte/s",
            "range": 29432.246464109776,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29500.523696624736,
            "unit": "MByte/s",
            "range": 24138.24037896062,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 70190.44752544198,
            "unit": "MByte/s",
            "range": 48863.879270999925,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 42223.7920837154,
            "unit": "MByte/s",
            "range": 29260.66026586937,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28551.150658698436,
            "unit": "MByte/s",
            "range": 23549.59139930253,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 70581.27608198184,
            "unit": "MByte/s",
            "range": 49117.35136442859,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 42506.51251610055,
            "unit": "MByte/s",
            "range": 29448.28137109545,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29290.09821021682,
            "unit": "MByte/s",
            "range": 23966.880707466324,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 69.222396226,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9230728149414062,
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
            "value": 69.95178645344592,
            "unit": "%",
            "range": 0.2664101403573518,
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
            "value": 13352.395258280596,
            "unit": "Ticks",
            "range": 193.9603187462344,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13352.395258280596,
            "unit": "Ticks",
            "range": 193.9603187462344,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 834.1264732544612,
            "unit": "Ticks",
            "range": 89.88220407131777,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 69.82439185,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9630813598632812,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 13.04,
            "unit": "ns",
            "range": 0.7199999999999999,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 15.200000000000001,
            "unit": "ns",
            "range": 1.9899748742132397,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          }
        ]
      }
    ]
  }
}