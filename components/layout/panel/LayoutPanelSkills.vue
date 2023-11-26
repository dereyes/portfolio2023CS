<template>
  <LayoutPanel class="layout-panel-skills">
    <ListHighlight>
      <ListHighlightItem>
        <h2 class="layout-panel-skills-heading">
          Engineering with Design <span class="noWrap">in Mind</span>
        </h2>
        <ul class="layout-panel-skills-list">
          <li>Pixel-perfect design implementation</li>
          <li>Responsive, accessible UI components</li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h2 class="layout-panel-skills-heading">
          A partner in UX Design <span class="noWrap">& Research</span>
        </h2>
        <ul class="layout-panel-skills-list">
          <li>Rapid prototyping and interactive mockups</li>
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
          <li>Color and typography system implementation</li>
          <li>
            Building and maintaining UI
            <span class="noWrap">component libraries</span>
          </li>
        </ul>
      </ListHighlightItem>
    </ListHighlight>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.layout-panel-skills {
  > :first-child {
    border-top: none;
  }

  @include breakpoint(
    (
      "start": "tablet",
      "end": "laptop",
    )
  ) {
    &-heading {
      grid-column: 1 / -2;
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
