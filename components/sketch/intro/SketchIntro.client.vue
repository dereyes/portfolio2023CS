<template>
  <div class="sketch-intro" id="sketch-intro"></div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import p5 from "p5";
import runSketch from "./sketch";

onMounted(() => {
  nextTick(() => {
    runSketch(p5, window, "sketch-intro");
  });
});
</script>

<style lang="scss">
.sketch-intro {
  display: grid;
  height: 100vh;
  place-items: center;
  position: fixed;
  width: 100vw;
  z-index: -1;

  canvas {
    // border: 1px solid red;
    position: absolute;

    @include breakpoint("max-mobile") {
      left: -33%;
      top: -33%;
    }

    @include breakpoint("min-desktop") {
      left: -20%;
      position: relative;
    }
  }
}
</style>
