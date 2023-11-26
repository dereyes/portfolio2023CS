/**
 * Sets up a window scroll event listener, and runs the provided callback on each event, passing in things like how far the user has scrolled through the ref element. Must be run inside of onMounted.
 * @param {number} threshold - A number between 0 and 1, representing how far through the window the scroll progress is relative to. If 0, progress is relative to top of the screen. If 1, progress is relative to bottom of the screen. 
 */
export const getScrollObserver = ({
  target,
  onScroll = () => { },
  threshold = 0
}) => {
  const getProgress = () => {
    return Math.min(1,
      Math.max(0,
        //((window.scrollY + (window.innerHeight * threshold)) - offsetTop(element)) / element.offsetHeight
        ((window.scrollY + (window.innerHeight * threshold)) - element.offsetTop) / element.offsetHeight
      )
    );
  }

  const element = target;

  // const offsetTop = (element) => {
  //   let distance = 0;
  //   while (element.offsetParent) {
  //     distance += element.offsetTop;
  //     element = element.offsetParent;
  //   }
  //   return distance;
  // }

  window.addEventListener("scroll", (event) => {
    onScroll({
      event: event,
      progress: getProgress()
    });
  })
};