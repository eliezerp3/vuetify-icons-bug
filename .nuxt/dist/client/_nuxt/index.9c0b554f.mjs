import{b,u as f}from"./index.ad84256c.mjs";import{a as y,r as a,o,b as l,e,w as s,u as n,x as c,t as x,y as L,z as C,q as $,s as E,c as w,F as S,A as z}from"./entry.4f650c1e.mjs";const F={style:{background:"rgba(0, 0, 0, 0.7)"}},B={class:"font-weight-bold mt-1 text-caption max-lines-1"},I={key:0,class:"font-weight-bold",style:{"font-size":".6em",opacity:".5"}},A=c("div",null,"0",-1),N=c("div",{style:{"font-size":".5em"}},"Followers",-1),U=c("div",null,"0",-1),V=c("div",{style:{"font-size":".5em"}},"Collections",-1),D=y({__name:"index",props:{sellerProvider:null},setup(_){const t=b(_.sellerProvider),d=f(),r=()=>{d.chosen=t,C().push(`/artists/${t.data.author.username}`)};return(k,P)=>{const u=a("v-img"),p=a("v-avatar"),m=a("v-col"),v=a("v-row"),h=a("v-card-text"),g=a("v-card");return o(),l("div",null,[e(g,{"max-width":"smAndUp? '100%' : '200'","min-width":"100",color:"primary",class:"grow text-center",style:{cursor:"pointer"},rounded:"30",onClick:r},{default:s(()=>[e(u,{src:n(t).data.author.backgroundImageUrl,class:"h-100",cover:"",style:{}},{default:s(()=>[c("div",F,[e(p,{class:"mt-2",size:`${5}rem`},{default:s(()=>[e(u,{cover:"",src:n(t).data.author.imageUrl,class:"h-100"},null,8,["src"])]),_:1}),e(h,null,{default:s(()=>[c("h5",B,x(n(t).data.author.username),1),n(t).data.author?(o(),l("div",I,x(n(t).data.author.specialty.name),1)):L("",!0),e(v,{class:"mt-1"},{default:s(()=>[e(m,{cols:"6"},{default:s(()=>[A,N]),_:1}),e(m,{cols:"6"},{default:s(()=>[U,V]),_:1})]),_:1})]),_:1})])]),_:1},8,["src"])]),_:1})])}}}),j={key:0},q={key:1},G={key:2},R=y({__name:"index",props:{listFunction:null},async setup(_){let i,t;const d=_,r=f();return r.isEmpty&&([i,t]=$(()=>E.awaitIfServer(d.listFunction)),await i,t()),(k,P)=>{const u=D,p=a("v-col"),m=a("v-row"),v=a("v-container");return o(),l("div",null,[n(r).listLoading?(o(),l("h5",j)):n(r).listError?(o(),l("h5",q,"Error")):n(r).isEmpty?(o(),l("h5",G,"Empty")):(o(),w(v,{key:3,fluid:""},{default:s(()=>[e(m,null,{default:s(()=>[(o(!0),l(S,null,z(n(r).data,(h,g)=>(o(),w(p,{cols:"6",sm:"3",md:"2",lg:"2"},{default:s(()=>[e(u,{sellerProvider:h},null,8,["sellerProvider"])]),_:2},1024))),256))]),_:1})]),_:1}))])}}}),J=y({__name:"index",setup(_){const i=f();return(t,d)=>{const r=R;return o(),l("div",null,[e(r,{"list-function":()=>n(i).list()},null,8,["list-function"])])}}});export{J as default};