// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      // Add your Google Font families here
      // Example:
      MadimiOne: true,
      'Madimi+One': true, // You can specify variants and weights
    }},
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})