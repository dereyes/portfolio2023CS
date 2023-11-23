<template>
    <div class="sketch-intro" id="sketch-intro">
    </div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import p5 from "p5";
import runCanvas from "./canvas";

onMounted(() => {
  nextTick(() => {
    runCanvas(p5, window, "sk-intro");
  });
});
</script>