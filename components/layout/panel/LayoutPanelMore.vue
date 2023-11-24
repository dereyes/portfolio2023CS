<template>
  <LayoutPanel class="layout-panel-more">
    <div class="layout-panel-more-border"></div>
    <div class="layout-panel-more-left">
      <h2 class="layout-panel-more-heading">See more</h2>
    </div>
    <div class="layout-panel-more-right">
      <ul class="layout-panel-more-list">
        <li>
          <p>
            <a
              href="https://youtu.be/hsT-G2K28CM?si=no7jIXZQi00N1pPM"
              target="_blank"
            >
              "Make Something People Want"
            </a>
          </p>
          <p>Talk on Product Design for Engineers</p>
          <p>Hacker Dojo, 2023</p>
        </li>
        <li>
          <p>
            <a href="https://vimeo.com/278603739" target="_blank">
              "ShadowPlay"
            </a>
          </p>
          <p>Interactive art installation</p>
          <p>Crocker Art Museum, 2016</p>
        </li>
        <li>
          <p>
            <a href="https://vimeo.com/243570108" target="_blank"> "Gato" </a>
          </p>
          <p>Interactive art installation</p>
          <p>Crocker Art Museum, 2016</p>
        </li>
      </ul>
    </div>
  </LayoutPanel>
</template>

<style lang="scss" scoped>
.layout-panel-more {
  border-top: none;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0 $layout-panel-padding-phone;
  margin-top: $layout-panel-padding-phone;
  padding-top: 0;

  &-border {
    border-top: 1px solid color.palette("black");
    grid-column: 1 / -1;
  }

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
  }

  @include breakpoint(
    (
      "start": "tablet",
      "end": "desktop",
    )
  ) {
    &-left {
      grid-column: 1 / 4;
    }

    &-right {
      grid-column: 4 / -1;
    }
  }

  @include breakpoint(
    (
      "start": "desktop",
      "end": null,
    )
  ) {
    &-left {
      grid-column: 1 / 3;
    }

    &-right {
      grid-column: 3 / -1;
    }
  }
}
</style>
