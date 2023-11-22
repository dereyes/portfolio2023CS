import p5 from "p5";
import getGrid from "./grid";
import getScrolling from "./scrolling";

const runVisualization = () => {
  let visualization = (p5) => {
    let font;
    const backgroundColor = 0;

    let viz = {
      element: document.getElementById("viz"),
    };
    const grid = getGrid(p5, 2);
    const scrolling = getScrolling(window);

    viz.resized = () => {
      p5.resizeCanvas(viz.element.offsetWidth, viz.element.offsetHeight);
    };

    // viz.display = {
    //   frameRate: () => {
    //     // p5.fill(255);
    //     p5.textSize(10);
    //     p5.textAlign(p5.LEFT, p5.BASELINE);
    //     p5.text(p5.frameRate(), 0, p5.height);
    //   },
    // };

    p5.preload = () => {
      // font = p5.loadFont("Manrope-ExtraBold.ttf");
      font = p5.loadFont("SpaceMono-Bold.ttf");
    };

    p5.setup = () => {
      const canvas = p5.createCanvas(400, 400, p5.P2D);
      canvas.parent("viz");

      viz.resized();
      grid.initialize();

      p5.smooth();
      p5.noFill();
      p5.stroke(255);
      p5.background(backgroundColor);

      p5.textFont(font);
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.textSize(grid.settings.text.size);
    };

    p5.draw = () => {
      scrolling.update();

      p5.background(backgroundColor);
      grid.render({
        shift: { x: 0, y: (-.05 - scrolling.speed) },
        lines: true,
        movement: true,
      });
    };

    p5.windowResized = () => {
      viz.resized();
    };
  };

  new p5(visualization);
};

export default runVisualization;
