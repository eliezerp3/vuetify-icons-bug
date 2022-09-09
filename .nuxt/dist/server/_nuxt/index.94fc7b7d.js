import { v as vue_cjs_prod, e as useAuthStore, f as useRouter, g as __nuxt_component_0, h as _sfc_main$1, i as __nuxt_component_0$1 } from "../server.mjs";
import "destr";
import { _ as _unimport_useFormValidator } from "./formValidator.a0092439.js";
import { ssrRenderAttrs, ssrRenderComponent } from "@vue/server-renderer";
import Datepicker from "@vuepic/vue-datepicker";
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
import "is-mobile";
import "@stripe/stripe-js";
import "vue-stripe-js";
const main = "";
const _sfc_main = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const form = vue_cjs_prod.ref();
    const valid = vue_cjs_prod.ref();
    const payload = vue_cjs_prod.reactive({
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
      dateOfBirth: new Date()
    });
    const authStore = useAuthStore();
    const onSubmit = async () => {
      await authStore.register(payload);
      if (!authStore.registerError)
        await authStore.login({ username: payload.email, password: payload.password1 });
      if (!authStore.loginError)
        useRouter().replace("/");
    };
    vue_cjs_prod.watch(() => [payload.password1, payload.dateOfBirth], (oldValue, newValue) => form.value.validate());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = vue_cjs_prod.resolveComponent("v-form");
      const _component_v_container = vue_cjs_prod.resolveComponent("v-container");
      const _component_g_api_error = __nuxt_component_0;
      const _component_v_text_field = vue_cjs_prod.resolveComponent("v-text-field");
      const _component_v_input = vue_cjs_prod.resolveComponent("v-input");
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
                  _push3(ssrRenderComponent(_component_g_api_error, {
                    error: vue_cjs_prod.unref(authStore).registerError
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    label: "First Name",
                    modelValue: payload.firstName,
                    "onUpdate:modelValue": ($event) => payload.firstName = $event,
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    label: "Last Name",
                    modelValue: payload.lastName,
                    "onUpdate:modelValue": ($event) => payload.lastName = $event,
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    label: "Email",
                    modelValue: payload.email,
                    "onUpdate:modelValue": ($event) => payload.email = $event,
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required(), vue_cjs_prod.unref(_unimport_useFormValidator).email()]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    label: "Password",
                    modelValue: payload.password1,
                    "onUpdate:modelValue": ($event) => payload.password1 = $event,
                    type: "password",
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    label: "Confirm Password",
                    modelValue: payload.password2,
                    "onUpdate:modelValue": ($event) => payload.password2 = $event,
                    type: "password",
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required(), vue_cjs_prod.unref(_unimport_useFormValidator).equals(payload.password1, "Password fields do not match")]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_input, {
                    modelValue: payload.dateOfBirth,
                    "onUpdate:modelValue": ($event) => payload.dateOfBirth = $event,
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).dateYearsBefore(18, "Must be at least 18 years of age to create an account")]
                  }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(vue_cjs_prod.unref(Datepicker), {
                          modelValue: payload.dateOfBirth,
                          "onUpdate:modelValue": ($event) => payload.dateOfBirth = $event,
                          required: "",
                          maxDate: new Date(),
                          preventMinMaxNavigation: "",
                          enableTimePicker: false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vue_cjs_prod.createVNode(vue_cjs_prod.unref(Datepicker), {
                            modelValue: payload.dateOfBirth,
                            "onUpdate:modelValue": ($event) => payload.dateOfBirth = $event,
                            required: "",
                            maxDate: new Date(),
                            preventMinMaxNavigation: "",
                            enableTimePicker: false
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "maxDate"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_g_submit_button, {
                    loading: vue_cjs_prod.unref(authStore).loginLoading || vue_cjs_prod.unref(authStore).loginLoading,
                    disabled: !valid.value
                  }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Register`);
                      } else {
                        return [
                          vue_cjs_prod.createTextVNode(" Register")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_g_api_error, {
                      error: vue_cjs_prod.unref(authStore).registerError
                    }, null, 8, ["error"]),
                    vue_cjs_prod.createVNode(_component_v_text_field, {
                      label: "First Name",
                      modelValue: payload.firstName,
                      "onUpdate:modelValue": ($event) => payload.firstName = $event,
                      rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                    vue_cjs_prod.createVNode(_component_v_text_field, {
                      label: "Last Name",
                      modelValue: payload.lastName,
                      "onUpdate:modelValue": ($event) => payload.lastName = $event,
                      rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                    vue_cjs_prod.createVNode(_component_v_text_field, {
                      label: "Email",
                      modelValue: payload.email,
                      "onUpdate:modelValue": ($event) => payload.email = $event,
                      rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required(), vue_cjs_prod.unref(_unimport_useFormValidator).email()]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                    vue_cjs_prod.createVNode(_component_v_text_field, {
                      label: "Password",
                      modelValue: payload.password1,
                      "onUpdate:modelValue": ($event) => payload.password1 = $event,
                      type: "password",
                      rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                    vue_cjs_prod.createVNode(_component_v_text_field, {
                      label: "Confirm Password",
                      modelValue: payload.password2,
                      "onUpdate:modelValue": ($event) => payload.password2 = $event,
                      type: "password",
                      rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required(), vue_cjs_prod.unref(_unimport_useFormValidator).equals(payload.password1, "Password fields do not match")]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                    vue_cjs_prod.createVNode(_component_v_input, {
                      modelValue: payload.dateOfBirth,
                      "onUpdate:modelValue": ($event) => payload.dateOfBirth = $event,
                      rules: [vue_cjs_prod.unref(_unimport_useFormValidator).dateYearsBefore(18, "Must be at least 18 years of age to create an account")]
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(vue_cjs_prod.unref(Datepicker), {
                          modelValue: payload.dateOfBirth,
                          "onUpdate:modelValue": ($event) => payload.dateOfBirth = $event,
                          required: "",
                          maxDate: new Date(),
                          preventMinMaxNavigation: "",
                          enableTimePicker: false
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "maxDate"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                    vue_cjs_prod.createVNode(_component_g_submit_button, {
                      loading: vue_cjs_prod.unref(authStore).loginLoading || vue_cjs_prod.unref(authStore).loginLoading,
                      disabled: !valid.value
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(" Register")
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
                  vue_cjs_prod.createVNode(_component_g_api_error, {
                    error: vue_cjs_prod.unref(authStore).registerError
                  }, null, 8, ["error"]),
                  vue_cjs_prod.createVNode(_component_v_text_field, {
                    label: "First Name",
                    modelValue: payload.firstName,
                    "onUpdate:modelValue": ($event) => payload.firstName = $event,
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                  vue_cjs_prod.createVNode(_component_v_text_field, {
                    label: "Last Name",
                    modelValue: payload.lastName,
                    "onUpdate:modelValue": ($event) => payload.lastName = $event,
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                  vue_cjs_prod.createVNode(_component_v_text_field, {
                    label: "Email",
                    modelValue: payload.email,
                    "onUpdate:modelValue": ($event) => payload.email = $event,
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required(), vue_cjs_prod.unref(_unimport_useFormValidator).email()]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                  vue_cjs_prod.createVNode(_component_v_text_field, {
                    label: "Password",
                    modelValue: payload.password1,
                    "onUpdate:modelValue": ($event) => payload.password1 = $event,
                    type: "password",
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required()]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                  vue_cjs_prod.createVNode(_component_v_text_field, {
                    label: "Confirm Password",
                    modelValue: payload.password2,
                    "onUpdate:modelValue": ($event) => payload.password2 = $event,
                    type: "password",
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).required(), vue_cjs_prod.unref(_unimport_useFormValidator).equals(payload.password1, "Password fields do not match")]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                  vue_cjs_prod.createVNode(_component_v_input, {
                    modelValue: payload.dateOfBirth,
                    "onUpdate:modelValue": ($event) => payload.dateOfBirth = $event,
                    rules: [vue_cjs_prod.unref(_unimport_useFormValidator).dateYearsBefore(18, "Must be at least 18 years of age to create an account")]
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(Datepicker), {
                        modelValue: payload.dateOfBirth,
                        "onUpdate:modelValue": ($event) => payload.dateOfBirth = $event,
                        required: "",
                        maxDate: new Date(),
                        preventMinMaxNavigation: "",
                        enableTimePicker: false
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "maxDate"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                  vue_cjs_prod.createVNode(_component_g_submit_button, {
                    loading: vue_cjs_prod.unref(authStore).loginLoading || vue_cjs_prod.unref(authStore).loginLoading,
                    disabled: !valid.value
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode(" Register")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
