<template>
  <main class="page-main">
    <ContentDoc />
  </main>
</template>

<style lang="scss">
$layout-content-maxWidth: 40rem;
$layout-content-columnCount: 12;
$layout-content-columnWidth: math.div(
  $layout-content-maxWidth,
  $layout-content-columnCount
);

$layout-content-narrow-maxWidth: $layout-content-columnWidth * 8;
$layout-content-wide-maxWidth: $layout-content-maxWidth;

.page-main {
  align-items: center;
  display: grid;
  flex-flow: column nowrap;
  grid-column: window-start / main-end;
  grid-row: main-start / window-end;
  grid-template-columns: auto minmax(auto, $layout-content-narrow-maxWidth) auto;
  grid-template-rows: auto;
  max-width: $layout-content-maxWidth;
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
