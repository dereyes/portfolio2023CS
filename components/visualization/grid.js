import getCell from "./cell";
import getNoise from "./noise";
import getGradient from "./gradient";

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

  const gradient = getGradient(p5);
  const noise = getNoise(p5, window);

  const getCells = () => {
    return Array.from({ length: grid.settings.columns }, (_column, x) => {
      return Array.from({ length: grid.settings.rows }, (_row, y) => {
        const cell = getCell(p5, grid, x, y);
        cell.initialize(x, y);
        return cell;
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

    gradient.initialize();
  };

  const forEachCell = (method) => {
    grid.cells.forEach((column, x) => {
      column.forEach((row, y) => {
        method(grid.cells[x][y], x, y);
      });
    });
  };

  const renderGridLines = (cell) => {
    p5.noFill();
    p5.stroke("#000");
    p5.strokeWeight(1);

    p5.rect(cell.position.x, cell.position.y, grid.cell.size);
  };

  grid.render = ({ lines, movement }) => {
    if (movement) {
      noise.update();
    }

    forEachCell((cell, x, y) => {
      cell.render({
        color: gradient.getColor(noise.getPoint(x, y)),
      });

      if (lines) {
        renderGridLines(cell);
      }
    });

    gradient.render(false);
  };

  return grid;
};

export default getGrid;
