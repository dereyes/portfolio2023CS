<template>
    <div class="list-cards">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.list-cards {
    display: grid;
    gap: u(1);
    grid-auto-rows: 1fr;

    @include breakpoint(
    (
      "start": "laptop",
      "end": null,
    )
  ) {
   grid-template-columns: repeat(2, 1fr);
  }
}
</style>