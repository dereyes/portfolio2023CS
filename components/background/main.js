const runVisualization = (p5, window, vertexShader, fragmentShader) => {
  const visualization = (p5) => {
    let shader;

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
      p5.background(0);

      shader = p5.createShader(vertexShader, fragmentShader);
      p5.shader(shader);

      shader.setUniform('p', [-0.74364388703, 0.13182590421]);
      p5.describe('zooming Mandelbrot set. a colorful, infinitely detailed fractal.');
    }

    p5.draw = () => {
      shader.setUniform('r', 1.5 * p5.exp(-6.5 * (1 + p5.sin(p5.millis() / 2000))));
      p5.plane(p5.width, p5.height);
    }
  }

  new p5(visualization);
}

export default runVisualization;