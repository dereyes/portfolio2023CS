import getCell from "./cell";

const getGrid = (p5, columns) => {
  const textSizeRelativeToCell = 0.75;

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
    render: undefined,
  };

  const initializeCells = (columns, rows) => {
    return Array.from({ length: columns }, (column, x) => {
      return Array.from({ length: rows }, (row, y) => {
        return getCell(p5, grid, x, y);
      });
    });
  };

  grid.resize = () => {
    grid.cell.size = p5.width / grid.settings.columns;
    grid.settings.rows = Math.ceil(p5.height / grid.cell.size);

    grid.size.width = p5.width;
    grid.size.height = grid.settings.rows * grid.cell.size;
    grid.settings.text.size = grid.cell.size * textSizeRelativeToCell;

    grid.bounds.top = p5.height / 2 - grid.size.height / 2;
    grid.bounds.left = 0;

    grid.cells = initializeCells(grid.settings.columns, grid.settings.rows);
  };

  const forEachCell = (method) => {
    for (let x = 0; x < grid.settings.columns; x++) {
      for (let y = 0; y < grid.settings.rows; y++) {
        method(grid.cells[x][y], x, y);
      }
    }
  };

  const columnSpeeds = [2.5, 1.5, 2];

  grid.render = ({ shift, lines }) => {
    p5.noStroke();
    p5.fill(255);

    forEachCell((cell, x) => {
      // cell.updatePosition({ x: 0, y: columnSpeeds[x] + shift.x });
      cell.render({ lines });
    });

    if (lines) {
      // Separate loop, otherwise rendering errors
      forEachCell((cell) => {
        p5.stroke(255);
        p5.noFill();
        p5.rect(cell.position.x, cell.position.y, grid.cell.size);
      });
    }
  };

  return grid;
};

export default getGrid;
