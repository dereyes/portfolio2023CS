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
  display: grid;
  grid-auto-rows: min-content;
  justify-content: center;
  min-height: 100vh;
  width: 100%;

  @include breakpoint("max-mobile") {
    grid-template-columns: 1fr;
    max-width: 24rem;
    padding: $layout-panel-padding-mobile;

    &-sidebar {
      display: none;
    }
  }

  @include breakpoint("min-desktop") {
    grid-template-columns: 1fr 3fr;
    max-width: 40rem;
    padding: $layout-panel-padding-desktop;

    &-sidebar {
      grid-column: 1 / 2;
      grid-row: 1 / -1;
    }

    &-main {
      grid-column: 2 / -1;
      grid-row: 1 / -1;
    }
  }
}
</style>
