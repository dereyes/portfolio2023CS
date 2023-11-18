<template>
  <div class="layout-panel layout-panel-viz">
    <LayoutArrow />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  &-panel-viz {
    // background: transparent;
    border: u(0.25) solid black;
    height: calc(100vh + $layout-viz-height-mobile);
    // min-height: $layout-viz-height-mobile;
    position: sticky;
    // scroll-snap-align: start;
    top: calc(-100vh - ($layout-viz-height-mobile / 2));
  }
}
</style>
