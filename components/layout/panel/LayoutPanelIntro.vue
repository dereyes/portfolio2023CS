<template>
  <LayoutPanel class="layout-panel-intro">
    <TypographyScalingHeading tag="h1">
      Darin E. Reyes, Front-End Web Developer
    </TypographyScalingHeading>
    <div class="layout-panel-description">
      <p>Specializing in UX Engineering</p>
      <p>
        Based in
        <span class="noWrap">Mountain View,</span> California
      </p>
    </div>
  </LayoutPanel>
</template>

<style lang="scss">
.layout-panel-intro-text {
  margin: 0;
}

@include breakpoint(
  (
    "start": "medium",
    "end": "large",
  )
) {
  .layout-panel-description {
    grid-column: 3 / -1;
  }
}

@include breakpoint(
  (
    "start": "large",
    "end": null,
  )
) {
  .layout-panel-description {
    grid-column: 4 / -1;
  }
}
</style>
