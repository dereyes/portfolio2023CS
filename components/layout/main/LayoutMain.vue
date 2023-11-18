<template>
  <main class="layout-main">
    <div class="layout-panel layout-panel-intro">
      <slot name="intro" />
    </div>
    <div class="layout-arrow">
      <div class="layout-arrow-inner">
        <span class="layout-arrow-character">↓</span>
      </div>
    </div>
    <LayoutPanelViz />
    <div class="layout-panel layout-panel-skills">
      <slot name="skills" />
    </div>
  </main>
</template>

<style lang="scss">
.layout {
  $panel-padding: u(0.5);

  &-main {
    display: grid;
    grid-auto-flow: row;
    height: 100vh;
    overflow-y: scroll;
    position: relative;
    scroll-snap-type: y mandatory;
    width: 100vw;

    // @include breakpoint("desktop") {
    //   grid-template-columns: [window-start] 1fr [center] 1fr [window-end];
    //   grid-template-rows: auto;
    // }
  }

  &-panel {
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    padding: $panel-padding;
    scroll-snap-align: start;
  }

  &-arrow {
    $arrow-size: u(3);
    $arrow-inner-size: $arrow-size * 1.5;

    $arrow-position-y: math.div($arrow-size, 2);

    position: sticky;
    top: $arrow-position-y + $panel-padding;
    transform: translate(0, $arrow-position-y * -2);

    &-inner {
      background: color.palette("hilite");
      border-radius: math.div($arrow-size, 2);
      color: color.palette("concrete");
      display: grid;
      height: $arrow-size;
      top: $arrow-position-y + $panel-padding;
      place-items: center;
      position: absolute;
      right: $panel-padding;
      width: $arrow-size;
    }

    &-character {
      font-family: typography.fontFamily("sansSerif");
    }
  }

  @include breakpoint("max-mobile") {
    &-panel {
      &-intro {
        min-height: 80vh;
      }
    }

    // &-arrow {
    //   grid-column: 1 / -1;
    //   grid-row: 2 / 3;
    // }
  }
}
</style>
