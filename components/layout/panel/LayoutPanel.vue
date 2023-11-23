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
  justify-content: center;
  min-height: 100vh;
  width: 100%;

  @include breakpoint(("start": null, "end": "medium")) {
    max-width: 24rem;
    padding: $layout-panel-padding-mobile;
  }

  @include breakpoint(("start": "medium", "end": null)) {
    max-width: 60rem;
    padding: $layout-panel-padding-desktop;
  }
}
</style>
