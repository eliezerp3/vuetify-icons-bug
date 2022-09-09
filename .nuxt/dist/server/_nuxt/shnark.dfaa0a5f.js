import { v as vue_cjs_prod, e as useAuthStore, y as _sfc_main$1, i as __nuxt_component_0 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "@vue/server-renderer";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
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
  __name: "shnark",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthUploadProfileImage = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "container" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AuthUploadProfileImage, null, null, _parent));
      _push(`<h6>${ssrInterpolate(vue_cjs_prod.unref(authStore).fullName)}</h6><h6>${ssrInterpolate(vue_cjs_prod.unref(authStore).profile)}</h6>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/auth/logout" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`logout`);
          } else {
            return [
              vue_cjs_prod.createTextVNode("logout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shnark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
