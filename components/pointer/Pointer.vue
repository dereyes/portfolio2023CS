<template>
  <div class="pointer-area" ref="pointerArea">
    <div class="pointer-follower" ref="pointerFollower" :style="styleObject"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const pointerArea = ref();
const pointerFollower = ref();
const pointerPosition = ref({ x: 0, y: 0 });

const styleObject = computed(() => ({
  transform: `translate(${pointerPosition.value.x}px, ${pointerPosition.value.y}px)`,
}));

onMounted(() => {
  const onMousemove = (event) => {
    console.log(event);
    pointerPosition.value = {
      x: event.x,
      y: event.y
    }
  }

  document.addEventListener("mousemove", onMousemove);
});
</script>

<style lang="scss" scoped>
.pointer {
  &-area {
    border: 1px solid red;
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
  }
}
</style>