import { PerspectiveCamera } from "three";

function getCamera() {
  const camera = new PerspectiveCamera(
    35, // FOV
    1, // Aspect ratio
    0.1, // Near clipping plane
    100, // Far clipping plane
  );

  camera.position.set(0, 0, 10);

  camera.tick = (delta) => {

  }

  return camera;
}

export { getCamera };