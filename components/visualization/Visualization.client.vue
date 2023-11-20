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
      // let rectShader;
      // let getShaders = {};

      const canvasResized = () => {
        p5.resizeCanvas(viz.value.clientWidth, viz.value.clientHeight);
      };

      p5.preload = () => {
        // console.log(p5.loadStrings("vert.glsl"));
        // rectShader = p5.loadShader(
        //   "vert.glsl",
        //   "frag.glsl",
        //   () => {
        //     console.log("success?");
        //   },
        //   (error) => {
        //     console.log(error);
        //   },
        // );
        // getShaders = {
        //   vert: p5.loadStrings("vert.glsl"),
        //   frag: p5.loadStrings("frag.glsl"),
        // };
        // p5.loadStrings("vert.glsl", (result) => {
        //   getShaders.vert = result.join("\n");
        // });
        // p5.loadStrings("frag.glsl", (result) => {
        //   getShaders.frag = result.join("\n");
        // });
      };

      let mandel;

      p5.setup = () => {
        const canvas = p5.createCanvas(400, 400, p5.WEBGL);
        canvas.parent("viz");
        // canvasResized();
        // console.log(rectShader);
        // rectShader._glProgram = WebGLProgram;
        // p5.shader(rectShader);
        // p5.copyToContext(p5.p5);

        mandel = p5.createShader(vert, frag);
        // mandel = p5.createShader(getShaders.vert, getShaders.frag);
        // p5.shader(mandel);
        // console.log(mandel);

        // rectShader = p5.createShader(getShaders.vert, getShaders.frag);

        // console.log(mandel, rectShader);

        p5.shader(mandel);
        p5.noStroke();

        // 'p' is the center point of the Mandelbrot image
        mandel.setUniform("p", [-0.74364388703, 0.13182590421]);

        // p5.rect(0, 0, p5.width, p5.height);
      };

      p5.draw = () => {
        // p5.rect(0, 0, p5.width, p5.height);
        mandel.setUniform(
          "r",
          1.5 * p5.exp(-6.5 * (1 + p5.sin(p5.millis() / 200000))),
        );
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
