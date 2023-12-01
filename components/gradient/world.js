import { getCamera } from "./camera";
import getMesh from "./mesh";
import { getRenderer } from "./renderer";
import { getScene } from "./scene";
import { Loop } from "./loop";

// import { PlaneBufferGeometry, Mesh } from "three";

let camera;
let loop;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = getCamera();
    scene = getScene("blue");
    renderer = getRenderer();


    let mesh = getMesh("green");
    scene.add(mesh);


    loop = new Loop(camera, scene, renderer);

    container.append(renderer.domElement);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };