import getCanvas from "./canvas";
import getGrid from "./grid";
// import getScrolling from "./scrolling";

const runVisualization = (p5, window) => {
  const gridColumns = 6;
  const canvasId = "canvas";

  let visualization = (p5) => {
    let font;
    const backgroundColor = "#000";

    const canvas = getCanvas(p5, document, canvasId);
    const grid = getGrid(p5, window, gridColumns);
    // const scrolling = getScrolling(window);

    p5.preload = () => {
      // font = p5.loadFont("Manrope-ExtraBold.ttf");
      font = p5.loadFont("SpaceMono-Bold.ttf");
    };

    p5.setup = () => {
      const sketch = p5.createCanvas(400, 400, p5.P2D);
      sketch.parent(canvasId);

      canvas.initialize();
      grid.initialize();

      p5.smooth();
      p5.background(backgroundColor);
      p5.colorMode(p5.HSL);
      // p5.noLoop();
    };

    p5.draw = () => {
      // scrolling.update();

      p5.background(backgroundColor);
      grid.render({
        lines: false,
        movement: false,
        gradient: false,
      });

      // canvas.render.frameRate();
    };

    p5.windowResized = () => {
      canvas.initialize();
    };
  };

  new p5(visualization);
};

export default runVisualization;
