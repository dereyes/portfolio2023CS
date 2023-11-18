<template>
  <div class="layout-panel layout-panel-viz">
    <LayoutArrow />
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    &-panel-viz {
      border: u(0.25) solid black;
      min-height: $layout-viz-height-mobile;
      position: sticky;
      top: 0;
    }
}
</style>