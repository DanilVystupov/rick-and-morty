import{_ as i}from"./nuxt-link.15ee2a71.js";import{n as d,u as l,q as m,o as p,c as u,a as t,s,t as c,b as h,w as f,d as x,_ as g}from"./entry.dd6f531c.js";import{u as v}from"./fetch.fee0262a.js";const y={class:"card-container"},k={class:"card"},w={class:"card-image"},N=["src"],B={class:"card-content"},C=d({__name:"[id]",async setup(V){let a,o;const{id:_}=l().params,n="https://rickandmortyapi.com/api/character/"+_,{data:e}=([a,o]=m(()=>v(n,"$dil4T4m0hl")),a=await a,o(),a);return(T,b)=>{const r=i;return p(),u("div",y,[t("div",k,[t("div",w,[t("img",{class:"card-image__item",src:s(e).image,alt:"image character"},null,8,N)]),t("div",B,[t("h2",null,c(s(e).name)+" ("+c(s(e).species)+")",1),t("p",null,"Локация: "+c(s(e).location.name),1),h(r,{to:"/"},{default:f(()=>[x("Вернуться на главную")]),_:1})])])])}}});const E=g(C,[["__scopeId","data-v-d715a48d"]]);export{E as default};
