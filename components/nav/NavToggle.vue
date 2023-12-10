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
  font-size: u(5);
  font-weight: typography.fontWeight("light");
  line-height: .5;
  margin: u(1);
  place-items: center;

  &-icon {
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