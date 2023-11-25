<template>
  <li class="list-highlight-item" ref="scrollRef">
    <slot />
  </li>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { onIntersect } from "@/composables/onIntersect";

const observer = ref({});
const scrollRef = ref({});

const onEnter = () => {
  scrollRef.value.classList.add("list-highlight-item-highlighted");
};

const onExit = () => {
  scrollRef.value.classList.remove("list-highlight-item-highlighted");
};

onMounted(() => {
  observer.value = onIntersect(scrollRef.value, onEnter, onExit, false, {
    threshold: 0.5,
    rootMargin: "-25% 0px -25% 0px",
  });
});

onUnmounted(() => {
  observer.value.disconnect();
});
</script>

<style lang="scss">
.list-highlight-item {
  align-items: center;
  border-top: 1px solid color.palette("black");
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: min-content;
  margin: 0 0 u(3);
  opacity: 0.1;
  transition: opacity 0.5s ease;

  > * {
    grid-column: 1 / -1;
  }

  &.list-highlight-item-highlighted {
    color: color.palette("black");
    opacity: 1;
  }
}
</style>
