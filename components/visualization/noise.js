import getScrolling from "./scrolling";

const getNoise = (p5, window) => {
  const noise = {
    initialize: undefined,
    update: undefined,
    getPoint: undefined,
    time: {
      position: 0,
      speed: 150,
    },
    scale: {
      // Larger: more variation. Smaller: smoother
      x: 0.001,
      y: 0.006,
      z: 1,
    },
    speed: {
      x: 0.000005,
      y: 0,
      z: 0.000001,
    },
  };

  const scrolling = getScrolling(window);

  noise.update = () => {
    scrolling.update();
    noise.time.position += noise.time.speed + Math.abs(scrolling.speed * 100);
  };

  noise.getPoint = (x, y) => {
    return p5.noise(
      x * noise.scale.x + noise.time.position * noise.speed.x,
      y * noise.scale.y + noise.time.position * noise.speed.y,
      noise.scale.z + noise.time.position * noise.speed.z,
    );
  };

  return noise;
};

export default getNoise;
