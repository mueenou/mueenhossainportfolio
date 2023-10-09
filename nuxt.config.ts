// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/motion/nuxt"],
  plugins: [{ src: "~/plugins/scroll-behavior.client.ts", mode: "client" }],
  app: {
    head: {
      script: [{ src: "https://smtpjs.com/v3/smtp.js" }],
    },
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
});
