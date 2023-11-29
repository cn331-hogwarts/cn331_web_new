import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

function ParticleBg4(props) {
  const customInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  const options = {
    preset: "fireworks",
    zIndex:-999,
  };

  return <Particles options={options} init={customInit} />;
}

export default ParticleBg4;