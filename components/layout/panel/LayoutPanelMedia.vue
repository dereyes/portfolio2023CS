<template>
  <LayoutPanel class="layout-panel-media">
    <div class="layout-panel-media-left">
      <h2 class="layout-panel-media-heading">Media</h2>
    </div>
    <div class="layout-panel-media-right">
      <video width="320" height="320" autoplay muted controls loop class="layout-panel-media-highlight-video">
        <source src="/Reel-2017.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <ul class="layout-panel-media-highlight">
        <ListCardsItem>
          <p><strong>Creative Code Showcase</strong></p>
          <p>App prototypes, art installations, concert visualizations, and more</p>
        </ListCardsItem>
      </ul>
      <ListCards>
        <ListCardsItem>
          <template v-slot:media>
            <Thumbnail link="https://vimeo.com/243570108" source="/thumbnail-gato.jpg"
              alt="A cartoon cat projected onto a ceiling" />
          </template>
          <p>
            <a href="https://vimeo.com/243570108" target="_blank">Gato</a>
          </p>
          <p>Interactive art installation<br />Crocker Art Museum, 2016</p>
        </ListCardsItem>
        <ListCardsItem>
          <template v-slot:media>
            <Thumbnail link="https://vimeo.com/278603739" source="/thumbnail-shadowplay.jpg"
              alt="A pair of legs standing on a projection on a dance floor" />
          </template>
          <p>
            <a href="https://vimeo.com/278603739" target="_blank">
              ShadowPlay
            </a>
          </p>
          <p>Interactive art installation<br />Crocker Art Museum, 2016</p>
        </ListCardsItem>
        <ListCardsItem>
          <template v-slot:media>
            <Thumbnail link="https://youtu.be/hsT-G2K28CM?si=no7jIXZQi00N1pPM" source="/thumbnail-hackerdojo.jpg"
              alt="Darin Reyes giving a presentation at Hacker Dojo" />
          </template>
          <p>
            <a href="https://youtu.be/hsT-G2K28CM?si=no7jIXZQi00N1pPM" target="_blank">
              Make Something People Want
            </a>
          </p>
          <p>Talk on Product Design for Engineers<br />Hacker Dojo, 2023</p>
        </ListCardsItem>
      </ListCards>
    </div>
  </LayoutPanel>
</template>

<style lang="scss">
.layout-panel-media {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0 $layout-panel-padding-phone;
  margin-top: $layout-panel-padding-phone;
  padding-top: 0;

  &-left {
    grid-column: 1 / -1;
  }

  &-right {
    grid-column: 1 / -1;
  }

  &-heading {
    position: sticky;
    top: $layout-panel-padding-phone;
  }

  &-highlight {
    margin: 0 0 u(1);

    &-video {
      height: auto;
      margin: 0 0 u(.75);
      width: 100%;
    }
  }

  @include breakpoint(("start": "tablet",
      "end": "laptop",
    )) {
    &-left {
      grid-column: 1 / 2;
    }

    &-right {
      grid-column: 2 / -1;
    }
  }

  @include breakpoint(("start": "laptop",
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
      grid-column: 1 / 4;
    }

    &-right {
      grid-column: 4 / -1;
    }
  }

  // &-list {
  //   margin-top: u(0.5);
  //   gap: u(2);

  //   &,
  //   > :last-child {
  //     margin-bottom: 0;
  //   }

  //   &-item {
  //     @include borderTop;
  //   }
  // }

  // .layout-panel-bottom {
  //   @include borderTop;
  // }
}
</style>