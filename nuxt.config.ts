// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/styles/global/_index.scss"],
  modules: ["@nuxt/content", "@pinia/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "sass:math"; @use "sass:map"; @use "sass:list"; @use "@/assets/styles/resources/_index.scss" as *;',
        },
      },
    },
  },
});
