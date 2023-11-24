import getCell from "./cell";
import getNoise from "./noise";

const getGrid = (p5, window) => {
  const gridSizeRelativeToCanvasWidth = 0.9;

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

  const getCells = () => {
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

    grid.bounds.top = grid.size.height * -0.5;
    grid.bounds.left = grid.size.width * -0.5;

    grid.cells = getCells();
    noise.initialize();
  };

  const forEachCell = (method) => {
    grid.cells.forEach((column, x) => {
      column.forEach((row, y) => {
        method(grid.cells[x][y], x, y);
      });
    });
  };

  grid.render = ({ lines, movement, gradient }) => {
    if (movement) {
      noise.update();
    }

    forEachCell((cell, x, y) => {
      cell.render({
        color: noise.getColor(x, y),
      });

      if (lines) {
        p5.noFill();
        p5.stroke("#000");
        p5.strokeWeight(1);

        p5.rect(cell.position.x, cell.position.y, grid.cell.size);
      }
    });

    if (gradient) {
      noise.render.gradient();
    }
  };

  return grid;
};

export default getGrid;
