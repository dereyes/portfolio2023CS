<template>
  <LayoutPanel class="layout-panel-skills">
    <ListHighlight>
      <ListHighlightItem>
        <template v-slot:top>
          <h2>UX Engineering</h2>
          <p class="subtitle">A partner in UX Design & Research</p>
        </template>
        <template v-slot:bottom>
          <ul class="layout-panel-skills-list">
            <li>
              Bridging Engineering, Product, and
              <span class="noWrap">Design teams</span>
            </li>
            <li>
              Rapid prototypes and tools for design, research, <span class="noWrap">and
                development</span>
            </li>
          </ul>
        </template>
      </ListHighlightItem>
      <ListHighlightItem>
        <template v-slot:top>
          <h2>
            Front-End Web Development
          </h2>
          <p class="subtitle">Engineering with Design <span class="noWrap">in Mind</span></p>
        </template>
        <template v-slot:bottom>
          <ul class="layout-panel-skills-list">
            <li>Responsive, accessible websites and <span class="noWrap">web apps</span></li>
            <li>
              Design Token-based
              <span class="noWrap">component libraries</span>
            </li>
          </ul>
        </template>
      </ListHighlightItem>
      <ListHighlightItem>
        <template v-slot:top>
          <h2>
            Design Implementation
          </h2>
          <p class="subtitle">Bringing Design Systems <span class="noWrap">to Life</span></p>
        </template>
        <template v-slot:bottom>
          <ul class="layout-panel-skills-list">
            <li>Pixel-perfect mockup implementation</li>
            <li>Color and typography systems for <span class="noWrap">the web</span></li>
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
