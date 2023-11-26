import { reactive } from "vue";

export const scrollStore = reactive({
  panelTools: {
    scrollProgress: 0,
    // fadeBuffer: 100,
    // distanceFromViewport: undefined,
    update({ progress }) {
      console.log(progress);
      this.scrollProgress = progress;
    }
  }
});