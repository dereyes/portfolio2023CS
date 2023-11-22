const getNoise = (p5) => {
  const noise = {
    update: undefined,
    render: {
      gradient: undefined,
    },
    time: undefined,
    scale: {
      // Larger: more variation. Smaller: smoother
      x: 0.09,
      y: 0.03,
      z: 1,
    },
    speed: {
      x: 0,
      y: 0.000005,
      z: 0.00005,
    },
  };

  // Position should be between 0 and 1
  const getGradient = (position) => {
    const gradientStops = [
      { color: p5.color("#f00"), progress: 0 },
      { color: p5.color("#f00"), progress: 0.4 },
      { color: p5.color("#ff0"), progress: 0.45 },
      { color: p5.color("#0f0"), progress: 0.5 },
      { color: p5.color("#0ff"), progress: 0.55 },
      { color: p5.color("#0ff"), progress: 0.6 },
      { color: p5.color("#00f"), progress: 1 },
    ];

    const getPositionBetweenStops = (position) => {
      for (let i = 0; i < gradientStops.length; i++) {
        const currentStop = gradientStops[i];
        const nextStop = gradientStops[i + 1];

        if (position >= currentStop.progress && position < nextStop.progress) {
          const progress =
            (position - currentStop.progress) /
            (nextStop.progress - currentStop.progress);

          return {
            startStop: currentStop,
            endStop: nextStop,
            progress: progress,
          };
        }
      }
    };

    const positionBetweenStops = getPositionBetweenStops(position);

    return p5.lerpColor(
      positionBetweenStops.startStop.color,
      positionBetweenStops.endStop.color,
      positionBetweenStops.progress,
    );
  };

  noise.render.gradient = () => {
    for (let i = 0; i < p5.width; i++) {
      p5.stroke(getGradient(i / p5.width));
      p5.line(i, 0, i, 10);
    }
  };

  noise.update = () => {
    noise.time = p5.millis();
  };

  noise.getColor = (x, y) => {
    return getGradient(
      p5.noise(
        x * noise.scale.x + noise.time * noise.speed.x,
        y * noise.scale.y + noise.time * noise.speed.y,
        noise.scale.z + noise.time * noise.speed.z,
      ),
    );
  };

  return noise;
};

export default getNoise;
