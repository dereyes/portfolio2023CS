<template>
  <div></div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import p5 from "p5";
import runVisualization from "./visualization";

onMounted(() => {
  nextTick(() => {
    runVisualization(p5, window);
  });
});
</script>

<style lang="scss">
canvas {
  clip-path: circle(50%);
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: -2;
}
</style>
