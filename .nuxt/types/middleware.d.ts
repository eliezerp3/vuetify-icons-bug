import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "require-auth" | "require-not-auth" | "require-staff"
declare module "/Users/mymac/scripts/nuxt3/asalhi/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}