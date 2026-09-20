---
layout: page
title: "Interplanetary Trajectory Optimisation using Particle Swarm Optimisation"
description: "Global heuristic optimisation and Monte Carlo dispersion analysis for Earth-to-asteroid intercept trajectories, presented at JAXA"
img: assets/img/jaxa_phaethon_ceres_3d.png
importance: 2
category: Astrodynamics
pdf: assets/pdf/jaxa_astrodynamics_paper.pdf
---

# Interplanetary Trajectory Optimisation using Particle Swarm Optimisation
### Global Heuristic Optimisation and Monte Carlo Dispersion Analysis for Earth-to-Asteroid Intercept Trajectories

**Author:** Dion Kuteesa  
**Conference:** 35th JAXA Astrodynamics Workshop (Institute of Space and Astronautical Science / JAXA)  
**Official Paper Record:** [jaxa.repo.nii.ac.jp/records/2002502](https://jaxa.repo.nii.ac.jp/records/2002502){:target="_blank" rel="noopener"}  
**Core Methodology:** Particle Swarm Optimisation (PSO), SciPy, Two-Body Numerical Propagation, Monte Carlo Dispersion  

<div class="row justify-content-center my-3">
  <div class="col-12 text-center">
    <a href="{{ '/assets/pdf/jaxa_astrodynamics_paper.pdf' | relative_url }}" target="_blank" class="btn btn-primary btn-sm z-depth-1 mx-1 mb-2">
      <i class="fas fa-file-pdf mr-1"></i> Open Conference Paper (PDF)
    </a>
    <a href="{{ '/assets/pdf/jaxa_astrodynamics_paper.pdf' | relative_url }}" download="jaxa_astrodynamics_paper.pdf" class="btn btn-outline-primary btn-sm z-depth-1 mx-1 mb-2">
      <i class="fas fa-download mr-1"></i> Download PDF
    </a>
    <a href="https://jaxa.repo.nii.ac.jp/records/2002502" target="_blank" rel="noopener" class="btn btn-outline-secondary btn-sm z-depth-1 mx-1 mb-2">
      <i class="fas fa-external-link-alt mr-1"></i> JAXA Repository Record
    </a>
    <a href="#report-viewer" class="btn btn-secondary btn-sm z-depth-1 mx-1 mb-2">
      <i class="fas fa-book-reader mr-1"></i> Jump to Document Viewer
    </a>
  </div>
</div>

---

## Executive Summary & Problem Context

Trajectory design to small Solar System bodies presents steep computational hurdles. Targets such as **3200 Phaethon** (the high-eccentricity target of JAXA’s DESTINY+ mission, $e = 0.89$, inclination $i = 22.3^\circ$) and dwarf planet **1 Ceres** require navigating non-linear gravitational dynamics under strict $\Delta V$ propellant budgets. Conventional gradient-based solvers frequently stall in local minima, while brute-force grid searches across launch windows and time-of-flight become prohibitively slow.

This research developed a global heuristic optimization pipeline applying **Particle Swarm Optimisation (PSO)** in Python/SciPy to compute fuel-optimal transfer trajectories from Earth to high-eccentricity and multi-asteroid rendezvous targets:

- **Continuous PSO Engine:** Candidate trajectories are modeled as particle vectors of departure velocity increments $(\Delta v_x, \Delta v_y, \Delta v_z)$ and time-of-flight $(\Delta t)$, guided by adaptive inertia weight decay ($w: 0.9 \to 0.4$) and cognitive/social acceleration terms.
- **Orbital Propagation & Kepler Solver:** Implemented analytical orbital element conversion routines and a robust Newton-Raphson solver for Kepler's Equation ($M = E - e \sin E$) capable of sub-second convergence ($<10^{-8}$ tolerance) at high eccentricities ($e = 0.89$).
- **Multi-Target Architecture:** Evaluated consecutive arrival/departure velocity vectors and phasing maneuvers for multi-target flybys (Earth $\to$ Phaethon $\to$ Ceres).
- **Monte Carlo Robustness Testing:** Conducted a 500-run Monte Carlo dispersion analysis with $\pm 3\sigma$ thrust execution errors and pointing misalignments to establish required margins for trajectory correction maneuvers (TCM).

---

## Trajectory Visualisations & Swarm Convergence

<div class="row justify-content-center my-4">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/jaxa_phaethon_ceres_3d.png" 
      title="3D Heliocentric Multi-Target Trajectory: Earth to Phaethon and Ceres" 
      class="img-fluid rounded z-depth-1" 
    %}
    <div class="caption text-center">
      Figure 1: 3D heliocentric trajectory showing Earth departure, intercept of asteroid 3200 Phaethon, and subsequent transfer to dwarf planet 1 Ceres.
    </div>
  </div>
