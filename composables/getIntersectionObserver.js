// Sets up and returns an intersection observer. Each threshold represents a percentage - when ref.value is more than that percentage visible, the intersection observer callback is run.
// Following https://www.imarc.com/blog/adding-intersection-observer-to-your-vue-animation

export const getIntersectionObserver = ({
  ref,
  onIntersect = () => { },
  onEnter = () => { },
  onExit = () => { },
  once = false,
  thresholdCount = undefined,
  intersectionOptions = {}
}) => {
  const getThresholds = () => {
    // If thresholdCount is provided, return an array of thresholdCount length, containing thresholdCount decimals spread evenly between 0 (not visible) and 1 (completely visible) (inclusive)
    if (thresholdCount) {
      return Array.from({ length: thresholdCount + 2 }, (_, index) => {
        return index / (thresholdCount + 1)
      });
    }
    if (intersectionOptions.threshold) {
      return intersectionOptions.threshold;
    }
    return undefined;
  }

  const thresholds = getThresholds();

  if (thresholds) {
    // Intersection callback receives latest entry in record of threshold crossings
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        onIntersect(entry);

        if (entry.isIntersecting) {
          onEnter(entry);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else {
          onExit(entry);
        }
      }
    }, { ...intersectionOptions, threshold: thresholds });

    observer.observe(ref.value);

    return observer;
  }
};