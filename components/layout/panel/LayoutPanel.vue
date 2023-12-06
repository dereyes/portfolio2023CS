<template>
  <div :class="classList" ref="panel">
    <div class="layout-panel-top">
      <slot name="top"></slot>
    </div>
    <slot />
    <div class="layout-panel-bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const props = defineProps({
  class: String,
});

const classList = props.class ? `layout-panel ${props.class}` : "layout-panel";

// Allow parent to access a a reference to this panel
const panel = ref({});
defineExpose({
  panel
});
</script>

<style lang="scss">
.layout-panel {
  background: color.palette("concrete");
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  padding: $layout-panel-padding-phone;
  width: 100%;

  &:not(.layout-panel-fullWidth) {
    max-width: getBreakpoint("max");
  }

  &-top,
  &-bottom {
    display: flex;
    flex-flow: column;
    // flex: 1 0;
  }

  &-bottom {
    justify-content: flex-end;

    > :last-child {
      margin-bottom: 0;
    }
  }

  >* {
    grid-column: 1 / -1;
  }

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
