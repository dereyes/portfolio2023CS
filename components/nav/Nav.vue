<template>
  <div class="nav">
    <div class="nav-placeholder"></div>
    <div class="nav-slideOut">
      <h1 class="nav-link">
        <TypographyLink noHighlight text="Home" />
      </h1>
      <h1 class="nav-link">
        <TypographyLink noHighlight text="Posts" />
      </h1>
      <h1 class="nav-link">
        <TypographyLink noHighlight text="Contact" />
      </h1>
    </div>
    <!-- <div class="nav-toggle-wrapper"> -->
    <NavToggle />
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
.nav {
  z-index: 2;

  &-placeholder {
    width: $nav-toggle-size-small;
  }

  &-slideOut {
    @include gradient;
    $nav-slideOut-padding: u(1);

    height: 100%;
    padding: $nav-toggle-size-small $nav-toggle-size-small $nav-slideOut-padding $nav-slideOut-padding;
    right: 0;
    position: fixed;
    top: 0;
    transition: translate 1s, opacity, .5s;
  }

  &-link {
    color: color.palette("concrete");
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