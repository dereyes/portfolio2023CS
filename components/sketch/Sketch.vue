<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
});

const classObject = reactive({
  "sketch": true,
  [props.class]: props.class,
});
</script>

<style lang="scss">
.sketch {
  aspect-ratio: 1 / 1;
  width: 100%;
}
</style>