window.BENCHMARK_DATA = {
  "lastUpdate": 1753362590215,
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          "id": "885734c836dfcad3da25d866194e5ea38677d536",
          "message": "Merge pull request #1824 from hermit-os/dependabot/cargo/arm-gic-0.5.0\n\nbuild(deps): Bump arm-gic from 0.4.0 to 0.5.0",
          "timestamp": "2025-07-09T08:58:00Z",
          "url": "https://github.com/hermit-os/kernel/commit/885734c836dfcad3da25d866194e5ea38677d536"
        },
        "date": 1752053867776,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "micro_benchmarks Build Time",
            "value": 92.181814088,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9684524536132812,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 67.37925423999998,
            "unit": "ticks",
            "range": 3.718126009760781,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 34.928892839999996,
            "unit": "ticks",
            "range": 1.6855585673591689,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.857022319999999,
            "unit": "ticks",
            "range": 1.0889179995207248,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 72968.84348385378,
            "unit": "MByte/s",
            "range": 50564.82086777872,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41555.93321790529,
            "unit": "MByte/s",
            "range": 28865.46533325638,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26104.955581253864,
            "unit": "MByte/s",
            "range": 21970.371471427356,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 72990.31473105318,
            "unit": "MByte/s",
            "range": 50579.79696897187,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41811.90270902575,
            "unit": "MByte/s",
            "range": 29042.086554290658,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26890.079079203642,
            "unit": "MByte/s",
            "range": 22397.839598896087,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 64378.80929543859,
            "unit": "MByte/s",
            "range": 44953.84327979643,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41277.27353849812,
            "unit": "MByte/s",
            "range": 28662.33092923196,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 26660.92716395744,
            "unit": "MByte/s",
            "range": 22238.568731789215,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 64487.90020452949,
            "unit": "MByte/s",
            "range": 45017.037130948105,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41532.85711174059,
            "unit": "MByte/s",
            "range": 28836.11621187425,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 27388.512916454743,
            "unit": "MByte/s",
            "range": 22664.910705757833,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 88.266337678,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9243698120117188,
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
            "value": 69.96870694709897,
            "unit": "%",
            "range": 0.35032957706795487,
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
            "value": 13449.069708185092,
            "unit": "Ticks",
            "range": 258.4121955524569,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13449.069708185092,
            "unit": "Ticks",
            "range": 258.4121955524569,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 852.9230433087904,
            "unit": "Ticks",
            "range": 69.82737738549329,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 91.197837239,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9678726196289062,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 14.259999999999996,
            "unit": "ns",
            "range": 0.4820788317277581,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 20.98,
            "unit": "ns",
            "range": 14.977970490023006,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "startup_benchmark Build Time",
            "value": 69.303189411,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.855682373046875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.9283365662799998,
            "unit": "s",
            "range": 0.03526339170933969,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.92871637436,
            "unit": "s",
            "range": 0.03659844545072624,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.9314504784400001,
            "unit": "s",
            "range": 0.0410736716582172,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 68.224137336,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9605865478515625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 86.8711410547428,
            "unit": "%",
            "range": 8.708320767450436,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 61.17384134363491,
            "unit": "%",
            "range": 6.318840891965819,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 41.24861547466533,
            "unit": "%",
            "range": 5.923763562586609,
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
          "id": "75af0d03168946430610bd7ec76dc88d0b7e7aab",
          "message": "Merge pull request #1818 from hermit-os/log-page-tables\n\nfeat(x86_64/mm): log page tables",
          "timestamp": "2025-07-09T09:03:53Z",
          "url": "https://github.com/hermit-os/kernel/commit/75af0d03168946430610bd7ec76dc88d0b7e7aab"
        },
        "date": 1752054525618,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 69.279469117,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8582382202148438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.9044002717599999,
            "unit": "s",
            "range": 0.025028626298435046,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.9180259046400002,
            "unit": "s",
            "range": 0.028581720086767834,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.9175056062800001,
            "unit": "s",
            "range": 0.02515435796972917,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 66.902939737,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9628524780273438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 88.92716218509838,
            "unit": "%",
            "range": 7.321126867334627,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 62.23583976610871,
            "unit": "%",
            "range": 5.827633085999411,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 42.8799591801731,
            "unit": "%",
            "range": 4.630471427277951,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 75.067404898,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9705429077148438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 73.7475996,
            "unit": "ticks",
            "range": 3.2438222510288317,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 38.83643988000001,
            "unit": "ticks",
            "range": 2.434339043963373,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.467205679999998,
            "unit": "ticks",
            "range": 1.123779428527101,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 74126.2212227941,
            "unit": "MByte/s",
            "range": 51351.13332104169,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41124.679663509145,
            "unit": "MByte/s",
            "range": 28529.798122737044,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 25942.304777462497,
            "unit": "MByte/s",
            "range": 20984.35664959215,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 73721.12546356018,
            "unit": "MByte/s",
            "range": 51055.235065157394,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41413.050431578195,
            "unit": "MByte/s",
            "range": 28734.354804684102,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26555.833344688483,
            "unit": "MByte/s",
            "range": 21331.55506962449,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 66098.1400684342,
            "unit": "MByte/s",
            "range": 46384.82448572093,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41115.72581222542,
            "unit": "MByte/s",
            "range": 28507.29785509262,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 25840.70841572347,
            "unit": "MByte/s",
            "range": 20887.242600472317,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 66835.24080553492,
            "unit": "MByte/s",
            "range": 46915.442568011895,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41335.585721036,
            "unit": "MByte/s",
            "range": 28657.658570239953,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 26449.623323259562,
            "unit": "MByte/s",
            "range": 21238.708363997543,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 73.167990216,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9269332885742188,
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
            "value": 70.02503891779371,
            "unit": "%",
            "range": 0.2284206702170415,
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
            "value": 11105.959251442326,
            "unit": "Ticks",
            "range": 210.70144764770822,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 11105.959251442326,
            "unit": "Ticks",
            "range": 210.70144764770822,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 824.8439097350547,
            "unit": "Ticks",
            "range": 25.60069826264571,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 74.170852443,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9701080322265625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 14.299999999999994,
            "unit": "ns",
            "range": 0.5385164807134505,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 16.760000000000005,
            "unit": "ns",
            "range": 1.0307278981380106,
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
          "id": "946922a3cbfe1f9ffdbc4143364e9baf5d52fb23",
          "message": "Merge pull request #1815 from hermit-os/virt_to_phys\n\nfix(mm): reintroduce explicit virtual to physical address translation for device memory",
          "timestamp": "2025-07-09T12:06:54Z",
          "url": "https://github.com/hermit-os/kernel/commit/946922a3cbfe1f9ffdbc4143364e9baf5d52fb23"
        },
        "date": 1752064824860,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "micro_benchmarks Build Time",
            "value": 68.23722638,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9708480834960938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 59.36681432,
            "unit": "ticks",
            "range": 2.538902621889302,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 31.413588039999997,
            "unit": "ticks",
            "range": 1.7308244719971924,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 14.93383528,
            "unit": "ticks",
            "range": 1.5319246574550203,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 81632.03432406113,
            "unit": "MByte/s",
            "range": 56329.9648500492,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43043.654506611776,
            "unit": "MByte/s",
            "range": 29771.45970096914,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28884.888663232236,
            "unit": "MByte/s",
            "range": 23738.945721939377,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 81674.64796042476,
            "unit": "MByte/s",
            "range": 56361.46862207228,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43246.13384858904,
            "unit": "MByte/s",
            "range": 29912.288800095022,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29657.469678742444,
            "unit": "MByte/s",
            "range": 24184.952660645948,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 71818.29950670953,
            "unit": "MByte/s",
            "range": 49858.07800315004,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 42743.05051619185,
            "unit": "MByte/s",
            "range": 29589.56903589774,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28865.951716133342,
            "unit": "MByte/s",
            "range": 23768.35154172655,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 72218.67022033325,
            "unit": "MByte/s",
            "range": 50164.44053039843,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 42997.782390368084,
            "unit": "MByte/s",
            "range": 29764.75516268804,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29612.64856483416,
            "unit": "MByte/s",
            "range": 24190.93997986589,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 68.351619226,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9286117553710938,
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
            "value": 69.98315022202327,
            "unit": "%",
            "range": 0.31137095373121787,
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
            "value": 13600.555118596027,
            "unit": "Ticks",
            "range": 194.3423760166882,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13600.555118596027,
            "unit": "Ticks",
            "range": 194.3423760166882,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 834.8510806179148,
            "unit": "Ticks",
            "range": 85.927812990272,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 67.594653744,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.970428466796875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 12.66,
            "unit": "ns",
            "range": 0.9509994742374994,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 14.76,
            "unit": "ns",
            "range": 1.3199999999999998,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "startup_benchmark Build Time",
            "value": 88.632818991,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8599472045898438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 1.03143880668,
            "unit": "s",
            "range": 0.034492966827255236,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 1.03696195144,
            "unit": "s",
            "range": 0.022310623030673327,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 1.04567693832,
            "unit": "s",
            "range": 0.025727487985331574,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 88.993029061,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.963134765625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 90.71025731611,
            "unit": "%",
            "range": 9.718255409248377,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 65.75152972765483,
            "unit": "%",
            "range": 5.176787852532659,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 30.154030149972424,
            "unit": "%",
            "range": 2.285063166928287,
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
          "id": "33a595d622e75d9f7b6e706b5de1fb7303f925e2",
          "message": "Merge pull request #1802 from hermit-os/errno\n\nrefactor: make errnos an enum and replace io::Error",
          "timestamp": "2025-07-10T08:38:40Z",
          "url": "https://github.com/hermit-os/kernel/commit/33a595d622e75d9f7b6e706b5de1fb7303f925e2"
        },
        "date": 1752138846525,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "micro_benchmarks Build Time",
            "value": 76.687211428,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.984039306640625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 67.12820007999998,
            "unit": "ticks",
            "range": 4.882079726971659,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 35.161532439999995,
            "unit": "ticks",
            "range": 3.251136722971325,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.57168752,
            "unit": "ticks",
            "range": 1.26067819564135,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 74723.9501346836,
            "unit": "MByte/s",
            "range": 51631.73681188494,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41146.567660829416,
            "unit": "MByte/s",
            "range": 28612.48115834156,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26269.408073009443,
            "unit": "MByte/s",
            "range": 22118.619594812193,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 75052.89750310466,
            "unit": "MByte/s",
            "range": 51837.533390610064,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41362.26311796583,
            "unit": "MByte/s",
            "range": 28760.61643061068,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 26988.541579034474,
            "unit": "MByte/s",
            "range": 22515.974186721156,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 67328.05361407086,
            "unit": "MByte/s",
            "range": 47146.020441993016,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41327.96847291249,
            "unit": "MByte/s",
            "range": 28714.270651703057,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 26238.108872656685,
            "unit": "MByte/s",
            "range": 22348.389771516166,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 67858.7661447834,
            "unit": "MByte/s",
            "range": 47495.96594369423,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41651.449531499566,
            "unit": "MByte/s",
            "range": 28933.902285338092,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 27051.115049096385,
            "unit": "MByte/s",
            "range": 22834.630810804625,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 75.306066906,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9447479248046875,
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
            "value": 69.96319960620482,
            "unit": "%",
            "range": 0.31077417408909164,
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
            "value": 14608.283710205278,
            "unit": "Ticks",
            "range": 280.56111131547516,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14608.283710205278,
            "unit": "Ticks",
            "range": 280.56111131547516,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 941.9464807441743,
            "unit": "Ticks",
            "range": 200.36301437038398,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 77.19205625,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.98358154296875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 14.540000000000003,
            "unit": "ns",
            "range": 0.9840731680114033,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 19.799999999999997,
            "unit": "ns",
            "range": 8.409518416651455,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "startup_benchmark Build Time",
            "value": 74.499024143,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8761367797851562,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 1.0045447618799999,
            "unit": "s",
            "range": 0.02997820995435519,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.9914958039599999,
            "unit": "s",
            "range": 0.026535103951963283,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.99698825368,
            "unit": "s",
            "range": 0.0321763172555624,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 73.447197288,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9762649536132812,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 90.95671078169613,
            "unit": "%",
            "range": 8.690325724717285,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 62.665349140762956,
            "unit": "%",
            "range": 5.8325436124943035,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 44.216843745393625,
            "unit": "%",
            "range": 2.917864847420328,
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
          "id": "5c898f1d48df5159c8aea5923c7eec5257d98f2c",
          "message": "Merge pull request #1829 from hermit-os/bind-EDESTADDRREQ\n\nfix(bind): return EDESTADDRREQ on NULL address",
          "timestamp": "2025-07-10T09:27:01Z",
          "url": "https://github.com/hermit-os/kernel/commit/5c898f1d48df5159c8aea5923c7eec5257d98f2c"
        },
        "date": 1752142520956,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 80.484575277,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8761367797851562,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.85507491136,
            "unit": "s",
            "range": 0.012874757986698801,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.8649406453199999,
            "unit": "s",
            "range": 0.01982807234399955,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.8685955226,
            "unit": "s",
            "range": 0.013492741737559615,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 81.588622202,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9762954711914062,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 87.12478762521229,
            "unit": "%",
            "range": 6.415079065624367,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 43.48852005958012,
            "unit": "%",
            "range": 3.078331719420171,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 25.25516620266447,
            "unit": "%",
            "range": 1.411093597009817,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 100.549653237,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.984039306640625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 68.73265295999998,
            "unit": "ticks",
            "range": 2.824523208342597,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 39.44176004,
            "unit": "ticks",
            "range": 5.856366534010039,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.22769328,
            "unit": "ticks",
            "range": 1.26739975342461,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 73854.34005253168,
            "unit": "MByte/s",
            "range": 51022.42835926754,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 42176.20187821398,
            "unit": "MByte/s",
            "range": 29360.5381574007,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 19192.731690341858,
            "unit": "MByte/s",
            "range": 15843.47221730821,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 73865.75190800295,
            "unit": "MByte/s",
            "range": 51030.44919450678,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 42530.37697716104,
            "unit": "MByte/s",
            "range": 29605.56214331317,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 19422.814460231257,
            "unit": "MByte/s",
            "range": 15942.209462743685,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 66256.26597319118,
            "unit": "MByte/s",
            "range": 46184.570171954365,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41368.78939615715,
            "unit": "MByte/s",
            "range": 28683.643783141222,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 19558.821396260468,
            "unit": "MByte/s",
            "range": 16460.093517709403,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 66484.83740176262,
            "unit": "MByte/s",
            "range": 46333.80296485817,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41577.79044659821,
            "unit": "MByte/s",
            "range": 28826.509899720557,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 19658.707151988747,
            "unit": "MByte/s",
            "range": 16492.763225362603,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 93.333914288,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9447860717773438,
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
            "value": 69.9725873667127,
            "unit": "%",
            "range": 0.2539577199644079,
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
            "value": 10696.533845686028,
            "unit": "Ticks",
            "range": 538.6073900944572,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 10696.533845686028,
            "unit": "Ticks",
            "range": 538.6073900944572,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 739.2557474780646,
            "unit": "Ticks",
            "range": 27.4383278367954,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 93.684574355,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.98358154296875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 13.81999999999999,
            "unit": "ns",
            "range": 0.6539113089708724,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 17.02,
            "unit": "ns",
            "range": 1.1043550153822816,
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
          "id": "81a3d404d6461e99b44762948bf64875d5706e95",
          "message": "Merge pull request #1800 from hermit-os/prepare-addrinfo\n\nrefactor(syscalls): prepare for getaddrinfo",
          "timestamp": "2025-07-10T10:43:46Z",
          "url": "https://github.com/hermit-os/kernel/commit/81a3d404d6461e99b44762948bf64875d5706e95"
        },
        "date": 1752146283013,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 82.702142718,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8761367797851562,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.8262885178799999,
            "unit": "s",
            "range": 0.015353722227836377,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.85086667488,
            "unit": "s",
            "range": 0.02517495361406977,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.8560571410400001,
            "unit": "s",
            "range": 0.023541065142093955,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 82.727242862,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9762649536132812,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 89.02408215499221,
            "unit": "%",
            "range": 8.280563297986248,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 43.13947896724301,
            "unit": "%",
            "range": 3.6380760621868093,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.821047072269295,
            "unit": "%",
            "range": 1.6209496107120362,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 92.153677647,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.984039306640625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 64.59369624,
            "unit": "ticks",
            "range": 3.2663062105468224,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 36.56601928,
            "unit": "ticks",
            "range": 4.904466694640024,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.51621568,
            "unit": "ticks",
            "range": 1.3852778950498768,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 75574.46685431171,
            "unit": "MByte/s",
            "range": 52434.861122159324,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41558.580058838605,
            "unit": "MByte/s",
            "range": 28812.777565238935,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 27690.446919484642,
            "unit": "MByte/s",
            "range": 22764.005514695087,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 75627.43715134142,
            "unit": "MByte/s",
            "range": 52471.53294847274,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41754.75721316219,
            "unit": "MByte/s",
            "range": 28946.75264629264,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28429.16977847811,
            "unit": "MByte/s",
            "range": 23201.16178886785,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 67096.15879348651,
            "unit": "MByte/s",
            "range": 46767.49143812027,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41297.92606589681,
            "unit": "MByte/s",
            "range": 28659.031637027107,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 27616.35705205506,
            "unit": "MByte/s",
            "range": 22721.332289281665,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 67324.73022205794,
            "unit": "MByte/s",
            "range": 46914.70635731013,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41572.7281411422,
            "unit": "MByte/s",
            "range": 28843.47843149787,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28354.811074231824,
            "unit": "MByte/s",
            "range": 23159.843898294926,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 90.048676327,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9447860717773438,
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
            "value": 69.97135253039633,
            "unit": "%",
            "range": 0.2957901011981543,
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
            "value": 9973.495261767945,
            "unit": "Ticks",
            "range": 240.1587047759538,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 9973.495261767945,
            "unit": "Ticks",
            "range": 240.1587047759538,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 694.4201779378009,
            "unit": "Ticks",
            "range": 16.31186295334368,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 90.147188955,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.98358154296875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 13.619999999999992,
            "unit": "ns",
            "range": 0.7180529228406493,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 15.920000000000009,
            "unit": "ns",
            "range": 1.128538878373271,
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
          "id": "f19cfca42057c62ecee9d89bfaeb783da91291a3",
          "message": "Merge pull request #1830 from CarlWachter/fix/pub_bench\n\npublish_benchmark: merge results into one file",
          "timestamp": "2025-07-14T07:14:24Z",
          "url": "https://github.com/hermit-os/kernel/commit/f19cfca42057c62ecee9d89bfaeb783da91291a3"
        },
        "date": 1752479310598,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 95.067900696,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8761062622070312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.9280802436800001,
            "unit": "s",
            "range": 0.022378443927893676,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.9406893200800001,
            "unit": "s",
            "range": 0.02624685816552087,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.94851286244,
            "unit": "s",
            "range": 0.026105741250919773,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 89.314668669,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.97625732421875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 88.46572656957615,
            "unit": "%",
            "range": 8.799115988152094,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 43.56470991741522,
            "unit": "%",
            "range": 3.911051183631543,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 25.015170513882946,
            "unit": "%",
            "range": 1.86116358013471,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 92.500827372,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.984039306640625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 61.36104136,
            "unit": "ticks",
            "range": 2.7094362355579564,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 35.463973079999995,
            "unit": "ticks",
            "range": 5.853116891533044,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 14.414217840000003,
            "unit": "ticks",
            "range": 1.3903270374056218,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 78683.61391488556,
            "unit": "MByte/s",
            "range": 54469.95767746279,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 42754.50441361386,
            "unit": "MByte/s",
            "range": 29562.95821609854,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28355.23941105927,
            "unit": "MByte/s",
            "range": 23227.59291899878,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 78931.32950597636,
            "unit": "MByte/s",
            "range": 54641.9044773817,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 42974.030878206984,
            "unit": "MByte/s",
            "range": 29712.461288322127,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29110.724688213697,
            "unit": "MByte/s",
            "range": 23677.91489315436,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 71757.64240214102,
            "unit": "MByte/s",
            "range": 49976.928868852265,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 42680.77027789415,
            "unit": "MByte/s",
            "range": 29526.90900037715,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28698.294619342512,
            "unit": "MByte/s",
            "range": 23528.474181437858,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 71904.31925470023,
            "unit": "MByte/s",
            "range": 50077.360717645184,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 42880.07621022585,
            "unit": "MByte/s",
            "range": 29662.185821463092,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29440.172631272053,
            "unit": "MByte/s",
            "range": 23959.875327986992,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 87.979471696,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9447555541992188,
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
            "value": 69.9631727733438,
            "unit": "%",
            "range": 0.22770864582476605,
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
            "value": 10330.833187746328,
            "unit": "Ticks",
            "range": 736.0382692333432,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 10330.833187746328,
            "unit": "Ticks",
            "range": 736.0382692333432,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 686.5522561672431,
            "unit": "Ticks",
            "range": 30.821726102074248,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 88.696195158,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9835433959960938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 13.019999999999994,
            "unit": "ns",
            "range": 0.37363083384538825,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 14.720000000000008,
            "unit": "ns",
            "range": 0.6645299090334457,
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
          "id": "4a84d25bc821255bd68f59fe93c1f6f5ccd4468c",
          "message": "Merge pull request #1831 from n0toose/readme-hermit-c\n\ndocs(readme): replace hermit-playground with hermit-c",
          "timestamp": "2025-07-14T12:09:55Z",
          "url": "https://github.com/hermit-os/kernel/commit/4a84d25bc821255bd68f59fe93c1f6f5ccd4468c"
        },
        "date": 1752497053357,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 87.392174964,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8761062622070312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.92618630656,
            "unit": "s",
            "range": 0.02184294636795863,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.93393316112,
            "unit": "s",
            "range": 0.01312581290727461,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.93381634404,
            "unit": "s",
            "range": 0.013609502647069342,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 86.036743908,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.976226806640625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 88.28814700290039,
            "unit": "%",
            "range": 8.594783878370098,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 44.097166656232865,
            "unit": "%",
            "range": 3.3981526483626596,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 25.373160572258232,
            "unit": "%",
            "range": 1.740952772851663,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 85.377744471,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.98406982421875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 59.69958736,
            "unit": "ticks",
            "range": 2.641127632592637,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 35.16011416,
            "unit": "ticks",
            "range": 4.533232808333812,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 14.31477464,
            "unit": "ticks",
            "range": 1.6730398416821732,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 83116.66065410561,
            "unit": "MByte/s",
            "range": 57474.2894726221,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43185.366607333504,
            "unit": "MByte/s",
            "range": 29862.035300882948,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29129.495775577005,
            "unit": "MByte/s",
            "range": 23947.837564583257,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 83351.98975799142,
            "unit": "MByte/s",
            "range": 57637.35893917973,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43401.6386440063,
            "unit": "MByte/s",
            "range": 30010.433139292087,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29891.515601578274,
            "unit": "MByte/s",
            "range": 24393.17908171714,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 72228.31825669153,
            "unit": "MByte/s",
            "range": 50333.10752867408,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 42874.05530309181,
            "unit": "MByte/s",
            "range": 29664.737010815752,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29267.79815018165,
            "unit": "MByte/s",
            "range": 24080.216563065856,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 72617.92864630194,
            "unit": "MByte/s",
            "range": 50623.99223018072,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43100.0854354199,
            "unit": "MByte/s",
            "range": 29821.734824009072,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 30032.03385322562,
            "unit": "MByte/s",
            "range": 24522.7600019646,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 83.167569612,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9447860717773438,
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
            "value": 69.96961892055216,
            "unit": "%",
            "range": 0.24024253205456686,
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
            "value": 10122.436282706636,
            "unit": "Ticks",
            "range": 753.4300446561873,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 10122.436282706636,
            "unit": "Ticks",
            "range": 753.4300446561873,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 670.1728150100507,
            "unit": "Ticks",
            "range": 33.53018575126315,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 84.339304348,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9835433959960938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 12.000000000000005,
            "unit": "ns",
            "range": 0.4898979485566356,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 13.440000000000001,
            "unit": "ns",
            "range": 1.0983624174196789,
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
          "id": "ffeed745306716b6cb8b1b7b4efa535568026321",
          "message": "Merge pull request #1835 from hermit-os/gai_strerror\n\nfeat(syscalls/socket): implement gai_strerror",
          "timestamp": "2025-07-18T08:21:20Z",
          "url": "https://github.com/hermit-os/kernel/commit/ffeed745306716b6cb8b1b7b4efa535568026321"
        },
        "date": 1752829016015,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 79.887980241,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8761367797851562,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.81797059016,
            "unit": "s",
            "range": 0.013857205691199258,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.81348231084,
            "unit": "s",
            "range": 0.015418034909009715,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.8107162568,
            "unit": "s",
            "range": 0.016907640529174893,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 78.611100331,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.97625732421875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 90.08607225844094,
            "unit": "%",
            "range": 6.7425062630886865,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 43.76473465158252,
            "unit": "%",
            "range": 3.151140983599726,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 25.37162956256636,
            "unit": "%",
            "range": 1.40800403738479,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 93.618334628,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.984039306640625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 65.20390511999997,
            "unit": "ticks",
            "range": 2.9467011108674104,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 36.18104116,
            "unit": "ticks",
            "range": 4.847995308188395,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 14.642735199999995,
            "unit": "ticks",
            "range": 1.1370493442327647,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 76973.84460335517,
            "unit": "MByte/s",
            "range": 53239.20869034589,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41884.21121789306,
            "unit": "MByte/s",
            "range": 29035.495057978118,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28239.399133317533,
            "unit": "MByte/s",
            "range": 23203.428404391143,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 76735.93150665995,
            "unit": "MByte/s",
            "range": 53062.966801629154,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 42117.51126077993,
            "unit": "MByte/s",
            "range": 29192.915495263427,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28983.950711681155,
            "unit": "MByte/s",
            "range": 23637.520428670043,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 68430.72948479591,
            "unit": "MByte/s",
            "range": 47603.4593784363,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41874.731830345154,
            "unit": "MByte/s",
            "range": 29063.738795620604,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28403.689088880314,
            "unit": "MByte/s",
            "range": 23340.541347327235,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 68492.61067291473,
            "unit": "MByte/s",
            "range": 47639.50322848655,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 42106.615095926565,
            "unit": "MByte/s",
            "range": 29219.946860039094,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29153.913016610128,
            "unit": "MByte/s",
            "range": 23778.37328838027,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 90.686928449,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9447555541992188,
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
            "value": 70.0552550118415,
            "unit": "%",
            "range": 0.2818491688533874,
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
            "value": 10282.08911635799,
            "unit": "Ticks",
            "range": 741.7082345861231,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 10282.08911635799,
            "unit": "Ticks",
            "range": 741.7082345861231,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 711.7743466502574,
            "unit": "Ticks",
            "range": 63.69640796079156,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 91.519148133,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9835739135742188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 13.419999999999993,
            "unit": "ns",
            "range": 0.4935585071701226,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 15.780000000000006,
            "unit": "ns",
            "range": 0.9856977224281283,
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
          "id": "c9b806406c6095e8c52f372ec7b655f382675da9",
          "message": "Merge pull request #1836 from hermit-os/SOCK_RAW\n\nfeat(syscalls/socket): add `SOCK_RAW` and `SOCK_SEQPACKET`",
          "timestamp": "2025-07-18T10:30:44Z",
          "url": "https://github.com/hermit-os/kernel/commit/c9b806406c6095e8c52f372ec7b655f382675da9"
        },
        "date": 1752836668402,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 91.357581685,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8761062622070312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.94485436652,
            "unit": "s",
            "range": 0.021099075362594068,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.9437800004000001,
            "unit": "s",
            "range": 0.025697408363359167,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.9444393221599998,
            "unit": "s",
            "range": 0.029929222592003125,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 89.726198481,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.976226806640625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 89.10573030377691,
            "unit": "%",
            "range": 7.953208599658252,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 43.45380134880358,
            "unit": "%",
            "range": 3.8317495506249672,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 25.43706724583875,
            "unit": "%",
            "range": 1.7618032488615232,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 82.738097462,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.984039306640625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 55.40708248,
            "unit": "ticks",
            "range": 1.394236374554763,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 31.85002956,
            "unit": "ticks",
            "range": 5.238369540224515,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 14.156721200000002,
            "unit": "ticks",
            "range": 1.9736645398065806,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 91233.59753438641,
            "unit": "MByte/s",
            "range": 62713.08299491678,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 44426.0280995384,
            "unit": "MByte/s",
            "range": 30708.941371852117,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 30223.29530373759,
            "unit": "MByte/s",
            "range": 24819.349363328813,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 90832.96936010146,
            "unit": "MByte/s",
            "range": 62481.07747447372,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 44651.608265080846,
            "unit": "MByte/s",
            "range": 30859.960061591682,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 30999.69262385311,
            "unit": "MByte/s",
            "range": 25257.334463449457,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 77925.91008299569,
            "unit": "MByte/s",
            "range": 54244.13636911353,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 44284.20966514927,
            "unit": "MByte/s",
            "range": 30629.451852198683,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 30228.404704847748,
            "unit": "MByte/s",
            "range": 24824.19977061174,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 78405.56124578639,
            "unit": "MByte/s",
            "range": 54576.94213780491,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 44512.42621840321,
            "unit": "MByte/s",
            "range": 30781.840540782545,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 31006.986323624376,
            "unit": "MByte/s",
            "range": 25263.996952909245,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 78.61544373,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9447555541992188,
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
            "value": 69.95219350373847,
            "unit": "%",
            "range": 0.2899622266708646,
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
            "value": 9596.169157564504,
            "unit": "Ticks",
            "range": 177.99854422912634,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 9596.169157564504,
            "unit": "Ticks",
            "range": 177.99854422912634,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 640.4777015353368,
            "unit": "Ticks",
            "range": 14.390257310752189,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 80.381476887,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9835433959960938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 11.720000000000004,
            "unit": "ns",
            "range": 0.5306599664568643,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 13.319999999999995,
            "unit": "ns",
            "range": 0.8352245207128439,
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
          "id": "e77df50caac0c682e4f8cddd05b5b36c4312b922",
          "message": "Merge pull request #1738 from hermit-os/readdir\n\nmade `readdir` stateful",
          "timestamp": "2025-07-21T14:15:03Z",
          "url": "https://github.com/hermit-os/kernel/commit/e77df50caac0c682e4f8cddd05b5b36c4312b922"
        },
        "date": 1753111180403,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 99.816591318,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8772125244140625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.8765267020399999,
            "unit": "s",
            "range": 0.023644869050777152,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.8770806333999999,
            "unit": "s",
            "range": 0.018642156981714238,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.8926044858000001,
            "unit": "s",
            "range": 0.024901930095330357,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 99.949861651,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9806442260742188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 73.06573103570383,
            "unit": "%",
            "range": 6.238590402421083,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 42.826411015913116,
            "unit": "%",
            "range": 3.0326542436654713,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 21.025933721613644,
            "unit": "%",
            "range": 1.4174263034165469,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 83.061783421,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9884872436523438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 58.52648648000001,
            "unit": "ticks",
            "range": 2.182425649350614,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 32.02106072,
            "unit": "ticks",
            "range": 2.7621767811007976,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 14.474001920000001,
            "unit": "ticks",
            "range": 1.4514342925137722,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 83705.39719289338,
            "unit": "MByte/s",
            "range": 57787.20335404829,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43608.48108304843,
            "unit": "MByte/s",
            "range": 30161.974768348155,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29427.38080786127,
            "unit": "MByte/s",
            "range": 24208.081533829758,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 83467.48409619814,
            "unit": "MByte/s",
            "range": 57625.98456651736,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43840.63743992411,
            "unit": "MByte/s",
            "range": 30322.974051729645,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 30183.883759617675,
            "unit": "MByte/s",
            "range": 24638.240473826234,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 72064.82855314958,
            "unit": "MByte/s",
            "range": 50444.61001263641,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43291.35468323089,
            "unit": "MByte/s",
            "range": 29970.844690042875,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29384.948866077637,
            "unit": "MByte/s",
            "range": 24171.01332105251,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 72444.10862338664,
            "unit": "MByte/s",
            "range": 50723.12441151006,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43537.739995521,
            "unit": "MByte/s",
            "range": 30137.067835910184,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 30143.978615529533,
            "unit": "MByte/s",
            "range": 24604.319046954974,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 82.740789708,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.94586181640625,
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
            "value": 70.00810964351506,
            "unit": "%",
            "range": 0.27277298420962814,
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
            "value": 9736.003388596768,
            "unit": "Ticks",
            "range": 238.0443476361115,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 9736.003388596768,
            "unit": "Ticks",
            "range": 238.0443476361115,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 652.6243492932152,
            "unit": "Ticks",
            "range": 10.937100011276634,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 82.116597282,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9880294799804688,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 12.100000000000007,
            "unit": "ns",
            "range": 0.3605551275463992,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 13.939999999999994,
            "unit": "ns",
            "range": 0.9254188241007418,
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
          "id": "f3f81bc4ebadaa39808219526356f20e804493bc",
          "message": "Merge pull request #1837 from hermit-os/test-stdin\n\nci: test stdin example",
          "timestamp": "2025-07-21T14:55:17Z",
          "url": "https://github.com/hermit-os/kernel/commit/f3f81bc4ebadaa39808219526356f20e804493bc"
        },
        "date": 1753112957882,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 90.837296611,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8771591186523438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.9658226421599998,
            "unit": "s",
            "range": 0.029351806202683666,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.9564710576400001,
            "unit": "s",
            "range": 0.030805235107237317,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.96330572884,
            "unit": "s",
            "range": 0.03286083443808162,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 92.370262538,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9806900024414062,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 88.05902190791416,
            "unit": "%",
            "range": 8.286915506257063,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 43.76839744466958,
            "unit": "%",
            "range": 3.9428247463902295,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 25.409364524722413,
            "unit": "%",
            "range": 2.4622879677212484,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 101.609663358,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.98846435546875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 61.57364408,
            "unit": "ticks",
            "range": 2.717882600493876,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 34.359961760000004,
            "unit": "ticks",
            "range": 4.279937492082333,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 13.479636480000003,
            "unit": "ticks",
            "range": 0.7211177153627621,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 81511.8670694305,
            "unit": "MByte/s",
            "range": 56292.141793694216,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43439.76743686034,
            "unit": "MByte/s",
            "range": 30050.388103895428,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29461.1822864913,
            "unit": "MByte/s",
            "range": 24196.58347265839,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 81315.24625603337,
            "unit": "MByte/s",
            "range": 56156.8931325349,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43629.90727303751,
            "unit": "MByte/s",
            "range": 30177.828096240468,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 30201.685485570455,
            "unit": "MByte/s",
            "range": 24612.81048742365,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 68471.85260516539,
            "unit": "MByte/s",
            "range": 47794.76011197614,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43367.939513944184,
            "unit": "MByte/s",
            "range": 30020.602534560607,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29417.196594720754,
            "unit": "MByte/s",
            "range": 24159.896119010293,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 69101.91561146601,
            "unit": "MByte/s",
            "range": 48251.692807633626,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43577.457210363566,
            "unit": "MByte/s",
            "range": 30159.802305880996,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 30166.511711944688,
            "unit": "MByte/s",
            "range": 24584.413152003417,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 100.561866459,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9458084106445312,
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
            "value": 69.98612045485088,
            "unit": "%",
            "range": 0.2596519122165752,
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
            "value": 9700.874362247923,
            "unit": "Ticks",
            "range": 154.35037025129895,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 9700.874362247923,
            "unit": "Ticks",
            "range": 154.35037025129895,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 661.6553404983243,
            "unit": "Ticks",
            "range": 6.905724641489748,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 99.925718536,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9880294799804688,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 12.719999999999997,
            "unit": "ns",
            "range": 0.49152822909778054,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 15.920000000000007,
            "unit": "ns",
            "range": 0.6584831053261733,
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
          "id": "dc34ec0813caa0270b7425cf77f78899936114ae",
          "message": "Merge pull request #1781 from stlankes/console\n\nadd support of virtio console according to the VirtIO standard",
          "timestamp": "2025-07-22T11:13:16Z",
          "url": "https://github.com/hermit-os/kernel/commit/dc34ec0813caa0270b7425cf77f78899936114ae"
        },
        "date": 1753185034761,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 81.038026805,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8785018920898438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.8362014437599999,
            "unit": "s",
            "range": 0.015463841248500122,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.84945312676,
            "unit": "s",
            "range": 0.020545820646714032,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.8643280856400001,
            "unit": "s",
            "range": 0.021102849046831084,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 81.088491224,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9852981567382812,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 87.83628992979834,
            "unit": "%",
            "range": 7.178709149457869,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 43.99289583558788,
            "unit": "%",
            "range": 3.127627260869104,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 25.06845283023938,
            "unit": "%",
            "range": 1.586547611099804,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 95.353958596,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9931716918945312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 66.19669784,
            "unit": "ticks",
            "range": 2.816432747831138,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 37.163089480000004,
            "unit": "ticks",
            "range": 4.644750037333972,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.39782696,
            "unit": "ticks",
            "range": 1.075529163277109,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 75907.21052162739,
            "unit": "MByte/s",
            "range": 52469.22814707375,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41624.906948524556,
            "unit": "MByte/s",
            "range": 28898.76183012089,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 27960.729790525154,
            "unit": "MByte/s",
            "range": 22980.501401905127,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 75966.33214324902,
            "unit": "MByte/s",
            "range": 52510.63704419795,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41899.938917415115,
            "unit": "MByte/s",
            "range": 29089.915857605698,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28645.763331835347,
            "unit": "MByte/s",
            "range": 23362.669511474454,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 65195.59307088507,
            "unit": "MByte/s",
            "range": 45268.816573906035,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41257.94908254162,
            "unit": "MByte/s",
            "range": 28657.437606304222,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 27722.117306348642,
            "unit": "MByte/s",
            "range": 22762.72133709534,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 65485.862449664615,
            "unit": "MByte/s",
            "range": 45454.72072741192,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41487.875881009146,
            "unit": "MByte/s",
            "range": 28816.906357041997,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28406.448733181358,
            "unit": "MByte/s",
            "range": 23150.28910249444,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 93.140422627,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.947174072265625,
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
            "value": 69.9587758617467,
            "unit": "%",
            "range": 0.2767487618222236,
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
            "value": 10295.18845659426,
            "unit": "Ticks",
            "range": 294.34310361808804,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 10295.18845659426,
            "unit": "Ticks",
            "range": 294.34310361808804,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 701.0936320353982,
            "unit": "Ticks",
            "range": 14.778949744345974,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 92.682034516,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9925003051757812,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 13.919999999999995,
            "unit": "ns",
            "range": 0.6584831053261728,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 16.580000000000002,
            "unit": "ns",
            "range": 1.8120706387997132,
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
          "id": "9804a4936f3aea66aa93b1038e7ba7a9f79f2293",
          "message": "Merge pull request #1840 from hermit-os/async-in-async\n\nfeat: allow spawning async tasks from inside an async task",
          "timestamp": "2025-07-24T07:57:49Z",
          "url": "https://github.com/hermit-os/kernel/commit/9804a4936f3aea66aa93b1038e7ba7a9f79f2293"
        },
        "date": 1753345950562,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 100.570849047,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.879669189453125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.87918855344,
            "unit": "s",
            "range": 0.017344849730852936,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.9054014012000001,
            "unit": "s",
            "range": 0.032810359195565665,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.8988445824,
            "unit": "s",
            "range": 0.014461173031845572,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 100.034960601,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9884567260742188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 73.58553192502234,
            "unit": "%",
            "range": 5.6976182172603025,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 42.774354975415996,
            "unit": "%",
            "range": 2.221814631560506,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 20.95636448508519,
            "unit": "%",
            "range": 1.2108113684442083,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 83.205550182,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9962997436523438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 61.30629848,
            "unit": "ticks",
            "range": 1.799200308673365,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 36.21720532,
            "unit": "ticks",
            "range": 5.99606020795057,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 13.793280240000001,
            "unit": "ticks",
            "range": 1.3192996522920875,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 85845.78521168894,
            "unit": "MByte/s",
            "range": 59111.97443051667,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43653.63816572933,
            "unit": "MByte/s",
            "range": 30175.59460423102,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29568.315209507273,
            "unit": "MByte/s",
            "range": 24301.548075867813,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 86109.96046942091,
            "unit": "MByte/s",
            "range": 59291.06323198407,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43871.87738469194,
            "unit": "MByte/s",
            "range": 30328.98901471264,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 30356.22991286611,
            "unit": "MByte/s",
            "range": 24771.414256727516,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 74211.27255993827,
            "unit": "MByte/s",
            "range": 51810.51681940664,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43566.939676747505,
            "unit": "MByte/s",
            "range": 30117.371768673853,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29614.417595872244,
            "unit": "MByte/s",
            "range": 24341.503184189256,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 74451.7251766285,
            "unit": "MByte/s",
            "range": 51948.33536511254,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43781.02384654412,
            "unit": "MByte/s",
            "range": 30267.278150983555,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 30404.62569998415,
            "unit": "MByte/s",
            "range": 24812.06845441875,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 81.652782041,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.948333740234375,
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
            "value": 69.98098561108478,
            "unit": "%",
            "range": 0.25402983556429776,
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
            "value": 9654.002326943171,
            "unit": "Ticks",
            "range": 228.02498856003064,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 9654.002326943171,
            "unit": "Ticks",
            "range": 228.02498856003064,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 660.7799308635294,
            "unit": "Ticks",
            "range": 8.943926783997389,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 83.441117022,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9957351684570312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 12.020000000000003,
            "unit": "ns",
            "range": 0.4686149805543996,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 13.719999999999997,
            "unit": "ns",
            "range": 0.8726969691708572,
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
          "id": "3ee9ca509f68c40d3ce11e8b06ff9a86878e310b",
          "message": "Merge pull request #1828 from hermit-os/phys_virt_mem\n\nrefactor(mm): remove physicalmem/virtualmem freestanding functions",
          "timestamp": "2025-07-24T08:09:29Z",
          "url": "https://github.com/hermit-os/kernel/commit/3ee9ca509f68c40d3ce11e8b06ff9a86878e310b"
        },
        "date": 1753347074452,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 99.910339212,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8754348754882812,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.9056691517200001,
            "unit": "s",
            "range": 0.011429064781416193,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.9150387605199999,
            "unit": "s",
            "range": 0.01596266636740123,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.9202382418399999,
            "unit": "s",
            "range": 0.017731103274379344,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 101.147442116,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9803619384765625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 72.20207548755464,
            "unit": "%",
            "range": 4.817884948855145,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 41.394987208934374,
            "unit": "%",
            "range": 3.137501238254331,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 20.78708455329732,
            "unit": "%",
            "range": 1.4765872482619737,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 82.379541501,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9882659912109375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 57.445004399999995,
            "unit": "ticks",
            "range": 1.1740838428335856,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 32.98550396,
            "unit": "ticks",
            "range": 4.052978032437132,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 13.649137840000003,
            "unit": "ticks",
            "range": 1.2554085111246196,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 86578.87222219196,
            "unit": "MByte/s",
            "range": 59855.92597948911,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43969.66802688931,
            "unit": "MByte/s",
            "range": 30398.91417334231,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29927.639614050513,
            "unit": "MByte/s",
            "range": 24602.170746811473,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 86500.74722219196,
            "unit": "MByte/s",
            "range": 59797.95934672202,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 44131.04867900541,
            "unit": "MByte/s",
            "range": 30512.156837536648,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 30698.919496216437,
            "unit": "MByte/s",
            "range": 25047.134879924568,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 78059.59097146489,
            "unit": "MByte/s",
            "range": 54240.00639087376,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43855.70630304785,
            "unit": "MByte/s",
            "range": 30337.933900187454,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29896.214601124677,
            "unit": "MByte/s",
            "range": 24569.316518516927,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 78431.98965711659,
            "unit": "MByte/s",
            "range": 54498.02390331065,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 44073.54526678305,
            "unit": "MByte/s",
            "range": 30486.562916965675,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 30656.327963160988,
            "unit": "MByte/s",
            "range": 25003.7383107689,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 80.97453269,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.94415283203125,
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
            "value": 69.92791062722807,
            "unit": "%",
            "range": 0.30619540441740506,
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
            "value": 9736.38872803309,
            "unit": "Ticks",
            "range": 234.49857692598147,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 9736.38872803309,
            "unit": "Ticks",
            "range": 234.49857692598147,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 661.6617023781961,
            "unit": "Ticks",
            "range": 11.077655057093521,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 81.20159573,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9877243041992188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 12.020000000000008,
            "unit": "ns",
            "range": 0.2441311123146742,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 13.739999999999995,
            "unit": "ns",
            "range": 0.844037913840368,
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
          "id": "7dd73eb17c2a459bf7f251d7a87e3a64f8e9cc3c",
          "message": "Merge pull request #1834 from Gelbpunkt/loopback\n\nfeat(drivers/net): Add loopback network driver",
          "timestamp": "2025-07-24T11:48:29Z",
          "url": "https://github.com/hermit-os/kernel/commit/7dd73eb17c2a459bf7f251d7a87e3a64f8e9cc3c"
        },
        "date": 1753360723190,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 93.032724013,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8756103515625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "1 core",
            "value": 0.9259798016799998,
            "unit": "s",
            "range": 0.035910772681385386,
            "group": "General",
            "plot_group": "Startup Time",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "2 cores",
            "value": 0.9602332714000001,
            "unit": "s",
            "range": 0.03559052488320989,
            "group": "General",
            "plot_group": "Startup Time",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "4 cores",
            "value": 0.94879901468,
            "unit": "s",
            "range": 0.03171453680365783,
            "group": "General",
            "plot_group": "Startup Time",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 91.868506604,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9803237915039062,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "2 Threads",
            "value": 90.31611526985111,
            "unit": "%",
            "range": 9.47030745652441,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "4 Threads",
            "value": 45.04970173156071,
            "unit": "%",
            "range": 3.199854592907279,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "8 Threads",
            "value": 25.75547036364882,
            "unit": "%",
            "range": 2.7896922232053663,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 95.790557074,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9882583618164062,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "1 thread",
            "value": 68.56861352000001,
            "unit": "ticks",
            "range": 3.9389871967881818,
            "group": "Micro",
            "plot_group": "Scheduling time",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "2 threads",
            "value": 40.14397004,
            "unit": "ticks",
            "range": 5.147966310339566,
            "group": "Micro",
            "plot_group": "Scheduling time",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 15.0852544,
            "unit": "ticks",
            "range": 1.0074154646350828,
            "group": "Micro",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 75173.91124530627,
            "unit": "MByte/s",
            "range": 51907.31297240867,
            "group": "Micro",
            "plot_group": "Memcpy speed",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41441.55519898918,
            "unit": "MByte/s",
            "range": 28752.19604386113,
            "group": "Micro",
            "plot_group": "Memcpy speed",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 27895.690593239662,
            "unit": "MByte/s",
            "range": 22943.22754643394,
            "group": "Micro",
            "plot_group": "Memcpy speed",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 75624.97580574582,
            "unit": "MByte/s",
            "range": 52232.16046059488,
            "group": "Micro",
            "plot_group": "Memset speed",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 41734.03425880833,
            "unit": "MByte/s",
            "range": 28948.405278567843,
            "group": "Micro",
            "plot_group": "Memset speed",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28634.511169511035,
            "unit": "MByte/s",
            "range": 23369.491055448223,
            "group": "Micro",
            "plot_group": "Memset speed",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "(rust) block size 4096",
            "value": 66054.5074661034,
            "unit": "MByte/s",
            "range": 46243.15301231742,
            "group": "Micro",
            "plot_group": "Memcpy speed",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41306.1801003026,
            "unit": "MByte/s",
            "range": 28663.822016051472,
            "group": "Micro",
            "plot_group": "Memcpy speed",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28149.783394809998,
            "unit": "MByte/s",
            "range": 23156.56589395822,
            "group": "Micro",
            "plot_group": "Memcpy speed",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "(rust) block size 4096",
            "value": 66542.54574361535,
            "unit": "MByte/s",
            "range": 46566.248578910956,
            "group": "Micro",
            "plot_group": "Memset speed",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 41528.583855958204,
            "unit": "MByte/s",
            "range": 28815.230627016266,
            "group": "Micro",
            "plot_group": "Memset speed",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28864.62689958384,
            "unit": "MByte/s",
            "range": 23563.003087157293,
            "group": "Micro",
            "plot_group": "Memset speed",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 92.037561696,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.9442138671875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "Allocation success",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "Deallocation success",
            "value": 69.9562655002101,
            "unit": "%",
            "range": 0.26585547597609566,
            "group": "Allocations",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "Pre-fail Allocations",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "Average Allocation time",
            "value": 10217.16479578243,
            "unit": "Ticks",
            "range": 258.05201075557414,
            "group": "Allocations",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 10217.16479578243,
            "unit": "Ticks",
            "range": 258.05201075557414,
            "group": "Allocations",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "Average Deallocation time",
            "value": 706.5045058953458,
            "unit": "Ticks",
            "range": 16.770613476599966,
            "group": "Allocations",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 91.828385212,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9876937866210938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "1 Threads",
            "value": 13.799999999999999,
            "unit": "ns",
            "range": 0.8944271909999157,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "2 Threads",
            "value": 16.3,
            "unit": "ns",
            "range": 1.417744687875783,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration",
            "runner_name": "github-runner-hermit-1"
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
          "id": "946d38b48358de27dc01a8048c1d5b241e97a574",
          "message": "Merge pull request #1841 from hermit-os/wake\n\nfix(executor): always wake up waker when pending",
          "timestamp": "2025-07-24T12:33:22Z",
          "url": "https://github.com/hermit-os/kernel/commit/946d38b48358de27dc01a8048c1d5b241e97a574"
        },
        "date": 1753362589969,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "startup_benchmark Build Time",
            "value": 91.125340815,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "startup_benchmark File Size",
            "value": 0.8756103515625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "1 core",
            "value": 0.9687249957199999,
            "unit": "s",
            "range": 0.03245012076526367,
            "group": "General",
            "plot_group": "Startup Time",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "2 cores",
            "value": 0.9681265516799998,
            "unit": "s",
            "range": 0.028400609182704126,
            "group": "General",
            "plot_group": "Startup Time",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "4 cores",
            "value": 0.96449474368,
            "unit": "s",
            "range": 0.03589070981636447,
            "group": "General",
            "plot_group": "Startup Time",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "multithreaded_benchmark Build Time",
            "value": 92.50824105,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "multithreaded_benchmark File Size",
            "value": 0.9803543090820312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "2 Threads",
            "value": 88.44537785330114,
            "unit": "%",
            "range": 9.74616269805776,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "4 Threads",
            "value": 44.21862306871872,
            "unit": "%",
            "range": 3.7590549839113767,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "8 Threads",
            "value": 25.57575781340257,
            "unit": "%",
            "range": 2.4921982522605357,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency",
            "runner_name": "github-runner-hermit-1"
          },
          {
            "name": "micro_benchmarks Build Time",
            "value": 104.369231021,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "micro_benchmarks File Size",
            "value": 0.9882583618164062,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "1 thread",
            "value": 64.52226207999999,
            "unit": "ticks",
            "range": 2.8956400211496724,
            "group": "Micro",
            "plot_group": "Scheduling time",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "2 threads",
            "value": 37.32885324,
            "unit": "ticks",
            "range": 4.470832166703996,
            "group": "Micro",
            "plot_group": "Scheduling time",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 14.021351119999999,
            "unit": "ticks",
            "range": 0.754816418421556,
            "group": "Micro",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 77615.07500615952,
            "unit": "MByte/s",
            "range": 53549.710782949755,
            "group": "Micro",
            "plot_group": "Memcpy speed",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43043.945525821735,
            "unit": "MByte/s",
            "range": 29806.342309537216,
            "group": "Micro",
            "plot_group": "Memcpy speed",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 28552.415463157424,
            "unit": "MByte/s",
            "range": 23467.549650926976,
            "group": "Micro",
            "plot_group": "Memcpy speed",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 77754.79463232774,
            "unit": "MByte/s",
            "range": 53641.33412657127,
            "group": "Micro",
            "plot_group": "Memset speed",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 43256.938296056345,
            "unit": "MByte/s",
            "range": 29952.882350690772,
            "group": "Micro",
            "plot_group": "Memset speed",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 29314.27058666667,
            "unit": "MByte/s",
            "range": 23918.513979570347,
            "group": "Micro",
            "plot_group": "Memset speed",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "(rust) block size 4096",
            "value": 71202.71947166185,
            "unit": "MByte/s",
            "range": 49762.11620975009,
            "group": "Micro",
            "plot_group": "Memcpy speed",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 42974.31423919262,
            "unit": "MByte/s",
            "range": 29770.030529298474,
            "group": "Micro",
            "plot_group": "Memcpy speed",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 28823.729794754116,
            "unit": "MByte/s",
            "range": 23701.165981435133,
            "group": "Micro",
            "plot_group": "Memcpy speed",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "(rust) block size 4096",
            "value": 71578.22967574348,
            "unit": "MByte/s",
            "range": 50006.3915917839,
            "group": "Micro",
            "plot_group": "Memset speed",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 43217.18765578585,
            "unit": "MByte/s",
            "range": 29936.50228749486,
            "group": "Micro",
            "plot_group": "Memset speed",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 29545.47522356746,
            "unit": "MByte/s",
            "range": 24108.900648748928,
            "group": "Micro",
            "plot_group": "Memset speed",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "alloc_benchmarks Build Time",
            "value": 102.774539712,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "alloc_benchmarks File Size",
            "value": 0.944244384765625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "Allocation success",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "Deallocation success",
            "value": 70.07678735987628,
            "unit": "%",
            "range": 0.2781560640755741,
            "group": "Allocations",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "Pre-fail Allocations",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "Average Allocation time",
            "value": 9747.598413545536,
            "unit": "Ticks",
            "range": 172.11795721577892,
            "group": "Allocations",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 9747.598413545536,
            "unit": "Ticks",
            "range": 172.11795721577892,
            "group": "Allocations",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "Average Deallocation time",
            "value": 679.1715083605876,
            "unit": "Ticks",
            "range": 10.802937951775595,
            "group": "Allocations",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "mutex_benchmark Build Time",
            "value": 102.611129556,
            "unit": "s",
            "range": 0,
            "group": "Build",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "mutex_benchmark File Size",
            "value": 0.9877243041992188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "none",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "1 Threads",
            "value": 12.919999999999995,
            "unit": "ns",
            "range": 0.5600000000000002,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration",
            "runner_name": "github-runner-hermit-3"
          },
          {
            "name": "2 Threads",
            "value": 16.040000000000006,
            "unit": "ns",
            "range": 0.6916646586316232,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration",
            "runner_name": "github-runner-hermit-3"
          }
        ]
      }
    ]
  }
}