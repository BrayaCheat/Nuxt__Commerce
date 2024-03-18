// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ["@nuxtjs/google-fonts", "@pinia/nuxt", "nuxt-icon", "@nuxt/ui", "@nuxtjs/tailwindcss"],
  colorMode: {
    preference: 'light'
  },
  googleFonts: {
    families: {
      Poppins: true,
    }
  }
});
