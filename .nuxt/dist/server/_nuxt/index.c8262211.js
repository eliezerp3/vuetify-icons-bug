import { v as vue_cjs_prod, d as useRoute, e as useAuthStore, g as __nuxt_component_0, h as _sfc_main$1 } from "../server.mjs";
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
    const route = useRoute();
    const form = vue_cjs_prod.ref();
    const valid = vue_cjs_prod.ref();
    const payload = vue_cjs_prod.reactive({
      uid: route.params.uid,
      token: route.params.token,
      newPassword1: "",
      newPassword2: ""
    });
    const authStore = useAuthStore();
    vue_cjs_prod.watch(() => payload.newPassword1, (oldValue, newValue) => form.value.validate());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_g_api_error = __nuxt_component_0;
      const _component_v_form = vue_cjs_prod.resolveComponent("v-form");
      const _component_v_text_field = vue_cjs_prod.resolveComponent("v-text-field");
      const _component_g_submit_button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_g_api_error, {
        error: vue_cjs_prod.unref(authStore).resetPasswordError
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_form, {
        onSubmit: ($event) => vue_cjs_prod.unref(authStore).resetPassword(payload),
        ref_key: "form",
        ref: form,
        modelValue: valid.value,
        "onUpdate:modelValue": ($event) => valid.value = $event
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_text_field, {
              type: "password",
              modelValue: payload.newPassword1,
              "onUpdate:modelValue": ($event) => payload.newPassword1 = $event,
              placeholder: "New Password",
              rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_text_field, {
              type: "password",
              modelValue: payload.newPassword2,
              "onUpdate:modelValue": ($event) => payload.newPassword2 = $event,
              placeholder: "Confirm New Password",
              rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required(), vue_cjs_prod.unref(_unimport_useFormValidator).equals(payload.newPassword1, "Password fields do not match")]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_g_submit_button, {
              loading: vue_cjs_prod.unref(authStore).resetPasswordLoading,
              disabled: !valid.value
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Reset Password `);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode("Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_v_text_field, {
                type: "password",
                modelValue: payload.newPassword1,
                "onUpdate:modelValue": ($event) => payload.newPassword1 = $event,
                placeholder: "New Password",
                rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
              vue_cjs_prod.createVNode(_component_v_text_field, {
                type: "password",
                modelValue: payload.newPassword2,
                "onUpdate:modelValue": ($event) => payload.newPassword2 = $event,
                placeholder: "Confirm New Password",
                rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required(), vue_cjs_prod.unref(_unimport_useFormValidator).equals(payload.newPassword1, "Password fields do not match")]
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
              vue_cjs_prod.createVNode(_component_g_submit_button, {
                loading: vue_cjs_prod.unref(authStore).resetPasswordLoading,
                disabled: !valid.value
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode("Reset Password ")
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/password_reset/[uid]/[token]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
