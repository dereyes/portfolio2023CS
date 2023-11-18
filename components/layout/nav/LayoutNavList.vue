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
  @include unstyle.list;
  text-align: center;
}
</styles>
