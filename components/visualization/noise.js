import getScrolling from "./scrolling";

const getNoise = (p5, window) => {
  const scrollSpeedMultiplier = 55;

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
      x: 0.0007,
      y: 0.0028,
      z: 10000,
    },
    speed: {
      x: 0.000001,
      y: 0,
      z: 0.000002,
    },
    shift: {
      x: 75,
      y: 1,
      z: 1
    }
  };

  const scrolling = getScrolling(window);

  noise.update = () => {
    scrolling.update();
    noise.time.position += noise.time.speed + Math.abs(scrolling.speed * scrollSpeedMultiplier);
  };

  noise.getPoint = (x, y) => {
    return p5.noise(
      (x + noise.shift.x) * noise.scale.x + noise.time.position * noise.speed.x,
      (y + noise.shift.y) * noise.scale.y + noise.time.position * noise.speed.y,
      noise.scale.z + noise.time.position * noise.speed.z,
    );
  };

  return noise;
};

export default getNoise;
