<template>
  <div :class="['app', { 'app-navIsOpen': navStore.isOpen }]" id="app">
    <NuxtLayout>
      <NuxtPage
        :transition="{
          name: 'slide-right',
          mode: 'out-in',
        }"
      />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useNavStore } from "@/stores/navStore";
const navStore = useNavStore();
</script>

<style lang="scss">
.app {
  align-items: start;
  display: grid;
  grid-template-columns: [window-start] 1fr [main-end nav-start] auto [window-end];
  grid-template-rows: [window-start] min-content [header-end main-start] 1fr [window-end];
  height: 100vh;
  margin: 0 auto;
  min-height: 100%;
  overflow-y: scroll;
  // padding: 0 2rem;
  justify-items: center;
  width: 100%;
}

.app-header {
  grid-column: main-end / window-end;
  grid-row: window-start / header-end;
  position: sticky;
  top: 0;
}


.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
