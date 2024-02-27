<template>
  <div class="list-cards-item">
    <div class="list-cards-item-media">
      <slot name="media">

      </slot>
    </div>
    <slot />
  </div>
</template>

<style lang="scss">
.list-cards-item {
  @include borderTop;

  &-media {

    video,
    img {
      height: auto;
      margin: u(.75) 0 u(.75);
      width: 100%;
    }
  }
}
</style>