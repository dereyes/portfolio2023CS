<template>
  <Panel column>
    <PanelSlot class="panel-slot-intro-top">
      <h1>
        Darin E. Reyes, <span class="noWrap">UX Engineer</span>
      </h1>
      <p>Front-End Web Developer with a background <span class="noWrap">in Design</span></p>
      <p>
        Based in
        <span class="noWrap">Mountain View,</span> California
      </p>
    </PanelSlot>
    <PanelSlot transparent />
    <!-- <template v-slot:start>
      Test
    </template>
    <template v-slot:end>
      Test
    </template> -->
  </Panel>
</template>

<style lang="scss" scoped>
.panel-slot-intro-top {
  justify-content: flex-end;

  > :last-child {
    margin: 0;
  }
}
</style>