<template>
  <div id="viz" class="viz" ref="viz"></div>
</template>

<script setup>
import { onMounted, nextTick, ref } from "vue";
import p5 from "p5";

const viz = ref(null);

onMounted(() => {
  nextTick(() => {
    let visualization = (p5) => {
      let rectShader;

      const canvasResized = () => {
        p5.resizeCanvas(viz.value.clientWidth, viz.value.clientHeight);
      };

      p5.preload = () => {
        rectShader = p5.loadShader(
          "shader.vert",
          "shader.frag",
          () => {
            console.log("success?");
          },
          (error) => {
            console.log(error);
          },
        );
      };

      // the 'varying's are shared between both vertex & fragment shaders
      let varying = "precision highp float; varying vec2 vPos;";

      // the vertex shader is called for each vertex
      let vs =
        varying +
        "attribute vec3 aPosition;" +
        "void main() { vPos = (gl_Position = vec4(aPosition,1.0)).xy; }";

      // the fragment shader is called for each pixel
      let fs =
        varying +
        "uniform vec2 p;" +
        "uniform float r;" +
        "const int I = 500;" +
        "void main() {" +
        "  vec2 c = p + vPos * r, z = c;" +
        "  float n = 0.0;" +
        "  for (int i = I; i > 0; i --) {" +
        "    if(z.x*z.x+z.y*z.y > 4.0) {" +
        "      n = float(i)/float(I);" +
        "      break;" +
        "    }" +
        "    z = vec2(z.x*z.x-z.y*z.y, 2.0*z.x*z.y) + c;" +
        "  }" +
        "  gl_FragColor = vec4(0.5-cos(n*17.0)/2.0,0.5-cos(n*13.0)/2.0,0.5-cos(n*23.0)/2.0,1.0);" +
        "}";

      let mandel;

      p5.setup = () => {
        const canvas = p5.createCanvas(400, 400, p5.WEBGL);
        canvas.parent("viz");
        // p5.shader(rectShader);

        mandel = p5.createShader(vs, fs);
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
          1.5 * p5.exp(-6.5 * (1 + p5.sin(p5.millis() / 2000))),
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
