<template>
  <main class="layout-main">
    <div class="layout-panel layout-panel-intro">
      <slot name="intro" />
    </div>
    <LayoutPanelViz />
    <div class="layout-panel layout-panel-background">
      <slot name="background" />
    </div>
    <div class="layout-panel layout-panel-skills">
      <slot name="skills" />
    </div>
    <div class="layout-panel layout-panel-footer">
      <slot name="footer" />
    </div>
  </main>
</template>

<style lang="scss">
.layout {
  &-main {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: max-content;
    height: 100vh;
    overflow-y: scroll;
    position: relative;
    // scroll-snap-type: y proximity;
    width: 100vw;

    // @include breakpoint("desktop") {
    //   grid-template-columns: [window-start] 1fr [center] 1fr [window-end];
    //   grid-template-rows: auto;
    // }
  }

  &-panel {
    display: flex;
    background: color.palette("concrete");
    flex-flow: column nowrap;
    height: max-content;
    min-height: 100vh;
    padding: $layout-panel-padding-y $layout-panel-padding-x;

    &-background {
      // scroll-snap-align: start;
    }
  }

  @include breakpoint("max-mobile") {
    &-panel {
      &-intro {
        min-height: 85vh;
      }

      &:not(.layout-panel-intro, .layout-panel-viz) {
        padding-top: calc($layout-panel-padding-y + $layout-viz-height-mobile);
      }
    }
  }
}
</style>
