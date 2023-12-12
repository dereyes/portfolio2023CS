<template>
  <a :href="href" :class="classObject">
    {{ wordsWithoutLast }} <span class="noWrap">{{ lastWord }}<span class="link-arrow material-symbols-outlined">
        north_east</span></span>
  </a>
</template>

<script setup>
const props = defineProps({
  class: String,
  href: String,
  noHighlight: Boolean,
  opensInNewWindow: {
    type: Boolean,
    default: false,
  },
  text: String,
});

const classObject = {
  "link": true,
  "link-highlight": !props.noHighlight,
  [props.class]: props.class,
};

const words = props.text.split(" ");
const wordsWithoutLast = words.slice(0, -1).join(" ");
const lastWord = words[words.length - 1];
</script>

<style lang="scss">
.link {
  color: inherit;
  text-decoration: none;

  &-highlight {
    background: linear-gradient(to top,
        color.palette("ink") 0.1em,
        color.palette("hilite") 0.1em,
        color.palette("hilite") 0.25em,
        transparent 0.25em);
  }

  &-arrow {
    // font-family: typography.fontFamily("monospace");
    bottom: 0.3em;
    font-size: 0.6em;
    left: 0.1em;
    line-height: 0;
    position: relative;
    transition: left .125s, bottom .125s;
  }

  &:hover {
    .link-arrow {
      bottom: 0.4em;
      left: .2em;
    }
  }
}
</style>