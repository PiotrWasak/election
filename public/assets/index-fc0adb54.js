(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function kl(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const de={},li=[],mt=()=>{},um=()=>!1,hm=/^on[^a-z]/,co=t=>hm.test(t),Pl=t=>t.startsWith("onUpdate:"),Ie=Object.assign,Nl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fm=Object.prototype.hasOwnProperty,X=(t,e)=>fm.call(t,e),W=Array.isArray,ci=t=>uo(t)==="[object Map]",Uf=t=>uo(t)==="[object Set]",V=t=>typeof t=="function",Te=t=>typeof t=="string",Ol=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",Bf=t=>ge(t)&&V(t.then)&&V(t.catch),Hf=Object.prototype.toString,uo=t=>Hf.call(t),dm=t=>uo(t).slice(8,-1),jf=t=>uo(t)==="[object Object]",Dl=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Er=kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pm=/-(\w)/g,yi=ho(t=>t.replace(pm,(e,n)=>n?n.toUpperCase():"")),gm=/\B([A-Z])/g,ki=ho(t=>t.replace(gm,"-$1").toLowerCase()),$f=ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xo=ho(t=>t?`on${$f(t)}`:""),ds=(t,e)=>!Object.is(t,e),Jo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},kr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_m=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fu;const Aa=()=>fu||(fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Te(i)?Em(i):xl(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Te(t))return t;if(ge(t))return t}}const mm=/;(?![^(]*\))/g,ym=/:([^]+)/,vm=/\/\*[^]*?\*\//g;function Em(t){const e={};return t.replace(vm,"").split(mm).forEach(n=>{if(n){const i=n.split(ym);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ml(t){let e="";if(Te(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const i=Ml(t[n]);i&&(e+=i+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Im=kl(wm);function Wf(t){return!!t||t===""}const Qo=t=>Te(t)?t:t==null?"":W(t)||ge(t)&&(t.toString===Hf||!V(t.toString))?JSON.stringify(t,Vf,2):String(t),Vf=(t,e)=>e&&e.__v_isRef?Vf(t,e.value):ci(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Uf(e)?{[`Set(${e.size})`]:[...e.values()]}:ge(e)&&!W(e)&&!jf(e)?String(e):e;let ct;class Kf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ct,!e&&ct&&(this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){ct=this}off(){ct=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function zf(t){return new Kf(t)}function Tm(t,e=ct){e&&e.active&&e.effects.push(t)}function Cm(){return ct}const Ll=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qf=t=>(t.w&En)>0,Gf=t=>(t.n&En)>0,Sm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=En},Rm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];qf(s)&&!Gf(s)?s.delete(t):e[n++]=s,s.w&=~En,s.n&=~En}e.length=n}},ka=new WeakMap;let Ji=0,En=1;const Pa=30;let ut;const Fn=Symbol(""),Na=Symbol("");class Fl{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Tm(this,i)}run(){if(!this.active)return this.fn();let e=ut,n=gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ut,ut=this,gn=!0,En=1<<++Ji,Ji<=Pa?Sm(this):du(this),this.fn()}finally{Ji<=Pa&&Rm(this),En=1<<--Ji,ut=this.parent,gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&(du(this),this.onStop&&this.onStop(),this.active=!1)}}function du(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gn=!0;const Yf=[];function Pi(){Yf.push(gn),gn=!1}function Ni(){const t=Yf.pop();gn=t===void 0?!0:t}function Xe(t,e,n){if(gn&&ut){let i=ka.get(t);i||ka.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Ll()),Xf(s)}}function Xf(t,e){let n=!1;Ji<=Pa?Gf(t)||(t.n|=En,n=!qf(t)):n=!t.has(ut),n&&(t.add(ut),ut.deps.push(t))}function Zt(t,e,n,i,s,r){const o=ka.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Dl(n)&&a.push(o.get("length")):(a.push(o.get(Fn)),ci(t)&&a.push(o.get(Na)));break;case"delete":W(t)||(a.push(o.get(Fn)),ci(t)&&a.push(o.get(Na)));break;case"set":ci(t)&&a.push(o.get(Fn));break}if(a.length===1)a[0]&&Oa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Oa(Ll(l))}}function Oa(t,e){const n=W(t)?t:[...t];for(const i of n)i.computed&&pu(i);for(const i of n)i.computed||pu(i)}function pu(t,e){(t!==ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const bm=kl("__proto__,__v_isRef,__isVue"),Jf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ol)),Am=Ul(),km=Ul(!1,!0),Pm=Ul(!0),gu=Nm();function Nm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Q(this);for(let r=0,o=this.length;r<o;r++)Xe(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pi();const i=Q(this)[e].apply(this,n);return Ni(),i}}),t}function Om(t){const e=Q(this);return Xe(e,"has",t),e.hasOwnProperty(t)}function Ul(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?Gm:nd:e?td:ed).get(i))return i;const o=W(i);if(!t){if(o&&X(gu,s))return Reflect.get(gu,s,r);if(s==="hasOwnProperty")return Om}const a=Reflect.get(i,s,r);return(Ol(s)?Jf.has(s):bm(s))||(t||Xe(i,"get",s),e)?a:Fe(a)?o&&Dl(s)?a:a.value:ge(a)?t?sd(a):po(a):a}}const Dm=Qf(),xm=Qf(!0);function Qf(t=!1){return function(n,i,s,r){let o=n[i];if(vi(o)&&Fe(o)&&!Fe(s))return!1;if(!t&&(!Pr(s)&&!vi(s)&&(o=Q(o),s=Q(s)),!W(n)&&Fe(o)&&!Fe(s)))return o.value=s,!0;const a=W(n)&&Dl(i)?Number(i)<n.length:X(n,i),l=Reflect.set(n,i,s,r);return n===Q(r)&&(a?ds(s,o)&&Zt(n,"set",i,s):Zt(n,"add",i,s)),l}}function Mm(t,e){const n=X(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Zt(t,"delete",e,void 0),i}function Lm(t,e){const n=Reflect.has(t,e);return(!Ol(e)||!Jf.has(e))&&Xe(t,"has",e),n}function Fm(t){return Xe(t,"iterate",W(t)?"length":Fn),Reflect.ownKeys(t)}const Zf={get:Am,set:Dm,deleteProperty:Mm,has:Lm,ownKeys:Fm},Um={get:Pm,set(t,e){return!0},deleteProperty(t,e){return!0}},Bm=Ie({},Zf,{get:km,set:xm}),Bl=t=>t,fo=t=>Reflect.getPrototypeOf(t);function ir(t,e,n=!1,i=!1){t=t.__v_raw;const s=Q(t),r=Q(e);n||(e!==r&&Xe(s,"get",e),Xe(s,"get",r));const{has:o}=fo(s),a=i?Bl:n?Wl:ps;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function sr(t,e=!1){const n=this.__v_raw,i=Q(n),s=Q(t);return e||(t!==s&&Xe(i,"has",t),Xe(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function rr(t,e=!1){return t=t.__v_raw,!e&&Xe(Q(t),"iterate",Fn),Reflect.get(t,"size",t)}function _u(t){t=Q(t);const e=Q(this);return fo(e).has.call(e,t)||(e.add(t),Zt(e,"add",t,t)),this}function mu(t,e){e=Q(e);const n=Q(this),{has:i,get:s}=fo(n);let r=i.call(n,t);r||(t=Q(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?ds(e,o)&&Zt(n,"set",t,e):Zt(n,"add",t,e),this}function yu(t){const e=Q(this),{has:n,get:i}=fo(e);let s=n.call(e,t);s||(t=Q(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Zt(e,"delete",t,void 0),r}function vu(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&Zt(t,"clear",void 0,void 0),n}function or(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Q(o),l=e?Bl:t?Wl:ps;return!t&&Xe(a,"iterate",Fn),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function ar(t,e,n){return function(...i){const s=this.__v_raw,r=Q(s),o=ci(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Bl:e?Wl:ps;return!e&&Xe(r,"iterate",l?Na:Fn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function an(t){return function(...e){return t==="delete"?!1:this}}function Hm(){const t={get(r){return ir(this,r)},get size(){return rr(this)},has:sr,add:_u,set:mu,delete:yu,clear:vu,forEach:or(!1,!1)},e={get(r){return ir(this,r,!1,!0)},get size(){return rr(this)},has:sr,add:_u,set:mu,delete:yu,clear:vu,forEach:or(!1,!0)},n={get(r){return ir(this,r,!0)},get size(){return rr(this,!0)},has(r){return sr.call(this,r,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:or(!0,!1)},i={get(r){return ir(this,r,!0,!0)},get size(){return rr(this,!0)},has(r){return sr.call(this,r,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:or(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ar(r,!1,!1),n[r]=ar(r,!0,!1),e[r]=ar(r,!1,!0),i[r]=ar(r,!0,!0)}),[t,n,e,i]}const[jm,$m,Wm,Vm]=Hm();function Hl(t,e){const n=e?t?Vm:Wm:t?$m:jm;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(X(n,s)&&s in i?n:i,s,r)}const Km={get:Hl(!1,!1)},zm={get:Hl(!1,!0)},qm={get:Hl(!0,!1)},ed=new WeakMap,td=new WeakMap,nd=new WeakMap,Gm=new WeakMap;function Ym(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xm(t){return t.__v_skip||!Object.isExtensible(t)?0:Ym(dm(t))}function po(t){return vi(t)?t:jl(t,!1,Zf,Km,ed)}function id(t){return jl(t,!1,Bm,zm,td)}function sd(t){return jl(t,!0,Um,qm,nd)}function jl(t,e,n,i,s){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Xm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function ui(t){return vi(t)?ui(t.__v_raw):!!(t&&t.__v_isReactive)}function vi(t){return!!(t&&t.__v_isReadonly)}function Pr(t){return!!(t&&t.__v_isShallow)}function rd(t){return ui(t)||vi(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function $l(t){return kr(t,"__v_skip",!0),t}const ps=t=>ge(t)?po(t):t,Wl=t=>ge(t)?sd(t):t;function od(t){gn&&ut&&(t=Q(t),Xf(t.dep||(t.dep=Ll())))}function ad(t,e){t=Q(t);const n=t.dep;n&&Oa(n)}function Fe(t){return!!(t&&t.__v_isRef===!0)}function go(t){return ld(t,!1)}function Jm(t){return ld(t,!0)}function ld(t,e){return Fe(t)?t:new Qm(t,e)}class Qm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:ps(e)}get value(){return od(this),this._value}set value(e){const n=this.__v_isShallow||Pr(e)||vi(e);e=n?e:Q(e),ds(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ps(e),ad(this))}}function rt(t){return Fe(t)?t.value:t}const Zm={get:(t,e,n)=>rt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Fe(s)&&!Fe(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function cd(t){return ui(t)?t:new Proxy(t,Zm)}class ey{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Fl(e,()=>{this._dirty||(this._dirty=!0,ad(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Q(this);return od(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ty(t,e,n=!1){let i,s;const r=V(t);return r?(i=t,s=mt):(i=t.get,s=t.set),new ey(i,s,r||!s,n)}function _n(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){_o(r,e,n)}return s}function yt(t,e,n,i){if(V(t)){const r=_n(t,e,n,i);return r&&Bf(r)&&r.catch(o=>{_o(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(yt(t[r],e,n,i));return s}function _o(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){_n(l,null,10,[t,o,a]);return}}ny(t,n,s,i)}function ny(t,e,n,i=!0){console.error(t)}let gs=!1,Da=!1;const xe=[];let Pt=0;const hi=[];let zt=null,Nn=0;const ud=Promise.resolve();let Vl=null;function hd(t){const e=Vl||ud;return t?e.then(this?t.bind(this):t):e}function iy(t){let e=Pt+1,n=xe.length;for(;e<n;){const i=e+n>>>1;_s(xe[i])<t?e=i+1:n=i}return e}function Kl(t){(!xe.length||!xe.includes(t,gs&&t.allowRecurse?Pt+1:Pt))&&(t.id==null?xe.push(t):xe.splice(iy(t.id),0,t),fd())}function fd(){!gs&&!Da&&(Da=!0,Vl=ud.then(pd))}function sy(t){const e=xe.indexOf(t);e>Pt&&xe.splice(e,1)}function ry(t){W(t)?hi.push(...t):(!zt||!zt.includes(t,t.allowRecurse?Nn+1:Nn))&&hi.push(t),fd()}function Eu(t,e=gs?Pt+1:0){for(;e<xe.length;e++){const n=xe[e];n&&n.pre&&(xe.splice(e,1),e--,n())}}function dd(t){if(hi.length){const e=[...new Set(hi)];if(hi.length=0,zt){zt.push(...e);return}for(zt=e,zt.sort((n,i)=>_s(n)-_s(i)),Nn=0;Nn<zt.length;Nn++)zt[Nn]();zt=null,Nn=0}}const _s=t=>t.id==null?1/0:t.id,oy=(t,e)=>{const n=_s(t)-_s(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function pd(t){Da=!1,gs=!0,xe.sort(oy);const e=mt;try{for(Pt=0;Pt<xe.length;Pt++){const n=xe[Pt];n&&n.active!==!1&&_n(n,null,14)}}finally{Pt=0,xe.length=0,dd(),gs=!1,Vl=null,(xe.length||hi.length)&&pd()}}function ay(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||de;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||de;f&&(s=n.map(_=>Te(_)?_.trim():_)),h&&(s=n.map(_m))}let a,l=i[a=Xo(e)]||i[a=Xo(yi(e))];!l&&r&&(l=i[a=Xo(ki(e))]),l&&yt(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yt(c,t,6,s)}}function gd(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!V(t)){const l=c=>{const u=gd(c,e,!0);u&&(a=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ge(t)&&i.set(t,null),null):(W(r)?r.forEach(l=>o[l]=null):Ie(o,r),ge(t)&&i.set(t,o),o)}function mo(t,e){return!t||!co(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,ki(e))||X(t,e))}let dt=null,yo=null;function Nr(t){const e=dt;return dt=t,yo=t&&t.type.__scopeId||null,e}function _d(t){yo=t}function md(){yo=null}function xa(t,e=dt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Pu(-1);const r=Nr(e);let o;try{o=t(...s)}finally{Nr(r),i._d&&Pu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Zo(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:y,inheritAttrs:C}=t;let k,D;const M=Nr(t);try{if(n.shapeFlag&4){const N=s||i;k=kt(u.call(N,N,h,r,_,f,y)),D=l}else{const N=e;k=kt(N.length>1?N(r,{attrs:l,slots:a,emit:c}):N(r,null)),D=e.props?l:ly(l)}}catch(N){is.length=0,_o(N,t,1),k=Ke(ms)}let B=k;if(D&&C!==!1){const N=Object.keys(D),{shapeFlag:fe}=B;N.length&&fe&7&&(o&&N.some(Pl)&&(D=cy(D,o)),B=Ei(B,D))}return n.dirs&&(B=Ei(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),k=B,Nr(M),k}const ly=t=>{let e;for(const n in t)(n==="class"||n==="style"||co(n))&&((e||(e={}))[n]=t[n]);return e},cy=(t,e)=>{const n={};for(const i in t)(!Pl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function uy(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?wu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!mo(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wu(i,o,c):!0:!!o;return!1}function wu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!mo(n,r))return!0}return!1}function hy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const fy=t=>t.__isSuspense;function dy(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):ry(t)}const lr={};function wr(t,e,n){return yd(t,e,n)}function yd(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=de){var a;const l=Cm()===((a=be)==null?void 0:a.scope)?be:null;let c,u=!1,h=!1;if(Fe(t)?(c=()=>t.value,u=Pr(t)):ui(t)?(c=()=>t,i=!0):W(t)?(h=!0,u=t.some(N=>ui(N)||Pr(N)),c=()=>t.map(N=>{if(Fe(N))return N.value;if(ui(N))return si(N);if(V(N))return _n(N,l,2)})):V(t)?e?c=()=>_n(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),yt(t,l,3,[_])}:c=mt,e&&i){const N=c;c=()=>si(N())}let f,_=N=>{f=M.onStop=()=>{_n(N,l,4)}},y;if(vs)if(_=mt,e?n&&yt(e,l,3,[c(),h?[]:void 0,_]):c(),s==="sync"){const N=ov();y=N.__watcherHandles||(N.__watcherHandles=[])}else return mt;let C=h?new Array(t.length).fill(lr):lr;const k=()=>{if(M.active)if(e){const N=M.run();(i||u||(h?N.some((fe,pe)=>ds(fe,C[pe])):ds(N,C)))&&(f&&f(),yt(e,l,3,[N,C===lr?void 0:h&&C[0]===lr?[]:C,_]),C=N)}else M.run()};k.allowRecurse=!!e;let D;s==="sync"?D=k:s==="post"?D=()=>Ge(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),D=()=>Kl(k));const M=new Fl(c,D);e?n?k():C=M.run():s==="post"?Ge(M.run.bind(M),l&&l.suspense):M.run();const B=()=>{M.stop(),l&&l.scope&&Nl(l.scope.effects,M)};return y&&y.push(B),B}function py(t,e,n){const i=this.proxy,s=Te(t)?t.includes(".")?vd(i,t):()=>i[t]:t.bind(i,i);let r;V(e)?r=e:(r=e.handler,n=e);const o=be;wi(this);const a=yd(s,r.bind(i),n);return o?wi(o):Un(),a}function vd(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function si(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Fe(t))si(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)si(t[n],e);else if(Uf(t)||ci(t))t.forEach(n=>{si(n,e)});else if(jf(t))for(const n in t)si(t[n],e);return t}function bn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Pi(),yt(l,n,8,[t.el,a,t,e]),Ni())}}function vo(t,e){return V(t)?(()=>Ie({name:t.name},e,{setup:t}))():t}const Ir=t=>!!t.type.__asyncLoader,Ed=t=>t.type.__isKeepAlive;function gy(t,e){wd(t,"a",e)}function _y(t,e){wd(t,"da",e)}function wd(t,e,n=be){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Eo(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Ed(s.parent.vnode)&&my(i,e,n,s),s=s.parent}}function my(t,e,n,i){const s=Eo(e,t,i,!0);Id(()=>{Nl(i[e],s)},n)}function Eo(t,e,n=be,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pi(),wi(n);const a=yt(e,n,t,o);return Un(),Ni(),a});return i?s.unshift(r):s.push(r),r}}const nn=t=>(e,n=be)=>(!vs||t==="sp")&&Eo(t,(...i)=>e(...i),n),yy=nn("bm"),vy=nn("m"),Ey=nn("bu"),wy=nn("u"),Iy=nn("bum"),Id=nn("um"),Ty=nn("sp"),Cy=nn("rtg"),Sy=nn("rtc");function Ry(t,e=be){Eo("ec",t,e)}const by=Symbol.for("v-ndc"),Ma=t=>t?Od(t)?Xl(t)||t.proxy:Ma(t.parent):null,ns=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ma(t.parent),$root:t=>Ma(t.root),$emit:t=>t.emit,$options:t=>zl(t),$forceUpdate:t=>t.f||(t.f=()=>Kl(t.update)),$nextTick:t=>t.n||(t.n=hd.bind(t.proxy)),$watch:t=>py.bind(t)}),ea=(t,e)=>t!==de&&!t.__isScriptSetup&&X(t,e),Ay={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(ea(i,e))return o[e]=1,i[e];if(s!==de&&X(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==de&&X(n,e))return o[e]=4,n[e];La&&(o[e]=0)}}const u=ns[e];let h,f;if(u)return e==="$attrs"&&Xe(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&X(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,X(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return ea(s,e)?(s[e]=n,!0):i!==de&&X(i,e)?(i[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==de&&X(t,o)||ea(e,o)||(a=r[0])&&X(a,o)||X(i,o)||X(ns,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Iu(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let La=!0;function ky(t){const e=zl(t),n=t.proxy,i=t.ctx;La=!1,e.beforeCreate&&Tu(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:y,activated:C,deactivated:k,beforeDestroy:D,beforeUnmount:M,destroyed:B,unmounted:N,render:fe,renderTracked:pe,renderTriggered:$e,errorCaptured:We,serverPrefetch:Tt,expose:tt,inheritAttrs:rn,components:Rn,directives:Ct,filters:ji}=e;if(c&&Py(c,i,null),o)for(const oe in o){const Z=o[oe];V(Z)&&(i[oe]=Z.bind(n))}if(s){const oe=s.call(n,n);ge(oe)&&(t.data=po(oe))}if(La=!0,r)for(const oe in r){const Z=r[oe],Vt=V(Z)?Z.bind(n,n):V(Z.get)?Z.get.bind(n,n):mt,on=!V(Z)&&V(Z.set)?Z.set.bind(n):mt,St=ht({get:Vt,set:on});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>St.value,set:qe=>St.value=qe})}if(a)for(const oe in a)Td(a[oe],i,n,oe);if(l){const oe=V(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(Z=>{Tr(Z,oe[Z])})}u&&Tu(u,t,"c");function ye(oe,Z){W(Z)?Z.forEach(Vt=>oe(Vt.bind(n))):Z&&oe(Z.bind(n))}if(ye(yy,h),ye(vy,f),ye(Ey,_),ye(wy,y),ye(gy,C),ye(_y,k),ye(Ry,We),ye(Sy,pe),ye(Cy,$e),ye(Iy,M),ye(Id,N),ye(Ty,Tt),W(tt))if(tt.length){const oe=t.exposed||(t.exposed={});tt.forEach(Z=>{Object.defineProperty(oe,Z,{get:()=>n[Z],set:Vt=>n[Z]=Vt})})}else t.exposed||(t.exposed={});fe&&t.render===mt&&(t.render=fe),rn!=null&&(t.inheritAttrs=rn),Rn&&(t.components=Rn),Ct&&(t.directives=Ct)}function Py(t,e,n=mt){W(t)&&(t=Fa(t));for(const i in t){const s=t[i];let r;ge(s)?"default"in s?r=Mt(s.from||i,s.default,!0):r=Mt(s.from||i):r=Mt(s),Fe(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Tu(t,e,n){yt(W(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Td(t,e,n,i){const s=i.includes(".")?vd(n,i):()=>n[i];if(Te(t)){const r=e[t];V(r)&&wr(s,r)}else if(V(t))wr(s,t.bind(n));else if(ge(t))if(W(t))t.forEach(r=>Td(r,e,n,i));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&wr(s,r,t)}}function zl(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Or(l,c,o,!0)),Or(l,e,o)),ge(e)&&r.set(e,l),l}function Or(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Or(t,r,n,!0),s&&s.forEach(o=>Or(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ny[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ny={data:Cu,props:Su,emits:Su,methods:Qi,computed:Qi,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:Qi,directives:Qi,watch:Dy,provide:Cu,inject:Oy};function Cu(t,e){return e?t?function(){return Ie(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Oy(t,e){return Qi(Fa(t),Fa(e))}function Fa(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Qi(t,e){return t?Ie(Object.create(null),t,e):e}function Su(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Ie(Object.create(null),Iu(t),Iu(e??{})):e}function Dy(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const i in e)n[i]=Ve(t[i],e[i]);return n}function Cd(){return{app:null,config:{isNativeTag:um,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xy=0;function My(t,e){return function(i,s=null){V(i)||(i=Ie({},i)),s!=null&&!ge(s)&&(s=null);const r=Cd(),o=new Set;let a=!1;const l=r.app={_uid:xy++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:av,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(l,...u)):V(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Ke(i,s);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Xl(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Dr=l;try{return c()}finally{Dr=null}}};return l}}let Dr=null;function Tr(t,e){if(be){let n=be.provides;const i=be.parent&&be.parent.provides;i===n&&(n=be.provides=Object.create(i)),n[t]=e}}function Mt(t,e,n=!1){const i=be||dt;if(i||Dr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Dr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(i&&i.proxy):e}}function Ly(t,e,n,i=!1){const s={},r={};kr(r,Io,1),t.propsDefaults=Object.create(null),Sd(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:id(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Fy(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Q(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(mo(t.emitsOptions,f))continue;const _=e[f];if(l)if(X(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const y=yi(f);s[y]=Ua(l,a,y,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Sd(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!X(e,h)&&((u=ki(h))===h||!X(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ua(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!X(e,h))&&(delete r[h],c=!0)}c&&Zt(t,"set","$attrs")}function Sd(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Er(l))continue;const c=e[l];let u;s&&X(s,u=yi(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:mo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Q(n),c=a||de;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ua(s,l,h,c[h],t,!X(c,h))}}return o}function Ua(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&V(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(wi(s),i=c[n]=l.call(null,e),Un())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ki(n))&&(i=!0))}return i}function Rd(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!V(t)){const u=h=>{l=!0;const[f,_]=Rd(h,e,!0);Ie(o,f),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ge(t)&&i.set(t,li),li;if(W(r))for(let u=0;u<r.length;u++){const h=yi(r[u]);Ru(h)&&(o[h]=de)}else if(r)for(const u in r){const h=yi(u);if(Ru(h)){const f=r[u],_=o[h]=W(f)||V(f)?{type:f}:Ie({},f);if(_){const y=ku(Boolean,_.type),C=ku(String,_.type);_[0]=y>-1,_[1]=C<0||y<C,(y>-1||X(_,"default"))&&a.push(h)}}}const c=[o,a];return ge(t)&&i.set(t,c),c}function Ru(t){return t[0]!=="$"}function bu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Au(t,e){return bu(t)===bu(e)}function ku(t,e){return W(e)?e.findIndex(n=>Au(n,t)):V(e)&&Au(e,t)?0:-1}const bd=t=>t[0]==="_"||t==="$stable",ql=t=>W(t)?t.map(kt):[kt(t)],Uy=(t,e,n)=>{if(e._n)return e;const i=xa((...s)=>ql(e(...s)),n);return i._c=!1,i},Ad=(t,e,n)=>{const i=t._ctx;for(const s in t){if(bd(s))continue;const r=t[s];if(V(r))e[s]=Uy(s,r,i);else if(r!=null){const o=ql(r);e[s]=()=>o}}},kd=(t,e)=>{const n=ql(e);t.slots.default=()=>n},By=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),kr(e,"_",n)):Ad(e,t.slots={})}else t.slots={},e&&kd(t,e);kr(t.slots,Io,1)},Hy=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=de;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ie(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Ad(e,s)),o=e}else e&&(kd(t,e),o={default:1});if(r)for(const a in s)!bd(a)&&!(a in o)&&delete s[a]};function Ba(t,e,n,i,s=!1){if(W(t)){t.forEach((f,_)=>Ba(f,e&&(W(e)?e[_]:e),n,i,s));return}if(Ir(i)&&!s)return;const r=i.shapeFlag&4?Xl(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Te(c)?(u[c]=null,X(h,c)&&(h[c]=null)):Fe(c)&&(c.value=null)),V(l))_n(l,a,12,[o,u]);else{const f=Te(l),_=Fe(l);if(f||_){const y=()=>{if(t.f){const C=f?X(h,l)?h[l]:u[l]:l.value;s?W(C)&&Nl(C,r):W(C)?C.includes(r)||C.push(r):f?(u[l]=[r],X(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,X(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Ge(y,n)):y()}}}const Ge=dy;function jy(t){return $y(t)}function $y(t,e){const n=Aa();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=mt,insertStaticContent:y}=t,C=(d,p,g,m=null,E=null,w=null,P=!1,T=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Wi(d,p)&&(m=v(d),qe(d,E,w,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:I,ref:F,shapeFlag:x}=p;switch(I){case wo:k(d,p,g,m);break;case ms:D(d,p,g,m);break;case ta:d==null&&M(p,g,m,P);break;case At:Rn(d,p,g,m,E,w,P,T,S);break;default:x&1?fe(d,p,g,m,E,w,P,T,S):x&6?Ct(d,p,g,m,E,w,P,T,S):(x&64||x&128)&&I.process(d,p,g,m,E,w,P,T,S,R)}F!=null&&E&&Ba(F,d&&d.ref,w,p||d,!p)},k=(d,p,g,m)=>{if(d==null)i(p.el=a(p.children),g,m);else{const E=p.el=d.el;p.children!==d.children&&c(E,p.children)}},D=(d,p,g,m)=>{d==null?i(p.el=l(p.children||""),g,m):p.el=d.el},M=(d,p,g,m)=>{[d.el,d.anchor]=y(d.children,p,g,m,d.el,d.anchor)},B=({el:d,anchor:p},g,m)=>{let E;for(;d&&d!==p;)E=f(d),i(d,g,m),d=E;i(p,g,m)},N=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),s(d),d=g;s(p)},fe=(d,p,g,m,E,w,P,T,S)=>{P=P||p.type==="svg",d==null?pe(p,g,m,E,w,P,T,S):Tt(d,p,E,w,P,T,S)},pe=(d,p,g,m,E,w,P,T)=>{let S,I;const{type:F,props:x,shapeFlag:U,transition:j,dirs:K}=d;if(S=d.el=o(d.type,w,x&&x.is,x),U&8?u(S,d.children):U&16&&We(d.children,S,null,m,E,w&&F!=="foreignObject",P,T),K&&bn(d,null,m,"created"),$e(S,d,d.scopeId,P,m),x){for(const se in x)se!=="value"&&!Er(se)&&r(S,se,null,x[se],w,d.children,m,E,Pe);"value"in x&&r(S,"value",null,x.value),(I=x.onVnodeBeforeMount)&&bt(I,m,d)}K&&bn(d,null,m,"beforeMount");const ae=(!E||E&&!E.pendingBranch)&&j&&!j.persisted;ae&&j.beforeEnter(S),i(S,p,g),((I=x&&x.onVnodeMounted)||ae||K)&&Ge(()=>{I&&bt(I,m,d),ae&&j.enter(S),K&&bn(d,null,m,"mounted")},E)},$e=(d,p,g,m,E)=>{if(g&&_(d,g),m)for(let w=0;w<m.length;w++)_(d,m[w]);if(E){let w=E.subTree;if(p===w){const P=E.vnode;$e(d,P,P.scopeId,P.slotScopeIds,E.parent)}}},We=(d,p,g,m,E,w,P,T,S=0)=>{for(let I=S;I<d.length;I++){const F=d[I]=T?un(d[I]):kt(d[I]);C(null,F,p,g,m,E,w,P,T)}},Tt=(d,p,g,m,E,w,P)=>{const T=p.el=d.el;let{patchFlag:S,dynamicChildren:I,dirs:F}=p;S|=d.patchFlag&16;const x=d.props||de,U=p.props||de;let j;g&&An(g,!1),(j=U.onVnodeBeforeUpdate)&&bt(j,g,p,d),F&&bn(p,d,g,"beforeUpdate"),g&&An(g,!0);const K=E&&p.type!=="foreignObject";if(I?tt(d.dynamicChildren,I,T,g,m,K,w):P||Z(d,p,T,null,g,m,K,w,!1),S>0){if(S&16)rn(T,p,x,U,g,m,E);else if(S&2&&x.class!==U.class&&r(T,"class",null,U.class,E),S&4&&r(T,"style",x.style,U.style,E),S&8){const ae=p.dynamicProps;for(let se=0;se<ae.length;se++){const me=ae[se],lt=x[me],Zn=U[me];(Zn!==lt||me==="value")&&r(T,me,lt,Zn,E,d.children,g,m,Pe)}}S&1&&d.children!==p.children&&u(T,p.children)}else!P&&I==null&&rn(T,p,x,U,g,m,E);((j=U.onVnodeUpdated)||F)&&Ge(()=>{j&&bt(j,g,p,d),F&&bn(p,d,g,"updated")},m)},tt=(d,p,g,m,E,w,P)=>{for(let T=0;T<p.length;T++){const S=d[T],I=p[T],F=S.el&&(S.type===At||!Wi(S,I)||S.shapeFlag&70)?h(S.el):g;C(S,I,F,null,m,E,w,P,!0)}},rn=(d,p,g,m,E,w,P)=>{if(g!==m){if(g!==de)for(const T in g)!Er(T)&&!(T in m)&&r(d,T,g[T],null,P,p.children,E,w,Pe);for(const T in m){if(Er(T))continue;const S=m[T],I=g[T];S!==I&&T!=="value"&&r(d,T,I,S,P,p.children,E,w,Pe)}"value"in m&&r(d,"value",g.value,m.value)}},Rn=(d,p,g,m,E,w,P,T,S)=>{const I=p.el=d?d.el:a(""),F=p.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:U,slotScopeIds:j}=p;j&&(T=T?T.concat(j):j),d==null?(i(I,g,m),i(F,g,m),We(p.children,g,F,E,w,P,T,S)):x>0&&x&64&&U&&d.dynamicChildren?(tt(d.dynamicChildren,U,g,E,w,P,T),(p.key!=null||E&&p===E.subTree)&&Pd(d,p,!0)):Z(d,p,g,F,E,w,P,T,S)},Ct=(d,p,g,m,E,w,P,T,S)=>{p.slotScopeIds=T,d==null?p.shapeFlag&512?E.ctx.activate(p,g,m,P,S):ji(p,g,m,E,w,P,S):Xn(d,p,S)},ji=(d,p,g,m,E,w,P)=>{const T=d.component=Qy(d,m,E);if(Ed(d)&&(T.ctx.renderer=R),ev(T),T.asyncDep){if(E&&E.registerDep(T,ye),!d.el){const S=T.subTree=Ke(ms);D(null,S,p,g)}return}ye(T,d,p,g,E,w,P)},Xn=(d,p,g)=>{const m=p.component=d.component;if(uy(d,p,g))if(m.asyncDep&&!m.asyncResolved){oe(m,p,g);return}else m.next=p,sy(m.update),m.update();else p.el=d.el,m.vnode=p},ye=(d,p,g,m,E,w,P)=>{const T=()=>{if(d.isMounted){let{next:F,bu:x,u:U,parent:j,vnode:K}=d,ae=F,se;An(d,!1),F?(F.el=K.el,oe(d,F,P)):F=K,x&&Jo(x),(se=F.props&&F.props.onVnodeBeforeUpdate)&&bt(se,j,F,K),An(d,!0);const me=Zo(d),lt=d.subTree;d.subTree=me,C(lt,me,h(lt.el),v(lt),d,E,w),F.el=me.el,ae===null&&hy(d,me.el),U&&Ge(U,E),(se=F.props&&F.props.onVnodeUpdated)&&Ge(()=>bt(se,j,F,K),E)}else{let F;const{el:x,props:U}=p,{bm:j,m:K,parent:ae}=d,se=Ir(p);if(An(d,!1),j&&Jo(j),!se&&(F=U&&U.onVnodeBeforeMount)&&bt(F,ae,p),An(d,!0),x&&ee){const me=()=>{d.subTree=Zo(d),ee(x,d.subTree,d,E,null)};se?p.type.__asyncLoader().then(()=>!d.isUnmounted&&me()):me()}else{const me=d.subTree=Zo(d);C(null,me,g,m,d,E,w),p.el=me.el}if(K&&Ge(K,E),!se&&(F=U&&U.onVnodeMounted)){const me=p;Ge(()=>bt(F,ae,me),E)}(p.shapeFlag&256||ae&&Ir(ae.vnode)&&ae.vnode.shapeFlag&256)&&d.a&&Ge(d.a,E),d.isMounted=!0,p=g=m=null}},S=d.effect=new Fl(T,()=>Kl(I),d.scope),I=d.update=()=>S.run();I.id=d.uid,An(d,!0),I()},oe=(d,p,g)=>{p.component=d;const m=d.vnode.props;d.vnode=p,d.next=null,Fy(d,p.props,m,g),Hy(d,p.children,g),Pi(),Eu(),Ni()},Z=(d,p,g,m,E,w,P,T,S=!1)=>{const I=d&&d.children,F=d?d.shapeFlag:0,x=p.children,{patchFlag:U,shapeFlag:j}=p;if(U>0){if(U&128){on(I,x,g,m,E,w,P,T,S);return}else if(U&256){Vt(I,x,g,m,E,w,P,T,S);return}}j&8?(F&16&&Pe(I,E,w),x!==I&&u(g,x)):F&16?j&16?on(I,x,g,m,E,w,P,T,S):Pe(I,E,w,!0):(F&8&&u(g,""),j&16&&We(x,g,m,E,w,P,T,S))},Vt=(d,p,g,m,E,w,P,T,S)=>{d=d||li,p=p||li;const I=d.length,F=p.length,x=Math.min(I,F);let U;for(U=0;U<x;U++){const j=p[U]=S?un(p[U]):kt(p[U]);C(d[U],j,g,null,E,w,P,T,S)}I>F?Pe(d,E,w,!0,!1,x):We(p,g,m,E,w,P,T,S,x)},on=(d,p,g,m,E,w,P,T,S)=>{let I=0;const F=p.length;let x=d.length-1,U=F-1;for(;I<=x&&I<=U;){const j=d[I],K=p[I]=S?un(p[I]):kt(p[I]);if(Wi(j,K))C(j,K,g,null,E,w,P,T,S);else break;I++}for(;I<=x&&I<=U;){const j=d[x],K=p[U]=S?un(p[U]):kt(p[U]);if(Wi(j,K))C(j,K,g,null,E,w,P,T,S);else break;x--,U--}if(I>x){if(I<=U){const j=U+1,K=j<F?p[j].el:m;for(;I<=U;)C(null,p[I]=S?un(p[I]):kt(p[I]),g,K,E,w,P,T,S),I++}}else if(I>U)for(;I<=x;)qe(d[I],E,w,!0),I++;else{const j=I,K=I,ae=new Map;for(I=K;I<=U;I++){const Je=p[I]=S?un(p[I]):kt(p[I]);Je.key!=null&&ae.set(Je.key,I)}let se,me=0;const lt=U-K+1;let Zn=!1,cu=0;const $i=new Array(lt);for(I=0;I<lt;I++)$i[I]=0;for(I=j;I<=x;I++){const Je=d[I];if(me>=lt){qe(Je,E,w,!0);continue}let Rt;if(Je.key!=null)Rt=ae.get(Je.key);else for(se=K;se<=U;se++)if($i[se-K]===0&&Wi(Je,p[se])){Rt=se;break}Rt===void 0?qe(Je,E,w,!0):($i[Rt-K]=I+1,Rt>=cu?cu=Rt:Zn=!0,C(Je,p[Rt],g,null,E,w,P,T,S),me++)}const uu=Zn?Wy($i):li;for(se=uu.length-1,I=lt-1;I>=0;I--){const Je=K+I,Rt=p[Je],hu=Je+1<F?p[Je+1].el:m;$i[I]===0?C(null,Rt,g,hu,E,w,P,T,S):Zn&&(se<0||I!==uu[se]?St(Rt,g,hu,2):se--)}}},St=(d,p,g,m,E=null)=>{const{el:w,type:P,transition:T,children:S,shapeFlag:I}=d;if(I&6){St(d.component.subTree,p,g,m);return}if(I&128){d.suspense.move(p,g,m);return}if(I&64){P.move(d,p,g,R);return}if(P===At){i(w,p,g);for(let x=0;x<S.length;x++)St(S[x],p,g,m);i(d.anchor,p,g);return}if(P===ta){B(d,p,g);return}if(m!==2&&I&1&&T)if(m===0)T.beforeEnter(w),i(w,p,g),Ge(()=>T.enter(w),E);else{const{leave:x,delayLeave:U,afterLeave:j}=T,K=()=>i(w,p,g),ae=()=>{x(w,()=>{K(),j&&j()})};U?U(w,K,ae):ae()}else i(w,p,g)},qe=(d,p,g,m=!1,E=!1)=>{const{type:w,props:P,ref:T,children:S,dynamicChildren:I,shapeFlag:F,patchFlag:x,dirs:U}=d;if(T!=null&&Ba(T,null,g,d,!0),F&256){p.ctx.deactivate(d);return}const j=F&1&&U,K=!Ir(d);let ae;if(K&&(ae=P&&P.onVnodeBeforeUnmount)&&bt(ae,p,d),F&6)nr(d.component,g,m);else{if(F&128){d.suspense.unmount(g,m);return}j&&bn(d,null,p,"beforeUnmount"),F&64?d.type.remove(d,p,g,E,R,m):I&&(w!==At||x>0&&x&64)?Pe(I,p,g,!1,!0):(w===At&&x&384||!E&&F&16)&&Pe(S,p,g),m&&Jn(d)}(K&&(ae=P&&P.onVnodeUnmounted)||j)&&Ge(()=>{ae&&bt(ae,p,d),j&&bn(d,null,p,"unmounted")},g)},Jn=d=>{const{type:p,el:g,anchor:m,transition:E}=d;if(p===At){Qn(g,m);return}if(p===ta){N(d);return}const w=()=>{s(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:T}=E,S=()=>P(g,w);T?T(d.el,w,S):S()}else w()},Qn=(d,p)=>{let g;for(;d!==p;)g=f(d),s(d),d=g;s(p)},nr=(d,p,g)=>{const{bum:m,scope:E,update:w,subTree:P,um:T}=d;m&&Jo(m),E.stop(),w&&(w.active=!1,qe(P,d,p,g)),T&&Ge(T,p),Ge(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Pe=(d,p,g,m=!1,E=!1,w=0)=>{for(let P=w;P<d.length;P++)qe(d[P],p,g,m,E)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),O=(d,p,g)=>{d==null?p._vnode&&qe(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,g),Eu(),dd(),p._vnode=d},R={p:C,um:qe,m:St,r:Jn,mt:ji,mc:We,pc:Z,pbc:tt,n:v,o:t};let L,ee;return e&&([L,ee]=e(R)),{render:O,hydrate:L,createApp:My(O,L)}}function An({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Pd(t,e,n=!1){const i=t.children,s=e.children;if(W(i)&&W(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=un(s[r]),a.el=o.el),n||Pd(o,a)),a.type===wo&&(a.el=o.el)}}function Wy(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Vy=t=>t.__isTeleport,At=Symbol.for("v-fgt"),wo=Symbol.for("v-txt"),ms=Symbol.for("v-cmt"),ta=Symbol.for("v-stc"),is=[];let pt=null;function ss(t=!1){is.push(pt=t?null:[])}function Ky(){is.pop(),pt=is[is.length-1]||null}let ys=1;function Pu(t){ys+=t}function zy(t){return t.dynamicChildren=ys>0?pt||li:null,Ky(),ys>0&&pt&&pt.push(t),t}function rs(t,e,n,i,s,r){return zy(nt(t,e,n,i,s,r,!0))}function Ha(t){return t?t.__v_isVNode===!0:!1}function Wi(t,e){return t.type===e.type&&t.key===e.key}const Io="__vInternal",Nd=({key:t})=>t??null,Cr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Te(t)||Fe(t)||V(t)?{i:dt,r:t,k:e,f:!!n}:t:null);function nt(t,e=null,n=null,i=0,s=null,r=t===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nd(e),ref:e&&Cr(e),scopeId:yo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dt};return a?(Gl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Te(n)?8:16),ys>0&&!o&&pt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pt.push(l),l}const Ke=qy;function qy(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===by)&&(t=ms),Ha(t)){const a=Ei(t,e,!0);return n&&Gl(a,n),ys>0&&!r&&pt&&(a.shapeFlag&6?pt[pt.indexOf(t)]=a:pt.push(a)),a.patchFlag|=-2,a}if(sv(t)&&(t=t.__vccOpts),e){e=Gy(e);let{class:a,style:l}=e;a&&!Te(a)&&(e.class=Ml(a)),ge(l)&&(rd(l)&&!W(l)&&(l=Ie({},l)),e.style=xl(l))}const o=Te(t)?1:fy(t)?128:Vy(t)?64:ge(t)?4:V(t)?2:0;return nt(t,e,n,i,s,o,r,!0)}function Gy(t){return t?rd(t)||Io in t?Ie({},t):t:null}function Ei(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?Yy(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Nd(a),ref:e&&e.ref?n&&s?W(s)?s.concat(Cr(e)):[s,Cr(e)]:Cr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ei(t.ssContent),ssFallback:t.ssFallback&&Ei(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ja(t=" ",e=0){return Ke(wo,null,t,e)}function kt(t){return t==null||typeof t=="boolean"?Ke(ms):W(t)?Ke(At,null,t.slice()):typeof t=="object"?un(t):Ke(wo,null,String(t))}function un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ei(t)}function Gl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Gl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Io in e)?e._ctx=dt:s===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),i&64?(n=16,e=[ja(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yy(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ml([e.class,i.class]));else if(s==="style")e.style=xl([e.style,i.style]);else if(co(s)){const r=e[s],o=i[s];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function bt(t,e,n,i=null){yt(t,e,7,[n,i])}const Xy=Cd();let Jy=0;function Qy(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Xy,r={uid:Jy++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rd(i,s),emitsOptions:gd(i,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:i.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ay.bind(null,r),t.ce&&t.ce(r),r}let be=null;const Zy=()=>be||dt;let Yl,ei,Nu="__VUE_INSTANCE_SETTERS__";(ei=Aa()[Nu])||(ei=Aa()[Nu]=[]),ei.push(t=>be=t),Yl=t=>{ei.length>1?ei.forEach(e=>e(t)):ei[0](t)};const wi=t=>{Yl(t),t.scope.on()},Un=()=>{be&&be.scope.off(),Yl(null)};function Od(t){return t.vnode.shapeFlag&4}let vs=!1;function ev(t,e=!1){vs=e;const{props:n,children:i}=t.vnode,s=Od(t);Ly(t,n,s,e),By(t,i);const r=s?tv(t,e):void 0;return vs=!1,r}function tv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=$l(new Proxy(t.ctx,Ay));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?iv(t):null;wi(t),Pi();const r=_n(i,t,0,[t.props,s]);if(Ni(),Un(),Bf(r)){if(r.then(Un,Un),e)return r.then(o=>{Ou(t,o,e)}).catch(o=>{_o(o,t,0)});t.asyncDep=r}else Ou(t,r,e)}else Dd(t,e)}function Ou(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=cd(e)),Dd(t,n)}let Du;function Dd(t,e,n){const i=t.type;if(!t.render){if(!e&&Du&&!i.render){const s=i.template||zl(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ie(Ie({isCustomElement:r,delimiters:a},o),l);i.render=Du(s,c)}}t.render=i.render||mt}wi(t),Pi(),ky(t),Ni(),Un()}function nv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Xe(t,"get","$attrs"),e[n]}}))}function iv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return nv(t)},slots:t.slots,emit:t.emit,expose:e}}function Xl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cd($l(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ns)return ns[n](t)},has(e,n){return n in e||n in ns}}))}function sv(t){return V(t)&&"__vccOpts"in t}const ht=(t,e)=>ty(t,e,vs);function xd(t,e,n){const i=arguments.length;return i===2?ge(e)&&!W(e)?Ha(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ha(n)&&(n=[n]),Ke(t,e,n))}const rv=Symbol.for("v-scx"),ov=()=>Mt(rv),av="3.3.4",lv="http://www.w3.org/2000/svg",On=typeof document<"u"?document:null,xu=On&&On.createElement("template"),cv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?On.createElementNS(lv,t):On.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>On.createTextNode(t),createComment:t=>On.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>On.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{xu.innerHTML=i?`<svg>${t}</svg>`:t;const a=xu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function uv(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function hv(t,e,n){const i=t.style,s=Te(n);if(n&&!s){if(e&&!Te(e))for(const r in e)n[r]==null&&$a(i,r,"");for(const r in n)$a(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Mu=/\s*!important$/;function $a(t,e,n){if(W(n))n.forEach(i=>$a(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=fv(t,e);Mu.test(n)?t.setProperty(ki(i),n.replace(Mu,""),"important"):t[i]=n}}const Lu=["Webkit","Moz","ms"],na={};function fv(t,e){const n=na[e];if(n)return n;let i=yi(e);if(i!=="filter"&&i in t)return na[e]=i;i=$f(i);for(let s=0;s<Lu.length;s++){const r=Lu[s]+i;if(r in t)return na[e]=r}return e}const Fu="http://www.w3.org/1999/xlink";function dv(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Fu,e.slice(6,e.length)):t.setAttributeNS(Fu,e,n);else{const r=Im(e);n==null||r&&!Wf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function pv(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Wf(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function gv(t,e,n,i){t.addEventListener(e,n,i)}function _v(t,e,n,i){t.removeEventListener(e,n,i)}function mv(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=yv(e);if(i){const c=r[e]=wv(i,s);gv(t,a,c,l)}else o&&(_v(t,a,o,l),r[e]=void 0)}}const Uu=/(?:Once|Passive|Capture)$/;function yv(t){let e;if(Uu.test(t)){e={};let i;for(;i=t.match(Uu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ki(t.slice(2)),e]}let ia=0;const vv=Promise.resolve(),Ev=()=>ia||(vv.then(()=>ia=0),ia=Date.now());function wv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;yt(Iv(i,n.value),e,5,[i])};return n.value=t,n.attached=Ev(),n}function Iv(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Bu=/^on[a-z]/,Tv=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?uv(t,i,s):e==="style"?hv(t,n,i):co(e)?Pl(e)||mv(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cv(t,e,i,s))?pv(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),dv(t,e,i,s))};function Cv(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Bu.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bu.test(e)&&Te(n)?!1:e in t}const Sv=Ie({patchProp:Tv},cv);let Hu;function Rv(){return Hu||(Hu=jy(Sv))}const bv=(...t)=>{const e=Rv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Av(i);if(!s)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Av(t){return Te(t)?document.querySelector(t):t}var kv=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Pv=Symbol();var ju;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ju||(ju={}));function Nv(){const t=zf(!0),e=t.run(()=>go({}));let n=[],i=[];const s=$l({install(r){s._a=r,r.provide(Pv,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!kv?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ov="/assets/logo-8b9aaf55.png";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ii=typeof window<"u";function Dv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function sa(t,e){const n={};for(const i in e){const s=e[i];n[i]=Et(s)?s.map(t):t(s)}return n}const os=()=>{},Et=Array.isArray,xv=/\/$/,Mv=t=>t.replace(xv,"");function ra(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Bv(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function Lv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $u(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Fv(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Ii(e.matched[i],n.matched[s])&&Md(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ii(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Md(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Uv(t[n],e[n]))return!1;return!0}function Uv(t,e){return Et(t)?Wu(t,e):Et(e)?Wu(e,t):t===e}function Wu(t,e){return Et(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Bv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Es;(function(t){t.pop="pop",t.push="push"})(Es||(Es={}));var as;(function(t){t.back="back",t.forward="forward",t.unknown=""})(as||(as={}));function Hv(t){if(!t)if(ii){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mv(t)}const jv=/^[^#]+#/;function $v(t,e){return t.replace(jv,"#")+e}function Wv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const To=()=>({left:window.pageXOffset,top:window.pageYOffset});function Vv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Wv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vu(t,e){return(history.state?history.state.position-e:-1)+t}const Wa=new Map;function Kv(t,e){Wa.set(t,e)}function zv(t){const e=Wa.get(t);return Wa.delete(t),e}let qv=()=>location.protocol+"//"+location.host;function Ld(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),$u(l,"")}return $u(n,t)+i+s}function Gv(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const _=Ld(t,location),y=n.value,C=e.value;let k=0;if(f){if(n.value=_,e.value=f,o&&o===y){o=null;return}k=C?f.position-C.position:0}else i(_);s.forEach(D=>{D(n.value,y,{delta:k,type:Es.pop,direction:k?k>0?as.forward:as.back:as.unknown})})};function l(){o=n.value}function c(f){s.push(f);const _=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(ne({},f.state,{scroll:To()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Ku(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?To():null}}function Yv(t){const{history:e,location:n}=window,i={value:Ld(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:qv()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(l,c){const u=ne({},e.state,Ku(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=ne({},s.value,e.state,{forward:l,scroll:To()});r(u.current,u,!0);const h=ne({},Ku(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Xv(t){t=Hv(t);const e=Yv(t),n=Gv(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ne({location:"",base:t,go:i,createHref:$v.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Jv(t){return typeof t=="string"||t&&typeof t=="object"}function Fd(t){return typeof t=="string"||typeof t=="symbol"}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ud=Symbol("");var zu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zu||(zu={}));function Ti(t,e){return ne(new Error,{type:t,[Ud]:!0},e)}function Kt(t,e){return t instanceof Error&&Ud in t&&(e==null||!!(t.type&e))}const qu="[^/]+?",Qv={sensitive:!1,strict:!1,start:!0,end:!0},Zv=/[.+*?^${}()[\]/\\]/g;function eE(t,e){const n=ne({},Qv,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Zv,"\\$&"),_+=40;else if(f.type===1){const{value:y,repeatable:C,optional:k,regexp:D}=f;r.push({name:y,repeatable:C,optional:k});const M=D||qu;if(M!==qu){_+=10;try{new RegExp(`(${M})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${y}" (${M}): `+N.message)}}let B=C?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(B=k&&c.length<2?`(?:/${B})`:"/"+B),k&&(B+="?"),s+=B,_+=20,k&&(_+=-8),C&&(_+=-20),M===".*"&&(_+=-50)}u.push(_)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",y=r[f-1];h[y.name]=_&&y.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:y,repeatable:C,optional:k}=_,D=y in c?c[y]:"";if(Et(D)&&!C)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const M=Et(D)?D.join("/"):D;if(!M)if(k)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function tE(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nE(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=tE(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Gu(i))return 1;if(Gu(s))return-1}return s.length-i.length}function Gu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iE={type:0,value:""},sE=/[a-zA-Z0-9_]/;function rE(t){if(!t)return[[]];if(t==="/")return[[iE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:sE.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function oE(t,e,n){const i=eE(rE(t.path),n),s=ne(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aE(t,e){const n=[],i=new Map;e=Ju({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const _=!f,y=lE(u);y.aliasOf=f&&f.record;const C=Ju(e,u),k=[y];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of B)k.push(ne({},y,{components:f?f.record.components:y.components,path:N,aliasOf:f?f.record:y}))}let D,M;for(const B of k){const{path:N}=B;if(h&&N[0]!=="/"){const fe=h.record.path,pe=fe[fe.length-1]==="/"?"":"/";B.path=h.record.path+(N&&pe+N)}if(D=oE(B,h,C),f?f.alias.push(D):(M=M||D,M!==D&&M.alias.push(D),_&&u.name&&!Xu(D)&&o(u.name)),y.children){const fe=y.children;for(let pe=0;pe<fe.length;pe++)r(fe[pe],D,f&&f.children[pe])}f=f||D,(D.record.components&&Object.keys(D.record.components).length||D.record.name||D.record.redirect)&&l(D)}return M?()=>{o(M)}:os}function o(u){if(Fd(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&nE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Bd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Xu(u)&&i.set(u.record.name,u)}function c(u,h){let f,_={},y,C;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Ti(1,{location:u});C=f.record.name,_=ne(Yu(h.params,f.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Yu(u.params,f.keys.map(M=>M.name))),y=f.stringify(_)}else if("path"in u)y=u.path,f=n.find(M=>M.re.test(y)),f&&(_=f.parse(y),C=f.record.name);else{if(f=h.name?i.get(h.name):n.find(M=>M.re.test(h.path)),!f)throw Ti(1,{location:u,currentLocation:h});C=f.record.name,_=ne({},h.params,u.params),y=f.stringify(_)}const k=[];let D=f;for(;D;)k.unshift(D.record),D=D.parent;return{name:C,path:y,params:_,matched:k,meta:uE(k)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Yu(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function lE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:cE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function cE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Xu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uE(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function Ju(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Bd(t,e){return e.children.some(n=>n===t||Bd(t,n))}const Hd=/#/g,hE=/&/g,fE=/\//g,dE=/=/g,pE=/\?/g,jd=/\+/g,gE=/%5B/g,_E=/%5D/g,$d=/%5E/g,mE=/%60/g,Wd=/%7B/g,yE=/%7C/g,Vd=/%7D/g,vE=/%20/g;function Jl(t){return encodeURI(""+t).replace(yE,"|").replace(gE,"[").replace(_E,"]")}function EE(t){return Jl(t).replace(Wd,"{").replace(Vd,"}").replace($d,"^")}function Va(t){return Jl(t).replace(jd,"%2B").replace(vE,"+").replace(Hd,"%23").replace(hE,"%26").replace(mE,"`").replace(Wd,"{").replace(Vd,"}").replace($d,"^")}function wE(t){return Va(t).replace(dE,"%3D")}function IE(t){return Jl(t).replace(Hd,"%23").replace(pE,"%3F")}function TE(t){return t==null?"":IE(t).replace(fE,"%2F")}function xr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function CE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(jd," "),o=r.indexOf("="),a=xr(o<0?r:r.slice(0,o)),l=o<0?null:xr(r.slice(o+1));if(a in e){let c=e[a];Et(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Qu(t){let e="";for(let n in t){const i=t[n];if(n=wE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Et(i)?i.map(r=>r&&Va(r)):[i&&Va(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function SE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Et(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const RE=Symbol(""),Zu=Symbol(""),Ql=Symbol(""),Kd=Symbol(""),Ka=Symbol("");function Vi(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function hn(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ti(4,{from:n,to:e})):h instanceof Error?a(h):Jv(h)?a(Ti(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function oa(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(bE(a)){const c=(a.__vccOpts||a)[e];c&&s.push(hn(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Dv(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&hn(f,n,i,r,o)()}))}}return s}function bE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function eh(t){const e=Mt(Ql),n=Mt(Kd),i=ht(()=>e.resolve(rt(t.to))),s=ht(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ii.bind(null,u));if(f>-1)return f;const _=th(l[c-2]);return c>1&&th(u)===_&&h[h.length-1].path!==_?h.findIndex(Ii.bind(null,l[c-2])):f}),r=ht(()=>s.value>-1&&PE(n.params,i.value.params)),o=ht(()=>s.value>-1&&s.value===n.matched.length-1&&Md(n.params,i.value.params));function a(l={}){return kE(l)?e[rt(t.replace)?"replace":"push"](rt(t.to)).catch(os):Promise.resolve()}return{route:i,href:ht(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const AE=vo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:eh,setup(t,{slots:e}){const n=po(eh(t)),{options:i}=Mt(Ql),s=ht(()=>({[nh(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[nh(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:xd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),za=AE;function kE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function PE(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Et(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function th(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nh=(t,e,n)=>t??e??n,NE=vo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Mt(Ka),s=ht(()=>t.route||i.value),r=Mt(Zu,0),o=ht(()=>{let c=rt(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ht(()=>s.value.matched[o.value]);Tr(Zu,ht(()=>o.value+1)),Tr(RE,a),Tr(Ka,s);const l=go();return wr(()=>[l.value,a.value,t.name],([c,u,h],[f,_,y])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!Ii(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return ih(n.default,{Component:f,route:c});const _=h.props[u],y=_?_===!0?c.params:typeof _=="function"?_(c):_:null,k=xd(f,ne({},y,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return ih(n.default,{Component:k,route:c})||k}}});function ih(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zd=NE;function OE(t){const e=aE(t.routes,t),n=t.parseQuery||CE,i=t.stringifyQuery||Qu,s=t.history,r=Vi(),o=Vi(),a=Vi(),l=Jm(ln);let c=ln;ii&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sa.bind(null,v=>""+v),h=sa.bind(null,TE),f=sa.bind(null,xr);function _(v,O){let R,L;return Fd(v)?(R=e.getRecordMatcher(v),L=O):L=v,e.addRoute(L,R)}function y(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function C(){return e.getRoutes().map(v=>v.record)}function k(v){return!!e.getRecordMatcher(v)}function D(v,O){if(O=ne({},O||l.value),typeof v=="string"){const g=ra(n,v,O.path),m=e.resolve({path:g.path},O),E=s.createHref(g.fullPath);return ne(g,m,{params:f(m.params),hash:xr(g.hash),redirectedFrom:void 0,href:E})}let R;if("path"in v)R=ne({},v,{path:ra(n,v.path,O.path).path});else{const g=ne({},v.params);for(const m in g)g[m]==null&&delete g[m];R=ne({},v,{params:h(g)}),O.params=h(O.params)}const L=e.resolve(R,O),ee=v.hash||"";L.params=u(f(L.params));const d=Lv(i,ne({},v,{hash:EE(ee),path:L.path})),p=s.createHref(d);return ne({fullPath:d,hash:ee,query:i===Qu?SE(v.query):v.query||{}},L,{redirectedFrom:void 0,href:p})}function M(v){return typeof v=="string"?ra(n,v,l.value.path):ne({},v)}function B(v,O){if(c!==v)return Ti(8,{from:O,to:v})}function N(v){return $e(v)}function fe(v){return N(ne(M(v),{replace:!0}))}function pe(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:R}=O;let L=typeof R=="function"?R(v):R;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=M(L):{path:L},L.params={}),ne({query:v.query,hash:v.hash,params:"path"in L?{}:v.params},L)}}function $e(v,O){const R=c=D(v),L=l.value,ee=v.state,d=v.force,p=v.replace===!0,g=pe(R);if(g)return $e(ne(M(g),{state:typeof g=="object"?ne({},ee,g.state):ee,force:d,replace:p}),O||R);const m=R;m.redirectedFrom=O;let E;return!d&&Fv(i,L,R)&&(E=Ti(16,{to:m,from:L}),St(L,L,!0,!1)),(E?Promise.resolve(E):tt(m,L)).catch(w=>Kt(w)?Kt(w,2)?w:on(w):Z(w,m,L)).then(w=>{if(w){if(Kt(w,2))return $e(ne({replace:p},M(w.to),{state:typeof w.to=="object"?ne({},ee,w.to.state):ee,force:d}),O||m)}else w=Rn(m,L,!0,p,ee);return rn(m,L,w),w})}function We(v,O){const R=B(v,O);return R?Promise.reject(R):Promise.resolve()}function Tt(v){const O=Qn.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function tt(v,O){let R;const[L,ee,d]=DE(v,O);R=oa(L.reverse(),"beforeRouteLeave",v,O);for(const g of L)g.leaveGuards.forEach(m=>{R.push(hn(m,v,O))});const p=We.bind(null,v,O);return R.push(p),Pe(R).then(()=>{R=[];for(const g of r.list())R.push(hn(g,v,O));return R.push(p),Pe(R)}).then(()=>{R=oa(ee,"beforeRouteUpdate",v,O);for(const g of ee)g.updateGuards.forEach(m=>{R.push(hn(m,v,O))});return R.push(p),Pe(R)}).then(()=>{R=[];for(const g of d)if(g.beforeEnter)if(Et(g.beforeEnter))for(const m of g.beforeEnter)R.push(hn(m,v,O));else R.push(hn(g.beforeEnter,v,O));return R.push(p),Pe(R)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),R=oa(d,"beforeRouteEnter",v,O),R.push(p),Pe(R))).then(()=>{R=[];for(const g of o.list())R.push(hn(g,v,O));return R.push(p),Pe(R)}).catch(g=>Kt(g,8)?g:Promise.reject(g))}function rn(v,O,R){a.list().forEach(L=>Tt(()=>L(v,O,R)))}function Rn(v,O,R,L,ee){const d=B(v,O);if(d)return d;const p=O===ln,g=ii?history.state:{};R&&(L||p?s.replace(v.fullPath,ne({scroll:p&&g&&g.scroll},ee)):s.push(v.fullPath,ee)),l.value=v,St(v,O,R,p),on()}let Ct;function ji(){Ct||(Ct=s.listen((v,O,R)=>{if(!nr.listening)return;const L=D(v),ee=pe(L);if(ee){$e(ne(ee,{replace:!0}),L).catch(os);return}c=L;const d=l.value;ii&&Kv(Vu(d.fullPath,R.delta),To()),tt(L,d).catch(p=>Kt(p,12)?p:Kt(p,2)?($e(p.to,L).then(g=>{Kt(g,20)&&!R.delta&&R.type===Es.pop&&s.go(-1,!1)}).catch(os),Promise.reject()):(R.delta&&s.go(-R.delta,!1),Z(p,L,d))).then(p=>{p=p||Rn(L,d,!1),p&&(R.delta&&!Kt(p,8)?s.go(-R.delta,!1):R.type===Es.pop&&Kt(p,20)&&s.go(-1,!1)),rn(L,d,p)}).catch(os)}))}let Xn=Vi(),ye=Vi(),oe;function Z(v,O,R){on(v);const L=ye.list();return L.length?L.forEach(ee=>ee(v,O,R)):console.error(v),Promise.reject(v)}function Vt(){return oe&&l.value!==ln?Promise.resolve():new Promise((v,O)=>{Xn.add([v,O])})}function on(v){return oe||(oe=!v,ji(),Xn.list().forEach(([O,R])=>v?R(v):O()),Xn.reset()),v}function St(v,O,R,L){const{scrollBehavior:ee}=t;if(!ii||!ee)return Promise.resolve();const d=!R&&zv(Vu(v.fullPath,0))||(L||!R)&&history.state&&history.state.scroll||null;return hd().then(()=>ee(v,O,d)).then(p=>p&&Vv(p)).catch(p=>Z(p,v,O))}const qe=v=>s.go(v);let Jn;const Qn=new Set,nr={currentRoute:l,listening:!0,addRoute:_,removeRoute:y,hasRoute:k,getRoutes:C,resolve:D,options:t,push:N,replace:fe,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ye.add,isReady:Vt,install(v){const O=this;v.component("RouterLink",za),v.component("RouterView",zd),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>rt(l)}),ii&&!Jn&&l.value===ln&&(Jn=!0,N(s.location).catch(ee=>{}));const R={};for(const ee in ln)Object.defineProperty(R,ee,{get:()=>l.value[ee],enumerable:!0});v.provide(Ql,O),v.provide(Kd,id(R)),v.provide(Ka,l);const L=v.unmount;Qn.add(v),v.unmount=function(){Qn.delete(v),Qn.size<1&&(c=ln,Ct&&Ct(),Ct=null,l.value=ln,Jn=!1,oe=!1),L()}}};function Pe(v){return v.reduce((O,R)=>O.then(()=>Tt(R)),Promise.resolve())}return nr}function DE(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ii(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ii(c,l))||s.push(l))}return[n,i,s]}const xE="/assets/google_btn-3f54b946.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw Oi(e)},Oi=function(t){return new Error("Firebase Database ("+qd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ME=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Co={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),i.push(n[u],n[h],n[f],n[_])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ME(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new LE;const f=r<<2|a>>4;if(i.push(f),c!==64){const _=a<<4&240|c>>2;if(i.push(_),h!==64){const y=c<<6&192|h;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yd=function(t){const e=Gd(t);return Co.encodeByteArray(e,!0)},Mr=function(t){return Yd(t).replace(/\./g,"")},Lr=function(t){try{return Co.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t){return Xd(void 0,t)}function Xd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!UE(n)||(t[n]=Xd(t[n],e[n]));return t}function UE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=()=>BE().__FIREBASE_DEFAULTS__,jE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$E=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lr(t[1]);return e&&JSON.parse(e)},Zl=()=>{try{return HE()||jE()||$E()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jd=t=>{var e,n;return(n=(e=Zl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},WE=t=>{const e=Jd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Qd=()=>{var t;return(t=Zl())===null||t===void 0?void 0:t.config},Zd=t=>{var e;return(e=Zl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Mr(JSON.stringify(n)),Mr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ec(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function KE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ep(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zE(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tp(){return qd.NODE_ADMIN===!0}function np(){try{return typeof indexedDB=="object"}catch{return!1}}function qE(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="FirebaseError";class $t extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=GE,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?YE(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $t(s,a,i)}}function YE(t,e){return t.replace(XE,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const XE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Is(Lr(r[0])||""),n=Is(Lr(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},JE=function(t){const e=ip(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},QE=function(t){const e=ip(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ci(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fr(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(sh(r)&&sh(o)){if(!Ur(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function sh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function ew(t,e){const n=new tw(t,e);return n.subscribe.bind(n)}class tw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");nw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=aa),s.error===void 0&&(s.error=aa),s.complete===void 0&&(s.complete=aa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function aa(){}function iw(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,b(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},So=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){return t&&t._delegate?t._delegate:t}class wt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ws;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aw(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ow(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ow(t){return t===kn?void 0:t}function aw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const cw={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},uw=J.INFO,hw={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},fw=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=hw[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fs{constructor(e){this.name=e,this._logLevel=uw,this._logHandler=fw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const dw=(t,e)=>e.some(n=>t instanceof n);let rh,oh;function pw(){return rh||(rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gw(){return oh||(oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sp=new WeakMap,Ga=new WeakMap,rp=new WeakMap,la=new WeakMap,tc=new WeakMap;function _w(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(mn(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sp.set(n,t)}).catch(()=>{}),tc.set(e,t),e}function mw(t){if(Ga.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ga.set(t,e)}let Ya={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ga.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yw(t){Ya=t(Ya)}function vw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ca(this),e,...n);return rp.set(i,e.sort?e.sort():[e]),mn(i)}:gw().includes(t)?function(...e){return t.apply(ca(this),e),mn(sp.get(this))}:function(...e){return mn(t.apply(ca(this),e))}}function Ew(t){return typeof t=="function"?vw(t):(t instanceof IDBTransaction&&mw(t),dw(t,pw())?new Proxy(t,Ya):t)}function mn(t){if(t instanceof IDBRequest)return _w(t);if(la.has(t))return la.get(t);const e=Ew(t);return e!==t&&(la.set(t,e),tc.set(e,t)),e}const ca=t=>tc.get(t);function ww(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=mn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(mn(o.result),l.oldVersion,l.newVersion,mn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Iw=["get","getKey","getAll","getAllKeys","count"],Tw=["put","add","delete","clear"],ua=new Map;function ah(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ua.get(e))return ua.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Tw.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Iw.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ua.set(e,r),r}yw(t=>({...t,get:(e,n,i)=>ah(e,n)||t.get(e,n,i),has:(e,n)=>!!ah(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sw(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Sw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",lh="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Fs("@firebase/app"),Rw="@firebase/app-compat",bw="@firebase/analytics-compat",Aw="@firebase/analytics",kw="@firebase/app-check-compat",Pw="@firebase/app-check",Nw="@firebase/auth",Ow="@firebase/auth-compat",Dw="@firebase/database",xw="@firebase/database-compat",Mw="@firebase/functions",Lw="@firebase/functions-compat",Fw="@firebase/installations",Uw="@firebase/installations-compat",Bw="@firebase/messaging",Hw="@firebase/messaging-compat",jw="@firebase/performance",$w="@firebase/performance-compat",Ww="@firebase/remote-config",Vw="@firebase/remote-config-compat",Kw="@firebase/storage",zw="@firebase/storage-compat",qw="@firebase/firestore",Gw="@firebase/firestore-compat",Yw="firebase",Xw="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="[DEFAULT]",Jw={[Xa]:"fire-core",[Rw]:"fire-core-compat",[Aw]:"fire-analytics",[bw]:"fire-analytics-compat",[Pw]:"fire-app-check",[kw]:"fire-app-check-compat",[Nw]:"fire-auth",[Ow]:"fire-auth-compat",[Dw]:"fire-rtdb",[xw]:"fire-rtdb-compat",[Mw]:"fire-fn",[Lw]:"fire-fn-compat",[Fw]:"fire-iid",[Uw]:"fire-iid-compat",[Bw]:"fire-fcm",[Hw]:"fire-fcm-compat",[jw]:"fire-perf",[$w]:"fire-perf-compat",[Ww]:"fire-rc",[Vw]:"fire-rc-compat",[Kw]:"fire-gcs",[zw]:"fire-gcs-compat",[qw]:"fire-fst",[Gw]:"fire-fst-compat","fire-js":"fire-js",[Yw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Map,Qa=new Map;function Qw(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ut(t){const e=t.name;if(Qa.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Qa.set(e,t);for(const n of Br.values())Qw(n,t);return!0}function nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yn=new Di("app","Firebase",Zw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=Xw;function op(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ja,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw yn.create("bad-app-name",{appName:String(s)});if(n||(n=Qd()),!n)throw yn.create("no-options");const r=Br.get(s);if(r){if(Ur(n,r.options)&&Ur(i,r.config))return r;throw yn.create("duplicate-app",{appName:s})}const o=new lw(s);for(const l of Qa.values())o.addComponent(l);const a=new eI(n,i,o);return Br.set(s,a),a}function ic(t=Ja){const e=Br.get(t);if(!e&&t===Ja&&Qd())return op();if(!e)throw yn.create("no-app",{appName:t});return e}function Ze(t,e,n){var i;let s=(i=Jw[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(a.join(" "));return}Ut(new wt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="firebase-heartbeat-database",nI=1,Ts="firebase-heartbeat-store";let ha=null;function ap(){return ha||(ha=ww(tI,nI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ts)}}}).catch(t=>{throw yn.create("idb-open",{originalErrorMessage:t.message})})),ha}async function iI(t){try{return await(await ap()).transaction(Ts).objectStore(Ts).get(lp(t))}catch(e){if(e instanceof $t)$n.warn(e.message);else{const n=yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function ch(t,e){try{const i=(await ap()).transaction(Ts,"readwrite");await i.objectStore(Ts).put(e,lp(t)),await i.done}catch(n){if(n instanceof $t)$n.warn(n.message);else{const i=yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(i.message)}}}function lp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=1024,rI=30*24*60*60*1e3;class oI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lI(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=uh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=rI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=uh(),{heartbeatsToSend:n,unsentEntries:i}=aI(this._heartbeatsCache.heartbeats),s=Mr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function uh(){return new Date().toISOString().substring(0,10)}function aI(t,e=sI){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),hh(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hh(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class lI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return np()?qE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ch(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ch(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hh(t){return Mr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t){Ut(new wt("platform-logger",e=>new Cw(e),"PRIVATE")),Ut(new wt("heartbeat",e=>new oI(e),"PRIVATE")),Ze(Xa,lh,t),Ze(Xa,lh,"esm2017"),Ze("fire-js","")}cI("");function sc(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function cp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uI=cp,up=new Di("auth","Firebase",cp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Fs("@firebase/auth");function hI(t,...e){Hr.logLevel<=J.WARN&&Hr.warn(`Auth (${Tn}): ${t}`,...e)}function Sr(t,...e){Hr.logLevel<=J.ERROR&&Hr.error(`Auth (${Tn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw rc(t,...e)}function Lt(t,...e){return rc(t,...e)}function hp(t,e,n){const i=Object.assign(Object.assign({},uI()),{[e]:n});return new Di("auth","Firebase",i).create(e,{appName:t.name})}function fI(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Bt(t,"argument-error"),hp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rc(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return up.create(t,...e)}function $(t,e,...n){if(!t)throw rc(e,...n)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sr(e),new Error(e)}function en(t,e){t||Gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dI(){return fh()==="http:"||fh()==="https:"}function fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dI()||KE()||"connection"in navigator)?navigator.onLine:!0}function gI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=ec()||ep()}get(){return pI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=new Us(3e4,6e4);function dp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bs(t,e,n,i,s={}){return pp(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fp.fetch()(gp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function pp(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},_I),e);try{const s=new vI(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw cr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw cr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw cr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw cr(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hp(t,u,c);Bt(t,u)}}catch(s){if(s instanceof $t)throw s;Bt(t,"network-request-failed",{message:String(s)})}}async function yI(t,e,n,i,s={}){const r=await Bs(t,e,n,i,s);return"mfaPendingCredential"in r&&Bt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function gp(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?oc(t.config,s):`${t.config.apiScheme}://${s}`}class vI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Lt(this.auth,"network-request-failed")),mI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Lt(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e){return Bs(t,"POST","/v1/accounts:delete",e)}async function wI(t,e){return Bs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function II(t,e=!1){const n=In(t),i=await n.getIdToken(e),s=ac(i);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ls(fa(s.auth_time)),issuedAtTime:ls(fa(s.iat)),expirationTime:ls(fa(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function fa(t){return Number(t)*1e3}function ac(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Sr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lr(n);return s?JSON.parse(s):(Sr("Failed to decode base64 JWT payload"),null)}catch(s){return Sr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function TI(t){const e=ac(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof $t&&CI(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function CI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Cs(t,wI(n,{idToken:i}));$(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?AI(r.providerUserInfo):[],a=bI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new _p(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function RI(t){const e=In(t);await jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bI(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function AI(t){return t.map(e=>{var{providerId:n}=e,i=sc(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(t,e){const n=await pp(t,{},async()=>{const i=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=gp(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fp.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await kI(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Ss;return i&&($(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&($(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=sc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new _p(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Cs(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return II(this,e)}reload(){return RI(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await jr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Cs(this,EI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,D=(c=n.createdAt)!==null&&c!==void 0?c:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:N,isAnonymous:fe,providerData:pe,stsTokenManager:$e}=n;$(B&&$e,e,"internal-error");const We=Ss.fromJSON(this.name,$e);$(typeof B=="string",e,"internal-error"),cn(h,e.name),cn(f,e.name),$(typeof N=="boolean",e,"internal-error"),$(typeof fe=="boolean",e,"internal-error"),cn(_,e.name),cn(y,e.name),cn(C,e.name),cn(k,e.name),cn(D,e.name),cn(M,e.name);const Tt=new Bn({uid:B,auth:e,email:f,emailVerified:N,displayName:h,isAnonymous:fe,photoURL:y,phoneNumber:_,tenantId:C,stsTokenManager:We,createdAt:D,lastLoginAt:M});return pe&&Array.isArray(pe)&&(Tt.providerData=pe.map(tt=>Object.assign({},tt))),k&&(Tt._redirectEventId=k),Tt}static async _fromIdTokenResponse(e,n,i=!1){const s=new Ss;s.updateFromServerResponse(n);const r=new Bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await jr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new Map;function Yt(t){en(t instanceof Function,"Expected a class definition");let e=dh.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mp.type="NONE";const ph=mp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Rr(this.userKey,s.apiKey,r),this.fullPersistenceKey=Rr("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new fi(Yt(ph),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Yt(ph);const o=Rr(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Bn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new fi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new fi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ep(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ip(e))return"Blackberry";if(Tp(e))return"Webos";if(lc(e))return"Safari";if((e.includes("chrome/")||vp(e))&&!e.includes("edge/"))return"Chrome";if(wp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function yp(t=je()){return/firefox\//i.test(t)}function lc(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vp(t=je()){return/crios\//i.test(t)}function Ep(t=je()){return/iemobile/i.test(t)}function wp(t=je()){return/android/i.test(t)}function Ip(t=je()){return/blackberry/i.test(t)}function Tp(t=je()){return/webos/i.test(t)}function Ro(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PI(t=je()){var e;return Ro(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NI(){return zE()&&document.documentMode===10}function Cp(t=je()){return Ro(t)||wp(t)||Tp(t)||Ip(t)||/windows phone/i.test(t)||Ep(t)}function OI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e=[]){let n;switch(t){case"Browser":n=gh(je());break;case"Worker":n=`${gh(je())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(t,e={}){return Bs(t,"GET","/v2/passwordPolicy",dp(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=6;class LI{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _h(this),this.idTokenSubscription=new _h(this),this.beforeStateQueue=new DI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?In(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xI(this),n=new LI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bo(t){return In(t)}class _h{constructor(e){this.auth=e,this.observer=null,this.addObserver=ew(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function BI(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Lt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",UI().appendChild(i)})}function HI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t,e){const n=nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Ur(r,e??{}))return s;Bt(s,"already-initialized")}return n.initialize({options:e})}function $I(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function WI(t,e,n){const i=bo(t);$(i._canInitEmulator,i,"emulator-config-failed"),$(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=Rp(e),{host:o,port:a}=VI(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||KI()}function Rp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VI(t){const e=Rp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:mh(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:mh(o)}}}function mh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,n){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e){return yI(t,"POST","/v1/accounts:signInWithIdp",dp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="http://localhost";class Wn extends bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=sc(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Wn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,di(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:zI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends cc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Hs{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return qt.credential(n,i)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Hs{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Hs{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return pn.credential(n,i)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Bn._fromIdTokenResponse(e,i,s),o=yh(i);return new Si({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=yh(i);return new Si({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function yh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends $t{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,$r.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new $r(e,n,i,s)}}function Ap(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?$r._fromErrorAndOperation(t,r,e,i):r})}async function qI(t,e,n=!1){const i=await Cs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Si._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Cs(t,Ap(i,s,e,t),n);$(r.idToken,i,"internal-error");const o=ac(r.idToken);$(o,i,"internal-error");const{sub:a}=o;return $(t.uid===a,i,"user-mismatch"),Si._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Bt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(t,e,n=!1){const i="signIn",s=await Ap(t,i,e),r=await Si._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function kp(t,e,n,i){return In(t).onIdTokenChanged(e,n,i)}function XI(t,e,n){return In(t).beforeAuthStateChanged(e,n)}function JI(t){return In(t).signOut()}const Wr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wr,"1"),this.storage.removeItem(Wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){const t=je();return lc(t)||Ro(t)}const ZI=1e3,eT=10;class Np extends Pp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QI()&&OI(),this.fallbackToPolling=Cp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);NI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eT):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},ZI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Np.type="LOCAL";const tT=Np;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends Pp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Op.type="SESSION";const Dp=Op;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Ao(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await nT(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ao.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=uc("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function sT(t){Ft().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function rT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aT(){return xp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="firebaseLocalStorageDb",lT=1,Vr="firebaseLocalStorage",Lp="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ko(t,e){return t.transaction([Vr],e?"readwrite":"readonly").objectStore(Vr)}function cT(){const t=indexedDB.deleteDatabase(Mp);return new js(t).toPromise()}function el(){const t=indexedDB.open(Mp,lT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Vr,{keyPath:Lp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Vr)?e(i):(i.close(),await cT(),e(await el()))})})}async function vh(t,e,n){const i=ko(t,!0).put({[Lp]:e,value:n});return new js(i).toPromise()}async function uT(t,e){const n=ko(t,!1).get(e),i=await new js(n).toPromise();return i===void 0?null:i.value}function Eh(t,e){const n=ko(t,!0).delete(e);return new js(n).toPromise()}const hT=800,fT=3;class Fp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await el(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>fT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ao._getInstance(aT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rT(),!this.activeServiceWorker)return;this.sender=new iT(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await el();return await vh(e,Wr,"1"),await Eh(e,Wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>vh(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>uT(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Eh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ko(s,!1).getAll();return new js(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fp.type="LOCAL";const dT=Fp;new Us(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t,e){return e?Yt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends bp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pT(t){return YI(t.auth,new hc(t),t.bypassAuthState)}function gT(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),GI(n,new hc(t),t.bypassAuthState)}async function _T(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),qI(n,new hc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pT;case"linkViaPopup":case"linkViaRedirect":return _T;case"reauthViaPopup":case"reauthViaRedirect":return gT;default:Bt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new Us(2e3,1e4);async function yT(t,e,n){const i=bo(t);fI(t,e,cc);const s=Up(i,n);return new Dn(i,"signInViaPopup",e,s).executeNotNull()}class Dn extends Bp{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mT.get())};e()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="pendingRedirect",br=new Map;class ET extends Bp{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=br.get(this.auth._key());if(!e){try{const i=await wT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}br.set(this.auth._key(),e)}return this.bypassAuthState||br.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wT(t,e){const n=CT(e),i=TT(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function IT(t,e){br.set(t._key(),e)}function TT(t){return Yt(t._redirectPersistence)}function CT(t){return Rr(vT,t.config.apiKey,t.name)}async function ST(t,e,n=!1){const i=bo(t),s=Up(i,e),o=await new ET(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=10*60*1e3;class bT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Hp(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RT&&this.cachedEventUids.clear(),this.cachedEventUids.has(wh(e))}saveEventToCache(e){this.cachedEventUids.add(wh(e)),this.lastProcessedEventTime=Date.now()}}function wh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(t,e={}){return Bs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NT=/^https?/;async function OT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kT(t);for(const n of e)try{if(DT(n))return}catch{}Bt(t,"unauthorized-domain")}function DT(t){const e=Za(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!NT.test(n))return!1;if(PT.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=new Us(3e4,6e4);function Ih(){const t=Ft().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MT(t){return new Promise((e,n)=>{var i,s,r;function o(){Ih(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ih(),n(Lt(t,"network-request-failed"))},timeout:xT.get()})}if(!((s=(i=Ft().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ft().gapi)===null||r===void 0)&&r.load)o();else{const a=HI("iframefcb");return Ft()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},BI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ar=null,e})}let Ar=null;function LT(t){return Ar=Ar||MT(t),Ar}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=new Us(5e3,15e3),UT="__/auth/iframe",BT="emulator/auth/iframe",HT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $T(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oc(e,BT):`https://${t.config.authDomain}/${UT}`,i={apiKey:e.apiKey,appName:t.name,v:Tn},s=jT.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${xi(i).slice(1)}`}async function WT(t){const e=await LT(t),n=Ft().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:$T(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HT,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Ft().setTimeout(()=>{r(o)},FT.get());function l(){Ft().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KT=500,zT=600,qT="_blank",GT="http://localhost";class Th{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YT(t,e,n,i=KT,s=zT){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},VT),{width:i.toString(),height:s.toString(),top:r,left:o}),c=je().toLowerCase();n&&(a=vp(c)?qT:n),yp(c)&&(e=e||GT,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[_,y])=>`${f}${_}=${y},`,"");if(PI(c)&&a!=="_self")return XT(e||"",a),new Th(null);const h=window.open(e||"",a,u);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Th(h)}function XT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="__/auth/handler",QT="emulator/auth/handler",ZT=encodeURIComponent("fac");async function Ch(t,e,n,i,s,r){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Tn,eventId:s};if(e instanceof cc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Hs){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${ZT}=${encodeURIComponent(l)}`:"";return`${e0(t)}?${xi(a).slice(1)}${c}`}function e0({config:t}){return t.emulator?oc(t,QT):`https://${t.authDomain}/${JT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="webStorageSupport";class t0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dp,this._completeRedirectFn=ST,this._overrideRedirectResult=IT}async _openPopup(e,n,i,s){var r;en((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ch(e,n,i,Za(),s);return YT(e,o,uc())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Ch(e,n,i,Za(),s);return sT(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(en(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await WT(e),i=new bT(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(da,{type:da},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[da];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cp()||lc()||Ro()}}const n0=t0;var Sh="@firebase/auth",Rh="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function r0(t){Ut(new wt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sp(t)},c=new FI(i,s,r,l);return $I(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ut(new wt("auth-internal",e=>{const n=bo(e.getProvider("auth").getImmediate());return(i=>new i0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Sh,Rh,s0(t)),Ze(Sh,Rh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=5*60,a0=Zd("authIdTokenMaxAge")||o0;let bh=null;const l0=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>a0)return;const s=n==null?void 0:n.token;bh!==s&&(bh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jp(t=ic()){const e=nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jI(t,{popupRedirectResolver:n0,persistence:[dT,tT,Dp]}),i=Zd("authTokenSyncURL");if(i){const r=l0(i);XI(n,r,()=>r(n.currentUser)),kp(n,o=>r(o))}const s=Jd("auth");return s&&WI(n,`http://${s}`),n}r0("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=new Map,u0={activated:!1,tokenObservers:[]};function It(t){return c0.get(t)||Object.assign({},u0)}const Ah={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ws,await f0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ws,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function f0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Kr=new Di("appCheck","AppCheck",d0);function $p(t){if(!It(t).activated)throw Kr.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="firebase-app-check-database",g0=1,tl="firebase-app-check-store";let ur=null;function _0(){return ur||(ur=new Promise((t,e)=>{try{const n=indexedDB.open(p0,g0);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Kr.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(tl,{keyPath:"compositeKey"})}}}catch(n){e(Kr.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ur)}function m0(t,e){return y0(v0(t),e)}async function y0(t,e){const i=(await _0()).transaction(tl,"readwrite"),r=i.objectStore(tl).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(Kr.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function v0(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Fs("@firebase/app-check");function kh(t,e){return np()?m0(t,e).catch(n=>{nl.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0={error:"UNKNOWN_ERROR"};function w0(t){return Co.encodeString(JSON.stringify(t),!1)}async function il(t,e=!1){const n=t.app;$p(n);const i=It(n);let s=i.token,r;if(s&&!Zi(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(Zi(l)?s=l:await kh(n,void 0))}if(!e&&s&&Zi(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await It(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?nl.warn(l.message):nl.error(l),r=l}let a;return s?r?Zi(s)?a={token:s.token,internalError:r}:a=Nh(r):(a={token:s.token},i.token=s,await kh(n,s)):a=Nh(r),o&&S0(n,a),a}async function I0(t){const e=t.app;$p(e);const{provider:n}=It(e);{const{token:i}=await n.getToken();return{token:i}}}function T0(t,e,n,i){const{app:s}=t,r=It(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Zi(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Ph(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Ph(t))}function Wp(t,e){const n=It(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Ph(t){const{app:e}=t,n=It(e);let i=n.tokenRefresher;i||(i=C0(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function C0(t){const{app:e}=t;return new h0(async()=>{const n=It(e);let i;if(n.token?i=await il(t,!0):i=await il(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=It(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Ah.RETRIAL_MIN_WAIT,Ah.RETRIAL_MAX_WAIT)}function S0(t,e){const n=It(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Zi(t){return t.expireTimeMillis-Date.now()>0}function Nh(t){return{token:w0(E0),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=It(this.app);for(const n of e)Wp(this.app,n.next);return Promise.resolve()}}function b0(t,e){return new R0(t,e)}function A0(t){return{getToken:e=>il(t,e),getLimitedUseToken:()=>I0(t),addTokenListener:e=>T0(t,"INTERNAL",e),removeTokenListener:e=>Wp(t.app,e)}}const k0="@firebase/app-check",P0="0.8.0",N0="app-check",Oh="app-check-internal";function O0(){Ut(new wt(N0,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return b0(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Oh).initialize()})),Ut(new wt(Oh,t=>{const e=t.getProvider("app-check").getImmediate();return A0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ze(k0,P0)}O0();var D0="firebase",x0="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze(D0,x0,"app");const Vp=Symbol("firebaseApp");function fc(t){return Zy()&&Mt(Vp,null)||ic(t)}const M0=typeof window<"u",hr=new WeakMap;function L0(t,e){if(!hr.has(t)){const n=zf(!0);hr.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),hr.delete(t)}}return hr.get(t)}const Kp=new WeakMap;function F0(t){return Kp.get(fc(t))}const fr=new WeakMap;function U0(t){const e=fc(t);if(!fr.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{fr.set(e,r),n(r.value)}];fr.set(e,s)}return fr.get(e)}function B0(t,e){const n=jp(e);kp(n,i=>{const s=U0();t.value=i,Array.isArray(s)&&s[1](t)})}const Dh="@firebase/database",xh="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp="";function H0(t){zp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Is(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new j0(e)}}catch{}return new $0},xn=qp("localStorage"),sl=qp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Fs("@firebase/database"),W0=function(){let t=1;return function(){return t++}}(),Gp=function(t){const e=sw(t),n=new ZE;n.update(e);const i=n.digest();return Co.encodeByteArray(i)},$s=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=$s.apply(null,i):typeof i=="object"?e+=Ae(i):e+=i,e+=" "}return e};let Hn=null,Mh=!0;const V0=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(pi.logLevel=J.VERBOSE,Hn=pi.log.bind(pi),e&&sl.set("logging_enabled",!0)):typeof t=="function"?Hn=t:(Hn=null,sl.remove("logging_enabled"))},Oe=function(...t){if(Mh===!0&&(Mh=!1,Hn===null&&sl.get("logging_enabled")===!0&&V0(!0)),Hn){const e=$s.apply(null,t);Hn(e)}},Ws=function(t){return function(...e){Oe(t,...e)}},rl=function(...t){const e="FIREBASE INTERNAL ERROR: "+$s(...t);pi.error(e)},Vn=function(...t){const e=`FIREBASE FATAL ERROR: ${$s(...t)}`;throw pi.error(e),new Error(e)},et=function(...t){const e="FIREBASE WARNING: "+$s(...t);pi.warn(e)},K0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},z0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ri="[MIN_NAME]",Kn="[MAX_NAME]",Mi=function(t,e){if(t===e)return 0;if(t===Ri||e===Kn)return-1;if(e===Ri||t===Kn)return 1;{const n=Lh(t),i=Lh(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},q0=function(t,e){return t===e?0:t<e?-1:1},Ki=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},dc=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ae(e[i]),n+=":",n+=dc(t[e[i]]);return n+="}",n},Xp=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Jp=function(t){b(!Yp(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},G0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Y0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},X0=new RegExp("^-?(0*)\\d{1,10}$"),J0=-2147483648,Q0=2147483647,Lh=function(t){if(X0.test(t)){const e=Number(t);if(e>=J0&&e<=Q0)return e}return null},Vs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw et("Exception was thrown by user callback.",n),e},Math.floor(0))}},Z0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},cs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Oe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class ol{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ol.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="5",Qp="v",Zp="s",eg="r",tg="f",ng=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ig="ls",sg="p",al="ac",rg="websocket",og="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function iC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ag(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let i;if(e===rg)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===og)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);iC(t)&&(n.ns=t.namespace);const s=[];return ot(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.counters_={}}incrementCounter(e,n=1){sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return FE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa={},ga={};function gc(t){const e=t.toString();return pa[e]||(pa[e]=new sC),pa[e]}function rC(t,e){const n=t.toString();return ga[n]||(ga[n]=e()),ga[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Vs(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="start",aC="close",lC="pLPCommand",cC="pRTLPCB",lg="id",cg="pw",ug="ser",uC="cb",hC="seg",fC="ts",dC="d",pC="dframe",hg=1870,fg=30,gC=hg-fg,_C=25e3,mC=3e4;class ri{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ws(e),this.stats_=gc(n),this.urlFn=l=>(this.appCheckToken&&(l[al]=this.appCheckToken),ag(n,og,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new oC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(mC)),z0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _c((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fh)this.id=a,this.password=l;else if(o===aC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Fh]="t",i[ug]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[uC]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Qp]=pc,this.transportSessionId&&(i[Zp]=this.transportSessionId),this.lastSessionId&&(i[ig]=this.lastSessionId),this.applicationId&&(i[sg]=this.applicationId),this.appCheckToken&&(i[al]=this.appCheckToken),typeof location<"u"&&location.hostname&&ng.test(location.hostname)&&(i[eg]=tg);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ri.forceAllow_=!0}static forceDisallow(){ri.forceDisallow_=!0}static isAvailable(){return ri.forceAllow_?!0:!ri.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!G0()&&!Y0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Yd(n),s=Xp(i,gC);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[pC]="t",i[lg]=e,i[cg]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _c{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=W0(),window[lC+this.uniqueCallbackIdentifier]=e,window[cC+this.uniqueCallbackIdentifier]=n,this.myIFrame=_c.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Oe("frame writing exception"),a.stack&&Oe(a.stack),Oe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Oe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[lg]=this.myID,e[cg]=this.myPW,e[ug]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fg+i.length<=hg;){const o=this.pendingSegs.shift();i=i+"&"+hC+s+"="+o.seg+"&"+fC+s+"="+o.ts+"&"+dC+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(_C)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Oe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=16384,vC=45e3;let zr=null;typeof MozWebSocket<"u"?zr=MozWebSocket:typeof WebSocket<"u"&&(zr=WebSocket);class ft{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ws(this.connId),this.stats_=gc(n),this.connURL=ft.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Qp]=pc,typeof location<"u"&&location.hostname&&ng.test(location.hostname)&&(o[eg]=tg),n&&(o[Zp]=n),i&&(o[ig]=i),s&&(o[al]=s),r&&(o[sg]=r),ag(e,rg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xn.set("previous_websocket_failure",!0);try{let i;tp(),this.mySock=new zr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&zr!==null&&!ft.forceDisallow_}static previouslyFailed(){return xn.isInMemoryStorage||xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Is(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Xp(n,yC);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ri,ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ft&&ft.isAvailable();let i=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ft];else{const s=this.transports_=[];for(const r of Rs.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Rs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=6e4,wC=5e3,IC=10*1024,TC=100*1024,_a="t",Uh="d",CC="s",Bh="r",SC="e",Hh="o",jh="a",$h="n",Wh="p",RC="h";class bC{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ws("c:"+this.id+":"),this.transportManager_=new Rs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=cs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>TC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>IC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_a in e){const n=e[_a];n===jh?this.upgradeIfSecondaryHealthy_():n===Bh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ki("t",e),i=Ki("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$h,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ki("t",e),i=Ki("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ki(_a,e);if(Uh in e){const i=e[Uh];if(n===RC){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===$h){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===CC?this.onConnectionShutdown_(i):n===Bh?this.onReset_(i):n===SC?rl("Server Error: "+i):n===Hh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),pc!==i&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),cs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):cs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends pg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ec()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qr}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=32,Kh=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function re(){return new he("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wn(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function gg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function AC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _g(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function mg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function we(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof he)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new he(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function st(t,e){const n=G(t),i=G(e);if(n===null)return e;if(n===i)return st(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function yg(t,e){if(wn(t)!==wn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function gt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(wn(t)>wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class kC{constructor(e,n){this.errorPrefix_=n,this.parts_=_g(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=So(this.parts_[i]);vg(this)}}function PC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=So(e),vg(t)}function NC(t){const e=t.parts_.pop();t.byteLength_-=So(e),t.parts_.length>0&&(t.byteLength_-=1)}function vg(t){if(t.byteLength_>Kh)throw new Error(t.errorPrefix_+"has a key path longer than "+Kh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vh+") or object contains a cycle "+Pn(t))}function Pn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends pg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new mc}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=1e3,OC=60*5*1e3,zh=30*1e3,DC=1.3,xC=3e4,MC="server_kill",qh=3;class Qt extends dg{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Qt.nextPersistentConnectionId_++,this.log_=Ws("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zi,this.maxReconnectDelay_=OC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!tp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Ae(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new ws,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Qt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&sn(e,"w")){const i=Ci(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||QE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=JE(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):rl("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xC&&(this.reconnectDelay_=zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*DC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Qt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Oe("getToken() completed but was canceled"):(Oe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new bC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,_=>{et(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(MC)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&et(h),l())}}}interrupt(e){Oe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Oe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qa(this.interruptReasons_)&&(this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>dc(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new he(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Oe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qh&&(this.reconnectDelay_=zh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Oe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+zp.replace(/\./g,"-")]=1,ec()?e["framework.cordova"]=1:ep()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qr.getInstance().currentlyOnline();return qa(this.interruptReasons_)&&e}}Qt.nextPersistentConnectionId_=0;Qt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Y(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Y(Ri,e),s=new Y(Ri,n);return this.compare(i,s)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;class Eg extends Po{static get __EMPTY_NODE(){return dr}static set __EMPTY_NODE(e){dr=e}compare(e,n){return Mi(e.name,n.name)}isDefinedOn(e){throw Oi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Kn,dr)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,dr)}toString(){return".key"}}const gi=new Eg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Ee.RED,this.left=s??Ye.EMPTY_NODE,this.right=r??Ye.EMPTY_NODE}copy(e,n,i,s,r){return new Ee(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class LC{copy(e,n,i,s,r){return this}insert(e,n,i){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,n=Ye.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ye(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new pr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new pr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new pr(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new LC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t,e){return Mi(t.name,e.name)}function yc(t,e){return Mi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll;function UC(t){ll=t}const wg=function(t){return typeof t=="number"?"number:"+Jp(t):"string:"+t},Ig=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sn(e,".sv"),"Priority must be a string or number.")}else b(t===ll||t.isEmpty(),"priority of unexpected type.");b(t===ll||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh;class ve{constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ig(this.priorityNode_)}static set __childrenNodeConstructor(e){Gh=e}static get __childrenNodeConstructor(){return Gh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:G(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=G(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(b(i!==".priority"||wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Jp(this.value_):e+=this.value_,this.lazyHash_=Gp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ve.VALUE_TYPE_ORDER.indexOf(n),r=ve.VALUE_TYPE_ORDER.indexOf(i);return b(s>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tg,Cg;function BC(t){Tg=t}function HC(t){Cg=t}class jC extends Po{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Mi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Kn,new ve("[PRIORITY-POST]",Cg))}makePost(e,n){const i=Tg(e);return new Y(n,new ve("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ue=new jC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=Math.log(2);class WC{constructor(e){const n=r=>parseInt(Math.log(r)/$C,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gr=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,null,null);{const _=parseInt(u/2,10)+l,y=s(l,_),C=s(_+1,c);return h=t[_],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,y,C)}},r=function(l){let c=null,u=null,h=t.length;const f=function(y,C){const k=h-y,D=h;h-=y;const M=s(k+1,D),B=t[k],N=n?n(B):B;_(new Ee(N,B.node,C,null,M))},_=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const C=l.nextBitIsOne(),k=Math.pow(2,l.count-(y+1));C?f(k,Ee.BLACK):(f(k,Ee.BLACK),f(k,Ee.RED))}return u},o=new WC(t.length),a=r(o);return new Ye(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma;const ti={};class Xt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(ti&&Ue,"ChildrenNode.ts has not been loaded"),ma=ma||new Xt({".priority":ti},{".priority":Ue}),ma}get(e){const n=Ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ye?n:null}hasIndex(e){return sn(this.indexSet_,e.toString())}addIndex(e,n){b(e!==gi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(Y.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Gr(i,e.getCompare()):a=ti;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Xt(u,c)}addToIndexes(e,n){const i=Fr(this.indexes_,(s,r)=>{const o=Ci(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),s===ti)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Gr(a,o.getCompare())}else return ti;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new Xt(i,this.indexSet_)}removeFromIndexes(e,n){const i=Fr(this.indexes_,s=>{if(s===ti)return s;{const r=n.get(e.name);return r?s.remove(new Y(e.name,r)):s}});return new Xt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;class te{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ig(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qi||(qi=new te(new Ye(yc),null,Xt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qi}updatePriority(e){return this.children_.isEmpty()?this:new te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qi:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Y(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?qi:this.priorityNode_;return new te(s,o,r)}}updateChild(e,n){const i=G(e);if(i===null)return n;{b(G(e)!==".priority"||wn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ce(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Ue,(o,a)=>{n[o]=a.val(e),i++,r&&te.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wg(this.getPriority().val())+":"),this.forEachChild(Ue,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Gp(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Y(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Y.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ks?-1:0}withIndex(e){if(e===gi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new te(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===gi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Ue),s=n.getIterator(Ue);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===gi?null:this.indexMap_.get(e.toString())}}te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VC extends te{constructor(){super(new Ye(yc),te.EMPTY_NODE,Xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return te.EMPTY_NODE}isEmpty(){return!1}}const Ks=new VC;Object.defineProperties(Y,{MIN:{value:new Y(Ri,te.EMPTY_NODE)},MAX:{value:new Y(Kn,Ks)}});Eg.__EMPTY_NODE=te.EMPTY_NODE;ve.__childrenNodeConstructor=te;UC(Ks);HC(Ks);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=!0;function De(t,e=null){if(t===null)return te.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,De(e))}if(!(t instanceof Array)&&KC){const n=[];let i=!1;if(ot(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=De(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return te.EMPTY_NODE;const r=Gr(n,FC,o=>o.name,yc);if(i){const o=Gr(n,Ue.getCompare());return new te(r,De(e),new Xt({".priority":o},{".priority":Ue}))}else return new te(r,De(e),Xt.Default)}else{let n=te.EMPTY_NODE;return ot(t,(i,s)=>{if(sn(t,i)&&i.substring(0,1)!=="."){const r=De(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(De(e))}}BC(De);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC extends Po{constructor(e){super(),this.indexPath_=e,b(!z(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Mi(e.name,n.name):r}makePost(e,n){const i=De(e),s=te.EMPTY_NODE.updateChild(this.indexPath_,i);return new Y(n,s)}maxPost(){const e=te.EMPTY_NODE.updateChild(this.indexPath_,Ks);return new Y(Kn,e)}toString(){return _g(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC extends Po{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Mi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const i=De(e);return new Y(n,i)}toString(){return".value"}}const GC=new qC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){return{type:"value",snapshotNode:t}}function XC(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function JC(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Yh(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ri}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new vc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ue?n="$priority":t.index_===GC?n="$value":t.index_===gi?n="$key":(b(t.index_ instanceof zC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ae(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ae(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ae(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ue&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends dg{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ws("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Yr.getListenId_(e,i),a={};this.listens_[o]=a;const l=Xh(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Ci(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=Yr.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Xh(e._queryParams),i=e._path.toString(),s=new ws;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Is(a.responseText)}catch{et("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.rootNode_=te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(){return{value:null,children:new Map}}function Sg(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=G(e);t.children.has(i)||t.children.set(i,Xr());const s=t.children.get(i);e=ce(e),Sg(s,e,n)}}function cl(t,e,n){t.value!==null?n(e,t.value):eS(t,(i,s)=>{const r=new he(e.toString()+"/"+i);cl(s,r,n)})}function eS(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=10*1e3,nS=30*1e3,iS=5*60*1e3;class sS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tS(e);const i=Qh+(nS-Qh)*Math.random();cs(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ot(e,(s,r)=>{r>0&&sn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),cs(this.reportStats_.bind(this),Math.floor(Math.random()*2*iS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ot||(Ot={}));function Rg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ag(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Ot.ACK_USER_WRITE,this.source=Rg()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new Jr(re(),n,this.revert)}}else return b(G(this.path)===e,"operationForChild called for unrelated child."),new Jr(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Ot.OVERWRITE}operationForChild(e){return z(this.path)?new zn(this.source,re(),this.snap.getImmediateChild(e)):new zn(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Ot.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new zn(this.source,re(),n.value):new bs(this.source,re(),n)}else return b(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bs(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function rS(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(QC(o.childName,o.snapshotNode))}),Gi(t,s,"child_removed",e,i,n),Gi(t,s,"child_added",e,i,n),Gi(t,s,"child_moved",r,i,n),Gi(t,s,"child_changed",e,i,n),Gi(t,s,"value",e,i,n),s}function Gi(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>aS(t,a,l)),o.forEach(a=>{const l=oS(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function oS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function aS(t,e,n){if(e.childName==null||n.childName==null)throw Oi("Should only compare child_ events.");const i=new Y(e.childName,e.snapshotNode),s=new Y(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t,e){return{eventCache:t,serverCache:e}}function us(t,e,n,i){return kg(new Ec(e,n,i),t.serverCache)}function Pg(t,e,n,i){return kg(t.eventCache,new Ec(e,n,i))}function ul(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya;const lS=()=>(ya||(ya=new Ye(q0)),ya);class le{constructor(e,n=lS()){this.value=e,this.children=n}static fromObject(e){let n=new le(null);return ot(e,(i,s)=>{n=n.set(new he(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:re(),value:this.value};if(z(e))return null;{const i=G(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:we(new he(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=G(e),i=this.children.get(n);return i!==null?i.subtree(ce(e)):new le(null)}}set(e,n){if(z(e))return new le(n,this.children);{const i=G(e),r=(this.children.get(i)||new le(null)).set(ce(e),n),o=this.children.insert(i,r);return new le(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=G(e),i=this.children.get(n);if(i){const s=i.remove(ce(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new le(null):new le(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=G(e),i=this.children.get(n);return i?i.get(ce(e)):null}}setTree(e,n){if(z(e))return n;{const i=G(e),r=(this.children.get(i)||new le(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new le(this.value,o)}}fold(e){return this.fold_(re(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(we(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,re(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(z(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),we(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,re(),n)}foreachOnPath_(e,n,i){if(z(e))return this;{this.value&&i(n,this.value);const s=G(e),r=this.children.get(s);return r?r.foreachOnPath_(ce(e),we(n,s),i):new le(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(we(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.writeTree_=e}static empty(){return new vt(new le(null))}}function hs(t,e,n){if(z(e))return new vt(new le(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=st(s,e);return r=r.updateChild(o,n),new vt(t.writeTree_.set(s,r))}else{const s=new le(n),r=t.writeTree_.setTree(e,s);return new vt(r)}}}function Zh(t,e,n){let i=t;return ot(n,(s,r)=>{i=hs(i,we(e,s),r)}),i}function ef(t,e){if(z(e))return vt.empty();{const n=t.writeTree_.setTree(e,new le(null));return new vt(n)}}function hl(t,e){return Gn(t,e)!=null}function Gn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(st(n.path,e)):null}function tf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ue,(i,s)=>{e.push(new Y(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Y(i,s.value))}),e}function vn(t,e){if(z(e))return t;{const n=Gn(t,e);return n!=null?new vt(new le(n)):new vt(t.writeTree_.subtree(e))}}function fl(t){return t.writeTree_.isEmpty()}function bi(t,e){return Ng(re(),t.writeTree_,e)}function Ng(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Ng(we(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(we(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t,e){return Fg(e,t)}function cS(t,e,n,i,s){b(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=hs(t.visibleWrites,e,n)),t.lastWriteId=i}function uS(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function hS(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&fS(a,i.path)?s=!1:gt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return dS(t),!0;if(i.snap)t.visibleWrites=ef(t.visibleWrites,i.path);else{const a=i.children;ot(a,l=>{t.visibleWrites=ef(t.visibleWrites,we(i.path,l))})}return!0}else return!1}function fS(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(we(t.path,n),e))return!0;return!1}function dS(t){t.visibleWrites=Dg(t.allWrites,pS,re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pS(t){return t.visible}function Dg(t,e,n){let i=vt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)gt(n,o)?(a=st(n,o),i=hs(i,a,r.snap)):gt(o,n)&&(a=st(o,n),i=hs(i,re(),r.snap.getChild(a)));else if(r.children){if(gt(n,o))a=st(n,o),i=Zh(i,a,r.children);else if(gt(o,n))if(a=st(o,n),z(a))i=Zh(i,re(),r.children);else{const l=Ci(r.children,G(a));if(l){const c=l.getChild(ce(a));i=hs(i,re(),c)}}}else throw Oi("WriteRecord should have .snap or .children")}}return i}function xg(t,e,n,i,s){if(!i&&!s){const r=Gn(t.visibleWrites,e);if(r!=null)return r;{const o=vn(t.visibleWrites,e);if(fl(o))return n;if(n==null&&!hl(o,re()))return null;{const a=n||te.EMPTY_NODE;return bi(o,a)}}}else{const r=vn(t.visibleWrites,e);if(!s&&fl(r))return n;if(!s&&n==null&&!hl(r,re()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(gt(c.path,e)||gt(e,c.path))},a=Dg(t.allWrites,o,e),l=n||te.EMPTY_NODE;return bi(a,l)}}}function gS(t,e,n){let i=te.EMPTY_NODE;const s=Gn(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ue,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=vn(t.visibleWrites,e);return n.forEachChild(Ue,(o,a)=>{const l=bi(vn(r,new he(o)),a);i=i.updateImmediateChild(o,l)}),tf(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=vn(t.visibleWrites,e);return tf(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function _S(t,e,n,i,s){b(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=we(e,n);if(hl(t.visibleWrites,r))return null;{const o=vn(t.visibleWrites,r);return fl(o)?s.getChild(n):bi(o,s.getChild(n))}}function mS(t,e,n,i){const s=we(e,n),r=Gn(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=vn(t.visibleWrites,s);return bi(o,i.getNode().getImmediateChild(n))}else return null}function yS(t,e){return Gn(t.visibleWrites,e)}function vS(t,e,n,i,s,r,o){let a;const l=vn(t.visibleWrites,e),c=Gn(l,re());if(c!=null)a=c;else if(n!=null)a=bi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let _=f.getNext();for(;_&&u.length<s;)h(_,i)!==0&&u.push(_),_=f.getNext();return u}else return[]}function ES(){return{visibleWrites:vt.empty(),allWrites:[],lastWriteId:-1}}function dl(t,e,n,i){return xg(t.writeTree,t.treePath,e,n,i)}function Mg(t,e){return gS(t.writeTree,t.treePath,e)}function nf(t,e,n,i){return _S(t.writeTree,t.treePath,e,n,i)}function Qr(t,e){return yS(t.writeTree,we(t.treePath,e))}function wS(t,e,n,i,s,r){return vS(t.writeTree,t.treePath,e,n,i,s,r)}function wc(t,e,n){return mS(t.writeTree,t.treePath,e,n)}function Lg(t,e){return Fg(we(t.treePath,e),t.writeTree)}function Fg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Yh(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,JC(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,XC(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Yh(i,e.snapshotNode,s.oldSnap));else throw Oi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Ug=new TS;class Ic{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ec(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wc(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qn(this.viewCache_),r=wS(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function CS(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function SS(t,e,n,i,s){const r=new IS;let o,a;if(n.type===Ot.OVERWRITE){const c=n;c.source.fromUser?o=pl(t,e,c.path,c.snap,i,s,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=Zr(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Ot.MERGE){const c=n;c.source.fromUser?o=bS(t,e,c.path,c.children,i,s,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=gl(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Ot.ACK_USER_WRITE){const c=n;c.revert?o=PS(t,e,c.path,i,s,r):o=AS(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Ot.LISTEN_COMPLETE)o=kS(t,e,n.path,i,r);else throw Oi("Unknown operation type: "+n.type);const l=r.getChanges();return RS(e,o,l),{viewCache:o,changes:l}}function RS(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ul(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(YC(ul(e)))}}function Bg(t,e,n,i,s,r){const o=e.eventCache;if(Qr(i,n)!=null)return e;{let a,l;if(z(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qn(e),u=c instanceof te?c:te.EMPTY_NODE,h=Mg(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=dl(i,qn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=G(n);if(c===".priority"){b(wn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=nf(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ce(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=nf(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=wc(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return us(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Zr(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),_,null)}else{const _=G(n);if(!l.isCompleteForPath(n)&&wn(n)>1)return e;const y=ce(n),k=l.getNode().getImmediateChild(_).updateChild(y,i);_===".priority"?c=u.updatePriority(l.getNode(),k):c=u.updateChild(l.getNode(),_,k,y,Ug,null)}const h=Pg(e,c,l.isFullyInitialized()||z(n),u.filtersNodes()),f=new Ic(s,h,r);return Bg(t,h,n,s,f,a)}function pl(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Ic(s,e,r);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=us(e,c,!0,t.filter.filtersNodes());else{const h=G(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=us(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ce(n),_=a.getNode().getImmediateChild(h);let y;if(z(f))y=i;else{const C=u.getCompleteChild(h);C!=null?gg(f)===".priority"&&C.getChild(mg(f)).isEmpty()?y=C:y=C.updateChild(f,i):y=te.EMPTY_NODE}if(_.equals(y))l=e;else{const C=t.filter.updateChild(a.getNode(),h,y,f,u,o);l=us(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function sf(t,e){return t.eventCache.isCompleteForChild(e)}function bS(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=we(n,l);sf(e,G(u))&&(a=pl(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=we(n,l);sf(e,G(u))||(a=pl(t,a,u,c,s,r,o))}),a}function rf(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function gl(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;z(n)?c=i:c=new le(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),y=rf(t,_,f);l=Zr(t,l,new he(h),y,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const y=e.serverCache.getNode().getImmediateChild(h),C=rf(t,y,f);l=Zr(t,l,new he(h),C,s,r,o,a)}}),l}function AS(t,e,n,i,s,r,o){if(Qr(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Zr(t,e,n,l.getNode().getChild(n),s,r,a,o);if(z(n)){let c=new le(null);return l.getNode().forEachChild(gi,(u,h)=>{c=c.set(new he(u),h)}),gl(t,e,n,c,s,r,a,o)}else return e}else{let c=new le(null);return i.foreach((u,h)=>{const f=we(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),gl(t,e,n,c,s,r,a,o)}}function kS(t,e,n,i,s){const r=e.serverCache,o=Pg(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return Bg(t,o,n,i,Ug,s)}function PS(t,e,n,i,s,r){let o;if(Qr(i,n)!=null)return e;{const a=new Ic(i,e,s),l=e.eventCache.getNode();let c;if(z(n)||G(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=dl(i,qn(e));else{const h=e.serverCache.getNode();b(h instanceof te,"serverChildren would be complete if leaf node"),u=Mg(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=G(n);let h=wc(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ce(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,te.EMPTY_NODE,ce(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=dl(i,qn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Qr(i,re())!=null,us(e,c,o,t.filter.filtersNodes())}}function NS(t,e){const n=qn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function of(t,e,n,i){e.type===Ot.MERGE&&e.source.queryId!==null&&(b(qn(t.viewCache_),"We should always have a full cache before handling merges"),b(ul(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=SS(t.processor_,s,e,n,i);return CS(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,OS(t,r.changes,r.viewCache.eventCache.getNode(),null)}function OS(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return rS(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let af;function DS(t){b(!af,"__referenceConstructor has already been defined"),af=t}function Tc(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return b(r!=null,"SyncTree gave us an op for an invalid query."),of(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(of(o,e,n,i));return r}}function Cc(t,e){let n=null;for(const i of t.views.values())n=n||NS(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lf;function xS(t){b(!lf,"__referenceConstructor has already been defined"),lf=t}class cf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=ES(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function MS(t,e,n,i,s){return cS(t.pendingWriteTree_,e,n,i,s),s?Oo(t,new zn(Rg(),e,n)):[]}function oi(t,e,n=!1){const i=uS(t.pendingWriteTree_,e);if(hS(t.pendingWriteTree_,e)){let r=new le(null);return i.snap!=null?r=r.set(re(),!0):ot(i.children,o=>{r=r.set(new he(o),!0)}),Oo(t,new Jr(i.path,r,n))}else return[]}function No(t,e,n){return Oo(t,new zn(bg(),e,n))}function LS(t,e,n){const i=le.fromObject(n);return Oo(t,new bs(bg(),e,i))}function FS(t,e,n,i){const s=Wg(t,i);if(s!=null){const r=Vg(s),o=r.path,a=r.queryId,l=st(o,e),c=new zn(Ag(a),l,n);return Kg(t,o,c)}else return[]}function US(t,e,n,i){const s=Wg(t,i);if(s){const r=Vg(s),o=r.path,a=r.queryId,l=st(o,e),c=le.fromObject(n),u=new bs(Ag(a),l,c);return Kg(t,o,u)}else return[]}function Hg(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=st(o,e),c=Cc(a,l);if(c)return c});return xg(s,e,r,n,!0)}function Oo(t,e){return jg(e,t.syncPointTree_,null,Og(t.pendingWriteTree_,re()))}function jg(t,e,n,i){if(z(t.path))return $g(t,e,n,i);{const s=e.get(re());n==null&&s!=null&&(n=Cc(s,re()));let r=[];const o=G(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Lg(i,o);r=r.concat(jg(a,l,c,u))}return s&&(r=r.concat(Tc(s,t,i,n))),r}}function $g(t,e,n,i){const s=e.get(re());n==null&&s!=null&&(n=Cc(s,re()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Lg(i,o),u=t.operationForChild(o);u&&(r=r.concat($g(u,a,l,c)))}),s&&(r=r.concat(Tc(s,t,i,n))),r}function Wg(t,e){return t.tagToQueryMap.get(e)}function Vg(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function Kg(t,e,n){const i=t.syncPointTree_.get(e);b(i,"Missing sync point for query tag that we're tracking");const s=Og(t.pendingWriteTree_,e);return Tc(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sc(n)}node(){return this.node_}}class Rc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new Rc(this.syncTree_,n)}node(){return Hg(this.syncTree_,this.path_)}}const BS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},uf=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return HS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return jS(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},HS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},jS=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&b(!1,"Unexpected increment value: "+i);const s=e.node();if(b(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},$S=function(t,e,n,i){return bc(e,new Rc(n,t),i)},WS=function(t,e,n){return bc(t,new Sc(e),n)};function bc(t,e,n){const i=t.getPriority().val(),s=uf(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=uf(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ve(a,De(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ve(s))),o.forEachChild(Ue,(a,l)=>{const c=bc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function kc(t,e){let n=e instanceof he?e:new he(e),i=t,s=G(n);for(;s!==null;){const r=Ci(i.node.children,s)||{children:{},childCount:0};i=new Ac(s,i,r),n=ce(n),s=G(n)}return i}function Li(t){return t.node.value}function zg(t,e){t.node.value=e,_l(t)}function qg(t){return t.node.childCount>0}function VS(t){return Li(t)===void 0&&!qg(t)}function Do(t,e){ot(t.node.children,(n,i)=>{e(new Ac(n,t,i))})}function Gg(t,e,n,i){n&&!i&&e(t),Do(t,s=>{Gg(s,e,!0,i)}),n&&i&&e(t)}function KS(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function zs(t){return new he(t.parent===null?t.name:zs(t.parent)+"/"+t.name)}function _l(t){t.parent!==null&&zS(t.parent,t.name,t)}function zS(t,e,n){const i=VS(n),s=sn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,_l(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,_l(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=/[\[\].#$\/\u0000-\u001F\u007F]/,GS=/[\[\].#$\u0000-\u001F\u007F]/,va=10*1024*1024,Yg=function(t){return typeof t=="string"&&t.length!==0&&!qS.test(t)},YS=function(t){return typeof t=="string"&&t.length!==0&&!GS.test(t)},XS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),YS(t)},Xg=function(t,e,n){const i=n instanceof he?new kC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pn(i));if(typeof e=="function")throw new Error(t+"contains a function "+Pn(i)+" with contents = "+e.toString());if(Yp(e))throw new Error(t+"contains "+e.toString()+" "+Pn(i));if(typeof e=="string"&&e.length>va/3&&So(e)>va)throw new Error(t+"contains a string greater than "+va+" utf8 bytes "+Pn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ot(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Yg(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PC(i,o),Xg(t,a,i),NC(i)}),s&&r)throw new Error(t+' contains ".value" child '+Pn(i)+" in addition to actual children.")}},JS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!XS(n))throw new Error(iw(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ZS(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!yg(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Yn(t,e,n){ZS(t,n),eR(t,i=>gt(i,e)||gt(e,i))}function eR(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(tR(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Hn&&Oe("event: "+n.toString()),Vs(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="repo_interrupt",iR=25;class sR{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xr(),this.transactionQueueTree_=new Ac,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rR(t,e,n){if(t.stats_=gc(t.repoInfo_),t.forceRestClient_||Z0())t.server_=new Yr(t.repoInfo_,(i,s,r,o)=>{hf(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ff(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Qt(t.repoInfo_,e,(i,s,r,o)=>{hf(t,i,s,r,o)},i=>{ff(t,i)},i=>{aR(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=rC(t.repoInfo_,()=>new sS(t.stats_,t.server_)),t.infoData_=new ZC,t.infoSyncTree_=new cf({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=No(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Pc(t,"connected",!1),t.serverSyncTree_=new cf({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Yn(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function oR(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jg(t){return BS({timestamp:oR(t)})}function hf(t,e,n,i,s){t.dataUpdateCount++;const r=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Fr(n,c=>De(c));o=US(t.serverSyncTree_,r,l,s)}else{const l=De(n);o=FS(t.serverSyncTree_,r,l,s)}else if(i){const l=Fr(n,c=>De(c));o=LS(t.serverSyncTree_,r,l)}else{const l=De(n);o=No(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Oc(t,r)),Yn(t.eventQueue_,a,o)}function ff(t,e){Pc(t,"connected",e),e===!1&&cR(t)}function aR(t,e){ot(e,(n,i)=>{Pc(t,n,i)})}function Pc(t,e,n){const i=new he("/.info/"+e),s=De(n);t.infoData_.updateSnapshot(i,s);const r=No(t.infoSyncTree_,i,s);Yn(t.eventQueue_,i,r)}function lR(t){return t.nextWriteId_++}function cR(t){Qg(t,"onDisconnectEvents");const e=Jg(t),n=Xr();cl(t.onDisconnect_,re(),(s,r)=>{const o=$S(s,r,t.serverSyncTree_,e);Sg(n,s,o)});let i=[];cl(n,re(),(s,r)=>{i=i.concat(No(t.serverSyncTree_,s,r));const o=dR(t,s);Oc(t,o)}),t.onDisconnect_=Xr(),Yn(t.eventQueue_,re(),i)}function uR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nR)}function Qg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Oe(n,...e)}function Zg(t,e,n){return Hg(t.serverSyncTree_,e,n)||te.EMPTY_NODE}function Nc(t,e=t.transactionQueueTree_){if(e||xo(t,e),Li(e)){const n=t_(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&hR(t,zs(e),n)}else qg(e)&&Do(e,n=>{Nc(t,n)})}function hR(t,e,n){const i=n.map(c=>c.currentWriteId),s=Zg(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=st(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Qg(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(oi(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();xo(t,kc(t.transactionQueueTree_,e)),Nc(t,t.transactionQueueTree_),Yn(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Vs(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{et("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Oc(t,e)}},o)}function Oc(t,e){const n=e_(t,e),i=zs(n),s=t_(t,n);return fR(t,s,i),i}function fR(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=st(n,l.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(oi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=iR)u=!0,h="maxretry",s=s.concat(oi(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Zg(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Xg("transaction failed: Data returned ",_,l.path);let y=De(_);typeof _=="object"&&_!=null&&sn(_,".priority")||(y=y.updatePriority(f.getPriority()));const k=l.currentWriteId,D=Jg(t),M=WS(y,f,D);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=M,l.currentWriteId=lR(t),o.splice(o.indexOf(k),1),s=s.concat(MS(t.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),s=s.concat(oi(t.serverSyncTree_,k,!0))}else u=!0,h="nodata",s=s.concat(oi(t.serverSyncTree_,l.currentWriteId,!0))}Yn(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}xo(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Vs(i[a]);Nc(t,t.transactionQueueTree_)}function e_(t,e){let n,i=t.transactionQueueTree_;for(n=G(e);n!==null&&Li(i)===void 0;)i=kc(i,n),e=ce(e),n=G(e);return i}function t_(t,e){const n=[];return n_(t,e,n),n.sort((i,s)=>i.order-s.order),n}function n_(t,e,n){const i=Li(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Do(e,s=>{n_(t,s,n)})}function xo(t,e){const n=Li(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,zg(e,n.length>0?n:void 0)}Do(e,i=>{xo(t,i)})}function dR(t,e){const n=zs(e_(t,e)),i=kc(t.transactionQueueTree_,e);return KS(i,s=>{Ea(t,s)}),Ea(t,i),Gg(i,s=>{Ea(t,s)}),n}function Ea(t,e){const n=Li(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(oi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?zg(e,void 0):n.length=r+1,Yn(t.eventQueue_,zs(e),s);for(let o=0;o<i.length;o++)Vs(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function gR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):et(`Invalid query segment '${n}' in query '${t}'`)}return e}const df=function(t,e){const n=_R(t),i=n.namespace;n.domain==="firebase.com"&&Vn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Vn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||K0();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new nC(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new he(n.pathString)}},_R=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=pR(t.substring(u,h)));const f=gR(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return z(this._path)?null:gg(this._path)}get ref(){return new Fi(this._repo,this._path)}get _queryIdentifier(){const e=Jh(this._queryParams),n=dc(e);return n==="{}"?"default":n}get _queryObject(){return Jh(this._queryParams)}isEqual(e){if(e=In(e),!(e instanceof Dc))return!1;const n=this._repo===e._repo,i=yg(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+AC(this._path)}}class Fi extends Dc{constructor(e,n){super(e,n,new vc,!1)}get parent(){const e=mg(this._path);return e===null?null:new Fi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}DS(Fi);xS(Fi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="FIREBASE_DATABASE_EMULATOR_HOST",ml={};let yR=!1;function vR(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Vn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Oe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=df(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[mR]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=df(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new ol(ol.OWNER):new tC(t.name,t.options,e);JS("Invalid Firebase Database URL",o),z(o.path)||Vn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=wR(a,t,u,new eC(t.name,n));return new IR(h,t)}function ER(t,e){const n=ml[e];(!n||n[t.key]!==t)&&Vn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),uR(t),delete n[t.key]}function wR(t,e,n,i){let s=ml[e.name];s||(s={},ml[e.name]=s);let r=s[t.toURLString()];return r&&Vn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new sR(t,yR,n,i),s[t.toURLString()]=r,r}class IR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fi(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ER(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vn("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){H0(Tn),Ut(new wt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return vR(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Ze(Dh,xh,t),Ze(Dh,xh,"esm2017")}Qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TR();var CR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,xc=xc||{},H=CR||self;function Mo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function qs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function SR(t){return Object.prototype.hasOwnProperty.call(t,wa)&&t[wa]||(t[wa]=++RR)}var wa="closure_uid_"+(1e9*Math.random()>>>0),RR=0;function bR(t,e,n){return t.call.apply(t.bind,arguments)}function AR(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=bR:Be=AR,Be.apply(null,arguments)}function gr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Se(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Cn(){this.s=this.s,this.o=this.o}var kR=0;Cn.prototype.s=!1;Cn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),kR!=0)&&SR(this)};Cn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const i_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Mc(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function pf(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Mo(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function He(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var PR=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",()=>{},e),H.removeEventListener("test",()=>{},e)}catch{}return t}();function As(t){return/^[\s\xa0]*$/.test(t)}function Lo(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function Nt(t){return Lo().indexOf(t)!=-1}function Lc(t){return Lc[" "](t),t}Lc[" "]=function(){};function NR(t,e){var n=Cb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var OR=Nt("Opera"),ks=Nt("Trident")||Nt("MSIE"),s_=Nt("Edge"),yl=s_||ks,r_=Nt("Gecko")&&!(Lo().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge"))&&!(Nt("Trident")||Nt("MSIE"))&&!Nt("Edge"),DR=Lo().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge");function o_(){var t=H.document;return t?t.documentMode:void 0}e:{var gf="",Ia=function(){var t=Lo();if(r_)return/rv:([^\);]+)(\)|;)/.exec(t);if(s_)return/Edge\/([\d\.]+)/.exec(t);if(ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(DR)return/WebKit\/(\S+)/.exec(t);if(OR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ia&&(gf=Ia?Ia[1]:""),ks){var _f=o_();if(_f!=null&&_f>parseFloat(gf))break e}}H.document&&ks&&o_();function Ps(t,e){if(He.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(r_){e:{try{Lc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ps.$.h.call(this)}}Se(Ps,He);var xR={2:"touch",3:"pen",4:"mouse"};Ps.prototype.h=function(){Ps.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gs="closure_listenable_"+(1e6*Math.random()|0),MR=0;function LR(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++MR,this.fa=this.ia=!1}function Fo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Fc(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function FR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function a_(t){const e={};for(const n in t)e[n]=t[n];return e}const mf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function l_(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<mf.length;r++)n=mf[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Uo(t){this.src=t,this.g={},this.h=0}Uo.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=El(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new LR(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function vl(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=i_(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Fo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function El(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Uc="closure_lm_"+(1e6*Math.random()|0),Ta={};function c_(t,e,n,i,s){if(i&&i.once)return h_(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)c_(t,e[r],n,i,s);return null}return n=jc(n),t&&t[Gs]?t.O(e,n,qs(i)?!!i.capture:!!i,s):u_(t,e,n,!1,i,s)}function u_(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=qs(s)?!!s.capture:!!s,a=Hc(t);if(a||(t[Uc]=a=new Uo(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=UR(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)PR||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(d_(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function UR(){function t(n){return e.call(t.src,t.listener,n)}const e=BR;return t}function h_(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)h_(t,e[r],n,i,s);return null}return n=jc(n),t&&t[Gs]?t.P(e,n,qs(i)?!!i.capture:!!i,s):u_(t,e,n,!0,i,s)}function f_(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)f_(t,e[r],n,i,s);else i=qs(i)?!!i.capture:!!i,n=jc(n),t&&t[Gs]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=El(r,n,i,s),-1<n&&(Fo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=El(e,n,i,s)),(n=-1<t?e[t]:null)&&Bc(n))}function Bc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Gs])vl(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(d_(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Hc(e))?(vl(n,t),n.h==0&&(n.src=null,e[Uc]=null)):Fo(t)}}}function d_(t){return t in Ta?Ta[t]:Ta[t]="on"+t}function BR(t,e){if(t.fa)t=!0;else{e=new Ps(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Bc(t),t=n.call(i,e)}return t}function Hc(t){return t=t[Uc],t instanceof Uo?t:null}var Ca="__closure_events_fn_"+(1e9*Math.random()>>>0);function jc(t){return typeof t=="function"?t:(t[Ca]||(t[Ca]=function(e){return t.handleEvent(e)}),t[Ca])}function Ce(){Cn.call(this),this.i=new Uo(this),this.S=this,this.J=null}Se(Ce,Cn);Ce.prototype[Gs]=!0;Ce.prototype.removeEventListener=function(t,e,n,i){f_(this,t,e,n,i)};function ke(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new He(e,t);else if(e instanceof He)e.target=e.target||t;else{var s=e;e=new He(i,t),l_(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=_r(o,i,!0,e)&&s}if(o=e.g=t,s=_r(o,i,!0,e)&&s,s=_r(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=_r(o,i,!1,e)&&s}Ce.prototype.N=function(){if(Ce.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Fo(n[i]);delete t.g[e],t.h--}}this.J=null};Ce.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ce.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function _r(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&vl(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var $c=H.JSON.stringify;class HR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function jR(){var t=Wc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $R{constructor(){this.h=this.g=null}add(e,n){const i=p_.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var p_=new HR(()=>new WR,t=>t.reset());class WR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function KR(t){H.setTimeout(()=>{throw t},0)}let Ns,Os=!1,Wc=new $R,g_=()=>{const t=H.Promise.resolve(void 0);Ns=()=>{t.then(zR)}};var zR=()=>{for(var t;t=jR();){try{t.h.call(t.g)}catch(n){KR(n)}var e=p_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Os=!1};function Bo(t,e){Ce.call(this),this.h=t||1,this.g=e||H,this.j=Be(this.qb,this),this.l=Date.now()}Se(Bo,Ce);A=Bo.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ke(this,"tick"),this.ga&&(Vc(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}A.N=function(){Bo.$.N.call(this),Vc(this),delete this.g};function Kc(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function __(t){t.g=Kc(()=>{t.g=null,t.i&&(t.i=!1,__(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class qR extends Cn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:__(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(t){Cn.call(this),this.h=t,this.g={}}Se(Ds,Cn);var yf=[];function m_(t,e,n,i){Array.isArray(n)||(n&&(yf[0]=n.toString()),n=yf);for(var s=0;s<n.length;s++){var r=c_(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function y_(t){Fc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bc(e)},t),t.g={}}Ds.prototype.N=function(){Ds.$.N.call(this),y_(this)};Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ho(){this.g=!0}Ho.prototype.Ea=function(){this.g=!1};function GR(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function YR(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function ai(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+JR(t,n)+(i?" "+i:"")})}function XR(t,e){t.info(function(){return"TIMEOUT: "+e})}Ho.prototype.info=function(){};function JR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $c(n)}catch{return e}}var Ui={},vf=null;function zc(){return vf=vf||new Ce}Ui.Ta="serverreachability";function v_(t){He.call(this,Ui.Ta,t)}Se(v_,He);function xs(t){const e=zc();ke(e,new v_(e))}Ui.STAT_EVENT="statevent";function E_(t,e){He.call(this,Ui.STAT_EVENT,t),this.stat=e}Se(E_,He);function ze(t){const e=zc();ke(e,new E_(e,t))}Ui.Ua="timingevent";function w_(t,e){He.call(this,Ui.Ua,t),this.size=e}Se(w_,He);function Ys(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var qc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},QR={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gc(){}Gc.prototype.h=null;function Ef(t){return t.h||(t.h=t.i())}function ZR(){}var Xs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yc(){He.call(this,"d")}Se(Yc,He);function Xc(){He.call(this,"c")}Se(Xc,He);var wl;function jo(){}Se(jo,Gc);jo.prototype.g=function(){return new XMLHttpRequest};jo.prototype.i=function(){return{}};wl=new jo;function Js(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Ds(this),this.P=eb,t=yl?125:void 0,this.V=new Bo(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new I_}function I_(){this.i=null,this.g="",this.h=!1}var eb=45e3,Il={},eo={};A=Js.prototype;A.setTimeout=function(t){this.P=t};function Tl(t,e,n){t.L=1,t.v=Wo(tn(e)),t.s=n,t.S=!0,T_(t,null)}function T_(t,e){t.G=Date.now(),Qs(t),t.A=tn(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),N_(n.i,"t",i),t.C=0,n=t.l.J,t.h=new I_,t.g=Q_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new qR(Be(t.Pa,t,t.g),t.O)),m_(t.U,t.g,"readystatechange",t.nb),e=t.I?a_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),xs(),GR(t.j,t.u,t.A,t.m,t.W,t.s)}A.nb=function(t){t=t.target;const e=this.M;e&&Dt(t)==3?e.l():this.Pa(t)};A.Pa=function(t){try{if(t==this.g)e:{const u=Dt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||yl||this.g&&(this.h.h||this.g.ja()||Cf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?xs(3):xs(2)),$o(this);var n=this.g.da();this.ca=n;t:if(C_(this)){var i=Cf(this.g);t="";var s=i.length,r=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mn(this),fs(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,YR(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!As(a)){var c=a;break t}}c=null}if(n=c)ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cl(this,n);else{this.i=!1,this.o=3,ze(12),Mn(this),fs(this);break e}}this.S?(S_(this,u,o),yl&&this.i&&u==3&&(m_(this.U,this.V,"tick",this.mb),this.V.start())):(ai(this.j,this.m,o,null),Cl(this,o)),u==4&&Mn(this),this.i&&!this.J&&(u==4?G_(this.l,this):(this.i=!1,Qs(this)))}else wb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ze(12)):(this.o=0,ze(13)),Mn(this),fs(this)}}}catch{}finally{}};function C_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function S_(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=tb(t,n),s==eo){e==4&&(t.o=4,ze(14),i=!1),ai(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Il){t.o=4,ze(15),ai(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ai(t.j,t.m,s,null),Cl(t,s);C_(t)&&s!=eo&&s!=Il&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ze(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nu(e),e.M=!0,ze(11))):(ai(t.j,t.m,n,"[Invalid Chunked Response]"),Mn(t),fs(t))}A.mb=function(){if(this.g){var t=Dt(this.g),e=this.g.ja();this.C<e.length&&($o(this),S_(this,t,e),this.i&&t!=4&&Qs(this))}};function tb(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?eo:(n=Number(e.substring(n,i)),isNaN(n)?Il:(i+=1,i+n>e.length?eo:(e=e.slice(i,i+n),t.C=i+n,e)))}A.cancel=function(){this.J=!0,Mn(this)};function Qs(t){t.Y=Date.now()+t.P,R_(t,t.P)}function R_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ys(Be(t.lb,t),e)}function $o(t){t.B&&(H.clearTimeout(t.B),t.B=null)}A.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(XR(this.j,this.A),this.L!=2&&(xs(),ze(17)),Mn(this),this.o=2,fs(this)):R_(this,this.Y-t)};function fs(t){t.l.H==0||t.J||G_(t.l,t)}function Mn(t){$o(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Vc(t.V),y_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Cl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Sl(n.i,t))){if(!t.K&&Sl(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)io(n),qo(n);else break e;tu(n),ze(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ys(Be(n.ib,n),6e3));if(1>=x_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ln(n,11)}else if((t.K||n.g==t)&&io(n),!As(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const _=t.g;if(_){const y=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=i.i;r.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Jc(r,r.h),r.h=null))}if(i.F){const C=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(i.Da=C,ue(i.I,i.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=J_(i,i.J?i.pa:null,i.Y),o.K){M_(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&($o(a),Qs(a)),i.g=o}else z_(i);0<n.j.length&&Go(n)}else c[0]!="stop"&&c[0]!="close"||Ln(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ln(n,7):eu(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}xs(4)}catch{}}function nb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Mo(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function ib(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Mo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function b_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Mo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ib(t),i=nb(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var A_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function jn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof jn){this.h=t.h,to(this,t.j),this.s=t.s,this.g=t.g,no(this,t.m),this.l=t.l;var e=t.i,n=new Ms;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),wf(this,n),this.o=t.o}else t&&(e=String(t).match(A_))?(this.h=!1,to(this,e[1]||"",!0),this.s=es(e[2]||""),this.g=es(e[3]||"",!0),no(this,e[4]),this.l=es(e[5]||"",!0),wf(this,e[6]||"",!0),this.o=es(e[7]||"")):(this.h=!1,this.i=new Ms(null,this.h))}jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ts(e,If,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ts(e,If,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ts(n,n.charAt(0)=="/"?ab:ob,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ts(n,cb)),t.join("")};function tn(t){return new jn(t)}function to(t,e,n){t.j=n?es(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function no(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wf(t,e,n){e instanceof Ms?(t.i=e,ub(t.i,t.h)):(n||(e=ts(e,lb)),t.i=new Ms(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function Wo(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function es(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ts(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var If=/[#\/\?@]/g,ob=/[#\?:]/g,ab=/[#\?]/g,lb=/[#\?@]/g,cb=/#/g;function Ms(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Sn(t){t.g||(t.g=new Map,t.h=0,t.i&&sb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=Ms.prototype;A.add=function(t,e){Sn(this),this.i=null,t=Bi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function k_(t,e){Sn(t),e=Bi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function P_(t,e){return Sn(t),e=Bi(t,e),t.g.has(e)}A.forEach=function(t,e){Sn(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};A.ta=function(){Sn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};A.Z=function(t){Sn(this);let e=[];if(typeof t=="string")P_(this,t)&&(e=e.concat(this.g.get(Bi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Sn(this),this.i=null,t=Bi(this,t),P_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function N_(t,e,n){k_(t,e),0<n.length&&(t.i=null,t.g.set(Bi(t,e),Mc(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Bi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ub(t,e){e&&!t.j&&(Sn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(k_(this,i),N_(this,s,n))},t)),t.j=e}var hb=class{constructor(t,e){this.g=t,this.map=e}};function O_(t){this.l=t||fb,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fb=10;function D_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function x_(t){return t.h?1:t.g?t.g.size:0}function Sl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jc(t,e){t.g?t.g.add(e):t.h=e}function M_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}O_.prototype.cancel=function(){if(this.i=L_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function L_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Mc(t.i)}var db=class{stringify(t){return H.JSON.stringify(t,void 0)}parse(t){return H.JSON.parse(t,void 0)}};function pb(){this.g=new db}function gb(t,e,n){const i=n||"";try{b_(t,function(s,r){let o=s;qs(s)&&(o=$c(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function _b(t,e){const n=new Ho;if(H.Image){const i=new Image;i.onload=gr(mr,n,i,"TestLoadImage: loaded",!0,e),i.onerror=gr(mr,n,i,"TestLoadImage: error",!1,e),i.onabort=gr(mr,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=gr(mr,n,i,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function mr(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Vo(t){this.l=t.ec||null,this.j=t.ob||!1}Se(Vo,Gc);Vo.prototype.g=function(){return new Ko(this.l,this.j)};Vo.prototype.i=function(t){return function(){return t}}({});function Ko(t,e){Ce.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Qc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Se(Ko,Ce);var Qc=0;A=Ko.prototype;A.open=function(t,e){if(this.readyState!=Qc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ls(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=Qc};A.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;F_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function F_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}A.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zs(this):Ls(this),this.readyState==3&&F_(this)}};A.Za=function(t){this.g&&(this.response=this.responseText=t,Zs(this))};A.Ya=function(t){this.g&&(this.response=t,Zs(this))};A.ka=function(){this.g&&Zs(this)};function Zs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ls(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ls(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mb=H.JSON.parse;function _e(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=U_,this.L=this.M=!1}Se(_e,Ce);var U_="",yb=/^https?$/i,vb=["POST","PUT"];A=_e.prototype;A.Oa=function(t){this.M=t};A.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():wl.g(),this.C=this.u?Ef(this.u):Ef(wl),this.g.onreadystatechange=Be(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Tf(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=H.FormData&&t instanceof H.FormData,!(0<=i_(vb,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{j_(this),0<this.B&&((this.L=Eb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.ua,this)):this.A=Kc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Tf(this,r)}};function Eb(t){return ks&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.ua=function(){typeof xc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function Tf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,B_(t),zo(t)}function B_(t){t.F||(t.F=!0,ke(t,"complete"),ke(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ke(this,"complete"),ke(this,"abort"),zo(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zo(this,!0)),_e.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?H_(this):this.kb())};A.kb=function(){H_(this)};function H_(t){if(t.h&&typeof xc<"u"&&(!t.C[1]||Dt(t)!=4||t.da()!=2)){if(t.v&&Dt(t)==4)Kc(t.La,0,t);else if(ke(t,"readystatechange"),Dt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(A_)[1]||null;!s&&H.self&&H.self.location&&(s=H.self.location.protocol.slice(0,-1)),i=!yb.test(s?s.toLowerCase():"")}n=i}if(n)ke(t,"complete"),ke(t,"success");else{t.m=6;try{var r=2<Dt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",B_(t)}}finally{zo(t)}}}}function zo(t,e){if(t.g){j_(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ke(t,"ready");try{n.onreadystatechange=i}catch{}}}function j_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}A.isActive=function(){return!!this.g};function Dt(t){return t.g?t.g.readyState:0}A.da=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mb(e)}};function Cf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case U_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function wb(t){const e={};t=(t.g&&2<=Dt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(As(t[i]))continue;var n=VR(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}FR(e,function(i){return i.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $_(t){let e="";return Fc(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Zc(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=$_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function Yi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function W_(t){this.Ga=0,this.j=[],this.l=new Ho,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Yi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Yi("baseRetryDelayMs",5e3,t),this.hb=Yi("retryDelaySeedMs",1e4,t),this.eb=Yi("forwardChannelMaxRetries",2,t),this.xa=Yi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new O_(t&&t.concurrentRequestLimit),this.Ja=new pb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=W_.prototype;A.ra=8;A.H=1;function eu(t){if(V_(t),t.H==3){var e=t.W++,n=tn(t.I);if(ue(n,"SID",t.K),ue(n,"RID",e),ue(n,"TYPE","terminate"),er(t,n),e=new Js(t,t.l,e),e.L=2,e.v=Wo(tn(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=Q_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Qs(e)}X_(t)}function qo(t){t.g&&(nu(t),t.g.cancel(),t.g=null)}function V_(t){qo(t),t.u&&(H.clearTimeout(t.u),t.u=null),io(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Go(t){if(!D_(t.i)&&!t.m){t.m=!0;var e=t.Na;Ns||g_(),Os||(Ns(),Os=!0),Wc.add(e,t),t.C=0}}function Ib(t,e){return x_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ys(Be(t.Na,t,e),Y_(t,t.C)),t.C++,!0)}A.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Js(this,this.l,t);let r=this.s;if(this.U&&(r?(r=a_(r),l_(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=K_(this,s,e),n=tn(this.I),ue(n,"RID",t),ue(n,"CVER",22),this.F&&ue(n,"X-HTTP-Session-Id",this.F),er(this,n),r&&(this.O?e="headers="+encodeURIComponent(String($_(r)))+"&"+e:this.o&&Zc(n,this.o,r)),Jc(this.i,s),this.bb&&ue(n,"TYPE","init"),this.P?(ue(n,"$req",e),ue(n,"SID","null"),s.aa=!0,Tl(s,n,null)):Tl(s,n,e),this.H=2}}else this.H==3&&(t?Sf(this,t):this.j.length==0||D_(this.i)||Sf(this))};function Sf(t,e){var n;e?n=e.m:n=t.W++;const i=tn(t.I);ue(i,"SID",t.K),ue(i,"RID",n),ue(i,"AID",t.V),er(t,i),t.o&&t.s&&Zc(i,t.o,t.s),n=new Js(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=K_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Jc(t.i,n),Tl(n,i,e)}function er(t,e){t.na&&Fc(t.na,function(n,i){ue(e,i,n)}),t.h&&b_({},function(n,i){ue(e,i,n)})}function K_(t,e,n){n=Math.min(t.j.length,n);var i=t.h?Be(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{gb(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function z_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ns||g_(),Os||(Ns(),Os=!0),Wc.add(e,t),t.A=0}}function tu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ys(Be(t.Ma,t),Y_(t,t.A)),t.A++,!0)}A.Ma=function(){if(this.u=null,q_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ys(Be(this.jb,this),t)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ze(10),qo(this),q_(this))};function nu(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function q_(t){t.g=new Js(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=tn(t.wa);ue(e,"RID","rpc"),ue(e,"SID",t.K),ue(e,"AID",t.V),ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ue(e,"TO",t.qa),ue(e,"TYPE","xmlhttp"),er(t,e),t.o&&t.s&&Zc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Wo(tn(e)),n.s=null,n.S=!0,T_(n,t)}A.ib=function(){this.v!=null&&(this.v=null,qo(this),tu(this),ze(19))};function io(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function G_(t,e){var n=null;if(t.g==e){io(t),nu(t),t.g=null;var i=2}else if(Sl(t.i,e))n=e.F,M_(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=zc(),ke(i,new w_(i,n)),Go(t)}else z_(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&Ib(t,e)||i==2&&tu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ln(t,5);break;case 4:Ln(t,10);break;case 3:Ln(t,6);break;default:Ln(t,2)}}}function Y_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ln(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=Be(t.pb,t);n||(n=new jn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||to(n,"https"),Wo(n)),_b(n.toString(),i)}else ze(2);t.H=0,t.h&&t.h.za(e),X_(t),V_(t)}A.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ze(2)):(this.l.info("Failed to ping google.com"),ze(1))};function X_(t){if(t.H=0,t.ma=[],t.h){const e=L_(t.i);(e.length!=0||t.j.length!=0)&&(pf(t.ma,e),pf(t.ma,t.j),t.i.i.length=0,Mc(t.j),t.j.length=0),t.h.ya()}}function J_(t,e,n){var i=n instanceof jn?tn(n):new jn(n);if(i.g!="")e&&(i.g=e+"."+i.g),no(i,i.m);else{var s=H.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new jn(null);i&&to(r,i),e&&(r.g=e),s&&no(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&ue(i,n,e),ue(i,"VER",t.ra),er(t,i),i}function Q_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new _e(new Vo({ob:!0})):new _e(t.va),e.Oa(t.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function Z_(){}A=Z_.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function at(t,e){Ce.call(this),this.g=new W_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!As(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!As(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Hi(this)}Se(at,Ce);at.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ze(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=J_(t,null,t.Y),Go(t)};at.prototype.close=function(){eu(this.g)};at.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$c(t),t=n);e.j.push(new hb(e.fb++,t)),e.H==3&&Go(e)};at.prototype.N=function(){this.g.h=null,delete this.j,eu(this.g),delete this.g,at.$.N.call(this)};function em(t){Yc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Se(em,Yc);function tm(){Xc.call(this),this.status=1}Se(tm,Xc);function Hi(t){this.g=t}Se(Hi,Z_);Hi.prototype.Ba=function(){ke(this.g,"a")};Hi.prototype.Aa=function(t){ke(this.g,new em(t))};Hi.prototype.za=function(t){ke(this.g,new tm)};Hi.prototype.ya=function(){ke(this.g,"b")};function Tb(){this.blockSize=-1}function Ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Se(Ht,Tb);Ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sa(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}Ht.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)Sa(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){Sa(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){Sa(this,i),s=0;break}}this.h=s,this.i+=e};Ht.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function ie(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var Cb={};function iu(t){return-128<=t&&128>t?NR(t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function xt(t){if(isNaN(t)||!isFinite(t))return _i;if(0>t)return Re(xt(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Rl;return new ie(e,0)}function nm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Re(nm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xt(Math.pow(e,8)),i=_i,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=xt(Math.pow(e,r)),i=i.R(r).add(xt(o))):(i=i.R(n),i=i.add(xt(o)))}return i}var Rl=4294967296,_i=iu(0),bl=iu(1),Rf=iu(16777216);A=ie.prototype;A.ea=function(){if(it(this))return-Re(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Rl+i)*e,e*=Rl}return t};A.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Jt(this))return"0";if(it(this))return"-"+Re(this).toString(t);for(var e=xt(Math.pow(t,6)),n=this,i="";;){var s=ro(n,e).g;n=so(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Jt(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};A.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Jt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function it(t){return t.h==-1}A.X=function(t){return t=so(this,t),it(t)?-1:Jt(t)?0:1};function Re(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new ie(n,~t.h).add(bl)}A.abs=function(){return it(this)?Re(this):this};A.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function so(t,e){return t.add(Re(e))}A.R=function(t){if(Jt(this)||Jt(t))return _i;if(it(this))return it(t)?Re(this).R(Re(t)):Re(Re(this).R(t));if(it(t))return Re(this.R(Re(t)));if(0>this.X(Rf)&&0>t.X(Rf))return xt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,yr(n,2*i+2*s),n[2*i+2*s+1]+=r*l,yr(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,yr(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,yr(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new ie(n,0)};function yr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Xi(t,e){this.g=t,this.h=e}function ro(t,e){if(Jt(e))throw Error("division by zero");if(Jt(t))return new Xi(_i,_i);if(it(t))return e=ro(Re(t),e),new Xi(Re(e.g),Re(e.h));if(it(e))return e=ro(t,Re(e)),new Xi(Re(e.g),e.h);if(30<t.g.length){if(it(t)||it(e))throw Error("slowDivide_ only works with positive integers.");for(var n=bl,i=e;0>=i.X(t);)n=bf(n),i=bf(i);var s=ni(n,1),r=ni(i,1);for(i=ni(i,2),n=ni(n,2);!Jt(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=ni(i,1),n=ni(n,1)}return e=so(t,s.R(e)),new Xi(s,e)}for(s=_i;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=xt(n),o=r.R(e);it(o)||0<o.X(t);)n-=i,r=xt(n),o=r.R(e);Jt(r)&&(r=bl),s=s.add(r),t=so(t,o)}return new Xi(s,t)}A.gb=function(t){return ro(this,t).h};A.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new ie(n,this.h&t.h)};A.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new ie(n,this.h|t.h)};A.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new ie(n,this.h^t.h)};function bf(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new ie(n,t.h)}function ni(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ie(s,t.h)}at.prototype.send=at.prototype.u;at.prototype.open=at.prototype.m;at.prototype.close=at.prototype.close;qc.NO_ERROR=0;qc.TIMEOUT=8;qc.HTTP_ERROR=6;QR.COMPLETE="complete";ZR.EventType=Xs;Xs.OPEN="a";Xs.CLOSE="b";Xs.ERROR="c";Xs.MESSAGE="d";Ce.prototype.listen=Ce.prototype.O;_e.prototype.listenOnce=_e.prototype.P;_e.prototype.getLastError=_e.prototype.Sa;_e.prototype.getLastErrorCode=_e.prototype.Ia;_e.prototype.getStatus=_e.prototype.da;_e.prototype.getResponseJson=_e.prototype.Wa;_e.prototype.getResponseText=_e.prototype.ja;_e.prototype.send=_e.prototype.ha;_e.prototype.setWithCredentials=_e.prototype.Oa;Ht.prototype.digest=Ht.prototype.l;Ht.prototype.reset=Ht.prototype.reset;Ht.prototype.update=Ht.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=xt;ie.fromString=nm;var Sb=ie;const Af="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Fs("@firebase/firestore");function Qe(t,...e){if(Ai.logLevel<=J.DEBUG){const n=e.map(ru);Ai.debug(`Firestore (${tr}): ${t}`,...n)}}function su(t,...e){if(Ai.logLevel<=J.ERROR){const n=e.map(ru);Ai.error(`Firestore (${tr}): ${t}`,...n)}}function Rb(t,...e){if(Ai.logLevel<=J.WARN){const n=e.map(ru);Ai.warn(`Firestore (${tr}): ${t}`,...n)}}function ru(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t="Unexpected state"){const e=`FIRESTORE (${tr}) INTERNAL ASSERTION FAILED: `+t;throw su(e),new Error(e)}function Al(t,e){t||ou()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Le extends $t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ne.UNAUTHENTICATED))}shutdown(){}}class Ab{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kb{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new mi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new mi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{Qe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Qe("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new mi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Qe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Al(typeof i.accessToken=="string"),new im(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Al(e===null||typeof e=="string"),new Ne(e)}}class Pb{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nb{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new Pb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ob{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Db{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&Qe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,Qe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Qe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):Qe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Al(typeof n.token=="string"),this.R=n.token,new Ob(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=xb(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function sm(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,i,s,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class oo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kf,q;(q=kf||(kf={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Sb([4294967295,4294967295],0);function Ra(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n,i=1e3,s=1.5,r=6e4){this._i=e,this.timerId=n,this.xo=i,this.Oo=s,this.No=r,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),i=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-i);s>0&&Qe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new mi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new au(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Le(Me.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ub(t,e){if(su("AsyncQueue",`${e}: ${t}`),sm(t))return new Le(Me.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Ne.UNAUTHENTICATED,this.clientId=Mb.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Qe("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Qe("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Le(Me.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Ub(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function Hb(t,e,n,i){if(e===!0&&i===!0)throw new Le(Me.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jb(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ou()}function $b(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Le(Me.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jb(t);throw new Le(Me.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Le(Me.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Le(Me.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rm((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Le(Me.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Le(Me.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Le(Me.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class om{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Le(Me.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Le(Me.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nf(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new bb;switch(i.type){case"firstParty":return new Nb(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Le(Me.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Pf.get(n);i&&(Qe("ComponentProvider","Removing Datastore"),Pf.delete(n),i.terminate())}(this),Promise.resolve()}}function Wb(t,e,n,i={}){var s;const r=(t=$b(t,om))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Rb("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=Ne.MOCK_USER;else{a=VE(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new Le(Me.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ne(c)}t._authCredentials=new Ab(new im(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Fb(this,"async_queue_retry"),this.ou=()=>{const n=Ra();n&&Qe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Ra();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Ra();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new mi;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!sm(e))throw e;Qe("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(i=>{this.nu=i,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw su("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.ru=!1,i))));return this.Za=n,n}enqueueAfterDelay(e,n,i){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=au.createAndSchedule(this,e,n,i,r=>this.cu(r));return this.tu.push(s),s}_u(){this.nu&&ou()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class Kb extends om{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new Vb}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qb(this),this._firestoreClient.terminate()}}function zb(t,e){const n=typeof t=="object"?t:ic(),i=typeof t=="string"?t:e||"(default)",s=nc(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=WE("firestore");r&&Wb(s,...r)}return s}function qb(t){var e,n,i;const s=t._freezeSettings(),r=function(a,l,c,u){return new Lb(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,rm(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Bb(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,n=!0){(function(s){tr=s})(Tn),Ut(new wt("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new Kb(new kb(i.getProvider("auth-internal")),new Db(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Le(Me.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oo(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Ze(Af,"4.2.0",e),Ze(Af,"4.2.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="firebasestorage.googleapis.com",Gb="storageBucket",Yb=2*60*1e3,Xb=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends $t{constructor(e,n,i=0){super(ba(e),`Firebase Storage: ${n} (${ba(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ba(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var jt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(jt||(jt={}));function ba(t){return"storage/"+t}function Jb(){const t="An unknown error occurred, please check the error payload for server response.";return new Wt(jt.UNKNOWN,t)}function Qb(){return new Wt(jt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Zb(){return new Wt(jt.CANCELED,"User canceled the upload/download.")}function eA(t){return new Wt(jt.INVALID_URL,"Invalid URL '"+t+"'.")}function tA(t){return new Wt(jt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Of(t){return new Wt(jt.INVALID_ARGUMENT,t)}function lm(){return new Wt(jt.APP_DELETED,"The Firebase app was deleted.")}function nA(t){return new Wt(jt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=_t.makeFromUrl(e,n)}catch{return new _t(e,"")}if(i.path==="")return i;throw tA(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),y={bucket:1,path:3},C=n===am?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",D=new RegExp(`^https?://${C}/${s}/${k}`,"i"),B=[{regex:a,indices:l,postModify:r},{regex:_,indices:y,postModify:c},{regex:D,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<B.length;N++){const fe=B[N],pe=fe.regex.exec(e);if(pe){const $e=pe[fe.indices.bucket];let We=pe[fe.indices.path];We||(We=""),i=new _t($e,We),fe.postModify(i);break}}if(i==null)throw eA(e);return i}}class iA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...k){c||(c=!0,e.apply(null,k))}function h(k){s=setTimeout(()=>{s=null,t(_,l())},k)}function f(){r&&clearTimeout(r)}function _(k,...D){if(c){f();return}if(k){f(),u.call(null,k,...D);return}if(l()||o){f(),u.call(null,k,...D);return}i<64&&(i*=2);let B;a===1?(a=2,B=0):B=(i+Math.random())*1e3,h(B)}let y=!1;function C(k){y||(y=!0,f(),!c&&(s!==null?(k||(a=2),clearTimeout(s),h(0)):k||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,C(!0)},n),C}function rA(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){return t!==void 0}function Df(t,e,n,i){if(i<e)throw Of(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Of(`Invalid value for '${t}'. Expected ${n} or less.`)}function aA(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ao;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ao||(ao={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,i,s,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,y)=>{this.resolve_=_,this.reject_=y,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new vr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ao.NO_ERROR,l=r.getStatus();if(!a||lA(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ao.ABORT;i(!1,new vr(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new vr(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());oA(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Jb();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?lm():Zb();o(l)}else{const l=Qb();o(l)}};this.canceled_?n(!1,new vr(!1,null,!0)):this.backoffId_=sA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vr{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function uA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pA(t,e,n,i,s,r,o=!0){const a=aA(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return fA(c,e),uA(c,n),hA(c,r),dA(c,i),new cA(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _A(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this._service=e,n instanceof _t?this._location=n:this._location=_t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new lo(e,n)}get root(){const e=new _t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _A(this._location.path)}get storage(){return this._service}get parent(){const e=gA(this._location.path);if(e===null)return null;const n=new _t(this._location.bucket,e);return new lo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nA(e)}}function xf(t,e){const n=e==null?void 0:e[Gb];return n==null?null:_t.makeFromBucketSpec(n,t)}class mA{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=am,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Yb,this._maxUploadRetryTime=Xb,this._requests=new Set,s!=null?this._bucket=_t.makeFromBucketSpec(s,this._host):this._bucket=xf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_t.makeFromBucketSpec(this._url,e):this._bucket=xf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Df("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Df("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new lo(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new iA(lm());{const o=pA(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Mf="@firebase/storage",Lf="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="storage";function vA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new mA(n,i,s,e,Tn)}function EA(){Ut(new wt(yA,vA,"PUBLIC").setMultipleInstances(!0)),Ze(Mf,Lf,""),Ze(Mf,Lf,"esm2017")}EA();function wA(t){return(e,n)=>{const i=L0(e,n).run(()=>go(t));Kp.set(e,i),B0(i,e)}}function IA(t){return M0?jp(fc(t)):null}function TA(t,{firebaseApp:e,modules:n=[]}){t.provide(Vp,e);for(const i of n)i(e,t)}const CA=t=>(_d("data-v-2fa153f2"),t=t(),md(),t),SA={class:"greetings"},RA={class:"green"},bA=CA(()=>nt("h3",null,"Zakłady wyborcze 2023",-1)),AA={key:0},kA={key:1},PA=vo({__name:"HelloWorld",props:{msg:{}},setup(t){const e=IA(),n=new qt,i=go(null);function s(){i.value=null,e&&yT(e,n).catch(a=>{console.error("Failed sign",a),i.value=a})}function r(){e&&JI(e)}const o=F0();return(a,l)=>{var c,u;return ss(),rs("div",SA,[nt("h1",RA,Qo(a.msg),1),bA,rt(o)?(ss(),rs("div",AA,[nt("p",null,"Witaj "+Qo((c=rt(o))==null?void 0:c.displayName),1),nt("p",null,"Zalogowano jako: "+Qo((u=rt(o))==null?void 0:u.email),1),nt("button",{onClick:r,class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 active:bg-blue-800"}," Wyloguj ")])):(ss(),rs("div",kA,[nt("img",{width:"200",onClick:s,src:xE})]))])}}});const lu=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},NA=lu(PA,[["__scopeId","data-v-2fa153f2"]]),OA=t=>(_d("data-v-6b24727b"),t=t(),md(),t),DA=OA(()=>nt("img",{alt:"Vue logo",class:"logo",src:Ov,width:"300"},null,-1)),xA={class:"wrapper"},MA=vo({__name:"App",setup(t){return(e,n)=>(ss(),rs(At,null,[nt("header",null,[DA,nt("div",xA,[Ke(NA,{msg:"Zakłady"}),nt("nav",null,[Ke(rt(za),{to:"/"},{default:xa(()=>[ja("Home")]),_:1}),Ke(rt(za),{to:"/about"},{default:xa(()=>[ja("About")]),_:1})])])]),Ke(rt(zd))],64))}});const LA=lu(MA,[["__scopeId","data-v-6b24727b"]]),FA="modulepreload",UA=function(t){return"/"+t},Ff={},BA=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=UA(r),r in Ff)return;Ff[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":FA,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};const HA={};function jA(t,e){return ss(),rs("main",null," Tu formularz ")}const $A=lu(HA,[["render",jA],["__scopeId","data-v-8f6d5ba4"]]),WA=OE({history:Xv("/"),routes:[{path:"/",name:"home",component:$A},{path:"/about",name:"about",component:()=>BA(()=>import("./AboutView-e4b5e55b.js"),["assets/AboutView-e4b5e55b.js","assets/AboutView-4d995ba2.css"])}]}),VA={apiKey:"AIzaSyCS6jfWPaS9ULRtbGaVcgWGdi61SYZ5QNA",authDomain:"elections-86b8b.firebaseapp.com",projectId:"elections-86b8b",storageBucket:"elections-86b8b.appspot.com",messagingSenderId:"369687186588",appId:"1:369687186588:web:1733816fba13f51828b159",measurementId:"G-JXKXHVH0J1"},cm=op(VA);zb(cm);const Yo=bv(LA);Yo.use(Nv());Yo.use(WA);Yo.use(TA,{firebaseApp:cm,modules:[wA()]});Yo.mount("#app");export{lu as _,nt as a,rs as c,ss as o};
