<template>
  <LayoutPanel class="layout-panel-intro">
    <template v-slot:top>
      <h1 class="layout-panel-intro-heading">
        Darin E. Reyes, Front-End Web Developer
      </h1>
    </template>
    <template v-slot:bottom>
      <div class="layout-panel-intro-footer">
        <div class="layout-panel-intro-footer-left">
          <p>Specializing in UX Engineering</p>
          <p>
            Based in
            <span class="noWrap">Mountain View,</span> California
          </p>
        </div>
        <div class="layout-panel-intro-footer-right">
          <TypographyArrow />
        </div>
      </div>
    </template>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.layout-panel-intro {
  justify-content: space-around;

  &-footer {
    align-items: end;
    display: flex;
    flex-flow: row;
    gap: typography.fluidTypescale("tablet", "h2");
    justify-content: space-between;

    &-left :last-child {
      margin: 0;
    }
  }

  &-heading {
    max-width: 20ch;
  }
}
</style>
