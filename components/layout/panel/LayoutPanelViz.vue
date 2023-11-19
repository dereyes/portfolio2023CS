<template>
  <LayoutPanel class="layout-panel-viz">
    <Visualization />
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.layout-panel.layout-panel-viz {
  background: transparent;
  border: u(0.25) solid black;
  clip-path: inset(0 0 0 0);
  height: calc(100vh + ($layout-viz-height-mobile * 2));
  position: sticky;
  top: calc(-100vh - $layout-viz-height-mobile);
  z-index: 1;
}
</style>
