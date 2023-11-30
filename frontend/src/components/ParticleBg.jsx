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
        value: 7,
        density: {
          enable: true,
          value_area: 500,
        },
      },
      color: {
        value: ["#FFFFFF", "#089AFF","#8321FF"],
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
        type: ["star"],
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
        enable: false,
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
          distance: 200,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 200,
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
