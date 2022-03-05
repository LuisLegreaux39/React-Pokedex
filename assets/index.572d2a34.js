var W=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var x=(t,e,r)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,c=(t,e)=>{for(var r in e||(e={}))Z.call(e,r)&&x(t,r,e[r]);if($)for(var r of $(e))X.call(e,r)&&x(t,r,e[r]);return t},B=(t,e)=>J(t,Q(e));var h=(t,e,r)=>(x(t,typeof e!="symbol"?e+"":e,r),r);import{j as s,S as _,a as o,C as O,I as u,L as F,G as m,b as ee,F as te,m as N,D as se,c as S,d as y,e as T,f as re,u as w,g as z,h as ne,i as ie,r as k,k as P,T as M,l as ae,n as v,o as l,P as oe,p as le,R as ce,q as R,s as de,t as ue,B as he,v as me}from"./vendor.c1da6682.js";const pe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}};pe();var ge="/react-pokedux/assets/logo_v4.20243a3c.svg";const fe=()=>s(_,{fixed:"top",children:o(O,{children:[s(_.Item,{to:"/",children:s(u,{size:"small",src:ge})}),s(_.Item,{children:s(F,{to:"/",children:"Home"})})]})});const ye=({children:t})=>o("div",{children:[s(fe,{}),s("div",{className:"Layout-content",children:t})]});const ve=t=>{const{bind:e}=t,r=()=>i=>e(i.target.value);return s("div",{className:"Searcher wrapper",children:s(m,{children:s(m.Column,{widescreen:10,largeScreen:10,mobile:16,className:"Searcher",children:s(ee,{aligned:"right",input:{fluid:!0},showNoResults:!1,onSearchChange:r(),placeholder:"Encuentra a tu Pokem\xF3n favorito"})})})})},Ce="violet",Ae="red",H={normal:"A8A77A",fighting:"C22E28",flying:"A98FF3",poison:"A33EA1",ground:"E2BF65",rock:"B6A136",bug:"A6B91A",ghost:"735797",steel:"B7B7CE",water:"6390F0",fire:"EE8130",grass:"7AC74C",electric:"F7D02C",dragon:"6F35FC",ice:"96D9D6",psychic:"F95587",dark:"705746",fairy:"D685AD",unknown:"000000",shadow:"000000"};const Ee=t=>{const{sprites:e,name:r,types:i,id:n}=t,a={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return s(te,{children:s(m.Column,{mobile:16,tablet:8,computer:4,children:o(N.div,{className:"PokemonCard",variants:a,whileHover:{scale:1.2},whileTap:{scale:.8,borderRadius:"100%"},children:[s(u,{centered:!0,src:e.front_default}),s(F,{to:`/${n}`,children:s("h2",{className:"PokemonCard-title",children:r})}),s(se,{}),s("div",{className:"Pokemon-type",children:i.map(({type:d})=>s(S,{style:{backgroundColor:`#${H[d.name]}`,color:"white"},children:d.name}))})]},n)})})},K={GET_ALL:"POKEMONS/GET_ALL",GET_ID:"POKEMONS/GET_ID"},Le={GET_ALL:"ABILITIES/GET_ALL"},Se={GET_ALL:"TYPES/GET_ALL"};class I{constructor(e={},r={}){h(this,"pure",()=>({get:e=>this.service.get(e,this.options)}));h(this,"setOptions",e=>this.options.headers=c(c({},this.options.headers),e));h(this,"handleError",(e,...r)=>{console.error(` On the ${this.constructor.name} ==> ${e} ==> `),console.error(r)});h(this,"get",(e,r)=>{try{let i=String(e);return this.service.get(i,this.options).then(n=>r(n.status,n.data)).catch(({response:n})=>{try{r(n.status,n)}catch(a){return this.handleError(a,e,r)}})}catch(i){console.warn(` On the ${this.constructor.name} ==> ${i}  `)}});h(this,"delete",(e,r={},i)=>this.service({method:"DELETE",url:e,data:r},this.options).then(n=>i(n.status,n.response)).catch(({response:n})=>{try{i(n.status,n)}catch(a){return this.handleError(a,e,i)}}));h(this,"post",(e,r={},i)=>this.service({method:"POST",url:e,data:r},this.options).then(n=>{i(n.status,n)}).catch(({response:n})=>{try{i(n.status,n)}catch(a){return this.handleError(a,e,i)}}));this.service=y.create(B(c({},r),{headers:c({},e)})),this.options={headers:{}}}put(e,r={},i){return this.service.request({method:"PUT",url:e,responseType:"json",data:r}).then(n=>i(n.status,n.data)).catch(({response:n})=>{try{i(n.status,n)}catch(a){return this.handleError(a,e,i)}})}}h(I,"setCommonHeaders",e=>y.defaults.headers.common=c(c({},y.defaults.headers.common),e)),h(I,"setHeaders",e=>y.defaults.headers=c(c({},y.defaults.headers),e));const ke=()=>{const{REACT_APP_BACKEND_API_URL:t}={};let e=new I({},{baseURL:t||"https://pokeapi.co/api/v2/"});return e.service.interceptors.request.use(r=>r,r=>{Promise.reject(r)}),e.pure()},Te=ke(),{get:f}=Te,we=t=>f(t),Pe=t=>f(`pokemon/${t}`),be=(t=151)=>f(`pokemon?limit=${t}`),xe=t=>Promise.all(t.map(e=>we(e.url))),_e=t=>f(t),Re=(t=327)=>f(`ability?limit=${t}`),De=t=>Promise.all(t.map(e=>_e(e.url))),Ie=()=>f("type"),C=T(K.GET_ALL,async t=>{const{data:{results:e}}=await be();return(await xe(e)).map(i=>i.data)}),Oe=t=>{t.addCase(C.pending,e=>{e.home.status="pending"}),t.addCase(C.fulfilled,(e,{payload:r})=>{e.home.status="full",e.home.list=r}),t.addCase(C.rejected,e=>{e.home.status="rejected"})},A=T(K.GET_ID,async(t,{getState:e})=>{const{data:r}=await Pe(t);return r}),Ne=t=>{t.addCase(A.pending,e=>{e.details.status="pending"}),t.addCase(A.fulfilled,(e,{payload:r})=>{e.details.status="full",e.details.pokemon=r}),t.addCase(A.rejected,e=>{e.details.status="rejected"})},E=T(Le.GET_ALL,async t=>{const{data:{results:e}}=await Re();return(await De(e)).map(i=>i.data)}),$e=t=>{t.addCase(E.pending,e=>{e.abilities.status="pending"}),t.addCase(E.fulfilled,(e,{payload:r})=>{e.abilities.status="full",e.abilities.list=r}),t.addCase(E.rejected,e=>{e.abilities.status="rejected"})},L=T(Se.GET_ALL,async t=>{const{data:{results:e}}=await Ie();return e}),Be=t=>{t.addCase(L.pending,e=>{e.types.status="pending"}),t.addCase(L.fulfilled,(e,{payload:r})=>{e.types.status="full",e.types.list=r}),t.addCase(L.rejected,e=>{e.types.status="rejected"})},G=re({name:"pokemons",initialState:{home:{list:[],status:null},details:{pokemon:null,status:null},abilities:{list:[],status:null},types:{list:[],status:null}},extraReducers:t=>{Oe(t),Ne(t),$e(t),Be(t)}}),q=t=>t.pokemons.home,Ge=t=>t.pokemons.details,je=t=>t.pokemons.types,Fe=t=>{const e={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.1}}},{pokemonList:r}=t,{status:i}=w(n=>q(n));return i?i==="pending"?s(z,{active:!0,children:"Loading"}):s(N.div,{className:"wrapper",variants:e,initial:"hidden",animate:"visible",children:s(m,{children:r.map((n,a)=>s(Ee,c({},n),`pokemon-${a}`))})}):null},ze=t=>e=>r=>{console.log(`Triggering redux ${r.type}`),e(r)};let Me=ne({[G.name]:G.reducer});const U=ie({reducer:Me,middleware:t=>t().concat(ze)}),b=t=>U.dispatch(t),He=()=>{const[t,e]=k.exports.useState(!1),{list:r}=w(i=>je(i));return P(()=>{b(L()),setTimeout(()=>{e(!0)},100)}),s(O,{children:s(m,{children:s(m.Row,{children:s(M.Group,{as:"list",visible:t,animation:"scale",duration:900,children:r.map(({name:i},n)=>s(S,{style:{margin:"5px",backgroundColor:`#${H[i]}`,color:"white"},children:i},n))})})})})};const Ke=()=>{const[t,e]=k.exports.useState(""),{list:r}=w(n=>q(n)),i=k.exports.useCallback(()=>t?new ae(r,["name"],{caseSensitive:!1}).search(t):r,[t,r]);return P(()=>b(C())),o("div",{className:"Home",children:[s(ve,{bind:n=>e(n)}),s(He,{}),s(Fe,{pokemonList:i()})]})},qe=({height:t,weight:e,base_experience:r,name:i,stats:n,types:a,abilities:d})=>{let Y={hp:"green",attack:"yellow",defense:"teal","special-attack":"purple","special-defense":"violet",speed:"red"};return s(v,{fluid:!0,children:o(v.Content,{children:[s(v.Header,{as:"h2",children:i}),o(v.Description,{children:[s(l,{celled:!0,compact:!0,textAlign:"center",children:o(l.Body,{children:[o(l.Row,{children:[s(l.Cell,{collapsing:!0,children:"Abilities"}),s(l.Cell,{children:d.map(({ability:p},g)=>s(S,{color:Ae,style:{margin:"1px"},children:p.name},g))})]}),o(l.Row,{children:[s(l.Cell,{collapsing:!0,children:"Height"}),s(l.Cell,{children:t})]}),o(l.Row,{children:[s(l.Cell,{collapsing:!0,children:"Weight"}),s(l.Cell,{children:e})]}),o(l.Row,{children:[s(l.Cell,{collapsing:!0,children:"Base Experience"}),s(l.Cell,{children:r})]}),o(l.Row,{children:[s(l.Cell,{collapsing:!0,children:"Types"}),s(l.Cell,{children:a.map(({type:p},g)=>s(S,{color:Ce,children:p.name},g))})]})]})}),n.map(({stat:p,base_stat:g},V)=>s(oe,{label:p.name,value:g,total:g+100,progress:"value",color:Y[p.name]},V))]})]})})},{Row:j,Column:D}=m,Ue=()=>{const[t,e]=k.exports.useState(!1),{id:r}=le(),{pokemon:i,status:n}=w(a=>Ge(a));return P(()=>{b(A(r)),setTimeout(()=>{e(!0)},200)}),i?n==="pending"?s(z,{active:!0,children:"Loading"}):o(O,{textAlign:"center",children:[s("br",{}),o(m,{padded:!0,doubling:!0,children:[o(j,{columns:2,children:[o(D,{children:[s(M,{visible:t,animation:"scale",duration:500,children:s(u,{size:"medium",src:i.sprites.other["official-artwork"].front_default,centered:!0,bordered:!0,rounded:!0})}),o(u.Group,{size:"tiny",children:[s(u,{src:i.sprites.front_default,size:"small"}),s(u,{src:i.sprites.back_default,size:"small"}),s(u,{src:i.sprites.front_shiny,size:"small"}),s("br",{}),s(u,{src:i.sprites.other.dream_world.front_default,size:"small"}),s(u,{src:i.sprites.other.home.front_default,size:"small"}),s(u,{src:i.sprites.other.home.front_shiny,size:"small"})]})]}),s(D,{children:s(N.div,{initial:{scale:0},animate:{scale:1,animationDelay:.3},children:s(qe,c({},i))})})]}),s(j,{columns:5,children:i.moves.map(({move:a},d)=>s(D,{children:a.name},d))})]})]}):null},Ye=()=>(P(()=>{b(E())}),s("div",{children:"abilites"})),Ve=()=>o(ce,{children:[s(R,{path:"/",element:s(Ke,{})}),s(R,{path:"/:id",element:s(Ue,{})}),s(R,{path:"/abilities",element:s(Ye,{})})]});const We=()=>s(ye,{children:s(Ve,{})}),Je=({children:t})=>s(de,{store:U,children:t});ue.render(s(he,{basename:"react-pokedux/",children:s(Je,{children:s(me.StrictMode,{children:s(We,{})})})}),document.getElementById("root"));
