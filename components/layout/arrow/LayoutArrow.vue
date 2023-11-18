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

  $arrow-position-y: $arrow-size * -0.75;

  height: calc($layout-viz-height-mobile + ($arrow-position-y * -2));
  position: absolute;
  right: $layout-panel-padding;
  top: $arrow-position-y;

  &-inner {
    background: color.palette("hilite");
    border-radius: math.div($arrow-size, 2);
    color: color.palette("concrete");
    display: grid;
    height: $arrow-size;
    top: calc($layout-viz-height-mobile + $arrow-position-y);
    place-items: center;
    position: sticky;
    width: $arrow-size;
  }

  &-character {
    font-family: typography.fontFamily("sansSerif");
  }
}
</style>
