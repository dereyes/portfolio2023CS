<template>
  <li autoHeight class="list-highlight-item" ref="scrollRef">
    <slot></slot>
  </li>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getScrollObserver } from "@/composables/getScrollObserver";

const scrollRef = ref({});

const onScroll = ({ progress }) => {
  if (progress == 0) {
    scrollRef.value.classList.remove("list-highlight-item-highlighted");
  }
  if (progress > 0) {
    scrollRef.value.classList.add("list-highlight-item-highlighted");
  }
  if (progress >= 1) {
    scrollRef.value.classList.remove("list-highlight-item-highlighted");
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