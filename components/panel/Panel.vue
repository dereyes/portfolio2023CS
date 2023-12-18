<template>
  <div :class="classObject" :id="id" ref="panel">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const props = defineProps({
  autoHeight: Boolean,
  class: String,
  column: Boolean,
  gaps: Boolean,
  id: String,
  row: Boolean,
  // span: Number,
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

// const styleObject = reactive({
//   "grid-template-columns": `span ${props.span}`
// });

// Allow parent to access a a reference to this panel
const panel = ref({});
defineExpose({
  panel
});
</script>

<style lang="scss">
.panel {
  min-height: 0px;
  width: 100%;

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
    display: flex;
    flex-flow: column;
  }

  &-row {
    @include responsiveGap;

    display: grid;
    grid-auto-flow: column;
  }
}

.panel {

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
</style>
