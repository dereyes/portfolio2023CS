// https://nuxt.com/docs/guide/directory-structure/nuxt.config

const useScss = [
  '@use "sass:math";',
  '@use "sass:map";',
  '@use "sass:list";',
  '@use "sass:string";',
  '@use "@/assets/styles/resources/_collection.scss";',
  '@use "@/assets/styles/resources/_color.scss";',
  '@use "@/assets/styles/resources/_layout.scss" as *;',
  '@use "@/assets/styles/resources/_ratio.scss";',
  '@use "@/assets/styles/resources/_typography.scss";',
  '@use "@/assets/styles/resources/_u.scss" as *;',
  '@use "@/assets/styles/resources/unstyle.scss";',
].join(" ");

export default defineNuxtConfig({
  css: ["~/assets/styles/global/_index.scss"],
  modules: ["@nuxt/content", "@pinia/nuxt", "@vueuse/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: useScss,
        },
      },
    },
  },
});
