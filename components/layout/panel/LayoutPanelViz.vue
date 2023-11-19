<template>
  <LayoutPanel class="layout-panel-viz">
    <div class="viz"></div>
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
}

.viz {
  background: linear-gradient(orange, pink);
  height: 100vh;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100vh;
}
</style>
