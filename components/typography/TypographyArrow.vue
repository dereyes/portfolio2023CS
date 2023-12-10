<template>
  <div class="arrow" :style="{ opacity: arrowOpacity }">↓</div>
</template>

<script setup>
import { onMounted, nextTick, ref } from "vue";
let arrowOpacity = ref(1);

const setArrowOpacity = () => {
  arrowOpacity.value = Math.max(
    1 - window.scrollY / (window.outerHeight * 0.25),
    0,
  );
};

onMounted(() => {
  nextTick(() => {
    window.addEventListener("scroll", setArrowOpacity);
  });
});
</script>

<style lang="scss" scoped>
.arrow {
  color: color.palette("ink");
  // font-family: typography.fontFamily("monospace");
  font-size: typography.fluidTypescale("tablet", "h2");
  font-weight: typography.fontWeight("light");
  line-height: 0.8;
  position: sticky;
  top: 0;

  @include breakpoint(("start": "laptop",
      "end": null,
    )) {
    font-size: typography.fluidTypescale("desktop", "h2");
  }
}
</style>
