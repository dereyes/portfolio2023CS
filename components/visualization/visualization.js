import getCanvas from "./canvas";
import getGrid from "./grid";
// import getScrolling from "./scrolling";

const runVisualization = (p5, window) => {
  const canvasId = "canvas";

  let visualization = (p5) => {
    let font;
    const backgroundColor = "hsl(0, 0%, 62%)";

    const canvas = getCanvas(p5, document, canvasId);
    const grid = getGrid(p5, window);
    // const scrolling = getScrolling(window);

    p5.preload = () => {
      // font = p5.loadFont("Manrope-ExtraBold.ttf");
      font = p5.loadFont("SpaceMono-Bold.ttf");
    };

    p5.setup = () => {
      const sketch = p5.createCanvas(300, 300, p5.WEBGL);
      sketch.parent(canvasId);

      canvas.initialize();
      grid.initialize();

      p5.textFont(font);
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
        gradient: true,
      });

      // p5.filter(p5.BLUR, 10);
      p5.fill("#00f");
      canvas.render.frameRate();
    };

    // p5.windowResized = () => {
    //   canvas.initialize();
    // };
  };

  new p5(visualization);
};

export default runVisualization;
