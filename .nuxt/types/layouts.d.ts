import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/mymac/scripts/nuxt3/asalhi/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}