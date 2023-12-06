<template>
  <Panel>
    <Panel autoHeight class="panel-intro-top">
      <h1>
        Darin E. Reyes, <span class="noWrap">UX Engineer</span>
      </h1>
      <p>Front-End Web Developer with a background <span class="noWrap">in Design</span></p>
      <p>
        Based in
        <span class="noWrap">Mountain View,</span> California
      </p>
    </Panel>
    <Panel autoHeight transparent />
  </Panel>
</template>

<style lang="scss" scoped>
.panel-intro-top {
  align-content: end;

  > :last-child {
    margin: 0;
  }
}
</style>