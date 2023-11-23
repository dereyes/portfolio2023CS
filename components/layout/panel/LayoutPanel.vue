<template>
  <div :class="classList">
    <div class="layout-panel-sidebar">
      <slot name="sidebar" />
    </div>
    <div class="layout-panel-main">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
});

const classList = props.class ? `layout-panel ${props.class}` : "layout-panel";
</script>

<style lang="scss">
.layout-panel {
  align-content: center;
  // display: flex;
  // flex-flow: column nowrap;
  // // grid-column: 2 / -1;
  // height: max-content;
  // justify-content: center;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: min-content;
  justify-content: center;
  max-width: 40rem;
  min-height: 100vh;
  width: 100%;

  &-sidebar {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
  }

  &-main {
    grid-column: 2 / -1;
    grid-row: 1 / -1;
  }

  @include breakpoint("max-mobile") {
    padding: $layout-panel-padding-mobile;
  }

  @include breakpoint("min-desktop") {
    padding: $layout-panel-padding-desktop;
  }
}
</style>
