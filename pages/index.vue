<template>
  <LayoutMain>
    <template v-slot:intro>
      <h1>Darin E. Reyes is a Front-End Web Developer.</h1>
      <p>
        Currently based in
        <span class="noWrap">Mountain View,</span> California.
      </p>
    </template>
    <Cards :listItems="projects" />
  </LayoutMain>
</template>

<script setup>
const projects = [
  {
    title: "Planet",
    subtitle:
      "Return to real life with a chat app designed for planning social events",
    href: "/projects/planet",
  },
];
</script>
