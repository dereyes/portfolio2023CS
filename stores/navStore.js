import { defineStore } from "pinia";

export const useNavStore = defineStore("navStore", {
  state: () => {
    return {
      isOpen: false,
      scrollPosition: 0,
    };
  },
  actions: {
    toggle() {
      if (this.isOpen) {
        // close the nav
        this.isOpen = false;
      } else {
        // open the nav
        this.isOpen = true;
        this.scrollPosition = window.scrollY;

        document.getElementById("app").style.top = `-${this.scrollPosition}px`;
      }
    },
  },
});
