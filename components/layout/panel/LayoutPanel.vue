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
  display: flex;
  flex-flow: column nowrap;
  grid-column: 2 / -1;
  height: max-content;
  justify-content: center;
  min-height: 100vh;

  @include breakpoint("max-mobile") {
    padding: $layout-panel-padding-mobile;
  }

  @include breakpoint("min-desktop") {
    padding: $layout-panel-padding-desktop;
  }
}
</style>
