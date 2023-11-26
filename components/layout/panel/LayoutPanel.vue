<template>
  <div :class="classList">
    <div class="layout-panel-top">
      <slot name="top"></slot>
    </div>
    <slot />
    <div class="layout-panel-bottom">
      <slot name="bottom"></slot>
    </div>
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
  min-height: 95vh;
  // min-height: 100dvh; // Better on mobile, falls back to vh
  padding: $layout-panel-padding-phone;
  width: 100%;

  > :first-child {
    @include borderTop;
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

  >* {
    grid-column: 1 / -1;
  }

  @include breakpoint(("start": null,
      "end": "tablet",
    )) {
    padding: $layout-panel-padding-tablet;
  }

  @include breakpoint(("start": "tablet",
      "end": null,
    )) {
    padding: $layout-panel-padding-desktop;
  }
}
</style>
