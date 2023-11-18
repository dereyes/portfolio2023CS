<template>
  <div class="layout-panel layout-panel-viz">
    <div class="layout-arrow">
      <div class="layout-arrow-inner">
        <span class="layout-arrow-character">↓</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $viz-height: 25vh;

  .layout {
      &-arrow {
      $arrow-size: u(3);
      $arrow-inner-size: $arrow-size * 1.5;

      $arrow-position-y: $arrow-size * -.75;

      height: calc($viz-height + ($arrow-position-y * -2));
      position: absolute;
      top: $arrow-position-y;

      &-inner {
        background: color.palette("hilite");
        border-radius: math.div($arrow-size, 2);
        // color: color.palette("concrete");
        display: grid;
        height: $arrow-size;
        top: calc($viz-height + $arrow-position-y);
        place-items: center;
        position: sticky;
        width: $arrow-size;
      }

      &-character {
        font-family: typography.fontFamily("sansSerif");
      }
    }

    &-panel-viz {
      border: u(0.25) solid black;
      min-height: $viz-height;
      position: sticky;
      top: 0;
    }
}
</style>