<template>
  <li class="list-highlight-item" ref="scrollRef">
    <slot />
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
  align-items: center;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: min-content;
  margin: 0 0 u(3);
  opacity: 0.1;
  transition: opacity 0.5s ease;

  >* {
    grid-column: 1 / -1;
  }

  &.list-highlight-item-highlighted {
    color: color.palette("ink");
    opacity: 1;
  }
}
</style>
