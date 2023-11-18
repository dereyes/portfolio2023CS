<template>
  <main class="layout-main">
    <div class="layout-panel layout-panel-intro">
      <slot class="layout-intro" name="intro" />
    </div>
    <div class="layout-viz">
      <slot class="layout-viz" name="viz" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.layout {
  &-main {
    display: grid;
    grid-auto-flow: row;

    // @include breakpoint("desktop") {
    //   grid-template-columns: [window-start] 1fr [center] 1fr [window-end];
    //   grid-template-rows: auto;
    // }
  }

  &-panel {
    display: flex;
    flex-flow: column nowrap;
    padding: u(0.5);
  }

  &-viz {
    border: u(0.25) solid black;
    height: 100vh;
  }

  @include breakpoint("max-mobile") {
    &-panel {
      &-intro {
        min-height: 80vh;
      }
    }
  }
}
</style>
