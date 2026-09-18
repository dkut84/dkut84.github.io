---
layout: page
title: "Tactical Computer Vision Analytics Engine"
description: "Real-time dynamic homography, GPU-accelerated object detection, and spatial mapping"
img: assets/img/11.jpg
importance: 7
category: Robotics & AI
---

## Role & Context
**Role:** Computer Vision & Systems Engineer  
**Timeline:** Dec 2025 – Present  
**Key Tools:** Python, OpenCV, YOLO, NumPy, Roboflow Inference, CUDA  

---

## Overview
Automated tracking in dynamic broadcast video feeds suffers from camera jitter, perspective distortion, and latency. This project engineered a high-throughput spatial mapping system converting perspective-warped 2D camera footage into real-world coordinate frames in real time.

---

## Technical Highlights

### 1. Dynamic Homography Pipeline
- Built an adaptive homography estimation pipeline using **ORB feature detection and RANSAC** to maintain coordinate calibration despite non-static camera pans, tilts, and optical zooms.
- Formulated a 3x3 planar perspective transformation matrix mapping pixel coordinates to metric court/ground dimensions with sub-pixel precision.

### 2. Embedded GPU Inference & Latency Reduction
- Deployed lightweight **YOLO object detection models** on dedicated NVIDIA local hardware using TensorRT optimization, slashing processing latency compared to cloud APIs.
- Implemented moving average temporal filtering and kinematic motion forecasting to maintain target identity through temporary visual occlusions.
