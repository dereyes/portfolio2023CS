export const useLayoutStore = defineStore('layoutStore', () => {
  const navIsOpen = ref(false);
  const navToggleCenterCoordinates = ref({});

  const toggleNav = () => {
    navIsOpen.value = !navIsOpen.value;
  }

  const setNavToggleCenterCoordinates = (coordinates) => {
    navToggleCenterCoordinates.value = coordinates;
  }

  const getNavToggleCenterCoordinates = () => {
    return navToggleCenterCoordinates;
  }

  return { navIsOpen, toggleNav, setNavToggleCenterCoordinates, getNavToggleCenterCoordinates }
});