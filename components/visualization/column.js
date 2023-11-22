import getCell from "./cell";

const getColumn = (p5, grid, x, characterString) => {
  const characterOptions = {
    "@": { baseline: 0.2 },
    A: { baseline: 0.3 },
    "#": { baseline: 0.3 },
    "&": { baseline: 0.3 },
    "+": { baseline: 0.3 },
    "=": { baseline: 0.3 },
    "-": { baseline: 0.3 },
    "?": { baseline: 0.3 },
    "*": { baseline: 0.5 },
    "%": { baseline: 0.3 },
    "/": { baseline: 0.3 },
    "<": { baseline: 0.25 },
    ".": { baseline: -0.03 },
  };

  const characterArray = Array.from(characterString);

  const getCharacter = (y) => {
    const characterArrayKey = y % characterArray.length;
    console.log(y, characterArrayKey);
    const characterOption =
      characterOptions[characterArray[characterArrayKey]];

    return {
      character: characterArray[characterArrayKey],
      baseline: characterOption.baseline,
    };
  };

  return Array.from({ length: grid.settings.rows }, (cell, y) => {
    const character = getCharacter(y);
    return getCell(p5, grid, x, y, character);
  });
};

export default getColumn;
