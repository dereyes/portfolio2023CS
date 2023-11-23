<template>
  <LayoutPanel class="layout-panel-intro">
    <TypographyScalingHeading tag="h1">
      Darin E. Reyes, Front-End Web Developer
    </TypographyScalingHeading>
    <div class="layout-panel-intro-description">
      <p>Specializing in UX Engineering</p>
      <p>
        Based in
        <span class="noWrap">Mountain View,</span> California
      </p>
    </div>
  </LayoutPanel>
</template>

<style lang="scss">
.layout-panel-intro-description {
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
