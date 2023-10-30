<template>
  <main class="layout-main">
    <slot />
  </main>
</template>

<style lang="scss">
$layout-main-maxWidth: 40rem;
$layout-main-columnCount: 12;
$layout-main-columnWidth: math.div(
  $layout-main-maxWidth,
  $layout-main-columnCount
);

$layout-main-narrow-maxWidth: $layout-main-columnWidth * 8;
$layout-main-wide-maxWidth: $layout-main-maxWidth;

.layout-main {
  align-items: center;
  display: grid;
  flex-flow: column nowrap;
  grid-column: window-start / main-end;
  grid-row: main-start / window-end;
  grid-template-columns: auto minmax(auto, $layout-main-narrow-maxWidth) auto;
  grid-template-rows: auto;
  max-width: $layout-main-maxWidth;
  width: 100%;

  > * {
    grid-column: 2 / 3;
  }

  > div {
    display: contents;

    > * {
      grid-column: 2 / 3;
    }
  }
}
</style>
