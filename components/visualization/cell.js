const getCell = (p5, grid, x, y) => {
  const characters = Array.from("@&A>/?:*!)%^{~+=");

  const cell = {
    character: undefined,
    position: {
      x: undefined,
      y: undefined,
    },
    initialize: undefined,
    render: undefined,
    updatePosition: undefined,
  };

  const getCellPosition = (x, y, shift = { x: 0, y: 0 }) => {
    const calculatePositionBounds = (x, y, shift) => {
      const position = {
        x: grid.bounds.left + grid.cell.size * x + shift.x,
        y: grid.bounds.top + grid.cell.size * y + shift.y,
      };

      const bounds = {
        top: grid.bounds.top + grid.cell.size * y,
        left: grid.bounds.left + grid.cell.size * x,
        bottom: grid.bounds.top + grid.cell.size * y + grid.cell.size,
      };

      return {
        position: position,
        bounds: bounds,
      };
    };

    const checkAndLoopBounds = ({ position, bounds }) => {
      if (bounds.top > p5.height) {
        return calculatePositionBounds(x, y, {
          x: shift.x,
          y: shift.y - grid.height - grid.cell.size,
        }).position;
      }

      if (bounds.bottom < 0) {
        return calculatePositionBounds(x, y, {
          x: shift.x,
          y: shift.y - grid.cell.size,
        }).position;
      }

      return position;
    };

    return checkAndLoopBounds(calculatePositionBounds(x, y, shift));
  };

  const getCharacter = () => {
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const initializeCell = (x, y) => {
    cell.character = getCharacter();
    cell.position = getCellPosition(x, y);
  };

  cell.render = () => {
    p5.text(
      cell.character,
      cell.position.x + grid.cell.size * 0.5,
      cell.position.y + grid.cell.size * 0.35,
    );
  };

  initializeCell(x, y);

  return cell;
};

export default getCell;
