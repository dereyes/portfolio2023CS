<template>
  <LayoutPanel class="layout-panel-background">
    <template v-slot:top>
      <TypographyScalingHeading tag="h2"
        >Development Skills, Design Background</TypographyScalingHeading
      >
    </template>
    <template v-slot:bottom>
      <p>Front-End Web Developer <span class="noWrap">since 2018</span></p>
      <p><strong>Bachelor of Arts, Design</strong><br />UC Davis, 2016</p>
      <p><strong>Innovation Scholar</strong><br />AIGA San Francisco, 2016</p>
    </template>
  </LayoutPanel>
</template>

<style lang="scss">
.layout-panel-background {
  justify-content: space-around;
}
</style>
