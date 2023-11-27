<template>
  <LayoutPanel class="layout-panel-skills">
    <ListHighlight>
      <ListHighlightItem>
        <h2 class="layout-panel-skills-heading">
          UX Engineering
        </h2>
        <p class="subtitle">A partner in UX Design & Research</p>
        <ul class="layout-panel-skills-list">
          <li>Developing rapid prototypes and tools for design, research, and development</li>
          <li>
            Bridging Engineering, Product, and
            <span class="noWrap">Design teams</span>
          </li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h2 class="layout-panel-skills-heading">
          Design Implementation
        </h2>
        <p class="subtitle">Engineering with Design in Mind</p>
        <ul class="layout-panel-skills-list">
          <li>Pixel-perfect mockup implementation</li>
          <li>Responsive, accessible websites and web apps</li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h2 class="layout-panel-skills-heading">
          Design Systems
        </h2>
        <p class="subtitle">Bringing Design Systems to Life</p>
        <ul class="layout-panel-skills-list">
          <li>Color, typography, and branding system implementation</li>
          <li>
            Building and maintaining design token-based
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

  @include breakpoint(("start": "tablet",
      "end": "laptop",
    )) {
    &-heading {
      grid-column: 1 / -2;
    }

    &-list {
      grid-column: 3 / -1;
    }
  }

  @include breakpoint(("start": "laptop",
      "end": "desktop",
    )) {
    &-heading {
      grid-column: 1 / 7;
    }

    &-list {
      grid-column: 4 / -1;
    }
  }

  @include breakpoint(("start": "desktop",
      "end": null,
    )) {
    &-heading {
      grid-column: 1 / 6;
    }

    &-list {
      grid-column: 4 / -1;
    }
  }
}
</style>
