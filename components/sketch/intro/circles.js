import getCircle from "./circle";

const getCircles = (p5) => {
  const circles = {
    initialize: undefined,
    update: undefined,
    render: undefined,
    list: [],
  };

  circles.initialize = () => {
    circles.list.push(
      getCircle(p5, {
        size: 0.6,
        color: "hsl(76, 100%, 48%)",
        orbit: {
          angle: 20,
          radius: 70,
          speed: 0.05,
        },
      }),
      getCircle(p5, {
        size: 0.75,
        color: "#F3C45C",
        orbit: {
          angle: 0,
          radius: 35,
          speed: 0.02,
        },
      }),
    );

    console.log(circles.list);

    circles.list.forEach((circle) => {
      circle.initialize();
    });
  };

  circles.update = () => {
    circles.list.forEach((circle) => {
      circle.update();
    });
  };

  circles.render = () => {
    p5.noStroke();

    circles.list.forEach((circle) => {
      circle.render();
    });
  };

  return circles;
};

export default getCircles;
