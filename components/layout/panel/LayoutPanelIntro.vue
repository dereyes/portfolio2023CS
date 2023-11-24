<template>
  <LayoutPanel class="layout-panel-intro">
    <template v-slot:top>
      <h1>
        Darin E. Reyes, Front-End Web Developer
      </h1>
    </template>
    <template v-slot:bottom>
      <p>Specializing in UX Engineering</p>
      <p>
        Based in
        <span class="noWrap">Mountain View,</span> California
      </p>
    </template>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.layout-panel-intro {
  justify-content: space-around;
}
</style>
