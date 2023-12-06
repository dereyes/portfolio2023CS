<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
  transparent: Boolean,
});

const classObject = reactive({
  "panel-slot": true,
  "panel-transparent": props.transparent,
  [props.class]: props.class,
});
</script>

<style lang="scss">
.panel-slot {
  border: 1px solid blue;
}

.panel-slot:not(.panel-transparent) {
  background: color.palette("concrete");
  display: flex;
  flex: 1 0 50%;
  flex-flow: column;
  padding: u(1);
}

.panel-transparent {
  background: transparent;
  flex: 1 1 50%;
}
</style>