<template>
  <main class="layout-main">
    <slot />
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
  }

  @include breakpoint("max-mobile") {
    &-panel {
      &:not(.layout-panel-intro, .layout-panel-viz) {
        padding-top: calc($layout-panel-padding-y + $layout-viz-height-mobile);
      }
    }
  }
}
</style>
