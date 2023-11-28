import getCanvas from "./canvas";
import getGrid from "./grid";

const runVisualization = (p5, window) => {
  const canvasId = "canvas";

  let visualization = (p5) => {
    const canvas = getCanvas(p5, document, canvasId);
    const grid = getGrid(p5, window);

    p5.setup = () => {
      const sketch = p5.createCanvas(300, 300, p5.WEBGL);
      sketch.parent(canvasId);
      grid.initialize();

      p5.smooth();
      p5.colorMode(p5.RGB);
    };

    p5.draw = () => {
      p5.clear();

      grid.render({
        lines: false,
        movement: window.matchMedia('(prefers-reduced-motion: reduce)'),
      });
    };
  };

  new p5(visualization);
};

export default runVisualization;
