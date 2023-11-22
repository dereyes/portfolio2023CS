const getScrolling = (window) => {
  const scrolling = {
    speed: 0,
    position: {
      previous: 0,
      current: 0,
    },
    update: undefined,
  };

  scrolling.update = () => {
    scrolling.position.previous = scrolling.position.current;
    scrolling.position.current = window.scrollY;
    scrolling.speed = scrolling.position.current - scrolling.position.previous;
  };

  return scrolling;
};

export default getScrolling;
