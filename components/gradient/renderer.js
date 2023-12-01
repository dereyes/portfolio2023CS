import { WebGLRenderer } from "three";

const getRenderer = () => {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(500, 500)

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { getRenderer };