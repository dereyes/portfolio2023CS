<template>
  <LayoutMain>
    <ContentDoc v-slot="{ doc }">
      <h1 v-if="doc.heading">{{ doc.heading }}</h1>
      <h1 v-else="doc.title">{{ doc.title }}</h1>
      <p v-if="!doc.hideAuthor"><i>By Darin E. Reyes</i></p>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </LayoutMain>
</template>
