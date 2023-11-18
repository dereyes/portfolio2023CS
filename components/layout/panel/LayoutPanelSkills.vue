<template>
  <LayoutPanel>
    <h2>Specializing in</h2>
    <ListHighlight>
      <ListHighlightItem>
        <h3>UX Engineering</h3>
        <ul class="skills-list">
          <li>Collaborating with Design and Product</li>
          <li>Rapid prototyping</li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h3>Pixel-perfect UI Development</h3>
        <ul class="skills-list">
          <li>Turning wireframes and mockups into components</li>
          <li>Responsive, accessible development</li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h3>Design Systems</h3>
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
