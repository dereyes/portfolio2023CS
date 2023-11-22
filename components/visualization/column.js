import getCell from "./cell";

const getColumn = (p5, grid, x) => {
  return Array.from({ length: grid.settings.rows }, (cell, y) => {
    return getCell(p5, grid, x, y);
  });
};

export default getColumn;
