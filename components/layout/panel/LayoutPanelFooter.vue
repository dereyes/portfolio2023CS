<template>
  <LayoutPanel class="layout-panel-footer">
    <template v-slot:top>
      <h2>Get in touch</h2>
      <ul>
        <li>
          <a href="http://linkedin.com/in/dereyesdesign/" target="_blank">
            LinkedIn
          </a>
        </li>
      </ul>
    </template>
    <template v-slot:bottom>
      <p>
        <small> © {{ footerYear }} Darin E. Reyes </small>
      </p>
      <p class="layout-panel-footer-bottom">
        <small>
          Designed and built by Darin E. Reyes using
          <span class="noWrap">Vue,</span> Nuxt,
          <span class="noWrap">and p5.js</span>
        </small>
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
}
</style>
