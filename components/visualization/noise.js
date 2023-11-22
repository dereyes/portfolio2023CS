const getNoise = (p5) => {
  const noise = {
    update: undefined,
    render: {
      gradient: undefined,
    },
    time: undefined,
    scale: {
      // Larger: more variation. Smaller: smoother
      x: 0.15,
      y: 0.025,
      z: 1,
    },
    speed: {
      x: 0,
      y: 0.008,
      z: 0.01,
    },
  };

  noise.update = () => {
    noise.time = p5.frameCount;
  };

  noise.getColor = (x, y) => {
    return p5.noise(
      x * noise.scale.x + noise.time * noise.speed.x,
      y * noise.scale.y + noise.time * noise.speed.y,
      noise.scale.z + noise.time * noise.speed.z,
    ) * 255;
  };

  return noise;
};

export default getNoise;
