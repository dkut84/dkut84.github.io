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

<div class="card bg-light border-primary my-4 shadow-sm" style="border-left: 5px solid #0076df !important;">
  <div class="card-body p-3 p-md-4">
    <div class="row align-items-center">
      <div class="col-12 col-lg-8">
        <h4 class="card-title text-primary font-weight-bold mb-1">
          <i class="fas fa-file-pdf text-danger mr-2"></i>Full Technical Report & Manufacturing Package
        </h4>
        <p class="card-text text-muted mb-2 mb-lg-0" style="font-size: 0.95rem;">
          Complete 32-page publication deliverable (TN-02): Full multiphysics mathematical derivations, 14 simulation verification figures, mass budget, and 10 A3 manufacturing drawings.
        </p>
      </div>
      <div class="col-12 col-lg-4 text-lg-right mt-2 mt-lg-0">
        <a href="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}" target="_blank" class="btn btn-primary font-weight-bold shadow-sm px-3 py-2 mr-1 mb-1">
          <i class="fas fa-external-link-alt mr-1"></i> Read Report (PDF)
        </a>
        <a href="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}" download="TN02_AFMPDT_Final_Report.pdf" class="btn btn-outline-primary font-weight-bold px-3 py-2 mr-1 mb-1">
          <i class="fas fa-download mr-1"></i> Download PDF
        </a>
        <a href="#report-viewer" class="btn btn-secondary font-weight-bold px-3 py-2 mb-1">
          <i class="fas fa-book-open mr-1"></i> Embedded Viewer
        </a>
      </div>
    </div>
  </div>
</div>

---

## Abstract

This note specifies the permanent magnet subsystem for a 1–5 kW breadboard applied-field magnetoplasmadynamic (AF-MPD) thruster running on argon, for **continuous** operation, and reports the complete multiphysics analysis backing it. It answers three fundamental questions:

1. **Can permanent magnets generate a sufficient applied field?**  
   **Yes:** **0.631 T** at the cathode tip with the magnets at their solved steady-state operating temperature, against a **0.40 T floor** requirement (+57.7% margin).
2. **Where does the heat go during continuous operation?**  
   **Axially backwards** out of the anode, conducted through a full-diameter copper spreader and aluminium nitride isolation plate into an external spacecraft cold plate. The active heat-rejection path holds the permanent magnets at **72°C** and the anode at **288°C**, with **488 W of the 500 W (97.6%)** leaving directly through the rear mounting face.
3. **Would the thruster actually work?**  
   The discharge model, the magnetic nozzle expansion, and an empirical fit to **667 published experimental argon thruster firings** all confirm viability, predicting **186 mN of thrust at 100 A** discharge current.

The complete assembly mass is **7.17 kg** within a **114 mm outside diameter envelope** (below the 7.5 kg limit).

<div class="row justify-content-center my-4">
  <div class="col-sm-11 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/afmpdt_poster.png" 
      title="AF-MPDT Technical Showcase Poster" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 1: Comprehensive AF-MPDT Technical Showcase Poster detailing magnetic circuit topology, thermal resistance network, and predicted thrust scaling.
</div>

---

## 1. Scope & Design Requirements

### 1.1 Context
This activity supports a 1–5 kW class breadboard electric thruster using argon propellant. Argon is roughly one thousand times cheaper than xenon and completely free of the rare-gas supply constraints affecting conventional Hall-effect thrusters. However, argon does not ionize efficiently in conventional Hall geometry, necessitating an Applied-Field Magnetoplasmadynamic (AF-MPD) architecture.

An AF-MPD thruster requires a strong axial magnetic field ($B_z$). Historically, published designs produce this field with electromagnetic solenoids, which introduce heavy mass, dedicated power supplies, resistive electrical losses, and active liquid cooling loops that small spacecraft cannot accommodate. This program replaces electromagnetic coils entirely with a passive **permanent-magnet Halbach array**.

### 1.2 Continuous Thermal Operation and Boundary Conditions
The target application is continuous orbit raising, where continuous thrust is a mandatory requirement. Under continuous firing, transient thermal capacitance is insufficient: the outer casing would need to reach approximately 415°C to radiate the 500 W arc dissipation passively to deep space. Sintered NdFeB grade N48UH degrades rapidly above 180°C and demagnetizes permanently at its Curie point of 310°C.

