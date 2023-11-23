import getCircles from "./circles";

// import getCanvas from "./canvas";

const runSketch = (p5, window, canvasID) => {
  let sketch = (p5) => {
    // let font;
    // const backgroundColor = "#cdcdcd";

    // const canvas = getCanvas(p5, document, canvasId);
    // const grid = getGrid(p5, window);
    // const scrolling = getScrolling(window);
    const circles = getCircles(p5);

    p5.setup = () => {
      const canvas = p5.createCanvas(500, 500, p5.WEBGL);
      canvas.parent(canvasID);

      circles.initialize();
      // canvas.initialize();
      // grid.initialize();

      // p5.textFont(font);
      // p5.smooth();
      // p5.background(backgroundColor);
      // p5.colorMode(p5.HSL);
      p5.noLoop();
    };

    p5.draw = () => {
      p5.background("#d5bdaf");
      //   // scrolling.update();

      //   // p5.background(backgroundColor);
      //   // grid.render({
      //   //   lines: false,
      //   //   movement: false,
      //   //   gradient: true,
      //   // });

      //   // // p5.filter(p5.BLUR, 10);
      //   // p5.fill('#00f');
      //   // canvas.render.frameRate();
      //   circles.update();
      // console.log("draw")
      circles.update();
      circles.render();
    };

    p5.windowResized = () => {
      // canvas.initialize();
    };
  };

  new p5(sketch);
};

export default runSketch;
