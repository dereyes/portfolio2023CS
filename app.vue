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
import { useNavStore } from "@/stores/navStore";

const navStore = useNavStore();

const classObject = computed(() => ({
  "body-navIsClosed": !navStore.isOpen,
  "body-navIsOpened": navStore.isOpen
}));

useHead({
  bodyAttrs: {
    class: classObject
  },
})
</script>

<style lang="scss">
.body {
  &-navIsClosed {
    overflow-x: hidden;
    overflow-y: scroll;
  }

  &-navIsOpened {
    overflow-x: hidden;
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
