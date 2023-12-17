<template>
  <div class="nav-drawer">
    <div class="nav-drawer-underlay"></div>
    <div class="nav-drawer-scollArea">
      <div class="nav-drawer-grid">
        <NavToggle />
        <NavList />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  &-drawer {
    backdrop-filter: blur(10px);
    display: grid;
    height: 100vh;
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

    &-scollArea {
      overflow-y: scroll;
    }

    &-grid {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-rows: auto 1fr;
    }
  }

  &-toggle {
    grid-column: 2 / -1;
    grid-row: 1 / 2;
  }
}

.body-navIsShut {
  .nav {
    &-drawer {
      opacity: 0;
      pointer-events: none;


      &-underlay {
        transform: translate(u(4), 0);
      }
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
  }
}
</style>