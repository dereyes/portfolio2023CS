<template>
  <ul class="list-hightlight2">
    <slot></slot>
  </ul>
</template>

<style lang="scss">
.list-hightlight2 {
  @include unstyle.list;

  display: flex;
  flex-flow: column;
  gap: u(6);
}
</style>