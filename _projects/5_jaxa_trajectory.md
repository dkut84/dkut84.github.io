---
layout: page
title: "Interplanetary Trajectory Optimisation"
description: "Particle swarm optimization & Monte Carlo dispersion analysis for asteroid intercept trajectories"
img: assets/img/4.jpg
importance: 5
category: Astrodynamics
---

## Role & Context
**Role:** Astrodynamics Researcher  
**Timeline:** June 2025 – Aug 2025  
**Conference:** 35th JAXA Astrodynamics Workshop  
**Paper / Record:** [jaxa.repo.nii.ac.jp/records/2002502](https://jaxa.repo.nii.ac.jp/records/2002502)  
**Key Tools:** Python, SciPy, Monte Carlo Analysis  

---

## Overview
Optimizing high-thrust interplanetary transfers to near-Earth asteroids requires navigating non-linear gravitational fields and stringent $\Delta V$ constraints. This study developed an automated trajectory optimizer using global heuristic search coupled with stochastic perturbation analysis.

---

## Technical Highlights

### 1. Particle Swarm Optimization (PSO)
- Implemented a custom particle swarm optimization pipeline in Python/SciPy to explore multi-dimensional launch windows, departure $\Delta V$, and time-of-flight.
- Discovered a global minimum **405-day Earth-to-asteroid direct intercept trajectory**, reducing total mission $\Delta V$ by over 14% compared to standard Lambert arc baselines.

### 2. Monte Carlo Dispersion & Robustness Verification
- Simulated **500-iteration Monte Carlo engine execution dispersion runs**, incorporating $\pm 3\sigma$ thrust vector misalignment and specific impulse degradation.
- Established a **3.4% uncorrected ballistic success rate**, identifying required mid-course correction burn sizing and navigation tracking cadence.

### 3. Academic Presentation
- Authored a technical manuscript and delivered an oral presentation at the **35th JAXA Astrodynamics Workshop**.
