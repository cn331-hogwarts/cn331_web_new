import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBg3() {
  async function loadParticles(main) {
    await loadFull(main);
  }

  const particleOptions = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value:  ["#FFA500", "#f0e578"],
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
        value: 5,
        random: true,
      },
      shape: {
        type: "circle",
      },
      move: {
        enable: true,
        speed: 1,
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
    <Particles id="3" init={loadParticles} options={particleOptions} />
  );
}

export default ParticleBg3;
