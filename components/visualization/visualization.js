import getCanvas from "./canvas";
import getGrid from "./grid";

const runVisualization = (p5, window) => {
  const canvasId = "canvas";

  let visualization = (p5) => {
    let font;
    const canvas = getCanvas(p5, document, canvasId);
    const grid = getGrid(p5, window);

    p5.preload = () => {
      font = p5.loadFont("SpaceMono-Bold.ttf");
    };

    p5.setup = () => {
      const sketch = p5.createCanvas(300, 300, p5.WEBGL);
      sketch.parent(canvasId);
      canvas.initialize();
      grid.initialize();

      p5.textFont(font);
      p5.smooth();
      p5.colorMode(p5.HSL);
    };

    p5.draw = () => {
      p5.clear();

      grid.render({
        lines: false,
        movement: window.matchMedia('(prefers-reduced-motion: reduce)'),
      });
      canvas.render.frameRate(true);
    };
  };

  new p5(visualization);
};

export default runVisualization;
