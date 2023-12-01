import { Color, Scene } from "three";

function getScene(color) {
  const scene = new Scene();

  scene.background = new Color(color);

  return scene;
}

export { getScene };