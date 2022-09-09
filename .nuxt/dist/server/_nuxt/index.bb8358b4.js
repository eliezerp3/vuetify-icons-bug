import { v as vue_cjs_prod, u as useInjectSellerList, a as useInjectSeller } from "../server.mjs";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useInjectSellerList();
    const sellerProvider = useInjectSeller();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue_cjs_prod.resolveComponent("Head");
      const _component_Title = vue_cjs_prod.resolveComponent("Title");
      const _component_Meta = vue_cjs_prod.resolveComponent("Meta");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`${ssrInterpolate((_a2 = vue_cjs_prod.unref(sellerProvider).data) == null ? void 0 : _a2.author.username)}`);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString((_b2 = vue_cjs_prod.unref(sellerProvider).data) == null ? void 0 : _b2.author.username), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: (_a = vue_cjs_prod.unref(sellerProvider).data) == null ? void 0 : _a.author.bio
            }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_Title, null, {
                default: vue_cjs_prod.withCtx(() => {
                  var _a2;
                  return [
                    vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString((_a2 = vue_cjs_prod.unref(sellerProvider).data) == null ? void 0 : _a2.author.username), 1)
                  ];
                }),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_Meta, {
                name: "description",
                content: (_b = vue_cjs_prod.unref(sellerProvider).data) == null ? void 0 : _b.author.bio
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` ${ssrInterpolate(vue_cjs_prod.unref(sellerProvider).data)}</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artists/[username]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
