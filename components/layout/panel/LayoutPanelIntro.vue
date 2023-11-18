<template>
  <LayoutPanel class="layout-panel-intro">
    <h1>Darin E. Reyes is a Front-End Web Developer</h1>
    <p>
      Currently based in
      <span class="noWrap">Mountain View,</span> California
    </p>
  </LayoutPanel>
</template>

<style lang="scss">
  @include breakpoint("max-mobile") {
    .layout-panel-intro {
    min-height: 85vh;
    }
  }
</style>
