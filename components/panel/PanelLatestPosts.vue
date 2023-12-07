<template>
  <Panel autoHeight>
    <Panel autoHeight class="panel-latestPosts">
      <h2>Latest Posts</h2>
      <div class="panel-latestPosts-carousel">
        <a class="panel-latestPosts-carousel-item" href="#">
          <p>Fluid Typography in SASS</p>
        </a>
        <a class="panel-latestPosts-carousel-item" href="#">
          <p>Generating Harmonic Typescales in SASS</p>
        </a>
        <a class="panel-latestPosts-carousel-item" href="#">
          <p>"Good design is as little design as possible": Thoughts on Intrinsic Design</p>
        </a>
      </div>
    </Panel>
  </Panel>
</template>

<style lang="scss" scoped>
.panel-latestPosts {
  &-carousel {
    @include responsiveGap;

    display: flex;
    flex-flow: row;

    &-item {
      @include borderTop;

      flex: 1 0;
    }
  }
}
</style>