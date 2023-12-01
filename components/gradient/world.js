import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { getCamera } from "./camera";
import getMesh from "./mesh";
import { getRenderer } from "./renderer";
import { getScene } from "./scene";
import { createLights } from "./lights.js";
import { Loop } from "./loop";

// import { PlaneBufferGeometry, Mesh } from "three";

let camera;
let loop;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = getCamera();
    scene = getScene("black");
    renderer = getRenderer();

    const { light, lightHelper } = createLights("white");
    // loop.updatables.push(light);
    scene.add(light);


    let mesh = getMesh("green");
    scene.add(mesh);


    const controls = new OrbitControls(camera, renderer.domElement);

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