---
layout: page
title: "AF-MPDT: Permanent-Magnet Halbach Array Circuit"
description: "High-field permanent-magnet circuit replacing solenoids for 1–5 kW argon plasma thruster"
img: assets/img/afmpdt_ga.png
importance: 1
category: Electric Propulsion
---

## Role & Context
**Role:** Research Intern (Electric Propulsion)  
**Organization:** Theta Systems  
**Key Tools:** COMSOL Multiphysics, Python-automated FEMM, SolidWorks, GD&T  

---

## Overview
Applied-Field Magnetoplasmadynamic Thrusters (AF-MPDT) provide high thrust densities for deep-space interplanetary missions. Traditional configurations rely on heavy electromagnetic solenoids consuming hundreds of watts in resistive heating. 

This project developed a high-efficiency **permanent-magnet Halbach cylinder array** (sintered NdFeB N48UH encased in a 10 mm 1010 low-carbon steel flux return sleeve) engineered to produce **0.36–0.63 T on-axis** at the cathode tip, achieving massive weight savings and zero electrical coil overhead in a compact **7.2 kg envelope**.

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/afmpdt_ga.png" 
      title="AF-MPDT General Assembly and Cutaway" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption">
  Figure 1: Cross-sectional CAD model illustrating the central cathode, concentric anode channel, dielectric spacers, and segmented Halbach array.
</div>

---

## Technical Highlights

### 1. Multiphysics Magnetostatic Verification
- Designed a segmented Halbach array with optimized tile magnetization angles to concentrate magnetic flux internally while canceling stray fields externally.
- Performed **2D-axisymmetric magnetostatic and thermal FEA across 140+ iterations** combining COMSOL Multiphysics and automated Python-FEMM scripts.
- Achieved **cross-code agreement within 0.02%** across the discharge channel and verified against closed-form analytical solutions (<0.6% error, <0.5% numerical uncertainty).

### 2. High-Temperature Thermal Management Architecture
- Engineered an axial heat rejection path routing **488 W of 500 W plasma heat** through a high-conductivity copper thermal spreader and an Aluminum Nitride (AlN) dielectric barrier to an external cold plate.
- Held the permanent magnets at **72 °C** (well below their 180 °C N48UH demagnetization rating).
- Integrated a radial vacuum break, polished radiation shield, and Macor ceramic sleeve to choke parasitic radial leakage to **<4 W**.

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/afmpdt_exploded.png" 
      title="Exploded Assembly View" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption">
  Figure 2: Exploded view of the thruster components showing ceramic isolation, magnet retaining sleeves, and modular fasteners.
</div>

### 3. Plasma Scaling & Thrust Prediction
- Formulated an azimuthal swirl acceleration ($j_r \times B_z$) and Hall parameter ($\beta_e$) model.
- Calibrated empirical scaling laws against a database of **667 published argon AF-MPD thruster firings**, predicting **186 mN thrust at 100 A**.

### 4. Manufacturing Deliverables & Fastener Analysis
- Produced a complete 10-sheet A3 manufacturing drawing set (Technical Note TN-02) featuring GD&T, tile magnetization schedules, and bill of materials (BOM).
- Conducted fastener preload stress analyses (ISO 4762 M4 at 1.5 N·m) to prevent brittle ceramic fracture under severe thermal cycling.
