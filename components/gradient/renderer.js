import { WebGLRenderer } from "three";

const getRenderer = () => {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { getRenderer };