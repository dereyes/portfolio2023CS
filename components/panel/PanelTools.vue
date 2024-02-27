<template>
  <Panel class="panel-tools" ref="scrollRef">
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

<script setup>
import { onMounted, ref } from "vue";
import { getScrollObserver } from "@/composables/getScrollObserver";
import { useLayoutStore } from "@/stores/layoutStore";

const scrollRef = ref({});
const layoutStore = useLayoutStore();
const previousScrollProgress = ref(0);

const getPanelScrollState = ({ previous, current }) => {
  if (current === 0 || current === 1) {
    if (previous > 0 && previous < 1) {
      return "exiting";
    }
    return "outside";
  }

  if (current > 0 && current < 1) {
    if (previous === 0 || previous === 1) {
      return "entering";
    }
    return "inside";
  }
}

const onScroll = ({ progress }) => {
  const panelScrollState = getPanelScrollState({
    previous: previousScrollProgress.value,
    current: progress
  });

  if (
    panelScrollState === "entering" ||
    panelScrollState === "exiting"
  ) {
    layoutStore.toggleBodyBackgroudTheme();
  }

  previousScrollProgress.value = progress;
}

onMounted(() => {
  getScrollObserver({
    target: scrollRef.value.$refs.panel,
    onScroll: onScroll,
    threshold: .5,
  });
});
</script>

<style lang="scss" scoped>
.panel-tools {

  h2,
  h3,
  li,
  .list-cards-item {
    border-color: color.palette("concrete");
    color: color.palette("concrete");
  }

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