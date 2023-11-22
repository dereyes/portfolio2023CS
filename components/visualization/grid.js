import getCell from "./cell";
import getNoise from "./noise";

const getGrid = (p5, columns) => {
  const grid = {
    // Properties to initialize grid
    settings: {
      columns: columns,
      rows: undefined,
    },
    // Properties and methods of a prototypical cell
    cell: {
      size: undefined,
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

  const noise = getNoise(p5);

  const initializeCells = () => {
    return Array.from({ length: grid.settings.columns }, (_column, x) => {
      return Array.from({ length: grid.settings.rows }, (_row, y) => {
        return getCell(p5, grid, x, y);
      });
    });
  };

  grid.initialize = () => {
    grid.cell.size = p5.width / grid.settings.columns;
    grid.settings.rows = Math.ceil(p5.height / grid.cell.size);

    grid.size.width = p5.width;
    grid.size.height = grid.settings.rows * grid.cell.size;

    grid.bounds.top = p5.height / 2 - grid.size.height / 2;
    grid.bounds.left = p5.width / 2 - grid.size.width / 2;

    grid.cells = initializeCells();
    console.log(grid);
  };

  const forEachCell = (method) => {
    for (let x = 0; x < grid.settings.columns; x++) {
      for (let y = 0; y < grid.settings.rows; y++) {
        method(grid.cells[x][y], x, y);
      }
    }
  };

  grid.render = ({ shift, lines, movement }) => {
    p5.noStroke();
    p5.fill("#cdcdcd");

    noise.update();

    forEachCell((cell, x, y) => {
      cell.render({
        color: noise.getColor(x, y),
      });
    });

    if (lines) {
      // Separate loop, otherwise rendering errors
      p5.noFill();
      p5.stroke(255);

      forEachCell((cell) => {
        p5.rect(cell.position.x, cell.position.y, grid.cell.size);
      });
    }
  };

  return grid;
};

export default getGrid;
