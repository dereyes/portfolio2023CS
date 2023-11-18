<template>
  <div class="layout-arrow">
    <div class="layout-arrow-inner">
      <span class="layout-arrow-character">↓</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-arrow {
  $arrow-size: u(3);
  $arrow-inner-size: $arrow-size * 1.5;
  $arrow-overflow-top: $arrow-size * -0.5;
  $arrow-overflow-bottom: $arrow-size * 0.5;
  $arrow-track-height: calc(
    100vh + $layout-viz-height-mobile + ($arrow-overflow-top * -1) +
      $arrow-overflow-bottom
  );

  height: $arrow-track-height;
  position: absolute;
  right: $layout-panel-padding-x;
  top: $arrow-overflow-top;

  &-inner {
    background: color.palette("hilite");
    border-radius: math.div($arrow-size, 2);
    color: color.palette("concrete");
    display: grid;
    height: $arrow-size;
    top: calc($layout-viz-height-mobile + $arrow-overflow-bottom);
    place-items: center;
    position: sticky;
    width: $arrow-size;
  }

  &-character {
    font-family: typography.fontFamily("sansSerif");
  }
}
</style>
