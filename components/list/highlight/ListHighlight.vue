<template>
  <ul class="list-highlight">
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
.list-highlight {
  @include unstyle.list();

  display: flex;
  flex-flow: column nowrap;
}
</style>
