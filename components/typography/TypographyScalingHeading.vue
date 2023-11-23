<template>
  <component :is="tag" :class="classList">
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  tag: String,
});

const classList = `scalingHeading scalingHeading-${props.tag}`;
</script>

<style lang="scss" scoped>
.scalingHeading {
  &-h1 {
    font-size: clamp(typography.typescale("h1"), 13vw, 5rem);
  }
}
</style>
