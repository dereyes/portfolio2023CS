<template>
  <LayoutPanel class="layout-panel-more">
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
  display: flex;
  flex-flow: row;
  gap: $layout-panel-padding-breakpointSmall;
  padding-top: 0;

    > :first-child {
    border-top: none;
  }

  &-left {
    flex: 1 0;
  }

  &-right {
    flex: 2 0;
  }

  &-heading {
        border-top: 1px solid color.palette("black");
    margin-bottom: 0;
    position: sticky;
    top: $layout-panel-padding-breakpointSmall;
  }

  &-list {
    margin: $layout-panel-padding-breakpointSmall 0 0;
    padding: $layout-panel-padding-breakpointSmall 0 0;

    &,
    > :last-child {
      margin-bottom: 0;
    }
  }
}
</style>
