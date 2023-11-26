<template>
  <LayoutPanel class="layout-panel-tools" ref="scrollRef">
    <h2 ref="scrollRef">Focusing on the Front of the Front-End</h2>
    <ListCards>
      <ListCardsItem>
        <h3>Fundamentals</h3>
        <ul class="layout-panel-tools-list">
          <li>Semantic HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Git</li>
        </ul>
      </ListCardsItem>
      <ListCardsItem>
        <h3>Modern Web Technologies</h3>
        <ul class="layout-panel-tools-list">
          <li>Vue</li>
          <li>React</li>
          <li>Next</li>
          <li>CSS Modules</li>
        </ul>
      </ListCardsItem>
      <ListCardsItem>
        <h3>Design Systems & UI Libraries</h3>
        <ul class="layout-panel-tools-list">
          <li>Sass</li>
          <li>SCSS</li>
          <li>Material UI (MUI)</li>
          <li>Storybook</li>
        </ul>
      </ListCardsItem>
      <ListCardsItem>
        <h3>Responsiveness & Accessibility</h3>
        <ul class="layout-panel-tools-list">
          <li>Flexbox</li>
          <li>Grid</li>
          <li>Axe</li>
          <li>Lighthouse</li>
        </ul>
      </ListCardsItem>
    </ListCards>
  </LayoutPanel>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getScrollObserver } from "@/composables/getScrollObserver";
import { scrollStore } from "@/stores/scrollStore.js";

const scrollRef = ref({});

const onScroll = ({ progress }) => {
  scrollStore.panelTools.update({
    progress: progress
  });
}

onMounted(() => {
  getScrollObserver({
    target: scrollRef.value.$refs.panel,
    onScroll: onScroll,
    threshold: 0.75,
  });
});
</script>


<style lang="scss" scoped>
.layout-panel-tools {
  // background: rgba(0, 0, 0, 0.70);
  position: relative;

  // h2,
  // h3,
  // li {
  //   color: color.palette("concrete");
  // }

  &-background {
    // background: color.palette("ink");
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -2;
  }

  > :first-child {
    border-top: none;
  }

  &-list {
    li {
      margin: 0;
    }
  }
}
</style>
