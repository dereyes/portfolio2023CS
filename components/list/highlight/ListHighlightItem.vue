<template>
  <li autoHeight :class="classObject" ref="scrollRef">
    <slot></slot>
  </li>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getScrollObserver } from "@/composables/getScrollObserver";

const scrollRef = ref({});

let highlighted = ref(false);
const classObject = reactive({
  "list-highlight-item": true,
  "list-highlight-item-highlighted": highlighted,
});

const onScroll = ({ progress }) => {
  if (progress == 0) {
    highlighted.value = false;
  }
  if (progress > 0) {
    highlighted.value = true;
  }
  if (progress >= 1) {
    highlighted.value = false;
  }
};

onMounted(() => {
  getScrollObserver({
    target: scrollRef.value,
    onScroll: onScroll,
    threshold: .5,
  });
});
</script>

<style lang="scss">
.list-highlight-item {
  align-content: center;
  opacity: 0.1;
  transition: opacity 0.5s ease;

  &.list-highlight-item-highlighted {
    opacity: 1;
  }
}
</style>