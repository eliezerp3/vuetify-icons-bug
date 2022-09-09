import { v as vue_cjs_prod, e as useAuthStore, g as __nuxt_component_0, h as _sfc_main$1 } from "../server.mjs";
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
      email: ""
    });
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = vue_cjs_prod.resolveComponent("v-container");
      const _component_g_api_error = __nuxt_component_0;
      const _component_v_form = vue_cjs_prod.resolveComponent("v-form");
      const _component_v_text_field = vue_cjs_prod.resolveComponent("v-text-field");
      const _component_g_submit_button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_container, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_g_api_error, {
              error: vue_cjs_prod.unref(authStore).sendEmailPasswordResetError
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_form, {
              onSubmit: ($event) => vue_cjs_prod.unref(authStore).sendPasswordResetEmail(payload),
              ref_key: "form",
              ref: form,
              modelValue: valid.value,
              "onUpdate:modelValue": ($event) => valid.value = $event
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: payload.email,
                    "onUpdate:modelValue": ($event) => payload.email = $event,
                    placeholder: "Email",
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required(), vue_cjs_prod.unref(_unimport_useFormValidator).email()]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_g_submit_button, {
                    loading: vue_cjs_prod.unref(authStore).sendEmailPasswordResetLoading,
                    disabled: !valid.value
                  }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Send Password Reset Email `);
                      } else {
                        return [
                          vue_cjs_prod.createTextVNode("Send Password Reset Email ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_v_text_field, {
                      modelValue: payload.email,
                      "onUpdate:modelValue": ($event) => payload.email = $event,
                      placeholder: "Email",
                      rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required(), vue_cjs_prod.unref(_unimport_useFormValidator).email()]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                    vue_cjs_prod.createVNode(_component_g_submit_button, {
                      loading: vue_cjs_prod.unref(authStore).sendEmailPasswordResetLoading,
                      disabled: !valid.value
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode("Send Password Reset Email ")
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
              vue_cjs_prod.createVNode(_component_g_api_error, {
                error: vue_cjs_prod.unref(authStore).sendEmailPasswordResetError
              }, null, 8, ["error"]),
              vue_cjs_prod.createVNode(_component_v_form, {
                onSubmit: vue_cjs_prod.withModifiers(($event) => vue_cjs_prod.unref(authStore).sendPasswordResetEmail(payload), ["prevent"]),
                ref_key: "form",
                ref: form,
                modelValue: valid.value,
                "onUpdate:modelValue": ($event) => valid.value = $event
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_v_text_field, {
                    modelValue: payload.email,
                    "onUpdate:modelValue": ($event) => payload.email = $event,
                    placeholder: "Email",
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required(), vue_cjs_prod.unref(_unimport_useFormValidator).email()]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                  vue_cjs_prod.createVNode(_component_g_submit_button, {
                    loading: vue_cjs_prod.unref(authStore).sendEmailPasswordResetLoading,
                    disabled: !valid.value
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode("Send Password Reset Email ")
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ]),
                _: 1
              }, 8, ["onSubmit", "modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/password_reset/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
