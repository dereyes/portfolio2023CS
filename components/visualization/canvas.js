const getCanvas = (p5, document, canvasId) => {
  const canvas = {
    element: undefined,
    initialize: undefined,
    render: {
      frameRate: undefined,
    },
  };

  canvas.initialize = () => {
    p5.resizeCanvas(canvas.element.offsetWidth, canvas.element.offsetHeight);
  };

  canvas.render.frameRate = () => {
    p5.fill("#00f");
    p5.textSize(10);
    p5.textAlign(p5.LEFT, p5.BASELINE);
    p5.text(p5.frameRate(), 0, p5.height);
  };

  canvas.element = document.getElementById(canvasId);

  return canvas;
};

export default getCanvas;
