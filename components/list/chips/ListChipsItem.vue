<template>
  <li :class="classlist">
    <small>{{ item }}</small>
  </li>
</template>

<script setup>
const props = defineProps({
  item: String,
  theme: String,
});

const classlist = props.theme
  ? `list-chips-item list-chips-item-${props.theme}`
  : `list-chips-item list-chips-item-light`;
</script>

<style lang="scss" scoped>
.list-chips-item {
  border: 1px solid color.palette("ink");
  border-radius: u(5);
  display: inline-grid;
  flex: 1 0;
  padding: u(.25) u(.75);
  place-items: center;
  margin: 0;
  white-space: nowrap;

  &-dark {
    background: color.palette("ink");
    border: 1px solid color.palette("ink");
    border-radius: u(5);
    color: color.palette("concrete");
  }

  &-light {
    color: color.palette("ink");
  }
}
</style>
