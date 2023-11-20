<template>
  <div id="viz" class="viz" ref="viz"></div>
</template>

<script setup>
import { onMounted, nextTick, ref } from "vue";
import p5 from "p5";

import vert from "./vert.js";
import frag from "./frag.js";

const viz = ref(null);

onMounted(() => {
  nextTick(() => {
    let visualization = (p5) => {
      const canvasResized = () => {
        p5.resizeCanvas(viz.value.clientWidth, viz.value.clientHeight);
      };

      let shader;

      p5.setup = () => {
        const canvas = p5.createCanvas(400, 400, p5.WEBGL);
        canvas.parent("viz");
        canvasResized();

        p5.smooth();
        p5.pixelDensity(1);
        p5.noStroke();

        shader = p5.createShader(vert, frag);
        p5.shader(shader);
      };

      p5.draw = () => {
        shader.setUniform("iResolution", [p5.width, p5.height]);
        shader.setUniform("iFrame", p5.frameCount);

        p5.quad(-1, -1, 1, -1, 1, 1, -1, 1);
      };

      p5.windowResized = () => {
        canvasResized();
      };
    };

    new p5(visualization);
  });
});
</script>

<style lang="scss" scoped>
.viz {
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
