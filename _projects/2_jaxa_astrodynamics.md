---
layout: page
title: "Interplanetary Trajectory Optimisation using Particle Swarm Optimisation"
description: "Global heuristic optimisation and Monte Carlo dispersion analysis for Earth-to-asteroid intercept trajectories, presented at JAXA"
img: assets/img/jaxa_phaethon_ceres_3d.png
importance: 2
category: Astrodynamics
---

## Overview & Publication
**Author:** Dion Kuteesa  
**Conference:** 35th JAXA Astrodynamics Workshop (Institute of Space and Astronautical Science / JAXA)  
**Official Paper Record:** [jaxa.repo.nii.ac.jp/records/2002502](https://jaxa.repo.nii.ac.jp/records/2002502){:target="_blank" rel="noopener"}  
**PDF Deliverable:** [Download Conference Paper]({{ '/assets/pdf/jaxa_astrodynamics_paper.pdf' | relative_url }}){:target="_blank" class="btn btn-sm z-depth-0" style="background-color: #0076df; color: white;"}  
**Core Methodology:** Particle Swarm Optimisation (PSO), SciPy, Two-Body Numerical Propagation, Monte Carlo Dispersion  

---

## Background: The Interplanetary Intercept Problem
Planning trajectories to small Solar System bodies presents steep computational hurdles. Targets such as **3200 Phaethon** (the high-eccentricity target of JAXA’s DESTINY+ mission, $e = 0.89$, inclination $i = 22.3^\circ$) and dwarf planet **1 Ceres** require navigating non-linear gravitational dynamics and strict $\Delta V$ propellant budgets. Traditional gradient-based methods are prone to getting trapped in local minima, while brute-force grid searches across launch windows and time-of-flight become prohibitively slow.

This research developed a global heuristic optimisation pipeline applying **Particle Swarm Optimisation (PSO)** to compute fuel-optimal transfer trajectories from Earth to high-eccentricity and multi-asteroid rendezvous targets.

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/jaxa_phaethon_ceres_3d.png" 
      title="3D Helocentric Multi-Target Trajectory: Earth to Phaethon and Ceres" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption">
  Figure 1: 3D heliocentric trajectory showing Earth departure, intercept of asteroid 3200 Phaethon, and subsequent transfer to dwarf planet 1 Ceres.
</div>

---

## Technical Methodology & Implementation

### 1. Particle Swarm Optimisation (PSO) Engine
- Designed a continuous-variable heuristic solver in Python/SciPy where each particle represents a candidate trajectory defined by a vector of departure impulse components $(\Delta v_x, \Delta v_y, \Delta v_z)$ and transfer time $(\Delta t)$.
- Formulated an adaptive inertia weight decay ($w: 0.9 \to 0.4$) alongside cognitive ($c_1$) and social ($c_2$) acceleration parameters to encourage broad global exploration in early generations and fine convergence in later steps:
  
  $$\vec{v}_i^{(k+1)} = w \vec{v}_i^{(k)} + c_1 r_1 (\vec{p}_{best, i} - \vec{x}_i^{(k)}) + c_2 r_2 (\vec{g}_{best} - \vec{x}_i^{(k)})$$

- Penalized fitness functions accounting for miss distance at intercept, total required velocity change ($\Delta V_{tot}$), and solar proximity constraints (maintaining safe distances from the solar surface to avoid numerical singularity or thermal destruction).

### 2. High-Precision Orbital Dynamics & Kepler Solvers
- Built analytical orbital element conversion routines (`coe_to_rv`) transforming Classical Orbital Elements (semi-major axis $a$, eccentricity $e$, inclination $i$, RAAN $\Omega$, argument of periapsis $\omega$, true anomaly $\nu$) to heliocentric Cartesian state vectors.
- Developed a robust Newton-Raphson solver for **Kepler's Equation** ($M = E - e \sin E$) capable of handling high orbital eccentricities ($e = 0.89$ for Phaethon) with sub-second numerical convergence ($< 10^{-8}$ tolerance).
- Propagated trajectories via variable-step Runge-Kutta numerical integration (`solve_ivp` with RK45), modeling the probe's gravitational interaction with the central solar body.

<div class="row justify-content-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/jaxa_phaethon_ceres_2d.png" 
      title="2D Ecliptic Projection of Multi-Asteroid Trajectory" 
      class="img-fluid rounded z-depth-1" 
    %}
    <div class="caption text-center">Figure 2: 2D ecliptic plane projection showing orbital phasing.</div>
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/jaxa_convergence.png" 
      title="PSO Objective Fitness Convergence" 
      class="img-fluid rounded z-depth-1" 
    %}
    <div class="caption text-center">Figure 3: Global best objective score convergence across iterations.</div>
  </div>
</div>

### 3. Multi-Target Flyby & Launch Window Sweep
- Expanded the solver from single-leg transfers to **multi-target mission architectures** (Earth $\to$ 3200 Phaethon $\to$ 1 Ceres), evaluating consecutive arrival and departure velocity vectors and required phasing maneuvers.
- Evaluated Pareto frontiers balancing transfer flight time against total impulse budget.

### 4. Monte Carlo Dispersion & Robustness Testing
- Subjected the optimal solutions to a **500-run Monte Carlo dispersion analysis** to quantify trajectory vulnerability against real-world propulsion execution errors.
- Introduced Gaussian perturbations:
  - $\pm 3\sigma$ thrust magnitude dispersion ($\Delta V$ execution error).
  - Random pointing misalignment in pitch and yaw.
- Established that uncorrected ballistic flights yielded a **3.4% intercept success rate**, establishing the critical sizing margins and tracking cadence required for mid-course correction (TCM) trim burns.

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/jaxa_phaethon_3d.png" 
      title="Evolution of Candidate Trajectories Over PSO Iterations" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption">
  Figure 4: 3D visualization showing candidate trajectories converging towards the optimal intercept point over successive swarm generations.
</div>

---

## Key Results & Findings

| Metric | Result / Performance |
| :--- | :--- |
| **Phaethon Direct Transfer Time** | **212.7 days** (sub-year direct intercept) |
| **Convergence Rate** | Full swarm convergence within **40–60 iterations** (30–50 particles) |
| **Multi-Asteroid Capability** | Successfully mapped viable sequential legs to Phaethon and Ceres |
| **Uncorrected Ballistic Success Rate** | **3.4%** across 500-iteration Monte Carlo $\pm 3\sigma$ dispersion |
| **Presentation & Peer Review** | Oral presentation delivered at the **35th JAXA Astrodynamics Workshop** |

---

## Conference Paper Deliverable

<div class="row justify-content-center mb-3">
  <div class="col-12 text-center">
    <a href="{{ '/assets/pdf/jaxa_astrodynamics_paper.pdf' | relative_url }}" target="_blank" class="btn btn-primary btn-sm z-depth-1">
      <i class="fas fa-file-pdf"></i> Open Conference Paper in New Tab
    </a>
    <a href="https://jaxa.repo.nii.ac.jp/records/2002502" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm z-depth-1">
      <i class="fas fa-external-link-alt"></i> JAXA Repository Record
    </a>
  </div>
</div>

<div class="row justify-content-center">
  <div class="col-12">
    <iframe 
      src="{{ '/assets/pdf/jaxa_astrodynamics_paper.pdf' | relative_url }}" 
      width="100%" 
      height="850px" 
      style="border: 1px solid #cbd5e1; border-radius: 6px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
    </iframe>
  </div>
</div>
