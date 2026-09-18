---
layout: page
title: "Titan Atmosphere-Breathing Electric Propulsion (ABEP)"
description: "DSMC rarefied gas intake simulation & aerodynamic feasibility for persistent Titan exploration"
img: assets/img/1.jpg
importance: 2
category: Space Systems
---

## Role & Context
**Role:** Project Lead / Researcher  
**Timeline:** Feb 2026 – Present  
**Key Tools:** SPARTA (DSMC), Python, ParaView, Linux HPC  

---

## Overview
Atmosphere-Breathing Electric Propulsion (ABEP) enables ultra-long duration planetary science missions by harvesting ambient atmospheric particles as propellant, eliminating wet mass limits. Titan’s dense, nitrogen-methane atmosphere makes it a prime candidate for continuous low-altitude atmospheric flight.

This project investigates rarefied gas ingestion mechanics and aerodynamic drag balancing for an intake operating at altitudes where continuum fluid assumptions break down.

---

## Technical Highlights

### 1. DSMC Intake Flow Field Simulation
- Configured and compiled the **SPARTA Direct Simulation Monte Carlo (DSMC)** physics engine in a high-performance Linux environment.
- Simulated 2D-axisymmetric supersonic rarefied flow fields for a Titan atmospheric profile (**95% $N_2$, 5% $CH_4$**).
- Analyzed shock structure, diffuse surface collisions, and gas compression ratios to maximize mass collection efficiency into the ionization chamber.

### 2. Computational Pipeline & 3D Visualization
- Engineered an automated Python data extraction pipeline to convert raw SPARTA unstructured grid outputs into **VTK format**.
- Rendered high-fidelity 3D volume fields of number density, temperature, and bulk velocity contours in **ParaView**.

### 3. Orbital Drag & Thrust Balancing
- Built analytical 1D orbit decay and free-molecular aerodynamic drag models.
- Quantified net thrust-to-drag ratios ($T/D > 1$) across altitudes to identify viable orbital capture corridors prior to scaling to full 3D supercomputing simulations.
