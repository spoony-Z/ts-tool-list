import{d as A,A as f,u as p,v as c,b as _,N as r,C as m,B as v,x as g,e as b,f as S,F as n,_ as x,r as w,a5 as i,Q as l,a6 as P,c as C,H,a7 as $,a8 as j,a9 as F,aa as I,ab as L,ac as O,ad as T,ae as k,af as R,ag as V,ah as D,ai as E,Y as N}from"./chunks/framework.86f05c28.js";import{V as B,_ as M,t as d}from"./chunks/theme.c386dc2c.js";const u=A(),z="https://sponsors.vuejs.org",G=`${z}/vite.json`,U={special:[],gold:[]};function h(){return f(async()=>{if(u.value)return;await(await fetch(G)).json(),u.value=Q()}),{data:u}}function Q(e){return[]}new Set(Object.values(U).flatMap(e=>e.map(s=>s.name)));const Y=e=>(b("data-v-96c6c21a"),e=e(),S(),e),q=Y(()=>n("div",{class:"action"},[n("a",{class:"sponsor",href:"https://github.com/sponsors/vitejs",target:"_blank",rel:"noreferrer"}," ❤️ 我要努力的苦 "),n("a",{class:"sponsor",href:"https://github.com/sponsors/yyx990803",target:"_blank",rel:"noreferrer"}," 💔我要躺平平 ")],-1)),J=p({__name:"HomeSponsors",setup(e){const{data:s}=h();return(t,a)=>(c(),_(g,null,[r(s)?(c(),m(r(B),{key:0,message:"别抱怨努力的苦，那是你去看世界的路",data:r(s)},null,8,["data"])):v("",!0),q],64))}});const K=x(J,[["__scopeId","data-v-96c6c21a"]]),W=n("a",{class:"viteconf",href:"https://viteconf.org/23",target:"_blank"},[n("span",null,[n("p",{class:"extra-info"},"Free Online Conference"),n("p",{class:"heading"},"ViteConf 23 - Oct 5"),n("p",{class:"extra-info"},"Get your ticket now!")])],-1),X=p({__name:"AsideSponsors",setup(e){const{data:s}=h(),t=w(()=>(s==null?void 0:s.value.map(a=>({size:a.size==="big"?"mini":"xmini",items:a.items})))??[]);return(a,re)=>(c(),_(g,null,[W,r(s)?(c(),m(r(M),{key:0,data:t.value},null,8,["data"])):v("",!0)],64))}});const Z=["innerHTML"],ee=p({__name:"SvgImage",props:{svg:{}},setup(e){return(s,t)=>(c(),_("figure",{class:"svg-image-root",innerHTML:s.svg},null,8,Z))}});const se={extends:d,Layout(){return i(d.Layout,null,{"home-features-after":()=>i(K),"aside-ads-before":()=>i(X)})},enhanceApp({app:e}){e.component("SvgImage",ee)}};function y(e){if(e.extends){const s=y(e.extends);return{...s,...e,async enhanceApp(t){s.enhanceApp&&await s.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=y(se),te=p({name:"VitePressApp",setup(){const{site:e}=C();return f(()=>{H(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),$(),j(),F(),o.setup&&o.setup(),()=>i(o.Layout)}});async function ae(){const e=oe(),s=ne();s.provide(I,e);const t=L(e.route);return s.provide(O,t),s.component("Content",T),s.component("ClientOnly",k),Object.defineProperties(s.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:s,router:e,siteData:R}),{app:s,router:e,data:t}}function ne(){return V(te)}function oe(){let e=l,s;return D(t=>{let a=E(t);return a?(e&&(s=a),(e||s===a)&&(a=a.replace(/\.js$/,".lean.js")),l&&(e=!1),N(()=>import(a),[])):null},o.NotFound)}l&&ae().then(({app:e,router:s,data:t})=>{s.go().then(()=>{P(s.route,t.site),e.mount("#app")})});export{ae as createApp};
