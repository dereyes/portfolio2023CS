<template>
  <div class="layout-panel-viz">
    <ClientOnly>
      <Visualization />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.layout-panel-viz {
  display: grid;
  height: 100vh;
  height: 95dvh; // Better on mobile, falls back to vh
  place-items: center;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: -1;
}
</style>
