<template>
  <LayoutNavList :listItems="listItems" />
</template>

<script setup>
const listItems = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "About",
    href: "/about"
  },
  {
    text: "Contact",
    href: "/contact"
  },
  {
    text: "Typography",
    href: "/typography"
  },
]
</script>