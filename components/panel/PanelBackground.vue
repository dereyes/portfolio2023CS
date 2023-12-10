<template>
  <Panel class="panel-background">
    <div class="panel-background-top">
      <h2>Cross-Discipline Background</h2>
      <p class="subtitle">Experience across development and design</p>
    </div>
    <div class="panel-background-bottom">
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
    </div>
  </Panel>
</template>

<style lang="scss" scoped>
.panel-background {
  justify-content: space-between;

  &-bottom {
    @include borderTop;
  }
}
</style>