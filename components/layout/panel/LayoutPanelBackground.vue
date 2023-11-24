<template>
  <LayoutPanel class="layout-panel-background">
    <TypographyScalingHeading tag="h2"
      >Development Skills, Design Background</TypographyScalingHeading
    >
    <div class="layout-panel-background-description">
      <p>Front-End Web Developer <span class="noWrap">since 2018</span></p>
      <p><strong>Bachelor of Arts, Design</strong><br />UC Davis, 2016</p>
      <p><strong>Innovation Scholar</strong><br />AIGA San Francisco, 2016</p>
    </div>
  </LayoutPanel>
</template>

<style lang="scss">
.layout-panel-background-description {
  @include breakpoint(
    (
      "start": "medium",
      "end": null,
    )
  ) {
    grid-column: 4 / -1;
  }
}
</style>
