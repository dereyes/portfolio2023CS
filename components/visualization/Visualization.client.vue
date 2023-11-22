<template>
  <div id="viz" class="viz" ref="viz"></div>
</template>

<script setup>
import { onMounted, nextTick, ref } from "vue";
import p5 from "p5";
import getGrid from "./grid";

// grid.forEach = (method) => {
//   for (let x = 0; x < grid.columns; x++) {
//     for (let y = 0; y < grid.rows; y++) {
//       method(grid.cells[x][y], x, y);
//     }
//   }
// };

/*
TODO:
* Resize correctly
* Respect 'prefers-reduced-motion'
* rotate asterisks when scrolling
*/

onMounted(() => {
  nextTick(() => {
    let visualization = (p5) => {
      let viz = {
        element: document.getElementById("viz"),
      };
      let font;
      const grid = getGrid(p5, 3);
      const backgroundColor = 0;

      viz.resized = () => {
        p5.resizeCanvas(viz.element.offsetWidth, viz.element.offsetHeight);
      };

      // viz.display = {
      //   frameRate: () => {
      //     // p5.fill(255);
      //     p5.textSize(10);
      //     p5.textAlign(p5.LEFT, p5.BASELINE);
      //     p5.text(p5.frameRate(), 0, p5.height);
      //   },
      // };

      p5.preload = () => {
        font = p5.loadFont("Manrope-ExtraBold.ttf");
      };

      p5.setup = () => {
        const canvas = p5.createCanvas(400, 400, p5.P2D);
        canvas.parent("viz");

        viz.resized();
        grid.resize();

        p5.smooth();
        p5.noFill();
        p5.stroke(255);
        p5.background(backgroundColor);

        p5.textFont(font);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textSize(grid.settings.text.size);

        console.log(grid);
      };

      p5.draw = () => {
        p5.background(backgroundColor);
        grid.render({ shift: { x: 0, y: -1 }, lines: true });
      };

      p5.windowResized = () => {
        viz.resized();
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
