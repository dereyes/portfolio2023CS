<template>
    <CardsList :listItems="listItems" />
</template>

<script setup>
const props = defineProps({
    listItems: Array,
});
</script>