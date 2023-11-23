<template>
  <LayoutPanel class="layout-panel-viz">
    <ClientOnly>
      <Visualization />
    </ClientOnly>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.layout-panel.layout-panel-viz {
      display: flex;
    justify-content: center;
  padding: 0;
  position: fixed;
  top: 0;
  z-index: -1;
}
</style>
