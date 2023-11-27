/**
 * Sets up a window scroll event listener, and runs the provided callback on each event, passing in things like how far the user has scrolled through the ref element. Must be run inside of onMounted.
 * @param {number} threshold - A number between 0 and 1, representing how far through the window the scroll progress is relative to. If 0, progress is relative to top of the screen. If 1, progress is relative to bottom of the screen. 
 */
export const getScrollObserver = ({
  target,
  approachHeight = 0,
  departureHeight = 0,
  onScroll = () => { },
  threshold = 0
}) => {
  const normalize = (value) => {
    return Math.min(1, Math.max(0, value));
  }

  const getProgress = () => {
    const thresholdOffset = window.innerHeight * threshold;
    const thresholdActual = window.scrollY + thresholdOffset;
    const distanceFromThresholdToElement = thresholdActual - element.offsetTop;
    const progressThroughElement = distanceFromThresholdToElement / element.offsetHeight;

    return normalize(
      progressThroughElement
    );
  }

  const getApproachProgress = () => {
    const thresholdOffset = window.innerHeight * threshold;
    const thresholdActual = window.scrollY + thresholdOffset;
    const distanceFromThresholdToApproach = thresholdActual - element.offsetTop - approachHeight;
    const progressThroughApproach = distanceFromThresholdToApproach / approachHeight;

    return normalize(
      progressThroughApproach
    );
  }

  const getDepartureProgress = () => {
    // When scrollY reaches top of departure, it should start increasing from 0 to 1, and is 1 when we hit the bottom of the departure zone
    // scrollY is usually 0, at top of screen, but we offset it so it's further down the screen, up to 1
    const thresholdOffset = window.innerHeight * threshold;
    const thresholdActual = window.scrollY + thresholdOffset;
    const departureTop = element.offsetTop + element.offsetHeight;
    const distanceFromThresholdToDeparture = thresholdActual - departureTop;
    const distanceThroughDeparture = distanceFromThresholdToDeparture / departureHeight;

    // console.log(departureTop);

    // const distanceFromThresholdToDeparture = thresholdActual - element.offsetTop;
    // const progressThroughDeparture = distanceFromThresholdToDeparture / approachHeight;

    // if (target.classList.contains('layout-panel-tools')) {
    //   console.log('distanceThroughDeparture', normalize(distanceThroughDeparture));
    // }

    return normalize(
      distanceThroughDeparture
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
      approachProgress: getApproachProgress(),
      progress: getProgress(),
      departureProgress: getDepartureProgress()
    });
  })
};