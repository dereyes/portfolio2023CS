<template>
  <ul class="list-highlight">
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
.list-highlight {
  @include unstyle.list();

  display: grid;
  grid-auto-rows: 1fr;
  gap: u(3);
}
</style>
