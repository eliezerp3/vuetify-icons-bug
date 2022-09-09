import { v as vue_cjs_prod, q as useInjectCollectionList, s as _sfc_main$1 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "@vue/server-renderer";
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
    const collectionListProvider = useInjectCollectionList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_collection_list = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-center w-50 mx-auto py-8"><h1 class="font-weight-medium">SHOP ALL ART</h1><div class="text-subtitle-2 font-weight-light"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente deleniti atque nesciunt vitae soluta. Eveniet unde labore pariatur quidem ipsam numquam at ipsum quae? Dolorem accusamus laboriosam quos aliquid! </div></div>`);
      _push(ssrRenderComponent(_component_collection_list, {
        "list-function": () => vue_cjs_prod.unref(collectionListProvider).list()
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
