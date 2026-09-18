---
layout: page
title: "1U Light-Sensing CubeSat & Air-Bearing Platform"
description: "Avionics, embedded state machine, and closed-loop attitude determination & control"
img: assets/img/10.jpg
importance: 6
category: Space Systems
---

## Role & Context
**Role:** Avionics & Embedded Software Engineer  
**Timeline:** Feb 2026 – Present  
**Team:** 6-person multidisciplinary engineering team  
**Key Tools:** C++, Arduino, Embedded SPI/I2C, Hardware-in-the-Loop  

---

## Overview
Small satellites require agile, accurate attitude determination and control systems (ADCS) to orient solar panels and communication antennas. This project developed a fully integrated 1U CubeSat prototype operating on a 3-DOF spherical air-bearing platform to evaluate solar acquisition and tracking dynamics in a near-frictionless microgravity analog.

---

## Technical Highlights

### 1. Control Logic & State Machine
- Engineered a robust, non-blocking finite state machine in C++ handling operational modes (Detumble, Sun Acquisition, Pointing, Safe Mode).
- Implemented a **proportional-derivative (PD) attitude control loop** driving high-speed brushless reaction wheels based on differential solar lux sensor telemetry.

### 2. Hardware Architecture & Bus Optimization
- Integrated an I2C bus multiplexer to resolve sensor hardware address conflicts across all 6 exterior solar faces.
- Configured dedicated high-frequency **SPI data logging** to capture micro-vibrations and angular rate transients at 100 Hz.
