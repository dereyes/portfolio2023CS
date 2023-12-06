<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  autoHeight: Boolean,
  class: String,
  column: Boolean,
  gaps: Boolean,
  row: Boolean,
  transparent: Boolean,
});

const classObject = reactive({
  "panel": true,
  "panel-autoHeight": props.autoHeight,
  "panel-column": props.column || !props.row, // Default
  "panel-gaps": props.gaps,
  "panel-row": props.row && !props.column,
  "panel-transparent": props.transparent,
  [props.class]: props.class,
});
</script>

<style lang="scss">
.panel {
  align-content: start;
  // border: 1px solid red;
  display: grid;
  min-height: 0px;
  width: 100%;

  &.panel-autoHeight {
    min-height: 0px;
  }

  &:not(.panel-autoHeight) {
    min-height: 100vh;
  }

  &.panel-gaps {
    gap: u(5) $layout-panel-padding-desktop;
  }

  >.panel {
    &:not(.panel-transparent) {
      background: color.palette("concrete");
    }

    &-column {
      grid-auto-rows: auto;
    }
  }

  &-column {
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
  }

  &-row {
    align-content: stretch;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
}

.panel:not(.panel-gaps) {
  >.panel {

    @include breakpoint(("start": null,
        "end": "tablet",
      )) {
      padding: $layout-panel-padding-tablet;
    }

    @include breakpoint(("start": "tablet",
        "end": null,
      )) {
      padding: $layout-panel-padding-desktop;
    }
  }
}
</style>
