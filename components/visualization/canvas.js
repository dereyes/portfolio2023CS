const getCanvas = (p5, document, canvasId) => {
  const canvas = {
    element: undefined,
    initialize: undefined,
    render: {
      frameRate: undefined,
    },
    frameRate: {
      color: "blue",
      position: {
        x: undefined,
        y: undefined,
      },
      size: 10,
    },
  };

  canvas.initialize = () => {
    p5.resizeCanvas(canvas.element.offsetWidth, canvas.element.offsetHeight);

    canvas.frameRate.position = {
      x: p5.width * -0.5,
      y: p5.height * 0.5,
    };
  };

  canvas.render.frameRate = (render) => {
    if (render) {
      p5.noStroke();
      p5.fill(canvas.frameRate.color);
      p5.textSize(canvas.frameRate.size);
      p5.textAlign(p5.LEFT, p5.BASELINE);
      p5.text(
        p5.frameRate(),
        canvas.frameRate.position.x,
        canvas.frameRate.position.y,
      );
    }
  };

  canvas.element = document.getElementById(canvasId);

  return canvas;
};

export default getCanvas;
