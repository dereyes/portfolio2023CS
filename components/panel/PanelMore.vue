<template>
  <Panel gaps row class="panel-more">
    <Panel class="panel-more-left">
      <h2 class="panel-more-heading">See More</h2>
    </Panel>
    <Panel class="panel-more-right">
      <ul class="layout-panel-more-list">
        <li class="layout-panel-more-list-item">
          <p>
            <a href="https://youtu.be/hsT-G2K28CM?si=no7jIXZQi00N1pPM" target="_blank">
              "Make Something People Want"
            </a>
          </p>
          <p>Talk on Product Design for Engineers<br />Hacker Dojo, 2023</p>
        </li>
        <li class="layout-panel-more-list-item">
          <p>
            <a href="https://vimeo.com/278603739" target="_blank">
              "ShadowPlay"
            </a>
          </p>
          <p>Interactive art installation<br />Crocker Art Museum, 2016</p>
        </li>
        <li class="layout-panel-more-list-item">
          <p>
            <a href="https://vimeo.com/243570108" target="_blank"> "Gato" </a>
          </p>
          <p>Interactive art installation<br />Crocker Art Museum, 2016</p>
        </li>
      </ul>
    </Panel>
  </Panel>
</template>

<style lang="scss" scoped>
.panel-more {

  &-left,
  &-right {
    align-content: start;
  }

  &-heading {
    position: sticky;

    @include breakpoint(("start": null,
        "end": "tablet",
      )) {
      top: $layout-panel-padding-tablet;
    }

    @include breakpoint(("start": "tablet",
        "end": null,
      )) {
      top: $layout-panel-padding-desktop;
    }

  }
}
</style>