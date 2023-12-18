<template>
  <div class="pointer-area">
    <div class="pointer-follower-origin" ref="pointerFollowerOrigin" :style="styleObject">
      <div class="pointer-follower"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const pointerSpeed = .1;
const pointerPosition = ref({ x: 0, y: 0 });
const pointerTarget = ref({ x: 0, y: 0 });
const pointerDistance = ref({ x: 0, y: 0 });
const pointerFollowerOrigin = ref();

const styleObject = computed(() => ({
  transform: `translate(${pointerPosition.value.x}px, ${pointerPosition.value.y}px)`,
}));

onMounted(() => {
  const onMousemove = (event) => {
    pointerTarget.value = {
      x: event.x,
      y: event.y,
    }

    pointerDistance.value = {
      x: event.x - pointerPosition.value.x,
      y: event.y - pointerPosition.value.y,
    }

    pointerPosition.value = {
      x: pointerPosition.value.x + (pointerDistance.value.x * pointerSpeed),
      y: pointerPosition.value.y + (pointerDistance.value.y * pointerSpeed),
    }
  }

  document.addEventListener("mousemove", onMousemove);
});
</script>

<style lang="scss" scoped>
.pointer {
  &-area {
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  &-follower {
    $follower-size: u(3);
    $follower-offset: math.div($follower-size, 2);

    aspect-ratio: 1/1;
    border: 10px solid red;
    border-radius: 100%;
    left: -$follower-offset;
    position: absolute;
    top: -$follower-offset;
    width: u(3);

    &-origin {
      height: 0;
      width: 0;
    }
  }
}
</style>