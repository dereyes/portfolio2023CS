<template>
  <li class="cards-list-item">
    <NuxtLink :to="href">
      {{ title }}
    </NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  href: String,
});
</script>
