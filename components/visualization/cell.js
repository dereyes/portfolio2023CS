const getCell = (p5, grid, x, y) => {
  const characters = Array.from("@&A>/?:*!)%^{~+=");

  const cell = {
    character: undefined,
    position: {
      x: undefined,
      y: undefined,
    },
    initialize: undefined,
    render: undefined,
    updatePosition: undefined,
  };

  const getCellPosition = (x, y, shift = { x: 0, y: 0 }) => {
    // const calculatePositionBounds = (x, y, shift) => {
    //   const position = {
    //     x: grid.bounds.left + grid.cell.size * x + shift.x,
    //     y: grid.bounds.top + grid.cell.size * y + shift.y,
    //   };

    //   const bounds = {
    //     top: position.y,
    //     bottom: position.y + grid.cell.size,
    //   };

    //   return {
    //     position: position,
    //     bounds: bounds,
    //   };
    // };

    // const checkAndLoopBounds = ({ position, bounds }) => {
    //   // if(x == 0 && y ==0) {
    //   //   console.log(bounds);
    //   // }

    //   if (bounds.top > p5.height) {
    //     // if (x == 0 && y == 0) {
    //     //   console.log(bounds, p5.height);
    //     // }

    //     // return calculatePositionBounds(x, y, {
    //     //   x: shift.x,
    //     //   y: shift.y - grid.height - grid.cell.size,
    //     // }).position;

    //     return {
    //       x: position.x,
    //       y: position.y,
    //     };
    //   }

    //   if (bounds.bottom < 0) {
    //     return calculatePositionBounds(x, y, {
    //       x: shift.x,
    //       y: shift.y - grid.cell.size,
    //     }).position;
    //   }

    //   return position;
    // };

    // return checkAndLoopBounds(calculatePositionBounds(x, y, shift));

    return {
      x: grid.bounds.left + grid.cell.size * x + shift.x,
      y: grid.bounds.top + grid.cell.size * y + shift.y,
    };
  };

  const getCellBounds = (position) => {
    return {
      top: position.y,
      bottom: position.y + grid.cell.size,
    };
  };

  const getCharacter = () => {
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const initializeCell = (x, y) => {
    cell.character = getCharacter();
    cell.position = getCellPosition(x, y);
  };

  cell.render = () => {
    p5.text(
      cell.character,
      cell.position.x + grid.cell.size * 0.5,
      cell.position.y + grid.cell.size * 0.35,
    );
  };

  cell.updatePosition = (shift) => {
    const loopPosition = (position) => {
      const bounds = getCellBounds(position);

      if (bounds.top > p5.height) {
        return {
          x: position.x,
          y: 0 - grid.cell.size,
        };
      }

      if (bounds.bottom < 0) {
        return {
          x: position.x,
          y: p5.height,
        };
      }

      return position;
    };

    cell.position = loopPosition({
      x: cell.position.x + shift.x,
      y: cell.position.y + shift.y,
    });
  };

  initializeCell(x, y);

  return cell;
};

export default getCell;
