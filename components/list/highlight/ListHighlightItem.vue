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
    rootMargin: "-33% 0px -33% 0px",
  });
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
  observer.value.disconnect();
});
</script>

<style lang="scss" scoped>
.list-highlight-item {
  display: flex;
  flex-flow: column nowrap;
  margin: 0 0 u(3);
  opacity: 0.15;
  transition: opacity 0.5s ease;

  &.list-highlight-item-highlighted {
    opacity: 1;
  }
}
</style>
