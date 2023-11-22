const getCell = (p5, grid, x, y) => {
  const cell = {
    color: undefined,
    position: {
      x: undefined,
      y: undefined,
    },
    bounds: {
      top: undefined,
      right: undefined,
      bottom: undefined,
      left: undefined,
    },
    initialize: undefined,
    render: undefined,
    update: undefined,
  };

  const getCellPosition = (x, y) => {
    return {
      x: grid.bounds.left + grid.cell.size * x,
      y: grid.bounds.top + grid.cell.size * y,
    };
  };

  const getCellBounds = (position) => {
    return {
      top: position.y,
      right: position.x + grid.cell.size,
      bottom: position.y + grid.cell.size,
      left: position.x,
    };
  };

  const initializeCell = (x, y) => {
    cell.position = getCellPosition(x, y);
    cell.bounds = getCellBounds(cell.position);
  };

  cell.update = (shift) => {

  };

  cell.render = ({color}) => {
    p5.fill(color);
    p5.stroke(color);
    p5.strokeWeight(1);

    p5.rect(
      cell.position.x,
      cell.position.y,
      grid.cell.size
    );
  };

  initializeCell(x, y);

  return cell;
};

export default getCell;
