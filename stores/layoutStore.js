export const useLayoutStore = defineStore('layoutStore', () => {
  const backgroundTheme = ref("light");

  const navIsOpen = ref(false);
  const navToggleCenterCoordinates = ref({});

  const toggleBodyBackgroudTheme = () => {
    backgroundTheme.value === "light" ? "dark" : "light";
  }

  const toggleNav = () => {
    navIsOpen.value = !navIsOpen.value;
  }

  const setNavToggleCenterCoordinates = (coordinates) => {
    navToggleCenterCoordinates.value = coordinates;
  }

  return {
    backgroundTheme,
    navIsOpen,
    navToggleCenterCoordinates,
    setNavToggleCenterCoordinates,
    toggleBodyBackgroudTheme,
    toggleNav,
  }
});