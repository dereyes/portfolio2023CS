<template>
  <LayoutPanel class="layout-panel-viz" />
</template>

<style lang="scss" scoped>
.layout-panel.layout-panel-viz {
  background: transparent;
  border: u(0.25) solid black;
  height: calc(100vh + ($layout-viz-height-mobile * 2));
  // min-height: $layout-viz-height-mobile;
  position: sticky;
  // scroll-snap-align: start;
  top: calc(-100vh - $layout-viz-height-mobile);
}
</style>
