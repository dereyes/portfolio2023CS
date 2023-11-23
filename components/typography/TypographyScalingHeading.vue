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
@include breakpoint(
  (
    "start": "medium",
    "end": null,
  )
) {
  .scalingHeading-h1 {
    font-size: clamp(typography.typescale("h1"), 9vw, 5.7rem);
  }

  .scalingHeading-h2 {
    font-size: clamp(typography.typescale("h2"), 8.5vw, 5rem);
  }
}
</style>
