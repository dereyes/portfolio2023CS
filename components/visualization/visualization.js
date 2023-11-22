import p5 from "p5";
import getCanvas from "./canvas";
import getGrid from "./grid";
import getScrolling from "./scrolling";

const runVisualization = (window) => {
  const gridColumns = 8;
  const canvasId = "canvas";

  let visualization = (p5) => {
    let font;
    const backgroundColor = 0;

    const canvas = getCanvas(p5, document, canvasId);
    const grid = getGrid(p5, gridColumns);
    const scrolling = getScrolling(window);

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
    };

    p5.draw = () => {
      scrolling.update();

      p5.background(backgroundColor);
      grid.render({
        // shift: { x: 0, y: -0.05 - scrolling.speed },
        lines: true,
        movement: false,
      });

      canvas.render.frameRate();
    };

    p5.windowResized = () => {
      canvas.initialize();
    };
  };

  new p5(visualization);
};

export default runVisualization;
