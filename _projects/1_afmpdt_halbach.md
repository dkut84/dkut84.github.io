---
layout: page
title: "Permanent-Magnet Halbach Array for an Argon AF-MPD Thruster"
description: "High-field permanent-magnet circuit and continuous axial thermal architecture for a 1–5 kW argon plasma thruster"
img: assets/img/afmpdt_ga.png
importance: 1
category: Electric Propulsion
---

## Executive Summary & Overview
**Author:** Dion Kuteesa  
**Role:** Research Intern (Electric Propulsion)  
**Organization:** Theta Systems  
**Deliverables:** 
- [Download Full Technical Report (PDF)]({{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}){:target="_blank" class="btn btn-sm z-depth-0" style="background-color: #0076df; color: white;"}
- [View Technical Poster (PDF)]({{ '/assets/pdf/afmpdt_poster.pdf' | relative_url }}){:target="_blank" class="btn btn-sm z-depth-0" style="background-color: #2b8a3e; color: white;"}  
**Key Tools:** COMSOL Multiphysics, Python-automated FEMM, SolidWorks, GD&T, Analytical Magnetostatics  

---

## 1. Context & Objectives
Applied-Field Magnetoplasmadynamic Thrusters (AF-MPDT) represent a high-thrust-density electric propulsion technology capable of delivering specific impulses ($I_{sp}$) of 2,000–5,000 seconds for demanding interplanetary and continuous orbit-raising missions. This development program focused on a **1–5 kW class breadboard thruster operating on argon**. Argon is approximately 1,000 times cheaper than xenon and free from the supply constraints of rare noble gases, but requires a strong applied axial magnetic field to induce azimuthal swirl acceleration ($j_r \times B_z$) and efficient plasma detachment through a magnetic nozzle.

Historically, applied fields have been generated using heavy electromagnetic solenoids. Solenoids impose severe penalties on spacecraft: they require dedicated power supplies, consume hundreds of watts of resistive electrical power, and necessitate active water-cooling loops.

### Primary Engineering Objectives
1. **Field Strength:** Achieve an on-axis magnetic flux density at the cathode tip of at least **$0.40\text{ T}$**, with a target goal of **$0.60\text{–}0.70\text{ T}$** at steady-state operating temperature.
2. **Zero Electrical Magnet Overhead:** Replace electromagnetic coils entirely with a passive **permanent-magnet Halbach cylinder**, requiring zero electrical input.
3. **Continuous Thermal Operation:** Sustain continuous 500 W plasma arc heat deposition into the anode, keeping the magnets strictly below their **$180^\circ\text{C}$** demagnetization limit without active liquid cooling.
4. **Mass & Envelope Constraints:** Confine the complete assembly to under **$7.5\text{ kg}$** and a compact diameter envelope.

<div class="row justify-content-center">
  <div class="col-sm-11 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/afmpdt_poster.png" 
      title="AF-MPDT Technical Poster Deliverable" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption">
  Figure 1: Comprehensive AF-MPDT Technical Showcase Poster detailing magnetic circuit topology, thermal resistance network, and predicted thrust scaling.
</div>

---

## 2. Final Design & Mechanical Architecture

The selected design features a 5-ring segmented Halbach cylinder encased in a low-carbon steel flux return casing, mounted to an axial heat-rejection chassis.

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/afmpdt_ga.png" 
      title="AF-MPDT General Assembly Cutaway View" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption">
  Figure 2: Cross-sectional CAD model illustrating the central 2% thoriated tungsten cathode, copper anode barrel, radial vacuum break, Macor ceramic sleeve, NdFeB tile stack, and 1010 steel outer casing.
</div>

### Radial Stack Specifications
| Radius Range ($r$) | Component / Feature | Material | Function |
| :--- | :--- | :--- | :--- |
| **0 to 3.175 mm** | Cathode Central Rod | 2% Thoriated Tungsten | Central arc attachment and electron emission |
| **3.175 to 13.0 mm** | Discharge Annulus | Argon Gas / Plasma | Propellant ionization and acceleration channel |
| **13.0 to 15.0 mm** | Anode Barrel (2 mm wall) | OFHC Copper (C10100) | Arc anode and primary plasma heat receptor |
| **15.0 to 16.0 mm** | Radial Thermal Choke | High Vacuum | Eliminates radial gas conduction |
| **15.35 to 15.65 mm**| Radiation Shield (0.3 mm)| Polished 304 Stainless | Chokes radial thermal radiation ($\varepsilon \approx 0.15$) |
| **16.0 to 18.0 mm** | Standoff Sleeve | Macor MGC Ceramic | Structural support and electrical isolation |
| **18.0 to 47.0 mm** | Halbach Magnet Tiles (40x)| Sintered NdFeB N48UH | Generates concentrated axial magnetic field |
| **47.0 to 57.0 mm** | Outer Return Casing (10 mm) | AISI 1010 / DC01 Steel | Magnetic flux return and exterior field shield |

### Axial Assembly & Thermal Layering
- **$z = -18\text{ to }-16\text{ mm}$ (Dielectric Isolation):** Full-diameter **Aluminium Nitride (AlN)** plate providing high thermal conductivity ($180\text{ W/m}\cdot\text{K}$) with $>15\text{ kV/mm}$ electrical dielectric isolation.
- **$z = -16\text{ to }-10\text{ mm}$ (Thermal Spreader):** Full-diameter high-purity **OFHC Copper** spreader plate distributing concentrated heat radially outward.
- **$z = -10\text{ to }0\text{ mm}$ (Chassis Interface):** Copper mounting boss ($r \le 17\text{ mm}$) separated from the Macor magnet shelf ($r \ge 18\text{ mm}$) by a 1 mm air/vacuum gap to prevent lateral heat bleed into the magnet rings.
- **$z = 0\text{ to }50\text{ mm}$:** Anode barrel, terminating at the cathode tip station ($z = +50\text{ mm}$).
- **$z = 0\text{ to }80\text{ mm}$:** Complete 40-tile permanent magnet cylinder stack.

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/afmpdt_exploded.png" 
      title="Exploded View of Thruster Sub-assemblies" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption">
  Figure 3: Exploded CAD view showing modular stack assembly: copper anode, ceramic isolation sleeves, segmented magnet tiles, steel housing, and fastening hardware.
</div>

---

## 3. Magnetic Field Verification & Magnetisation Schedule

To concentrate magnetic flux internally into the plasma channel while neutralizing stray external dipole fields, the cylinder utilizes an optimized Halbach polarization vector schedule:

| Ring Station | Axial Span ($z$) | Magnetisation Vector | Tile Count |
| :--- | :--- | :--- | :--- |
| **Ring 1 (Rear Cap)** | $0\text{ to }16\text{ mm}$ | **Radially Outward** ($\hat{r}$) | 8 segmented wedge tiles |
| **Rings 2, 3, 4 (Core)**| $16\text{ to }64\text{ mm}$| **Axial Exhaust Direction** ($+\hat{z}$) | 24 segmented wedge tiles |
| **Ring 5 (Front Cap)** | $64\text{ to }80\text{ mm}$ | **Radially Inward** ($-\hat{r}$) | 8 segmented wedge tiles |

### Magnetostatic Results
- **Cold Baseline Field:** **$0.669\text{ T}$** at the cathode tip.
- **Steady-State Operating Field (Hot):** **$0.631\text{ T}$** at the cathode tip, accounting for thermal remanence degradation ($\alpha_{Br} = -0.10\%/\text{K}$ for N48UH).
- **Design Margin:** Exceeds the $0.40\text{ T}$ requirement floor by **$+57.7\%$**.
- **Numerical Verification:**
  - Validated across **140+ FEA runs** using coupled COMSOL Multiphysics and automated Python-FEMM scripts.
  - Cross-code agreement across the discharge bore matched to within **$0.02\%$**.
  - Verified against closed-form analytical equations ($<0.6\%$ discrepancy, $<0.5\%$ numerical uncertainty).

---

## 4. Continuous Thermal Management Architecture

Under nominal continuous operation, the electric arc deposits **$500\text{ W}$** of continuous thermal dissipation directly into the copper anode barrel. Without active cooling, radiating 500 W passively would require casing temperatures exceeding $415^\circ\text{C}$, which would instantly destroy NdFeB magnets (Curie point $310^\circ\text{C}$, thermal rating $180^\circ\text{C}$).

### Heat Rejection Mechanism
1. **Axial Extraction Route:** Heat is drawn backwards along the OFHC copper anode into the rear mounting boss ($z < 0$), conducted through the thick copper spreader plate and AlN dielectric barrier, and transferred directly into an external spacecraft cold plate.
2. **Radial Heat Choking:** The combination of a 1 mm vacuum gap, polished stainless radiation shield, and Macor ceramic sleeve chokes radial parasitic leakage from the anode to the inner magnet bore to **less than $4\text{ W}$**.
3. **Equilibrium Temperature Field:**
   - **NdFeB Permanent Magnets:** **$72^\circ\text{C}$** (comfortably below the $100^\circ\text{C}$ design target and $180^\circ\text{C}$ rating).
   - **Anode Barrel:** **$288^\circ\text{C}$** (well below the copper recrystallization threshold).
   - **Cold Plate Interface:** **$65^\circ\text{C}$** at continuous steady state.
   - **Heat Balance:** **$488\text{ W}$ of the $500\text{ W}$ ($97.6\%$)** is safely rejected through the rear cold plate interface.

---

## 5. Plasma Scaling & Performance Predictions

Using the self-consistent magnetic field solution, a plasma acceleration and magnetic nozzle expansion model was formulated:

- **Swirl Acceleration:** The radial arc current $j_r$ crosses the axial applied magnetic field $B_z$, generating a Lorentz body force density $f_\theta = j_r B_z$ that spins the argon plasma into high-speed azimuthal rotation.
- **Nozzle Expansion:** Downstream diverging magnetic field lines convert rotational swirl kinetic energy into directed axial kinetic energy:
  
  $$F_z = \int (j_\theta B_r - j_r B_\theta) \, dV$$

- **Empirical Calibration:** Calibrated against an extensive database of **667 published experimental argon AF-MPD thruster firings**, yielding a predicted thrust of:
  
  $$\mathbf{T = 186\text{ mN} \quad \text{at} \quad 100\text{ A}}$$

---

## 6. Engineering Deliverables & Specifications Summary

| Parameter | Final Value | Requirement / Margin |
| :--- | :--- | :--- |
| **Cathode Tip Field ($B_z$)** | **$0.631\text{ T}$** (at operating temp) | $\ge 0.40\text{ T}$ floor ($+57.7\%$ margin) |
| **Peak Magnet Temperature** | **$72^\circ\text{C}$** | $\le 100^\circ\text{C}$ target / $180^\circ\text{C}$ rating |
| **Assembly Total Mass** | **$7.17\text{ kg}$** | $\le 7.50\text{ kg}$ envelope |
| **Continuous Thermal Rating**| **$500\text{ W}$** | $100\%$ continuous orbit-raising duty |
| **Axial Rejection Efficiency** | **$97.6\%$** ($488\text{ W}$ via cold plate) | $<4\text{ W}$ parasitic radial leak |
| **Fastener Preload** | ISO 4762 M4 torqued to $1.5\text{ N}\cdot\text{m}$ | Eliminates tensile fracture on Macor ceramic |
| **Manufacturing Drawings** | 10-Sheet A3 complete drawing set | Fully dimensioned with GD&T and BOM |

---

## 7. Full Technical Report & Drawings Package

The complete publication report with all 14 analysis figures, finite element validation curves, bill of materials, and the full 10-sheet A3 manufacturing drawing set is embedded below:

<div class="row justify-content-center mb-3">
  <div class="col-12 text-center">
    <a href="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}" target="_blank" class="btn btn-primary btn-sm z-depth-1">
      <i class="fas fa-file-pdf"></i> Open Full Report in New Tab
    </a>
    <a href="{{ '/assets/pdf/afmpdt_poster.pdf' | relative_url }}" target="_blank" class="btn btn-outline-primary btn-sm z-depth-1">
      <i class="fas fa-image"></i> Open Technical Poster (PDF)
    </a>
  </div>
</div>

<div class="row justify-content-center">
  <div class="col-12">
    <iframe 
      src="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}" 
      width="100%" 
      height="850px" 
      style="border: 1px solid #cbd5e1; border-radius: 6px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
    </iframe>
  </div>
</div>
