<template>
  <LayoutMain>
    <h1 class="h1-xxlarge">Dev+Lab</h1>
    <p class="p-large">Hello! I'm <NuxtLink to="/about-me">Darin.</NuxtLink></p>
    <p class="p-large">
      This is where I document progress on my UX Design and Engineering
      projects.
    </p>
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
.h1-xxlarge {
  font-size: map.get($typeScale, "xxlarge");
}

p.p-large {
  font-family: map.get($h3, "font-family");
  font-weight: map.get($h2, "font-weight");
  font-size: map.get($h3, "font-size");
}
</styles>
