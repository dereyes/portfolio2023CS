import getScrolling from "./scrolling";

/*
TODO:
* move color to its own filter
* be able to set a starting point in noise space, maybe even speed in each axis, so they can be affected independently
*/

const getNoise = (p5, window) => {
  const noise = {
    initialize: undefined,
    update: undefined,
    gradient: {
      position: {
        x: undefined,
        y: undefined,
      },
      size: {
        x: undefined,
        y: undefined,
      },
    },
    render: {
      gradient: undefined,
    },
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

  //#1b0d09, #e075b0, #ff4000, #ffb882, #c4c4c4

  const colors = {
    blue: p5.color("hsl(76, 100%, 44%)"),
    concrete: p5.color("hsl(300, 1%, 62%)"),
  };

  const gradientStops = [
    { color: colors.blue, progress: 0 },
    { color: colors.concrete, progress: 0.3 },
    { color: colors.blue, progress: 0.4 },
    { color: colors.concrete, progress: 0.325 },
    { color: colors.blue, progress: 0.475 },
    { color: colors.blue, progress: 0.5 },
    { color: colors.concrete, progress: 0.55 },
    { color: colors.blue, progress: 0.35 },
    { color: colors.concrete, progress: 0.45 },
    { color: colors.blue, progress: 0.6 },
    { color: colors.blue, progress: 0.5 },
    { color: colors.blue, progress: 0.6 },
    { color: colors.concrete, progress: 0.65 },
    { color: colors.blue, progress: 0.7 },
    { color: colors.blue, progress: 1 },
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
    for (let i = 0; i < noise.gradient.size.width; i++) {
      p5.stroke(getGradient(i / noise.gradient.size.width));
      p5.line(
        noise.gradient.position.x + i,
        noise.gradient.position.y,
        noise.gradient.position.x + i,
        noise.gradient.position.y + noise.gradient.size.height,
      );
    }
  };

  noise.initialize = () => {
    (noise.gradient.position = {
      x: p5.width * -0.5,
      y: p5.height * -0.5,
    }),
      (noise.gradient.size = {
        width: p5.width,
        height: 10,
      });
  };

  noise.update = () => {
    scrolling.update();
    noise.time.position += noise.time.speed + Math.abs(scrolling.speed * 100);
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
