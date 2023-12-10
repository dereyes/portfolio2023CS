<template>
  <div :class="classObject">
    <div class="nav-top">
      <NavToggle />
    </div>
    <div class="nav-bottom">

    </div>
  </div>
</template>

<script setup>
import { useNavStore } from "@/stores/navStore";

const navStore = useNavStore();
const classObject = computed(() => ({
  "nav": true,
  "nav-isClosed": !navStore.isOpen,
  "nav-isOpened": navStore.isOpen
}));
</script>

<style lang="scss" scoped>
.nav {
  background: blue;
  display: flex;
  flex-flow: column;
  height: 100vh;
  position: sticky;
  top: 0;
}
</style>