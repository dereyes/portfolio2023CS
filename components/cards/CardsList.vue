<template>
  <ul class="cards-list">
    <CardsListItem
      v-for="(listItem, index) in listItems"
      :key="index"
      :title="listItem.title"
      :subtitle="listItem.subtitle"
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
.cards-list {
  @include unstyle.list;
}
</styles>
