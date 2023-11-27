import { reactive } from "vue";

export const scrollStore = reactive({
  panelTools: {
    scrollProgress: 0,
    approachProgress: 0,
    departureProgress: 0,
    // fadeBuffer: 100,
    // distanceFromViewport: undefined,
    update({ progress, approachProgress, departureProgress }) {
      this.scrollProgress = progress;
      this.approachProgress = approachProgress;
      this.departureProgress = departureProgress;
    }
  }
});