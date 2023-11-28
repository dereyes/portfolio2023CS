const getCanvas = (p5, document, canvasId) => {
  const canvas = {
    element: undefined,
  };

  canvas.element = document.getElementById(canvasId);

  return canvas;
};

export default getCanvas;
