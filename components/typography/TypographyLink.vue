<template>
  <a :href="href" class="link">
    {{ wordsWithoutLast }} <span class="noWrap">{{ lastWord }}<span class="link-arrow material-symbols-outlined">
        north_east</span></span>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
  opensInNewWindow: {
    type: Boolean,
    default: false,
  },
  text: String,
});

const words = props.text.split(" ");
const wordsWithoutLast = words.slice(0, -1).join(" ");
const lastWord = words[words.length - 1];
</script>

<style lang="scss">
.link {
  background: linear-gradient(to top,
      color.palette("ink") 0.1em,
      color.palette("hilite") 0.1em,
      color.palette("hilite") 0.25em,
      transparent 0.25em);
  color: color.palette("ink");
  text-decoration: none;

  &-arrow {
    // font-family: typography.fontFamily("monospace");
    font-size: 1em;
    left: 0em;
    line-height: 0;
    position: relative;
    top: 0.2em;
    transition: all .125s;
  }

  &:hover {
    .link-arrow {
      left: .1em;
      top: 0.1em;
    }
  }
}
</style>