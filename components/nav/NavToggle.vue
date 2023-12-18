<template>
  <button class="nav-toggle" @click="navStore.toggle()" ref="navToggle">
    <span class="nav-toggle-icon">+</span>
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNavStore } from "@/stores/navStore";

const navStore = useNavStore();
const navToggle = ref();

const getNavToggleCenterCoordinates = () => {
  const rect = navToggle.value.getBoundingClientRect();

  const rectCenterCoordinates = {
    x: rect.left + (rect.width / 2),
    y: rect.top + (rect.height / 2),
  };

  navStore.setNavToggleCenterCoordinates(rectCenterCoordinates);
}

onMounted(() => {
  getNavToggleCenterCoordinates();
});

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