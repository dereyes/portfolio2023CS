<template>
  <LayoutPanel class="layout-panel-footer">
    <div class="layout-panel-footer-top">
      <h2>Get in touch</h2>
      <p>
        <a href="http://linkedin.com/in/dereyesdesign/" target="_blank">
          LinkedIn
        </a>
      </p>
    </div>
    <div class="layout-panel-footer-bottom">
      <p class="layout-panel-footer-bottom-footnote">
        <small>
          Designed and developed by Darin E. Reyes using Nuxt
          <span class="noWrap">and Vue.js</span>
        </small>
      </p>
    </div>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.layout-panel-footer {
  &-top {
    flex: 1 0;
  }

  &-bottom-footnote {
    margin: 0;
  }
}
</style>
