<template>
  <div class="pointer-area">
    <div class="pointer-follower-origin" ref="pointerFollowerOrigin" :style="styleObject">
      <div class="pointer-follower"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const showPointer = ref(false);
const pointerSpeed = .08;
const pointerPosition = ref({ x: -100, y: -100 });
const pointerTarget = ref({ x: 0, y: 0 });
const pointerDistance = ref({ x: 0, y: 0 });
const pointerFollowerOrigin = ref();

const styleObject = computed(() => ({
  transform: `translate(${pointerPosition.value.x}px, ${pointerPosition.value.y}px)`,
}));

onMounted(() => {
  const updatePointerTarget = (event) => {
    if (!showPointer.value) {
      showPointer.value = true;
    }

    pointerTarget.value = {
      x: event.x,
      y: event.y,
    }
  }

  const updatePointerPosition = (timeStamp) => {
    if (!showPointer.value) {
      return;
    }

    pointerDistance.value = {
      x: pointerTarget.value.x - pointerPosition.value.x,
      y: pointerTarget.value.y - pointerPosition.value.y,
    }

    pointerPosition.value = {
      x: pointerPosition.value.x + (pointerDistance.value.x * pointerSpeed),
      y: pointerPosition.value.y + (pointerDistance.value.y * pointerSpeed),
    }

    window.requestAnimationFrame(updatePointerPosition);
  }

  document.addEventListener("mousemove", updatePointerTarget);
  window.requestAnimationFrame(updatePointerPosition);
});
</script>

<style lang="scss" scoped>
.pointer {
  &-area {
    height: 100%;
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  &-follower {
    $follower-size: u(4);
    $follower-offset: math.div($follower-size, 2);

    aspect-ratio: 1/1;
    background: color.palette("hilite");
    border-radius: 100%;
    left: -$follower-offset;
    position: absolute;
    top: -$follower-offset;
    width: $follower-size;

    &-origin {
      height: 0;
      width: 0;
    }
  }
}
</style>