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
    concrete: p5.color("hsl(0, 0%, 62.5%)"),
    hilite: p5.color("hsl(72, 80%, 44%)"),
  };

  const gradientStops = [
    { color: palette.hilite, progress: 0 },

    { color: palette.hilite, progress: 0.10 },
    { color: palette.concrete, progress: 0.109 },
    { color: palette.hilite, progress: 0.15 },
    { color: palette.concrete, progress: 0.159 },

    { color: palette.hilite, progress: 0.20 },
    { color: palette.concrete, progress: 0.209 },
    { color: palette.hilite, progress: 0.25 },
    { color: palette.concrete, progress: 0.259 },

    { color: palette.hilite, progress: 0.30 },
    { color: palette.concrete, progress: 0.3009 },
    { color: palette.hilite, progress: 0.35 },
    { color: palette.concrete, progress: 0.3509 },

    { color: palette.hilite, progress: 0.40 },
    { color: palette.concrete, progress: 0.4009 },
    { color: palette.hilite, progress: 0.45 },
    { color: palette.concrete, progress: 0.4509 },

    { color: palette.hilite, progress: 0.50 },
    { color: palette.concrete, progress: 0.5009 },
    { color: palette.hilite, progress: 0.51 },
    { color: palette.concrete, progress: 0.5109 },

    { color: palette.hilite, progress: 0.55 },
    { color: palette.concrete, progress: 0.5509 },
    { color: palette.hilite, progress: 0.60 },
    { color: palette.concrete, progress: 0.6009 },

    { color: palette.hilite, progress: 0.65 },
    { color: palette.concrete, progress: 0.6509 },
    { color: palette.hilite, progress: 0.70 },
    { color: palette.concrete, progress: 0.7009 },

    { color: palette.hilite, progress: 0.75 },
    { color: palette.concrete, progress: 0.7509 },
    { color: palette.hilite, progress: 0.80 },
    { color: palette.concrete, progress: 0.8009 },

    { color: palette.hilite, progress: 0.85 },
    { color: palette.concrete, progress: 0.8509 },
    { color: palette.hilite, progress: 0.90 },
    { color: palette.concrete, progress: 0.9009 },

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
