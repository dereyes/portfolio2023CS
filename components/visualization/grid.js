import getCell from "./cell";
import getNoise from "./noise";

const getGrid = (p5, window) => {
  const gridSizeRelativeToCanvasWidth = .95;

  const grid = {
    // Properties to initialize grid
    settings: {
      columns: 50,
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

  const noise = getNoise(p5, window);

  const initializeCells = () => {
    return Array.from({ length: grid.settings.columns }, (_column, x) => {
      return Array.from({ length: grid.settings.rows }, (_row, y) => {
        return getCell(p5, grid, x, y);
      });
    });
  };

  grid.initialize = () => {
    grid.settings.rows = grid.settings.columns;
    grid.size.width = p5.width * gridSizeRelativeToCanvasWidth;
    grid.cell.size = grid.size.width / grid.settings.columns;

    grid.size.height = grid.settings.rows * grid.cell.size;

    grid.bounds.top = - grid.size.height / 2;
    grid.bounds.left = - grid.size.width / 2;

    grid.cells = initializeCells();
    noise.initialize();
    console.log(grid);
  };

  const forEachCell = (method) => {
    for (let x = 0; x < grid.settings.columns; x++) {
      for (let y = 0; y < grid.settings.rows; y++) {
        method(grid.cells[x][y], x, y);
      }
    }
  };

  grid.render = ({ shift, lines, movement, gradient }) => {
    p5.noStroke();
    p5.fill("#000");

    noise.update();

    forEachCell((cell, x, y) => {
      cell.render({
        color: noise.getColor(x, y),
      });
    });

    if (lines) {
      // Separate loop, otherwise rendering errors
      p5.noFill();
      p5.stroke("#000");

      forEachCell((cell) => {
        p5.rect(cell.position.x, cell.position.y, grid.cell.size);
      });
    }

    if(gradient) {
      noise.render.gradient();
    }
  };

  return grid;
};

export default getGrid;
