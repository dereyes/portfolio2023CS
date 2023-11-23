<template>
  <LayoutPanel class="layout-panel-footer">
    <TypographyScalingHeading tag="h2">Get in touch</TypographyScalingHeading>
    <ul>
      <li>
        <a href="http://linkedin.com/in/dereyesdesign/" target="_blank">
          LinkedIn
        </a>
      </li>
    </ul>
    <p>
      <small> © {{ footerYear }} Darin E. Reyes </small>
    </p>
    <p>
      <small>
        Designed and built by Darin E. Reyes using
        <span class="noWrap">Vue.js,</span> Nuxt,
        <span class="noWrap">and p5.js</span>
      </small>
    </p>
  </LayoutPanel>
</template>

<script setup>
const footerYear = new Date().getFullYear();
</script>

<style lang="scss">
.layout-panel-footer {
  margin: 0;

  @include breakpoint(
    (
      "start": "medium",
      "end": null,
    )
  ) {
    > * {
      grid-column: 2 / -2;
    }
  }
}
</style>
