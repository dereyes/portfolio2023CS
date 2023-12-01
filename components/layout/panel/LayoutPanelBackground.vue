<template>
  <LayoutPanel class="layout-panel-background">
    <template v-slot:top>
      <h2>Cross-Discipline Background</h2>
      <p class="subtitle">Experience across development and design</p>
    </template>
    <template v-slot:bottom>
      <p>
        <strong>Guest Speaker, Design for Social Change</strong><br />
        Hong Kong Polytechnic University, 2016
      </p>

      <p>
        <strong>Bachelor of Arts, Design</strong><br />
        UC Davis, 2016
      </p>

      <p>
        <strong>Innovation Scholar</strong><br />
        AIGA San Francisco, 2016
      </p>
    </template>
  </LayoutPanel>
</template>

<style lang="scss">
.layout-panel-background {
  justify-content: space-around;

  .layout-panel-bottom {
    @include borderTop;
  }
}
</style>
