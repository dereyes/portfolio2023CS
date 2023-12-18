<template>
  <ul class="nav-list">
    <li class="nav-list-item">
      <TypographyLink noHighlight href="#intro" text="Home" @click="layoutStore.toggleNav()" />
    </li>
    <li class="nav-list-item">
      <TypographyLink noHighlight href="#posts" text="Posts" @click="layoutStore.toggleNav()" />
    </li>
    <li class="nav-list-item">
      <TypographyLink noHighlight href="#about" text="About" @click="layoutStore.toggleNav()" />
    </li>
    <li class="nav-list-item">
      <TypographyLink noHighlight href="#contact" text="Contact" @click="layoutStore.toggleNav()" />
    </li>
  </ul>
</template>

<script setup>
import { useLayoutStore } from "@/stores/layoutStore";
const layoutStore = useLayoutStore();
</script>

<style lang="scss" scoped>
.nav {
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
    &-list-item {
      transform: translate(u(4), 0);
    }
  }
}

.body-navIsOpen {
  .nav {
    &-list {
      &-item {
        transform: translate(0, 0);
      }

      @for $i from 1 through 4 {
        > :nth-child(#{$i}) {
          transition-duration: .5s + ($i * .125s);
        }
      }

    }
  }
}
</style>