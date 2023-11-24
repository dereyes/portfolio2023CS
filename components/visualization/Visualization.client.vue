<template>
  <div id="canvas" class="canvas"></div>
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

<style lang="scss" scoped>
.canvas {
  height: 300px;
  pointer-events: none;
  width: 300px;
}
</style>
