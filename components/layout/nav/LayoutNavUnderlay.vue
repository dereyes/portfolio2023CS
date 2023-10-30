<template>
  <div class="layout-nav-underlay"></div>
</template>

<styles lang="scss" scoped>
.layout-nav-underlay {
  background: rgba(0, 0, 0, 0.85);
  grid-column: window-start/window-end;
  grid-row: window-start/window-end;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
}
</styles>
