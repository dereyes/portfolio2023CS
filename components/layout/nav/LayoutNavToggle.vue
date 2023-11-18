<template>
  <button
    @click="navToggle"
    :class="[
      'layout-nav-toggle',
      { 'layout-nav-toggle-isOpen': navStore.isOpen },
    ]"
  >
    <div class="layout-nav-toggle-cross">+</div>
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
$layout-nav-toggle-border-width: 7px;

.layout-nav-toggle {
  @include unstyle.button;
  border: $layout-nav-toggle-border-width solid black;
  border-radius: math.div($layout-nav-toggle-size, 2);
  display: grid;
  height: $layout-nav-toggle-size;
  margin: u(1);
  place-items: center;
  width: $layout-nav-toggle-size;
}

.layout-nav-toggle-cross {
  font-size: u(2.25);
  line-height: 0.9em;
  font-weight: 600;
}

.layout-nav-toggle-isOpen {
  &,
  .layout-nav-toggle-cross {
    border-color: white;
    color: white;
  }
}
</style>
