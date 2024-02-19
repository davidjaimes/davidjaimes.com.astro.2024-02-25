---
layout: ../layouts/post-layout.astro
title: "Python: Setup and configure"
date: "Feb 19, 2024"
excerpt: Instructions for Apple M1 computer.
---

## Get Started

Install the [Miniforge distribution](https://github.com/conda-forge/miniforge):
```shell
bash Miniforge3-MacOSX-arm64.sh
```

Create an environment with the name `arm64`:
```shell
mamba create -n arm64 python=3.12 pandas pyarrow
```

Activate newly created environment:
```shell
mamba activate arm64
```

Install other packages:
```shell
pip install jupyterlab python-calamine xlsxwriter
```