</div>

<div class="row justify-content-center my-4">
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
    <div class="caption text-center">Figure 3: Global best objective score convergence across swarm generations.</div>
  </div>
</div>

---

## Key Results & Findings

| Metric / Parameter | Performance / Result | Impact / Significance |
| :--- | :--- | :--- |
| **Direct Transfer Time to Phaethon** | **212.7 days** | Sub-year direct intercept to high-eccentricity target ($e = 0.89$) |
| **PSO Swarm Convergence** | **40–60 iterations** (30–50 particles) | Sub-minute global solution without requiring manual initial guesses |
| **Multi-Asteroid Transfer** | **Earth $\to$ Phaethon $\to$ Ceres** | Verified multi-target capability and flyby phasing maneuvers |
| **Uncorrected Ballistic Intercept** | **3.4% success rate** (500 runs) | Quantifies required $\Delta V$ sizing margins for mid-course TCM burns |
| **Conference Review & Publication** | **35th JAXA Astrodynamics Workshop** | Oral presentation and formal archival record in JAXA repository |

---

## Conference Paper Deliverable {#report-viewer}

The complete conference paper published at the 35th JAXA Astrodynamics Workshop is embedded below:

<div class="row justify-content-center mb-3">
  <div class="col-12 text-center">
    <a href="{{ '/assets/pdf/jaxa_astrodynamics_paper.pdf' | relative_url }}" target="_blank" class="btn btn-primary font-weight-bold mx-1 my-1 px-4 py-2">
      <i class="fas fa-external-link-alt mr-2"></i> Open Paper in New Tab (PDF)
    </a>
    <a href="{{ '/assets/pdf/jaxa_astrodynamics_paper.pdf' | relative_url }}" download="jaxa_astrodynamics_paper.pdf" class="btn btn-outline-primary font-weight-bold mx-1 my-1 px-4 py-2">
      <i class="fas fa-download mr-2"></i> Download Paper (PDF)
    </a>
    <a href="https://jaxa.repo.nii.ac.jp/records/2002502" target="_blank" rel="noopener" class="btn btn-outline-secondary font-weight-bold mx-1 my-1 px-3 py-2">
      <i class="fas fa-external-link-alt mr-2"></i> JAXA Repository Record
    </a>
  </div>
</div>

<div class="row justify-content-center my-3">
  <div class="col-12">
    <object 
      data="{{ '/assets/pdf/jaxa_astrodynamics_paper.pdf' | relative_url }}" 
      type="application/pdf" 
      width="100%" 
      height="950px" 
      style="border: 1px solid #cbd5e1; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      <iframe 
        src="https://docs.google.com/viewer?url=https%3A%2F%2Fdkut84.github.io%2Fassets%2Fpdf%2Fjaxa_astrodynamics_paper.pdf&embedded=true" 
        width="100%" 
        height="950px" 
        style="border: none;"
        title="JAXA Astrodynamics Conference Paper Viewer">
        <p>Your browser does not support inline PDFs. <a href="{{ '/assets/pdf/jaxa_astrodynamics_paper.pdf' | relative_url }}">Download the conference paper directly</a>.</p>
      </iframe>
    </object>
  </div>
</div>
