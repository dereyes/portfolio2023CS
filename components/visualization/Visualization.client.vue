<template>
  <div id="viz" class="viz" ref="viz"></div>
</template>

<script setup>
import { onMounted, nextTick, ref } from "vue";
import p5 from "p5";

// const viz = ref(null);
const backgroundColor = 0;

let viz = {};
let font;

let time = {
  position: 0,
  speed: 0.005, // Smaller = slower evolution.
};

let noise = {
  // Bigger = more "zoomed out" of noise space, more variation. Smaller = larger, smoother waves.
  scale: {
    x: 0.008,
    y: 0.02,
    z: 0.01,
  },
  speed: {
    x: 0.001,
    y: 0.0001,
    z: 0.001,
  },
  min: 0,
  max: 275, // Will not map directly to colors if not 0 and 255
};

let grid = {
  rows: 50,
  columns: 10,
  cell: {},
};

grid.cells = Array.from({ length: grid.columns }, (x, i) => {
  return Array.from({ length: grid.rows }, (y, j) => {
    return {
      index: `${i}, ${j}`,
    };
  });
});

grid.forEach = (method) => {
  for (let x = 0; x < grid.columns; x++) {
    for (let y = 0; y < grid.rows; y++) {
      method(grid.cells[x][y], x, y);
    }
  }
};

const scrollSpeed = (settings) => {
  settings = settings || {};

  var lastPos,
    newPos,
    timer,
    delta,
    delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();

  return function () {
    newPos = window.scrollY;
    if (lastPos != null) {
      // && newPos < maxScroll
      delta = newPos - lastPos;
    }
    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return delta;
  };
};

/*
TODO:
* Max visualization size
* Resize correctly
* Respect 'prefers-reduced-motion'
*/

// $@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^'.
// .:-=+*#%@
// " .:-=+x*azm8W#%@"
const characters = Array.from(
  "`' ~    z+  >x- . %i|/-      - +*+ - -#%& +*.    -<+*.  -xyz.@@@",
);

console.log(grid);

onMounted(() => {
  nextTick(() => {
    viz.element = document.getElementById("viz");

    let visualization = (p5) => {
      grid.display = () => {
        grid.forEach((cell) => {
          p5.noFill(cell.noise);
          p5.stroke(cell.noise);
          p5.rect(
            cell.position.x,
            cell.position.y,
            grid.cell.width,
            grid.cell.height,
          );
        });
      };

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
        font = p5.loadFont("SpaceMono-Bold.ttf");
      };

      p5.setup = () => {
        const canvas = p5.createCanvas(400, 400, p5.P2D);
        canvas.parent("viz");
        viz.resized();

        p5.smooth();
        p5.fill(0);
        p5.noStroke();
        p5.background(backgroundColor);

        p5.textFont(font);
        p5.textAlign(p5.CENTER, p5.CENTER);

        if (p5.width < p5.height) {
          grid.width = p5.width * 0.85;
        } else {
          grid.width = p5.height * 0.85;
        }

        grid.height = grid.width;
        grid.cell.width = grid.width / grid.columns;
        grid.cell.height = grid.height / grid.rows;
        grid.text = {
          size: grid.cell.height * 1.25,
        };

        grid.left = p5.width / 2 - grid.width / 2;
        grid.top = p5.height / 2 - grid.height / 2;

        grid.forEach((cell, x, y) => {
          cell.position = {
            x: grid.left + grid.cell.width * x,
            y: grid.top + grid.cell.height * y,
          };
        });
      };

      p5.draw = () => {
        p5.background(backgroundColor);
        p5.textSize(grid.text.size);

        grid.forEach((cell, x, y) => {
          cell.noise =
            noise.min +
            noise.max *
              p5.noise(
                x * noise.scale.x + p5.frameCount * noise.speed.x,
                y * noise.scale.y + p5.frameCount * noise.speed.y,
                noise.scale.z + p5.frameCount * noise.speed.z,
              );

          cell.character =
            characters[
              Math.floor((cell.noise / noise.max) * characters.length)
            ];

          // p5.fill(cell.noise);
          p5.fill(cell.noise);
          p5.text(
            cell.character,
            cell.position.x + grid.cell.width * 0.35,
            cell.position.y + grid.cell.height * 0.7,
          );
        });

        // grid.display();
        viz.display.frameRate();
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
