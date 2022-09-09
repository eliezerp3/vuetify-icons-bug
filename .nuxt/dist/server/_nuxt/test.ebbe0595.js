import { v as vue_cjs_prod, z as useAppStateStore, e as useAuthStore, A as useApi, B as useProvideOpenOrder, C as __nuxt_component_2 } from "../server.mjs";
import "destr";
import { ssrRenderComponent } from "@vue/server-renderer";
import { loadStripe } from "@stripe/stripe-js";
import { StripeElements, StripeElement } from "vue-stripe-js";
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
const _sfc_main = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "test",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const s = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => loadStripe(
      useAppStateStore().clientSettings.stripePublishableKey,
      {
        betas: ["process_order_beta_1"],
        apiVersion: "2020-08-27; orders_beta=v4"
      }
    )), __temp = await __temp, __restore(), __temp);
    vue_cjs_prod.ref(false);
    const paymentElements = vue_cjs_prod.ref();
    useAuthStore();
    const appStateStore = useAppStateStore();
    const openOrderId = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useApi.createCheckoutOrder("test-title-48197", {
      quantity: 1
    })), __temp = await __temp, __restore(), __temp);
    const openOrderProvider = useProvideOpenOrder();
    [__temp, __restore] = vue_cjs_prod.withAsyncContext(() => openOrderProvider.init(openOrderId)), await __temp, __restore();
    const instanceOptions = vue_cjs_prod.ref({
      wallets: "never"
    });
    const elementsOptions = vue_cjs_prod.reactive({
      clientSecret: openOrderProvider.data.ocs
    });
    const pay = async () => {
      const v = paymentElements.value;
      console.log(v.elements);
      try {
        const res = await s.processOrder({
          elements: v.elements,
          confirmParams: {
            return_url: "http://localhost:3001/order/123/status"
          }
        });
        console.log("RESULT");
        console.log(res);
      } catch (e) {
        console.log("ERROR");
        console.log(e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = vue_cjs_prod.resolveComponent("v-container");
      const _component_client_only = __nuxt_component_2;
      const _component_v_btn = vue_cjs_prod.resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_container, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_client_only, null, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(vue_cjs_prod.unref(StripeElements), {
                    ref_key: "paymentElements",
                    ref: paymentElements,
                    "stripe-key": vue_cjs_prod.unref(appStateStore).clientSettings.stripePublishableKey,
                    "instance-options": instanceOptions.value,
                    "elements-options": elementsOptions
                  }, {
                    default: vue_cjs_prod.withCtx(({ elements, instance }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(vue_cjs_prod.unref(StripeElement), {
                          ref: "payment",
                          type: "payment",
                          elements
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vue_cjs_prod.createVNode(vue_cjs_prod.unref(StripeElement), {
                            ref: "payment",
                            type: "payment",
                            elements
                          }, null, 8, ["elements"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, { onClick: pay }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Pay`);
                      } else {
                        return [
                          vue_cjs_prod.createTextVNode("Pay")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(vue_cjs_prod.unref(StripeElements), {
                      ref_key: "paymentElements",
                      ref: paymentElements,
                      "stripe-key": vue_cjs_prod.unref(appStateStore).clientSettings.stripePublishableKey,
                      "instance-options": instanceOptions.value,
                      "elements-options": elementsOptions
                    }, {
                      default: vue_cjs_prod.withCtx(({ elements, instance }) => [
                        vue_cjs_prod.createVNode(vue_cjs_prod.unref(StripeElement), {
                          ref: "payment",
                          type: "payment",
                          elements
                        }, null, 8, ["elements"])
                      ]),
                      _: 1
                    }, 8, ["stripe-key", "instance-options", "elements-options"]),
                    vue_cjs_prod.createVNode(_component_v_btn, { onClick: pay }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode("Pay")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_client_only, null, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(vue_cjs_prod.unref(StripeElements), {
                    ref_key: "paymentElements",
                    ref: paymentElements,
                    "stripe-key": vue_cjs_prod.unref(appStateStore).clientSettings.stripePublishableKey,
                    "instance-options": instanceOptions.value,
                    "elements-options": elementsOptions
                  }, {
                    default: vue_cjs_prod.withCtx(({ elements, instance }) => [
                      vue_cjs_prod.createVNode(vue_cjs_prod.unref(StripeElement), {
                        ref: "payment",
                        type: "payment",
                        elements
                      }, null, 8, ["elements"])
                    ]),
                    _: 1
                  }, 8, ["stripe-key", "instance-options", "elements-options"]),
                  vue_cjs_prod.createVNode(_component_v_btn, { onClick: pay }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode("Pay")
                    ]),
                    _: 1
                  })
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
