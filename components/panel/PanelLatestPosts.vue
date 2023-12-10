<template>
  <Panel autoHeight>
    <h2>Latest Posts</h2>
    <ul class="panel-latestPosts-list">
      <li class="panel-latestPosts-list-item">
        <TypographyLink text="Generating Harmonic Typescales in SASS" href="#" />
      </li>
      <li class="panel-latestPosts-list-item">
        <TypographyLink text="Making text readable on images with CSS Flexbox" href="#" />
      </li>
    </ul>
  </Panel>
</template>

<style lang="scss" scoped>
.panel-latestPosts {
  &-list {
    @include responsiveGap;

    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;
    margin: 0;

    &-item {
      @include borderTop;

      padding: 0 0 u(3);
    }
  }
}
</style>