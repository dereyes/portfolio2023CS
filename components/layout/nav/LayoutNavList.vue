<template>
  <ul class="layout-nav-list">
    <LayoutNavListItem
      v-for="(listItem, index) in listItems"
      :key="index"
      :text="listItem.text"
      :href="listItem.href"
    />
  </ul>
</template>

<script setup>
const props = defineProps({
  listItems: Array,
});
</script>

<styles lang="scss" scoped>
.layout-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}
</styles>
