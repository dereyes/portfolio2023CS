<template>
  <main class="layout-main">
    <slot />
  </main>
</template>

<style lang="scss">
.layout-main {
  align-items: center;
    display: flex;
    flex-flow: column nowrap;
    gap: 25vh;
    width: 100%;
}
</style>
