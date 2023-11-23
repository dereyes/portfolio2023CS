<template>
  <LayoutPanel>
    <h2 ref="scrollRef"></h2>
    <ListHighlight>
      <ListHighlightItem>
        <h2>UX Engineering</h2>
        <ul class="skills-list">
          <li>Collaborating with Design and Product</li>
          <li>Rapid prototyping</li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h2>Pixel-perfect UI Development</h2>
        <ul class="skills-list">
          <li>Turning wireframes and mockups into components</li>
          <li>Responsive, accessible development</li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h2>Design Systems</h2>
        <ul class="skills-list">
          <li>Figma</li>
          <li>Design Tokens</li>
        </ul>
      </ListHighlightItem>
    </ListHighlight>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.skills-list {
  @include unstyle.list();
}
</style>
