import { v as vue_cjs_prod, k as useInjectCollectionDetail, l as useDisplay, m as __nuxt_component_0, n as _sfc_main$1, o as _sfc_main$2, p as __nuxt_component_3 } from "../server.mjs";
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
    const collectionDetailProvider = useInjectCollectionDetail();
    const { mdAndUp } = useDisplay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = vue_cjs_prod.resolveComponent("Head");
      const _component_Title = vue_cjs_prod.resolveComponent("Title");
      const _component_Meta = vue_cjs_prod.resolveComponent("Meta");
      const _component_v_container = vue_cjs_prod.resolveComponent("v-container");
      const _component_v_row = vue_cjs_prod.resolveComponent("v-row");
      const _component_v_col = vue_cjs_prod.resolveComponent("v-col");
      const _component_collection_detail_image_gallery = __nuxt_component_0;
      const _component_collection_detail_info = _sfc_main$1;
      const _component_collection_detail_specs = _sfc_main$2;
      const _component_collection_detail_about_artist = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(vue_cjs_prod.unref(collectionDetailProvider).data.title)}`);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(collectionDetailProvider).data.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: vue_cjs_prod.unref(collectionDetailProvider).data.description
            }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_Title, null, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(collectionDetailProvider).data.title), 1)
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_Meta, {
                name: "description",
                content: vue_cjs_prod.unref(collectionDetailProvider).data.description
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_container, {
        fluid: "",
        class: "mb-6"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_collection_detail_image_gallery, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vue_cjs_prod.createVNode(_component_collection_detail_image_gallery)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_collection_detail_info, {
                          class: { "mt-12": vue_cjs_prod.unref(mdAndUp), "mt-3": !vue_cjs_prod.unref(mdAndUp) }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_collection_detail_specs, { class: "mt-10" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_collection_detail_about_artist, { class: "mt-10" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vue_cjs_prod.createVNode(_component_collection_detail_info, {
                            class: { "mt-12": vue_cjs_prod.unref(mdAndUp), "mt-3": !vue_cjs_prod.unref(mdAndUp) }
                          }, null, 8, ["class"]),
                          vue_cjs_prod.createVNode(_component_collection_detail_specs, { class: "mt-10" }),
                          vue_cjs_prod.createVNode(_component_collection_detail_about_artist, { class: "mt-10" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_v_col, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_collection_detail_image_gallery)
                      ]),
                      _: 1
                    }),
                    vue_cjs_prod.createVNode(_component_v_col, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_collection_detail_info, {
                          class: { "mt-12": vue_cjs_prod.unref(mdAndUp), "mt-3": !vue_cjs_prod.unref(mdAndUp) }
                        }, null, 8, ["class"]),
                        vue_cjs_prod.createVNode(_component_collection_detail_specs, { class: "mt-10" }),
                        vue_cjs_prod.createVNode(_component_collection_detail_about_artist, { class: "mt-10" })
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
              vue_cjs_prod.createVNode(_component_v_row, null, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_v_col, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_collection_detail_image_gallery)
                    ]),
                    _: 1
                  }),
                  vue_cjs_prod.createVNode(_component_v_col, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_collection_detail_info, {
                        class: { "mt-12": vue_cjs_prod.unref(mdAndUp), "mt-3": !vue_cjs_prod.unref(mdAndUp) }
                      }, null, 8, ["class"]),
                      vue_cjs_prod.createVNode(_component_collection_detail_specs, { class: "mt-10" }),
                      vue_cjs_prod.createVNode(_component_collection_detail_about_artist, { class: "mt-10" })
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/[uuid]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
