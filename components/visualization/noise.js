import getScrolling from "./scrolling";

const getNoise = (p5, window) => {
  const noise = {
    update: undefined,
    render: {
      gradient: undefined,
    },
    time: {
      position: 0,
      speed: 4
    },
    scale: {
      // Larger: more variation. Smaller: smoother
      x: 0.03,
      y: 0.05,
      z: 0.8,
    },
    speed: {
      x: 0,
      y: 0.00002,
      z: 0.00002,
    },
  };

  const scrolling = getScrolling(window);

  const colors = {
    sun: p5.color("#FFAB5C"),
    grapefruit: p5.color("#FD3635"),
    black: p5.color("#000"),
  };

  const gradientStops = [
    { color: colors.black, progress: 0 },
    { color: colors.grapefruit, progress: 0.4 },
    { color: colors.sun, progress: 0.5 },
    { color: colors.grapefruit, progress: 0.6 },
    { color: colors.grapefruit, progress: 1 },
  ];

  // Position should be between 0 and 1
  const getGradient = (position) => {
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
    scrolling.update();
    noise.time.position += noise.time.speed + Math.abs(scrolling.speed * 50);
  };

  noise.getColor = (x, y) => {
    return getGradient(
      p5.noise(
        x * noise.scale.x + noise.time.position * noise.speed.x,
        y * noise.scale.y + noise.time.position * noise.speed.y,
        noise.scale.z + noise.time.position * noise.speed.z,
      ),
    );
  };

  return noise;
};

export default getNoise;
