export const useNavStore = defineStore('navStore', () => {
  const isOpen = ref(false);
  const navToggleCenterCoordinates = ref({});

  const toggle = () => {
    isOpen.value = !isOpen.value;
  }

  const setNavToggleCenterCoordinates = (coordinates) => {
    navToggleCenterCoordinates.value = coordinates;
  }

  const getNavToggleCenterCoordinates = () => {
    return navToggleCenterCoordinates;
  }

  return { isOpen, toggle, setNavToggleCenterCoordinates, getNavToggleCenterCoordinates }
});