<template>
  <nav class="layout-nav-overlay">
    <LayoutNav />
  </nav>
</template>

<styles lang="scss" scoped>
.layout-nav-overlay {
  align-self: center;
  grid-column: window-start / main-end;
  grid-row: main-start / window-end;
  justify-self: center;
  position: fixed; // New stacking context
}
</styles>
