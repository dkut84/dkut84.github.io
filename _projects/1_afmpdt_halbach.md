---
layout: page
title: "Permanent-Magnet Halbach Array for an Argon AF-MPD Thruster"
description: "Settled Design Configuration for Continuous Operation, with the Magnetic, Thermal and Discharge Analysis Behind It"
img: assets/img/fig_02_field_map.png
importance: 1
category: Electric Propulsion
pdf: assets/pdf/TN02_AFMPDT_Final_Report.pdf
---

# Technical Note TN-02: Permanent Magnet Architecture for an AF-MPD Thruster
### Settled Design Configuration for Continuous Operation, with the Magnetic, Thermal and Discharge Analysis Behind It

**Author:** Dion Kuteesa  
**Role:** Research Intern (Electric Propulsion)  
**Organization:** Theta Systems  
**Date:** September 2026  
**Deliverables:** Technical Note TN-02 (32-Page Final Report) & 10-Sheet A3 Manufacturing Drawing Set  

<div class="row justify-content-center my-3">
  <div class="col-12 text-center">
    <a href="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}" target="_blank" class="btn btn-primary btn-sm z-depth-1 mx-1 mb-2">
      <i class="fas fa-file-pdf mr-1"></i> Read Full Report (PDF)
    </a>
    <a href="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}" download="TN02_AFMPDT_Final_Report.pdf" class="btn btn-outline-primary btn-sm z-depth-1 mx-1 mb-2">
      <i class="fas fa-download mr-1"></i> Download PDF
    </a>
    <a href="{{ '/assets/pdf/afmpdt_poster.pdf' | relative_url }}" target="_blank" class="btn btn-outline-secondary btn-sm z-depth-1 mx-1 mb-2">
      <i class="fas fa-image mr-1"></i> View Technical Poster
    </a>
    <a href="#report-viewer" class="btn btn-secondary btn-sm z-depth-1 mx-1 mb-2">
      <i class="fas fa-book-reader mr-1"></i> Jump to Report Viewer
    </a>
  </div>
</div>

---

## Executive Summary & Context

Applied-Field Magnetoplasmadynamic Thrusters (AF-MPDT) offer high thrust density and specific impulse ($I_{sp} \sim 2,000\text{–}5,000\text{ s}$) using low-cost argon propellant. However, conventional AF-MPD designs rely on heavy, power-hungry electromagnetic solenoids requiring dedicated high-current power supplies and active liquid cooling loops that small spacecraft cannot support.

This development program specifies a passive **permanent-magnet Halbach array** for a 1–5 kW breadboard argon AF-MPD thruster designed for **continuous** orbit-raising operation. Through a coupled multiphysics sweep of **143 magnetostatic configurations** and **84 thermal cases**, the design settles all structural, magnetic, and thermal requirements:

1. **Applied Field Generation:** Generates **0.631 T** axial field at the cathode tip at steady-state operating temperature, exceeding the **0.40 T floor requirement** by **+57.7%**.
2. **Continuous Heat Rejection:** 488 W of the 500 W plasma arc dissipation (97.6%) is conducted axially rearward through a full-diameter copper spreader and AlN dielectric isolation plate into an external spacecraft cold plate, holding magnet tiles at **72°C** (well below their 180°C limit).
3. **Mass & Envelope Compliance:** Complete assembly mass is **7.17 kg** within a 114 mm outside diameter envelope, safely under the 7.50 kg limit.
4. **Predicted Thrust Scaling:** Discharge current streamline modeling and an empirical fit across **667 published experimental argon thruster firings** predict **186 mN of thrust at 100 A** discharge current.

---

## Multiphysics Field Solutions & Technical Poster

Below are the two cornerstone COMSOL Multiphysics 2D axisymmetric field solutions establishing the magnetic field concentration and steady-state thermal equilibrium, alongside the technical showcase poster:

<div class="row justify-content-center my-4">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_02_field_map.png" 
      title="COMSOL 2D Axisymmetric Magnetic Flux Density Map" 
      class="img-fluid rounded z-depth-1" 
    %}
    <div class="caption text-center">
      Figure 1: COMSOL 2D axisymmetric magnetic flux density map showing Halbach circulation through the 1010 steel return casing and on-axis bore concentration (0.631 T hot at cathode tip).
    </div>
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_06_temperature_field.png" 
      title="COMSOL 2D Axisymmetric Steady-State Temperature Field" 
      class="img-fluid rounded z-depth-1" 
    %}
    <div class="caption text-center">
      Figure 2: COMSOL 2D steady-state temperature field under 500 W continuous arc load. Rear axial conduction maintains magnet tiles at 72°C (well below the 180°C demagnetization rating).
    </div>
  </div>
