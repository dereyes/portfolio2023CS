<template>
  <LayoutPanel>
    <ListHighlightItem>
      <h2>Engineering + Design Thinking</h2>
      <ul class="skills-list">
        <li>Pixel-perfect design implementation</li>
        <li>Responsive, accessible components</li>
        <li>User focus and product solutions</li>
      </ul>
    </ListHighlightItem>
    <ListHighlight>
      <ListHighlightItem>
        <h2>A partner in UX Design <span class="noWrap">& Research</span></h2>
        <ul class="skills-list">
          <li>Rapid prototyping, interactive mockups</li>
          <li>
            Bridging Engineering, Product, and
            <span class="noWrap">Design teams</span>
          </li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h2>Bringing Design Systems <span class="noWrap">to Life</span></h2>
        <ul class="skills-list">
          <li>Developing color and typography systems</li>
          <li>
            Building and maintaining
            <span class="noWrap">component libraries</span>
          </li>
        </ul>
      </ListHighlightItem>
    </ListHighlight>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.skills-list {
  @include unstyle.list();
}

// @include breakpoint(
//   (
//     "start": "medium",
//     "end": "large",
//   )
// ) {
//   .scalingHeading-h2 {
//     grid-column: 1 / -1;
//   }
//   .skills-list {
//     grid-column: 4 / -1;
//   }
// }

// @include breakpoint(
//   (
//     "start": "large",
//     "end": null,
//   )
// ) {
//   .scalingHeading-h2 {
//     grid-column: 1 / -2;
//   }
//   .skills-list {
//     grid-column: 4 / -1;
//   }
// }
</style>