The design constraints are established accordingly:
- **0.40 T on-axis flux density is a hard floor, not a ceiling**, with 0.70 T established as the design goal, provided uniform field shape is preserved.
- Thermal dissipation must be drawn **axially backwards** out of the anode into the rear mounting interface and transferred to an external cold plate.

### 1.3 Core Engineering Deliverables
| Question | Section | Key Metric / Short Answer |
| :--- | :--- | :--- |
| **Can permanent magnets make the field?** | Section 3 | **0.631 T** hot at cathode tip (vs. 0.40 T floor) |
| **Where does the heat go continuously?** | Section 4 | **488 W of 500 W (97.6%)** out of rear face |
| **Would the thruster actually work?** | Section 5 | **186 mN** predicted thrust at 100 A |

### 1.4 Baseline Requirements Summary
- **Field Strength:** Axial flux density at the cathode tip $B_z \ge 0.40\text{ T}$ (with $0.70\text{ T}$ goal) at steady-state operating temperature.
- **Field Uniformity:** Field maintained reasonably uniform over an acceleration channel length of $40\text{ to }70\text{ mm}$.
- **Magnet Temperature:** $100^\circ\text{C}$ design target against a $180^\circ\text{C}$ material rating during continuous firing.
- **Total Assembly Mass:** Maximum limit of $7.50\text{ kg}$.

---

## 2. Settled Multiphysics Solutions & Architecture

The settled configuration is selected from a rigorous parametric sweep of **143 magnetostatic configurations** and **84 coupled thermal cases**. Eighteen builds met all structural and thermal limits; this configuration generates the strongest on-axis field while maintaining safe thermal margins.

The two cornerstone COMSOL Multiphysics 2D axisymmetric field solutions below prove both core physical principles simultaneously:

<div class="row justify-content-center my-4">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_02_field_map.png" 
      title="COMSOL 2D Axisymmetric Magnetic Flux Density Map" 
      class="img-fluid rounded z-depth-1" 
    %}
    <div class="caption text-center">
      Figure 2: COMSOL 2D axisymmetric magnetic flux density map. Demonstrates flux circulation through the 1010 steel return casing and intense bore concentration (0.631 T hot at cathode tip).
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
      Figure 3: COMSOL 2D steady-state thermal distribution under 500 W continuous arc load. Direct rear conduction limits magnet temperatures to 72°C (well below 180°C limit).
    </div>
  </div>
</div>

### 2.1 Geometric Definition
The assembly is 2D axisymmetric about the central axis. The datum $z = 0$ is the front face of the mounting plate (the surface seen by the plasma), with $+z$ extending along the plume exhaust vector.

#### Radial Build at Anode Station
| Radius $r$ (mm) | Feature | Material | Function / Drawing |
| :--- | :--- | :--- | :--- |
| **0 to 3.175** | Cathode rod (6.35 mm dia) | W, 2% Thoriated | Thermionic electron emitter (AFMPDT3-010) |
| **3.175 to 13.0** | Discharge bore | Argon plasma | Propellant ionization channel |
| **13.0 to 15.0** | Anode barrel (2 mm wall) | Cu OFHC C101 | Arc anode & primary heat sink (AFMPDT3-002) |
| **15.0 to 16.0** | Evacuated thermal break | High vacuum | Radial conductive insulation |
| **15.35 to 15.65**| Radiation shield (0.3 mm)| 304 SS, polished | Radial radiative choke (AFMPDT3-005) |
| **16.0 to 18.0** | Standoff sleeve | Macor MGC | Ceramic electrical & thermal insulator (AFMPDT3-005) |
| **18.0 to 47.0** | Magnet tiles (40 off) | NdFeB N48UH | 5-ring Halbach cylinder (AFMPDT3-003) |
| **47.0 to 57.0** | Return casing (10 mm wall)| 1010 / DC01 steel | Magnetic circuit return & shield (AFMPDT3-004) |

