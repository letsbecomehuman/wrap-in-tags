// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // https://v3.nuxtjs.org/api/configuration/nuxt.config
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['@/assets/main.css'],
  components: {
    extensions: ['.vue'],
    dirs: ['~/components'],
  },
});
