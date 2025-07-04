window.BENCHMARK_DATA = {
  "lastUpdate": 1751628003756,
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
      }
    ]
  }
}