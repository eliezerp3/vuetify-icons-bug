import { defineNuxtConfig } from "nuxt";
let is_development = process.env.NODE_ENV !== "production";
let is_docker = process.env.DOCKER || false; // Check if using docker (for dev)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: true,
  },
  build: {
    transpile: ["vuetify"],
  },
  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css",
      },
    ],
  },
  css: [
    "vuetify/lib/styles/main.sass", //remove when vuetify build module
  ],
});
