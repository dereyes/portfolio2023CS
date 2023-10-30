<template>
  <button
    @click="navToggle"
    :class="[
      'layout-nav-toggle',
      { 'layout-nav-toggle-isOpen': navStore.isOpen },
    ]"
  >
    <div
      class="layout-nav-toggle-cross-line layout-nav-toggle-cross-line-vertical"
    ></div>
    <div
      class="layout-nav-toggle-cross-line layout-nav-toggle-cross-line-horizontal"
    ></div>
  </button>
</template>

<script setup>
import { useNavStore } from "@/stores/navStore";
const navStore = useNavStore();

function navToggle() {
  navStore.toggle();
}
</script>

<style lang="scss" scoped>
$layout-nav-toggle-size: u(3);
$layout-nav-toggle-cross-line-size: u(1.25);

.layout-nav-toggle {
  @include resetButtonStyles;
  border: $icon-border-width solid black;
  border-radius: math.div($layout-nav-toggle-size, 2);
  display: grid;
  height: $layout-nav-toggle-size;
  margin: u(1);
  place-items: center;
  width: $layout-nav-toggle-size;
}

.layout-nav-toggle-cross-line {
  border-top: $icon-border-width solid black;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  height: 0;
  width: $layout-nav-toggle-cross-line-size;

  &-vertical {
    transform: rotate(90deg);
  }
}

.layout-nav-toggle-isOpen {
  &,
  .layout-nav-toggle-cross-line {
    border-color: white;
  }
}
</style>
