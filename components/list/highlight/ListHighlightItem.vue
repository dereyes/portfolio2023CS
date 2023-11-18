<template>
  <li class="list-highlight-item">
    <slot />
  </li>
</template>

<style lang="scss" scoped>
.list-highlight-item {
  display: flex;
  flex-flow: column nowrap;
  margin: 0 0 u(3);
}
</style>
