<template>
  <LayoutPanel class="layout-panel-tools" ref="scrollRef">
    <h2>Tools</h2>
    <p class="subtitle">Focusing on the Front of the Front-End</p>
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

const onScroll = ({ progress, approachProgress, departureProgress }) => {
  scrollStore.panelTools.update({
    progress: progress,
    approachProgress: approachProgress,
    departureProgress: departureProgress
  });
}

onMounted(() => {
  getScrollObserver({
    target: scrollRef.value.$refs.panel,
    approachHeight: 200,
    departureHeight: 200,
    onScroll: onScroll,
    threshold: 0.5,
  });
});
</script>


<style lang="scss" scoped>
.layout-panel-tools {
  position: relative;

  h2,
  h3,
  p,
  li {
    color: color.palette("concrete");
  }

  &-background {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -2;
  }

  .list-cards-item {
    border-top-color: color.palette("concrete");
  }

  &-list {
    li {
      margin: 0;
    }
  }
}
</style>
