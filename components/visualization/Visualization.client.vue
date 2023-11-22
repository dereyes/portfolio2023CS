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
* Max visualization size
* Resize correctly
* Respect 'prefers-reduced-motion'
*/

onMounted(() => {
  nextTick(() => {
    let visualization = (p5) => {
      const backgroundColor = 0;
      let viz = {
        element: document.getElementById("viz"),
      };
      let font;
      const grid = getGrid(p5, 4);

      // grid.display = () => {
      //   grid.forEach((cell) => {
      //     p5.noFill(cell.noise);
      //     p5.stroke(cell.noise);
      //     p5.rect(
      //       cell.position.x,
      //       cell.position.y,
      //       grid.cell.width,
      //       grid.cell.height,
      //     );
      //   });
      // };

      // grid.cell.render = (cell, x, y) => {
      //   p5.text(
      //     cell.text.character,
      //     cell.position.x + grid.cell.size * 0.5,
      //     cell.position.y + grid.cell.size * 0.35,
      //   );
      // };

      // grid.render = () => {
      //   p5.noStroke();
      //   p5.fill(255);

      //   grid.forEach((cell, x, y) => {
      //     grid.cell.render(cell, x, y);
      //   });
      // };

      viz.resized = () => {
        p5.resizeCanvas(viz.element.offsetWidth, viz.element.offsetHeight);
      };

      viz.display = {
        frameRate: () => {
          // p5.fill(255);
          p5.textSize(10);
          p5.textAlign(p5.LEFT, p5.BASELINE);
          p5.text(p5.frameRate(), 0, p5.height);
        },
      };

      p5.preload = () => {
        font = p5.loadFont("Manrope-ExtraBold.ttf");
      };

      p5.setup = () => {
        const canvas = p5.createCanvas(400, 400, p5.P2D);
        canvas.parent("viz");
        viz.resized();
        grid.resize();

        p5.smooth();
        // p5.fill(255);
        // p5.noStroke();
        p5.noFill();
        p5.stroke(255);
        p5.background(backgroundColor);

        p5.textFont(font);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textSize(grid.settings.text.size);

        console.log(grid);
      };

      p5.draw = () => {
        // smoothly move each row upwards
        // when a cell is not longer visible at the top, move it to the bottom
        // p5.background(backgroundColor);
        // p5.textSize(grid.text.size);
        // grid.forEach((cell, x, y) => {
        //   cell.noise =
        //     noise.min +
        //     noise.max *
        //       p5.noise(
        //         x * noise.scale.x + p5.frameCount * noise.speed.x,
        //         y * noise.scale.y + p5.frameCount * noise.speed.y,
        //         noise.scale.z + p5.frameCount * noise.speed.z,
        //       );
        //   cell.character =
        //     characters[
        //       Math.floor((cell.noise / noise.max) * characters.length)
        //     ];
        //   // p5.fill(cell.noise);
        //   p5.fill(cell.noise);
        //   p5.text(
        //     cell.character,
        //     cell.position.x + grid.cell.width * 0.35,
        //     cell.position.y + grid.cell.height * 0.7,
        //   );
        // });
        // grid.display();
        // viz.display.frameRate();
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
