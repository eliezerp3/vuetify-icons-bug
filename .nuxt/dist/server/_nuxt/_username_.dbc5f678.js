import { v as vue_cjs_prod, D as useInjectUserList, F as useProvideUser, c as useGlobals, d as useRoute } from "../server.mjs";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "@vue/server-renderer";
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
    const userListProvider = useInjectUserList();
    const userProvider = useProvideUser(userListProvider == null ? void 0 : userListProvider.chosen);
    if (!userProvider.data) {
      [__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useGlobals.awaitIfServer(() => userProvider.init(useRoute().params.username.toString()))), await __temp, __restore();
      userListProvider.chosen = userProvider;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue_cjs_prod.resolveComponent("Head");
      const _component_Title = vue_cjs_prod.resolveComponent("Title");
      const _component_Meta = vue_cjs_prod.resolveComponent("Meta");
      const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (vue_cjs_prod.unref(userProvider).initLoading) {
        _push(`<h1>LOADING.......</h1>`);
      } else if (vue_cjs_prod.unref(userProvider).initError) {
        _push(`<h1>ERROR</h1>`);
      } else if (!vue_cjs_prod.unref(userProvider).data) {
        _push(`<h1>EMPTY</h1>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Head, null, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Title, null, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(vue_cjs_prod.unref(userProvider).data.username)}`);
                  } else {
                    return [
                      vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(userProvider).data.username), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Meta, {
                name: "description",
                content: vue_cjs_prod.unref(userProvider).data.username
              }, null, _parent2, _scopeId));
            } else {
              return [
                vue_cjs_prod.createVNode(_component_Title, null, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(userProvider).data.username), 1)
                  ]),
                  _: 1
                }),
                vue_cjs_prod.createVNode(_component_Meta, {
                  name: "description",
                  content: vue_cjs_prod.unref(userProvider).data.username
                }, null, 8, ["content"])
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/[username].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
