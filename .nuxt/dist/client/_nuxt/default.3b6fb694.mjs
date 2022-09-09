import{a as C,B as y,k as U,K as B,R as I,r as a,o as r,b as $,e as n,w as s,E as z,u as o,z as F,F as D,A as O,c as g,t as x,L as E,a6 as H,a7 as M,H as q,Y as R,a8 as Y,x as L,T as J,Z as K,f as w,y as V,q as P,$ as W,D as Z,J as j,a1 as G}from"./entry.4f650c1e.mjs";import{l as Q,m as X,n as tt,o as et,p as at}from"./index.ad84256c.mjs";const nt=C({__name:"Nav",setup(c){const e=y(!1),t=y(null),m=U([{title:"Home",value:"/",icon:"mdi-home"},{title:"Collections",value:"/collections",icon:"mdi-feed"},{title:"Artists",value:"/artists",icon:"mdi-feed"}]);B(t,(_,l)=>{e.value=!1});const{smAndUp:i}=I();return(_,l)=>{const d=a("v-app-bar-nav-icon"),u=a("v-spacer"),h=a("v-img"),b=a("v-btn"),p=a("v-app-bar"),k=a("v-icon"),S=a("v-list-item-title"),A=a("v-list-item"),N=a("v-list"),T=a("v-navigation-drawer");return r(),$(D,null,[n(p,{color:"background",prominent:"",app:""},{default:s(()=>[n(d,{variant:"text",onClick:l[0]||(l[0]=z(v=>e.value=!e.value,["stop"]))}),n(u),n(h,{onClick:l[1]||(l[1]=v=>o(F)().push("/")),style:{cursor:"pointer"},src:"/images/logo_transparent.png",class:"text-center mx-auto",height:o(i)?"50":"35"},null,8,["height"]),n(u),n(b,{variant:"text",icon:"mdi-magnify"})]),_:1}),n(T,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=v=>e.value=v),bottom:"",temporary:"",color:"background"},{default:s(()=>[n(N,{style:{background:"transparent"}},{default:s(()=>[(r(!0),$(D,null,O(m,(v,f)=>(r(),g(A,{key:f,to:v.value,"active-color":"secondary"},{prepend:s(()=>[n(k,{icon:v.icon},null,8,["icon"])]),default:s(()=>[n(S,{textContent:x(v.title)},null,8,["textContent"])]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["modelValue"])],64)}}}),ot=C({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(c){const e=lt({duration:c.duration,throttle:c.throttle}),t=E();return t.hook("page:start",e.start),t.hook("page:finish",e.finish),H(()=>e.clear),()=>M("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${e.progress.value}%`,height:`${c.height}px`,opacity:e.isLoading.value?1:0,background:c.color,backgroundSize:`${100/e.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function lt(c){const e=y(0),t=y(!1),m=q(()=>1e4/c.duration);let i=null,_=null;function l(){u(),e.value=0,t.value=!0,c.throttle?_=setTimeout(p,c.throttle):p()}function d(){e.value=100,b()}function u(){clearInterval(i),clearTimeout(_),i=null,_=null}function h(k){e.value=Math.min(100,e.value+k)}function b(){u(),setTimeout(()=>{t.value=!1,setTimeout(()=>{e.value=0},400)},500)}function p(){i=setInterval(()=>{h(m.value)},100)}return{progress:e,isLoading:t,start:l,finish:d,clear:u}}const st=C({__name:"Snackbar",setup(c){const e=y(!1),t=R();return t.$subscribe((m,i)=>{i.data.value&&(e.value=!0)}),B(e,()=>{e.value||t.clear()}),(m,i)=>{const _=a("v-icon"),l=a("v-btn"),d=a("v-snackbar");return r(),$("div",null,[n(d,{modelValue:e.value,"onUpdate:modelValue":i[1]||(i[1]=u=>e.value=u),color:o(t).data.color,timeout:o(t).data.timeout,variant:o(t).data.variant},Y({default:s(()=>[L("div",{class:J({"text-center":!o(t).data.dismissable})},x(o(t).data.text),3)]),_:2},[o(t).data.dismissable?{name:"actions",fn:s(()=>[n(l,{icon:"",variant:"text",onClick:i[0]||(i[0]=u=>e.value=!1),color:o(t).data.color},{default:s(()=>[n(_,{icon:"mdi-close",color:o(t).data.color},null,8,["color"])]),_:1},8,["color"])])}:void 0]),1032,["modelValue","color","timeout","variant"])])}}}),it={class:"text-center"},rt=C({__name:"Dialog",setup(c){const e=y(!1),t=K(),m=()=>{t.data.onOk&&t.data.onOk(),e.value=!1},i=()=>{t.data.onCancel&&t.data.onCancel(),e.value=!1};return t.$subscribe((_,l)=>{l.data.value&&(e.value=!0)}),B(e,()=>{e.value||t.clear()}),(_,l)=>{var N,T,v;const d=a("v-card-title"),u=a("v-card-subtitle"),h=a("v-card-text"),b=a("v-spacer"),p=a("v-btn"),k=a("v-card-actions"),S=a("v-card"),A=a("v-dialog");return r(),$("div",it,[n(A,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=f=>e.value=f),scrollable:(N=o(t).data.scrollable)!=null?N:!0,"max-height":(T=o(t).data.maxHeight)!=null?T:400,"max-width":(v=o(t).data.maxWidth)!=null?v:500},{default:s(()=>[n(S,null,{default:s(()=>[o(t).data.title?(r(),g(d,{key:0,class:"text-center"},{default:s(()=>[w(x(o(t).data.title),1)]),_:1})):V("",!0),o(t).data.subtitle?(r(),g(u,{key:1,class:"text-center"},{default:s(()=>[w(x(o(t).data.subtitle),1)]),_:1})):V("",!0),n(h,null,{default:s(()=>[w(x(o(t).data.text),1)]),_:1}),o(t).data.onOk||o(t).data.onCancel?(r(),g(k,{key:2},{default:s(()=>[n(b),o(t).data.onCancel!==null?(r(),g(p,{key:0,color:"warning",onClick:i},{default:s(()=>{var f;return[w(x((f=o(t).data.cancelText)!=null?f:"Cancel"),1)]}),_:1})):V("",!0),o(t).data.onOk?(r(),g(p,{key:1,color:"primary",onClick:m},{default:s(()=>{var f;return[w(x((f=o(t).data.okText)!=null?f:"Ok"),1)]}),_:1})):V("",!0)]),_:1})):V("",!0)]),_:1})]),_:1},8,["modelValue","scrollable","max-height","max-width"])])}}}),ct=L("div",{class:"text-white pt-0"}," Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",-1),ut={class:"text-white"},_t=L("strong",null,"Vuetify",-1),dt=C({__name:"Footer",setup(c){const e=y(["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]);return(t,m)=>{const i=a("v-btn"),_=a("v-divider"),l=a("v-footer");return r(),g(l,{color:"background",class:"text-white text-center d-flex flex-column"},{default:s(()=>[L("div",null,[(r(!0),$(D,null,O(e.value,d=>(r(),g(i,{key:d,class:"mx-4 text-white",icon:d,variant:"text"},null,8,["icon"]))),128))]),ct,n(_),L("div",ut,[w(x(new Date().getFullYear())+" \u2014 ",1),_t])]),_:1})}}}),pt=C({__name:"default",async setup(c){let e,t;Q();const m=X();return tt(),et(),at(),[e,t]=P(()=>W().init()),await e,t(),[e,t]=P(()=>Z().init()),await e,t(),[e,t]=P(()=>m.list()),await e,t(),(i,_)=>{const l=nt,d=ot,u=st,h=rt,b=G,p=a("v-main"),k=dt,S=a("v-app");return r(),g(S,null,{default:s(()=>[n(l),n(d),n(p,null,{default:s(()=>[j(i.$slots,"default"),n(b,null,{default:s(()=>[n(u),n(h)]),_:1})]),_:3}),n(k,{app:"",bottom:"",absolute:""})]),_:3})}}});export{pt as default};
