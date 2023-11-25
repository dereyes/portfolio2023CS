<template>
  <ul class="list-chips">
    <ListChipsItem v-if="title" :item="title" theme="dark" />
    <ListChipsItem v-for="item in list" :item="item" />
  </ul>
</template>

<script setup>
const props = defineProps({
  title: String,
  list: Array,
});
</script>

<style lang="scss" scoped>
.list-chips {
  display: inline-flex;
  flex-flow: row wrap;
  gap: u(0.5);
  justify-content: space-between;
  margin: 0;
  //   display: contents;
}
</style>
