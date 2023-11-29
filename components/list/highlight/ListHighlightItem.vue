<template>
  <li class="list-highlight-item" ref="scrollRef">
    <div class="list-highlight-item-top">
      <slot name="top"></slot>
    </div>
    <slot />
    <div class="list-highlight-item-bottom">
      <slot name="bottom"></slot>
    </div>
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
  align-content: space-around;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: min-content;
  margin: 0;
  opacity: 0.1;
  transition: opacity 0.5s ease;

  &.list-highlight-item-highlighted {
    color: color.palette("ink");
    opacity: 1;
  }

  @include breakpoint(("start": "min", "end": "laptop")) {
    min-height: 100vh;

    &-top {
      grid-column: 1 / -1;
    }

    &-bottom {
      grid-column: 1 / -1;
    }
  }

  // @include breakpoint(("start": "tablet", "end": "laptop")) {
  //   &-top {
  //     grid-column: 1 / -1;
  //   }

  //   &-bottom {
  //     grid-column: 1 / -1;
  //   }
  // }

  @include breakpoint(("start": "laptop", "end": "desktop")) {
    &-top {
      grid-column: 1 / 7;
    }

    &-bottom {
      grid-column: 4 / -1;
    }
  }

  @include breakpoint(("start": "desktop", "end": null)) {
    &-top {
      grid-column: 1 / 7;
    }

    &-bottom {
      grid-column: 4 / -1;
    }
  }
}
</style>
