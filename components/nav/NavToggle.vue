<template>
  <button class="nav-toggle" @click="navStore.toggle()">
    <span class="nav-toggle-icon">+</span>
  </button>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useNavStore } from "@/stores/navStore";

const navStore = useNavStore();
</script>

<style lang="scss" scoped>
.nav-toggle {
  @include unstyle.button;

  aspect-ratio: 1 / 1;
  display: grid;
  place-items: center;
  position: fixed;
  width: $nav-toggle-size-small;

  &-icon {
    color: color.palette("ink");
    font-family: typography.fontFamily("sansSerif");
    font-size: u(5);
    font-weight: typography.fontWeight("medium");
    line-height: .5;
    transition: transform .5s;
  }
}

.nav-isClosed {
  .nav-toggle-icon {
    transform: rotate(0deg);
  }
}

.nav-isOpened {
  .nav-toggle-icon {
    transform: rotate(-135deg);
  }
}
</style>