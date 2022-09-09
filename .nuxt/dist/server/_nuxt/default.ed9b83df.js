import { v as vue_cjs_prod, l as useDisplay, f as useRouter, j as useNuxtApp, t as useSnackbarStore, x as useDialogStore, J as useProvideUserList, K as useProvideSellerSpecialtyList, L as useProvideCollectionList, M as useProvideSellerList, N as useProvideNotificationList, z as useAppStateStore, e as useAuthStore, C as __nuxt_component_2 } from "../server.mjs";
import "destr";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "@vue/server-renderer";
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
const _sfc_main$4 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = vue_cjs_prod.ref(false);
    const group = vue_cjs_prod.ref(null);
    const items = vue_cjs_prod.reactive([
      {
        title: "Home",
        value: "/",
        icon: "mdi-home"
      },
      {
        title: "Collections",
        value: "/collections",
        icon: "mdi-feed"
      },
      {
        title: "Artists",
        value: "/artists",
        icon: "mdi-feed"
      }
    ]);
    vue_cjs_prod.watch(group, (currentValue, oldValue) => {
      drawer.value = false;
    });
    const { smAndUp } = useDisplay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = vue_cjs_prod.resolveComponent("v-app-bar");
      const _component_v_app_bar_nav_icon = vue_cjs_prod.resolveComponent("v-app-bar-nav-icon");
      const _component_v_spacer = vue_cjs_prod.resolveComponent("v-spacer");
      const _component_v_img = vue_cjs_prod.resolveComponent("v-img");
      const _component_v_btn = vue_cjs_prod.resolveComponent("v-btn");
      const _component_v_navigation_drawer = vue_cjs_prod.resolveComponent("v-navigation-drawer");
      const _component_v_list = vue_cjs_prod.resolveComponent("v-list");
      const _component_v_list_item = vue_cjs_prod.resolveComponent("v-list-item");
      const _component_v_icon = vue_cjs_prod.resolveComponent("v-icon");
      const _component_v_list_item_title = vue_cjs_prod.resolveComponent("v-list-item-title");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_app_bar, {
        color: "background",
        prominent: "",
        app: ""
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar_nav_icon, {
              variant: "text",
              onClick: ($event) => drawer.value = !drawer.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_spacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_img, {
              onClick: ($event) => vue_cjs_prod.unref(useRouter)().push("/"),
              style: { "cursor": "pointer" },
              src: "/images/logo_transparent.png",
              class: "text-center mx-auto",
              height: vue_cjs_prod.unref(smAndUp) ? "50" : "35"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_spacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              variant: "text",
              icon: "mdi-magnify"
            }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_v_app_bar_nav_icon, {
                variant: "text",
                onClick: vue_cjs_prod.withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
              }, null, 8, ["onClick"]),
              vue_cjs_prod.createVNode(_component_v_spacer),
              vue_cjs_prod.createVNode(_component_v_img, {
                onClick: ($event) => vue_cjs_prod.unref(useRouter)().push("/"),
                style: { "cursor": "pointer" },
                src: "/images/logo_transparent.png",
                class: "text-center mx-auto",
                height: vue_cjs_prod.unref(smAndUp) ? "50" : "35"
              }, null, 8, ["onClick", "height"]),
              vue_cjs_prod.createVNode(_component_v_spacer),
              vue_cjs_prod.createVNode(_component_v_btn, {
                variant: "text",
                icon: "mdi-magnify"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_navigation_drawer, {
        modelValue: drawer.value,
        "onUpdate:modelValue": ($event) => drawer.value = $event,
        bottom: "",
        temporary: "",
        color: "background"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list, { style: { "background": "transparent" } }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (item, i) => {
                    _push3(ssrRenderComponent(_component_v_list_item, {
                      key: i,
                      to: item.value,
                      "active-color": "secondary"
                    }, {
                      prepend: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_icon, {
                            icon: item.icon
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vue_cjs_prod.createVNode(_component_v_icon, {
                              icon: item.icon
                            }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_list_item_title, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vue_cjs_prod.createVNode(_component_v_list_item_title, {
                              textContent: vue_cjs_prod.toDisplayString(item.title)
                            }, null, 8, ["textContent"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(items, (item, i) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_list_item, {
                        key: i,
                        to: item.value,
                        "active-color": "secondary"
                      }, {
                        prepend: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode(_component_v_icon, {
                            icon: item.icon
                          }, null, 8, ["icon"])
                        ]),
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode(_component_v_list_item_title, {
                            textContent: vue_cjs_prod.toDisplayString(item.title)
                          }, null, 8, ["textContent"])
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_v_list, { style: { "background": "transparent" } }, {
                default: vue_cjs_prod.withCtx(() => [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(items, (item, i) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_list_item, {
                      key: i,
                      to: item.value,
                      "active-color": "secondary"
                    }, {
                      prepend: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_v_icon, {
                          icon: item.icon
                        }, null, 8, ["icon"])
                      ]),
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_v_list_item_title, {
                          textContent: vue_cjs_prod.toDisplayString(item.title)
                        }, null, 8, ["textContent"])
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Nav.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = vue_cjs_prod.defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: String,
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:start", indicator.start);
    nuxtApp.hook("page:finish", indicator.finish);
    return () => vue_cjs_prod.h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: `${indicator.progress.value}%`,
        height: `${props.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props.color,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transition: "width 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    });
  }
});
function useLoadingIndicator(opts) {
  const progress = vue_cjs_prod.ref(0);
  const isLoading = vue_cjs_prod.ref(false);
  vue_cjs_prod.computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    isLoading.value = true;
    if (opts.throttle)
      ;
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}
const _sfc_main$3 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Snackbar",
  __ssrInlineRender: true,
  setup(__props) {
    const showSnackbar = vue_cjs_prod.ref(false);
    const snackbarStore = useSnackbarStore();
    snackbarStore.$subscribe((mutation, state) => {
      if (state.data.value)
        showSnackbar.value = true;
    });
    vue_cjs_prod.watch(showSnackbar, () => {
      if (!showSnackbar.value)
        snackbarStore.clear();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_snackbar = vue_cjs_prod.resolveComponent("v-snackbar");
      const _component_v_btn = vue_cjs_prod.resolveComponent("v-btn");
      const _component_v_icon = vue_cjs_prod.resolveComponent("v-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_snackbar, {
        modelValue: showSnackbar.value,
        "onUpdate:modelValue": ($event) => showSnackbar.value = $event,
        color: vue_cjs_prod.unref(snackbarStore).data.color,
        timeout: vue_cjs_prod.unref(snackbarStore).data.timeout,
        variant: vue_cjs_prod.unref(snackbarStore).data.variant
      }, vue_cjs_prod.createSlots({
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass({ "text-center": !vue_cjs_prod.unref(snackbarStore).data.dismissable })}"${_scopeId}>${ssrInterpolate(vue_cjs_prod.unref(snackbarStore).data.text)}</div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", {
                class: { "text-center": !vue_cjs_prod.unref(snackbarStore).data.dismissable }
              }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(snackbarStore).data.text), 3)
            ];
          }
        }),
        _: 2
      }, [
        vue_cjs_prod.unref(snackbarStore).data.dismissable ? {
          name: "actions",
          fn: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_btn, {
                icon: "",
                variant: "text",
                onClick: ($event) => showSnackbar.value = false,
                color: vue_cjs_prod.unref(snackbarStore).data.color
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_icon, {
                      icon: "mdi-close",
                      color: vue_cjs_prod.unref(snackbarStore).data.color
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vue_cjs_prod.createVNode(_component_v_icon, {
                        icon: "mdi-close",
                        color: vue_cjs_prod.unref(snackbarStore).data.color
                      }, null, 8, ["color"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                vue_cjs_prod.createVNode(_component_v_btn, {
                  icon: "",
                  variant: "text",
                  onClick: ($event) => showSnackbar.value = false,
                  color: vue_cjs_prod.unref(snackbarStore).data.color
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createVNode(_component_v_icon, {
                      icon: "mdi-close",
                      color: vue_cjs_prod.unref(snackbarStore).data.color
                    }, null, 8, ["color"])
                  ]),
                  _: 1
                }, 8, ["onClick", "color"])
              ];
            }
          })
        } : void 0
      ]), _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Snackbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Dialog",
  __ssrInlineRender: true,
  setup(__props) {
    const showDialog = vue_cjs_prod.ref(false);
    const dialogStore = useDialogStore();
    const onOk = () => {
      if (dialogStore.data.onOk)
        dialogStore.data.onOk();
      showDialog.value = false;
    };
    const onCancel = () => {
      if (dialogStore.data.onCancel)
        dialogStore.data.onCancel();
      showDialog.value = false;
    };
    dialogStore.$subscribe((mutation, state) => {
      if (state.data.value)
        showDialog.value = true;
    });
    vue_cjs_prod.watch(showDialog, () => {
      if (!showDialog.value)
        dialogStore.clear();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_v_dialog = vue_cjs_prod.resolveComponent("v-dialog");
      const _component_v_card = vue_cjs_prod.resolveComponent("v-card");
      const _component_v_card_title = vue_cjs_prod.resolveComponent("v-card-title");
      const _component_v_card_subtitle = vue_cjs_prod.resolveComponent("v-card-subtitle");
      const _component_v_card_text = vue_cjs_prod.resolveComponent("v-card-text");
      const _component_v_card_actions = vue_cjs_prod.resolveComponent("v-card-actions");
      const _component_v_spacer = vue_cjs_prod.resolveComponent("v-spacer");
      const _component_v_btn = vue_cjs_prod.resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: showDialog.value,
        "onUpdate:modelValue": ($event) => showDialog.value = $event,
        scrollable: (_a = vue_cjs_prod.unref(dialogStore).data.scrollable) != null ? _a : true,
        "max-height": (_b = vue_cjs_prod.unref(dialogStore).data.maxHeight) != null ? _b : 400,
        "max-width": (_c = vue_cjs_prod.unref(dialogStore).data.maxWidth) != null ? _c : 500
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (vue_cjs_prod.unref(dialogStore).data.title) {
                    _push3(ssrRenderComponent(_component_v_card_title, { class: "text-center" }, {
                      default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(vue_cjs_prod.unref(dialogStore).data.title)}`);
                        } else {
                          return [
                            vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(dialogStore).data.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (vue_cjs_prod.unref(dialogStore).data.subtitle) {
                    _push3(ssrRenderComponent(_component_v_card_subtitle, { class: "text-center" }, {
                      default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(vue_cjs_prod.unref(dialogStore).data.subtitle)}`);
                        } else {
                          return [
                            vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(dialogStore).data.subtitle), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(vue_cjs_prod.unref(dialogStore).data.text)}`);
                      } else {
                        return [
                          vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(dialogStore).data.text), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (vue_cjs_prod.unref(dialogStore).data.onOk || vue_cjs_prod.unref(dialogStore).data.onCancel) {
                    _push3(ssrRenderComponent(_component_v_card_actions, null, {
                      default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_spacer, null, null, _parent4, _scopeId3));
                          if (vue_cjs_prod.unref(dialogStore).data.onCancel !== null) {
                            _push4(ssrRenderComponent(_component_v_btn, {
                              color: "warning",
                              onClick: onCancel
                            }, {
                              default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a2, _b2;
                                if (_push5) {
                                  _push5(`${ssrInterpolate((_a2 = vue_cjs_prod.unref(dialogStore).data.cancelText) != null ? _a2 : "Cancel")}`);
                                } else {
                                  return [
                                    vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString((_b2 = vue_cjs_prod.unref(dialogStore).data.cancelText) != null ? _b2 : "Cancel"), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (vue_cjs_prod.unref(dialogStore).data.onOk) {
                            _push4(ssrRenderComponent(_component_v_btn, {
                              color: "primary",
                              onClick: onOk
                            }, {
                              default: vue_cjs_prod.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a2, _b2;
                                if (_push5) {
                                  _push5(`${ssrInterpolate((_a2 = vue_cjs_prod.unref(dialogStore).data.okText) != null ? _a2 : "Ok")}`);
                                } else {
                                  return [
                                    vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString((_b2 = vue_cjs_prod.unref(dialogStore).data.okText) != null ? _b2 : "Ok"), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            vue_cjs_prod.createVNode(_component_v_spacer),
                            vue_cjs_prod.unref(dialogStore).data.onCancel !== null ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_btn, {
                              key: 0,
                              color: "warning",
                              onClick: onCancel
                            }, {
                              default: vue_cjs_prod.withCtx(() => {
                                var _a2;
                                return [
                                  vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString((_a2 = vue_cjs_prod.unref(dialogStore).data.cancelText) != null ? _a2 : "Cancel"), 1)
                                ];
                              }),
                              _: 1
                            })) : vue_cjs_prod.createCommentVNode("", true),
                            vue_cjs_prod.unref(dialogStore).data.onOk ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_btn, {
                              key: 1,
                              color: "primary",
                              onClick: onOk
                            }, {
                              default: vue_cjs_prod.withCtx(() => {
                                var _a2;
                                return [
                                  vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString((_a2 = vue_cjs_prod.unref(dialogStore).data.okText) != null ? _a2 : "Ok"), 1)
                                ];
                              }),
                              _: 1
                            })) : vue_cjs_prod.createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    vue_cjs_prod.unref(dialogStore).data.title ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_card_title, {
                      key: 0,
                      class: "text-center"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(dialogStore).data.title), 1)
                      ]),
                      _: 1
                    })) : vue_cjs_prod.createCommentVNode("", true),
                    vue_cjs_prod.unref(dialogStore).data.subtitle ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_card_subtitle, {
                      key: 1,
                      class: "text-center"
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(dialogStore).data.subtitle), 1)
                      ]),
                      _: 1
                    })) : vue_cjs_prod.createCommentVNode("", true),
                    vue_cjs_prod.createVNode(_component_v_card_text, null, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(dialogStore).data.text), 1)
                      ]),
                      _: 1
                    }),
                    vue_cjs_prod.unref(dialogStore).data.onOk || vue_cjs_prod.unref(dialogStore).data.onCancel ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_card_actions, { key: 2 }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_v_spacer),
                        vue_cjs_prod.unref(dialogStore).data.onCancel !== null ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_btn, {
                          key: 0,
                          color: "warning",
                          onClick: onCancel
                        }, {
                          default: vue_cjs_prod.withCtx(() => {
                            var _a2;
                            return [
                              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString((_a2 = vue_cjs_prod.unref(dialogStore).data.cancelText) != null ? _a2 : "Cancel"), 1)
                            ];
                          }),
                          _: 1
                        })) : vue_cjs_prod.createCommentVNode("", true),
                        vue_cjs_prod.unref(dialogStore).data.onOk ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_btn, {
                          key: 1,
                          color: "primary",
                          onClick: onOk
                        }, {
                          default: vue_cjs_prod.withCtx(() => {
                            var _a2;
                            return [
                              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString((_a2 = vue_cjs_prod.unref(dialogStore).data.okText) != null ? _a2 : "Ok"), 1)
                            ];
                          }),
                          _: 1
                        })) : vue_cjs_prod.createCommentVNode("", true)
                      ]),
                      _: 1
                    })) : vue_cjs_prod.createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_v_card, null, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.unref(dialogStore).data.title ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_card_title, {
                    key: 0,
                    class: "text-center"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(dialogStore).data.title), 1)
                    ]),
                    _: 1
                  })) : vue_cjs_prod.createCommentVNode("", true),
                  vue_cjs_prod.unref(dialogStore).data.subtitle ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_card_subtitle, {
                    key: 1,
                    class: "text-center"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(dialogStore).data.subtitle), 1)
                    ]),
                    _: 1
                  })) : vue_cjs_prod.createCommentVNode("", true),
                  vue_cjs_prod.createVNode(_component_v_card_text, null, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(dialogStore).data.text), 1)
                    ]),
                    _: 1
                  }),
                  vue_cjs_prod.unref(dialogStore).data.onOk || vue_cjs_prod.unref(dialogStore).data.onCancel ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_card_actions, { key: 2 }, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_v_spacer),
                      vue_cjs_prod.unref(dialogStore).data.onCancel !== null ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_btn, {
                        key: 0,
                        color: "warning",
                        onClick: onCancel
                      }, {
                        default: vue_cjs_prod.withCtx(() => {
                          var _a2;
                          return [
                            vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString((_a2 = vue_cjs_prod.unref(dialogStore).data.cancelText) != null ? _a2 : "Cancel"), 1)
                          ];
                        }),
                        _: 1
                      })) : vue_cjs_prod.createCommentVNode("", true),
                      vue_cjs_prod.unref(dialogStore).data.onOk ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_btn, {
                        key: 1,
                        color: "primary",
                        onClick: onOk
                      }, {
                        default: vue_cjs_prod.withCtx(() => {
                          var _a2;
                          return [
                            vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString((_a2 = vue_cjs_prod.unref(dialogStore).data.okText) != null ? _a2 : "Ok"), 1)
                          ];
                        }),
                        _: 1
                      })) : vue_cjs_prod.createCommentVNode("", true)
                    ]),
                    _: 1
                  })) : vue_cjs_prod.createCommentVNode("", true)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Dialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const icons = vue_cjs_prod.ref([
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_footer = vue_cjs_prod.resolveComponent("v-footer");
      const _component_v_btn = vue_cjs_prod.resolveComponent("v-btn");
      const _component_v_divider = vue_cjs_prod.resolveComponent("v-divider");
      _push(ssrRenderComponent(_component_v_footer, vue_cjs_prod.mergeProps({
        color: "background",
        class: "text-white text-center d-flex flex-column"
      }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><!--[-->`);
            ssrRenderList(icons.value, (icon) => {
              _push2(ssrRenderComponent(_component_v_btn, {
                key: icon,
                class: "mx-4 text-white",
                icon,
                variant: "text"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="text-white pt-0"${_scopeId}> Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </div>`);
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(`<div class="text-white"${_scopeId}>${ssrInterpolate(new Date().getFullYear())} \u2014 <strong${_scopeId}>Vuetify</strong></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", null, [
                (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(icons.value, (icon) => {
                  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_v_btn, {
                    key: icon,
                    class: "mx-4 text-white",
                    icon,
                    variant: "text"
                  }, null, 8, ["icon"]);
                }), 128))
              ]),
              vue_cjs_prod.createVNode("div", { class: "text-white pt-0" }, " Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "),
              vue_cjs_prod.createVNode(_component_v_divider),
              vue_cjs_prod.createVNode("div", { class: "text-white" }, [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(new Date().getFullYear()) + " \u2014 ", 1),
                vue_cjs_prod.createVNode("strong", null, "Vuetify")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useProvideUserList();
    const sellerSpecialtyProvider = useProvideSellerSpecialtyList();
    useProvideCollectionList();
    useProvideSellerList();
    useProvideNotificationList();
    [__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAppStateStore().init()), await __temp, __restore();
    [__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAuthStore().init()), await __temp, __restore();
    [__temp, __restore] = vue_cjs_prod.withAsyncContext(() => sellerSpecialtyProvider.list()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = vue_cjs_prod.resolveComponent("v-app");
      const _component_layout_nav = _sfc_main$4;
      const _component_nuxt_loading_indicator = __nuxt_component_1;
      const _component_v_main = vue_cjs_prod.resolveComponent("v-main");
      const _component_client_only = __nuxt_component_2;
      const _component_layout_snackbar = _sfc_main$3;
      const _component_layout_dialog = _sfc_main$2;
      const _component_layout_footer = _sfc_main$1;
      _push(ssrRenderComponent(_component_v_app, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_layout_nav, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_loading_indicator, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_main, null, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(_component_client_only, null, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_layout_snackbar, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_layout_dialog, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vue_cjs_prod.createVNode(_component_layout_snackbar),
                          vue_cjs_prod.createVNode(_component_layout_dialog)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.renderSlot(_ctx.$slots, "default"),
                    vue_cjs_prod.createVNode(_component_client_only, null, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_layout_snackbar),
                        vue_cjs_prod.createVNode(_component_layout_dialog)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_layout_footer, {
              app: "",
              bottom: "",
              absolute: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_layout_nav),
              vue_cjs_prod.createVNode(_component_nuxt_loading_indicator),
              vue_cjs_prod.createVNode(_component_v_main, null, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.renderSlot(_ctx.$slots, "default"),
                  vue_cjs_prod.createVNode(_component_client_only, null, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode(_component_layout_snackbar),
                      vue_cjs_prod.createVNode(_component_layout_dialog)
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }),
              vue_cjs_prod.createVNode(_component_layout_footer, {
                app: "",
                bottom: "",
                absolute: ""
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
