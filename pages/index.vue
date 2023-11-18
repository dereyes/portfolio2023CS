<template>
  <LayoutMain>
    <!-- <h1 class="h1-xxlarge">Dev+Lab</h1> -->
    <!-- <p class="p-large">Hello! I'm <NuxtLink to="/about-me">Darin.</NuxtLink></p> -->
    <h1 class="display">
      <strong>Darin E. Reyes is a Front-End Web Developer</strong> based in
      Mountain View, California.
    </h1>
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

<styles lang="scss">
.display {
  font-weight: typography.fontWeight("light");

  span {
    font-weight: typography.fontWeight("semibold");
  }
}
</styles>
