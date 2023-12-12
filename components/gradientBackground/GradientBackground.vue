<template>
  <div class="gradientBackground">
    <div class="noise"></div>
  </div>
</template>

<style lang="scss">
.gradientBackground {
  width: 100vw;
  height: 100vh;

  position: fixed;
  z-index: -1;

  animation: gradient 10s ease infinite;
  background: linear-gradient(45deg, #000, hsl(0, 0%, 25%));
  background-size: 400% 400%;

  .noise {
    width: 100%;
    height: 100%;

    background:
      // linear-gradient(to right, blue, transparent),
      url(https://grainy-gradients.vercel.app/noise.svg);
    filter: contrast(170%) brightness(10%);
  }

}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
