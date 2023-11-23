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
@include breakpoint("min-desktop") {
  .scalingHeading-h1 {
    font-size: clamp(typography.typescale("h1"), 13vw, 4rem);
  }
}
</style>
