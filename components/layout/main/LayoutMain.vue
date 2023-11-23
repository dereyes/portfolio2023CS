<template>
  <main class="layout-main">
    <slot />
  </main>
</template>

<style lang="scss">
.layout {
  &-main {
    display: grid;
    // height: 100vh;
    // overflow-y: scroll;
    position: relative;
    width: 100%;
  }

  @include breakpoint("max-mobile") {
    &-main {
      grid-auto-flow: row;
      grid-template-rows: max-content;
    }

    &-panel {
      &:not(.layout-panel-intro, .layout-panel-viz) {
        padding-top: calc(
          $layout-panel-padding-mobile-y + $layout-viz-height-mobile
        );
      }
    }
  }

  @include breakpoint("min-desktop") {
    &-main {
      grid-template-columns: [window-start] 1fr [center] 1fr [window-end];
      grid-template-rows: auto auto auto auto;
    }
  }
}
</style>
