<template>
  <LayoutPanel class="layout-panel-tools" ref="scrollRef">
    <h2>Tools</h2>
    <p class="subtitle">Focused on the Front of the Frontend</p>
    <ListCards>
      <ListCardsItem>
        <h3>Languages</h3>
        <ul class="layout-panel-tools-list">
          <li>JavaScript/TypeScript</li>
          <li>Semantic HTML5</li>
          <li>CSS3</li>
          <li>PHP</li>
        </ul>
      </ListCardsItem>
      <ListCardsItem>
        <h3>Frameworks and Libraries</h3>
        <ul class="layout-panel-tools-list">
          <li>ReactJS</li>
          <li>Tailwind CSS</li>
          <li>SASS/SCSS</li>
          <li>HeroUI</li>
          <li>jQuery</li>
          <li>NextJS</li>
        </ul>
      </ListCardsItem>
      <ListCardsItem>
        <h3>Tools</h3>
        <ul class="layout-panel-tools-list">
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
        </ul>
      </ListCardsItem>
      <ListCardsItem>
        <h3>Concepts</h3>
        <ul class="layout-panel-tools-list">
          <li>Accessibility</li>
          <li>Responsiveness</li>
          <li>Cross-browser compatibility</li>
          <li>Component libraries</li>
          <li>Design systems</li>
          <li>REST APIs</li>
          <li>UI/UX principles</li>
          <li>Rapid prototyping</li>
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
    departureProgress: departureProgress,
  });
};

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
