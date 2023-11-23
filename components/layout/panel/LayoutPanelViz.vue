<template>
  <LayoutPanel class="layout-panel-viz">
    <ClientOnly>
      <Visualization />
    </ClientOnly>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.layout-panel.layout-panel-viz {
  height: 100%;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
}
</style>
