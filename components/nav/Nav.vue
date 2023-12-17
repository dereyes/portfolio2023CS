<template>
  <div class="nav">
    <NavToggle />
    <NavDrawer />
  </div>
</template>

<style lang="scss" scoped>
.nav {
  z-index: 2;

  &-placeholder {
    // width: $nav-toggle-size-small;
  }

  &-slideOut {
    $nav-slideOut-padding: u(1);

    backdrop-filter: blur(10px);
    background: color.palette("ink");
    height: 100%;
    // padding: $nav-toggle-size-small $nav-toggle-size-small $nav-slideOut-padding $nav-slideOut-padding;
    right: 0;
    position: fixed;
    top: 0;
    transition: translate 1s, opacity, .5s;
  }

  &-list {
    &-item {
      color: color.palette("concrete");
      font-size: typography.fluidTypescale("tablet", "h1");
      margin: 0 0 .5em;
    }
  }

  @include breakpoint(("start": "laptop",
      "end": null,
    )) {

    &-list-item {
      font-size: typography.fluidTypescale("desktop", "h1");
    }
  }
}

.body-navIsShut {
  .nav-slideOut {
    opacity: 0;
    transform: translate(100%, 0px);
  }
}

.body-navIsOpen {
  .nav-slideOut {
    opacity: 1;
    transform: translate(0%, 0px);
  }
}
</style>