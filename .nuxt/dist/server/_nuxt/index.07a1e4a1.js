import { v as vue_cjs_prod, D as useInjectUserList, E as useInjectUser, c as useGlobals, i as __nuxt_component_0 } from "../server.mjs";
import "destr";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "@vue/server-renderer";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useInjectUserList();
    const userProvider = useInjectUser();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>INDEX</h1> ${ssrInterpolate(vue_cjs_prod.unref(userProvider).data)} `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: vue_cjs_prod.unref(useGlobals).getFullPath("test")
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` TEST `);
          } else {
            return [
              vue_cjs_prod.createTextVNode(" TEST ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/[username]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
