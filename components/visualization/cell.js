const getCell = (p5, grid, x, y, character) => {
  const characters = [
    { character: "@", baseline: 0.2 },
    { character: "A", baseline: 0.3 },
    { character: "&", baseline: 0.3 },
    { character: "+", baseline: 0.3 },
    { character: "=", baseline: 0.3 },
    { character: "?", baseline: 0.3 },
    { character: "*", baseline: 0.5 },
    { character: "%", baseline: 0.3 },
    { character: "/", baseline: 0.3 },
    { character: "<", baseline: 0.25 },
    { character: ".", baseline: -0.03 },
  ];

  const cell = {
    character: character,
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
    updatePosition: undefined,
  };

  const getCellPosition = (x, y, shift = { x: 0, y: 0 }) => {
    return {
      x: grid.bounds.left + grid.cell.size.width * x + shift.x,
      y: grid.bounds.top + grid.cell.size.height * y + shift.y,
    };
  };

  const getCellBounds = (position) => {
    return {
      top: position.y,
      right: position.x + grid.cell.size.width,
      bottom: position.y + grid.cell.size.height,
      left: position.x,
    };
  };

  const getCharacter = () => {
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const getNextCellInColumn = () => {
    const nextY = (y + 1) % grid.settings.rows;
    return grid.cells[x][nextY];
  };

  const getPreviousCellInColumn = () => {
    const previousY = y - 1 < 0 ? grid.settings.rows - 1 : y - 1;
    return grid.cells[x][previousY];
  };

  const initializeCell = (x, y) => {
    // cell.character = getCharacter();
    cell.position = getCellPosition(x, y);
    cell.bounds = getCellBounds(cell.position);
  };

  cell.updatePosition = (shift) => {
    const loopPosition = (position) => {
      const bounds = getCellBounds(position);

      if (bounds.top > p5.height) {
        const nextCellInColumn = getNextCellInColumn();

        return {
          x: position.x,
          y: nextCellInColumn.position.y - grid.cell.size.height,
        };
      }

      if (bounds.bottom < 0) {
        const previousCellInColumn = getPreviousCellInColumn();

        return {
          x: position.x,
          y: previousCellInColumn.position.y + grid.cell.size.height,
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
      cell.character.character,
      cell.position.x + grid.cell.size.width * 0.5,
      cell.position.y + grid.cell.size.height * cell.character.baseline,
    );
  };

  initializeCell(x, y);

  return cell;
};

export default getCell;
