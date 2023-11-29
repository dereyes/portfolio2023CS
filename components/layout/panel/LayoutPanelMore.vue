<template>
  <LayoutPanel class="layout-panel-more">
    <div class="layout-panel-more-left">
      <h2 class="layout-panel-more-heading">See more</h2>
    </div>
    <div class="layout-panel-more-right">
      <ul class="layout-panel-more-list">
        <li class="layout-panel-more-list-item">
          <img class="layout-panel-more-image" src="see-more-hacker-dojo.jpg" width="300" height="150">
          <p>
            <a href="https://youtu.be/hsT-G2K28CM?si=no7jIXZQi00N1pPM" target="_blank">
              "Make Something People Want"
            </a>
          </p>
          <p>Talk on Product Design for Engineers<br />Hacker Dojo, 2023</p>
        </li>
        <li class="layout-panel-more-list-item">
          <img class="layout-panel-more-image" src="see-more-shadowplay.jpg" width="300" height="150">
          <p>
            <a href="https://vimeo.com/278603739" target="_blank">
              "ShadowPlay"
            </a>
          </p>
          <p>Interactive art installation<br />Crocker Art Museum, 2016</p>
        </li>
        <li class="layout-panel-more-list-item">
          <img class="layout-panel-more-image" src="see-more-gato.jpg" width="300" height="150">
          <p>
            <a href="https://vimeo.com/243570108" target="_blank"> "Gato" </a>
          </p>
          <p>Interactive art installation<br />Crocker Art Museum, 2016</p>
        </li>
      </ul>
    </div>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.layout-panel-more {
  background: color.palette("concrete-alpha");
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0 $layout-panel-padding-phone;
  margin-top: $layout-panel-padding-phone;
  padding-top: 0;

  &-left {
    grid-column: 1 / 2;
  }

  &-right {
    grid-column: 2 / -1;
  }

  &-heading {
    position: sticky;
    top: $layout-panel-padding-phone;
  }

  &-list {
    margin-top: u(0.5);
    gap: u(2);

    &,
    > :last-child {
      margin-bottom: 0;
    }

    &-item {
      @include borderTop;
    }
  }

  &-image {
    aspect-ratio: 2 / 1;
    height: auto;
    margin: u(1) 0;
    max-width: 500px;
    width: 100%;
  }

  @include breakpoint(("start": "tablet",
      "end": "desktop",
    )) {
    &-left {
      grid-column: 1 / 4;
    }

    &-right {
      grid-column: 4 / -1;
    }
  }

  @include breakpoint(("start": "desktop",
      "end": null,
    )) {
    &-left {
      grid-column: 1 / 3;
    }

    &-right {
      grid-column: 3 / -1;
    }
  }
}
</style>
