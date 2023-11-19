<template>
  <div class="layout-arrow">
    <div class="layout-arrow-outer">
      <div class="layout-arrow-inner">
        <span class="layout-arrow-character">↓</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-arrow {
  $arrow-size: u(4);
  $arrow-inner-size: $arrow-size * 1.5;
  $arrow-overflow-top: $arrow-size * -0.5;
  $arrow-overflow-bottom: $arrow-size * 0.5;

  bottom: 0;
  display: grid;
  height: 0;
  padding: 0 $layout-panel-padding-x;
  place-items: end;
  // pointer-events: none;
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 2;

  &-outer {
    display: grid;
    height: $layout-viz-height-mobile;
    place-items: center;
    position: sticky;
    top: 0;
  }

  &-inner {
    background: color.palette("hilite");
    border-radius: math.div($arrow-size, 2);
    color: color.palette("concrete");
    display: grid;
    height: $arrow-size;
    // transform: translate(0, math.div($arrow-size, 2));
    place-items: center;
    position: sticky;
    right: 0;
    width: $arrow-size;
  }

  &-character {
    font-family: typography.fontFamily("sansSerif");
    font-size: u(2);
    font-weight: typography.fontWeight("extrabold");
  }
}
</style>
