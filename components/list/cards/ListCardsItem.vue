<template>
  <div class="list-cards-item">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.list-cards-item {
  @include borderTop;
}
</style>