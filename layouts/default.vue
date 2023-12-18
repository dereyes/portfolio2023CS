<template>
  <div class="layout">
    <Pointer />
    <Nav />
    <div class="layout-overlay"></div>
    <slot></slot>
  </div>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-flow: row-reverse;

  &-overlay {
    @include gradient;

    height: 100%;
    position: fixed;
    transition: opacity .25s;
    width: 100%;
    z-index: 1;
  }
}

.body-navIsShut {
  .layout-overlay {
    opacity: 0;
    pointer-events: none;
  }
}

.body-navIsOpen {
  .layout-overlay {
    opacity: 1;
  }
}
</style>
