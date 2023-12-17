<template>
  <Panel autoHeight id="posts">
    <h2>Latest Posts</h2>
    <ul class="panel-latestPosts-list">
      <li class="panel-latestPosts-list-item">
        <!-- <SketchHarmonicTypescales /> -->
        <TypographyLink text="Generating Harmonic Typescales in SASS" href="#" />
      </li>
      <li class="panel-latestPosts-list-item">
        <!-- <SketchFlexboxReadable /> -->
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
    margin: 0;

    &-item {
      @include borderTop;
    }

    @include breakpoint(("start": null,
        "end": "desktop",
      )) {
      grid-template-columns: 1fr;
    }

    @include breakpoint(("start": "desktop",
        "end": null,
      )) {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>