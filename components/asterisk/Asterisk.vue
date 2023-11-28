<template>
  <div class="asterisk">
    <div class="asterisk-character" :style="styleObject">
      <svg width="100%" height="100%" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <path
          d="M0.07,23.233l0,-4.6l8.8,0l6.8,0.7l0.5,-1l-5.4,-4.3l-6.2,-6.2l3.2,-3.2l6.2,6.2l4.3,5.4l1,-0.5l-0.7,-6.8l0,-8.8l4.6,0l0,8.8l-0.7,6.8l1,0.5l4.3,-5.4l6.2,-6.2l3.2,3.2l-6.2,6.2l-5.4,4.3l0.5,1l6.8,-0.7l8.8,0l0,4.6l-8.8,0l-6.8,-0.7l-0.5,1l5.4,4.3l6.2,6.2l-3.2,3.2l-6.2,-6.2l-4.3,-5.4l-1,0.5l0.7,6.8l0,8.8l-4.6,0l0,-8.8l0.7,-6.8l-1,-0.5l-4.3,5.4l-6.2,6.2l-3.2,-3.2l6.2,-6.2l5.4,-4.3l-0.5,-1l-6.8,0.7l-8.8,0Z" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const setRotation = (rotationPosition, timeStamp, scrollY) => {
  rotationPosition.value = (scrollY * .01) + (timeStamp * .00125) % 360;
}

const rotationPosition = ref(0);

const styleObject = computed(() => ({
  transform: `rotate(${rotationPosition.value}deg)`
}));

onMounted(() => {
  const animate = (timeStamp) => {
    setRotation(rotationPosition, timeStamp, window.scrollY);
    requestAnimationFrame((t) => animate(t));
  }

  window.requestAnimationFrame(animate);
});
</script>


<style lang="scss" scoped>
.asterisk {
  position: fixed;
  top: $layout-panel-padding-phone;
  right: $layout-panel-padding-phone;
  z-index: -2;

  &-character {
    $asterisk-character-size: clamp(180px, 50vw, 360px);

    display: block;
    height: $asterisk-character-size;
    width: $asterisk-character-size;
  }

  svg {
    fill: hsl(72, 100%, 41%);
  }
}
</style>