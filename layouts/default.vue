<template>
  <div class="layout">
    <Nav />
    <slot></slot>
  </div>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-flow: row-reverse;
}
</style>
