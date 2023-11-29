import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBg() {
  async function loadParticles(main) {
    await loadFull(main);
  }

  const particleOptions = {
    particles: {
      number: {
        value: 12,
        density: {
          enable: false,
          value_area: 800,
        },
      },
      color: {
        value: ["#1577ba", "#ba88ff"],
      },
      opacity: {
        value: 0.8,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 4,
        random: false,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "star",
        options: {
          sides: 5,
        },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "random",
        random: true,
        straight: false,
        out_mode: "out",
      },
      rotate: {
        value: 0,
        random: true,
        direction: "clockwise",
        animation: {
          enable: true,
          speed: 5,
        },
      },
      line_linked: {
        enable: true,
        distance: 600,
        opacity: 0.4,
        width: 2,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: ["grab"],
        },
        onclick: {
          enable: false,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    zIndex: {
      value: 3,
    },
  };

  return (
    <Particles id="tsparticles" init={loadParticles} options={particleOptions} />
  );
}

export default ParticleBg;