</div>

<div class="row justify-content-center my-4">
  <div class="col-sm-11 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/afmpdt_poster.png" 
      title="AF-MPDT Technical Showcase Poster" 
      class="img-fluid rounded z-depth-1" 
    %}
    <div class="caption text-center">
      Figure 3: Comprehensive AF-MPDT Technical Showcase Poster detailing magnetic circuit topology, thermal resistance network, and predicted thrust scaling.
    </div>
  </div>
</div>

---

## Key Performance Metrics & Settled Specifications

| Subsystem / Metric | Settled Design Value | Design Requirement / Limit | Margin / Status |
| :--- | :--- | :--- | :--- |
| **Cathode Tip Field ($B_z$)** | **0.631 T** (at 72°C operating temp) | $\ge 0.40\text{ T}$ | **+57.7% margin** |
| **Peak Magnet Temperature** | **72°C** (Rear Cap) / 66°C (Core) | $< 100^\circ\text{C}$ target / $180^\circ\text{C}$ limit | **+108 K safety margin** |
| **Peak Anode Temperature** | **288°C** (Exit Plane) | $< 400^\circ\text{C}$ (softening point) | **+112 K margin** |
| **Continuous Heat Rejection** | **488 W of 500 W (97.6%)** via rear cold plate | Continuous orbit-raising dissipation | Verified in FEA |
| **Total Assembly Mass** | **7.17 kg** | $\le 7.50\text{ kg}$ envelope | **Compliant** |
| **Predicted Thrust at 100 A** | **186 mN** (interquartile: 93–226 mN) | Breadboard 1–5 kW class | Calibrated to 667 firings |
| **Demagnetisation Margin** | **$\ge 23\%$** across all magnet volume | No irreversible demagnetisation | Verified to 130°C |
| **Drawing Set Deliverables** | **10 A3 manufacturing sheets** (AFMPDT3-001 to 010) | Complete GD&T CAD package | Included in full report |

---

## Full Technical Report Deliverable {#report-viewer}

The complete 32-page publication deliverable (**Technical Note TN-02**: *Permanent Magnet Architecture for an AF-MPD Thruster: Settled Design Configuration for Continuous Operation, with the Magnetic, Thermal and Discharge Analysis Behind It*) and the complete 10-sheet A3 engineering drawing set are embedded below:

<div class="row justify-content-center mb-3">
  <div class="col-12 text-center">
    <a href="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}" target="_blank" class="btn btn-primary font-weight-bold mx-1 my-1 px-4 py-2">
      <i class="fas fa-external-link-alt mr-2"></i> Open Full Report in New Tab (PDF)
    </a>
    <a href="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}" download="TN02_AFMPDT_Final_Report.pdf" class="btn btn-outline-primary font-weight-bold mx-1 my-1 px-4 py-2">
      <i class="fas fa-download mr-2"></i> Download Full Report (PDF, 32 Pages)
    </a>
    <a href="{{ '/assets/pdf/afmpdt_poster.pdf' | relative_url }}" target="_blank" class="btn btn-outline-secondary font-weight-bold mx-1 my-1 px-3 py-2">
      <i class="fas fa-image mr-2"></i> View Technical Poster
    </a>
  </div>
</div>

<div class="row justify-content-center my-3">
  <div class="col-12">
    <object 
      data="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}" 
      type="application/pdf" 
      width="100%" 
      height="950px" 
      style="border: 1px solid #cbd5e1; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      <iframe 
        src="https://docs.google.com/viewer?url=https%3A%2F%2Fdkut84.github.io%2Fassets%2Fpdf%2FTN02_AFMPDT_Final_Report.pdf&embedded=true" 
        width="100%" 
        height="950px" 
        style="border: none;"
        title="TN-02 Technical Report Document Viewer">
        <p>Your browser does not support inline PDFs. <a href="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}">Download the full PDF report directly</a>.</p>
      </iframe>
    </object>
  </div>
</div>
