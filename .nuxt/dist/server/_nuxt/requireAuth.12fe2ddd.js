import { H as defineNuxtRouteMiddleware, e as useAuthStore, I as navigateTo } from "../server.mjs";
import "destr";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "defu";
import "snakecase-keys";
import "camelcase-keys";
import "cookie-es";
import "ohash";
import "@vue/server-renderer";
import "@vue/devtools-api";
import "@vuepic/vue-datepicker";
import "is-mobile";
import "@stripe/stripe-js";
import "vue-stripe-js";
const requireAuth = defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  if (!authStore.isAuthenticated)
    return navigateTo("/auth/login?next=" + to.fullPath);
});
export {
  requireAuth as default
};
