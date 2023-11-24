const getGradient = (p5) => {
  const gradient = {
    initialize: undefined,
    render: undefined,
    getColor: undefined,
    position: {
      x: undefined,
      y: undefined,
    },
    size: {
      width: undefined,
      height: undefined,
    },
  };

  const palette = {
    concrete: p5.color("hsl(0, 1%, 50%)"),
    hilite: p5.color("hsl(72, 100%, 40%)"),
  };

  const gradientStops = [
    { color: palette.hilite, progress: 0 },
    { color: palette.concrete, progress: 0.3 },
    { color: palette.hilite, progress: 0.4 },
    { color: palette.concrete, progress: 0.325 },
    { color: palette.hilite, progress: 0.475 },
    { color: palette.hilite, progress: 0.5 },
    { color: palette.concrete, progress: 0.55 },
    { color: palette.hilite, progress: 0.35 },
    { color: palette.concrete, progress: 0.45 },
    { color: palette.hilite, progress: 0.6 },
    { color: palette.hilite, progress: 0.5 },
    { color: palette.hilite, progress: 0.6 },
    { color: palette.concrete, progress: 0.65 },
    { color: palette.hilite, progress: 0.7 },
    { color: palette.hilite, progress: 1 },
  ];

  // Position should be between 0 and 1
  gradient.getColor = (position) => {
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

  gradient.initialize = () => {
    gradient.size = {
      width: p5.width,
      height: 10,
    }
    gradient.position = {
      x: p5.width * -0.5,
      y: p5.height * -0.5,
    }
  }

  gradient.render = (render) => {
    if (render) {
        for (let i = 0; i < gradient.size.width; i++) {
          p5.stroke(gradient.getColor(i / gradient.size.width));
          p5.line(
            gradient.position.x + i,
            gradient.position.y,
            gradient.position.x + i,
            gradient.position.y + gradient.size.height,
          );
        }
    }
  };

  return gradient;
};

export default getGradient;
