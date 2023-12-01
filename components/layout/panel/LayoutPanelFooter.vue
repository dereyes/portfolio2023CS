<template>
  <LayoutPanel class="layout-panel-footer">
    <template v-slot:top>
      <h2>Get in touch</h2>
      <ul class="layout-panel-footer-links">
        <li>
          <a href="https://linkedin.com/in/dereyesdesign/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/dereyes/" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </template>
    <template v-slot:bottom>
      <p class="subtitle">
        © {{ footerYear }} Darin E. Reyes
      </p>
      <p class="layout-panel-footer-bottom subtitle">
        Designed and built by Darin E. Reyes using
        <span class="noWrap">Vue,</span> Nuxt,
        <span class="noWrap">and p5.js</span>
      </p>
    </template>
  </LayoutPanel>
</template>

<script setup>
const footerYear = new Date().getFullYear();
</script>

<style lang="scss">
.layout-panel-footer {
  justify-content: space-around;

  &-links {
    @include borderTop;
  }
}
</style>
