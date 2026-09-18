# 🚀 Dion Kuteesa - Portfolio Website Guide

This repository contains a full personal portfolio and project showcase website based on the **al-folio** Jekyll theme (the exact same template powering [moistym.github.io](https://moistym.github.io/projects/)).

It features:
- **Project Showcase Grid (`/projects/`)**: Responsive cards with hover effects, thumbnail pictures, tags, and detailed markdown pages.
- **About / Landing Page (`/`)**: Clean academic & engineering biography with LinkedIn, email, and location.
- **Dark / Light Mode**: Integrated theme toggle button.
- **Automated GitHub Deployment**: Automatically builds and deploys via GitHub Actions (`.github/workflows/deploy.yml`).

---

## 🛠️ 1. Publishing to Your GitHub in 3 Steps

### Step 1: Create a new repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. For repository name:
   - To host at `https://<your-username>.github.io`: name the repository `<your-username>.github.io` (e.g., `dionkuteesa.github.io`).
   - Or name it `portfolio` (will host at `https://<your-username>.github.io/portfolio`).
3. Leave it **Public** and **do not** check "Add a README" or ".gitignore" (this folder already has them).
4. Click **Create repository**.

### Step 2: Push this folder to your GitHub
Open your terminal inside this `portfolio-template` folder and run:
```bash
git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. On GitHub, navigate to your repository **Settings** -> **Pages** (on the left sidebar).
2. Under **Build and deployment**:
   - Source: Select **Deploy from a branch**.
   - Branch: Select **`gh-pages`** and folder **`/ (root)`**. *(Note: The `gh-pages` branch is created automatically 2-3 minutes after your first push by GitHub Actions)*.
   - Click **Save**.
3. Under the **Actions** tab in your repository, you can watch the `Deploy site` workflow run.
4. In ~2 minutes, your website will be live at `https://<your-username>.github.io`!

---

## 📁 How to Customize Your Content

### 1. Site Info & Links (`_config.yml` and `_data/socials.yml`)
- **`_config.yml`**:
  - `url`: Update `https://dionkuteesa.github.io` to your actual GitHub Pages URL.
  - `title`, `first_name`, `last_name`, `keywords`: Personal details.
- **`_data/socials.yml`**:
  - `github_username`: Add your GitHub username.
  - `linkedin_username`: Set to `dionkuteesa`.
  - `email`: Set to `dionkuteesa@gmail.com`.

### 2. Profile Photo & About Page (`_pages/about.md`)
- Add your profile photo to `assets/img/pfp.jpg`.
- In `_pages/about.md`, set `image: pfp.jpg`.
- You can edit your bio text and experience paragraphs directly in `_pages/about.md`.

### 3. Adding & Editing Projects (`_projects/`)
Every project card on the `/projects/` page is generated from a markdown file in the `_projects/` directory:

```yaml
---
layout: page
title: "Project Title"
description: "Brief 1-sentence description displayed under the title"
img: assets/img/your_thumbnail.png   # Thumbnail image for the card
importance: 1                       # Lower numbers appear first (1, 2, 3...)
category: Electric Propulsion       # Optional category
---

## Role & Overview
...write your markdown here...
```

- See `_projects/template_project.md.example` for a complete reference template with figures, LaTeX math ($E=mc^2$), and code snippets.
- Your initial projects are already pre-populated:
  - `1_afmpdt_halbach.md`: Applied-Field MPDT Halbach array (with CAD renders included!)
  - `2_titan_abep.md`: Titan Atmosphere-Breathing Electric Propulsion (DSMC / SPARTA)
  - `3_zinc_hall_thruster.md`: Zinc Hall Effect Thruster Propellant Feed System
  - `4_electret_ion_thruster.md`: Electrets in Gridded Ion Thrusters
  - `5_jaxa_trajectory.md`: Interplanetary Trajectory Optimisation (JAXA)
  - `6_cubesat_platform.md`: 1U Light-Sensing CubeSat & Air-Bearing Platform
  - `7_tactical_cv_engine.md`: Tactical Computer Vision Analytics Engine

---

## 💻 Local Testing (Optional)
If you have Ruby and Bundler installed, you can preview the site locally:
```bash
bundle install
bundle exec jekyll serve
```
Then open `http://localhost:4000` in your browser. (Note: You do **not** need Ruby installed to deploy; GitHub Actions automatically builds the site in the cloud for you!).