#### Axial Build (Front to Rear)
| Axial Range $z$ (mm) | Component Feature | Primary Function |
| :--- | :--- | :--- |
| **$-18\text{ to }-16$** | Isolation plate (AlN, full dia) | 170 W/(m·K) thermal conduction with >15 kV/mm electrical isolation |
| **$-16\text{ to }-10$** | Spreader disc (OFHC Cu, full dia) | Radial heat spreading across full 114 mm footprint |
| **$-10\text{ to }0$** | Mounting plate | Copper hand-off boss ($r \le 17$) & Macor shelf ($r \ge 18$) |
| **$0\text{ to }50$** | Anode barrel | Plasma arc channel; cathode tip terminates at $z = +50$ mm |
| **$0\text{ to }80$** | Magnet stack & casing | 5-ring Halbach cylinder and outer steel return sheath |
| **$80\text{ to }86$** | Front retaining ring | 304 stainless steel axial clamp ring |

### 2.2 Magnetisation Schedule & Assembly Criticality
Magnets are polarized during manufacture and cannot be altered afterward. If the end cap rings are installed in reverse, the on-axis cathode tip field collapses from 0.669 T to 0.072 T (a factor of nine loss), causing immediate performance failure.

| Ring Number | Axial Span $z$ (mm) | Magnetisation Direction | Tile Count |
| :--- | :--- | :--- | :--- |
| **Ring 1 (Rear Cap)** | $0\text{ to }16$ | Radially **OUTWARD** ($+\hat{r}$) | 8 wedge tiles |
| **Rings 2, 3, 4 (Core)**| $16\text{ to }64$ | Axially **TOWARD EXHAUST** ($+\hat{z}$) | 24 wedge tiles |
| **Ring 5 (Front Cap)** | $64\text{ to }80$ | Radially **INWARD** ($-\hat{r}$) | 8 wedge tiles |

### 2.3 Mass Budget & Bill of Materials
The complete thruster mass is **7.17 kg**, comfortably within the **7.50 kg envelope**.

| Item | Component Description | Material | Qty | Total Mass (g) | Drawing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Mounting plate, hand-off boss | Cu OFHC C101 | 1 | 74.7 | AFMPDT3-006 |
| 2 | Mounting plate, magnet shelf | Macor MGC | 1 | 229.2 | AFMPDT3-006 |
| 3 | Anode barrel, 2.0 mm wall | Cu OFHC C101 | 1 | 78.8 | AFMPDT3-002 |
| 4 | Radiation shield, 0.3 mm wall | 304 SS, polished | 1 | 11.7 | AFMPDT3-005 |
| 5 | Standoff sleeve | Macor MGC | 1 | 43.1 | AFMPDT3-005 |
| 6 | Magnet tile, rear cap (radial out) | NdFeB N48UH | 8 | 710.6 | AFMPDT3-003 |
| 7 | Magnet tile, core (axial $+z$) | NdFeB N48UH | 24 | 2131.9 | AFMPDT3-003 |
| 8 | Magnet tile, front cap (radial in) | NdFeB N48UH | 8 | 710.6 | AFMPDT3-003 |
| 9 | Iron return casing, 10 mm wall | 1010 / DC01 steel | 1 | 2047.4 | AFMPDT3-004 |
| 10 | Front retaining ring | 304 SS | 1 | 425.0 | AFMPDT3-009 |
| 11 | Spreader plate, full diameter | Cu OFHC C101 | 1 | 531.0 | AFMPDT3-007 |
| 12 | Isolation plate | AlN, sintered | 1 | 65.5 | AFMPDT3-008 |
| 13 | Cathode rod, 6.35 mm dia | W, 2% ThO2 | 1 | 58.7 | AFMPDT3-010 |
| 14 | Cathode insulating bush | Macor MGC | 1 | 1.3 | AFMPDT3-010 |
| 15 | Fastener insulating bushes | Alumina 99.7% | 6 | 2.4 | AFMPDT3-007 |
| 16 | ISO 4762 M4 x 30 socket head | A2-70 Stainless | 6 | 28.2 | Standard |
| 17 | ISO 4762 M4 x 16 socket head | A2-70 Stainless | 6 | 16.8 | Standard |
| 18 | ISO 7089 4 mm flat washers | A2 Stainless | 12 | 4.2 | Standard |
| 19 | Propellant feed stub, brazed | Copper | 1 | 3.0 | AFMPDT3-007 |
| **—** | **Complete Thruster Assembly** | **Combined** | **—** | **7,174 g** | **AFMPDT3-001** |

---

## 3. Magnetic Circuit Analysis & Verification

