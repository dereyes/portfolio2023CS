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

    console.log(cell);
  };

  cell.update = (shift) => {

  };

  cell.render = ({color}) => {
    // p5.text(
    //   cell.character.character,
    //   cell.position.x + grid.cell.size.width * 0.5,
    //   cell.position.y + grid.cell.size.height * cell.character.baseline,
    // );
    // console.log(color);
    p5.fill(color);

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
