import { v as vue_cjs_prod, e as useAuthStore, d as useRoute, f as useRouter, g as __nuxt_component_0, h as _sfc_main$1, i as __nuxt_component_0$1 } from "../server.mjs";
import "destr";
import { _ as _unimport_useFormValidator } from "./formValidator.a0092439.js";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const form = vue_cjs_prod.ref();
    const valid = vue_cjs_prod.ref();
    const payload = vue_cjs_prod.reactive({
      username: "",
      password: ""
    });
    const onSubmit = async () => {
      await authStore.login(payload);
      const next = useRoute().query.next;
      if (!authStore.loginError)
        next && next.length > 0 ? useRouter().replace(next) : useRouter().push("/");
    };
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = vue_cjs_prod.resolveComponent("v-form");
      const _component_v_container = vue_cjs_prod.resolveComponent("v-container");
      const _component_g_api_error = __nuxt_component_0;
      const _component_v_alert = vue_cjs_prod.resolveComponent("v-alert");
      const _component_v_text_field = vue_cjs_prod.resolveComponent("v-text-field");
      const _component_g_submit_button = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_form, {
        onSubmit,
        ref_key: "form",
        ref: form,
        modelValue: valid.value,
        "onUpdate:modelValue": ($event) => valid.value = $event
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (vue_cjs_prod.unref(authStore).loginError) {
                    _push3(ssrRenderComponent(_component_g_api_error, {
                      error: vue_cjs_prod.unref(authStore).loginError
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_v_alert, { type: "info" }, {
                      default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Log In`);
                        } else {
                          return [
                            vue_cjs_prod.createTextVNode(" Log In")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    label: "Username",
                    modelValue: payload.username,
                    "onUpdate:modelValue": ($event) => payload.username = $event,
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    label: "Password",
                    type: "password",
                    modelValue: payload.password,
                    "onUpdate:modelValue": ($event) => payload.password = $event,
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_g_submit_button, {
                    loading: vue_cjs_prod.unref(authStore).loginLoading,
                    disabled: !valid.value
                  }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Login`);
                      } else {
                        return [
                          vue_cjs_prod.createTextVNode("Login")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.unref(authStore).loginError ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_g_api_error, {
                      key: 0,
                      error: vue_cjs_prod.unref(authStore).loginError
                    }, null, 8, ["error"])) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_alert, {
                      key: 1,
                      type: "info"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(" Log In")
                      ]),
                      _: 1
                    })),
                    vue_cjs_prod.createVNode(_component_v_text_field, {
                      label: "Username",
                      modelValue: payload.username,
                      "onUpdate:modelValue": ($event) => payload.username = $event,
                      rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                    vue_cjs_prod.createVNode(_component_v_text_field, {
                      label: "Password",
                      type: "password",
                      modelValue: payload.password,
                      "onUpdate:modelValue": ($event) => payload.password = $event,
                      rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                    vue_cjs_prod.createVNode(_component_g_submit_button, {
                      loading: vue_cjs_prod.unref(authStore).loginLoading,
                      disabled: !valid.value
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode("Login")
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_v_container, null, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.unref(authStore).loginError ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_g_api_error, {
                    key: 0,
                    error: vue_cjs_prod.unref(authStore).loginError
                  }, null, 8, ["error"])) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_alert, {
                    key: 1,
                    type: "info"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode(" Log In")
                    ]),
                    _: 1
                  })),
                  vue_cjs_prod.createVNode(_component_v_text_field, {
                    label: "Username",
                    modelValue: payload.username,
                    "onUpdate:modelValue": ($event) => payload.username = $event,
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                  vue_cjs_prod.createVNode(_component_v_text_field, {
                    label: "Password",
                    type: "password",
                    modelValue: payload.password,
                    "onUpdate:modelValue": ($event) => payload.password = $event,
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                  vue_cjs_prod.createVNode(_component_g_submit_button, {
                    loading: vue_cjs_prod.unref(authStore).loginLoading,
                    disabled: !valid.value
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode("Login")
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/test" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`test`);
          } else {
            return [
              vue_cjs_prod.createTextVNode("test")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
