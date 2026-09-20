---
layout: page
title: "Permanent-Magnet Halbach Array for an Argon AF-MPD Thruster"
description: "Settled Design Configuration for Continuous Operation, with the Magnetic, Thermal and Discharge Analysis Behind It"
img: assets/img/fig_02_field_map.png
importance: 1
category: Electric Propulsion
pdf: assets/pdf/TN02_AFMPDT_Final_Report.pdf
---

# Permanent-Magnet Halbach Array for an Argon AF-MPD Thruster
### Settled Design Configuration for Continuous Operation, with the Magnetic, Thermal and Discharge Analysis Behind It

**Organisation:** Theta Systems &nbsp;|&nbsp; **Role:** Electric Propulsion Research Intern &nbsp;|&nbsp; **Date:** September 2026  
**Deliverables:** Technical Note TN-02 (32-page Final Report) & 10-sheet A3 Manufacturing Drawing Set  

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

## Summary

Applied-Field Magnetoplasmadynamic Thrusters (AF-MPDT) offer high thrust density and high specific impulse using low-cost argon propellant. They generate thrust by striking an electric arc between a central cathode and an outer cylindrical anode, ionising argon gas into plasma. A strong applied axial magnetic field interacts with the radial discharge current, generating Lorentz forces that spin and accelerate the propellant out of the thruster nozzle.

Using argon provides a major cost advantage over xenon, but argon requires a strong magnetic field to ionise and accelerate efficiently. In traditional designs, this field is produced by heavy electromagnetic coils (solenoids). These solenoids demand dedicated high-current power supplies, draw hundreds of watts of electrical power, and require active liquid cooling systems that small spacecraft cannot support.

This project replaces the heavy coils with a passive **permanent-magnet Halbach array** for a 1–5 kW breadboard thruster designed for **continuous firing** during satellite orbit-raising missions. The assembly uses high-grade neodymium magnets (NdFeB N48UH) arranged in an 8-segment, 5-ring Halbach cylinder inside a low-carbon steel casing that guides magnetic flux directly through the plasma channel.

### Key Results & Engineering Achievements

Through a coupled multiphysics study spanning **143 magnetostatic configurations** and **84 thermal cases**, the design successfully settled all mechanical, magnetic, and thermal requirements:

- **Strong Applied Magnetic Field:** The Halbach array delivers **0.631 T** on-axis at the cathode tip at steady-state operating temperature, comfortably exceeding the **0.40 T** baseline requirement by **+57.7%**.
- **Passive Rearward Heat Rejection:** To prevent the permanent magnets from overheating under continuous firing, a 500 W plasma arc heat load is drawn axially rearwards through an OFHC copper anode and an aluminium nitride (AlN) dielectric barrier into an external spacecraft cold plate. **488 W of the 500 W (97.6%)** is rejected through the rear interface, holding magnet tiles at **72°C** (well within their 180°C limit) and the anode at 288°C.
- **Strict Mass Compliance:** The complete thruster assembly weighs **7.17 kg** within a 114 mm diameter envelope, meeting the 7.50 kg mass limit.
- **Predicted Thrust Performance:** Current streamline modelling and an empirical fit calibrated against **667 published experimental argon thruster firings** predict **186 mN of thrust** at 100 A discharge current.
- **Demagnetisation Protection:** Magnetic analysis confirmed a coercivity safety margin of at least **23%** throughout all magnet tiles, preventing irreversible loss of magnetisation up to 130°C.
- **Complete Manufacturing Package:** Produced a complete set of **10 fully dimensioned A3 manufacturing drawings** with geometric dimensioning and tolerancing (GD&T) for every component.

---

## Simulation Field Plots & Technical Poster

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
      Figure 2: COMSOL 2D steady-state temperature field under 500 W continuous arc load. Rear axial conduction maintains magnet tiles at 72°C (well below the 180°C demagnetisation rating).
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
