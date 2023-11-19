<template>
  <LayoutPanel class="layout-panel-intro">
    <h1>Darin E. Reyes is a Front-End Web Developer</h1>
    <p class="layout-panel-intro-text">
      Currently based in
      <span class="noWrap">Mountain View,</span> California
    </p>
  </LayoutPanel>
</template>

<style lang="scss">
.layout-panel-intro-text {
  margin: 0;
}

@include breakpoint("max-mobile") {
  .layout-panel.layout-panel-intro {
    min-height: $layout-panel-intro-height;
  }
}
</style>
