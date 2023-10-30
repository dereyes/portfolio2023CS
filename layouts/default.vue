<template>
  <div class="layout">
    <LayoutNavUnderlay v-show="navStore.isOpen"></LayoutNavUnderlay>
    <header class="layout-header">
      <LayoutNavToggle></LayoutNavToggle>
    </header>
    <LayoutNavOverlay v-show="navStore.isOpen"></LayoutNavOverlay>
    <slot></slot>
  </div>
</template>

<script setup>
import { useNavStore } from "@/stores/navStore";
const navStore = useNavStore();
</script>

<style lang="scss">
.layout {
  display: contents;
}

.layout-header {
  grid-column: main-end / window-end;
  grid-row: window-start / header-end;
  position: sticky;
  top: 0;
}
</style>
