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
  background: color.palette("concrete");
  flex-flow: column nowrap;
  height: max-content;
  min-height: 100vh;
  padding: $layout-panel-padding-y $layout-panel-padding-x;
}
</style>
