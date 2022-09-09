import { e as useAuthStore, t as useSnackbarStore, x as useDialogStore, v as vue_cjs_prod, i as __nuxt_component_0 } from "../server.mjs";
import { ssrRenderComponent, ssrInterpolate } from "@vue/server-renderer";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const snackbarStore = useSnackbarStore();
    const dialogStore = useDialogStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = vue_cjs_prod.resolveComponent("v-container");
      const _component_v_btn = vue_cjs_prod.resolveComponent("v-btn");
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(_component_v_container, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vue_cjs_prod.unref(authStore).isAuthenticated) {
              _push2(`<div${_scopeId}>${ssrInterpolate(vue_cjs_prod.unref(authStore).profile)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_v_btn, {
              onClick: ($event) => vue_cjs_prod.unref(snackbarStore).show({ text: "hello", color: "success", dismissable: true })
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` asd`);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode(" asd")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              onClick: ($event) => vue_cjs_prod.unref(dialogStore).show({ onOk: () => vue_cjs_prod.unref(snackbarStore).show({ text: "hello" }), onCancel: null, subtitle: "shanrki asd asd as das d", text: "sadasdas dasdasd asdasda sasdasd asdasdasda sd asd as das d asd as d asd asd as d as da sd as da sd s ad as d as da sd as da s das da sd asdasd asd as d asd as d", title: "Shanrkis is a flark" })
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` dialog`);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode(" dialog")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (!vue_cjs_prod.unref(authStore).isAuthenticated) {
              _push2(ssrRenderComponent(_component_nuxt_link, { to: "auth/login" }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`login`);
                  } else {
                    return [
                      vue_cjs_prod.createTextVNode("login")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` | `);
            if (!vue_cjs_prod.unref(authStore).isAuthenticated) {
              _push2(ssrRenderComponent(_component_nuxt_link, { to: "auth/register" }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`register`);
                  } else {
                    return [
                      vue_cjs_prod.createTextVNode("register")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (vue_cjs_prod.unref(authStore).isAuthenticated) {
              _push2(ssrRenderComponent(_component_nuxt_link, { to: "auth/logout" }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`logout`);
                  } else {
                    return [
                      vue_cjs_prod.createTextVNode("logout")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` | `);
            if (vue_cjs_prod.unref(authStore).isAuthenticated) {
              _push2(ssrRenderComponent(_component_nuxt_link, { to: "test" }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`test`);
                  } else {
                    return [
                      vue_cjs_prod.createTextVNode("test")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` | `);
            _push2(ssrRenderComponent(_component_nuxt_link, { to: "users" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`users`);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode("users")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` | `);
            _push2(ssrRenderComponent(_component_nuxt_link, { to: "collections" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`collections`);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode("collections")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.unref(authStore).isAuthenticated ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", { key: 0 }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(authStore).profile), 1)) : vue_cjs_prod.createCommentVNode("", true),
              vue_cjs_prod.createVNode(_component_v_btn, {
                onClick: ($event) => vue_cjs_prod.unref(snackbarStore).show({ text: "hello", color: "success", dismissable: true })
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode(" asd")
                ]),
                _: 1
              }, 8, ["onClick"]),
              vue_cjs_prod.createVNode(_component_v_btn, {
                onClick: ($event) => vue_cjs_prod.unref(dialogStore).show({ onOk: () => vue_cjs_prod.unref(snackbarStore).show({ text: "hello" }), onCancel: null, subtitle: "shanrki asd asd as das d", text: "sadasdas dasdasd asdasda sasdasd asdasdasda sd asd as das d asd as d asd asd as d as da sd as da sd s ad as d as da sd as da s das da sd asdasd asd as d asd as d", title: "Shanrkis is a flark" })
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode(" dialog")
                ]),
                _: 1
              }, 8, ["onClick"]),
              !vue_cjs_prod.unref(authStore).isAuthenticated ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_nuxt_link, {
                key: 1,
                to: "auth/login"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode("login")
                ]),
                _: 1
              })) : vue_cjs_prod.createCommentVNode("", true),
              vue_cjs_prod.createTextVNode(" | "),
              !vue_cjs_prod.unref(authStore).isAuthenticated ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_nuxt_link, {
                key: 2,
                to: "auth/register"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode("register")
                ]),
                _: 1
              })) : vue_cjs_prod.createCommentVNode("", true),
              vue_cjs_prod.unref(authStore).isAuthenticated ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_nuxt_link, {
                key: 3,
                to: "auth/logout"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode("logout")
                ]),
                _: 1
              })) : vue_cjs_prod.createCommentVNode("", true),
              vue_cjs_prod.createTextVNode(" | "),
              vue_cjs_prod.unref(authStore).isAuthenticated ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_nuxt_link, {
                key: 4,
                to: "test"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode("test")
                ]),
                _: 1
              })) : vue_cjs_prod.createCommentVNode("", true),
              vue_cjs_prod.createTextVNode(" | "),
              vue_cjs_prod.createVNode(_component_nuxt_link, { to: "users" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode("users")
                ]),
                _: 1
              }),
              vue_cjs_prod.createTextVNode(" | "),
              vue_cjs_prod.createVNode(_component_nuxt_link, { to: "collections" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode("collections")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
