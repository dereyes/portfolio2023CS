<template>
  <div class="pointer-area">
    <div class="pointer-follower-origin" ref="pointerFollowerOrigin" :style="styleObject">
      <div class="pointer-follower"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useLayoutStore } from "@/stores/layoutStore";

const layoutStore = useLayoutStore();

const showPointer = ref(false);
const pointerSpeed = .08;
const pointerPosition = ref({ x: -100, y: -100 });
const cursorPosition = ref({ x: 0, y: 0 });

const pointerDistanceToCursor = ref({ x: 0, y: 0, hypotenuse: 0 });
const cursorDistanceToNavToggle = ref({ x: 0, y: 0, hypotenuse: 0 });
const pointerDistanceToNavToggle = ref({ x: 0, y: 0, hypotenuse: 0 });

const pointerFollowerOrigin = ref();

const styleObject = computed(() => ({
  transform: `translate(${pointerPosition.value.x}px, ${pointerPosition.value.y}px)`,
}));

const getDistance = (point = { x: 0, y: 0 }, target = { x: 0, y: 0 }) => {
  const distanceX = target.x - point.x;
  const distanceY = target.y - point.y;
  const distanceHypotenuse = Math.abs(Math.sqrt(
    distanceX * distanceX +
    distanceY * distanceY
  ));

  return {
    x: distanceX,
    y: distanceY,
    hypotenuse: distanceHypotenuse
  }
}

onMounted(() => {
  const updateCursorPosition = (event) => {
    if (!showPointer.value) {
      showPointer.value = true;
    }

    cursorPosition.value = {
      x: event.x,
      y: event.y,
    }
  }

  const updatePointerPosition = () => {
    pointerDistanceToCursor.value = getDistance(
      pointerPosition.value,
      cursorPosition.value
    );
    cursorDistanceToNavToggle.value = getDistance(
      cursorPosition.value,
      layoutStore.navToggleCenterCoordinates
    );
    pointerDistanceToNavToggle.value = getDistance(
      pointerPosition.value,
      layoutStore.navToggleCenterCoordinates
    );

    if (cursorDistanceToNavToggle.value.hypotenuse < 100) {
      pointerPosition.value = {
        x: pointerPosition.value.x + (pointerDistanceToNavToggle.value.x * pointerSpeed),
        y: pointerPosition.value.y + (pointerDistanceToNavToggle.value.y * pointerSpeed),
      }
    } else {
      pointerPosition.value = {
        x: pointerPosition.value.x + (pointerDistanceToCursor.value.x * pointerSpeed),
        y: pointerPosition.value.y + (pointerDistanceToCursor.value.y * pointerSpeed),
      }
    }

    window.requestAnimationFrame(updatePointerPosition);
  }

  document.addEventListener("mousemove", updateCursorPosition);
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
    $follower-size: u(5);
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