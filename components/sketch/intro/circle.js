const getCircle = (p5, { size, color, orbit }) => {
  const circle = {
    initialize: undefined,
    update: undefined,
    render: undefined,
    size: undefined,
    color: color,
    orbit: {
      angle: orbit.angle,
      radius: orbit.radius,
      speed: orbit.speed,
    },
    position: {
      x: undefined,
      y: undefined,
    },
  };

  const updatePosition = (shift = 0) => {
    const convertPolarToCartesian = (angle, radius) => {
      return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
      };
    };

    circle.orbit.angle += circle.orbit.speed;

    // console.log(circle);

    const newPosition = convertPolarToCartesian(
      circle.orbit.angle + shift,
      circle.orbit.radius,
    );

    circle.position = {
      x: newPosition.x,
      y: newPosition.y,
    };
  };

  circle.initialize = (shift = 0) => {
    circle.size = p5.width * size;
    updatePosition(shift);
  };

  circle.update = (shift = 0) => {
    updatePosition(shift);
  };

  circle.render = () => {
    p5.fill(circle.color);
    // p5.strokeWeight(20000);
    p5.ellipse(circle.position.x, circle.position.y, circle.size);
  };

  return circle;
};

export default getCircle;
