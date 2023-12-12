<template>
  <div class="gradientBackground">
    <div class="noise"></div>
  </div>
</template>

<style lang="scss">
.gradientBackground {
  @include gradient;

  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: -1;
}
</style>
