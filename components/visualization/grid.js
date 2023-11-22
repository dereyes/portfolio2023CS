import getCell from "./cell";

const getGrid = (p5, columns) => {
  const textSizeRelativeToCellWidth = 1.5;
  const cellHeightToWidthRatio = 1.1;
  const minimumRows = 7;
  const extraRows = 3;

  const grid = {
    // Properties to initialize grid
    settings: {
      columns: columns,
      text: {
        size: undefined,
      },
    },
    // Properties and methods of a prototypical cell
    cell: {
      size: {
        width: undefined,
        height: undefined,
      },
    },
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
    const getRowCount = () => {
      const baselineCount = Math.ceil(p5.height / grid.cell.size.height) + extraRows;

      if (baselineCount < minimumRows) {
        return minimumRows;
      }

      return baselineCount;
    };

    grid.cell.size.width = p5.width / grid.settings.columns;
    grid.cell.size.height = grid.cell.size.width * cellHeightToWidthRatio;
    grid.settings.rows = getRowCount();

    grid.size.width = p5.width;
    grid.size.height = grid.settings.rows * grid.cell.size.height;
    grid.settings.text.size =
      grid.cell.size.width * textSizeRelativeToCellWidth;

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
      p5.stroke(255);
      p5.noFill();

      forEachCell((cell) => {
        p5.rect(
          cell.position.x,
          cell.position.y,
          grid.cell.size.width,
          grid.cell.size.height,
        );
      });
    }
  };

  return grid;
};

export default getGrid;
