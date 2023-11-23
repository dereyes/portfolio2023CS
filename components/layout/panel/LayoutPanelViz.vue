<template>
  <LayoutPanel class="layout-panel-viz">
    <ClientOnly>
      <Visualization />
    </ClientOnly>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.layout-panel.layout-panel-viz {
  background: transparent;
  padding: 0;
  position: sticky;
  top: 0;

  @include breakpoint("max-mobile") {
    clip-path: inset(0 0 0 0);
    height: calc(100vh + ($layout-viz-height-mobile * 2));
    position: sticky;
    top: calc(-100vh - $layout-viz-height-mobile);
    z-index: 1;
  }

  @include breakpoint("min-desktop") {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
  }
}
</style>
