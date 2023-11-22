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
      y: 0.0005,
      z: 0.001,
    },
  };

  const getGradient = (position) => {
    return p5.lerpColor(p5.color(0), p5.color(255), position);
  };

  noise.render.gradient = () => {
    for (let i = 0; i < p5.width; i++) {
      p5.stroke(
        getGradient(i / p5.width)
      );
      p5.line(i, 0, i, 10);
    }
  };

  noise.update = () => {
    noise.time = p5.frameCount;
  };

  noise.getColor = (x, y) => {
    return (
      p5.noise(
        x * noise.scale.x + noise.time * noise.speed.x,
        y * noise.scale.y + noise.time * noise.speed.y,
        noise.scale.z + noise.time * noise.speed.z,
      ) * 255
    );
  };

  return noise;
};

export default getNoise;
