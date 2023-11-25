<template>
  <main class="layout-main">
    <slot />
  </main>
</template>

<style lang="scss">
.layout-main {
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  gap: 25vh;
  gap: 25dvh; // Better on mobile, falls back to vh
  width: 100%;

  @include breakpoint(
    (
      "start": "tablet",
      "end": null,
    )
  ) {
    max-width: getBreakpoint("max");
  }
}
</style>
