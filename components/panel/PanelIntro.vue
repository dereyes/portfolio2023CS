<template>
  <Panel class="panel-intro-top" id="intro">
    <h1>
      Darin E. Reyes, Front-End Web Developer
    </h1>
    <p>Specializing in UX Engineering and <span class="noWrap">Design Systems</span></p>
    <p>
      Based in
      <span class="noWrap">Mountain View,</span> California
    </p>
  </Panel>
</template>

<style lang="scss" scoped>
.panel-intro {
  &-top {
    justify-content: flex-end;

    > :last-child {
      margin: 0;
    }
  }
}
</style>