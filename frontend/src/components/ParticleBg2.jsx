import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBg2(id) {
  async function loadParticles(main) {
    await loadFull(main);
  }

  const particleOptions = {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#9c88ff", "#d888ff", "#ebff88"],
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 3,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
      },
      shape: {
        type: "circle",
      },
      move: {
        enable: true,
        speed: 3,
        direction: "random",
        random: true,
        straight: false,
        out_mode: "out",
      },
      line_linked: {
        enable: false,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
    zIndex: {
      value: 100,
    },
  };

  return (
    <Particles id={id} init={loadParticles} options={particleOptions} />
  );
}

export default ParticleBg2;
