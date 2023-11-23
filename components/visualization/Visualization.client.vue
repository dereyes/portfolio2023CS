<template>
  <div id="canvas" class="canvas"></div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import p5 from "p5";
import runVisualization from "./visualization";


/*
TODO:
* Resize correctly
* Respect 'prefers-reduced-motion'
* rotate asterisks when scrolling
*/

onMounted(() => {
  nextTick(() => {
    runVisualization(p5, window);
  });
});
</script>

<style lang="scss" scoped>
.canvas {
  height: 100vh;
  pointer-events: none;
}
</style>
