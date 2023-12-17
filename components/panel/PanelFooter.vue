<template>
  <Panel class="panel-footer" id="contact">
    <div class="panel-footer-top">
      <h2>Get in touch</h2>
      <ul class="panel-footer-links">
        <li>
          <TypographyLink text="LinkedIn" href="https://linkedin.com/in/dereyesdesign/" opensInNewWindow />
        </li>
        <li>
          <TypographyLink text="GitHub" href="https://github.com/dereyes/" opensInNewWindow />
        </li>
      </ul>

    </div>
    <div class="panel-footer-bottom">
      <p class="subtitle">
        © {{ footerYear }} Darin E. Reyes
      </p>
      <p class="subtitle">
        Designed and built by Darin E. Reyes using
        <span class="noWrap">Vue,</span> Nuxt,
        <span class="noWrap">and p5.js</span>
      </p>

    </div>
  </Panel>
</template>

<script setup>
const footerYear = new Date().getFullYear();
</script>

<style lang="scss">
.panel-footer {
  justify-content: space-between;

  &-links {
    @include borderTop;
  }

  &-bottom {
    :last-child {
      margin-bottom: 0;
    }
  }
}
</style>
