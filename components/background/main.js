const runVisualization = (p5, window, vertexShader, fragmentShader) => {
  const visualization = (p5) => {
    let shader;

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
      p5.pixelDensity(1);
      p5.noStroke();
      // p5.background(0);

      shader = p5.createShader(vertexShader, fragmentShader);
      p5.shader(shader);

      shader.setUniform('u_resolution', [p5.windowWidth, p5.windowHeight]);
      // p5.describe('zooming Mandelbrot set. a colorful, infinitely detailed fractal.');
    }

    p5.draw = () => {
      shader.setUniform('u_time', p5.millis() * .0001);
      p5.plane(p5.width, p5.height);
    }
  }

  new p5(visualization);
}

export default runVisualization;