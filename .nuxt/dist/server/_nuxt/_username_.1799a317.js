import { v as vue_cjs_prod, u as useInjectSellerList, b as useProvideSeller, c as useGlobals, d as useRoute } from "../server.mjs";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent } from "@vue/server-renderer";
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
import "@vue/devtools-api";
import "@vuepic/vue-datepicker";
import "is-mobile";
import "@stripe/stripe-js";
import "vue-stripe-js";
const _sfc_main = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "[username]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const sellerListProvider = useInjectSellerList();
    const sellerProvider = useProvideSeller(sellerListProvider == null ? void 0 : sellerListProvider.chosen);
    if (!sellerProvider.data) {
      [__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useGlobals.awaitIfServer(() => sellerProvider.init(useRoute().params.username.toString()))), await __temp, __restore();
      sellerListProvider.chosen = sellerProvider;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (vue_cjs_prod.unref(sellerProvider).initLoading) {
        _push(`<h1>LOADING.......</h1>`);
      } else if (vue_cjs_prod.unref(sellerProvider).initError) {
        _push(`<h1>ERROR</h1>`);
      } else if (!vue_cjs_prod.unref(sellerProvider).data) {
        _push(`<h1>EMPTY</h1>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artists/[username].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
