<template>
  <Panel row class="panel-more">
    <div class="panel-more-left">
      <h2 class="panel-more-heading">See More</h2>
    </div>
    <div class="panel-more-right">
      <ul class="panel-more-list">
        <li class="panel-more-list-item">
          <p>
            <TypographyLink text="“Make Something People Want”" href="https://youtu.be/hsT-G2K28CM?si=no7jIXZQi00N1pPM"
              opensInNewWindow />
          </p>
          <p>Talk on Product Design for Engineers<br />Hacker Dojo, 2023</p>
        </li>
        <li class="panel-more-list-item">
          <p>
            <TypographyLink text="“ShadowPlay”" href="https://vimeo.com/278603739" opensInNewWindow />
          </p>
          <p>Interactive art installation<br />Crocker Art Museum, 2016</p>
        </li>
        <li class="panel-more-list-item">
          <p>
            <TypographyLink text="Gato" href="https://vimeo.com/243570108" opensInNewWindow />
          </p>
          <p>Interactive art installation<br />Crocker Art Museum, 2016</p>
        </li>
      </ul>
    </div>
  </Panel>
</template>

<style lang="scss" scoped>
.panel-more {
  grid-auto-flow: row;
  grid-template-columns: 1fr;

  &-left,
  &-right {
    align-content: start;
  }

  &-heading {
    margin-bottom: 0;
    position: sticky;
    top: $layout-panel-padding-tablet;
  }

  @include breakpoint(("start": "laptop",
      "end": null,
    )) {
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;

    &-heading {
      top: $layout-panel-padding-desktop;
    }
  }

  &-list {
    gap: u(2);
    margin-bottom: 0;

    &-item {
      @include borderTop;

      &:last-child,
      :last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>