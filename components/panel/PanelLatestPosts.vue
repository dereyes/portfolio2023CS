<template>
  <Panel autoHeight>
    <Panel autoHeight class="panel-latestPosts">
      <h2>Latest Posts</h2>
      <div class="panel-latestPosts-carousel">
        <h3>Fluid Typography in SASS</h3>
        <h3>Generating Typescales in SASS</h3>
        <h3>Generating Typescales in SASS</h3>
      </div>
    </Panel>
  </Panel>
</template>

<style lang="scss" scoped>
.panel-latestPosts {
  &-carousel {
    display: flex;
    flex-flow: row;
  }
}
</style>