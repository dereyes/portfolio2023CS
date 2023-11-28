import { getRenderer } from "./renderer";
import { Loop } from "./loop";

let renderer;
let loop;

class World {
  constructor(container) {
    renderer = getRenderer();
    loop = new Loop(camera, scene, renderer);

    container.append(renderer.domElement);
  }

  render() {
    // renderer.render();
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };