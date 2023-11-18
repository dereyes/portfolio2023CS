<template>
  <main class="layout-main">
    <div class="layout-panel layout-panel-intro">
      <slot class="layout-intro" name="intro" />
    </div>
    <div class="layout-viz">
      <slot class="layout-viz" name="viz" />
    </div>
    <div class="layout-arrow">
      <div class="layout-arrow-inner">↓</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.layout {
  $panel-padding: u(0.5);

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
    padding: $panel-padding;
  }

  &-arrow {
    $arrow-size: u(3);
    $arrow-inner-size: $arrow-size * 1.5;

    $arrow-position-y: math.div($arrow-size, 2);

    display: grid;
    place-items: start end;
    transform: translate(0, $arrow-position-y * -1);

    &-inner {
      background: color.palette("hilite");
      border-radius: $arrow-size / 2;
      color: color.palette("concrete");
      display: grid;
      height: $arrow-size;
      top: $arrow-position-y + $panel-padding;
      place-items: center;
      position: sticky;
      right: $panel-padding;
      width: $arrow-size;
    }
  }

  &-viz {
    border: u(0.25) solid black;
    height: 200vh;
  }

  @include breakpoint("max-mobile") {
    &-panel {
      &-intro {
        min-height: 80vh;
      }
    }

    &-viz {
      grid-column: 1 / -1;
      grid-row: 2 / 3;
    }

    &-arrow {
      grid-column: 1 / -1;
      grid-row: 2 / 3;
    }
  }
}
</style>
