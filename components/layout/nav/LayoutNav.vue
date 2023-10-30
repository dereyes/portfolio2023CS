<template>
  <LayoutNavList :listItems="listItems" />
</template>

<script setup>
const listItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Me",
    href: "/about-me",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Typography",
    href: "/typography",
  },
];
</script>
