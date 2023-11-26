<template>
  <main class="layout-main">
    <div class="layout-main-underlay" :style="{ opacity: underlayOpacity }"></div>
    <div class="layout-main-overlay" :style="{ opacity: underlayOpacity }"></div>
    <slot />
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { scrollStore } from '@/stores/scrollStore';

const underlayOpacity = ref(0);

onMounted(() => {
  underlayOpacity.value = scrollStore.panelTools.scrollProgress;
});
</script>

<style lang="scss">
.layout-main {
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  gap: 25vh;
  margin: 0 auto;
  width: 100%;

  &-underlay,
  &-overlay {
    height: 100vh;
    opacity: 0;
    pointer-events: none;
    position: fixed;
    width: 100%;
  }

  &-underlay {
    background: color.palette("ink");
    z-index: -2;
  }

  &-overlay {
    background: rgba(0, 0, 0, 0.7);
  }

  @include breakpoint(("start": "tablet",
      "end": null,
    )) {
    max-width: getBreakpoint("max");
  }
}
</style>
