<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage :transition="{
        name: 'slide-right',
        mode: 'out-in',
      }" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useLayoutStore } from "@/stores/layoutStore";

const layoutStore = useLayoutStore();

const classObject = computed(() => ({
  "body-navIsShut": !layoutStore.navIsOpen,
  "body-navIsOpen": layoutStore.navIsOpen,
  "body-backgroundTheme-light": (layoutStore.backgroundTheme === "light"),
  "body-backgroundTheme-dark": (layoutStore.backgroundTheme === "dark"),
}));

useHead({
  bodyAttrs: {
    class: classObject
  },
})
</script>

<style lang="scss">
.body {
  &-navIsShut {
    overflow-y: scroll;
  }

  &-navIsOpen {
    overflow-y: clip;
  }
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
