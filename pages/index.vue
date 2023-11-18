<template>
  <LayoutMain>
    <template v-slot:intro>
      <h1>Darin E. Reyes is a Front-End Web Developer.</h1>
      <p>
        Currently based in
        <span class="noWrap">Mountain View,</span> California.
      </p>
    </template>
    <template v-slot:background>
      <h2>Background in Design</h2>
      <p><strong>Bachelor of Arts, Design</strong><br />UC Davis, 2016</p>
      <p><strong>Innovation Scholar</strong><br />AIGA San Francisco, 2016</p>
    </template>
    <template v-slot:skills>
      <h2>Specializing in</h2>
      <h3>UX Engineering</h3>
      <ul>
        <li>Collaborating with Design and Product teams</li>
        <li>Participating in user research</li>
        <li>Rapid prototyping</li>
      </ul>
      <h3>Pixel-perfect UI Development</h3>
      <h3>Design Systems</h3>
    </template>
    <template v-slot:footer>
      <h2>Get in touch</h2>
      <p>LinkedIn</p>
    </template>
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
