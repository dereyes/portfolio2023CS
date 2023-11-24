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
.scalingHeading-h1 {
  // font-size: clamp(typography.typescale("h1"), 9vw, 5.6rem);
  // font-size: typography.getFluidFontSize(typography.typescale("h1"), 768px, 1080px);
}
</style>
