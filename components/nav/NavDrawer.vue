<template>
  <div class="nav-drawer">
    <div class="nav-drawer-underlay"></div>
    <div class="nav-toggle-wrapper">
      <NavToggle />
    </div>
    <ul class="nav-list">
      <li class="nav-list-item">
        <TypographyLink noHighlight text="Home" />
      </li>
      <li class="nav-list-item">
        <TypographyLink noHighlight text="Posts" />
      </li>
      <li class="nav-list-item">
        <TypographyLink noHighlight text="Contact" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  &-drawer {
    backdrop-filter: blur(10px);
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    height: 100vh;
    // overflow-y: scroll;
    right: 0;
    transition: opacity .5s;
    position: fixed;
    top: 0;

    &-underlay {
      background: color.palette("ink");
      position: absolute;
      transition: transform .5s;
      height: 100%;
      width: 100%;
    }
  }

  &-toggle-wrapper {
    grid-column: 2 / -1;
    grid-row: 1 / 2;
    position: sticky;
    top: 0;
  }

  &-list {
    grid-column: 1 / 2;
    grid-row: 2 / -1;
    margin: 0;
    padding: $layout-panel-padding-tablet;

    &-item {
      @include typography.fluidTypescaleH1;

      color: color.palette("concrete");
      margin: 0 0 0.5em;
      transition: transform .5s;
    }
  }
}

.body-navIsShut {
  .nav {
    &-drawer {
      opacity: 0;
      pointer-events: none;


      &-underlay {
        transform: translate(u(3), 0);
      }
    }

    &-list-item {
      transform: translate(u(3), 0);
    }
  }
}

.body-navIsOpen {
  .nav {
    &-drawer {
      opacity: 1;

      &-underlay {
        transform: translate(0, 0);
      }
    }

    &-list {
      &-item {
        transform: translate(0, 0);
      }

      @for $i from 1 through 3 {
        > :nth-child(#{$i}) {
          transition-duration: .5s + ($i * .125s);
        }
      }

    }
  }
}
</style>