### 3.1 On-Axis Field Distribution
Magnetic flux originates from the axial core rings, circulates through the low-carbon steel return casing, enters radially through the end cap rings, and concentrates across the discharge bore.

<div class="row justify-content-center my-4">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_01_field_profile.png" 
      title="Centreline Magnetic Field Profile" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 4: Centreline magnetic field profile ($B_z$). At the cathode tip ($z = 50$ mm), the field reaches 0.669 T cold and 0.631 T at solved operating temperature (72°C), exceeding the 0.40 T floor across the entire acceleration channel.
</div>

| Magnetic Field Parameter | Cold Solution (20°C) | Solved Operating Temp (72°C) |
| :--- | :--- | :--- |
| **Cathode Tip Field ($z = 50\text{ mm}$)** | **0.669 T** | **0.631 T** |
| **Channel Mean ($z = 20\text{ to }50\text{ mm}$)** | 0.657 T | 0.619 T |
| **Channel Minimum Field** | 0.534 T | 0.503 T |
| **Peak Field in Channel ($z = 37\text{ mm}$)** | 0.677 T | 0.638 T |
| **Field Ripple Across Acceleration Gap** | 21.9% | 21.9% |
| **Length Maintained Within 10% of Peak** | 31.5 mm | 31.5 mm |
| **Casing Peak Flux Density** | 1.58 T (Linear Region, below 2.1 T knee) | 1.58 T |

### 3.2 Cross-Code Solver Verification
To verify numerical fidelity, the magnetostatic architecture was cross-checked using two independent solvers: finite element code **FEMM 4.2** and **COMSOL Multiphysics 6.4**.

<div class="row justify-content-center my-4">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_03_two_code_agreement.png" 
      title="Two-Code Solver Agreement (FEMM vs COMSOL)" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 5: Cross-code validation comparing FEMM 4.2 and COMSOL 6.4. Agreement is better than 0.5% throughout the entire discharge channel.
</div>

| Verification Check | Methodology | Result |
| :--- | :--- | :--- |
| **Dual Code Verification** | Independent FEMM and COMSOL models on identical geometry | 0.359 T vs 0.361 T (<0.5% delta) |
| **Polarity Sensitivity** | Stack solved with reversed end-cap polarization | Factor of 5.0 field collapse |
| **Remanence Scaling** | Cold solve scaled by $\alpha_{Br} = -0.11\%/\text{K}$ vs uniform temperature sweep (60–180°C) | 0.03% error |
| **Coupled Multiphysics Validation** | Temperature-dependent solve across 13 coupled test cases | Conservative by 0.1% to 1.4% |
| **Iron Casing Saturation** | Mesh refinement from 1.5 mm down to 0.25 mm element sizing | Converged and stable to 4 figures |

### 3.3 Demagnetisation Margin
Because permanent magnets operate within their own demagnetizing fields, local reverse fields must remain well below the intrinsic coercivity ($H_{cj}$).

<div class="row justify-content-center my-4">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_04_demag_margin.png" 
      title="Demagnetisation Safety Margin vs Operating Temperature" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 6: Worst-case reverse field as a percentage of coercivity. At the 72°C operating point, the margin is at least 23%, confirming zero demagnetised volume.
</div>

---

## 4. Continuous Thermal Architecture

### 4.1 Thermal Architecture Trade Study
Under continuous firing, passive surface radiation from the outer casing is incapable of dissipating 500 W. Four rear interface architectures were modeled under 500 W continuous thermal load:

<div class="row justify-content-center my-4">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_05_rear_concepts.png" 
      title="Thermal Comparison of Rear Interface Architectures" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 7: Steady-state temperature response of four rear interface concepts at 500 W continuous load (logarithmic scale). Uncooled Concept C overheats beyond material limits; Concept D provides optimal magnet margin.
</div>

- **Concept A (Direct Anode Hand-Off):** Conduction out of the anode annulus only ($1.1 \times 10^{-3}\text{ m}^2$). Anode reaches 252°C, magnets reach 66°C.
- **Concept B (Stepped Annulus):** Intermediate spreading area. Anode reaches 210°C, magnets reach 65°C.
- **Concept C (Uncooled Baseline):** Radiation only. Anode reaches **1,779°C** (exceeding copper melting point) and magnets reach **400°C** (destroying magnetization).
- **Concept D (Settled Full-Diameter Spreader):** Full 114 mm footprint ($1.0 \times 10^{-2}\text{ m}^2$). Anode drops to **185°C** in test geometry, magnets remain at **64°C**.

