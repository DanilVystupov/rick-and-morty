import{n as N,u as S,r as V,q as w,o as _,c as l,a as e,t as h,s as o,b as k,w as x,d as p,v as A,F as z,x as B,y as P,z as b,p as E,e as F,A as $,_ as D}from"./entry.8b140191.js";import{_ as R}from"./nuxt-link.0ccc1ef4.js";import{u as T}from"./fetch.00f2d2ac.js";import{u as U}from"./characterStore.abd10271.js";const q=b(()=>$(()=>import("./Loader.8c51b132.js"),["./Loader.8c51b132.js","./entry.8b140191.js","./Loader.00b8ada3.css"],import.meta.url).then(t=>t.default||t)),u=t=>(E("data-v-2f6f6e04"),t=t(),F(),t),O={class:"episode-container"},Y={class:"episode-header"},Z={class:"episode-title"},j={class:"episode-details"},G={class:"episode-detail"},H=u(()=>e("strong",null,"Название эпизода:",-1)),J={class:"episode-detail"},K=u(()=>e("strong",null,"Дата премьеры:",-1)),M=u(()=>e("h2",{class:"character-heading"},"Персонажи, участвующие в эпизоде:",-1)),Q={key:0,class:"loader-container"},W={class:"character-images"},X=["src","alt"],ee=N({__name:"[id]",async setup(t){let c,m;const{id:f}=S().params,i=U();i.fetchAllCharacters();const C=V([]),I="https://rickandmortyapi.com/api/episode/"+f,{data:r}=([c,m]=w(()=>T(I,"$PZz7ihYpV9")),c=await c,m(),c),g=n=>{const s=n.split("/");return s[s.length-1]},L=n=>{const s=g(n),a=i.characters.find(d=>d.id===Number(s));return a?a.image:""};return C.value=r.characters,(n,s)=>{const a=R,d=q;return _(),l("div",O,[e("div",Y,[e("h1",Z,"Детальный просмотр эпизода #"+h(o(f)),1),k(a,{class:"back-link",to:"/"},{default:x(()=>[p("На главную")]),_:1})]),e("div",j,[e("div",G,[H,p(" "+h(o(r).name),1)]),e("div",J,[K,p(" "+h(o(r).air_date),1)])]),M,o(i).isLoading?(_(),l("div",Q,[k(d)])):A("",!0),e("div",W,[(_(!0),l(z,null,B(o(r).characters,(v,y)=>(_(),P(a,{to:`/character/${g(v)}`,key:y,class:"character-link"},{default:x(()=>[e("img",{src:L(v),alt:`Character ${y+1}`,class:"character-image"},null,8,X)]),_:2},1032,["to"]))),128))])])}}});const ce=D(ee,[["__scopeId","data-v-2f6f6e04"]]);export{ce as default};