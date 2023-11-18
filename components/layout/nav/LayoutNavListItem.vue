<template>
  <li class="layout-nav-list-item" @click="navToggle">
    <NuxtLink :to="href">
      {{ text }}
    </NuxtLink>
  </li>
</template>

<script setup>
import { useNavStore } from "@/stores/navStore";
const navStore = useNavStore();

function navToggle() {
  navStore.toggle();
}

const props = defineProps({
  href: String,
  text: String,
});
</script>

<styles lang="scss" scoped>
.layout-nav-list-item {
  color: white;
  /* font-size: map.get($h1, "font-size"); */
}
</styles>
