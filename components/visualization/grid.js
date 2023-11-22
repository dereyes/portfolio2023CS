const getGrid = (p5, columns) => {
  const textSizeRelativeToCell = 0.75;
  const characters = Array.from("@&A>/?:*!)%^{~+=");

  const grid = {
    // Properties to initialize grid
    settings: {
      columns: columns,
      text: {
        size: undefined,
      },
    },
    // Properties and methods of a prototypical cell
    cell: {},
    // Array of actual cells
    cells: [],
    // Properties and public methods of the grid
    size: {
      width: undefined,
      height: undefined,
    },
    bounds: {
      top: undefined,
      left: undefined,
    },
    forEachCell: undefined,
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

    const potentialPositionBounds = calculatePositionBounds(x, y, shift);

    if (potentialPositionBounds.bounds.top > p5.height) {
      const correctedPositionBounds = calculatePositionBounds(x, y, {
        x: shift.x,
        y: shift.y - grid.height - grid.cell.size,
      });

      return correctedPositionBounds.position;
    }

    if (potentialPositionBounds.bounds.bottom < 0) {
      const correctedPositionBounds = calculatePositionBounds(x, y, {
        x: shift.x,
        y: shift.y - grid.cell.size,
      });

      return correctedPositionBounds.position;
    }

    return potentialPositionBounds.position;
  };

  const initializeCells = (columns, rows) => {
    const getCharacter = () => {
      return characters[Math.floor(Math.random() * characters.length)];
    };

    return Array.from({ length: columns }, () => {
      return Array.from({ length: rows }, () => {
        return {
          character: getCharacter(),
          position: getCellPosition(x, y),
        };
      });
    });
  };

  grid.resize = () => {
    grid.cell.size = p5.width / grid.settings.columns;
    grid.settings.rows = Math.ceil(p5.height / grid.cell.size);

    console.log(p5.canvas);

    grid.size.width = p5.width;
    grid.size.height = grid.settings.rows * grid.cell.size;
    grid.settings.text.size = grid.cell.size * textSizeRelativeToCell;

    grid.bounds.top = p5.height / 2 - grid.size.height / 2;
    grid.bounds.left = 0;

    grid.cells = initializeCells(grid.settings.columns, grid.rows);
  };

  grid.forEachCell = (method) => {
    for (let x = 0; x < grid.settings.columns; x++) {
      for (let y = 0; y < grid.rows; y++) {
        method(grid.cells[x][y], x, y);
      }
    }
  };

  return grid;
};

export default getGrid;
