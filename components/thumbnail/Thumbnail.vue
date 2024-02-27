<template>
  <a class="thumbnail" :href="link" target="_blank">
    <img :src="source" width="300" height="150" :alt="alt">
  </a>
</template>

<script setup>
const props = defineProps({
  alt: String,
  link: String,
  source: String,
});
</script>

<style lang="scss" scoped>
.thumbnail {
  filter: grayscale(100%);
  transition: filter 0.25s ease;

  &:hover {
    filter: grayscale(0%);
  }
}
</style>