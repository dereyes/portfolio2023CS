<template>
  <div></div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import p5 from "p5";

import vertexShader from "./shaders/vertex.glsl?raw";
import fragmentShader from './shaders/fragment.glsl?raw';
import runVisualization from "./main.js";

onMounted(() => {
  nextTick(() => {
    runVisualization(p5, window, vertexShader, fragmentShader);
  });
});
</script>

<style lang="scss">
canvas {
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: -2;
}
</style>