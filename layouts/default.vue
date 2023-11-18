<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.layout {
  display: contents;
}

// .layout-header {
//   grid-column: main-end / window-end;
//   grid-row: window-start / header-end;
//   position: sticky;
//   top: 0;
// }
</style>
