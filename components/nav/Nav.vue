<template>
  <div class="nav-wrapper">
    <button class="nav-toggle">
      <span class="material-symbols-outlined">
        add_circle
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  &-wrapper {
    padding: u(1);
  }

  &-toggle {
    @include unstyle.button;

    aspect-ratio: 1 / 1;
    display: grid;
    font-size: u(4);
    line-height: .5;
    place-items: center;
    position: sticky;
    top: u(1);
  }
}
</style>