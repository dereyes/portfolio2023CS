<template>
  <div class="gradient" ref="gradient"></div>
</template>

<script setup>
import { onMounted } from "vue";
import main from "./main";

const gradient = ref({});

onMounted(() => {
  main(gradient.value);
});
</script>

