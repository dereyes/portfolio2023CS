<template>
  <LayoutPanel>
    <h2 ref="scrollRef"></h2>
    <ListHighlight>
      <ListHighlightItem>
        <h2>A partner in UX Design & Research</h2>
        <ul class="skills-list">
          <li>Rapid prototyping, interactive mockups</li>
          <li>Bridging Engineering, Product, and Design teams</li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h2>Design Thinking & User Focus</h2>
        <ul class="skills-list">
          <li>Ensuring pixel-perfect design implementation</li>
          <li>Responsive, accessible soluions</li>
          <li>Consulting on product solutions</li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h2>Bringing Design Systems to Life</h2>
        <ul class="skills-list">
          <li>Architecting color and typography systems</li>
          <li>Building and maintaining component libraries</li>
        </ul>
      </ListHighlightItem>
      <!-- <ListHighlightItem>
        <h2>UX Engineering</h2>
        <ul class="skills-list">
          <li>Collaborating with Design and Product teams</li>
          <li>Rapid prototyping</li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h2>UI Development</h2>
        <ul class="skills-list">
          <li>Turning wireframes and mockups into pixel-perfect components</li>
          <li>Responsive, accessible development</li>
        </ul>
      </ListHighlightItem>
      <ListHighlightItem>
        <h2>Design Systems</h2>
        <ul class="skills-list">
          <li>Figma</li>
          <li>Design Tokens</li>
        </ul>
      </ListHighlightItem> -->
    </ListHighlight>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.skills-list {
  @include unstyle.list();
}
</style>
