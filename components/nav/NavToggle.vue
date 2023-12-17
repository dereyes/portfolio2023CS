<template>
  <button class="nav-toggle" @click="navStore.toggle()">
    <span class="nav-toggle-icon">+</span>
  </button>
</template>

<script setup>
import { useNavStore } from "@/stores/navStore";
const navStore = useNavStore();
</script>

<style lang="scss" scoped>
.nav-toggle {
  @include typography.fluidTypescaleLarge;
  @include unstyle.button;

  aspect-ratio: 1 / 1;
  border-radius: 100%;
  display: grid;
  margin: $layout-panel-padding-tablet $layout-panel-padding-tablet 0 0;
  min-width: 50px;
  overflow: hidden;
  place-items: center;
  position: sticky;
  top: $layout-panel-padding-tablet;
  width: .75em;

  &-icon {
    font-family: typography.fontFamily("sansSerif");
    font-size: inherit;
    font-weight: typography.fontWeight("medium");
    line-height: .5;
    position: absolute;
    transition: color .5s, transform .5s;
  }
}

.body-navIsShut {
  .nav-toggle {
    &-icon {
      color: color.palette("ink");
      transform: rotate(0deg);
    }
  }
}

.body-navIsOpen {
  .nav-toggle {
    &-icon {
      color: color.palette("concrete");
      transform: rotate(-135deg);
    }
  }
}
</style>