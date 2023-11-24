<template>
  <LayoutPanel class="layout-panel-skills">
    <ListHighlight>
      <ListHighlightItem>
        <h2 class="layout-panel-skills-heading">
          Engineering + Design Thinking
        </h2>
        <ul class="layout-panel-skills-list">
          <li>
            Pixel-perfect design implementation
          </li>
          <li>Responsive, accessible UI components in modern JavaScript frameworks</li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h2 class="layout-panel-skills-heading">
          A partner in UX Design <span class="noWrap">& Research</span>
        </h2>
        <ul class="layout-panel-skills-list">
          <li>Rapid prototyping and interactive mockups in <span class="noWrap">the browser</span></li>
          <li>
            Bridging Engineering, Product, and
            <span class="noWrap">Design teams</span>
          </li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h2 class="layout-panel-skills-heading">
          Bringing Design Systems <span class="noWrap">to Life</span>
        </h2>
        <ul class="layout-panel-skills-list">
          <li>
            Intuitive color and typography systems in CSS
            <span class="noWrap">+ SCSS</span>
          </li>
          <li>
            Building, maintaining, and documenting component libraries
            <span class="noWrap">in Storybook.js</span>
          </li>
        </ul>
      </ListHighlightItem>
    </ListHighlight>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.layout-panel-skills {
  @include breakpoint(
    (
      "start": "tablet",
      "end": "laptop",
    )
  ) {
    &-heading {
      grid-column: 1 / -1;
    }

    &-list {
      grid-column: 3 / -1;
    }
  }

  @include breakpoint(
    (
      "start": "laptop",
      "end": "desktop",
    )
  ) {
    &-heading {
      grid-column: 1 / 5;
    }

    &-list {
      grid-column: 3 / -1;
    }
  }

  @include breakpoint(
    (
      "start": "desktop",
      "end": null,
    )
  ) {
    &-heading {
      grid-column: 1 / 6;
    }

    &-list {
      grid-column: 5 / -1;
    }
  }
}
</style>
