<template>
  <main class="layout-main">
    <slot></slot>
  </main>
</template>

<style lang="scss">
.layout-main {
  display: flex;
  flex-flow: column;
  gap: u(5);
  width: 100%;
}
</style>
