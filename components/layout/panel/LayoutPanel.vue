<template>
  <div :class="classList">
    <slot />
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
  // grid-template-columns: 1fr;
  justify-content: center;
  min-height: 100vh;
  width: 100%;

  @include breakpoint("max-mobile") {
    // grid-template-columns: 1fr;
    max-width: 24rem;
    padding: $layout-panel-padding-mobile;

    &-sidebar {
      display: none;
    }
  }

  @include breakpoint("min-desktop") {
    // grid-template-columns: 1fr 3fr;
    max-width: 32rem;
    padding: $layout-panel-padding-desktop;
  }
}
</style>