### 4.2 Equilibrium Multiphysics Thermal Results

<div class="row justify-content-center my-4">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_07_heat_budget.png" 
      title="500 W Steady-State Heat Balance Budget" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 8: Complete heat balance budget. 488 W (97.6%) of the arc power exits through the rear cold plate; only 9.5 W enters the magnets, and 9.6 W radiates externally.
</div>

| Subsystem Component | Peak Operating Temp (°C) | Minimum Temp (°C) | Design Limit / Margin |
| :--- | :--- | :--- | :--- |
| **Anode Barrel (Exit Plane)** | **288°C** | 110°C | <400°C softening point (+112 K margin) |
| **Polished Radiation Shield** | 135°C | 106°C | Rated to 800°C |
| **Macor Ceramic Sleeve** | 106°C | 59°C | Rated to 800°C continuous |
| **Permanent Magnets (Rear Cap)** | **72°C** | 61°C | **<100°C target / 180°C material limit** |
| **Permanent Magnets (Core)** | 66°C | 60°C | 180°C rating |
| **Permanent Magnets (Front Cap)**| 60°C | 60°C | 180°C rating |
| **Outer Steel Casing** | 62°C | 60°C | Structural stability verified |
| **AlN Dielectric Barrier** | 89°C | 62°C | High thermal transfer maintained |
| **Rear Cold Plate Interface** | **63°C** | 63°C | Sized for standard spacecraft bus |

### 4.3 Sizing Trades: Anode Wall & Vacuum Break Width
Every millimeter of radial thickness pushes the permanent magnet bore outward, causing steep drops in centreline flux density ($B_z \propto r_0^{-2.2}$).

<div class="row justify-content-center my-4">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_08_bore_radius_trade.png" 
      title="Bore Radius Sensitivity and Thermal Margin Trades" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 9: Trade study. Left: Centreline field decay against magnet bore radius (~0.031 T lost per mm). Right: Magnet peak temperature versus vacuum break width.
</div>

| Anode Wall Thickness | Peak Anode Temp (°C) | Peak Magnet Temp (°C) | Cold Tip Field (T) |
| :--- | :--- | :--- | :--- |
| **2 mm (Settled)** | **288°C** | **72°C** | **0.669 T** |
| 3 mm | 220°C | 71°C | 0.634 T |
| 4 mm | 185°C | 71°C | 0.600 T |
| 5 mm | 163°C | 70°C | 0.566 T |

A 2 mm anode wall is selected because 288°C leaves 112 K of thermal headroom below copper annealing, while preserving an extra 0.069 T of field compared to a 4 mm wall.

### 4.4 Spacecraft Thermal Interface Specification
The thruster assembly interfaces with the spacecraft bus at $z = -18$ mm across the 114 mm diameter footprint.

<div class="row justify-content-center my-4">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_09_sink_requirement.png" 
      title="Magnet Temperature vs Rear Contact Conductance" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 10: Contact conductance sensitivity. Sinks above $520\text{ W/(m}^2\cdot\text{K)}$ satisfy the 100°C magnet target; $1,000\text{ W/(m}^2\cdot\text{K)}$ is standard for a bolted joint with thermal interface material.
</div>

**Requirement to Spacecraft Provider:** Specify **$\ge 1,000\text{ W/(m}^2\cdot\text{K)}$** conductance at the rear face with a cold plate operating temperature $\le 50^\circ\text{C}$.

### 4.5 Thermal Power Envelope
To test robustness against off-nominal arc voltages, power dissipation was swept up to 1,500 W.

<div class="row justify-content-center my-4">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_10_power_envelope.png" 
      title="Thermal Envelope Scalability up to 1500 W" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 11: Operational power envelope. The 2 mm anode build accommodates up to 700 W continuous arc dissipation before the anode approaches 400°C, and 760 W before magnets reach 100°C.
</div>

---

## 5. Thruster Discharge & Plume Scaling

### 5.1 Magnetic Nozzle Formation
Downstream of the cathode tip ($z > 50$ mm), applied field lines diverge to form an axisymmetric magnetic nozzle that expands and detaches the swirling plasma exhaust.

