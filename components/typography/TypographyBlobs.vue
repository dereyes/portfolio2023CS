<template>
  <span class="typography-blob-wrapper">
    <div class="typography-blob-orbit typography-blob-orbit-a">
      <div class="typography-blob-planet typography-blob-planet-a"></div>
    </div>
    <div class="typography-blob-orbit typography-blob-orbit-b">
      <div class="typography-blob-planet typography-blob-planet-b"></div>
    </div>
  </span>
  <!-- <span class="typography-blobs">
    <div class="typography-blobs-blob typography-blobs-blob-a"></div>
    <div class="typography-blobs-blob typography-blobs-blob-b"></div>
    <div class="typography-blobs-blob typography-blobs-blob-c"></div>
  </span> -->
</template>

<style lang="scss" scoped>
.typography-blob {
  &-wrapper {
    aspect-ratio: 1/1;
    border: 1px solid red;
    display: inline-grid;
    height: 1em;
    place-items: center;
    position: relative;
    z-index: -1;
  }

  &-orbit {
    position: absolute;

    &-a {
      animation: orbit-a 20s linear infinite;
    }

    &-b {
      animation: orbit-b 10s linear infinite;
    }
  }

  &-planet {
    aspect-ratio: 1/1;
    border-radius: 100%;
    position: relative;

    &-a {
      $blob-color: color.palette("hilite");
      background: $blob-color;
      box-shadow: 0 0 1em 1.5em $blob-color;
      left: 50px;
      height: 150px;
    }

    &-b {
      $blob-color: color.palette("concrete");
      background: $blob-color;
      box-shadow: 0 0 1em 1.5em $blob-color;
      left: 200px;
      height: 50px;
    }
  }

  @keyframes orbit-a {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes orbit-b {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}

// .typography-blobs {
//   aspect-ratio: 1/1;
//   background: color.palette("concrete");
//   border-radius: 100%;
//   // box-shadow: 0 0 0 1em color.palette("concrete"), 0 0 2em 2em color.palette("hilite");
//   display: inline-grid;
//   height: 1em;
//   grid-template-columns: 1fr;
//   grid-template-rows: 1fr;
//   place-items: center;
//   position: relative;
//   transform: translate(0, .125em);
//   z-index: -1;
//   animation: spin-right 2s linear infinite;

//   &-blob {
//     aspect-ratio: 1/1;
//     // border: 1px solid red;
//     border-radius: 100%;
//     height: 100%;
//     position: absolute;

//     &-a {
//       border: 1px solid green;
//       background: hsl(54, 100%, 50%);
//       box-shadow: 0 0 1em 1.5em hsl(54, 100%, 50%);
//       transform: translate(0, .125em);
//       // top: 5em;
//       // left: .125em;
//     }

//     &-b {
//       background: rgb(255, 0, 195);
//       box-shadow: 0 0 .75em 1em rgb(255, 0, 195);
//       // transform: translate(.25em, 0);
//     }

//     &-c {
//       background: hsl(336, 100%, 50%);
//       box-shadow: 0 0 .75em .75em hsl(336, 100%, 50%);
//       // transform: translate(-.5em, -.5em);
//     }
//   }

//   @keyframes spin-right {
//     0% {
//       transform: rotate(0deg);
//     }

//     100% {
//       transform: rotate(360deg);
//     }
//   }
// }
</style>