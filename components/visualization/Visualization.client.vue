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
      // let rectShader;

      const canvasResized = () => {
        p5.resizeCanvas(viz.value.clientWidth, viz.value.clientHeight);
      };

      p5.preload = () => {
        // rectShader = p5.loadShader("shader.vert", "shader.frag");
      };

      p5.setup = () => {
        // const canvas = p5.createCanvas(0, 0, p5.WEBGL);
        const canvas = p5.createCanvas(0, 0, p5.P2D);
        canvas.parent("viz");
        p5.pixelDensity(1);
        canvasResized();
        p5.background(0);
        p5.smooth();
      };

      let angle = 0;
      let speed = 0.01;

      const getPlanets = () => {
        return Array.from({ length: 10 }, (_, index) => {
          let radius = index * 25;
          let angle = Math.random() * 5;
          let speed = Math.random() * 2;

          return {
            radius: radius,
            angle: angle,
            speed: speed,
          };
        });
      };

      const pointPosition = (p5, angle, radius, speed) => {
        const center = {
          x: p5.width / 2,
          y: p5.height / 2,
        };

        return {
          x: center.x + radius * p5.cos(angle),
          y: center.y + radius * p5.sin(angle),
        };
      };

      const planets = getPlanets();

      p5.draw = () => {
        p5.blendMode(p5.MULTIPLY);
        p5.background(0, 0.99);
        p5.blendMode(p5.BLEND);

        p5.stroke(170);
        p5.strokeWeight(1);
        p5.fill(0);
        // p5.shader(rectShader);

        p5.point(p5.width / 2, p5.height / 2);
        // p5.point(p5.sin(speed) * 9, p5.height / 2);

        // p5.point(
        //   pointPosition(p5, angle, 50).x,
        //   pointPosition(p5, angle, 50).y,
        // );

        // p5.point(
        //   pointPosition(p5, angle, 150).x,
        //   pointPosition(p5, angle, 150).y,
        // );

        planets.forEach((planet) => {
          p5.ellipse(
            pointPosition(p5, angle + planet.angle, planet.radius, planet.speed)
              .x,
            pointPosition(p5, angle + planet.angle, planet.radius, planet.speed)
              .y,
            20,
          );
        });

        angle += speed;
        // p5.rect(p5.mouseX - 300, p5.mouseY - 300, 100, 100);
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
