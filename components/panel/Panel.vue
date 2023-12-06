<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
  column: Boolean,
  row: Boolean,
});

// const classList = props.class ? `layout-panel ${props.class}` : "layout-panel";

const classObject = reactive({
  "panel": true,
  "panel-row": !props.column || props.row,
  "panel-column": props.column && !props.row,
});
</script>

<style lang="scss">
.panel {
  border: 1px solid red;
  display: grid;
  // display: flex;
  min-height: 100vh;
  width: 100%;

  &-column {
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
  }
}
</style>
