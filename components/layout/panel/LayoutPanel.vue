<template>
  <div :class="classList">
    <slot />
    <div class="layout-panel-top"><slot name="top"></slot></div>
    <div class="layout-panel-bottom"><slot name="bottom"></slot></div>
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
});

const classList = props.class ? `layout-panel ${props.class}` : "layout-panel";
</script>

<style lang="scss">
.layout-panel {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  padding: $layout-panel-padding-breakpointSmall;
  width: 100%;

  > :first-child {
    border-top: 1px solid color.palette("black");
  }

  &-top,
  &-bottom {
    display: flex;
    flex-flow: column;
    // flex: 1 0;
  }

  &-top {
    align-items: top;
  }

  &-bottom {
    justify-content: end;

    > :last-child {
      margin-bottom: 0;
    }
  }

  > * {
    grid-column: 1 / -1;
  }

  @include breakpoint(
    (
      "start": null,
      "end": "medium",
    )
  ) {
    max-width: 24rem;
    padding: $layout-panel-padding-breakpointMedium;
  }

  @include breakpoint(
    (
      "start": "medium",
      "end": null,
    )
  ) {
    max-width: 60rem;
    padding: $layout-panel-padding-breakpointLarge;
  }
}
</style>
