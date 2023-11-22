const getCell = (p5, grid, x, y) => {
  const characters = Array.from("@&A>/?:*!)%^{~+=");

  const cell = {
    character: undefined,
    position: {
      x: undefined,
      y: undefined,
    },
    bounds: {
      top: undefined,
      right: undefined,
      bottom: undefined,
      left: undefined
    },
    initialize: undefined,
    render: undefined,
    updatePosition: undefined,
  };

  const getCellPosition = (x, y, shift = { x: 0, y: 0 }) => {
    return {
      x: grid.bounds.left + grid.cell.size * x + shift.x,
      y: grid.bounds.top + grid.cell.size * y + shift.y,
    };
  };

  const getCellBounds = (position) => {
    return {
      top: position.y,
      right: position.x + grid.cell.size,
      bottom: position.y + grid.cell.size,
      left: position.x
    };
  };

  const getCharacter = () => {
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const initializeCell = (x, y) => {
    cell.character = getCharacter();
    cell.position = getCellPosition(x, y);
    cell.bounds = getCellBounds(cell.position);
  };

  cell.updatePosition = (shift) => {
    const loopPosition = (position) => {
      const bounds = getCellBounds(position);

      if (bounds.top > p5.height) {
        return {
          x: position.x,
          y: 0 - grid.cell.size,
        };
      }

      if (bounds.bottom < 0) {
        return {
          x: position.x,
          y: p5.height,
        };
      }

      return position;
    };

    cell.position = loopPosition({
      x: cell.position.x + shift.x,
      y: cell.position.y + shift.y,
    });
    cell.bounds = getCellBounds(cell.position);
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
