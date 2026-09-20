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

**Presented at:** 35th JAXA Astrodynamics Workshop (ISAS / JAXA) &nbsp;|&nbsp; **Paper Record:** [jaxa.repo.nii.ac.jp/records/2002502](https://jaxa.repo.nii.ac.jp/records/2002502){:target="_blank" rel="noopener"}  
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

## Summary

Planning fuel-efficient transfer orbits to small Solar System bodies presents difficult computational challenges. Target asteroids such as **3200 Phaethon** (the high-eccentricity target of JAXA’s DESTINY+ mission, with eccentricity $e = 0.89$ and orbital inclination $i = 22.3^\circ$) and dwarf planet **1 Ceres** require navigating non-linear gravitational dynamics under strict spacecraft propellant ($\Delta V$) limits. Standard gradient-based solvers easily get trapped in local minima, while brute-force grid searches across launch windows and flight durations are computationally slow.

This research developed an automated trajectory optimisation pipeline in Python using **Particle Swarm Optimisation (PSO)**. The algorithm simulates a swarm of candidate trajectories ("particles") that explore the parameter space together, sharing information to converge on the most fuel-efficient departure velocity and flight time. The solver pairs numerical orbital propagation with an analytical Kepler solver capable of handling high orbital eccentricities with sub-second numerical convergence.

### Key Results & Findings

- **Direct Asteroid Intercept:** Identified a direct Earth-to-Phaethon transfer taking **212.7 days** (a sub-year direct flight).
- **Fast Swarm Convergence:** The PSO solver consistently converged on global optimal trajectories within **40 to 60 iterations** (using 30–50 particles), removing the need for manual initial guesses.
- **Multi-Target Transfers:** Successfully mapped viable sequential multi-target flybys (Earth $\to$ 3200 Phaethon $\to$ 1 Ceres), evaluating consecutive arrival and departure velocity vectors and required orbital phasing.
- **Mission Robustness & Error Analysis:** Conducted a 500-run Monte Carlo dispersion analysis introducing realistic rocket thruster execution errors ($\pm 3\sigma$) and pointing misalignments. An uncorrected ballistic flight achieved only a **3.4% intercept success rate**, establishing the critical sizing margins and tracking cadence required for mid-course trajectory correction manoeuvres (TCM).
- **Conference Review & Archival:** The work was presented at the **35th JAXA Astrodynamics Workshop** and is permanently archived in the official ISAS/JAXA research repository.

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
