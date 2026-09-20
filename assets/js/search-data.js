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
            },},{id: "projects-permanent-magnet-halbach-array-for-an-argon-af-mpd-thruster",
          title: 'Permanent-Magnet Halbach Array for an Argon AF-MPD Thruster',
          description: "High-field permanent-magnet circuit and continuous axial thermal architecture for a 1–5 kW argon plasma thruster",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_afmpdt_halbach/";
            },},{id: "projects-interplanetary-trajectory-optimisation-using-particle-swarm-optimisation",
          title: 'Interplanetary Trajectory Optimisation using Particle Swarm Optimisation',
          description: "Global heuristic optimisation and Monte Carlo dispersion analysis for Earth-to-asteroid intercept trajectories, presented at JAXA",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_jaxa_astrodynamics/";
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