<div class="row justify-content-center my-4">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_11_magnetic_nozzle.png" 
      title="Plume Magnetic Nozzle Contours" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 12: Diverging magnetic nozzle field lines. On-axis null points occur at $z = 8$ mm (submerged safely inside the solid tungsten cathode rod) and $z = 70$ mm (20 mm clear of all hardware in the plume).
</div>

### 5.2 Current Conduction & Swirl Acceleration
Current paths were solved by modeling the ionized argon column as a conducting continuum bounded by the physical electrode surfaces.

<div class="row justify-content-center my-4">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_12_current_and_swirl.png" 
      title="Discharge Current Vectors and Azimuthal Swirl Force Density" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 13: Conduction current trajectories and azimuthal swirl force density ($j_r \times B_z$). The azimuthal body force spins the propellant rapidly over the downstream two-thirds of the channel.
</div>

<div class="row justify-content-center my-4">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_13_hall_parameter.png" 
      title="Electron Hall Parameter Distribution" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 14: Channel electron Hall parameter ($\omega_{ce}\tau_e$), with a median value of 235 across the acceleration zone.
</div>

**Key Findings:**
1. **Negligible Induced Discharge Field:** At 100 A, the magnetic field created by the plasma discharge itself is **0.33% of the permanent magnet field**, validating uncoupled magnetostatic solutions.
2. **Applied-Field Dominance:** The self-field Maecker thrust term is only 2.2 mN. The thruster is **applied-field dominated by two orders of magnitude** ($F_{applied} / F_{self} \approx 85$).

### 5.3 Predicted Thrust Performance
Thrust was predicted by fitting applied-field scaling laws to **667 published experimental argon thruster test runs** from the AFMPDT international database:

$$T = C \cdot I_d \cdot B_{tip} \cdot r_a$$

- **Best Estimate:** **186 mN** at 100 A discharge current ($B_{tip} = 0.631$ T, $r_a = 13$ mm).
- **Interquartile Uncertainty Range:** **93 to 226 mN**.

### 5.4 Feasible Design Set & Mass Scaling

<div class="row justify-content-center my-4">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/fig_14_feasible_set.png" 
      title="Feasible Magnetostatic Build Space" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption text-center">
  Figure 15: Feasible design space of 136 magnetostatic builds. The settled build (circled) provides the highest on-axis field (0.631 T) achievable within the 7.5 kg mass envelope.
</div>

Reaching the 0.70 T goal would require expanding the magnet OD from 94 mm to 104 mm, raising the assembly mass to 8.54 kg. Sizing at 7.17 kg represents the optimal engineering optimum.

---

## 6. End Cap Sizing Trade Study

End cap thickness controls the balance between peak field strength and axial field uniformity:

| End Cap Thickness | Cold Tip Field | Solved Hot Field | Uniform Channel Length ($\Delta B \le 10\%$) | Assembly Mass |
| :--- | :--- | :--- | :--- | :--- |
| **8 mm** | 0.420 T | 0.396 T | 48.0 mm | 7.16 kg |
| **12 mm** | **0.542 T** | **0.511 T** | **40.8 mm (Meets $\ge 40$ mm requirement)** | **7.16 kg** |
| **16 mm (Settled)**| **0.669 T** | **0.631 T** | **31.5 mm (+57.7% field margin)** | **7.16 kg** |

- **16 mm End Caps (Settled Selection):** Maximizes magnetic confinement with 0.631 T hot field.
- **12 mm Alternative:** Satisfies both the 0.40 T floor (0.511 T) and the 40 mm uniform length requirement (40.8 mm) at identical mass.

---

## 7. Manufacturing Drawings Package

The manufacturing drawings package includes 10 fully dimensioned A3 sheets with GD&T and tolerances:

