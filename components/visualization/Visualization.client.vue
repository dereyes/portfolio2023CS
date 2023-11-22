<template>
  <div id="canvas" class="canvas"></div>
</template>

<script setup>
import { onMounted, nextTick, ref } from "vue";
import runVisualization from './visualization';

/*
TODO:
* Resize correctly
* Respect 'prefers-reduced-motion'
* rotate asterisks when scrolling
*/

onMounted(() => {
  nextTick(() => {
    runVisualization(window);
  });
});
</script>

<style lang="scss" scoped>
.canvas {
  background: linear-gradient(orange, pink);
  height: 100vh;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;

  @include breakpoint("max-mobile") {
    width: 100%;
  }

  @include breakpoint("min-desktop") {
    width: 50%;
  }
}
</style>
