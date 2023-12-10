<template>
  <Panel class="panel-tools">
    <h2>Tools</h2>
    <ListCards>
      <ListCardsItem>
        <h3>Fundamentals</h3>
        <ul class="panel-tools-list">
          <li>Semantic HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Git</li>
        </ul>
      </ListCardsItem>
      <ListCardsItem>
        <h3>Modern Web Technologies</h3>
        <ul class="panel-tools-list">
          <li>Vue</li>
          <li>React</li>
          <li>Next</li>
          <li>CSS Modules</li>
        </ul>
      </ListCardsItem>
      <ListCardsItem>
        <h3>Design Systems & UI Libraries</h3>
        <ul class="panel-tools-list">
          <li>Sass</li>
          <li>SCSS</li>
          <li>Material UI (MUI)</li>
          <li>Storybook</li>
        </ul>
      </ListCardsItem>
      <ListCardsItem>
        <h3>Responsiveness & Accessibility</h3>
        <ul class="panel-tools-list">
          <li>Flexbox</li>
          <li>Grid</li>
          <li>Axe</li>
          <li>Lighthouse</li>
        </ul>
      </ListCardsItem>
    </ListCards>
  </Panel>
</template>

<style lang="scss" scoped>
.panel-tools {
  &-content {
    align-content: center;
  }

  &-list {
    li {
      margin: 0;
    }
  }
}
</style>