| Drawing Sheet | Title & Description | Deliverable |
| :--- | :--- | :--- |
| **AFMPDT3-001** | General Arrangement, Envelope & Bill of Materials | [View Sheet]({{ '/assets/img/AFMPDT3-001_GA.png' | relative_url }}){:target="_blank"} |
| **AFMPDT3-002** | OFHC Copper Anode Barrel | [View Sheet]({{ '/assets/img/AFMPDT3-002_Anode.png' | relative_url }}){:target="_blank"} |
| **AFMPDT3-003** | NdFeB Magnet Tiles & Polarisation Schedule | [View Sheet]({{ '/assets/img/AFMPDT3-003_MagnetTiles.png' | relative_url }}){:target="_blank"} |
| **AFMPDT3-004** | Low-Carbon Steel Flux Return Casing | [View Sheet]({{ '/assets/img/AFMPDT3-004_IronCasing.png' | relative_url }}){:target="_blank"} |
| **AFMPDT3-005** | Macor Standoff Sleeve & SS Radiation Shield | [View Sheet]({{ '/assets/img/AFMPDT3-005_SleeveAndShield.png' | relative_url }}){:target="_blank"} |
| **AFMPDT3-006** | Mounting Baseplate (Copper Boss & Ceramic Shelf) | [View Sheet]({{ '/assets/img/AFMPDT3-006_MountingPlate.png' | relative_url }}){:target="_blank"} |
| **AFMPDT3-007** | OFHC Copper Thermal Spreader Plate | [View Sheet]({{ '/assets/img/AFMPDT3-007_Spreader.png' | relative_url }}){:target="_blank"} |
| **AFMPDT3-008** | Sintered Aluminium Nitride Dielectric Isolation Plate| [View Sheet]({{ '/assets/img/AFMPDT3-008_IsolationPlate.png' | relative_url }}){:target="_blank"} |
| **AFMPDT3-009** | 304 Stainless Steel Front Retaining Ring | [View Sheet]({{ '/assets/img/AFMPDT3-009_FrontRing.png' | relative_url }}){:target="_blank"} |
| **AFMPDT3-010** | Thoriated Tungsten Cathode & Ceramic Bushings | [View Sheet]({{ '/assets/img/AFMPDT3-010_Cathode.png' | relative_url }}){:target="_blank"} |

---

## 8. Limitations & Engineering Verification

1. **Multiphysics Coupling Margin:** The magnet remanence was scaled uniformly using solved peak magnet temperature. Across 13 coupled test cases, this methodology is proven conservative by 0.1% to 1.4% compared to local point-by-point temperature mapping.
2. **Conductivity Tensor Representation:** The discharge model implements a continuum scalar conductivity at a median Hall parameter of 235. Current streamline paths represent spatial topology rather than point-to-point tensor transport.
3. **Cathode Heat Integration:** Cathode thermionic radiative emission is neglected in the bulk anode conduction network; active cathode heat dissipation will slightly bias the anode root temperature.
4. **Propellant Injection Plenum:** Six 0.9 mm injection orifices on a 16 mm pitch circle maintain plenum pressure between 7.6 and 25.4 Torr (9–30 mg/s argon flow), operating stably on the high-pressure branch of the Paschen curve.
5. **Demagnetisation Threshold:** Coercivity margins remain >23% up to 130°C. Magnet temperatures must not be quoted above 130°C without full nonlinear hysteresis re-evaluation.

---

## 9. Full Technical Report Deliverable & Document Viewer {#report-viewer}

The complete 32-page publication deliverable (TN-02 Rev 3 settled design) is directly accessible and embedded below.

<div class="card bg-light border-primary mb-4 p-3 shadow-sm text-center">
  <div class="d-flex flex-wrap justify-content-center gap-2">
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
    <!-- Multi-tier PDF Viewer: Google Docs Viewer for 100% universal device/mobile compatibility + Native PDF embed -->
    <div style="position: relative; width: 100%; height: 950px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      <iframe 
        src="https://docs.google.com/viewer?url=https%3A%2F%2Fdkut84.github.io%2Fassets%2Fpdf%2FTN02_AFMPDT_Final_Report.pdf&embedded=true" 
        width="100%" 
        height="100%" 
        style="border: none;"
        title="TN-02 Technical Report Document Viewer">
        <object 
          data="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}" 
          type="application/pdf" 
          width="100%" 
          height="100%">
          <iframe 
            src="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}" 
            width="100%" 
            height="100%" 
            style="border: none;">
            <p>Your browser does not support inline PDFs. <a href="{{ '/assets/pdf/TN02_AFMPDT_Final_Report.pdf' | relative_url }}">Download the full PDF report directly</a>.</p>
          </iframe>
        </object>
      </iframe>
    </div>
  </div>
</div>
