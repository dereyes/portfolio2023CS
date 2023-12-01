import {
  PlaneGeometry,
  MeshStandardMaterial,
  Mesh,
  TextureLoader,
} from "three";

export default function getMesh(color) {
  const loader = new TextureLoader();
  // const height = loader.load("textures/height.png");

  const geometry = new PlaneGeometry(3, 3, 64, 64);

  const material = new MeshStandardMaterial({
    color: "green",
    wireframe: true
  });

  const plane = new Mesh(geometry, material);
  plane.position.set(0, 0, 0);
  // plane.rotation.x -= Math.PI * 0.35;

  let frame = 0;

  plane.tick = (delta) => {

  };

  return plane;
}