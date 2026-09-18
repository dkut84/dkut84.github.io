// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-af-mpdt-permanent-magnet-halbach-array-circuit",
          title: 'AF-MPDT: Permanent-Magnet Halbach Array Circuit',
          description: "High-field permanent-magnet circuit replacing solenoids for 1–5 kW argon plasma thruster",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_afmpdt_halbach/";
            },},{id: "projects-titan-atmosphere-breathing-electric-propulsion-abep",
          title: 'Titan Atmosphere-Breathing Electric Propulsion (ABEP)',
          description: "DSMC rarefied gas intake simulation &amp; aerodynamic feasibility for persistent Titan exploration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_titan_abep/";
            },},{id: "projects-zinc-hall-effect-thruster-propellant-delivery-system",
          title: 'Zinc Hall Effect Thruster: Propellant Delivery System',
          description: "High-temperature thermal &amp; mechanical design for alternative metallic propellant feed lines",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_zinc_hall_thruster/";
            },},{id: "projects-electret-electrostatic-lenses-in-gridded-ion-thrusters",
          title: 'Electret Electrostatic Lenses in Gridded Ion Thrusters',
          description: "Multiphysics beam divergence mitigation using passive electret charge distributions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_electret_ion_thruster/";
            },},{id: "projects-interplanetary-trajectory-optimisation",
          title: 'Interplanetary Trajectory Optimisation',
          description: "Particle swarm optimization &amp; Monte Carlo dispersion analysis for asteroid intercept trajectories",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_jaxa_trajectory/";
            },},{id: "projects-1u-light-sensing-cubesat-amp-air-bearing-platform",
          title: '1U Light-Sensing CubeSat &amp;amp; Air-Bearing Platform',
          description: "Avionics, embedded state machine, and closed-loop attitude determination &amp; control",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_cubesat_platform/";
            },},{id: "projects-tactical-computer-vision-analytics-engine",
          title: 'Tactical Computer Vision Analytics Engine',
          description: "Real-time dynamic homography, GPU-accelerated object detection, and spatial mapping",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_tactical_cv_engine/";
            },},{id: "projects-project-title-here",
          title: 'Project Title Here',
          description: "A short 1-line punchy subtitle or summary of what this project accomplishes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_project.md/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
