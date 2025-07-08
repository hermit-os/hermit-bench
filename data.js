window.BENCHMARK_DATA = {
  "lastUpdate": 1752007359209,
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
        "date": 1751648499267,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 74.543576223,
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
            "value": 0.9824590931999999,
            "unit": "s",
            "range": 0.0413224904475049,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 1.0037010767199999,
            "unit": "s",
            "range": 0.04506567131686341,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.9970628522399998,
            "unit": "s",
            "range": 0.028645187015552267,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 74.646377181,
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
            "value": 90.2042296892978,
            "unit": "%",
            "range": 11.156718882341204,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 62.975695241559514,
            "unit": "%",
            "range": 7.7007618648242016,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 45.27382638436325,
            "unit": "%",
            "range": 3.523459001426682,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
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
          },
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
          "id": "8fc1f9da7597a5aeb15e51a0dd2d0a0e0897d703",
          "message": "Merge pull request #1817 from hermit-os/qemu-no_install_recommends\n\nci: don't install recommended qemu packages",
          "timestamp": "2025-07-05T13:42:13Z",
          "url": "https://github.com/hermit-os/kernel/commit/8fc1f9da7597a5aeb15e51a0dd2d0a0e0897d703"
        },
        "date": 1751725014613,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 73.153316898,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8543701171875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.99277688912,
            "unit": "s",
            "range": 0.02394475872744363,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 1.0064972675200003,
            "unit": "s",
            "range": 0.018333099395607406,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 1.0031196818399999,
            "unit": "s",
            "range": 0.024754319832078066,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 71.563490589,
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
            "value": 91.34039967804479,
            "unit": "%",
            "range": 5.307826125619554,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 62.74647133548873,
            "unit": "%",
            "range": 3.9560665299164652,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 42.62959694282763,
            "unit": "%",
            "range": 4.87975053441215,
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
          "id": "8fc1f9da7597a5aeb15e51a0dd2d0a0e0897d703",
          "message": "Merge pull request #1817 from hermit-os/qemu-no_install_recommends\n\nci: don't install recommended qemu packages",
          "timestamp": "2025-07-05T13:42:13Z",
          "url": "https://github.com/hermit-os/kernel/commit/8fc1f9da7597a5aeb15e51a0dd2d0a0e0897d703"
        },
        "date": 1751725014756,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "micro_benchmarks Build Time",
            "value": 76.291657318,
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
            "value": 67.54926056,
            "unit": "ticks",
            "range": 4.559720369875698,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 34.859466839999996,
            "unit": "ticks",
            "range": 1.8133230770305588,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.68262496,
            "unit": "ticks",
            "range": 1.31656962259765,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 73725.15217092984,
            "unit": "MByte/s",
            "range": 50874.57326889227,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 40926.72598423727,
            "unit": "MByte/s",
            "range": 28424.30535518313,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 25768.798055909963,
            "unit": "MByte/s",
            "range": 21345.247017543978,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 73340.93986531794,
            "unit": "MByte/s",
            "range": 50593.1916700045,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41157.12488333239,
            "unit": "MByte/s",
            "range": 28583.56695395819,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26447.453989900623,
            "unit": "MByte/s",
            "range": 21746.241839056947,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 66407.12756552325,
            "unit": "MByte/s",
            "range": 46004.59272347422,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 40705.19093866878,
            "unit": "MByte/s",
            "range": 28313.81287519854,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 26282.76467846422,
            "unit": "MByte/s",
            "range": 21884.95572660072,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 66818.86199681506,
            "unit": "MByte/s",
            "range": 46334.24232291721,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41092.97643334074,
            "unit": "MByte/s",
            "range": 28567.80874955975,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 26730.676114572267,
            "unit": "MByte/s",
            "range": 22056.153409505863,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 73.816352244,
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
            "value": 70.0078549065278,
            "unit": "%",
            "range": 0.2765672510798669,
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
            "value": 14200.491903714466,
            "unit": "Ticks",
            "range": 324.18614829059834,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14200.491903714466,
            "unit": "Ticks",
            "range": 324.18614829059834,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1128.7814268422471,
            "unit": "Ticks",
            "range": 226.00907394259346,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 72.638973721,
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
            "value": 14.099999999999993,
            "unit": "ns",
            "range": 0.5385164807134502,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 22.58,
            "unit": "ns",
            "range": 16.796535357031214,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "startup_benchmark Build Time",
            "value": 73.153316898,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8543701171875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.99277688912,
            "unit": "s",
            "range": 0.02394475872744363,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 1.0064972675200003,
            "unit": "s",
            "range": 0.018333099395607406,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 1.0031196818399999,
            "unit": "s",
            "range": 0.024754319832078066,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 71.563490589,
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
            "value": 91.34039967804479,
            "unit": "%",
            "range": 5.307826125619554,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 62.74647133548873,
            "unit": "%",
            "range": 3.9560665299164652,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 42.62959694282763,
            "unit": "%",
            "range": 4.87975053441215,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "startup_benchmark Build Time",
            "value": 73.153316898,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8543701171875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.99277688912,
            "unit": "s",
            "range": 0.02394475872744363,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 1.0064972675200003,
            "unit": "s",
            "range": 0.018333099395607406,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 1.0031196818399999,
            "unit": "s",
            "range": 0.024754319832078066,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 71.563490589,
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
            "value": 91.34039967804479,
            "unit": "%",
            "range": 5.307826125619554,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 62.74647133548873,
            "unit": "%",
            "range": 3.9560665299164652,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 42.62959694282763,
            "unit": "%",
            "range": 4.87975053441215,
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
          "id": "be0a653ebde4093fa25c4d217055af77e3bc53df",
          "message": "Merge pull request #1799 from hermit-os/kernel_function\n\nrefactor: inline kernel_function macro to allow non-Copy arguments",
          "timestamp": "2025-07-06T14:11:09Z",
          "url": "https://github.com/hermit-os/kernel/commit/be0a653ebde4093fa25c4d217055af77e3bc53df"
        },
        "date": 1751813012381,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "micro_benchmarks Build Time",
            "value": 70.423940623,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9643630981445312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 60.239108,
            "unit": "ticks",
            "range": 3.064021237379767,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 31.863181599999997,
            "unit": "ticks",
            "range": 1.9283103693135704,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 14.90118408,
            "unit": "ticks",
            "range": 1.317613256323901,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 81525.13961839692,
            "unit": "MByte/s",
            "range": 56187.029236524984,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 42926.86055120441,
            "unit": "MByte/s",
            "range": 29715.308410288475,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28315.377698544304,
            "unit": "MByte/s",
            "range": 23305.835424805162,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 81983.14226389957,
            "unit": "MByte/s",
            "range": 56500.99029564935,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43135.365492647354,
            "unit": "MByte/s",
            "range": 29857.756385844226,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29073.623720408657,
            "unit": "MByte/s",
            "range": 23753.58764129777,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 71810.4177191196,
            "unit": "MByte/s",
            "range": 50069.0615430781,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43009.84347058947,
            "unit": "MByte/s",
            "range": 29784.756273259794,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28887.29315538103,
            "unit": "MByte/s",
            "range": 23767.73212002371,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 72206.1136580297,
            "unit": "MByte/s",
            "range": 50360.22764895478,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43219.936442817525,
            "unit": "MByte/s",
            "range": 29927.790629862673,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29651.255047865638,
            "unit": "MByte/s",
            "range": 24214.308465431666,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 65.526902951,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9230499267578125,
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
            "value": 69.94303166208566,
            "unit": "%",
            "range": 0.2969770592480086,
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
            "value": 13283.140004509421,
            "unit": "Ticks",
            "range": 172.79478554690604,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13283.140004509421,
            "unit": "Ticks",
            "range": 172.79478554690604,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 841.5903779637114,
            "unit": "Ticks",
            "range": 118.38279158927345,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 65.599671061,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.963775634765625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 12.620000000000005,
            "unit": "ns",
            "range": 0.9141115905621154,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 15.359999999999998,
            "unit": "ns",
            "range": 6.608358343794622,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
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
          "id": "be0a653ebde4093fa25c4d217055af77e3bc53df",
          "message": "Merge pull request #1799 from hermit-os/kernel_function\n\nrefactor: inline kernel_function macro to allow non-Copy arguments",
          "timestamp": "2025-07-06T14:11:09Z",
          "url": "https://github.com/hermit-os/kernel/commit/be0a653ebde4093fa25c4d217055af77e3bc53df"
        },
        "date": 1751813013679,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 73.749347753,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8544235229492188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 1.0102729131600001,
            "unit": "s",
            "range": 0.023490423305366687,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.99403871388,
            "unit": "s",
            "range": 0.028625919928919913,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 1.00867975128,
            "unit": "s",
            "range": 0.04063257881908313,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 73.765001484,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9564895629882812,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 93.09006353179723,
            "unit": "%",
            "range": 6.522739823824688,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 64.83044402854932,
            "unit": "%",
            "range": 5.558405307373944,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 45.189560624928454,
            "unit": "%",
            "range": 3.2463112965684453,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 70.423940623,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9643630981445312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 60.239108,
            "unit": "ticks",
            "range": 3.064021237379767,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 31.863181599999997,
            "unit": "ticks",
            "range": 1.9283103693135704,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 14.90118408,
            "unit": "ticks",
            "range": 1.317613256323901,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 81525.13961839692,
            "unit": "MByte/s",
            "range": 56187.029236524984,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 42926.86055120441,
            "unit": "MByte/s",
            "range": 29715.308410288475,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28315.377698544304,
            "unit": "MByte/s",
            "range": 23305.835424805162,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 81983.14226389957,
            "unit": "MByte/s",
            "range": 56500.99029564935,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43135.365492647354,
            "unit": "MByte/s",
            "range": 29857.756385844226,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29073.623720408657,
            "unit": "MByte/s",
            "range": 23753.58764129777,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 71810.4177191196,
            "unit": "MByte/s",
            "range": 50069.0615430781,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43009.84347058947,
            "unit": "MByte/s",
            "range": 29784.756273259794,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28887.29315538103,
            "unit": "MByte/s",
            "range": 23767.73212002371,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 72206.1136580297,
            "unit": "MByte/s",
            "range": 50360.22764895478,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43219.936442817525,
            "unit": "MByte/s",
            "range": 29927.790629862673,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29651.255047865638,
            "unit": "MByte/s",
            "range": 24214.308465431666,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 65.526902951,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9230499267578125,
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
            "value": 69.94303166208566,
            "unit": "%",
            "range": 0.2969770592480086,
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
            "value": 13283.140004509421,
            "unit": "Ticks",
            "range": 172.79478554690604,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13283.140004509421,
            "unit": "Ticks",
            "range": 172.79478554690604,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 841.5903779637114,
            "unit": "Ticks",
            "range": 118.38279158927345,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 65.599671061,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.963775634765625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 12.620000000000005,
            "unit": "ns",
            "range": 0.9141115905621154,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 15.359999999999998,
            "unit": "ns",
            "range": 6.608358343794622,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 70.423940623,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9643630981445312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 60.239108,
            "unit": "ticks",
            "range": 3.064021237379767,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 31.863181599999997,
            "unit": "ticks",
            "range": 1.9283103693135704,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 14.90118408,
            "unit": "ticks",
            "range": 1.317613256323901,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 81525.13961839692,
            "unit": "MByte/s",
            "range": 56187.029236524984,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 42926.86055120441,
            "unit": "MByte/s",
            "range": 29715.308410288475,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28315.377698544304,
            "unit": "MByte/s",
            "range": 23305.835424805162,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 81983.14226389957,
            "unit": "MByte/s",
            "range": 56500.99029564935,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43135.365492647354,
            "unit": "MByte/s",
            "range": 29857.756385844226,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29073.623720408657,
            "unit": "MByte/s",
            "range": 23753.58764129777,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 71810.4177191196,
            "unit": "MByte/s",
            "range": 50069.0615430781,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43009.84347058947,
            "unit": "MByte/s",
            "range": 29784.756273259794,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28887.29315538103,
            "unit": "MByte/s",
            "range": 23767.73212002371,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 72206.1136580297,
            "unit": "MByte/s",
            "range": 50360.22764895478,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43219.936442817525,
            "unit": "MByte/s",
            "range": 29927.790629862673,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29651.255047865638,
            "unit": "MByte/s",
            "range": 24214.308465431666,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 65.526902951,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9230499267578125,
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
            "value": 69.94303166208566,
            "unit": "%",
            "range": 0.2969770592480086,
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
            "value": 13283.140004509421,
            "unit": "Ticks",
            "range": 172.79478554690604,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13283.140004509421,
            "unit": "Ticks",
            "range": 172.79478554690604,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 841.5903779637114,
            "unit": "Ticks",
            "range": 118.38279158927345,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 65.599671061,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.963775634765625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 12.620000000000005,
            "unit": "ns",
            "range": 0.9141115905621154,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 15.359999999999998,
            "unit": "ns",
            "range": 6.608358343794622,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
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
          "id": "a73c85744b0f097751aae7dea5c12eea9e8630cd",
          "message": "Merge pull request #1809 from Gelbpunkt/aarch64-fpu\n\nfix(arch/aarch64): Restore and save FPU state",
          "timestamp": "2025-07-08T15:05:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/a73c85744b0f097751aae7dea5c12eea9e8630cd"
        },
        "date": 1751989306015,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 68.071178827,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8545761108398438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.8983806602000001,
            "unit": "s",
            "range": 0.024344655274633486,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.8937568871599999,
            "unit": "s",
            "range": 0.018392651752264223,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.9053254853599999,
            "unit": "s",
            "range": 0.024124269904550598,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 68.305081661,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9564285278320312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 89.51650535458343,
            "unit": "%",
            "range": 11.876706390556372,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 63.66267310188053,
            "unit": "%",
            "range": 8.347896125018988,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 43.33428185593859,
            "unit": "%",
            "range": 4.072779835443207,
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
          "id": "a73c85744b0f097751aae7dea5c12eea9e8630cd",
          "message": "Merge pull request #1809 from Gelbpunkt/aarch64-fpu\n\nfix(arch/aarch64): Restore and save FPU state",
          "timestamp": "2025-07-08T15:05:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/a73c85744b0f097751aae7dea5c12eea9e8630cd"
        },
        "date": 1751989315078,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "micro_benchmarks Build Time",
            "value": 92.457402379,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9642791748046875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 68.05851552,
            "unit": "ticks",
            "range": 3.723496356331055,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 35.426680080000004,
            "unit": "ticks",
            "range": 1.5833431748872362,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.927982479999999,
            "unit": "ticks",
            "range": 1.410483968449556,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 72071.05171603871,
            "unit": "MByte/s",
            "range": 49837.12821703044,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41215.40958131004,
            "unit": "MByte/s",
            "range": 28690.56650401822,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26016.354030766965,
            "unit": "MByte/s",
            "range": 21724.34264100918,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 71967.76039951209,
            "unit": "MByte/s",
            "range": 49766.35197279268,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41500.99324276391,
            "unit": "MByte/s",
            "range": 28882.527967599428,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26749.104581105446,
            "unit": "MByte/s",
            "range": 22145.845034857673,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 63674.81605563446,
            "unit": "MByte/s",
            "range": 44415.97612435864,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41325.25033316616,
            "unit": "MByte/s",
            "range": 28755.262049545247,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 25927.94848995337,
            "unit": "MByte/s",
            "range": 21639.252467590697,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 64012.47839329679,
            "unit": "MByte/s",
            "range": 44635.44185413451,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41586.61150451542,
            "unit": "MByte/s",
            "range": 28927.652046195646,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 26569.36325908375,
            "unit": "MByte/s",
            "range": 21974.674342298473,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 90.377434465,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9232025146484375,
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
            "value": 70.00652780799241,
            "unit": "%",
            "range": 0.27201598449727843,
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
            "value": 13344.430549571496,
            "unit": "Ticks",
            "range": 252.4707868471256,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13344.430549571496,
            "unit": "Ticks",
            "range": 252.4707868471256,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 833.9613205991669,
            "unit": "Ticks",
            "range": 85.49310031380467,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 89.962671679,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9637069702148438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 14.379999999999997,
            "unit": "ns",
            "range": 0.6289674077406553,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 20.86,
            "unit": "ns",
            "range": 14.222531420250052,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "startup_benchmark Build Time",
            "value": 68.071178827,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8545761108398438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.8983806602000001,
            "unit": "s",
            "range": 0.024344655274633486,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.8937568871599999,
            "unit": "s",
            "range": 0.018392651752264223,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.9053254853599999,
            "unit": "s",
            "range": 0.024124269904550598,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 68.305081661,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9564285278320312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 89.51650535458343,
            "unit": "%",
            "range": 11.876706390556372,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 63.66267310188053,
            "unit": "%",
            "range": 8.347896125018988,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 43.33428185593859,
            "unit": "%",
            "range": 4.072779835443207,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "startup_benchmark Build Time",
            "value": 68.071178827,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8545761108398438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.8983806602000001,
            "unit": "s",
            "range": 0.024344655274633486,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.8937568871599999,
            "unit": "s",
            "range": 0.018392651752264223,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.9053254853599999,
            "unit": "s",
            "range": 0.024124269904550598,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 68.305081661,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9564285278320312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 89.51650535458343,
            "unit": "%",
            "range": 11.876706390556372,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 63.66267310188053,
            "unit": "%",
            "range": 8.347896125018988,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 43.33428185593859,
            "unit": "%",
            "range": 4.072779835443207,
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
          "id": "c8a8dc00a3ec3e0cde4c29be0c8c17b2d5fc7d25",
          "message": "Merge pull request #1820 from hermit-os/mapper-panic\n\nfix(x86_64/mm): add context to `MapToError`",
          "timestamp": "2025-07-08T18:02:01Z",
          "url": "https://github.com/hermit-os/kernel/commit/c8a8dc00a3ec3e0cde4c29be0c8c17b2d5fc7d25"
        },
        "date": 1751999837865,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "micro_benchmarks Build Time",
            "value": 74.596093545,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9684066772460938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 67.80404632,
            "unit": "ticks",
            "range": 3.5889227156137737,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 35.832034799999995,
            "unit": "ticks",
            "range": 3.1920097534885192,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.781660880000002,
            "unit": "ticks",
            "range": 1.4877609744240585,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 72951.42613476975,
            "unit": "MByte/s",
            "range": 50423.475459353336,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 40981.339584862864,
            "unit": "MByte/s",
            "range": 28481.265522006295,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26591.76937178736,
            "unit": "MByte/s",
            "range": 21927.43971449518,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 72831.32809555405,
            "unit": "MByte/s",
            "range": 50342.7165456065,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41205.99707798291,
            "unit": "MByte/s",
            "range": 28632.053196541474,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 27280.220626816605,
            "unit": "MByte/s",
            "range": 22327.58742106409,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 65569.21687198842,
            "unit": "MByte/s",
            "range": 45992.159598408325,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 40941.81502398974,
            "unit": "MByte/s",
            "range": 28469.98175319605,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 26688.511389398645,
            "unit": "MByte/s",
            "range": 22345.22509103931,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 65939.53961854879,
            "unit": "MByte/s",
            "range": 46246.714063463434,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41205.65529587464,
            "unit": "MByte/s",
            "range": 28645.305609473264,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 27381.918195161183,
            "unit": "MByte/s",
            "range": 22742.733425657585,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 73.696179212,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9244232177734375,
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
            "value": 70.00078495386789,
            "unit": "%",
            "range": 0.28386157574762627,
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
            "value": 14507.093734962666,
            "unit": "Ticks",
            "range": 291.77312687996704,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14507.093734962666,
            "unit": "Ticks",
            "range": 291.77312687996704,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 962.7692871305102,
            "unit": "Ticks",
            "range": 113.43189998118766,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 74.3325463,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9677886962890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 14.279999999999998,
            "unit": "ns",
            "range": 0.9600000000000001,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 19.020000000000003,
            "unit": "ns",
            "range": 6.123691697007615,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
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
          "id": "c8a8dc00a3ec3e0cde4c29be0c8c17b2d5fc7d25",
          "message": "Merge pull request #1820 from hermit-os/mapper-panic\n\nfix(x86_64/mm): add context to `MapToError`",
          "timestamp": "2025-07-08T18:02:01Z",
          "url": "https://github.com/hermit-os/kernel/commit/c8a8dc00a3ec3e0cde4c29be0c8c17b2d5fc7d25"
        },
        "date": 1751999839935,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 89.122029372,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8557662963867188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 1.0099384764000001,
            "unit": "s",
            "range": 0.021521413768899357,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 1.0376886898,
            "unit": "s",
            "range": 0.028927486983492335,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 1.0476110525200002,
            "unit": "s",
            "range": 0.029300186638069377,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 89.134115723,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9605026245117188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 91.92633717336959,
            "unit": "%",
            "range": 9.807897896118932,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 64.6822946116065,
            "unit": "%",
            "range": 7.161099483202004,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 30.6021161359198,
            "unit": "%",
            "range": 1.7391183715642409,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 74.596093545,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9684066772460938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 67.80404632,
            "unit": "ticks",
            "range": 3.5889227156137737,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 35.832034799999995,
            "unit": "ticks",
            "range": 3.1920097534885192,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.781660880000002,
            "unit": "ticks",
            "range": 1.4877609744240585,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 72951.42613476975,
            "unit": "MByte/s",
            "range": 50423.475459353336,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 40981.339584862864,
            "unit": "MByte/s",
            "range": 28481.265522006295,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26591.76937178736,
            "unit": "MByte/s",
            "range": 21927.43971449518,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 72831.32809555405,
            "unit": "MByte/s",
            "range": 50342.7165456065,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41205.99707798291,
            "unit": "MByte/s",
            "range": 28632.053196541474,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 27280.220626816605,
            "unit": "MByte/s",
            "range": 22327.58742106409,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 65569.21687198842,
            "unit": "MByte/s",
            "range": 45992.159598408325,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 40941.81502398974,
            "unit": "MByte/s",
            "range": 28469.98175319605,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 26688.511389398645,
            "unit": "MByte/s",
            "range": 22345.22509103931,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 65939.53961854879,
            "unit": "MByte/s",
            "range": 46246.714063463434,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41205.65529587464,
            "unit": "MByte/s",
            "range": 28645.305609473264,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 27381.918195161183,
            "unit": "MByte/s",
            "range": 22742.733425657585,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 73.696179212,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9244232177734375,
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
            "value": 70.00078495386789,
            "unit": "%",
            "range": 0.28386157574762627,
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
            "value": 14507.093734962666,
            "unit": "Ticks",
            "range": 291.77312687996704,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14507.093734962666,
            "unit": "Ticks",
            "range": 291.77312687996704,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 962.7692871305102,
            "unit": "Ticks",
            "range": 113.43189998118766,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 74.3325463,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9677886962890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 14.279999999999998,
            "unit": "ns",
            "range": 0.9600000000000001,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 19.020000000000003,
            "unit": "ns",
            "range": 6.123691697007615,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 74.596093545,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9684066772460938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 67.80404632,
            "unit": "ticks",
            "range": 3.5889227156137737,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 35.832034799999995,
            "unit": "ticks",
            "range": 3.1920097534885192,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.781660880000002,
            "unit": "ticks",
            "range": 1.4877609744240585,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 72951.42613476975,
            "unit": "MByte/s",
            "range": 50423.475459353336,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 40981.339584862864,
            "unit": "MByte/s",
            "range": 28481.265522006295,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26591.76937178736,
            "unit": "MByte/s",
            "range": 21927.43971449518,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 72831.32809555405,
            "unit": "MByte/s",
            "range": 50342.7165456065,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41205.99707798291,
            "unit": "MByte/s",
            "range": 28632.053196541474,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 27280.220626816605,
            "unit": "MByte/s",
            "range": 22327.58742106409,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 65569.21687198842,
            "unit": "MByte/s",
            "range": 45992.159598408325,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 40941.81502398974,
            "unit": "MByte/s",
            "range": 28469.98175319605,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 26688.511389398645,
            "unit": "MByte/s",
            "range": 22345.22509103931,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 65939.53961854879,
            "unit": "MByte/s",
            "range": 46246.714063463434,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41205.65529587464,
            "unit": "MByte/s",
            "range": 28645.305609473264,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 27381.918195161183,
            "unit": "MByte/s",
            "range": 22742.733425657585,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 73.696179212,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9244232177734375,
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
            "value": 70.00078495386789,
            "unit": "%",
            "range": 0.28386157574762627,
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
            "value": 14507.093734962666,
            "unit": "Ticks",
            "range": 291.77312687996704,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14507.093734962666,
            "unit": "Ticks",
            "range": 291.77312687996704,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 962.7692871305102,
            "unit": "Ticks",
            "range": 113.43189998118766,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 74.3325463,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9677886962890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 14.279999999999998,
            "unit": "ns",
            "range": 0.9600000000000001,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 19.020000000000003,
            "unit": "ns",
            "range": 6.123691697007615,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Stefan Lankes",
            "username": "stlankes",
            "email": "stlankes@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b5b5c199764004fdd6631fc5c1c578bb49053f50",
          "message": "Merge pull request #1821 from hermit-os/aarch64-start\n\ndocs(aarch64/start): add SCTRL docs",
          "timestamp": "2025-07-08T20:07:57Z",
          "url": "https://github.com/hermit-os/kernel/commit/b5b5c199764004fdd6631fc5c1c578bb49053f50"
        },
        "date": 1752007357096,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 88.814221667,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8557357788085938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.99717799588,
            "unit": "s",
            "range": 0.04820864851384637,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 1.01561033708,
            "unit": "s",
            "range": 0.04152345346784186,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 1.0406043576800001,
            "unit": "s",
            "range": 0.03959388764164357,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 89.816767131,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9604644775390625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 93.59410517046209,
            "unit": "%",
            "range": 11.089707410710812,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 65.34288272304947,
            "unit": "%",
            "range": 7.964169126485809,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 30.994649149483074,
            "unit": "%",
            "range": 2.657835332893826,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Stefan Lankes",
            "username": "stlankes",
            "email": "stlankes@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b5b5c199764004fdd6631fc5c1c578bb49053f50",
          "message": "Merge pull request #1821 from hermit-os/aarch64-start\n\ndocs(aarch64/start): add SCTRL docs",
          "timestamp": "2025-07-08T20:07:57Z",
          "url": "https://github.com/hermit-os/kernel/commit/b5b5c199764004fdd6631fc5c1c578bb49053f50"
        },
        "date": 1752007358282,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "micro_benchmarks Build Time",
            "value": 74.715376495,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9684066772460938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 66.82818319999998,
            "unit": "ticks",
            "range": 3.0978259749719967,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 35.64417232,
            "unit": "ticks",
            "range": 3.398850091707037,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.712796639999999,
            "unit": "ticks",
            "range": 1.3648366321931098,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 73338.40798150394,
            "unit": "MByte/s",
            "range": 50542.557978944526,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41237.336957278756,
            "unit": "MByte/s",
            "range": 28631.06516425522,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26159.734997496613,
            "unit": "MByte/s",
            "range": 21200.419638872205,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 73371.89012436109,
            "unit": "MByte/s",
            "range": 50563.991489339256,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41509.79726261147,
            "unit": "MByte/s",
            "range": 28815.08846139339,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26803.31585385382,
            "unit": "MByte/s",
            "range": 21575.744950126787,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 66444.82521368723,
            "unit": "MByte/s",
            "range": 46279.4741865701,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41301.424976768576,
            "unit": "MByte/s",
            "range": 28653.774784629706,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 26198.189438195663,
            "unit": "MByte/s",
            "range": 21210.45939226896,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 66823.77258210829,
            "unit": "MByte/s",
            "range": 46541.342153126476,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41550.11163827356,
            "unit": "MByte/s",
            "range": 28821.873416841718,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 26858.586873798376,
            "unit": "MByte/s",
            "range": 21598.508535982797,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 72.589946306,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9243927001953125,
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
            "value": 70.01120783889105,
            "unit": "%",
            "range": 0.26173930937498563,
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
            "value": 11052.094748142987,
            "unit": "Ticks",
            "range": 196.07818677340705,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 11052.094748142987,
            "unit": "Ticks",
            "range": 196.07818677340705,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 833.8151963311964,
            "unit": "Ticks",
            "range": 17.802493504221612,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 73.818454817,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9678268432617188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 14.179999999999994,
            "unit": "ns",
            "range": 0.6539113089708726,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 16.919999999999998,
            "unit": "ns",
            "range": 1.055272476661833,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          }
        ]
      }
    ]
  }
}