<template>
  <button
    @click="navToggle"
    :class="['navToggle', { 'navToggle-isOpen': navStore.isOpen }]"
  >
    <div class="navToggle-cross-line navToggle-cross-line-vertical"></div>
    <div class="navToggle-cross-line navToggle-cross-line-horizontal"></div>
  </button>
</template>

<script setup>
import { useNavStore } from "@/stores/navStore";
const navStore = useNavStore();

function navToggle() {
  navStore.toggle();
}
</script>
