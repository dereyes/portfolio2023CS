<template>
  <LayoutPanel class="layout-panel-skills">
    <ListHighlight>
      <ListHighlightItem>
        <template v-slot:top>
          <h2>
            Engineering experience meets an eye
            <span class="noWrap">for design</span>
          </h2>
          <p class="subtitle">Bridging UI Design and UX Development</p>
        </template>
        <template v-slot:bottom>
          <ul class="layout-panel-skills-list">
            <li>Pixel-perfect user interface implementation</li>
            <li>Responsiveness, accessibility, and cross-browser solutions</li>
            <li>
              Cross-discipline facilitation across product managers, engineers,
              and designers
            </li>
            <!-- <li>
              Rapid prototypes and tools for design, research,
              <span class="noWrap">and development</span>
            </li> -->
          </ul>
        </template>
      </ListHighlightItem>
      <ListHighlightItem>
        <template v-slot:top>
          <h2>Bringing design thinking to Web Development</h2>
          <p class="subtitle">
            Engineering with Design <span class="noWrap">in Mind</span>
          </p>
        </template>
        <template v-slot:bottom>
          <ul class="layout-panel-skills-list">
            <li>Architecting reusable component libraries</li>
            <li>Translating color and typography design systems into code</li>
          </ul>
        </template>
      </ListHighlightItem>
    </ListHighlight>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.layout-panel-skills {
  &-list {
    @include borderTop;
  }

  // @include breakpoint(("start": "tablet",
  //     "end": "laptop",
  //   )) {
  //   &-heading {
  //     grid-column: 1 / -2;
  //   }

  //   &-list {
  //     grid-column: 3 / -1;
  //   }
  // }

  // @include breakpoint(("start": "laptop",
  //     "end": "desktop",
  //   )) {
  //   &-heading {
  //     grid-column: 1 / 7;
  //   }

  //   &-list {
  //     grid-column: 4 / -1;
  //   }
  // }

  // @include breakpoint(("start": "desktop",
  //     "end": null,
  //   )) {
  //   &-heading {
  //     grid-column: 1 / 7;
  //   }

  //   &-list {
  //     grid-column: 4 / -1;
  //   }
  // }
}
</style>
