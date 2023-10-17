(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Sf(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const $e={},Ws=[],hn=()=>{},Q0=()=>!1,Y0=/^on[^a-z]/,pc=t=>Y0.test(t),Pf=t=>t.startsWith("onUpdate:"),st=Object.assign,kf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},X0=Object.prototype.hasOwnProperty,Ee=(t,e)=>X0.call(t,e),ne=Array.isArray,zs=t=>mc(t)==="[object Map]",Dy=t=>mc(t)==="[object Set]",le=t=>typeof t=="function",Ye=t=>typeof t=="string",Nf=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",xy=t=>Me(t)&&le(t.then)&&le(t.catch),My=Object.prototype.toString,mc=t=>My.call(t),J0=t=>mc(t).slice(8,-1),Ly=t=>mc(t)==="[object Object]",Of=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,tl=Sf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Z0=/-(\w)/g,Ln=gc(t=>t.replace(Z0,(e,n)=>n?n.toUpperCase():"")),eb=/\B([A-Z])/g,Ai=gc(t=>t.replace(eb,"-$1").toLowerCase()),_c=gc(t=>t.charAt(0).toUpperCase()+t.slice(1)),hu=gc(t=>t?`on${_c(t)}`:""),Co=(t,e)=>!Object.is(t,e),fu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},_l=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},tb=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jp;const th=()=>Jp||(Jp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Df(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?ib(r):Df(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ye(t))return t;if(Me(t))return t}}const nb=/;(?![^(]*\))/g,rb=/:([^]+)/,sb=/\/\*[^]*?\*\//g;function ib(t){const e={};return t.replace(sb,"").split(nb).forEach(n=>{if(n){const r=n.split(rb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xf(t){let e="";if(Ye(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=xf(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ob="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ab=Sf(ob);function $y(t){return!!t||t===""}const ao=t=>Ye(t)?t:t==null?"":ne(t)||Me(t)&&(t.toString===My||!le(t.toString))?JSON.stringify(t,Vy,2):String(t),Vy=(t,e)=>e&&e.__v_isRef?Vy(t,e.value):zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Dy(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!ne(e)&&!Ly(e)?String(e):e;let jt;class Fy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Uy(t){return new Fy(t)}function lb(t,e=jt){e&&e.active&&e.effects.push(t)}function jy(){return jt}function cb(t){jt&&jt.cleanups.push(t)}const Mf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},By=t=>(t.w&xr)>0,Wy=t=>(t.n&xr)>0,ub=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=xr},hb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];By(s)&&!Wy(s)?s.delete(t):e[n++]=s,s.w&=~xr,s.n&=~xr}e.length=n}},yl=new WeakMap;let Yi=0,xr=1;const nh=30;let nn;const ts=Symbol(""),rh=Symbol("");class Lf{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lb(this,r)}run(){if(!this.active)return this.fn();let e=nn,n=Cr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nn,nn=this,Cr=!0,xr=1<<++Yi,Yi<=nh?ub(this):Zp(this),this.fn()}finally{Yi<=nh&&hb(this),xr=1<<--Yi,nn=this.parent,Cr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nn===this?this.deferStop=!0:this.active&&(Zp(this),this.onStop&&this.onStop(),this.active=!1)}}function Zp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Cr=!0;const zy=[];function Ci(){zy.push(Cr),Cr=!1}function Ri(){const t=zy.pop();Cr=t===void 0?!0:t}function Vt(t,e,n){if(Cr&&nn){let r=yl.get(t);r||yl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Mf()),Hy(s)}}function Hy(t,e){let n=!1;Yi<=nh?Wy(t)||(t.n|=xr,n=!By(t)):n=!t.has(nn),n&&(t.add(nn),nn.deps.push(t))}function or(t,e,n,r,s,i){const o=yl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?Of(n)&&a.push(o.get("length")):(a.push(o.get(ts)),zs(t)&&a.push(o.get(rh)));break;case"delete":ne(t)||(a.push(o.get(ts)),zs(t)&&a.push(o.get(rh)));break;case"set":zs(t)&&a.push(o.get(ts));break}if(a.length===1)a[0]&&sh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);sh(Mf(l))}}function sh(t,e){const n=ne(t)?t:[...t];for(const r of n)r.computed&&em(r);for(const r of n)r.computed||em(r)}function em(t,e){(t!==nn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function fb(t,e){var n;return(n=yl.get(t))==null?void 0:n.get(e)}const db=Sf("__proto__,__v_isRef,__isVue"),qy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nf)),pb=$f(),mb=$f(!1,!0),gb=$f(!0),tm=_b();function _b(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Te(this);for(let i=0,o=this.length;i<o;i++)Vt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ci();const r=Te(this)[e].apply(this,n);return Ri(),r}}),t}function yb(t){const e=Te(this);return Vt(e,"has",t),e.hasOwnProperty(t)}function $f(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?xb:Xy:e?Yy:Qy).get(r))return r;const o=ne(r);if(!t){if(o&&Ee(tm,s))return Reflect.get(tm,s,i);if(s==="hasOwnProperty")return yb}const a=Reflect.get(r,s,i);return(Nf(s)?qy.has(s):db(s))||(t||Vt(r,"get",s),e)?a:je(a)?o&&Of(s)?a:a.value:Me(a)?t?Zy(a):Jn(a):a}}const vb=Ky(),Eb=Ky(!0);function Ky(t=!1){return function(n,r,s,i){let o=n[r];if(si(o)&&je(o)&&!je(s))return!1;if(!t&&(!vl(s)&&!si(s)&&(o=Te(o),s=Te(s)),!ne(n)&&je(o)&&!je(s)))return o.value=s,!0;const a=ne(n)&&Of(r)?Number(r)<n.length:Ee(n,r),l=Reflect.set(n,r,s,i);return n===Te(i)&&(a?Co(s,o)&&or(n,"set",r,s):or(n,"add",r,s)),l}}function wb(t,e){const n=Ee(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&or(t,"delete",e,void 0),r}function Tb(t,e){const n=Reflect.has(t,e);return(!Nf(e)||!qy.has(e))&&Vt(t,"has",e),n}function Ib(t){return Vt(t,"iterate",ne(t)?"length":ts),Reflect.ownKeys(t)}const Gy={get:pb,set:vb,deleteProperty:wb,has:Tb,ownKeys:Ib},bb={get:gb,set(t,e){return!0},deleteProperty(t,e){return!0}},Ab=st({},Gy,{get:mb,set:Eb}),Vf=t=>t,yc=t=>Reflect.getPrototypeOf(t);function Da(t,e,n=!1,r=!1){t=t.__v_raw;const s=Te(t),i=Te(e);n||(e!==i&&Vt(s,"get",e),Vt(s,"get",i));const{has:o}=yc(s),a=r?Vf:n?jf:Ro;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function xa(t,e=!1){const n=this.__v_raw,r=Te(n),s=Te(t);return e||(t!==s&&Vt(r,"has",t),Vt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ma(t,e=!1){return t=t.__v_raw,!e&&Vt(Te(t),"iterate",ts),Reflect.get(t,"size",t)}function nm(t){t=Te(t);const e=Te(this);return yc(e).has.call(e,t)||(e.add(t),or(e,"add",t,t)),this}function rm(t,e){e=Te(e);const n=Te(this),{has:r,get:s}=yc(n);let i=r.call(n,t);i||(t=Te(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Co(e,o)&&or(n,"set",t,e):or(n,"add",t,e),this}function sm(t){const e=Te(this),{has:n,get:r}=yc(e);let s=n.call(e,t);s||(t=Te(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&or(e,"delete",t,void 0),i}function im(){const t=Te(this),e=t.size!==0,n=t.clear();return e&&or(t,"clear",void 0,void 0),n}function La(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Te(o),l=e?Vf:t?jf:Ro;return!t&&Vt(a,"iterate",ts),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function $a(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),o=zs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Vf:e?jf:Ro;return!e&&Vt(i,"iterate",l?rh:ts),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function mr(t){return function(...e){return t==="delete"?!1:this}}function Cb(){const t={get(i){return Da(this,i)},get size(){return Ma(this)},has:xa,add:nm,set:rm,delete:sm,clear:im,forEach:La(!1,!1)},e={get(i){return Da(this,i,!1,!0)},get size(){return Ma(this)},has:xa,add:nm,set:rm,delete:sm,clear:im,forEach:La(!1,!0)},n={get(i){return Da(this,i,!0)},get size(){return Ma(this,!0)},has(i){return xa.call(this,i,!0)},add:mr("add"),set:mr("set"),delete:mr("delete"),clear:mr("clear"),forEach:La(!0,!1)},r={get(i){return Da(this,i,!0,!0)},get size(){return Ma(this,!0)},has(i){return xa.call(this,i,!0)},add:mr("add"),set:mr("set"),delete:mr("delete"),clear:mr("clear"),forEach:La(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=$a(i,!1,!1),n[i]=$a(i,!0,!1),e[i]=$a(i,!1,!0),r[i]=$a(i,!0,!0)}),[t,n,e,r]}const[Rb,Sb,Pb,kb]=Cb();function Ff(t,e){const n=e?t?kb:Pb:t?Sb:Rb;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ee(n,s)&&s in r?n:r,s,i)}const Nb={get:Ff(!1,!1)},Ob={get:Ff(!1,!0)},Db={get:Ff(!0,!1)},Qy=new WeakMap,Yy=new WeakMap,Xy=new WeakMap,xb=new WeakMap;function Mb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lb(t){return t.__v_skip||!Object.isExtensible(t)?0:Mb(J0(t))}function Jn(t){return si(t)?t:Uf(t,!1,Gy,Nb,Qy)}function Jy(t){return Uf(t,!1,Ab,Ob,Yy)}function Zy(t){return Uf(t,!0,bb,Db,Xy)}function Uf(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Lb(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Rr(t){return si(t)?Rr(t.__v_raw):!!(t&&t.__v_isReactive)}function si(t){return!!(t&&t.__v_isReadonly)}function vl(t){return!!(t&&t.__v_isShallow)}function ev(t){return Rr(t)||si(t)}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function ra(t){return _l(t,"__v_skip",!0),t}const Ro=t=>Me(t)?Jn(t):t,jf=t=>Me(t)?Zy(t):t;function tv(t){Cr&&nn&&(t=Te(t),Hy(t.dep||(t.dep=Mf())))}function Bf(t,e){t=Te(t);const n=t.dep;n&&sh(n)}function je(t){return!!(t&&t.__v_isRef===!0)}function Ve(t){return rv(t,!1)}function nv(t){return rv(t,!0)}function rv(t,e){return je(t)?t:new $b(t,e)}class $b{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Te(e),this._value=n?e:Ro(e)}get value(){return tv(this),this._value}set value(e){const n=this.__v_isShallow||vl(e)||si(e);e=n?e:Te(e),Co(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ro(e),Bf(this))}}function Va(t){Bf(t)}function ut(t){return je(t)?t.value:t}function qn(t){return le(t)?t():ut(t)}const Vb={get:(t,e,n)=>ut(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return je(s)&&!je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sv(t){return Rr(t)?t:new Proxy(t,Vb)}class Fb{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fb(Te(this._object),this._key)}}class Ub{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function jb(t,e,n){return je(t)?t:le(t)?new Ub(t):Me(t)&&arguments.length>1?Bb(t,e,n):Ve(t)}function Bb(t,e,n){const r=t[e];return je(r)?r:new Fb(t,e,n)}class Wb{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Lf(e,()=>{this._dirty||(this._dirty=!0,Bf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Te(this);return tv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function zb(t,e,n=!1){let r,s;const i=le(t);return i?(r=t,s=hn):(r=t.get,s=t.set),new Wb(r,s,i||!s,n)}function Sr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){vc(i,e,n)}return s}function fn(t,e,n,r){if(le(t)){const i=Sr(t,e,n,r);return i&&xy(i)&&i.catch(o=>{vc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(fn(t[i],e,n,r));return s}function vc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Sr(l,null,10,[t,o,a]);return}}Hb(t,n,s,r)}function Hb(t,e,n,r=!0){console.error(t)}let So=!1,ih=!1;const vt=[];let In=0;const Hs=[];let Kn=null,Gr=0;const iv=Promise.resolve();let Wf=null;function zf(t){const e=Wf||iv;return t?e.then(this?t.bind(this):t):e}function qb(t){let e=In+1,n=vt.length;for(;e<n;){const r=e+n>>>1;Po(vt[r])<t?e=r+1:n=r}return e}function Hf(t){(!vt.length||!vt.includes(t,So&&t.allowRecurse?In+1:In))&&(t.id==null?vt.push(t):vt.splice(qb(t.id),0,t),ov())}function ov(){!So&&!ih&&(ih=!0,Wf=iv.then(lv))}function Kb(t){const e=vt.indexOf(t);e>In&&vt.splice(e,1)}function Gb(t){ne(t)?Hs.push(...t):(!Kn||!Kn.includes(t,t.allowRecurse?Gr+1:Gr))&&Hs.push(t),ov()}function om(t,e=So?In+1:0){for(;e<vt.length;e++){const n=vt[e];n&&n.pre&&(vt.splice(e,1),e--,n())}}function av(t){if(Hs.length){const e=[...new Set(Hs)];if(Hs.length=0,Kn){Kn.push(...e);return}for(Kn=e,Kn.sort((n,r)=>Po(n)-Po(r)),Gr=0;Gr<Kn.length;Gr++)Kn[Gr]();Kn=null,Gr=0}}const Po=t=>t.id==null?1/0:t.id,Qb=(t,e)=>{const n=Po(t)-Po(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function lv(t){ih=!1,So=!0,vt.sort(Qb);const e=hn;try{for(In=0;In<vt.length;In++){const n=vt[In];n&&n.active!==!1&&Sr(n,null,14)}}finally{In=0,vt.length=0,av(),So=!1,Wf=null,(vt.length||Hs.length)&&lv()}}function Yb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||$e;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||$e;f&&(s=n.map(d=>Ye(d)?d.trim():d)),h&&(s=n.map(tb))}let a,l=r[a=hu(e)]||r[a=hu(Ln(e))];!l&&i&&(l=r[a=hu(Ai(e))]),l&&fn(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,fn(c,t,6,s)}}function cv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!le(t)){const l=c=>{const u=cv(c,e,!0);u&&(a=!0,st(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Me(t)&&r.set(t,null),null):(ne(i)?i.forEach(l=>o[l]=null):st(o,i),Me(t)&&r.set(t,o),o)}function Ec(t,e){return!t||!pc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,Ai(e))||Ee(t,e))}let Gt=null,wc=null;function El(t){const e=Gt;return Gt=t,wc=t&&t.type.__scopeId||null,e}function qf(t){wc=t}function Kf(){wc=null}function oh(t,e=Gt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&_m(-1);const i=El(e);let o;try{o=t(...s)}finally{El(i),r._d&&_m(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function du(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:p}=t;let _,v;const T=El(t);try{if(n.shapeFlag&4){const E=s||r;_=Tn(u.call(E,E,h,i,d,f,g)),v=l}else{const E=e;_=Tn(E.length>1?E(i,{attrs:l,slots:a,emit:c}):E(i,null)),v=e.props?l:Xb(l)}}catch(E){uo.length=0,vc(E,t,1),_=rt(as)}let A=_;if(v&&p!==!1){const E=Object.keys(v),{shapeFlag:D}=A;E.length&&D&7&&(o&&E.some(Pf)&&(v=Jb(v,o)),A=ii(A,v))}return n.dirs&&(A=ii(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),_=A,El(T),_}const Xb=t=>{let e;for(const n in t)(n==="class"||n==="style"||pc(n))&&((e||(e={}))[n]=t[n]);return e},Jb=(t,e)=>{const n={};for(const r in t)(!Pf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?am(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Ec(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?am(r,o,c):!0:!!o;return!1}function am(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ec(n,i))return!0}return!1}function eA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const tA=t=>t.__isSuspense;function nA(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Gb(t)}function Gn(t,e){return Gf(t,null,e)}const Fa={};function Yt(t,e,n){return Gf(t,e,n)}function Gf(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=$e){var a;const l=jy()===((a=et)==null?void 0:a.scope)?et:null;let c,u=!1,h=!1;if(je(t)?(c=()=>t.value,u=vl(t)):Rr(t)?(c=()=>t,r=!0):ne(t)?(h=!0,u=t.some(E=>Rr(E)||vl(E)),c=()=>t.map(E=>{if(je(E))return E.value;if(Rr(E))return Vs(E);if(le(E))return Sr(E,l,2)})):le(t)?e?c=()=>Sr(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),fn(t,l,3,[d])}:c=hn,e&&r){const E=c;c=()=>Vs(E())}let f,d=E=>{f=T.onStop=()=>{Sr(E,l,4)}},g;if(Oo)if(d=hn,e?n&&fn(e,l,3,[c(),h?[]:void 0,d]):c(),s==="sync"){const E=GA();g=E.__watcherHandles||(E.__watcherHandles=[])}else return hn;let p=h?new Array(t.length).fill(Fa):Fa;const _=()=>{if(T.active)if(e){const E=T.run();(r||u||(h?E.some((D,I)=>Co(D,p[I])):Co(E,p)))&&(f&&f(),fn(e,l,3,[E,p===Fa?void 0:h&&p[0]===Fa?[]:p,d]),p=E)}else T.run()};_.allowRecurse=!!e;let v;s==="sync"?v=_:s==="post"?v=()=>xt(_,l&&l.suspense):(_.pre=!0,l&&(_.id=l.uid),v=()=>Hf(_));const T=new Lf(c,v);e?n?_():p=T.run():s==="post"?xt(T.run.bind(T),l&&l.suspense):T.run();const A=()=>{T.stop(),l&&l.scope&&kf(l.scope.effects,T)};return g&&g.push(A),A}function rA(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?uv(r,t):()=>r[t]:t.bind(r,r);let i;le(e)?i=e:(i=e.handler,n=e);const o=et;oi(this);const a=Gf(s,i.bind(r),n);return o?oi(o):ns(),a}function uv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Vs(t,e){if(!Me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),je(t))Vs(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)Vs(t[n],e);else if(Dy(t)||zs(t))t.forEach(n=>{Vs(n,e)});else if(Ly(t))for(const n in t)Vs(t[n],e);return t}function zr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Ci(),fn(l,n,8,[t.el,a,t,e]),Ri())}}function vs(t,e){return le(t)?(()=>st({name:t.name},e,{setup:t}))():t}const nl=t=>!!t.type.__asyncLoader,hv=t=>t.type.__isKeepAlive;function sA(t,e){fv(t,"a",e)}function iA(t,e){fv(t,"da",e)}function fv(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Tc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)hv(s.parent.vnode)&&oA(r,e,n,s),s=s.parent}}function oA(t,e,n,r){const s=Tc(e,t,r,!0);Qf(()=>{kf(r[e],s)},n)}function Tc(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ci(),oi(n);const a=fn(e,n,t,o);return ns(),Ri(),a});return r?s.unshift(i):s.push(i),i}}const dr=t=>(e,n=et)=>(!Oo||t==="sp")&&Tc(t,(...r)=>e(...r),n),aA=dr("bm"),dv=dr("m"),lA=dr("bu"),cA=dr("u"),pv=dr("bum"),Qf=dr("um"),mv=dr("sp"),uA=dr("rtg"),hA=dr("rtc");function fA(t,e=et){Tc("ec",t,e)}const gv="components";function _v(t,e){return pA(gv,t,!0,e)||t}const dA=Symbol.for("v-ndc");function pA(t,e,n=!0,r=!1){const s=Gt||et;if(s){const i=s.type;if(t===gv){const a=HA(i,!1);if(a&&(a===e||a===Ln(e)||a===_c(Ln(e))))return i}const o=lm(s[t]||i[t],e)||lm(s.appContext[t],e);return!o&&r?i:o}}function lm(t,e){return t&&(t[e]||t[Ln(e)]||t[_c(Ln(e))])}function mA(t,e,n,r){let s;const i=n&&n[r];if(ne(t)||Ye(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ah=t=>t?Sv(t)?ed(t)||t.proxy:ah(t.parent):null,lo=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ah(t.parent),$root:t=>ah(t.root),$emit:t=>t.emit,$options:t=>Yf(t),$forceUpdate:t=>t.f||(t.f=()=>Hf(t.update)),$nextTick:t=>t.n||(t.n=zf.bind(t.proxy)),$watch:t=>rA.bind(t)}),pu=(t,e)=>t!==$e&&!t.__isScriptSetup&&Ee(t,e),gA={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(pu(r,e))return o[e]=1,r[e];if(s!==$e&&Ee(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Ee(c,e))return o[e]=3,i[e];if(n!==$e&&Ee(n,e))return o[e]=4,n[e];lh&&(o[e]=0)}}const u=lo[e];let h,f;if(u)return e==="$attrs"&&Vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==$e&&Ee(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Ee(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return pu(s,e)?(s[e]=n,!0):r!==$e&&Ee(r,e)?(r[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==$e&&Ee(t,o)||pu(e,o)||(a=i[0])&&Ee(a,o)||Ee(r,o)||Ee(lo,o)||Ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cm(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let lh=!0;function _A(t){const e=Yf(t),n=t.proxy,r=t.ctx;lh=!1,e.beforeCreate&&um(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:p,deactivated:_,beforeDestroy:v,beforeUnmount:T,destroyed:A,unmounted:E,render:D,renderTracked:I,renderTriggered:R,errorCaptured:b,serverPrefetch:M,expose:W,inheritAttrs:K,components:me,directives:Z,filters:Fe}=e;if(c&&yA(c,r,null),o)for(const se in o){const he=o[se];le(he)&&(r[se]=he.bind(n))}if(s){const se=s.call(n,n);Me(se)&&(t.data=Jn(se))}if(lh=!0,i)for(const se in i){const he=i[se],Xe=le(he)?he.bind(n,n):le(he.get)?he.get.bind(n,n):hn,Ft=!le(he)&&le(he.set)?he.set.bind(n):hn,ft=Et({get:Xe,set:Ft});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>ft.value,set:Ot=>ft.value=Ot})}if(a)for(const se in a)yv(a[se],r,n,se);if(l){const se=le(l)?l.call(n):l;Reflect.ownKeys(se).forEach(he=>{co(he,se[he])})}u&&um(u,t,"c");function ee(se,he){ne(he)?he.forEach(Xe=>se(Xe.bind(n))):he&&se(he.bind(n))}if(ee(aA,h),ee(dv,f),ee(lA,d),ee(cA,g),ee(sA,p),ee(iA,_),ee(fA,b),ee(hA,I),ee(uA,R),ee(pv,T),ee(Qf,E),ee(mv,M),ne(W))if(W.length){const se=t.exposed||(t.exposed={});W.forEach(he=>{Object.defineProperty(se,he,{get:()=>n[he],set:Xe=>n[he]=Xe})})}else t.exposed||(t.exposed={});D&&t.render===hn&&(t.render=D),K!=null&&(t.inheritAttrs=K),me&&(t.components=me),Z&&(t.directives=Z)}function yA(t,e,n=hn){ne(t)&&(t=ch(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=$t(s.from||r,s.default,!0):i=$t(s.from||r):i=$t(s),je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function um(t,e,n){fn(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function yv(t,e,n,r){const s=r.includes(".")?uv(n,r):()=>n[r];if(Ye(t)){const i=e[t];le(i)&&Yt(s,i)}else if(le(t))Yt(s,t.bind(n));else if(Me(t))if(ne(t))t.forEach(i=>yv(i,e,n,r));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&Yt(s,i,t)}}function Yf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>wl(l,c,o,!0)),wl(l,e,o)),Me(e)&&i.set(e,l),l}function wl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wl(t,i,n,!0),s&&s.forEach(o=>wl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=vA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const vA={data:hm,props:fm,emits:fm,methods:Xi,computed:Xi,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Xi,directives:Xi,watch:wA,provide:hm,inject:EA};function hm(t,e){return e?t?function(){return st(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function EA(t,e){return Xi(ch(t),ch(e))}function ch(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Xi(t,e){return t?st(Object.create(null),t,e):e}function fm(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:st(Object.create(null),cm(t),cm(e??{})):e}function wA(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function vv(){return{app:null,config:{isNativeTag:Q0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let TA=0;function IA(t,e){return function(r,s=null){le(r)||(r=st({},r)),s!=null&&!Me(s)&&(s=null);const i=vv(),o=new Set;let a=!1;const l=i.app={_uid:TA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:QA,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&le(c.install)?(o.add(c),c.install(l,...u)):le(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=rt(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ed(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Tl=l;try{return c()}finally{Tl=null}}};return l}}let Tl=null;function co(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function $t(t,e,n=!1){const r=et||Gt;if(r||Tl){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Tl._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&le(e)?e.call(r&&r.proxy):e}}function bA(t,e,n,r=!1){const s={},i={};_l(i,bc,1),t.propsDefaults=Object.create(null),Ev(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Jy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function AA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Te(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ec(t.emitsOptions,f))continue;const d=e[f];if(l)if(Ee(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const g=Ln(f);s[g]=uh(l,a,g,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{Ev(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!Ee(e,h)&&((u=Ai(h))===h||!Ee(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=uh(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Ee(e,h))&&(delete i[h],c=!0)}c&&or(t,"set","$attrs")}function Ev(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(tl(l))continue;const c=e[l];let u;s&&Ee(s,u=Ln(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ec(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Te(n),c=a||$e;for(let u=0;u<i.length;u++){const h=i[u];n[h]=uh(s,l,h,c[h],t,!Ee(c,h))}}return o}function uh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ee(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&le(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(oi(s),r=c[n]=l.call(null,e),ns())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ai(n))&&(r=!0))}return r}function wv(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!le(t)){const u=h=>{l=!0;const[f,d]=wv(h,e,!0);st(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Me(t)&&r.set(t,Ws),Ws;if(ne(i))for(let u=0;u<i.length;u++){const h=Ln(i[u]);dm(h)&&(o[h]=$e)}else if(i)for(const u in i){const h=Ln(u);if(dm(h)){const f=i[u],d=o[h]=ne(f)||le(f)?{type:f}:st({},f);if(d){const g=gm(Boolean,d.type),p=gm(String,d.type);d[0]=g>-1,d[1]=p<0||g<p,(g>-1||Ee(d,"default"))&&a.push(h)}}}const c=[o,a];return Me(t)&&r.set(t,c),c}function dm(t){return t[0]!=="$"}function pm(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function mm(t,e){return pm(t)===pm(e)}function gm(t,e){return ne(e)?e.findIndex(n=>mm(n,t)):le(e)&&mm(e,t)?0:-1}const Tv=t=>t[0]==="_"||t==="$stable",Xf=t=>ne(t)?t.map(Tn):[Tn(t)],CA=(t,e,n)=>{if(e._n)return e;const r=oh((...s)=>Xf(e(...s)),n);return r._c=!1,r},Iv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Tv(s))continue;const i=t[s];if(le(i))e[s]=CA(s,i,r);else if(i!=null){const o=Xf(i);e[s]=()=>o}}},bv=(t,e)=>{const n=Xf(e);t.slots.default=()=>n},RA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Te(e),_l(e,"_",n)):Iv(e,t.slots={})}else t.slots={},e&&bv(t,e);_l(t.slots,bc,1)},SA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=$e;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(st(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Iv(e,s)),o=e}else e&&(bv(t,e),o={default:1});if(i)for(const a in s)!Tv(a)&&!(a in o)&&delete s[a]};function hh(t,e,n,r,s=!1){if(ne(t)){t.forEach((f,d)=>hh(f,e&&(ne(e)?e[d]:e),n,r,s));return}if(nl(r)&&!s)return;const i=r.shapeFlag&4?ed(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===$e?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ye(c)?(u[c]=null,Ee(h,c)&&(h[c]=null)):je(c)&&(c.value=null)),le(l))Sr(l,a,12,[o,u]);else{const f=Ye(l),d=je(l);if(f||d){const g=()=>{if(t.f){const p=f?Ee(h,l)?h[l]:u[l]:l.value;s?ne(p)&&kf(p,i):ne(p)?p.includes(i)||p.push(i):f?(u[l]=[i],Ee(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,Ee(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,xt(g,n)):g()}}}const xt=nA;function PA(t){return kA(t)}function kA(t,e){const n=th();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=hn,insertStaticContent:g}=t,p=(m,y,w,C=null,P=null,k=null,j=!1,x=null,$=!!y.dynamicChildren)=>{if(m===y)return;m&&!ji(m,y)&&(C=S(m),Ot(m,P,k,!0),m=null),y.patchFlag===-2&&($=!1,y.dynamicChildren=null);const{type:O,ref:Q,shapeFlag:q}=y;switch(O){case Ic:_(m,y,w,C);break;case as:v(m,y,w,C);break;case rl:m==null&&T(y,w,C,j);break;case tn:me(m,y,w,C,P,k,j,x,$);break;default:q&1?D(m,y,w,C,P,k,j,x,$):q&6?Z(m,y,w,C,P,k,j,x,$):(q&64||q&128)&&O.process(m,y,w,C,P,k,j,x,$,V)}Q!=null&&P&&hh(Q,m&&m.ref,k,y||m,!y)},_=(m,y,w,C)=>{if(m==null)r(y.el=a(y.children),w,C);else{const P=y.el=m.el;y.children!==m.children&&c(P,y.children)}},v=(m,y,w,C)=>{m==null?r(y.el=l(y.children||""),w,C):y.el=m.el},T=(m,y,w,C)=>{[m.el,m.anchor]=g(m.children,y,w,C,m.el,m.anchor)},A=({el:m,anchor:y},w,C)=>{let P;for(;m&&m!==y;)P=f(m),r(m,w,C),m=P;r(y,w,C)},E=({el:m,anchor:y})=>{let w;for(;m&&m!==y;)w=f(m),s(m),m=w;s(y)},D=(m,y,w,C,P,k,j,x,$)=>{j=j||y.type==="svg",m==null?I(y,w,C,P,k,j,x,$):M(m,y,P,k,j,x,$)},I=(m,y,w,C,P,k,j,x)=>{let $,O;const{type:Q,props:q,shapeFlag:Y,transition:ie,dirs:fe}=m;if($=m.el=o(m.type,k,q&&q.is,q),Y&8?u($,m.children):Y&16&&b(m.children,$,null,C,P,k&&Q!=="foreignObject",j,x),fe&&zr(m,null,C,"created"),R($,m,m.scopeId,j,C),q){for(const Pe in q)Pe!=="value"&&!tl(Pe)&&i($,Pe,null,q[Pe],k,m.children,C,P,dt);"value"in q&&i($,"value",null,q.value),(O=q.onVnodeBeforeMount)&&En(O,C,m)}fe&&zr(m,null,C,"beforeMount");const Ne=(!P||P&&!P.pendingBranch)&&ie&&!ie.persisted;Ne&&ie.beforeEnter($),r($,y,w),((O=q&&q.onVnodeMounted)||Ne||fe)&&xt(()=>{O&&En(O,C,m),Ne&&ie.enter($),fe&&zr(m,null,C,"mounted")},P)},R=(m,y,w,C,P)=>{if(w&&d(m,w),C)for(let k=0;k<C.length;k++)d(m,C[k]);if(P){let k=P.subTree;if(y===k){const j=P.vnode;R(m,j,j.scopeId,j.slotScopeIds,P.parent)}}},b=(m,y,w,C,P,k,j,x,$=0)=>{for(let O=$;O<m.length;O++){const Q=m[O]=x?yr(m[O]):Tn(m[O]);p(null,Q,y,w,C,P,k,j,x)}},M=(m,y,w,C,P,k,j)=>{const x=y.el=m.el;let{patchFlag:$,dynamicChildren:O,dirs:Q}=y;$|=m.patchFlag&16;const q=m.props||$e,Y=y.props||$e;let ie;w&&Hr(w,!1),(ie=Y.onVnodeBeforeUpdate)&&En(ie,w,y,m),Q&&zr(y,m,w,"beforeUpdate"),w&&Hr(w,!0);const fe=P&&y.type!=="foreignObject";if(O?W(m.dynamicChildren,O,x,w,C,fe,k):j||he(m,y,x,null,w,C,fe,k,!1),$>0){if($&16)K(x,y,q,Y,w,C,P);else if($&2&&q.class!==Y.class&&i(x,"class",null,Y.class,P),$&4&&i(x,"style",q.style,Y.style,P),$&8){const Ne=y.dynamicProps;for(let Pe=0;Pe<Ne.length;Pe++){const He=Ne[Pe],Zt=q[He],Ss=Y[He];(Ss!==Zt||He==="value")&&i(x,He,Zt,Ss,P,m.children,w,C,dt)}}$&1&&m.children!==y.children&&u(x,y.children)}else!j&&O==null&&K(x,y,q,Y,w,C,P);((ie=Y.onVnodeUpdated)||Q)&&xt(()=>{ie&&En(ie,w,y,m),Q&&zr(y,m,w,"updated")},C)},W=(m,y,w,C,P,k,j)=>{for(let x=0;x<y.length;x++){const $=m[x],O=y[x],Q=$.el&&($.type===tn||!ji($,O)||$.shapeFlag&70)?h($.el):w;p($,O,Q,null,C,P,k,j,!0)}},K=(m,y,w,C,P,k,j)=>{if(w!==C){if(w!==$e)for(const x in w)!tl(x)&&!(x in C)&&i(m,x,w[x],null,j,y.children,P,k,dt);for(const x in C){if(tl(x))continue;const $=C[x],O=w[x];$!==O&&x!=="value"&&i(m,x,O,$,j,y.children,P,k,dt)}"value"in C&&i(m,"value",w.value,C.value)}},me=(m,y,w,C,P,k,j,x,$)=>{const O=y.el=m?m.el:a(""),Q=y.anchor=m?m.anchor:a("");let{patchFlag:q,dynamicChildren:Y,slotScopeIds:ie}=y;ie&&(x=x?x.concat(ie):ie),m==null?(r(O,w,C),r(Q,w,C),b(y.children,w,Q,P,k,j,x,$)):q>0&&q&64&&Y&&m.dynamicChildren?(W(m.dynamicChildren,Y,w,P,k,j,x),(y.key!=null||P&&y===P.subTree)&&Av(m,y,!0)):he(m,y,w,Q,P,k,j,x,$)},Z=(m,y,w,C,P,k,j,x,$)=>{y.slotScopeIds=x,m==null?y.shapeFlag&512?P.ctx.activate(y,w,C,j,$):Fe(y,w,C,P,k,j,$):We(m,y,$)},Fe=(m,y,w,C,P,k,j)=>{const x=m.component=UA(m,C,P);if(hv(m)&&(x.ctx.renderer=V),jA(x),x.asyncDep){if(P&&P.registerDep(x,ee),!m.el){const $=x.subTree=rt(as);v(null,$,y,w)}return}ee(x,m,y,w,P,k,j)},We=(m,y,w)=>{const C=y.component=m.component;if(Zb(m,y,w))if(C.asyncDep&&!C.asyncResolved){se(C,y,w);return}else C.next=y,Kb(C.update),C.update();else y.el=m.el,C.vnode=y},ee=(m,y,w,C,P,k,j)=>{const x=()=>{if(m.isMounted){let{next:Q,bu:q,u:Y,parent:ie,vnode:fe}=m,Ne=Q,Pe;Hr(m,!1),Q?(Q.el=fe.el,se(m,Q,j)):Q=fe,q&&fu(q),(Pe=Q.props&&Q.props.onVnodeBeforeUpdate)&&En(Pe,ie,Q,fe),Hr(m,!0);const He=du(m),Zt=m.subTree;m.subTree=He,p(Zt,He,h(Zt.el),S(Zt),m,P,k),Q.el=He.el,Ne===null&&eA(m,He.el),Y&&xt(Y,P),(Pe=Q.props&&Q.props.onVnodeUpdated)&&xt(()=>En(Pe,ie,Q,fe),P)}else{let Q;const{el:q,props:Y}=y,{bm:ie,m:fe,parent:Ne}=m,Pe=nl(y);if(Hr(m,!1),ie&&fu(ie),!Pe&&(Q=Y&&Y.onVnodeBeforeMount)&&En(Q,Ne,y),Hr(m,!0),q&&be){const He=()=>{m.subTree=du(m),be(q,m.subTree,m,P,null)};Pe?y.type.__asyncLoader().then(()=>!m.isUnmounted&&He()):He()}else{const He=m.subTree=du(m);p(null,He,w,C,m,P,k),y.el=He.el}if(fe&&xt(fe,P),!Pe&&(Q=Y&&Y.onVnodeMounted)){const He=y;xt(()=>En(Q,Ne,He),P)}(y.shapeFlag&256||Ne&&nl(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&m.a&&xt(m.a,P),m.isMounted=!0,y=w=C=null}},$=m.effect=new Lf(x,()=>Hf(O),m.scope),O=m.update=()=>$.run();O.id=m.uid,Hr(m,!0),O()},se=(m,y,w)=>{y.component=m;const C=m.vnode.props;m.vnode=y,m.next=null,AA(m,y.props,C,w),SA(m,y.children,w),Ci(),om(),Ri()},he=(m,y,w,C,P,k,j,x,$=!1)=>{const O=m&&m.children,Q=m?m.shapeFlag:0,q=y.children,{patchFlag:Y,shapeFlag:ie}=y;if(Y>0){if(Y&128){Ft(O,q,w,C,P,k,j,x,$);return}else if(Y&256){Xe(O,q,w,C,P,k,j,x,$);return}}ie&8?(Q&16&&dt(O,P,k),q!==O&&u(w,q)):Q&16?ie&16?Ft(O,q,w,C,P,k,j,x,$):dt(O,P,k,!0):(Q&8&&u(w,""),ie&16&&b(q,w,C,P,k,j,x,$))},Xe=(m,y,w,C,P,k,j,x,$)=>{m=m||Ws,y=y||Ws;const O=m.length,Q=y.length,q=Math.min(O,Q);let Y;for(Y=0;Y<q;Y++){const ie=y[Y]=$?yr(y[Y]):Tn(y[Y]);p(m[Y],ie,w,null,P,k,j,x,$)}O>Q?dt(m,P,k,!0,!1,q):b(y,w,C,P,k,j,x,$,q)},Ft=(m,y,w,C,P,k,j,x,$)=>{let O=0;const Q=y.length;let q=m.length-1,Y=Q-1;for(;O<=q&&O<=Y;){const ie=m[O],fe=y[O]=$?yr(y[O]):Tn(y[O]);if(ji(ie,fe))p(ie,fe,w,null,P,k,j,x,$);else break;O++}for(;O<=q&&O<=Y;){const ie=m[q],fe=y[Y]=$?yr(y[Y]):Tn(y[Y]);if(ji(ie,fe))p(ie,fe,w,null,P,k,j,x,$);else break;q--,Y--}if(O>q){if(O<=Y){const ie=Y+1,fe=ie<Q?y[ie].el:C;for(;O<=Y;)p(null,y[O]=$?yr(y[O]):Tn(y[O]),w,fe,P,k,j,x,$),O++}}else if(O>Y)for(;O<=q;)Ot(m[O],P,k,!0),O++;else{const ie=O,fe=O,Ne=new Map;for(O=fe;O<=Y;O++){const Ut=y[O]=$?yr(y[O]):Tn(y[O]);Ut.key!=null&&Ne.set(Ut.key,O)}let Pe,He=0;const Zt=Y-fe+1;let Ss=!1,Qp=0;const Ui=new Array(Zt);for(O=0;O<Zt;O++)Ui[O]=0;for(O=ie;O<=q;O++){const Ut=m[O];if(He>=Zt){Ot(Ut,P,k,!0);continue}let vn;if(Ut.key!=null)vn=Ne.get(Ut.key);else for(Pe=fe;Pe<=Y;Pe++)if(Ui[Pe-fe]===0&&ji(Ut,y[Pe])){vn=Pe;break}vn===void 0?Ot(Ut,P,k,!0):(Ui[vn-fe]=O+1,vn>=Qp?Qp=vn:Ss=!0,p(Ut,y[vn],w,null,P,k,j,x,$),He++)}const Yp=Ss?NA(Ui):Ws;for(Pe=Yp.length-1,O=Zt-1;O>=0;O--){const Ut=fe+O,vn=y[Ut],Xp=Ut+1<Q?y[Ut+1].el:C;Ui[O]===0?p(null,vn,w,Xp,P,k,j,x,$):Ss&&(Pe<0||O!==Yp[Pe]?ft(vn,w,Xp,2):Pe--)}}},ft=(m,y,w,C,P=null)=>{const{el:k,type:j,transition:x,children:$,shapeFlag:O}=m;if(O&6){ft(m.component.subTree,y,w,C);return}if(O&128){m.suspense.move(y,w,C);return}if(O&64){j.move(m,y,w,V);return}if(j===tn){r(k,y,w);for(let q=0;q<$.length;q++)ft($[q],y,w,C);r(m.anchor,y,w);return}if(j===rl){A(m,y,w);return}if(C!==2&&O&1&&x)if(C===0)x.beforeEnter(k),r(k,y,w),xt(()=>x.enter(k),P);else{const{leave:q,delayLeave:Y,afterLeave:ie}=x,fe=()=>r(k,y,w),Ne=()=>{q(k,()=>{fe(),ie&&ie()})};Y?Y(k,fe,Ne):Ne()}else r(k,y,w)},Ot=(m,y,w,C=!1,P=!1)=>{const{type:k,props:j,ref:x,children:$,dynamicChildren:O,shapeFlag:Q,patchFlag:q,dirs:Y}=m;if(x!=null&&hh(x,null,w,m,!0),Q&256){y.ctx.deactivate(m);return}const ie=Q&1&&Y,fe=!nl(m);let Ne;if(fe&&(Ne=j&&j.onVnodeBeforeUnmount)&&En(Ne,y,m),Q&6)Oa(m.component,w,C);else{if(Q&128){m.suspense.unmount(w,C);return}ie&&zr(m,null,y,"beforeUnmount"),Q&64?m.type.remove(m,y,w,P,V,C):O&&(k!==tn||q>0&&q&64)?dt(O,y,w,!1,!0):(k===tn&&q&384||!P&&Q&16)&&dt($,y,w),C&&Cs(m)}(fe&&(Ne=j&&j.onVnodeUnmounted)||ie)&&xt(()=>{Ne&&En(Ne,y,m),ie&&zr(m,null,y,"unmounted")},w)},Cs=m=>{const{type:y,el:w,anchor:C,transition:P}=m;if(y===tn){Rs(w,C);return}if(y===rl){E(m);return}const k=()=>{s(w),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(m.shapeFlag&1&&P&&!P.persisted){const{leave:j,delayLeave:x}=P,$=()=>j(w,k);x?x(m.el,k,$):$()}else k()},Rs=(m,y)=>{let w;for(;m!==y;)w=f(m),s(m),m=w;s(y)},Oa=(m,y,w)=>{const{bum:C,scope:P,update:k,subTree:j,um:x}=m;C&&fu(C),P.stop(),k&&(k.active=!1,Ot(j,m,y,w)),x&&xt(x,y),xt(()=>{m.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},dt=(m,y,w,C=!1,P=!1,k=0)=>{for(let j=k;j<m.length;j++)Ot(m[j],y,w,C,P)},S=m=>m.shapeFlag&6?S(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),z=(m,y,w)=>{m==null?y._vnode&&Ot(y._vnode,null,null,!0):p(y._vnode||null,m,y,null,null,null,w),om(),av(),y._vnode=m},V={p,um:Ot,m:ft,r:Cs,mt:Fe,mc:b,pc:he,pbc:W,n:S,o:t};let G,be;return e&&([G,be]=e(V)),{render:z,hydrate:G,createApp:IA(z,G)}}function Hr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Av(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=yr(s[i]),a.el=o.el),n||Av(o,a)),a.type===Ic&&(a.el=o.el)}}function NA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const OA=t=>t.__isTeleport,tn=Symbol.for("v-fgt"),Ic=Symbol.for("v-txt"),as=Symbol.for("v-cmt"),rl=Symbol.for("v-stc"),uo=[];let sn=null;function bn(t=!1){uo.push(sn=t?null:[])}function DA(){uo.pop(),sn=uo[uo.length-1]||null}let ko=1;function _m(t){ko+=t}function Cv(t){return t.dynamicChildren=ko>0?sn||Ws:null,DA(),ko>0&&sn&&sn.push(t),t}function Qn(t,e,n,r,s,i){return Cv(Mt(t,e,n,r,s,i,!0))}function xA(t,e,n,r,s){return Cv(rt(t,e,n,r,s,!0))}function fh(t){return t?t.__v_isVNode===!0:!1}function ji(t,e){return t.type===e.type&&t.key===e.key}const bc="__vInternal",Rv=({key:t})=>t??null,sl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||je(t)||le(t)?{i:Gt,r:t,k:e,f:!!n}:t:null);function Mt(t,e=null,n=null,r=0,s=null,i=t===tn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rv(e),ref:e&&sl(e),scopeId:wc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Gt};return a?(Jf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ye(n)?8:16),ko>0&&!o&&sn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&sn.push(l),l}const rt=MA;function MA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===dA)&&(t=as),fh(t)){const a=ii(t,e,!0);return n&&Jf(a,n),ko>0&&!i&&sn&&(a.shapeFlag&6?sn[sn.indexOf(t)]=a:sn.push(a)),a.patchFlag|=-2,a}if(qA(t)&&(t=t.__vccOpts),e){e=LA(e);let{class:a,style:l}=e;a&&!Ye(a)&&(e.class=xf(a)),Me(l)&&(ev(l)&&!ne(l)&&(l=st({},l)),e.style=Df(l))}const o=Ye(t)?1:tA(t)?128:OA(t)?64:Me(t)?4:le(t)?2:0;return Mt(t,e,n,r,s,o,i,!0)}function LA(t){return t?ev(t)||bc in t?st({},t):t:null}function ii(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?$A(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rv(a),ref:e&&e.ref?n&&s?ne(s)?s.concat(sl(e)):[s,sl(e)]:sl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tn?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ii(t.ssContent),ssFallback:t.ssFallback&&ii(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Il(t=" ",e=0){return rt(Ic,null,t,e)}function cj(t,e){const n=rt(rl,null,t);return n.staticCount=e,n}function ym(t="",e=!1){return e?(bn(),xA(as,null,t)):rt(as,null,t)}function Tn(t){return t==null||typeof t=="boolean"?rt(as):ne(t)?rt(tn,null,t.slice()):typeof t=="object"?yr(t):rt(Ic,null,String(t))}function yr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ii(t)}function Jf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Jf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(bc in e)?e._ctx=Gt:s===3&&Gt&&(Gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:Gt},n=32):(e=String(e),r&64?(n=16,e=[Il(e)]):n=8);t.children=e,t.shapeFlag|=n}function $A(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xf([e.class,r.class]));else if(s==="style")e.style=Df([e.style,r.style]);else if(pc(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function En(t,e,n,r=null){fn(t,e,7,[n,r])}const VA=vv();let FA=0;function UA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||VA,i={uid:FA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wv(r,s),emitsOptions:cv(r,s),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Yb.bind(null,i),t.ce&&t.ce(i),i}let et=null;const No=()=>et||Gt;let Zf,Ps,vm="__VUE_INSTANCE_SETTERS__";(Ps=th()[vm])||(Ps=th()[vm]=[]),Ps.push(t=>et=t),Zf=t=>{Ps.length>1?Ps.forEach(e=>e(t)):Ps[0](t)};const oi=t=>{Zf(t),t.scope.on()},ns=()=>{et&&et.scope.off(),Zf(null)};function Sv(t){return t.vnode.shapeFlag&4}let Oo=!1;function jA(t,e=!1){Oo=e;const{props:n,children:r}=t.vnode,s=Sv(t);bA(t,n,s,e),RA(t,r);const i=s?BA(t,e):void 0;return Oo=!1,i}function BA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ra(new Proxy(t.ctx,gA));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?zA(t):null;oi(t),Ci();const i=Sr(r,t,0,[t.props,s]);if(Ri(),ns(),xy(i)){if(i.then(ns,ns),e)return i.then(o=>{Em(t,o,e)}).catch(o=>{vc(o,t,0)});t.asyncDep=i}else Em(t,i,e)}else Pv(t,e)}function Em(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=sv(e)),Pv(t,n)}let wm;function Pv(t,e,n){const r=t.type;if(!t.render){if(!e&&wm&&!r.render){const s=r.template||Yf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=st(st({isCustomElement:i,delimiters:a},o),l);r.render=wm(s,c)}}t.render=r.render||hn}oi(t),Ci(),_A(t),Ri(),ns()}function WA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Vt(t,"get","$attrs"),e[n]}}))}function zA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return WA(t)},slots:t.slots,emit:t.emit,expose:e}}function ed(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sv(ra(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lo)return lo[n](t)},has(e,n){return n in e||n in lo}}))}function HA(t,e=!0){return le(t)?t.displayName||t.name:t.name||e&&t.__name}function qA(t){return le(t)&&"__vccOpts"in t}const Et=(t,e)=>zb(t,e,Oo);function Do(t,e,n){const r=arguments.length;return r===2?Me(e)&&!ne(e)?fh(e)?rt(t,null,[e]):rt(t,e):rt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fh(n)&&(n=[n]),rt(t,e,n))}const KA=Symbol.for("v-scx"),GA=()=>$t(KA),QA="3.3.4",YA="http://www.w3.org/2000/svg",Qr=typeof document<"u"?document:null,Tm=Qr&&Qr.createElement("template"),XA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Qr.createElementNS(YA,t):Qr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Qr.createTextNode(t),createComment:t=>Qr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Tm.innerHTML=r?`<svg>${t}</svg>`:t;const a=Tm.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function JA(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ZA(t,e,n){const r=t.style,s=Ye(n);if(n&&!s){if(e&&!Ye(e))for(const i in e)n[i]==null&&dh(r,i,"");for(const i in n)dh(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Im=/\s*!important$/;function dh(t,e,n){if(ne(n))n.forEach(r=>dh(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=eC(t,e);Im.test(n)?t.setProperty(Ai(r),n.replace(Im,""),"important"):t[r]=n}}const bm=["Webkit","Moz","ms"],mu={};function eC(t,e){const n=mu[e];if(n)return n;let r=Ln(e);if(r!=="filter"&&r in t)return mu[e]=r;r=_c(r);for(let s=0;s<bm.length;s++){const i=bm[s]+r;if(i in t)return mu[e]=i}return e}const Am="http://www.w3.org/1999/xlink";function tC(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Am,e.slice(6,e.length)):t.setAttributeNS(Am,e,n);else{const i=ab(e);n==null||i&&!$y(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function nC(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=$y(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function rC(t,e,n,r){t.addEventListener(e,n,r)}function sC(t,e,n,r){t.removeEventListener(e,n,r)}function iC(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=oC(e);if(r){const c=i[e]=cC(r,s);rC(t,a,c,l)}else o&&(sC(t,a,o,l),i[e]=void 0)}}const Cm=/(?:Once|Passive|Capture)$/;function oC(t){let e;if(Cm.test(t)){e={};let r;for(;r=t.match(Cm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ai(t.slice(2)),e]}let gu=0;const aC=Promise.resolve(),lC=()=>gu||(aC.then(()=>gu=0),gu=Date.now());function cC(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;fn(uC(r,n.value),e,5,[r])};return n.value=t,n.attached=lC(),n}function uC(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Rm=/^on[a-z]/,hC=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?JA(t,r,s):e==="style"?ZA(t,n,r):pc(e)?Pf(e)||iC(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fC(t,e,r,s))?nC(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),tC(t,e,r,s))};function fC(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Rm.test(e)&&le(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Rm.test(e)&&Ye(n)?!1:e in t}const dC=st({patchProp:hC},XA);let Sm;function pC(){return Sm||(Sm=PA(dC))}const mC=(...t)=>{const e=pC().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=gC(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gC(t){return Ye(t)?document.querySelector(t):t}var _C=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const yC=Symbol();var Pm;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Pm||(Pm={}));function vC(){const t=Uy(!0),e=t.run(()=>Ve({}));let n=[],r=[];const s=ra({install(i){s._a=i,i.provide(yC,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!_C?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const EC="/assets/logo-8b9aaf55.png";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ds=typeof window<"u";function wC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function _u(t,e){const n={};for(const r in e){const s=e[r];n[r]=pn(s)?s.map(t):t(s)}return n}const ho=()=>{},pn=Array.isArray,TC=/\/$/,IC=t=>t.replace(TC,"");function yu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=RC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function bC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function km(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function AC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ai(e.matched[r],n.matched[s])&&kv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ai(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function kv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!CC(t[n],e[n]))return!1;return!0}function CC(t,e){return pn(t)?Nm(t,e):pn(e)?Nm(e,t):t===e}function Nm(t,e){return pn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function RC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var xo;(function(t){t.pop="pop",t.push="push"})(xo||(xo={}));var fo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fo||(fo={}));function SC(t){if(!t)if(Ds){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),IC(t)}const PC=/^[^#]+#/;function kC(t,e){return t.replace(PC,"#")+e}function NC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ac=()=>({left:window.pageXOffset,top:window.pageYOffset});function OC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=NC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Om(t,e){return(history.state?history.state.position-e:-1)+t}const ph=new Map;function DC(t,e){ph.set(t,e)}function xC(t){const e=ph.get(t);return ph.delete(t),e}let MC=()=>location.protocol+"//"+location.host;function Nv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),km(l,"")}return km(n,t)+r+s}function LC(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=Nv(t,location),g=n.value,p=e.value;let _=0;if(f){if(n.value=d,e.value=f,o&&o===g){o=null;return}_=p?f.position-p.position:0}else r(d);s.forEach(v=>{v(n.value,g,{delta:_,type:xo.pop,direction:_?_>0?fo.forward:fo.back:fo.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Re({},f.state,{scroll:Ac()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Dm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ac():null}}function $C(t){const{history:e,location:n}=window,r={value:Nv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:MC()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Re({},e.state,Dm(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Re({},s.value,e.state,{forward:l,scroll:Ac()});i(u.current,u,!0);const h=Re({},Dm(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function VC(t){t=SC(t);const e=$C(t),n=LC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:kC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function FC(t){return typeof t=="string"||t&&typeof t=="object"}function Ov(t){return typeof t=="string"||typeof t=="symbol"}const gr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Dv=Symbol("");var xm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xm||(xm={}));function li(t,e){return Re(new Error,{type:t,[Dv]:!0},e)}function Hn(t,e){return t instanceof Error&&Dv in t&&(e==null||!!(t.type&e))}const Mm="[^/]+?",UC={sensitive:!1,strict:!1,start:!0,end:!0},jC=/[.+*?^${}()[\]/\\]/g;function BC(t,e){const n=Re({},UC,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(jC,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:p,optional:_,regexp:v}=f;i.push({name:g,repeatable:p,optional:_});const T=v||Mm;if(T!==Mm){d+=10;try{new RegExp(`(${T})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+E.message)}}let A=p?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||(A=_&&c.length<2?`(?:/${A})`:"/"+A),_&&(A+="?"),s+=A,d+=20,_&&(d+=-8),p&&(d+=-20),T===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=i[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:p,optional:_}=d,v=g in c?c[g]:"";if(pn(v)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=pn(v)?v.join("/"):v;if(!T)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=T}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function WC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function zC(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=WC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Lm(r))return 1;if(Lm(s))return-1}return s.length-r.length}function Lm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const HC={type:0,value:""},qC=/[a-zA-Z0-9_]/;function KC(t){if(!t)return[[]];if(t==="/")return[[HC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:qC.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function GC(t,e,n){const r=BC(KC(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function QC(t,e){const n=[],r=new Map;e=Fm({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,g=YC(u);g.aliasOf=f&&f.record;const p=Fm(e,u),_=[g];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of A)_.push(Re({},g,{components:f?f.record.components:g.components,path:E,aliasOf:f?f.record:g}))}let v,T;for(const A of _){const{path:E}=A;if(h&&E[0]!=="/"){const D=h.record.path,I=D[D.length-1]==="/"?"":"/";A.path=h.record.path+(E&&I+E)}if(v=GC(A,h,p),f?f.alias.push(v):(T=T||v,T!==v&&T.alias.push(v),d&&u.name&&!Vm(v)&&o(u.name)),g.children){const D=g.children;for(let I=0;I<D.length;I++)i(D[I],v,f&&f.children[I])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return T?()=>{o(T)}:ho}function o(u){if(Ov(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&zC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!xv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Vm(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},g,p;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw li(1,{location:u});p=f.record.name,d=Re($m(h.params,f.keys.filter(T=>!T.optional).map(T=>T.name)),u.params&&$m(u.params,f.keys.map(T=>T.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=n.find(T=>T.re.test(g)),f&&(d=f.parse(g),p=f.record.name);else{if(f=h.name?r.get(h.name):n.find(T=>T.re.test(h.path)),!f)throw li(1,{location:u,currentLocation:h});p=f.record.name,d=Re({},h.params,u.params),g=f.stringify(d)}const _=[];let v=f;for(;v;)_.unshift(v.record),v=v.parent;return{name:p,path:g,params:d,matched:_,meta:JC(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function $m(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function YC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:XC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function XC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Vm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function JC(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Fm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function xv(t,e){return e.children.some(n=>n===t||xv(t,n))}const Mv=/#/g,ZC=/&/g,eR=/\//g,tR=/=/g,nR=/\?/g,Lv=/\+/g,rR=/%5B/g,sR=/%5D/g,$v=/%5E/g,iR=/%60/g,Vv=/%7B/g,oR=/%7C/g,Fv=/%7D/g,aR=/%20/g;function td(t){return encodeURI(""+t).replace(oR,"|").replace(rR,"[").replace(sR,"]")}function lR(t){return td(t).replace(Vv,"{").replace(Fv,"}").replace($v,"^")}function mh(t){return td(t).replace(Lv,"%2B").replace(aR,"+").replace(Mv,"%23").replace(ZC,"%26").replace(iR,"`").replace(Vv,"{").replace(Fv,"}").replace($v,"^")}function cR(t){return mh(t).replace(tR,"%3D")}function uR(t){return td(t).replace(Mv,"%23").replace(nR,"%3F")}function hR(t){return t==null?"":uR(t).replace(eR,"%2F")}function bl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function fR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Lv," "),o=i.indexOf("="),a=bl(o<0?i:i.slice(0,o)),l=o<0?null:bl(i.slice(o+1));if(a in e){let c=e[a];pn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Um(t){let e="";for(let n in t){const r=t[n];if(n=cR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(pn(r)?r.map(i=>i&&mh(i)):[r&&mh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=pn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const pR=Symbol(""),jm=Symbol(""),nd=Symbol(""),Uv=Symbol(""),gh=Symbol("");function Bi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(li(4,{from:n,to:e})):h instanceof Error?a(h):FC(h)?a(li(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function vu(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(mR(a)){const c=(a.__vccOpts||a)[e];c&&s.push(vr(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=wC(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&vr(f,n,r,i,o)()}))}}return s}function mR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bm(t){const e=$t(nd),n=$t(Uv),r=Et(()=>e.resolve(ut(t.to))),s=Et(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ai.bind(null,u));if(f>-1)return f;const d=Wm(l[c-2]);return c>1&&Wm(u)===d&&h[h.length-1].path!==d?h.findIndex(ai.bind(null,l[c-2])):f}),i=Et(()=>s.value>-1&&yR(n.params,r.value.params)),o=Et(()=>s.value>-1&&s.value===n.matched.length-1&&kv(n.params,r.value.params));function a(l={}){return _R(l)?e[ut(t.replace)?"replace":"push"](ut(t.to)).catch(ho):Promise.resolve()}return{route:r,href:Et(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const gR=vs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bm,setup(t,{slots:e}){const n=Jn(Bm(t)),{options:r}=$t(nd),s=Et(()=>({[zm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Do("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),_h=gR;function _R(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yR(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!pn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Wm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zm=(t,e,n)=>t??e??n,vR=vs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$t(gh),s=Et(()=>t.route||r.value),i=$t(jm,0),o=Et(()=>{let c=ut(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Et(()=>s.value.matched[o.value]);co(jm,Et(()=>o.value+1)),co(pR,a),co(gh,s);const l=Ve();return Yt(()=>[l.value,a.value,t.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ai(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Hm(n.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,_=Do(f,Re({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Hm(n.default,{Component:_,route:c})||_}}});function Hm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jv=vR;function ER(t){const e=QC(t.routes,t),n=t.parseQuery||fR,r=t.stringifyQuery||Um,s=t.history,i=Bi(),o=Bi(),a=Bi(),l=nv(gr);let c=gr;Ds&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_u.bind(null,S=>""+S),h=_u.bind(null,hR),f=_u.bind(null,bl);function d(S,z){let V,G;return Ov(S)?(V=e.getRecordMatcher(S),G=z):G=S,e.addRoute(G,V)}function g(S){const z=e.getRecordMatcher(S);z&&e.removeRoute(z)}function p(){return e.getRoutes().map(S=>S.record)}function _(S){return!!e.getRecordMatcher(S)}function v(S,z){if(z=Re({},z||l.value),typeof S=="string"){const w=yu(n,S,z.path),C=e.resolve({path:w.path},z),P=s.createHref(w.fullPath);return Re(w,C,{params:f(C.params),hash:bl(w.hash),redirectedFrom:void 0,href:P})}let V;if("path"in S)V=Re({},S,{path:yu(n,S.path,z.path).path});else{const w=Re({},S.params);for(const C in w)w[C]==null&&delete w[C];V=Re({},S,{params:h(w)}),z.params=h(z.params)}const G=e.resolve(V,z),be=S.hash||"";G.params=u(f(G.params));const m=bC(r,Re({},S,{hash:lR(be),path:G.path})),y=s.createHref(m);return Re({fullPath:m,hash:be,query:r===Um?dR(S.query):S.query||{}},G,{redirectedFrom:void 0,href:y})}function T(S){return typeof S=="string"?yu(n,S,l.value.path):Re({},S)}function A(S,z){if(c!==S)return li(8,{from:z,to:S})}function E(S){return R(S)}function D(S){return E(Re(T(S),{replace:!0}))}function I(S){const z=S.matched[S.matched.length-1];if(z&&z.redirect){const{redirect:V}=z;let G=typeof V=="function"?V(S):V;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=T(G):{path:G},G.params={}),Re({query:S.query,hash:S.hash,params:"path"in G?{}:S.params},G)}}function R(S,z){const V=c=v(S),G=l.value,be=S.state,m=S.force,y=S.replace===!0,w=I(V);if(w)return R(Re(T(w),{state:typeof w=="object"?Re({},be,w.state):be,force:m,replace:y}),z||V);const C=V;C.redirectedFrom=z;let P;return!m&&AC(r,G,V)&&(P=li(16,{to:C,from:G}),ft(G,G,!0,!1)),(P?Promise.resolve(P):W(C,G)).catch(k=>Hn(k)?Hn(k,2)?k:Ft(k):he(k,C,G)).then(k=>{if(k){if(Hn(k,2))return R(Re({replace:y},T(k.to),{state:typeof k.to=="object"?Re({},be,k.to.state):be,force:m}),z||C)}else k=me(C,G,!0,y,be);return K(C,G,k),k})}function b(S,z){const V=A(S,z);return V?Promise.reject(V):Promise.resolve()}function M(S){const z=Rs.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(S):S()}function W(S,z){let V;const[G,be,m]=wR(S,z);V=vu(G.reverse(),"beforeRouteLeave",S,z);for(const w of G)w.leaveGuards.forEach(C=>{V.push(vr(C,S,z))});const y=b.bind(null,S,z);return V.push(y),dt(V).then(()=>{V=[];for(const w of i.list())V.push(vr(w,S,z));return V.push(y),dt(V)}).then(()=>{V=vu(be,"beforeRouteUpdate",S,z);for(const w of be)w.updateGuards.forEach(C=>{V.push(vr(C,S,z))});return V.push(y),dt(V)}).then(()=>{V=[];for(const w of m)if(w.beforeEnter)if(pn(w.beforeEnter))for(const C of w.beforeEnter)V.push(vr(C,S,z));else V.push(vr(w.beforeEnter,S,z));return V.push(y),dt(V)}).then(()=>(S.matched.forEach(w=>w.enterCallbacks={}),V=vu(m,"beforeRouteEnter",S,z),V.push(y),dt(V))).then(()=>{V=[];for(const w of o.list())V.push(vr(w,S,z));return V.push(y),dt(V)}).catch(w=>Hn(w,8)?w:Promise.reject(w))}function K(S,z,V){a.list().forEach(G=>M(()=>G(S,z,V)))}function me(S,z,V,G,be){const m=A(S,z);if(m)return m;const y=z===gr,w=Ds?history.state:{};V&&(G||y?s.replace(S.fullPath,Re({scroll:y&&w&&w.scroll},be)):s.push(S.fullPath,be)),l.value=S,ft(S,z,V,y),Ft()}let Z;function Fe(){Z||(Z=s.listen((S,z,V)=>{if(!Oa.listening)return;const G=v(S),be=I(G);if(be){R(Re(be,{replace:!0}),G).catch(ho);return}c=G;const m=l.value;Ds&&DC(Om(m.fullPath,V.delta),Ac()),W(G,m).catch(y=>Hn(y,12)?y:Hn(y,2)?(R(y.to,G).then(w=>{Hn(w,20)&&!V.delta&&V.type===xo.pop&&s.go(-1,!1)}).catch(ho),Promise.reject()):(V.delta&&s.go(-V.delta,!1),he(y,G,m))).then(y=>{y=y||me(G,m,!1),y&&(V.delta&&!Hn(y,8)?s.go(-V.delta,!1):V.type===xo.pop&&Hn(y,20)&&s.go(-1,!1)),K(G,m,y)}).catch(ho)}))}let We=Bi(),ee=Bi(),se;function he(S,z,V){Ft(S);const G=ee.list();return G.length?G.forEach(be=>be(S,z,V)):console.error(S),Promise.reject(S)}function Xe(){return se&&l.value!==gr?Promise.resolve():new Promise((S,z)=>{We.add([S,z])})}function Ft(S){return se||(se=!S,Fe(),We.list().forEach(([z,V])=>S?V(S):z()),We.reset()),S}function ft(S,z,V,G){const{scrollBehavior:be}=t;if(!Ds||!be)return Promise.resolve();const m=!V&&xC(Om(S.fullPath,0))||(G||!V)&&history.state&&history.state.scroll||null;return zf().then(()=>be(S,z,m)).then(y=>y&&OC(y)).catch(y=>he(y,S,z))}const Ot=S=>s.go(S);let Cs;const Rs=new Set,Oa={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:_,getRoutes:p,resolve:v,options:t,push:E,replace:D,go:Ot,back:()=>Ot(-1),forward:()=>Ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:Xe,install(S){const z=this;S.component("RouterLink",_h),S.component("RouterView",jv),S.config.globalProperties.$router=z,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>ut(l)}),Ds&&!Cs&&l.value===gr&&(Cs=!0,E(s.location).catch(be=>{}));const V={};for(const be in gr)Object.defineProperty(V,be,{get:()=>l.value[be],enumerable:!0});S.provide(nd,z),S.provide(Uv,Jy(V)),S.provide(gh,l);const G=S.unmount;Rs.add(S),S.unmount=function(){Rs.delete(S),Rs.size<1&&(c=gr,Z&&Z(),Z=null,l.value=gr,Cs=!1,se=!1),G()}}};function dt(S){return S.reduce((z,V)=>z.then(()=>M(V)),Promise.resolve())}return Oa}function wR(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>ai(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ai(c,l))||s.push(l))}return[n,r,s]}const TR="/assets/google_btn-3f54b946.png";/**
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
 */const Bv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(t,e){if(!t)throw Si(e)},Si=function(t){return new Error("Firebase Database ("+Bv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Wv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},IR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new bR;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zv=function(t){const e=Wv(t);return Cc.encodeByteArray(e,!0)},Al=function(t){return zv(t).replace(/\./g,"")},Cl=function(t){try{return Cc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function AR(t){return Hv(void 0,t)}function Hv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!CR(n)||(t[n]=Hv(t[n],e[n]));return t}function CR(t){return t!=="__proto__"}/**
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
 */function RR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SR=()=>RR().__FIREBASE_DEFAULTS__,PR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cl(t[1]);return e&&JSON.parse(e)},rd=()=>{try{return SR()||PR()||kR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qv=t=>{var e,n;return(n=(e=rd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NR=t=>{const e=qv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kv=()=>{var t;return(t=rd())===null||t===void 0?void 0:t.config},Gv=t=>{var e;return(e=rd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Mo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function OR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Al(JSON.stringify(n)),Al(JSON.stringify(o)),a].join(".")}/**
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function DR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xR(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yv(){return Bv.NODE_ADMIN===!0}function Xv(){try{return typeof indexedDB=="object"}catch{return!1}}function MR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const LR="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LR,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$R(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,a,r)}}function $R(t,e){return t.replace(VR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const VR=/\{\$([^}]+)}/g;/**
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
 */function Lo(t){return JSON.parse(t)}function ct(t){return JSON.stringify(t)}/**
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
 */const Jv=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Lo(Cl(i[0])||""),n=Lo(Cl(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},FR=function(t){const e=Jv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},UR=function(t){const e=Jv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function pr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ci(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rl(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Sl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(qm(i)&&qm(o)){if(!Sl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qm(t){return t!==null&&typeof t=="object"}/**
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
 */function ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class jR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function BR(t,e){const n=new WR(t,e);return n.subscribe.bind(n)}class WR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Eu),s.error===void 0&&(s.error=Eu),s.complete===void 0&&(s.complete=Eu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eu(){}function HR(t,e){return`${t} failed: ${e} argument `}/**
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
 */const qR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,F(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Rc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Wn(t){return t&&t._delegate?t._delegate:t}class mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qr="[DEFAULT]";/**
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
 */class KR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QR(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GR(t){return t===qr?void 0:t}function QR(t){return t.instantiationMode==="EAGER"}/**
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
 */class YR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const XR={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},JR=de.INFO,ZR={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},eS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ZR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sa{constructor(e){this.name=e,this._logLevel=JR,this._logHandler=eS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const tS=(t,e)=>e.some(n=>t instanceof n);let Km,Gm;function nS(){return Km||(Km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rS(){return Gm||(Gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zv=new WeakMap,vh=new WeakMap,eE=new WeakMap,wu=new WeakMap,id=new WeakMap;function sS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zv.set(n,t)}).catch(()=>{}),id.set(e,t),e}function iS(t){if(vh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vh.set(t,e)}let Eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oS(t){Eh=t(Eh)}function aS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tu(this),e,...n);return eE.set(r,e.sort?e.sort():[e]),Pr(r)}:rS().includes(t)?function(...e){return t.apply(Tu(this),e),Pr(Zv.get(this))}:function(...e){return Pr(t.apply(Tu(this),e))}}function lS(t){return typeof t=="function"?aS(t):(t instanceof IDBTransaction&&iS(t),tS(t,nS())?new Proxy(t,Eh):t)}function Pr(t){if(t instanceof IDBRequest)return sS(t);if(wu.has(t))return wu.get(t);const e=lS(t);return e!==t&&(wu.set(t,e),id.set(e,t)),e}const Tu=t=>id.get(t);function cS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Pr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Pr(o.result),l.oldVersion,l.newVersion,Pr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const uS=["get","getKey","getAll","getAllKeys","count"],hS=["put","add","delete","clear"],Iu=new Map;function Qm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Iu.get(e))return Iu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=hS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||uS.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Iu.set(e,i),i}oS(t=>({...t,get:(e,n,r)=>Qm(e,n)||t.get(e,n,r),has:(e,n)=>!!Qm(e,n)||t.has(e,n)}));/**
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
 */class fS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wh="@firebase/app",Ym="0.9.19";/**
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
 */const ls=new sa("@firebase/app"),pS="@firebase/app-compat",mS="@firebase/analytics-compat",gS="@firebase/analytics",_S="@firebase/app-check-compat",yS="@firebase/app-check",vS="@firebase/auth",ES="@firebase/auth-compat",wS="@firebase/database",TS="@firebase/database-compat",IS="@firebase/functions",bS="@firebase/functions-compat",AS="@firebase/installations",CS="@firebase/installations-compat",RS="@firebase/messaging",SS="@firebase/messaging-compat",PS="@firebase/performance",kS="@firebase/performance-compat",NS="@firebase/remote-config",OS="@firebase/remote-config-compat",DS="@firebase/storage",xS="@firebase/storage-compat",MS="@firebase/firestore",LS="@firebase/firestore-compat",$S="firebase",VS="10.4.0";/**
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
 */const Th="[DEFAULT]",FS={[wh]:"fire-core",[pS]:"fire-core-compat",[gS]:"fire-analytics",[mS]:"fire-analytics-compat",[yS]:"fire-app-check",[_S]:"fire-app-check-compat",[vS]:"fire-auth",[ES]:"fire-auth-compat",[wS]:"fire-rtdb",[TS]:"fire-rtdb-compat",[IS]:"fire-fn",[bS]:"fire-fn-compat",[AS]:"fire-iid",[CS]:"fire-iid-compat",[RS]:"fire-fcm",[SS]:"fire-fcm-compat",[PS]:"fire-perf",[kS]:"fire-perf-compat",[NS]:"fire-rc",[OS]:"fire-rc-compat",[DS]:"fire-gcs",[xS]:"fire-gcs-compat",[MS]:"fire-fst",[LS]:"fire-fst-compat","fire-js":"fire-js",[$S]:"fire-js-all"};/**
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
 */const Pl=new Map,Ih=new Map;function US(t,e){try{t.container.addComponent(e)}catch(n){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(Ih.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;Ih.set(e,t);for(const n of Pl.values())US(n,t);return!0}function od(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const jS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kr=new Pi("app","Firebase",jS);/**
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
 */class BS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
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
 */const Fr=VS;function tE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Th,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw kr.create("bad-app-name",{appName:String(s)});if(n||(n=Kv()),!n)throw kr.create("no-options");const i=Pl.get(s);if(i){if(Sl(n,i.options)&&Sl(r,i.config))return i;throw kr.create("duplicate-app",{appName:s})}const o=new YR(s);for(const l of Ih.values())o.addComponent(l);const a=new BS(n,r,o);return Pl.set(s,a),a}function ad(t=Th){const e=Pl.get(t);if(!e&&t===Th&&Kv())return tE();if(!e)throw kr.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let s=(r=FS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ls.warn(a.join(" "));return}$n(new mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const WS="firebase-heartbeat-database",zS=1,$o="firebase-heartbeat-store";let bu=null;function nE(){return bu||(bu=cS(WS,zS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($o)}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),bu}async function HS(t){try{return await(await nE()).transaction($o).objectStore($o).get(rE(t))}catch(e){if(e instanceof Bn)ls.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ls.warn(n.message)}}}async function Xm(t,e){try{const r=(await nE()).transaction($o,"readwrite");await r.objectStore($o).put(e,rE(t)),await r.done}catch(n){if(n instanceof Bn)ls.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ls.warn(r.message)}}}function rE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qS=1024,KS=30*24*60*60*1e3;class GS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=KS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jm(),{heartbeatsToSend:n,unsentEntries:r}=QS(this._heartbeatsCache.heartbeats),s=Al(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Jm(){return new Date().toISOString().substring(0,10)}function QS(t,e=qS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xv()?MR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zm(t){return Al(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XS(t){$n(new mn("platform-logger",e=>new fS(e),"PRIVATE")),$n(new mn("heartbeat",e=>new GS(e),"PRIVATE")),Wt(wh,Ym,t),Wt(wh,Ym,"esm2017"),Wt("fire-js","")}XS("");function ld(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function sE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JS=sE,iE=new Pi("auth","Firebase",sE());/**
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
 */const kl=new sa("@firebase/auth");function ZS(t,...e){kl.logLevel<=de.WARN&&kl.warn(`Auth (${Fr}): ${t}`,...e)}function il(t,...e){kl.logLevel<=de.ERROR&&kl.error(`Auth (${Fr}): ${t}`,...e)}/**
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
 */function Vn(t,...e){throw cd(t,...e)}function On(t,...e){return cd(t,...e)}function oE(t,e,n){const r=Object.assign(Object.assign({},JS()),{[e]:n});return new Pi("auth","Firebase",r).create(e,{appName:t.name})}function eP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Vn(t,"argument-error"),oE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iE.create(t,...e)}function oe(t,e,...n){if(!t)throw cd(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw il(e),new Error(e)}function ar(t,e){t||Zn(e)}/**
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
 */function bh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tP(){return eg()==="http:"||eg()==="https:"}function eg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tP()||DR()||"connection"in navigator)?navigator.onLine:!0}function rP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=sd()||Qv()}get(){return nP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ud(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class aE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iP=new ia(3e4,6e4);function lE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oa(t,e,n,r,s={}){return cE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ki(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),aE.fetch()(uE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function cE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sP),e);try{const s=new aP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ua(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ua(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ua(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ua(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw oE(t,u,c);Vn(t,u)}}catch(s){if(s instanceof Bn)throw s;Vn(t,"network-request-failed",{message:String(s)})}}async function oP(t,e,n,r,s={}){const i=await oa(t,e,n,r,s);return"mfaPendingCredential"in i&&Vn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function uE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ud(t.config,s):`${t.config.apiScheme}://${s}`}class aP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),iP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=On(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function lP(t,e){return oa(t,"POST","/v1/accounts:delete",e)}async function cP(t,e){return oa(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uP(t,e=!1){const n=Wn(t),r=await n.getIdToken(e),s=hd(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:po(Au(s.auth_time)),issuedAtTime:po(Au(s.iat)),expirationTime:po(Au(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Au(t){return Number(t)*1e3}function hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cl(n);return s?JSON.parse(s):(il("Failed to decode base64 JWT payload"),null)}catch(s){return il("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hP(t){const e=hd(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&fP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Vo(t,cP(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?gP(i.providerUserInfo):[],a=mP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new hE(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function pP(t){const e=Wn(t);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function gP(t){return t.map(e=>{var{providerId:n}=e,r=ld(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _P(t,e){const n=await cE(t,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=uE(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",aE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return oe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await _P(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Fo;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fo,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
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
 */function _r(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rs{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hE(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vo(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uP(this,e)}reload(){return pP(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vo(this,lP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,p=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:E,isAnonymous:D,providerData:I,stsTokenManager:R}=n;oe(A&&R,e,"internal-error");const b=Fo.fromJSON(this.name,R);oe(typeof A=="string",e,"internal-error"),_r(h,e.name),_r(f,e.name),oe(typeof E=="boolean",e,"internal-error"),oe(typeof D=="boolean",e,"internal-error"),_r(d,e.name),_r(g,e.name),_r(p,e.name),_r(_,e.name),_r(v,e.name),_r(T,e.name);const M=new rs({uid:A,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:D,photoURL:g,phoneNumber:d,tenantId:p,stsTokenManager:b,createdAt:v,lastLoginAt:T});return I&&Array.isArray(I)&&(M.providerData=I.map(W=>Object.assign({},W))),_&&(M._redirectEventId=_),M}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fo;s.updateFromServerResponse(n);const i=new rs({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Nl(i),i}}/**
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
 */const tg=new Map;function er(t){ar(t instanceof Function,"Expected a class definition");let e=tg.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tg.set(t,e),e)}/**
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
 */class fE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fE.type="NONE";const ng=fE;/**
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
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ol(this.userKey,s.apiKey,i),this.fullPersistenceKey=ol("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qs(er(ng),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||er(ng);const o=ol(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=rs._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new qs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new qs(i,e,r))}}/**
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
 */function rg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_E(e))return"Blackberry";if(yE(e))return"Webos";if(fd(e))return"Safari";if((e.includes("chrome/")||pE(e))&&!e.includes("edge/"))return"Chrome";if(gE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dE(t=At()){return/firefox\//i.test(t)}function fd(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pE(t=At()){return/crios\//i.test(t)}function mE(t=At()){return/iemobile/i.test(t)}function gE(t=At()){return/android/i.test(t)}function _E(t=At()){return/blackberry/i.test(t)}function yE(t=At()){return/webos/i.test(t)}function Sc(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yP(t=At()){var e;return Sc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vP(){return xR()&&document.documentMode===10}function vE(t=At()){return Sc(t)||gE(t)||yE(t)||_E(t)||/windows phone/i.test(t)||mE(t)}function EP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function EE(t,e=[]){let n;switch(t){case"Browser":n=rg(At());break;case"Worker":n=`${rg(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
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
 */class wP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function TP(t,e={}){return oa(t,"GET","/v2/passwordPolicy",lE(t,e))}/**
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
 */const IP=6;class bP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:IP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class AP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sg(this),this.idTokenSubscription=new sg(this),this.beforeStateQueue=new wP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Wn(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TP(this),n=new bP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=EE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pc(t){return Wn(t)}class sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=BR(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function CP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function RP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=On("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",CP().appendChild(r)})}function SP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function PP(t,e){const n=od(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Sl(i,e??{}))return s;Vn(s,"already-initialized")}return n.initialize({options:e})}function kP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NP(t,e,n){const r=Pc(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=wE(e),{host:o,port:a}=OP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||DP()}function wE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OP(t){const e=wE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ig(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ig(o)}}}function ig(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class TE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}/**
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
 */async function Ks(t,e){return oP(t,"POST","/v1/accounts:signInWithIdp",lE(t,e))}/**
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
 */const xP="http://localhost";class cs extends TE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ld(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new cs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ks(e,n)}buildRequest(){const e={requestUri:xP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
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
 */class dd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class aa extends dd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Er extends aa{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
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
 */class Yn extends aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
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
 */class wr extends aa{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
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
 */class Tr extends aa{constructor(){super("twitter.com")}static credential(e,n){return cs._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
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
 */class ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rs._fromIdTokenResponse(e,r,s),o=og(r);return new ui({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=og(r);return new ui({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function og(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ol extends Bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ol.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ol(e,n,r,s)}}function IE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ol._fromErrorAndOperation(t,i,e,r):i})}async function MP(t,e,n=!1){const r=await Vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ui._forOperation(t,"link",r)}/**
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
 */async function LP(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Vo(t,IE(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=hd(i.idToken);oe(o,r,"internal-error");const{sub:a}=o;return oe(t.uid===a,r,"user-mismatch"),ui._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),i}}/**
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
 */async function $P(t,e,n=!1){const r="signIn",s=await IE(t,r,e),i=await ui._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function bE(t,e,n,r){return Wn(t).onIdTokenChanged(e,n,r)}function VP(t,e,n){return Wn(t).beforeAuthStateChanged(e,n)}function FP(t){return Wn(t).signOut()}const Dl="__sak";/**
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
 */class AE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dl,"1"),this.storage.removeItem(Dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function UP(){const t=At();return fd(t)||Sc(t)}const jP=1e3,BP=10;class CE extends AE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UP()&&EP(),this.fallbackToPolling=vE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);vP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}CE.type="LOCAL";const WP=CE;/**
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
 */class RE extends AE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}RE.type="SESSION";const SE=RE;/**
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
 */function zP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await zP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
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
 */function pd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class HP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=pd("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dn(){return window}function qP(t){Dn().location.href=t}/**
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
 */function PE(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function KP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QP(){return PE()?self:null}/**
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
 */const kE="firebaseLocalStorageDb",YP=1,xl="firebaseLocalStorage",NE="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nc(t,e){return t.transaction([xl],e?"readwrite":"readonly").objectStore(xl)}function XP(){const t=indexedDB.deleteDatabase(kE);return new la(t).toPromise()}function Ah(){const t=indexedDB.open(kE,YP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xl,{keyPath:NE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xl)?e(r):(r.close(),await XP(),e(await Ah()))})})}async function ag(t,e,n){const r=Nc(t,!0).put({[NE]:e,value:n});return new la(r).toPromise()}async function JP(t,e){const n=Nc(t,!1).get(e),r=await new la(n).toPromise();return r===void 0?null:r.value}function lg(t,e){const n=Nc(t,!0).delete(e);return new la(n).toPromise()}const ZP=800,ek=3;class OE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ah(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ek)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(QP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KP(),!this.activeServiceWorker)return;this.sender=new HP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ah();return await ag(e,Dl,"1"),await lg(e,Dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ag(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Nc(s,!1).getAll();return new la(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OE.type="LOCAL";const tk=OE;new ia(3e4,6e4);/**
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
 */function DE(t,e){return e?er(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class md extends TE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nk(t){return $P(t.auth,new md(t),t.bypassAuthState)}function rk(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),LP(n,new md(t),t.bypassAuthState)}async function sk(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),MP(n,new md(t),t.bypassAuthState)}/**
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
 */class xE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nk;case"linkViaPopup":case"linkViaRedirect":return sk;case"reauthViaPopup":case"reauthViaRedirect":return rk;default:Vn(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ik=new ia(2e3,1e4);async function ok(t,e,n){const r=Pc(t);eP(t,e,dd);const s=DE(r,n);return new Yr(r,"signInViaPopup",e,s).executeNotNull()}class Yr extends xE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ik.get())};e()}}Yr.currentPopupAction=null;/**
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
 */const ak="pendingRedirect",al=new Map;class lk extends xE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await ck(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ck(t,e){const n=fk(e),r=hk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uk(t,e){al.set(t._key(),e)}function hk(t){return er(t._redirectPersistence)}function fk(t){return ol(ak,t.config.apiKey,t.name)}async function dk(t,e,n=!1){const r=Pc(t),s=DE(r,e),o=await new lk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const pk=10*60*1e3;class mk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ME(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pk&&this.cachedEventUids.clear(),this.cachedEventUids.has(cg(e))}saveEventToCache(e){this.cachedEventUids.add(cg(e)),this.lastProcessedEventTime=Date.now()}}function cg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ME({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ME(t);default:return!1}}/**
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
 */async function _k(t,e={}){return oa(t,"GET","/v1/projects",e)}/**
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
 */const yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vk=/^https?/;async function Ek(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _k(t);for(const n of e)try{if(wk(n))return}catch{}Vn(t,"unauthorized-domain")}function wk(t){const e=bh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vk.test(n))return!1;if(yk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Tk=new ia(3e4,6e4);function ug(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ik(t){return new Promise((e,n)=>{var r,s,i;function o(){ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ug(),n(On(t,"network-request-failed"))},timeout:Tk.get()})}if(!((s=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Dn().gapi)===null||i===void 0)&&i.load)o();else{const a=SP("iframefcb");return Dn()[a]=()=>{gapi.load?o():n(On(t,"network-request-failed"))},RP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ll=null,e})}let ll=null;function bk(t){return ll=ll||Ik(t),ll}/**
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
 */const Ak=new ia(5e3,15e3),Ck="__/auth/iframe",Rk="emulator/auth/iframe",Sk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kk(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ud(e,Rk):`https://${t.config.authDomain}/${Ck}`,r={apiKey:e.apiKey,appName:t.name,v:Fr},s=Pk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ki(r).slice(1)}`}async function Nk(t){const e=await bk(t),n=Dn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:kk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),a=Dn().setTimeout(()=>{i(o)},Ak.get());function l(){Dn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Ok={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dk=500,xk=600,Mk="_blank",Lk="http://localhost";class hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $k(t,e,n,r=Dk,s=xk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ok),{width:r.toString(),height:s.toString(),top:i,left:o}),c=At().toLowerCase();n&&(a=pE(c)?Mk:n),dE(c)&&(e=e||Lk,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,g])=>`${f}${d}=${g},`,"");if(yP(c)&&a!=="_self")return Vk(e||"",a),new hg(null);const h=window.open(e||"",a,u);oe(h,t,"popup-blocked");try{h.focus()}catch{}return new hg(h)}function Vk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Fk="__/auth/handler",Uk="emulator/auth/handler",jk=encodeURIComponent("fac");async function fg(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fr,eventId:s};if(e instanceof dd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof aa){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${jk}=${encodeURIComponent(l)}`:"";return`${Bk(t)}?${ki(a).slice(1)}${c}`}function Bk({config:t}){return t.emulator?ud(t,Uk):`https://${t.authDomain}/${Fk}`}/**
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
 */const Cu="webStorageSupport";class Wk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=SE,this._completeRedirectFn=dk,this._overrideRedirectResult=uk}async _openPopup(e,n,r,s){var i;ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await fg(e,n,r,bh(),s);return $k(e,o,pd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await fg(e,n,r,bh(),s);return qP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Nk(e),r=new mk(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cu,{type:Cu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Cu];o!==void 0&&n(!!o),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ek(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vE()||fd()||Sc()}}const zk=Wk;var dg="@firebase/auth",pg="1.3.0";/**
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
 */class Hk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Kk(t){$n(new mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:EE(t)},c=new AP(r,s,i,l);return kP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new mn("auth-internal",e=>{const n=Pc(e.getProvider("auth").getImmediate());return(r=>new Hk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(dg,pg,qk(t)),Wt(dg,pg,"esm2017")}/**
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
 */const Gk=5*60,Qk=Gv("authIdTokenMaxAge")||Gk;let mg=null;const Yk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Qk)return;const s=n==null?void 0:n.token;mg!==s&&(mg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function LE(t=ad()){const e=od(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PP(t,{popupRedirectResolver:zk,persistence:[tk,WP,SE]}),r=Gv("authTokenSyncURL");if(r){const i=Yk(r);VP(n,i,()=>i(n.currentUser)),bE(n,o=>i(o))}const s=qv("auth");return s&&NP(n,`http://${s}`),n}Kk("Browser");/**
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
 */const Xk=new Map,Jk={activated:!1,tokenObservers:[]};function gn(t){return Xk.get(t)||Object.assign({},Jk)}const gg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class Zk{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Mo,await eN(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Mo,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function eN(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const tN={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ml=new Pi("appCheck","AppCheck",tN);function $E(t){if(!gn(t).activated)throw Ml.create("use-before-activation",{appName:t.name})}/**
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
 */const nN="firebase-app-check-database",rN=1,Ch="firebase-app-check-store";let ja=null;function sN(){return ja||(ja=new Promise((t,e)=>{try{const n=indexedDB.open(nN,rN);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Ml.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Ch,{keyPath:"compositeKey"})}}}catch(n){e(Ml.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ja)}function iN(t,e){return oN(aN(t),e)}async function oN(t,e){const r=(await sN()).transaction(Ch,"readwrite"),i=r.objectStore(Ch).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Ml.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function aN(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Rh=new sa("@firebase/app-check");function _g(t,e){return Xv()?iN(t,e).catch(n=>{Rh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const lN={error:"UNKNOWN_ERROR"};function cN(t){return Cc.encodeString(JSON.stringify(t),!1)}async function Sh(t,e=!1){const n=t.app;$E(n);const r=gn(n);let s=r.token,i;if(s&&!Ji(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(Ji(l)?s=l:await _g(n,void 0))}if(!e&&s&&Ji(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await gn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Rh.warn(l.message):Rh.error(l),i=l}let a;return s?i?Ji(s)?a={token:s.token,internalError:i}:a=vg(i):(a={token:s.token},r.token=s,await _g(n,s)):a=vg(i),o&&dN(n,a),a}async function uN(t){const e=t.app;$E(e);const{provider:n}=gn(e);{const{token:r}=await n.getToken();return{token:r}}}function hN(t,e,n,r){const{app:s}=t,i=gn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Ji(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),yg(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>yg(t))}function VE(t,e){const n=gn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function yg(t){const{app:e}=t,n=gn(e);let r=n.tokenRefresher;r||(r=fN(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function fN(t){const{app:e}=t;return new Zk(async()=>{const n=gn(e);let r;if(n.token?r=await Sh(t,!0):r=await Sh(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=gn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},gg.RETRIAL_MIN_WAIT,gg.RETRIAL_MAX_WAIT)}function dN(t,e){const n=gn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Ji(t){return t.expireTimeMillis-Date.now()>0}function vg(t){return{token:cN(lN),error:t}}/**
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
 */class pN{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=gn(this.app);for(const n of e)VE(this.app,n.next);return Promise.resolve()}}function mN(t,e){return new pN(t,e)}function gN(t){return{getToken:e=>Sh(t,e),getLimitedUseToken:()=>uN(t),addTokenListener:e=>hN(t,"INTERNAL",e),removeTokenListener:e=>VE(t.app,e)}}const _N="@firebase/app-check",yN="0.8.0",vN="app-check",Eg="app-check-internal";function EN(){$n(new mn(vN,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return mN(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Eg).initialize()})),$n(new mn(Eg,t=>{const e=t.getProvider("app-check").getImmediate();return gN(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Wt(_N,yN)}EN();var wN="firebase",TN="10.4.0";/**
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
 */Wt(wN,TN,"app");const FE=Symbol("firebaseApp");function ca(t){return No()&&$t(FE,null)||ad(t)}const Rn=()=>{},IN=typeof window<"u";function gd(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function bN(t,e,n){const r=(""+e).split("."),s=r.pop(),i=r.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(s),1,n):i[s]=n}function Es(t){return!!t&&typeof t=="object"}const AN=Object.prototype;function CN(t){return Es(t)&&Object.getPrototypeOf(t)===AN}function _d(t){return Es(t)&&t.type==="document"}function RN(t){return Es(t)&&t.type==="collection"}function SN(t){return _d(t)||RN(t)}function PN(t){return Es(t)&&t.type==="query"}function kN(t){return Es(t)&&"ref"in t}function NN(t){return Es(t)&&typeof t.bucket=="string"}function ON(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const DN=Symbol.for("v-scx");function xN(){return!!$t(DN,0)}const Ba=new WeakMap;function MN(t,e){if(!Ba.has(t)){const n=Uy(!0);Ba.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Ba.delete(t)}}return Ba.get(t)}const UE=new WeakMap;function jE(t){return UE.get(ca(t))}const Wa=new WeakMap;function LN(t){const e=ca(t);if(!Wa.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{Wa.set(e,i),n(i.value)}];Wa.set(e,s)}return Wa.get(e)}function $N(t,e){const n=LE(e);bE(n,r=>{const s=LN();t.value=r,Array.isArray(s)&&s[1](t)})}const wg="@firebase/database",Tg="1.0.1";/**
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
 */let BE="";function VN(t){BE=t}/**
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
 */class FN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Lo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class UN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const WE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new FN(e)}}catch{}return new UN},Xr=WE("localStorage"),Ph=WE("sessionStorage");/**
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
 */const Gs=new sa("@firebase/database"),jN=function(){let t=1;return function(){return t++}}(),zE=function(t){const e=qR(t),n=new jR;n.update(e);const r=n.digest();return Cc.encodeByteArray(r)},ua=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ua.apply(null,r):typeof r=="object"?e+=ct(r):e+=r,e+=" "}return e};let ss=null,Ig=!0;const BN=function(t,e){F(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Gs.logLevel=de.VERBOSE,ss=Gs.log.bind(Gs),e&&Ph.set("logging_enabled",!0)):typeof t=="function"?ss=t:(ss=null,Ph.remove("logging_enabled"))},gt=function(...t){if(Ig===!0&&(Ig=!1,ss===null&&Ph.get("logging_enabled")===!0&&BN(!0)),ss){const e=ua.apply(null,t);ss(e)}},ha=function(t){return function(...e){gt(t,...e)}},kh=function(...t){const e="FIREBASE INTERNAL ERROR: "+ua(...t);Gs.error(e)},us=function(...t){const e=`FIREBASE FATAL ERROR: ${ua(...t)}`;throw Gs.error(e),new Error(e)},zt=function(...t){const e="FIREBASE WARNING: "+ua(...t);Gs.warn(e)},WN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&zt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},HE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},zN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hi="[MIN_NAME]",hs="[MAX_NAME]",Ni=function(t,e){if(t===e)return 0;if(t===hi||e===hs)return-1;if(e===hi||t===hs)return 1;{const n=bg(t),r=bg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},HN=function(t,e){return t===e?0:t<e?-1:1},Wi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ct(e))},yd=function(t){if(typeof t!="object"||t===null)return ct(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ct(e[r]),n+=":",n+=yd(t[e[r]]);return n+="}",n},qE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Jt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const KE=function(t){F(!HE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},qN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},KN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},GN=new RegExp("^-?(0*)\\d{1,10}$"),QN=-2147483648,YN=2147483647,bg=function(t){if(GN.test(t)){const e=Number(t);if(e>=QN&&e<=YN)return e}return null},fa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw zt("Exception was thrown by user callback.",n),e},Math.floor(0))}},XN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class JN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){zt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ZN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',zt(e)}}class Nh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Nh.OWNER="owner";/**
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
 */const vd="5",GE="v",QE="s",YE="r",XE="f",JE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ZE="ls",ew="p",Oh="ac",tw="websocket",nw="long_polling";/**
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
 */class eO{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function tO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function rw(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let r;if(e===tw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===nw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);tO(t)&&(n.ns=t.namespace);const s=[];return Jt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class nO{constructor(){this.counters_={}}incrementCounter(e,n=1){pr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return AR(this.counters_)}}/**
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
 */const Ru={},Su={};function Ed(t){const e=t.toString();return Ru[e]||(Ru[e]=new nO),Ru[e]}function rO(t,e){const n=t.toString();return Su[n]||(Su[n]=e()),Su[n]}/**
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
 */class sO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&fa(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ag="start",iO="close",oO="pLPCommand",aO="pRTLPCB",sw="id",iw="pw",ow="ser",lO="cb",cO="seg",uO="ts",hO="d",fO="dframe",aw=1870,lw=30,dO=aw-lw,pO=25e3,mO=3e4;class Fs{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ha(e),this.stats_=Ed(n),this.urlFn=l=>(this.appCheckToken&&(l[Oh]=this.appCheckToken),rw(n,nw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(mO)),zN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wd((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ag)this.id=a,this.password=l;else if(o===iO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ag]="t",r[ow]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[lO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[GE]=vd,this.transportSessionId&&(r[QE]=this.transportSessionId),this.lastSessionId&&(r[ZE]=this.lastSessionId),this.applicationId&&(r[ew]=this.applicationId),this.appCheckToken&&(r[Oh]=this.appCheckToken),typeof location<"u"&&location.hostname&&JE.test(location.hostname)&&(r[YE]=XE);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fs.forceAllow_=!0}static forceDisallow(){Fs.forceDisallow_=!0}static isAvailable(){return Fs.forceAllow_?!0:!Fs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qN()&&!KN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=zv(n),s=qE(r,dO);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[fO]="t",r[sw]=e,r[iw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ct(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wd{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jN(),window[oO+this.uniqueCallbackIdentifier]=e,window[aO+this.uniqueCallbackIdentifier]=n,this.myIFrame=wd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){gt("frame writing exception"),a.stack&&gt(a.stack),gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sw]=this.myID,e[iw]=this.myPW,e[ow]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lw+r.length<=aw;){const o=this.pendingSegs.shift();r=r+"&"+cO+s+"="+o.seg+"&"+uO+s+"="+o.ts+"&"+hO+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(pO)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const gO=16384,_O=45e3;let Ll=null;typeof MozWebSocket<"u"?Ll=MozWebSocket:typeof WebSocket<"u"&&(Ll=WebSocket);class rn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ha(this.connId),this.stats_=Ed(n),this.connURL=rn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[GE]=vd,typeof location<"u"&&location.hostname&&JE.test(location.hostname)&&(o[YE]=XE),n&&(o[QE]=n),r&&(o[ZE]=r),s&&(o[Oh]=s),i&&(o[ew]=i),rw(e,tw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xr.set("previous_websocket_failure",!0);try{let r;Yv(),this.mySock=new Ll(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){rn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ll!==null&&!rn.forceDisallow_}static previouslyFailed(){return Xr.isInMemoryStorage||Xr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Lo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=qE(n,gO);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(_O))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rn.responsesRequiredToBeHealthy=2;rn.healthyTimeout=3e4;/**
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
 */class Uo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fs,rn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rn&&rn.isAvailable();let r=n&&!rn.previouslyFailed();if(e.webSocketOnly&&(n||zt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rn];else{const s=this.transports_=[];for(const i of Uo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Uo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Uo.globalTransportInitialized_=!1;/**
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
 */const yO=6e4,vO=5e3,EO=10*1024,wO=100*1024,Pu="t",Cg="d",TO="s",Rg="r",IO="e",Sg="o",Pg="a",kg="n",Ng="p",bO="h";class AO{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ha("c:"+this.id+":"),this.transportManager_=new Uo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=mo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>EO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pu in e){const n=e[Pu];n===Pg?this.upgradeIfSecondaryHealthy_():n===Rg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wi("t",e),r=Wi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ng,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wi("t",e),r=Wi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wi(Pu,e);if(Cg in e){const r=e[Cg];if(n===bO){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===kg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===TO?this.onConnectionShutdown_(r):n===Rg?this.onReset_(r):n===IO?kh("Server Error: "+r):n===Sg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vd!==r&&zt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),mo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(vO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ng,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class cw{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class uw{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class $l extends uw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $l}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Og=32,Dg=768;class Le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ke(){return new Le("")}function _e(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mr(t){return t.pieces_.length-t.pieceNum_}function De(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Le(t.pieces_,e)}function hw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function CO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function dw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Le(e,0)}function tt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Le)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Le(n,0)}function pe(t){return t.pieceNum_>=t.pieces_.length}function Qt(t,e){const n=_e(t),r=_e(e);if(n===null)return e;if(n===r)return Qt(De(t),De(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function pw(t,e){if(Mr(t)!==Mr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function on(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mr(t)>Mr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class RO{constructor(e,n){this.errorPrefix_=n,this.parts_=fw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Rc(this.parts_[r]);mw(this)}}function SO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Rc(e),mw(t)}function PO(t){const e=t.parts_.pop();t.byteLength_-=Rc(e),t.parts_.length>0&&(t.byteLength_-=1)}function mw(t){if(t.byteLength_>Dg)throw new Error(t.errorPrefix_+"has a key path longer than "+Dg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Og)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Og+") or object contains a cycle "+Kr(t))}function Kr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Td extends uw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Td}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const zi=1e3,kO=60*5*1e3,xg=30*1e3,NO=1.3,OO=3e4,DO="server_kill",Mg=3;class rr extends cw{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=rr.nextPersistentConnectionId_++,this.log_=ha("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zi,this.maxReconnectDelay_=kO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Yv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Td.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$l.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(ct(i)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Mo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;rr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pr(e,"w")){const r=ci(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();zt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||UR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=FR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kh("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>OO&&(this.reconnectDelay_=zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+rr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new AO(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{zt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(DO)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&zt(h),l())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yh(this.interruptReasons_)&&(this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>yd(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Le(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mg&&(this.reconnectDelay_=xg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+BE.replace(/\./g,"-")]=1,sd()?e["framework.cordova"]=1:Qv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$l.getInstance().currentlyOnline();return yh(this.interruptReasons_)&&e}}rr.nextPersistentConnectionId_=0;rr.nextConnectionId_=0;/**
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
 */class ye{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ye(e,n)}}/**
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
 */class Oc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ye(hi,e),s=new ye(hi,n);return this.compare(r,s)!==0}minPost(){return ye.MIN}}/**
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
 */let za;class gw extends Oc{static get __EMPTY_NODE(){return za}static set __EMPTY_NODE(e){za=e}compare(e,n){return Ni(e.name,n.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ye.MIN}maxPost(){return new ye(hs,za)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new ye(e,za)}toString(){return".key"}}const Qs=new gw;/**
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
 */let Ha=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Bt=class Zi{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Zi.RED,this.left=s??Sn.EMPTY_NODE,this.right=i??Sn.EMPTY_NODE}copy(e,n,r,s,i){return new Zi(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Sn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Sn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Zi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Zi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Bt.RED=!0;Bt.BLACK=!1;class xO{copy(e,n,r,s,i){return this}insert(e,n,r){return new Bt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Sn=class cl{constructor(e,n=cl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new cl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new cl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ha(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ha(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ha(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ha(this.root_,null,this.comparator_,!0,e)}};Sn.EMPTY_NODE=new xO;/**
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
 */function MO(t,e){return Ni(t.name,e.name)}function Id(t,e){return Ni(t,e)}/**
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
 */let Dh;function LO(t){Dh=t}const _w=function(t){return typeof t=="number"?"number:"+KE(t):"string:"+t},yw=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pr(e,".sv"),"Priority must be a string or number.")}else F(t===Dh||t.isEmpty(),"priority of unexpected type.");F(t===Dh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Lg;class Je{constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yw(this.priorityNode_)}static set __childrenNodeConstructor(e){Lg=e}static get __childrenNodeConstructor(){return Lg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pe(e)?this:_e(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=_e(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(F(r!==".priority"||Mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_w(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=KE(this.value_):e+=this.value_,this.lazyHash_=zE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Je.VALUE_TYPE_ORDER.indexOf(n),i=Je.VALUE_TYPE_ORDER.indexOf(r);return F(s>=0,"Unknown leaf type: "+n),F(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let vw,Ew;function $O(t){vw=t}function VO(t){Ew=t}class FO extends Oc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Ni(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ye.MIN}maxPost(){return new ye(hs,new Je("[PRIORITY-POST]",Ew))}makePost(e,n){const r=vw(e);return new ye(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const wt=new FO;/**
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
 */const UO=Math.log(2);class jO{constructor(e){const n=i=>parseInt(Math.log(i)/UO,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vl=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Bt(f,h.node,Bt.BLACK,null,null);{const d=parseInt(u/2,10)+l,g=s(l,d),p=s(d+1,c);return h=t[d],f=n?n(h):h,new Bt(f,h.node,Bt.BLACK,g,p)}},i=function(l){let c=null,u=null,h=t.length;const f=function(g,p){const _=h-g,v=h;h-=g;const T=s(_+1,v),A=t[_],E=n?n(A):A;d(new Bt(E,A.node,p,null,T))},d=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const p=l.nextBitIsOne(),_=Math.pow(2,l.count-(g+1));p?f(_,Bt.BLACK):(f(_,Bt.BLACK),f(_,Bt.RED))}return u},o=new jO(t.length),a=i(o);return new Sn(r||e,a)};/**
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
 */let ku;const ks={};class tr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return F(ks&&wt,"ChildrenNode.ts has not been loaded"),ku=ku||new tr({".priority":ks},{".priority":wt}),ku}get(e){const n=ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Sn?n:null}hasIndex(e){return pr(this.indexSet_,e.toString())}addIndex(e,n){F(e!==Qs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(ye.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Vl(r,e.getCompare()):a=ks;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new tr(u,c)}addToIndexes(e,n){const r=Rl(this.indexes_,(s,i)=>{const o=ci(this.indexSet_,i);if(F(o,"Missing index implementation for "+i),s===ks)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ye.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Vl(a,o.getCompare())}else return ks;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new ye(e.name,a))),l.insert(e,e.node)}});return new tr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Rl(this.indexes_,s=>{if(s===ks)return s;{const i=n.get(e.name);return i?s.remove(new ye(e.name,i)):s}});return new tr(r,this.indexSet_)}}/**
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
 */let Hi;class Ce{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&yw(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Hi||(Hi=new Ce(new Sn(Id),null,tr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hi}updatePriority(e){return this.children_.isEmpty()?this:new Ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hi:n}}getChild(e){const n=_e(e);return n===null?this:this.getImmediateChild(n).getChild(De(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ye(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Hi:this.priorityNode_;return new Ce(s,o,i)}}updateChild(e,n){const r=_e(e);if(r===null)return n;{F(_e(e)!==".priority"||Mr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(De(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(wt,(o,a)=>{n[o]=a.val(e),r++,i&&Ce.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_w(this.getPriority().val())+":"),this.forEachChild(wt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":zE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ye(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ye(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ye(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ye.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ye.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===da?-1:0}withIndex(e){if(e===Qs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Qs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(wt),s=n.getIterator(wt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qs?null:this.indexMap_.get(e.toString())}}Ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BO extends Ce{constructor(){super(new Sn(Id),Ce.EMPTY_NODE,tr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ce.EMPTY_NODE}isEmpty(){return!1}}const da=new BO;Object.defineProperties(ye,{MIN:{value:new ye(hi,Ce.EMPTY_NODE)},MAX:{value:new ye(hs,da)}});gw.__EMPTY_NODE=Ce.EMPTY_NODE;Je.__childrenNodeConstructor=Ce;LO(da);VO(da);/**
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
 */const WO=!0;function _t(t,e=null){if(t===null)return Ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,_t(e))}if(!(t instanceof Array)&&WO){const n=[];let r=!1;if(Jt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=_t(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ye(o,l)))}}),n.length===0)return Ce.EMPTY_NODE;const i=Vl(n,MO,o=>o.name,Id);if(r){const o=Vl(n,wt.getCompare());return new Ce(i,_t(e),new tr({".priority":o},{".priority":wt}))}else return new Ce(i,_t(e),tr.Default)}else{let n=Ce.EMPTY_NODE;return Jt(t,(r,s)=>{if(pr(t,r)&&r.substring(0,1)!=="."){const i=_t(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(_t(e))}}$O(_t);/**
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
 */class zO extends Oc{constructor(e){super(),this.indexPath_=e,F(!pe(e)&&_e(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Ni(e.name,n.name):i}makePost(e,n){const r=_t(e),s=Ce.EMPTY_NODE.updateChild(this.indexPath_,r);return new ye(n,s)}maxPost(){const e=Ce.EMPTY_NODE.updateChild(this.indexPath_,da);return new ye(hs,e)}toString(){return fw(this.indexPath_,0).join("/")}}/**
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
 */class HO extends Oc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ni(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ye.MIN}maxPost(){return ye.MAX}makePost(e,n){const r=_t(e);return new ye(n,r)}toString(){return".value"}}const qO=new HO;/**
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
 */function KO(t){return{type:"value",snapshotNode:t}}function GO(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function QO(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function $g(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function YO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class bd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=wt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hi}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===wt}copy(){const e=new bd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Vg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===wt?n="$priority":t.index_===qO?n="$value":t.index_===Qs?n="$key":(F(t.index_ instanceof zO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ct(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ct(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ct(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ct(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ct(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==wt&&(e.i=t.index_.toString()),e}/**
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
 */class Fl extends cw{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=ha("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Fl.getListenId_(e,r),a={};this.listens_[o]=a;const l=Vg(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),ci(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=Fl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Vg(e._queryParams),r=e._path.toString(),s=new Mo;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ki(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Lo(a.responseText)}catch{zt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&zt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class XO{constructor(){this.rootNode_=Ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ul(){return{value:null,children:new Map}}function ww(t,e,n){if(pe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=_e(e);t.children.has(r)||t.children.set(r,Ul());const s=t.children.get(r);e=De(e),ww(s,e,n)}}function xh(t,e,n){t.value!==null?n(e,t.value):JO(t,(r,s)=>{const i=new Le(e.toString()+"/"+r);xh(s,i,n)})}function JO(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class ZO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Jt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const Ug=10*1e3,e1=30*1e3,t1=5*60*1e3;class n1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ZO(e);const r=Ug+(e1-Ug)*Math.random();mo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Jt(e,(s,i)=>{i>0&&pr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),mo(this.reportStats_.bind(this),Math.floor(Math.random()*2*t1))}}/**
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
 */var Pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pn||(Pn={}));function Tw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Iw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class jl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Pn.ACK_USER_WRITE,this.source=Tw()}operationForChild(e){if(pe(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Le(e));return new jl(ke(),n,this.revert)}}else return F(_e(this.path)===e,"operationForChild called for unrelated child."),new jl(De(this.path),this.affectedTree,this.revert)}}/**
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
 */class fs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Pn.OVERWRITE}operationForChild(e){return pe(this.path)?new fs(this.source,ke(),this.snap.getImmediateChild(e)):new fs(this.source,De(this.path),this.snap)}}/**
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
 */class jo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Pn.MERGE}operationForChild(e){if(pe(this.path)){const n=this.children.subtree(new Le(e));return n.isEmpty()?null:n.value?new fs(this.source,ke(),n.value):new jo(this.source,ke(),n)}else return F(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jo(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ad{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pe(e))return this.isFullyInitialized()&&!this.filtered_;const n=_e(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function r1(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(YO(o.childName,o.snapshotNode))}),qi(t,s,"child_removed",e,r,n),qi(t,s,"child_added",e,r,n),qi(t,s,"child_moved",i,r,n),qi(t,s,"child_changed",e,r,n),qi(t,s,"value",e,r,n),s}function qi(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>i1(t,a,l)),o.forEach(a=>{const l=s1(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function s1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function i1(t,e,n){if(e.childName==null||n.childName==null)throw Si("Should only compare child_ events.");const r=new ye(e.childName,e.snapshotNode),s=new ye(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function Aw(t,e){return{eventCache:t,serverCache:e}}function go(t,e,n,r){return Aw(new Ad(e,n,r),t.serverCache)}function Cw(t,e,n,r){return Aw(t.eventCache,new Ad(e,n,r))}function Mh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ds(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Nu;const o1=()=>(Nu||(Nu=new Sn(HN)),Nu);class Oe{constructor(e,n=o1()){this.value=e,this.children=n}static fromObject(e){let n=new Oe(null);return Jt(e,(r,s)=>{n=n.set(new Le(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ke(),value:this.value};if(pe(e))return null;{const r=_e(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(De(e),n);return i!=null?{path:tt(new Le(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pe(e))return this;{const n=_e(e),r=this.children.get(n);return r!==null?r.subtree(De(e)):new Oe(null)}}set(e,n){if(pe(e))return new Oe(n,this.children);{const r=_e(e),i=(this.children.get(r)||new Oe(null)).set(De(e),n),o=this.children.insert(r,i);return new Oe(this.value,o)}}remove(e){if(pe(e))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const n=_e(e),r=this.children.get(n);if(r){const s=r.remove(De(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Oe(null):new Oe(this.value,i)}else return this}}get(e){if(pe(e))return this.value;{const n=_e(e),r=this.children.get(n);return r?r.get(De(e)):null}}setTree(e,n){if(pe(e))return n;{const r=_e(e),i=(this.children.get(r)||new Oe(null)).setTree(De(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Oe(this.value,o)}}fold(e){return this.fold_(ke(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(tt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ke(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(pe(e))return null;{const i=_e(e),o=this.children.get(i);return o?o.findOnPath_(De(e),tt(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ke(),n)}foreachOnPath_(e,n,r){if(pe(e))return this;{this.value&&r(n,this.value);const s=_e(e),i=this.children.get(s);return i?i.foreachOnPath_(De(e),tt(n,s),r):new Oe(null)}}foreach(e){this.foreach_(ke(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(tt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class dn{constructor(e){this.writeTree_=e}static empty(){return new dn(new Oe(null))}}function _o(t,e,n){if(pe(e))return new dn(new Oe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Qt(s,e);return i=i.updateChild(o,n),new dn(t.writeTree_.set(s,i))}else{const s=new Oe(n),i=t.writeTree_.setTree(e,s);return new dn(i)}}}function jg(t,e,n){let r=t;return Jt(n,(s,i)=>{r=_o(r,tt(e,s),i)}),r}function Bg(t,e){if(pe(e))return dn.empty();{const n=t.writeTree_.setTree(e,new Oe(null));return new dn(n)}}function Lh(t,e){return ws(t,e)!=null}function ws(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qt(n.path,e)):null}function Wg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(wt,(r,s)=>{e.push(new ye(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ye(r,s.value))}),e}function Nr(t,e){if(pe(e))return t;{const n=ws(t,e);return n!=null?new dn(new Oe(n)):new dn(t.writeTree_.subtree(e))}}function $h(t){return t.writeTree_.isEmpty()}function fi(t,e){return Rw(ke(),t.writeTree_,e)}function Rw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(F(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Rw(tt(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(tt(t,".priority"),r)),n}}/**
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
 */function Sw(t,e){return Dw(e,t)}function a1(t,e,n,r,s){F(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=_o(t.visibleWrites,e,n)),t.lastWriteId=r}function l1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function c1(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&u1(a,r.path)?s=!1:on(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return h1(t),!0;if(r.snap)t.visibleWrites=Bg(t.visibleWrites,r.path);else{const a=r.children;Jt(a,l=>{t.visibleWrites=Bg(t.visibleWrites,tt(r.path,l))})}return!0}else return!1}function u1(t,e){if(t.snap)return on(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&on(tt(t.path,n),e))return!0;return!1}function h1(t){t.visibleWrites=Pw(t.allWrites,f1,ke()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function f1(t){return t.visible}function Pw(t,e,n){let r=dn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)on(n,o)?(a=Qt(n,o),r=_o(r,a,i.snap)):on(o,n)&&(a=Qt(o,n),r=_o(r,ke(),i.snap.getChild(a)));else if(i.children){if(on(n,o))a=Qt(n,o),r=jg(r,a,i.children);else if(on(o,n))if(a=Qt(o,n),pe(a))r=jg(r,ke(),i.children);else{const l=ci(i.children,_e(a));if(l){const c=l.getChild(De(a));r=_o(r,ke(),c)}}}else throw Si("WriteRecord should have .snap or .children")}}return r}function kw(t,e,n,r,s){if(!r&&!s){const i=ws(t.visibleWrites,e);if(i!=null)return i;{const o=Nr(t.visibleWrites,e);if($h(o))return n;if(n==null&&!Lh(o,ke()))return null;{const a=n||Ce.EMPTY_NODE;return fi(o,a)}}}else{const i=Nr(t.visibleWrites,e);if(!s&&$h(i))return n;if(!s&&n==null&&!Lh(i,ke()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(on(c.path,e)||on(e,c.path))},a=Pw(t.allWrites,o,e),l=n||Ce.EMPTY_NODE;return fi(a,l)}}}function d1(t,e,n){let r=Ce.EMPTY_NODE;const s=ws(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(wt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Nr(t.visibleWrites,e);return n.forEachChild(wt,(o,a)=>{const l=fi(Nr(i,new Le(o)),a);r=r.updateImmediateChild(o,l)}),Wg(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Nr(t.visibleWrites,e);return Wg(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function p1(t,e,n,r,s){F(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=tt(e,n);if(Lh(t.visibleWrites,i))return null;{const o=Nr(t.visibleWrites,i);return $h(o)?s.getChild(n):fi(o,s.getChild(n))}}function m1(t,e,n,r){const s=tt(e,n),i=ws(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Nr(t.visibleWrites,s);return fi(o,r.getNode().getImmediateChild(n))}else return null}function g1(t,e){return ws(t.visibleWrites,e)}function _1(t,e,n,r,s,i,o){let a;const l=Nr(t.visibleWrites,e),c=ws(l,ke());if(c!=null)a=c;else if(n!=null)a=fi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<s;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function y1(){return{visibleWrites:dn.empty(),allWrites:[],lastWriteId:-1}}function Vh(t,e,n,r){return kw(t.writeTree,t.treePath,e,n,r)}function Nw(t,e){return d1(t.writeTree,t.treePath,e)}function zg(t,e,n,r){return p1(t.writeTree,t.treePath,e,n,r)}function Bl(t,e){return g1(t.writeTree,tt(t.treePath,e))}function v1(t,e,n,r,s,i){return _1(t.writeTree,t.treePath,e,n,r,s,i)}function Cd(t,e,n){return m1(t.writeTree,t.treePath,e,n)}function Ow(t,e){return Dw(tt(t.treePath,e),t.writeTree)}function Dw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class E1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,$g(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,QO(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,GO(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,$g(r,e.snapshotNode,s.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class w1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const xw=new w1;class Rd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ad(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ds(this.viewCache_),i=v1(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function T1(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function I1(t,e,n,r,s){const i=new E1;let o,a;if(n.type===Pn.OVERWRITE){const c=n;c.source.fromUser?o=Fh(t,e,c.path,c.snap,r,s,i):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!pe(c.path),o=Wl(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Pn.MERGE){const c=n;c.source.fromUser?o=A1(t,e,c.path,c.children,r,s,i):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Uh(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Pn.ACK_USER_WRITE){const c=n;c.revert?o=S1(t,e,c.path,r,s,i):o=C1(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Pn.LISTEN_COMPLETE)o=R1(t,e,n.path,r,i);else throw Si("Unknown operation type: "+n.type);const l=i.getChanges();return b1(e,o,l),{viewCache:o,changes:l}}function b1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Mh(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(KO(Mh(e)))}}function Mw(t,e,n,r,s,i){const o=e.eventCache;if(Bl(r,n)!=null)return e;{let a,l;if(pe(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ds(e),u=c instanceof Ce?c:Ce.EMPTY_NODE,h=Nw(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=Vh(r,ds(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=_e(n);if(c===".priority"){F(Mr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=zg(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=De(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=zg(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Cd(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return go(e,a,o.isFullyInitialized()||pe(n),t.filter.filtersNodes())}}function Wl(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(pe(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=_e(n);if(!l.isCompleteForPath(n)&&Mr(n)>1)return e;const g=De(n),_=l.getNode().getImmediateChild(d).updateChild(g,r);d===".priority"?c=u.updatePriority(l.getNode(),_):c=u.updateChild(l.getNode(),d,_,g,xw,null)}const h=Cw(e,c,l.isFullyInitialized()||pe(n),u.filtersNodes()),f=new Rd(s,h,i);return Mw(t,h,n,s,f,a)}function Fh(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new Rd(s,e,i);if(pe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=go(e,c,!0,t.filter.filtersNodes());else{const h=_e(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=go(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=De(n),d=a.getNode().getImmediateChild(h);let g;if(pe(f))g=r;else{const p=u.getCompleteChild(h);p!=null?hw(f)===".priority"&&p.getChild(dw(f)).isEmpty()?g=p:g=p.updateChild(f,r):g=Ce.EMPTY_NODE}if(d.equals(g))l=e;else{const p=t.filter.updateChild(a.getNode(),h,g,f,u,o);l=go(e,p,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Hg(t,e){return t.eventCache.isCompleteForChild(e)}function A1(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=tt(n,l);Hg(e,_e(u))&&(a=Fh(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=tt(n,l);Hg(e,_e(u))||(a=Fh(t,a,u,c,s,i,o))}),a}function qg(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Uh(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;pe(n)?c=r:c=new Oe(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),g=qg(t,d,f);l=Wl(t,l,new Le(h),g,s,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const g=e.serverCache.getNode().getImmediateChild(h),p=qg(t,g,f);l=Wl(t,l,new Le(h),p,s,i,o,a)}}),l}function C1(t,e,n,r,s,i,o){if(Bl(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(pe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Wl(t,e,n,l.getNode().getChild(n),s,i,a,o);if(pe(n)){let c=new Oe(null);return l.getNode().forEachChild(Qs,(u,h)=>{c=c.set(new Le(u),h)}),Uh(t,e,n,c,s,i,a,o)}else return e}else{let c=new Oe(null);return r.foreach((u,h)=>{const f=tt(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Uh(t,e,n,c,s,i,a,o)}}function R1(t,e,n,r,s){const i=e.serverCache,o=Cw(e,i.getNode(),i.isFullyInitialized()||pe(n),i.isFiltered());return Mw(t,o,n,r,xw,s)}function S1(t,e,n,r,s,i){let o;if(Bl(r,n)!=null)return e;{const a=new Rd(r,e,s),l=e.eventCache.getNode();let c;if(pe(n)||_e(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Vh(r,ds(e));else{const h=e.serverCache.getNode();F(h instanceof Ce,"serverChildren would be complete if leaf node"),u=Nw(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=_e(n);let h=Cd(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,De(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ce.EMPTY_NODE,De(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vh(r,ds(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Bl(r,ke())!=null,go(e,c,o,t.filter.filtersNodes())}}function P1(t,e){const n=ds(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!pe(e)&&!n.getImmediateChild(_e(e)).isEmpty())?n.getChild(e):null}function Kg(t,e,n,r){e.type===Pn.MERGE&&e.source.queryId!==null&&(F(ds(t.viewCache_),"We should always have a full cache before handling merges"),F(Mh(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=I1(t.processor_,s,e,n,r);return T1(t.processor_,i.viewCache),F(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,k1(t,i.changes,i.viewCache.eventCache.getNode(),null)}function k1(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return r1(t.eventGenerator_,e,n,s)}/**
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
 */let Gg;function N1(t){F(!Gg,"__referenceConstructor has already been defined"),Gg=t}function Sd(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return F(i!=null,"SyncTree gave us an op for an invalid query."),Kg(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Kg(o,e,n,r));return i}}function Pd(t,e){let n=null;for(const r of t.views.values())n=n||P1(r,e);return n}/**
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
 */let Qg;function O1(t){F(!Qg,"__referenceConstructor has already been defined"),Qg=t}class Yg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=y1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function D1(t,e,n,r,s){return a1(t.pendingWriteTree_,e,n,r,s),s?xc(t,new fs(Tw(),e,n)):[]}function Us(t,e,n=!1){const r=l1(t.pendingWriteTree_,e);if(c1(t.pendingWriteTree_,e)){let i=new Oe(null);return r.snap!=null?i=i.set(ke(),!0):Jt(r.children,o=>{i=i.set(new Le(o),!0)}),xc(t,new jl(r.path,i,n))}else return[]}function Dc(t,e,n){return xc(t,new fs(Iw(),e,n))}function x1(t,e,n){const r=Oe.fromObject(n);return xc(t,new jo(Iw(),e,r))}function M1(t,e,n,r){const s=Fw(t,r);if(s!=null){const i=Uw(s),o=i.path,a=i.queryId,l=Qt(o,e),c=new fs(bw(a),l,n);return jw(t,o,c)}else return[]}function L1(t,e,n,r){const s=Fw(t,r);if(s){const i=Uw(s),o=i.path,a=i.queryId,l=Qt(o,e),c=Oe.fromObject(n),u=new jo(bw(a),l,c);return jw(t,o,u)}else return[]}function Lw(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qt(o,e),c=Pd(a,l);if(c)return c});return kw(s,e,i,n,!0)}function xc(t,e){return $w(e,t.syncPointTree_,null,Sw(t.pendingWriteTree_,ke()))}function $w(t,e,n,r){if(pe(t.path))return Vw(t,e,n,r);{const s=e.get(ke());n==null&&s!=null&&(n=Pd(s,ke()));let i=[];const o=_e(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ow(r,o);i=i.concat($w(a,l,c,u))}return s&&(i=i.concat(Sd(s,t,r,n))),i}}function Vw(t,e,n,r){const s=e.get(ke());n==null&&s!=null&&(n=Pd(s,ke()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ow(r,o),u=t.operationForChild(o);u&&(i=i.concat(Vw(u,a,l,c)))}),s&&(i=i.concat(Sd(s,t,r,n))),i}function Fw(t,e){return t.tagToQueryMap.get(e)}function Uw(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Le(t.substr(0,e))}}function jw(t,e,n){const r=t.syncPointTree_.get(e);F(r,"Missing sync point for query tag that we're tracking");const s=Sw(t.pendingWriteTree_,e);return Sd(r,n,s,null)}/**
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
 */class kd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kd(n)}node(){return this.node_}}class Nd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=tt(this.path_,e);return new Nd(this.syncTree_,n)}node(){return Lw(this.syncTree_,this.path_)}}const $1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xg=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return V1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return F1(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},V1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},F1=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&F(!1,"Unexpected increment value: "+r);const s=e.node();if(F(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},U1=function(t,e,n,r){return Od(e,new Nd(n,t),r)},j1=function(t,e,n){return Od(t,new kd(e),n)};function Od(t,e,n){const r=t.getPriority().val(),s=Xg(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Xg(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Je(a,_t(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Je(s))),o.forEachChild(wt,(a,l)=>{const c=Od(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class Dd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function xd(t,e){let n=e instanceof Le?e:new Le(e),r=t,s=_e(n);for(;s!==null;){const i=ci(r.node.children,s)||{children:{},childCount:0};r=new Dd(s,r,i),n=De(n),s=_e(n)}return r}function Oi(t){return t.node.value}function Bw(t,e){t.node.value=e,jh(t)}function Ww(t){return t.node.childCount>0}function B1(t){return Oi(t)===void 0&&!Ww(t)}function Mc(t,e){Jt(t.node.children,(n,r)=>{e(new Dd(n,t,r))})}function zw(t,e,n,r){n&&!r&&e(t),Mc(t,s=>{zw(s,e,!0,r)}),n&&r&&e(t)}function W1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function pa(t){return new Le(t.parent===null?t.name:pa(t.parent)+"/"+t.name)}function jh(t){t.parent!==null&&z1(t.parent,t.name,t)}function z1(t,e,n){const r=B1(n),s=pr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,jh(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,jh(t))}/**
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
 */const H1=/[\[\].#$\/\u0000-\u001F\u007F]/,q1=/[\[\].#$\u0000-\u001F\u007F]/,Ou=10*1024*1024,Hw=function(t){return typeof t=="string"&&t.length!==0&&!H1.test(t)},K1=function(t){return typeof t=="string"&&t.length!==0&&!q1.test(t)},G1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),K1(t)},qw=function(t,e,n){const r=n instanceof Le?new RO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Kr(r)+" with contents = "+e.toString());if(HE(e))throw new Error(t+"contains "+e.toString()+" "+Kr(r));if(typeof e=="string"&&e.length>Ou/3&&Rc(e)>Ou)throw new Error(t+"contains a string greater than "+Ou+" utf8 bytes "+Kr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Jt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Hw(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);SO(r,o),qw(t,a,r),PO(r)}),s&&i)throw new Error(t+' contains ".value" child '+Kr(r)+" in addition to actual children.")}},Q1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!G1(n))throw new Error(HR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Y1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function X1(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!pw(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ts(t,e,n){X1(t,n),J1(t,r=>on(r,e)||on(e,r))}function J1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(Z1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Z1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ss&&gt("event: "+n.toString()),fa(r)}}}/**
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
 */const eD="repo_interrupt",tD=25;class nD{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Y1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ul(),this.transactionQueueTree_=new Dd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rD(t,e,n){if(t.stats_=Ed(t.repoInfo_),t.forceRestClient_||XN())t.server_=new Fl(t.repoInfo_,(r,s,i,o)=>{Jg(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Zg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new rr(t.repoInfo_,e,(r,s,i,o)=>{Jg(t,r,s,i,o)},r=>{Zg(t,r)},r=>{iD(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=rO(t.repoInfo_,()=>new n1(t.stats_,t.server_)),t.infoData_=new XO,t.infoSyncTree_=new Yg({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Dc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Md(t,"connected",!1),t.serverSyncTree_=new Yg({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Ts(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function sD(t){const n=t.infoData_.getNode(new Le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Kw(t){return $1({timestamp:sD(t)})}function Jg(t,e,n,r,s){t.dataUpdateCount++;const i=new Le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Rl(n,c=>_t(c));o=L1(t.serverSyncTree_,i,l,s)}else{const l=_t(n);o=M1(t.serverSyncTree_,i,l,s)}else if(r){const l=Rl(n,c=>_t(c));o=x1(t.serverSyncTree_,i,l)}else{const l=_t(n);o=Dc(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=$d(t,i)),Ts(t.eventQueue_,a,o)}function Zg(t,e){Md(t,"connected",e),e===!1&&aD(t)}function iD(t,e){Jt(e,(n,r)=>{Md(t,n,r)})}function Md(t,e,n){const r=new Le("/.info/"+e),s=_t(n);t.infoData_.updateSnapshot(r,s);const i=Dc(t.infoSyncTree_,r,s);Ts(t.eventQueue_,r,i)}function oD(t){return t.nextWriteId_++}function aD(t){Gw(t,"onDisconnectEvents");const e=Kw(t),n=Ul();xh(t.onDisconnect_,ke(),(s,i)=>{const o=U1(s,i,t.serverSyncTree_,e);ww(n,s,o)});let r=[];xh(n,ke(),(s,i)=>{r=r.concat(Dc(t.serverSyncTree_,s,i));const o=hD(t,s);$d(t,o)}),t.onDisconnect_=Ul(),Ts(t.eventQueue_,ke(),r)}function lD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(eD)}function Gw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),gt(n,...e)}function Qw(t,e,n){return Lw(t.serverSyncTree_,e,n)||Ce.EMPTY_NODE}function Ld(t,e=t.transactionQueueTree_){if(e||Lc(t,e),Oi(e)){const n=Xw(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&cD(t,pa(e),n)}else Ww(e)&&Mc(e,n=>{Ld(t,n)})}function cD(t,e,n){const r=n.map(c=>c.currentWriteId),s=Qw(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];F(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Qt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Gw(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Us(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Lc(t,xd(t.transactionQueueTree_,e)),Ld(t,t.transactionQueueTree_),Ts(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)fa(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{zt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}$d(t,e)}},o)}function $d(t,e){const n=Yw(t,e),r=pa(n),s=Xw(t,n);return uD(t,s,r),r}function uD(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Qt(n,l.path);let u=!1,h;if(F(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Us(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=tD)u=!0,h="maxretry",s=s.concat(Us(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Qw(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){qw("transaction failed: Data returned ",d,l.path);let g=_t(d);typeof d=="object"&&d!=null&&pr(d,".priority")||(g=g.updatePriority(f.getPriority()));const _=l.currentWriteId,v=Kw(t),T=j1(g,f,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=T,l.currentWriteId=oD(t),o.splice(o.indexOf(_),1),s=s.concat(D1(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),s=s.concat(Us(t.serverSyncTree_,_,!0))}else u=!0,h="nodata",s=s.concat(Us(t.serverSyncTree_,l.currentWriteId,!0))}Ts(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Lc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)fa(r[a]);Ld(t,t.transactionQueueTree_)}function Yw(t,e){let n,r=t.transactionQueueTree_;for(n=_e(e);n!==null&&Oi(r)===void 0;)r=xd(r,n),e=De(e),n=_e(e);return r}function Xw(t,e){const n=[];return Jw(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Jw(t,e,n){const r=Oi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Mc(e,s=>{Jw(t,s,n)})}function Lc(t,e){const n=Oi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,Bw(e,n.length>0?n:void 0)}Mc(e,r=>{Lc(t,r)})}function hD(t,e){const n=pa(Yw(t,e)),r=xd(t.transactionQueueTree_,e);return W1(r,s=>{Du(t,s)}),Du(t,r),zw(r,s=>{Du(t,s)}),n}function Du(t,e){const n=Oi(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Us(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Bw(e,void 0):n.length=i+1,Ts(t.eventQueue_,pa(e),s);for(let o=0;o<r.length;o++)fa(r[o])}}/**
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
 */function fD(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function dD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):zt(`Invalid query segment '${n}' in query '${t}'`)}return e}const e_=function(t,e){const n=pD(t),r=n.namespace;n.domain==="firebase.com"&&us(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&us("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||WN();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new eO(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Le(n.pathString)}},pD=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=fD(t.substring(u,h)));const f=dD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class Vd{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return pe(this._path)?null:hw(this._path)}get ref(){return new Di(this._repo,this._path)}get _queryIdentifier(){const e=Fg(this._queryParams),n=yd(e);return n==="{}"?"default":n}get _queryObject(){return Fg(this._queryParams)}isEqual(e){if(e=Wn(e),!(e instanceof Vd))return!1;const n=this._repo===e._repo,r=pw(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+CO(this._path)}}class Di extends Vd{constructor(e,n){super(e,n,new bd,!1)}get parent(){const e=dw(this._path);return e===null?null:new Di(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}N1(Di);O1(Di);/**
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
 */const mD="FIREBASE_DATABASE_EMULATOR_HOST",Bh={};let gD=!1;function _D(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||us("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=e_(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[mD]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=e_(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Nh(Nh.OWNER):new ZN(t.name,t.options,e);Q1("Invalid Firebase Database URL",o),pe(o.path)||us("Database URL must point to the root of a Firebase Database (not including a child path).");const h=vD(a,t,u,new JN(t.name,n));return new ED(h,t)}function yD(t,e){const n=Bh[e];(!n||n[t.key]!==t)&&us(`Database ${e}(${t.repoInfo_}) has already been deleted.`),lD(t),delete n[t.key]}function vD(t,e,n,r){let s=Bh[e.name];s||(s={},Bh[e.name]=s);let i=s[t.toURLString()];return i&&us("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new nD(t,gD,n,r),s[t.toURLString()]=i,i}class ED{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Di(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&us("Cannot call "+e+" on a deleted database.")}}/**
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
 */function wD(t){VN(Fr),$n(new mn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return _D(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Wt(wg,Tg,t),Wt(wg,Tg,"esm2017")}rr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wD();var TD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,Fd=Fd||{},te=TD||self;function $c(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ma(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ID(t){return Object.prototype.hasOwnProperty.call(t,xu)&&t[xu]||(t[xu]=++bD)}var xu="closure_uid_"+(1e9*Math.random()>>>0),bD=0;function AD(t,e,n){return t.call.apply(t.bind,arguments)}function CD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=AD:Tt=CD,Tt.apply(null,arguments)}function qa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Ur(){this.s=this.s,this.o=this.o}var RD=0;Ur.prototype.s=!1;Ur.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),RD!=0)&&ID(this)};Ur.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ud(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function t_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if($c(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var SD=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function Bo(t){return/^[\s\xa0]*$/.test(t)}function Vc(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function An(t){return Vc().indexOf(t)!=-1}function jd(t){return jd[" "](t),t}jd[" "]=function(){};function PD(t,e){var n=wx;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var kD=An("Opera"),di=An("Trident")||An("MSIE"),eT=An("Edge"),Wh=eT||di,tT=An("Gecko")&&!(Vc().toLowerCase().indexOf("webkit")!=-1&&!An("Edge"))&&!(An("Trident")||An("MSIE"))&&!An("Edge"),ND=Vc().toLowerCase().indexOf("webkit")!=-1&&!An("Edge");function nT(){var t=te.document;return t?t.documentMode:void 0}var zh;e:{var Mu="",Lu=function(){var t=Vc();if(tT)return/rv:([^\);]+)(\)|;)/.exec(t);if(eT)return/Edge\/([\d\.]+)/.exec(t);if(di)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ND)return/WebKit\/(\S+)/.exec(t);if(kD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Lu&&(Mu=Lu?Lu[1]:""),di){var $u=nT();if($u!=null&&$u>parseFloat(Mu)){zh=String($u);break e}}zh=Mu}var Hh;if(te.document&&di){var n_=nT();Hh=n_||parseInt(zh,10)||void 0}else Hh=void 0;var OD=Hh;function Wo(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(tT){e:{try{jd(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:DD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wo.$.h.call(this)}}ot(Wo,It);var DD={2:"touch",3:"pen",4:"mouse"};Wo.prototype.h=function(){Wo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ga="closure_listenable_"+(1e6*Math.random()|0),xD=0;function MD(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++xD,this.fa=this.ia=!1}function Fc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function LD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function rT(t){const e={};for(const n in t)e[n]=t[n];return e}const r_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sT(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<r_.length;i++)n=r_[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Uc(t){this.src=t,this.g={},this.h=0}Uc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Kh(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new MD(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function qh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Zw(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Fc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Kh(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Wd="closure_lm_"+(1e6*Math.random()|0),Vu={};function iT(t,e,n,r,s){if(r&&r.once)return aT(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)iT(t,e[i],n,r,s);return null}return n=qd(n),t&&t[ga]?t.O(e,n,ma(r)?!!r.capture:!!r,s):oT(t,e,n,!1,r,s)}function oT(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ma(s)?!!s.capture:!!s,a=Hd(t);if(a||(t[Wd]=a=new Uc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=$D(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)SD||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(cT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $D(){function t(n){return e.call(t.src,t.listener,n)}const e=VD;return t}function aT(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)aT(t,e[i],n,r,s);return null}return n=qd(n),t&&t[ga]?t.P(e,n,ma(r)?!!r.capture:!!r,s):oT(t,e,n,!0,r,s)}function lT(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)lT(t,e[i],n,r,s);else r=ma(r)?!!r.capture:!!r,n=qd(n),t&&t[ga]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Kh(i,n,r,s),-1<n&&(Fc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Kh(e,n,r,s)),(n=-1<t?e[t]:null)&&zd(n))}function zd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ga])qh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(cT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hd(e))?(qh(n,t),n.h==0&&(n.src=null,e[Wd]=null)):Fc(t)}}}function cT(t){return t in Vu?Vu[t]:Vu[t]="on"+t}function VD(t,e){if(t.fa)t=!0;else{e=new Wo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&zd(t),t=n.call(r,e)}return t}function Hd(t){return t=t[Wd],t instanceof Uc?t:null}var Fu="__closure_events_fn_"+(1e9*Math.random()>>>0);function qd(t){return typeof t=="function"?t:(t[Fu]||(t[Fu]=function(e){return t.handleEvent(e)}),t[Fu])}function it(){Ur.call(this),this.i=new Uc(this),this.S=this,this.J=null}ot(it,Ur);it.prototype[ga]=!0;it.prototype.removeEventListener=function(t,e,n,r){lT(this,t,e,n,r)};function ht(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var s=e;e=new It(r,t),sT(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ka(o,r,!0,e)&&s}if(o=e.g=t,s=Ka(o,r,!0,e)&&s,s=Ka(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ka(o,r,!1,e)&&s}it.prototype.N=function(){if(it.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fc(n[r]);delete t.g[e],t.h--}}this.J=null};it.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};it.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ka(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&qh(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Kd=te.JSON.stringify;class FD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function UD(){var t=Gd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jD{constructor(){this.h=this.g=null}add(e,n){const r=uT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var uT=new FD(()=>new BD,t=>t.reset());class BD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function zD(t){te.setTimeout(()=>{throw t},0)}let zo,Ho=!1,Gd=new jD,hT=()=>{const t=te.Promise.resolve(void 0);zo=()=>{t.then(HD)}};var HD=()=>{for(var t;t=UD();){try{t.h.call(t.g)}catch(n){zD(n)}var e=uT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ho=!1};function jc(t,e){it.call(this),this.h=t||1,this.g=e||te,this.j=Tt(this.qb,this),this.l=Date.now()}ot(jc,it);U=jc.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(Qd(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){jc.$.N.call(this),Qd(this),delete this.g};function Yd(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function fT(t){t.g=Yd(()=>{t.g=null,t.i&&(t.i=!1,fT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class qD extends Ur{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fT(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qo(t){Ur.call(this),this.h=t,this.g={}}ot(qo,Ur);var s_=[];function dT(t,e,n,r){Array.isArray(n)||(n&&(s_[0]=n.toString()),n=s_);for(var s=0;s<n.length;s++){var i=iT(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function pT(t){Bd(t.g,function(e,n){this.g.hasOwnProperty(n)&&zd(e)},t),t.g={}}qo.prototype.N=function(){qo.$.N.call(this),pT(this)};qo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bc(){this.g=!0}Bc.prototype.Ea=function(){this.g=!1};function KD(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function GD(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function js(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+YD(t,n)+(r?" "+r:"")})}function QD(t,e){t.info(function(){return"TIMEOUT: "+e})}Bc.prototype.info=function(){};function YD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Kd(n)}catch{return e}}var Is={},i_=null;function Wc(){return i_=i_||new it}Is.Ta="serverreachability";function mT(t){It.call(this,Is.Ta,t)}ot(mT,It);function Ko(t){const e=Wc();ht(e,new mT(e))}Is.STAT_EVENT="statevent";function gT(t,e){It.call(this,Is.STAT_EVENT,t),this.stat=e}ot(gT,It);function Pt(t){const e=Wc();ht(e,new gT(e,t))}Is.Ua="timingevent";function _T(t,e){It.call(this,Is.Ua,t),this.size=e}ot(_T,It);function _a(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var zc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},yT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xd(){}Xd.prototype.h=null;function o_(t){return t.h||(t.h=t.i())}function vT(){}var ya={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jd(){It.call(this,"d")}ot(Jd,It);function Zd(){It.call(this,"c")}ot(Zd,It);var Gh;function Hc(){}ot(Hc,Xd);Hc.prototype.g=function(){return new XMLHttpRequest};Hc.prototype.i=function(){return{}};Gh=new Hc;function va(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new qo(this),this.P=XD,t=Wh?125:void 0,this.V=new jc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ET}function ET(){this.i=null,this.g="",this.h=!1}var XD=45e3,Qh={},zl={};U=va.prototype;U.setTimeout=function(t){this.P=t};function Yh(t,e,n){t.L=1,t.v=Kc(lr(e)),t.s=n,t.S=!0,wT(t,null)}function wT(t,e){t.G=Date.now(),Ea(t),t.A=lr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),PT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ET,t.g=YT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new qD(Tt(t.Pa,t,t.g),t.O)),dT(t.U,t.g,"readystatechange",t.nb),e=t.I?rT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ko(),KD(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&kn(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const u=kn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Wh||this.g&&(this.h.h||this.g.ja()||u_(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ko(3):Ko(2)),qc(this);var n=this.g.da();this.ca=n;t:if(TT(this)){var r=u_(this.g);t="";var s=r.length,i=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),yo(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,GD(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bo(a)){var c=a;break t}}c=null}if(n=c)js(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xh(this,n);else{this.i=!1,this.o=3,Pt(12),Jr(this),yo(this);break e}}this.S?(IT(this,u,o),Wh&&this.i&&u==3&&(dT(this.U,this.V,"tick",this.mb),this.V.start())):(js(this.j,this.m,o,null),Xh(this,o)),u==4&&Jr(this),this.i&&!this.J&&(u==4?qT(this.l,this):(this.i=!1,Ea(this)))}else yx(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Jr(this),yo(this)}}}catch{}finally{}};function TT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function IT(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=JD(t,n),s==zl){e==4&&(t.o=4,Pt(14),r=!1),js(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Qh){t.o=4,Pt(15),js(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else js(t.j,t.m,s,null),Xh(t,s);TT(t)&&s!=zl&&s!=Qh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ip(e),e.M=!0,Pt(11))):(js(t.j,t.m,n,"[Invalid Chunked Response]"),Jr(t),yo(t))}U.mb=function(){if(this.g){var t=kn(this.g),e=this.g.ja();this.C<e.length&&(qc(this),IT(this,t,e),this.i&&t!=4&&Ea(this))}};function JD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?zl:(n=Number(e.substring(n,r)),isNaN(n)?Qh:(r+=1,r+n>e.length?zl:(e=e.slice(r,r+n),t.C=r+n,e)))}U.cancel=function(){this.J=!0,Jr(this)};function Ea(t){t.Y=Date.now()+t.P,bT(t,t.P)}function bT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_a(Tt(t.lb,t),e)}function qc(t){t.B&&(te.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(QD(this.j,this.A),this.L!=2&&(Ko(),Pt(17)),Jr(this),this.o=2,yo(this)):bT(this,this.Y-t)};function yo(t){t.l.H==0||t.J||qT(t.l,t)}function Jr(t){qc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Qd(t.V),pT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Xh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Jh(n.i,t))){if(!t.K&&Jh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Kl(n),Xc(n);else break e;sp(n),Pt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=_a(Tt(n.ib,n),6e3));if(1>=OT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Zr(n,11)}else if((t.K||n.g==t)&&Kl(n),!Bo(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ep(i,i.h),i.h=null))}if(r.F){const p=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.Da=p,xe(r.I,r.F,p))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=QT(r,r.J?r.pa:null,r.Y),o.K){DT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(qc(a),Ea(a)),r.g=o}else zT(r);0<n.j.length&&Jc(n)}else c[0]!="stop"&&c[0]!="close"||Zr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Zr(n,7):rp(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ko(4)}catch{}}function ZD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if($c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ex(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if($c(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function AT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if($c(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ex(t),r=ZD(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var CT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function is(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof is){this.h=t.h,Hl(this,t.j),this.s=t.s,this.g=t.g,ql(this,t.m),this.l=t.l;var e=t.i,n=new Go;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),a_(this,n),this.o=t.o}else t&&(e=String(t).match(CT))?(this.h=!1,Hl(this,e[1]||"",!0),this.s=eo(e[2]||""),this.g=eo(e[3]||"",!0),ql(this,e[4]),this.l=eo(e[5]||"",!0),a_(this,e[6]||"",!0),this.o=eo(e[7]||"")):(this.h=!1,this.i=new Go(null,this.h))}is.prototype.toString=function(){var t=[],e=this.j;e&&t.push(to(e,l_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(to(e,l_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(to(n,n.charAt(0)=="/"?sx:rx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",to(n,ox)),t.join("")};function lr(t){return new is(t)}function Hl(t,e,n){t.j=n?eo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ql(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function a_(t,e,n){e instanceof Go?(t.i=e,ax(t.i,t.h)):(n||(e=to(e,ix)),t.i=new Go(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function Kc(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function eo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function to(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,nx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var l_=/[#\/\?@]/g,rx=/[#\?:]/g,sx=/[#\?]/g,ix=/[#\?@]/g,ox=/#/g;function Go(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function jr(t){t.g||(t.g=new Map,t.h=0,t.i&&tx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Go.prototype;U.add=function(t,e){jr(this),this.i=null,t=xi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function RT(t,e){jr(t),e=xi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ST(t,e){return jr(t),e=xi(t,e),t.g.has(e)}U.forEach=function(t,e){jr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};U.ta=function(){jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};U.Z=function(t){jr(this);let e=[];if(typeof t=="string")ST(this,t)&&(e=e.concat(this.g.get(xi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return jr(this),this.i=null,t=xi(this,t),ST(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function PT(t,e,n){RT(t,e),0<n.length&&(t.i=null,t.g.set(xi(t,e),Ud(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function xi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ax(t,e){e&&!t.j&&(jr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(RT(this,r),PT(this,s,n))},t)),t.j=e}var lx=class{constructor(t,e){this.g=t,this.map=e}};function kT(t){this.l=t||cx,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cx=10;function NT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function OT(t){return t.h?1:t.g?t.g.size:0}function Jh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ep(t,e){t.g?t.g.add(e):t.h=e}function DT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kT.prototype.cancel=function(){if(this.i=xT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ud(t.i)}var ux=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function hx(){this.g=new ux}function fx(t,e,n){const r=n||"";try{AT(t,function(s,i){let o=s;ma(s)&&(o=Kd(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function dx(t,e){const n=new Bc;if(te.Image){const r=new Image;r.onload=qa(Ga,n,r,"TestLoadImage: loaded",!0,e),r.onerror=qa(Ga,n,r,"TestLoadImage: error",!1,e),r.onabort=qa(Ga,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=qa(Ga,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ga(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Gc(t){this.l=t.ec||null,this.j=t.ob||!1}ot(Gc,Xd);Gc.prototype.g=function(){return new Qc(this.l,this.j)};Gc.prototype.i=function(t){return function(){return t}}({});function Qc(t,e){it.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=tp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(Qc,it);var tp=0;U=Qc.prototype;U.open=function(t,e){if(this.readyState!=tp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qo(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wa(this)),this.readyState=tp};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qo(this)),this.g&&(this.readyState=3,Qo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;MT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function MT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wa(this):Qo(this),this.readyState==3&&MT(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,wa(this))};U.Ya=function(t){this.g&&(this.response=t,wa(this))};U.ka=function(){this.g&&wa(this)};function wa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qo(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Qc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var px=te.JSON.parse;function Be(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=LT,this.L=this.M=!1}ot(Be,it);var LT="",mx=/^https?$/i,gx=["POST","PUT"];U=Be.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Gh.g(),this.C=this.u?o_(this.u):o_(Gh),this.g.onreadystatechange=Tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){c_(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=te.FormData&&t instanceof te.FormData,!(0<=Zw(gx,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{FT(this),0<this.B&&((this.L=_x(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.ua,this)):this.A=Yd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){c_(this,i)}};function _x(t){return di&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof Fd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function c_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$T(t),Yc(t)}function $T(t){t.F||(t.F=!0,ht(t,"complete"),ht(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),Yc(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yc(this,!0)),Be.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?VT(this):this.kb())};U.kb=function(){VT(this)};function VT(t){if(t.h&&typeof Fd<"u"&&(!t.C[1]||kn(t)!=4||t.da()!=2)){if(t.v&&kn(t)==4)Yd(t.La,0,t);else if(ht(t,"readystatechange"),kn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(CT)[1]||null;!s&&te.self&&te.self.location&&(s=te.self.location.protocol.slice(0,-1)),r=!mx.test(s?s.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var i=2<kn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",$T(t)}}finally{Yc(t)}}}}function Yc(t,e){if(t.g){FT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function FT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function kn(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),px(e)}};function u_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case LT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function yx(t){const e={};t=(t.g&&2<=kn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Bo(t[r]))continue;var n=WD(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}LD(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function UT(t){let e="";return Bd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function np(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=UT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function Ki(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jT(t){this.Ga=0,this.j=[],this.l=new Bc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ki("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ki("baseRetryDelayMs",5e3,t),this.hb=Ki("retryDelaySeedMs",1e4,t),this.eb=Ki("forwardChannelMaxRetries",2,t),this.xa=Ki("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new kT(t&&t.concurrentRequestLimit),this.Ja=new hx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=jT.prototype;U.ra=8;U.H=1;function rp(t){if(BT(t),t.H==3){var e=t.W++,n=lr(t.I);if(xe(n,"SID",t.K),xe(n,"RID",e),xe(n,"TYPE","terminate"),Ta(t,n),e=new va(t,t.l,e),e.L=2,e.v=Kc(lr(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=YT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ea(e)}GT(t)}function Xc(t){t.g&&(ip(t),t.g.cancel(),t.g=null)}function BT(t){Xc(t),t.u&&(te.clearTimeout(t.u),t.u=null),Kl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Jc(t){if(!NT(t.i)&&!t.m){t.m=!0;var e=t.Na;zo||hT(),Ho||(zo(),Ho=!0),Gd.add(e,t),t.C=0}}function vx(t,e){return OT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=_a(Tt(t.Na,t,e),KT(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new va(this,this.l,t);let i=this.s;if(this.U&&(i?(i=rT(i),sT(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=WT(this,s,e),n=lr(this.I),xe(n,"RID",t),xe(n,"CVER",22),this.F&&xe(n,"X-HTTP-Session-Id",this.F),Ta(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(UT(i)))+"&"+e:this.o&&np(n,this.o,i)),ep(this.i,s),this.bb&&xe(n,"TYPE","init"),this.P?(xe(n,"$req",e),xe(n,"SID","null"),s.aa=!0,Yh(s,n,null)):Yh(s,n,e),this.H=2}}else this.H==3&&(t?h_(this,t):this.j.length==0||NT(this.i)||h_(this))};function h_(t,e){var n;e?n=e.m:n=t.W++;const r=lr(t.I);xe(r,"SID",t.K),xe(r,"RID",n),xe(r,"AID",t.V),Ta(t,r),t.o&&t.s&&np(r,t.o,t.s),n=new va(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=WT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ep(t.i,n),Yh(n,r,e)}function Ta(t,e){t.na&&Bd(t.na,function(n,r){xe(e,r,n)}),t.h&&AT({},function(n,r){xe(e,r,n)})}function WT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Tt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{fx(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function zT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;zo||hT(),Ho||(zo(),Ho=!0),Gd.add(e,t),t.A=0}}function sp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=_a(Tt(t.Ma,t),KT(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,HT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=_a(Tt(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pt(10),Xc(this),HT(this))};function ip(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function HT(t){t.g=new va(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=lr(t.wa);xe(e,"RID","rpc"),xe(e,"SID",t.K),xe(e,"AID",t.V),xe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&xe(e,"TO",t.qa),xe(e,"TYPE","xmlhttp"),Ta(t,e),t.o&&t.s&&np(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Kc(lr(e)),n.s=null,n.S=!0,wT(n,t)}U.ib=function(){this.v!=null&&(this.v=null,Xc(this),sp(this),Pt(19))};function Kl(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function qT(t,e){var n=null;if(t.g==e){Kl(t),ip(t),t.g=null;var r=2}else if(Jh(t.i,e))n=e.F,DT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Wc(),ht(r,new _T(r,n)),Jc(t)}else zT(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&vx(t,e)||r==2&&sp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Zr(t,5);break;case 4:Zr(t,10);break;case 3:Zr(t,6);break;default:Zr(t,2)}}}function KT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Zr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Tt(t.pb,t);n||(n=new is("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Hl(n,"https"),Kc(n)),dx(n.toString(),r)}else Pt(2);t.H=0,t.h&&t.h.za(e),GT(t),BT(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Pt(2)):(this.l.info("Failed to ping google.com"),Pt(1))};function GT(t){if(t.H=0,t.ma=[],t.h){const e=xT(t.i);(e.length!=0||t.j.length!=0)&&(t_(t.ma,e),t_(t.ma,t.j),t.i.i.length=0,Ud(t.j),t.j.length=0),t.h.ya()}}function QT(t,e,n){var r=n instanceof is?lr(n):new is(n);if(r.g!="")e&&(r.g=e+"."+r.g),ql(r,r.m);else{var s=te.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new is(null);r&&Hl(i,r),e&&(i.g=e),s&&ql(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&xe(r,n,e),xe(r,"VER",t.ra),Ta(t,r),r}function YT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Be(new Gc({ob:!0})):new Be(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function XT(){}U=XT.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function Gl(){if(di&&!(10<=Number(OD)))throw Error("Environmental error: no available transport.")}Gl.prototype.g=function(t,e){return new qt(t,e)};function qt(t,e){it.call(this),this.g=new jT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Bo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Mi(this)}ot(qt,it);qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=QT(t,null,t.Y),Jc(t)};qt.prototype.close=function(){rp(this.g)};qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kd(t),t=n);e.j.push(new lx(e.fb++,t)),e.H==3&&Jc(e)};qt.prototype.N=function(){this.g.h=null,delete this.j,rp(this.g),delete this.g,qt.$.N.call(this)};function JT(t){Jd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(JT,Jd);function ZT(){Zd.call(this),this.status=1}ot(ZT,Zd);function Mi(t){this.g=t}ot(Mi,XT);Mi.prototype.Ba=function(){ht(this.g,"a")};Mi.prototype.Aa=function(t){ht(this.g,new JT(t))};Mi.prototype.za=function(t){ht(this.g,new ZT)};Mi.prototype.ya=function(){ht(this.g,"b")};function Ex(){this.blockSize=-1}function _n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ot(_n,Ex);_n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Uu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}_n.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Uu(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Uu(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Uu(this,r),s=0;break}}this.h=s,this.i+=e};_n.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Se(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var wx={};function op(t){return-128<=t&&128>t?PD(t,function(e){return new Se([e|0],0>e?-1:0)}):new Se([t|0],0>t?-1:0)}function Nn(t){if(isNaN(t)||!isFinite(t))return Ys;if(0>t)return lt(Nn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Zh;return new Se(e,0)}function eI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(eI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Nn(Math.pow(e,8)),r=Ys,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Nn(Math.pow(e,i)),r=r.R(i).add(Nn(o))):(r=r.R(n),r=r.add(Nn(o)))}return r}var Zh=4294967296,Ys=op(0),ef=op(1),f_=op(16777216);U=Se.prototype;U.ea=function(){if(Kt(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Zh+r)*e,e*=Zh}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(nr(this))return"0";if(Kt(this))return"-"+lt(this).toString(t);for(var e=Nn(Math.pow(t,6)),n=this,r="";;){var s=Yl(n,e).g;n=Ql(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,nr(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function nr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Kt(t){return t.h==-1}U.X=function(t){return t=Ql(this,t),Kt(t)?-1:nr(t)?0:1};function lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Se(n,~t.h).add(ef)}U.abs=function(){return Kt(this)?lt(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Se(n,n[n.length-1]&-2147483648?-1:0)};function Ql(t,e){return t.add(lt(e))}U.R=function(t){if(nr(this)||nr(t))return Ys;if(Kt(this))return Kt(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(Kt(t))return lt(this.R(lt(t)));if(0>this.X(f_)&&0>t.X(f_))return Nn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Qa(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Qa(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Qa(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Qa(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Se(n,0)};function Qa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Gi(t,e){this.g=t,this.h=e}function Yl(t,e){if(nr(e))throw Error("division by zero");if(nr(t))return new Gi(Ys,Ys);if(Kt(t))return e=Yl(lt(t),e),new Gi(lt(e.g),lt(e.h));if(Kt(e))return e=Yl(t,lt(e)),new Gi(lt(e.g),e.h);if(30<t.g.length){if(Kt(t)||Kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ef,r=e;0>=r.X(t);)n=d_(n),r=d_(r);var s=Ns(n,1),i=Ns(r,1);for(r=Ns(r,2),n=Ns(n,2);!nr(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ns(r,1),n=Ns(n,1)}return e=Ql(t,s.R(e)),new Gi(s,e)}for(s=Ys;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Nn(n),o=i.R(e);Kt(o)||0<o.X(t);)n-=r,i=Nn(n),o=i.R(e);nr(i)&&(i=ef),s=s.add(i),t=Ql(t,o)}return new Gi(s,t)}U.gb=function(t){return Yl(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Se(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Se(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Se(n,this.h^t.h)};function d_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Se(n,t.h)}function Ns(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Se(s,t.h)}Gl.prototype.createWebChannel=Gl.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;zc.NO_ERROR=0;zc.TIMEOUT=8;zc.HTTP_ERROR=6;yT.COMPLETE="complete";vT.EventType=ya;ya.OPEN="a";ya.CLOSE="b";ya.ERROR="c";ya.MESSAGE="d";it.prototype.listen=it.prototype.O;Be.prototype.listenOnce=Be.prototype.P;Be.prototype.getLastError=Be.prototype.Sa;Be.prototype.getLastErrorCode=Be.prototype.Ia;Be.prototype.getStatus=Be.prototype.da;Be.prototype.getResponseJson=Be.prototype.Wa;Be.prototype.getResponseText=Be.prototype.ja;Be.prototype.send=Be.prototype.ha;Be.prototype.setWithCredentials=Be.prototype.Oa;_n.prototype.digest=_n.prototype.l;_n.prototype.reset=_n.prototype.reset;_n.prototype.update=_n.prototype.j;Se.prototype.add=Se.prototype.add;Se.prototype.multiply=Se.prototype.R;Se.prototype.modulo=Se.prototype.gb;Se.prototype.compare=Se.prototype.X;Se.prototype.toNumber=Se.prototype.ea;Se.prototype.toString=Se.prototype.toString;Se.prototype.getBits=Se.prototype.D;Se.fromNumber=Nn;Se.fromString=eI;var Tx=function(){return new Gl},Ix=function(){return Wc()},ju=zc,bx=yT,Ax=Is,p_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ya=vT,Cx=Be,Rx=_n,Xs=Se;const m_="@firebase/firestore";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let Li="10.4.0";/**
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
 */const ps=new sa("@firebase/firestore");function Qi(){return ps.logLevel}function H(t,...e){if(ps.logLevel<=de.DEBUG){const n=e.map(ap);ps.debug(`Firestore (${Li}): ${t}`,...n)}}function cr(t,...e){if(ps.logLevel<=de.ERROR){const n=e.map(ap);ps.error(`Firestore (${Li}): ${t}`,...n)}}function pi(t,...e){if(ps.logLevel<=de.WARN){const n=e.map(ap);ps.warn(`Firestore (${Li}): ${t}`,...n)}}function ap(t){if(typeof t=="string")return t;try{/**
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
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${Li}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function Qe(t,e){t||ce()}function Ie(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class tI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class Px{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kx{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Or,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Qe(typeof r.accessToken=="string"),new tI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string"),new mt(e)}}class Nx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ox{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Nx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qe(typeof n.token=="string"),this.R=n.token,new Dx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Mx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class nI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Mx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function mi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class kt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return kt.fromMillis(Date.now())}static fromDate(e){return kt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new kt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new kt(0,0))}static max(){return new ae(new kt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Yo{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(),r===void 0?r=e.length-n:r>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Yo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends Yo{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const Lx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lt extends Yo{construct(e,n,r){return new Lt(e,n,r)}static isValidIdentifier(e){return Lx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new X(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new X(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Lt(n)}static emptyPath(){return new Lt([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ue.fromString(e))}static fromName(e){return new J(Ue.fromString(e).popFirst(5))}static empty(){return new J(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ue(e.slice()))}}function $x(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new kt(n+1,0):new kt(n,r));return new Lr(s,J.empty(),e)}function Vx(t){return new Lr(t.readTime,t.key,-1)}class Lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Lr(ae.min(),J.empty(),-1)}static max(){return new Lr(ae.max(),J.empty(),-1)}}function Fx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ux="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function lp(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==Ux)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(s=>s?N.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new N((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new N((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ia(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class cp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}cp.ae=-1;function Zc(t){return t==null}function tf(t){return t===0&&1/t==-1/0}/**
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
 */function g_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function eu(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Bx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xa(this.root,e,this.comparator,!0)}}class Xa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bt{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new __(this.data.getIterator())}getIteratorFrom(e){return new __(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new bt(this.comparator);return n.data=e,n}}class __{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ir{constructor(e){this.fields=e,e.sort(Lt.comparator)}static empty(){return new Ir([])}unionWith(e){let n=new bt(Lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ir(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class rI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rI("Invalid base64 string: "+i):i}}(e);return new Ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const Wx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $r(t){if(Qe(!!t),typeof t=="string"){let e=0;const n=Wx.exec(t);if(Qe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ms(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
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
 */function up(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hp(t){const e=t.mapValue.fields.__previous_value__;return up(e)?hp(e):e}function Xo(t){const e=$r(t.mapValue.fields.__local_write_time__.timestampValue);return new kt(e.seconds,e.nanos)}/**
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
 */class zx{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Jo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Jo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Jo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ja={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?up(t)?4:Hx(t)?9007199254740991:10:ce()}function Fn(t,e){if(t===e)return!0;const n=gs(t);if(n!==gs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xo(t).isEqual(Xo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=$r(s.timestampValue),a=$r(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ms(s.bytesValue).isEqual(ms(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ke(s.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ke(s.integerValue)===Ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ke(s.doubleValue),a=Ke(i.doubleValue);return o===a?tf(o)===tf(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(g_(o)!==g_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Fn(o[l],a[l])))return!1;return!0}(t,e);default:return ce()}}function Zo(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=gs(t),r=gs(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ke(i.integerValue||i.doubleValue),l=Ke(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return y_(t.timestampValue,e.timestampValue);case 4:return y_(Xo(t),Xo(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ms(i),l=ms(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ae(a[c],l[c]);if(u!==0)return u}return Ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ae(Ke(i.latitude),Ke(o.latitude));return a!==0?a:Ae(Ke(i.longitude),Ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=gi(a[c],l[c]);if(u)return u}return Ae(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ja.mapValue&&o===Ja.mapValue)return 0;if(i===Ja.mapValue)return 1;if(o===Ja.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=Ae(l[h],u[h]);if(f!==0)return f;const d=gi(a[l[h]],c[u[h]]);if(d!==0)return d}return Ae(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ce()}}function y_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=$r(t),r=$r(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function _i(t){return nf(t)}function nf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ms(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=nf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${nf(n.fields[o])}`;return s+"}"}(t.mapValue):ce()}function rf(t){return!!t&&"integerValue"in t}function fp(t){return!!t&&"arrayValue"in t}function v_(t){return!!t&&"nullValue"in t}function E_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bu(t){return!!t&&"mapValue"in t}function vo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return eu(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Cn{constructor(e){this.value=e}static empty(){return new Cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vo(n)}setAll(e){let n=Lt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=vo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Bu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Bu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){eu(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Cn(vo(this.value))}}/**
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
 */class yt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,ae.min(),ae.min(),ae.min(),Cn.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,ae.min(),ae.min(),Cn.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,ae.min(),ae.min(),Cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xl{constructor(e,n){this.position=e,this.inclusive=n}}function w_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=gi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function T_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function qx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sI{}class Ge extends sI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Gx(e,n,r):n==="array-contains"?new Xx(e,r):n==="in"?new Jx(e,r):n==="not-in"?new Zx(e,r):n==="array-contains-any"?new eM(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Qx(e,r):new Yx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gi(n,this.value)):n!==null&&gs(this.value)===gs(n)&&this.matchesComparison(gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Un extends sI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Un(e,n)}matches(e){return iI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function iI(t){return t.op==="and"}function oI(t){return Kx(t)&&iI(t)}function Kx(t){for(const e of t.filters)if(e instanceof Un)return!1;return!0}function sf(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+_i(t.value);if(oI(t))return t.filters.map(e=>sf(e)).join(",");{const e=t.filters.map(n=>sf(n)).join(",");return`${t.op}(${e})`}}function aI(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&Fn(r.value,s.value)}(t,e):t instanceof Un?function(r,s){return s instanceof Un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&aI(o,s.filters[a]),!0):!1}(t,e):void ce()}function lI(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${_i(n.value)}`}(t):t instanceof Un?function(n){return n.op.toString()+" {"+n.getFilters().map(lI).join(" ,")+"}"}(t):"Filter"}class Gx extends Ge{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class Qx extends Ge{constructor(e,n){super(e,"in",n),this.keys=cI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Yx extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=cI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class Xx extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fp(n)&&Zo(n.arrayValue,this.value)}}class Jx extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zo(this.value.arrayValue,n)}}class Zx extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zo(this.value.arrayValue,n)}}class eM extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zo(this.value.arrayValue,r))}}/**
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
 */class tM{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function I_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new tM(t,e,n,r,s,i,o)}function dp(t){const e=Ie(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>sf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Zc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_i(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_i(r)).join(",")),e.he=n}return e.he}function pp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!aI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!T_(t.startAt,e.startAt)&&T_(t.endAt,e.endAt)}function of(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class tu{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function nM(t,e,n,r,s,i,o,a){return new tu(t,e,n,r,s,i,o,a)}function nu(t){return new tu(t)}function b_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function sM(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function iM(t){return t.collectionGroup!==null}function wo(t){const e=Ie(t);if(e.Pe===null){e.Pe=[];const n=sM(e),r=rM(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Eo(n)),e.Pe.push(new Eo(Lt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Eo(Lt.keyField(),i))}}}return e.Pe}function xn(t){const e=Ie(t);return e.Ie||(e.Ie=oM(e,wo(t))),e.Ie}function oM(t,e){if(t.limitType==="F")return I_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Eo(s.field,i)});const n=t.endAt?new Xl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xl(t.startAt.position,t.startAt.inclusive):null;return I_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function af(t,e,n){return new tu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ru(t,e){return pp(xn(t),xn(e))&&t.limitType===e.limitType}function uI(t){return`${dp(xn(t))}|lt:${t.limitType}`}function xs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>lI(s)).join(", ")}]`),Zc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>_i(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>_i(s)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function su(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of wo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=w_(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,wo(r),s)||r.endAt&&!function(o,a,l){const c=w_(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,wo(r),s))}(t,e)}function aM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hI(t){return(e,n)=>{let r=!1;for(const s of wo(t)){const i=lM(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function lM(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?gi(l,c):ce()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
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
 */class $i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){eu(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Bx(this.inner)}size(){return this.innerSize}}/**
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
 */const cM=new ze(J.comparator);function Vr(){return cM}const fI=new ze(J.comparator);function no(...t){let e=fI;for(const n of t)e=e.insert(n.key,n);return e}function uM(t){let e=fI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function es(){return To()}function dI(){return To()}function To(){return new $i(t=>t.toString(),(t,e)=>t.isEqual(e))}const hM=new bt(J.comparator);function we(...t){let e=hM;for(const n of t)e=e.add(n);return e}const fM=new bt(Ae);function dM(){return fM}/**
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
 */function pM(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tf(e)?"-0":e}}function mM(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class iu{constructor(){this._=void 0}}function gM(t,e,n){return t instanceof lf?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&up(i)&&(i=hp(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Jl?pI(t,e):t instanceof Zl?mI(t,e):function(s,i){const o=yM(s,i),a=A_(o)+A_(s.Te);return rf(o)&&rf(s.Te)?mM(a):pM(s.serializer,a)}(t,e)}function _M(t,e,n){return t instanceof Jl?pI(t,e):t instanceof Zl?mI(t,e):n}function yM(t,e){return t instanceof cf?function(r){return rf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class lf extends iu{}class Jl extends iu{constructor(e){super(),this.elements=e}}function pI(t,e){const n=gI(e);for(const r of t.elements)n.some(s=>Fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Zl extends iu{constructor(e){super(),this.elements=e}}function mI(t,e){let n=gI(e);for(const r of t.elements)n=n.filter(s=>!Fn(s,r));return{arrayValue:{values:n}}}class cf extends iu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function A_(t){return Ke(t.integerValue||t.doubleValue)}function gI(t){return fp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vM(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Jl&&s instanceof Jl||r instanceof Zl&&s instanceof Zl?mi(r.elements,s.elements,Fn):r instanceof cf&&s instanceof cf?Fn(r.Te,s.Te):r instanceof lf&&s instanceof lf}(t.transform,e.transform)}class os{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new os}static exists(e){return new os(void 0,e)}static updateTime(e){return new os(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mp{}function _I(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wM(t.key,os.none()):new gp(t.key,t.data,os.none());{const n=t.data,r=Cn.empty();let s=new bt(Lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ou(t.key,r,new Ir(s.toArray()),os.none())}}function EM(t,e,n){t instanceof gp?function(s,i,o){const a=s.value.clone(),l=R_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ou?function(s,i,o){if(!ul(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=R_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(yI(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Io(t,e,n,r){return t instanceof gp?function(i,o,a,l){if(!ul(i.precondition,o))return a;const c=i.value.clone(),u=S_(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ou?function(i,o,a,l){if(!ul(i.precondition,o))return a;const c=S_(i.fieldTransforms,l,o),u=o.data;return u.setAll(yI(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ul(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function C_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&mi(r,s,(i,o)=>vM(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class gp extends mp{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ou extends mp{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function R_(t,e,n){const r=new Map;Qe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,_M(o,a,n[s]))}return r}function S_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,gM(i,o,e))}return r}class wM extends mp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class TM{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&EM(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=_I(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,r)=>C_(n,r))&&mi(this.baseMutations,e.baseMutations,(n,r)=>C_(n,r))}}/**
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
 */class IM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class bM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var qe,ge;function vI(t){if(t===void 0)return cr("GRPC error has no .code"),L.UNKNOWN;switch(t){case qe.OK:return L.OK;case qe.CANCELLED:return L.CANCELLED;case qe.UNKNOWN:return L.UNKNOWN;case qe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case qe.INTERNAL:return L.INTERNAL;case qe.UNAVAILABLE:return L.UNAVAILABLE;case qe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case qe.NOT_FOUND:return L.NOT_FOUND;case qe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case qe.ABORTED:return L.ABORTED;case qe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case qe.DATA_LOSS:return L.DATA_LOSS;default:return ce()}}(ge=qe||(qe={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function AM(){return new TextEncoder}/**
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
 */const CM=new Xs([4294967295,4294967295],0);function P_(t){const e=AM().encode(t),n=new Rx;return n.update(e),new Uint8Array(n.digest())}function k_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Xs([n,r],0),new Xs([s,i],0)]}class _p{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ro(`Invalid padding: ${n}`);if(r<0)throw new ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ro(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Xs.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Xs.fromNumber(r)));return s.compare(CM)===1&&(s=new Xs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=P_(e),[r,s]=k_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _p(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=P_(e),[r,s]=k_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class au{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ba.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new au(ae.min(),s,new ze(Ae),Vr(),we())}}class ba{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ba(r,n,we(),we(),we())}}/**
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
 */class hl{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class EI{constructor(e,n){this.targetId=e,this.ye=n}}class wI{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class N_{constructor(){this.we=0,this.Se=D_(),this.be=Ct.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=we(),n=we(),r=we();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new ba(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=D_()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class RM{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Vr(),this.Ue=O_(),this.We=new ze(Ae)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(of(i))if(r===0){const o=new J(i.path);this.je(n,o,yt.newNoDocument(o,ae.min()))}else Qe(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,c)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ms(r).toUint8Array()}catch(l){if(l instanceof rI)return pi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new _p(o,s,i)}catch(l){return pi(l instanceof ro?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&of(a.target)){const l=new J(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,yt.newNoDocument(l,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=we();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.et(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new au(e,n,this.We,this.$e,r);return this.$e=Vr(),this.Ue=O_(),this.We=new ze(Ae),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new N_,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new bt(Ae),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new N_),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function O_(){return new ze(J.comparator)}function D_(){return new ze(J.comparator)}const SM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),PM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),kM=(()=>({and:"AND",or:"OR"}))();class NM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function uf(t,e){return t.useProto3Json||Zc(e)?e:{value:e}}function OM(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function DM(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Js(t){return Qe(!!t),ae.fromTimestamp(function(n){const r=$r(n);return new kt(r.seconds,r.nanos)}(t))}function xM(t,e){return function(r){return new Ue(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function TI(t){const e=Ue.fromString(t);return Qe(CI(e)),e}function Wu(t,e){const n=TI(e);if(n.get(1)!==t.databaseId.projectId)throw new X(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(II(n))}function hf(t,e){return xM(t.databaseId,e)}function MM(t){const e=TI(t);return e.length===4?Ue.emptyPath():II(e)}function x_(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function II(t){return Qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function LM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Qe(u===void 0||typeof u=="string"),Ct.fromBase64String(u||"")):(Qe(u===void 0||u instanceof Uint8Array),Ct.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?L.UNKNOWN:vI(c.code);return new X(u,c.message||"")}(o);n=new wI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wu(t,r.document.name),i=Js(r.document.updateTime),o=r.document.createTime?Js(r.document.createTime):ae.min(),a=new Cn({mapValue:{fields:r.document.fields}}),l=yt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new hl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Wu(t,r.document),i=r.readTime?Js(r.readTime):ae.min(),o=yt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new hl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Wu(t,r.document),i=r.removedTargetIds||[];n=new hl([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new bM(s,i),a=r.targetId;n=new EI(a,o)}}return n}function $M(t,e){return{documents:[hf(t,e.path)]}}function VM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=hf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=hf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return AI(Un.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ms(h.field),direction:jM(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=uf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function FM(t){let e=MM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Qe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=bI(h);return f instanceof Un&&oI(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(g){return new Eo(Ls(g.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Zc(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Xl(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Xl(d,f)}(n.endAt)),nM(e,s,o,i,a,"F",l,c)}function UM(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ls(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ls(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ls(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ls(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(Ls(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Un.create(n.compositeFilter.filters.map(r=>bI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(n.compositeFilter.op))}(t):ce()}function jM(t){return SM[t]}function BM(t){return PM[t]}function WM(t){return kM[t]}function Ms(t){return{fieldPath:t.canonicalString()}}function Ls(t){return Lt.fromServerFormat(t.fieldPath)}function AI(t){return t instanceof Ge?function(n){if(n.op==="=="){if(E_(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NAN"}};if(v_(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(E_(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NOT_NAN"}};if(v_(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ms(n.field),op:BM(n.op),value:n.value}}}(t):t instanceof Un?function(n){const r=n.getFilters().map(s=>AI(s));return r.length===1?r[0]:{compositeFilter:{op:WM(n.op),filters:r}}}(t):ce()}function CI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class br{constructor(e,n,r,s,i=ae.min(),o=ae.min(),a=Ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class zM{constructor(e){this.ht=e}}function HM(t){const e=FM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?af(e,e.limit,"L"):e}/**
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
 */class qM{constructor(){this.an=new KM}addToCollectionParentIndex(e,n){return this.an.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Lr.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class KM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new bt(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new bt(Ue.comparator)).toArray()}}/**
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
 */class yi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new yi(0)}static Ln(){return new yi(-1)}}/**
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
 */class GM{constructor(){this.changes=new $i(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class QM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class YM{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Io(r.mutation,s,Ir.empty(),kt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=es();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=no();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=es();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Vr();const o=To(),a=function(){return To()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof ou)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Io(u.mutation,c,u.mutation.getFieldMask(),kt.now())):o.set(c.key,Ir.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new QM(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=To();let s=new ze((o,a)=>o-a),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Ir.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||we()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=dI();u.forEach(f=>{if(!i.has(f)){const d=_I(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(es());let a=-1,l=i;return o.next(c=>N.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?N.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,we())).next(u=>({batchId:a,changes:uM(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let s=no();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=no();return this.indexManager.getCollectionParents(e,i).next(a=>N.forEach(a,l=>{const c=function(h,f){return new tu(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,yt.newInvalidDocument(u)))});let a=no();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Io(u.mutation,c,Ir.empty(),kt.now()),su(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class XM{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return N.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Js(s.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:HM(s.bundledQuery),readTime:Js(s.readTime)}}(n)),N.resolve()}}/**
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
 */class JM{constructor(){this.overlays=new ze(J.comparator),this.Pr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=es();return N.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=es(),i=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=es(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=es(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return N.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IM(n,r));let i=this.Pr.get(n);i===void 0&&(i=we(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
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
 */class yp{constructor(){this.Ir=new bt(Ze.dr),this.Tr=new bt(Ze.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Ze(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new J(new Ue([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new J(new Ue([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=we();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return J.comparator(e.key,n.key)||Ae(e.yr,n.yr)}static Er(e,n){return Ae(e.yr,n.yr)||J.comparator(e.key,n.key)}}/**
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
 */class ZM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new bt(Ze.dr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TM(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new Ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new bt(Ae);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new J(i),0);let a=new bt(Ae);return this.Sr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.yr)),!0)},o),N.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Qe(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return N.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Sr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class eL{constructor(e){this.Fr=e,this.docs=function(){return new ze(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=Vr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Vr();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Fx(Vx(u),r)<=0||(s.has(u.key)||su(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce()}Mr(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tL(this)}getSize(e){return N.resolve(this.size)}}class tL extends GM{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class nL{constructor(e){this.persistence=e,this.Or=new $i(n=>dp(n),pp),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Nr=0,this.Br=new yp,this.targetCount=0,this.Lr=yi.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),N.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new yi(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Qn(n),N.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Br.containsKey(n))}}/**
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
 */class rL{constructor(e,n){this.kr={},this.overlays={},this.qr=new cp(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new nL(this),this.indexManager=new qM,this.remoteDocumentCache=function(s){return new eL(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new zM(n),this.Ur=new XM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new ZM(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new sL(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return N.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class sL extends jx{constructor(e){super(),this.currentSequenceNumber=e}}class vp{constructor(e){this.persistence=e,this.jr=new yp,this.Hr=null}static Jr(e){return new vp(e)}get Yr(){if(this.Hr)return this.Hr;throw ce()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),N.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Yr,r=>{const s=J.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return N.or([()=>N.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class Ep{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ep(e,n.fromCache,r,s)}}/**
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
 */class iL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oL{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new iL;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(Qi()<=de.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",xs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),N.resolve()):(Qi()<=de.DEBUG&&H("QueryEngine","Query:",xs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(Qi()<=de.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",xs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):N.resolve())}Hi(e,n){if(b_(n))return N.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=af(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Xi(n,a);return this.es(n,c,o,l.readTime)?this.Hi(e,af(n,null,"F")):this.ts(e,c,n,l)}))})))}Ji(e,n,r,s){return b_(n)||s.isEqual(ae.min())?N.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?N.resolve(null):(Qi()<=de.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xs(n)),this.ts(e,o,n,$x(s,-1)).next(a=>a))})}Xi(e,n){let r=new bt(hI(e));return n.forEach((s,i)=>{su(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return Qi()<=de.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",xs(n)),this.ji.getDocumentsMatchingQuery(e,n,Lr.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class aL{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new ze(Ae),this.ss=new $i(i=>dp(i),pp),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YM(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function lL(t,e,n,r){return new aL(t,e,n,r)}async function RI(t,e){const n=Ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=we();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({cs:c,removedBatchIds:o,addedBatchIds:a}))})})}function SI(t){const e=Ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function cL(t,e){const n=Ie(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(Ct.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(p,_,v){return p.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,u)&&a.push(n.Kr.updateTargetData(i,d))});let l=Vr(),c=we();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(uL(i,o,e.documentUpdates).next(u=>{l=u.ls,c=u.hs})),!r.isEqual(ae.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return N.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.rs=s,i))}function uL(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Vr();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ls:o,hs:s}})}function hL(t,e){const n=Ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function ff(t,e,n){const r=Ie(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ia(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function M_(t,e,n){const r=Ie(t);let s=ae.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=Ie(l),f=h.ss.get(u);return f!==void 0?N.resolve(h.rs.get(f)):h.Kr.getTargetData(c,u)}(r,o,xn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:we())).next(a=>(fL(r,aM(e),a),{documents:a,Ps:i})))}function fL(t,e,n){let r=t.os.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class L_{constructor(){this.activeTargetIds=dM()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dL{constructor(){this.ro=new L_,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new L_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pL{so(e){}shutdown(){}}/**
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
 */class $_{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Za=null;function zu(){return Za===null?Za=function(){return 268435456+Math.round(2147483648*Math.random())}():Za++,"0x"+Za.toString(16)}/**
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
 */const mL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gL{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const pt="WebChannelConnection";class _L extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=zu(),l=this.Do(n,r);H("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(c,i,o),this.vo(n,l,c,s).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw pi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Li}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=mL[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=zu();return new Promise((o,a)=>{const l=new Cx;l.setWithCredentials(!0),l.listenOnce(bx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ju.NO_ERROR:const u=l.getResponseJson();H(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ju.TIMEOUT:H(pt,`RPC '${e}' ${i} timed out`),a(new X(L.DEADLINE_EXCEEDED,"Request time out"));break;case ju.HTTP_ERROR:const h=l.getStatus();if(H(pt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const g=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(d.status);a(new X(g,d.message))}else a(new X(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new X(L.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{H(pt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);H(pt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Mo(e,n,r){const s=zu(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Tx(),a=Ix(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");H(pt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const g=new gL({ho:_=>{d?H(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(f||(H(pt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),H(pt,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},Po:()=>h.close()}),p=(_,v,T)=>{_.listen(v,A=>{try{T(A)}catch(E){setTimeout(()=>{throw E},0)}})};return p(h,Ya.EventType.OPEN,()=>{d||H(pt,`RPC '${e}' stream ${s} transport opened.`)}),p(h,Ya.EventType.CLOSE,()=>{d||(d=!0,H(pt,`RPC '${e}' stream ${s} transport closed`),g.mo())}),p(h,Ya.EventType.ERROR,_=>{d||(d=!0,pi(pt,`RPC '${e}' stream ${s} transport errored:`,_),g.mo(new X(L.UNAVAILABLE,"The operation could not be completed")))}),p(h,Ya.EventType.MESSAGE,_=>{var v;if(!d){const T=_.data[0];Qe(!!T);const A=T,E=A.error||((v=A[0])===null||v===void 0?void 0:v.error);if(E){H(pt,`RPC '${e}' stream ${s} received error:`,E);const D=E.status;let I=function(M){const W=qe[M];if(W!==void 0)return vI(W)}(D),R=E.message;I===void 0&&(I=L.INTERNAL,R="Unknown error status: "+D+" with message "+E.message),d=!0,g.mo(new X(I,R)),h.close()}else H(pt,`RPC '${e}' stream ${s} received:`,T),g.fo(T)}}),p(a,Ax.STAT_EVENT,_=>{_.stat===p_.PROXY?H(pt,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===p_.NOPROXY&&H(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Vo()},0),g}}function Hu(){return typeof document<"u"?document:null}/**
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
 */function PI(t){return new NM(t,!0)}/**
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
 */class kI{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class yL{constructor(e,n,r,s,i,o,a,l){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new kI(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new X(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vL extends yL{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=LM(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?Js(o.readTime):ae.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=x_(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=of(l)?{documents:$M(i,l)}:{query:VM(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=DM(i,o.resumeToken);const c=uf(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=OM(i,o.snapshotVersion.toTimestamp());const c=uf(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=UM(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=x_(this.serializer),n.removeTarget=e,this.n_(n)}}/**
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
 */class EL extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new X(L.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(L.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(L.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class wL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(cr(n),this.p_=!1):H("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class TL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{Ca(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Ie(l);c.F_.add(4),await Aa(c),c.O_.set("Unknown"),c.F_.delete(4),await lu(c)}(this))})}),this.O_=new wL(r,s)}}async function lu(t){if(Ca(t))for(const e of t.M_)await e(!0)}async function Aa(t){for(const e of t.M_)await e(!1)}function NI(t,e){const n=Ie(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Ip(n)?Tp(n):Vi(n).Yo()&&wp(n,e))}function OI(t,e){const n=Ie(t),r=Vi(n);n.v_.delete(e),r.Yo()&&DI(n,e),n.v_.size===0&&(r.Yo()?r.e_():Ca(n)&&n.O_.set("Unknown"))}function wp(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vi(t).l_(e)}function DI(t,e){t.N_.Le(e),Vi(t).h_(e)}function Tp(t){t.N_=new RM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Vi(t).start(),t.O_.y_()}function Ip(t){return Ca(t)&&!Vi(t).Jo()&&t.v_.size>0}function Ca(t){return Ie(t).F_.size===0}function xI(t){t.N_=void 0}async function IL(t){t.v_.forEach((e,n)=>{wp(t,e)})}async function bL(t,e){xI(t),Ip(t)?(t.O_.b_(e),Tp(t)):t.O_.set("Unknown")}async function AL(t,e,n){if(t.O_.set("Online"),e instanceof wI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await V_(t,r)}else if(e instanceof hl?t.N_.Ge(e):e instanceof EI?t.N_.Xe(e):t.N_.He(e),!n.isEqual(ae.min()))try{const r=await SI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.v_.get(c);u&&i.v_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.v_.get(l);if(!u)return;i.v_.set(l,u.withResumeToken(Ct.EMPTY_BYTE_STRING,u.snapshotVersion)),DI(i,l);const h=new br(u.target,l,c,u.sequenceNumber);wp(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await V_(t,r)}}async function V_(t,e,n){if(!Ia(e))throw e;t.F_.add(1),await Aa(t),t.O_.set("Offline"),n||(n=()=>SI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await lu(t)})}async function F_(t,e){const n=Ie(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Ca(n);n.F_.add(3),await Aa(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await lu(n)}async function CL(t,e){const n=Ie(t);e?(n.F_.delete(2),await lu(n)):e||(n.F_.add(2),await Aa(n),n.O_.set("Unknown"))}function Vi(t){return t.B_||(t.B_=function(n,r,s){const i=Ie(n);return i.V_(),new vL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:IL.bind(null,t),Eo:bL.bind(null,t),c_:AL.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Ip(t)?Tp(t):t.O_.set("Unknown")):(await t.B_.stop(),xI(t))})),t.B_}/**
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
 */class bp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new bp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function MI(t,e){if(cr("AsyncQueue",`${e}: ${t}`),Ia(t))return new X(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Zs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=no(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class U_{constructor(){this.k_=new ze(J.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):ce():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vi{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vi(e,n,Zs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ru(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class RL{constructor(){this.Q_=void 0,this.listeners=[]}}class SL{constructor(){this.queries=new $i(e=>uI(e),ru),this.onlineState="Unknown",this.K_=new Set}}async function Ap(t,e){const n=Ie(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new RL),s)try{i.Q_=await n.onListen(r)}catch(o){const a=MI(o,`Initialization of query '${xs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&Rp(n)}async function Cp(t,e){const n=Ie(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function PL(t,e){const n=Ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&Rp(n)}function kL(t,e,n){const r=Ie(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Rp(t){t.K_.forEach(e=>{e.next()})}class Sp{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class LI{constructor(e){this.key=e}}class $I{constructor(e){this.key=e}}class NL{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=we(),this.mutatedKeys=we(),this.ua=hI(e),this.ca=new Zs(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new U_,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=su(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),p=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?g!==p&&(r.track({type:3,doc:d}),_=!0):this.Ia(f,d)||(r.track({type:2,doc:d}),_=!0,(l&&this.ua(d,l)>0||c&&this.ua(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),_=!0):f&&!d&&(r.track({type:1,doc:f}),_=!0,(l||c)&&(a=!0)),_&&(d?(o=o.add(d),i=p?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((c,u)=>function(f,d){const g=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return g(f)-g(d)}(c.type,u.type)||this.ua(c.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,i.length!==0||l?{snapshot:new vi(this.query,e.ca,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new U_,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=we(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new $I(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new LI(r))}),n}Ra(e){this.oa=e.Ps,this.aa=we();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return vi.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class OL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DL{constructor(e){this.key=e,this.ma=!1}}class xL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new $i(a=>uI(a),ru),this.pa=new Map,this.ya=new Set,this.wa=new ze(J.comparator),this.Sa=new Map,this.ba=new yp,this.Da={},this.Ca=new Map,this.va=yi.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function ML(t,e){const n=BL(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await hL(n.localStore,xn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await LL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&NI(n.remoteStore,o)}return s}async function LL(t,e,n,r,s){t.Ma=(h,f,d)=>async function(p,_,v,T){let A=_.view.ha(v);A.es&&(A=await M_(p.localStore,_.query,!1).then(({documents:I})=>_.view.ha(I,A)));const E=T&&T.targetChanges.get(_.targetId),D=_.view.applyChanges(A,p.isPrimaryClient,E);return B_(p,_.targetId,D.Ea),D.snapshot}(t,h,f,d);const i=await M_(t.localStore,e,!0),o=new NL(e,i.Ps),a=o.ha(i.documents),l=ba.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);B_(t,n,c.Ea);const u=new OL(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function $L(t,e){const n=Ie(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!ru(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ff(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),OI(n.remoteStore,r.targetId),df(n,r.targetId)}).catch(lp)):(df(n,r.targetId),await ff(n.localStore,r.targetId,!0))}async function VI(t,e){const n=Ie(t);try{const r=await cL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Qe(o.ma):s.removedDocuments.size>0&&(Qe(o.ma),o.ma=!1))}),await UI(n,r,e)}catch(r){await lp(r)}}function j_(t,e,n){const r=Ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=Ie(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.U_(a)&&(c=!0)}),c&&Rp(l)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VL(t,e,n){const r=Ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new ze(J.comparator);o=o.insert(i,yt.newNoDocument(i,ae.min()));const a=we().add(i),l=new au(ae.min(),new Map,new ze(Ae),o,a);await VI(r,l),r.wa=r.wa.remove(i),r.Sa.delete(e),Pp(r)}else await ff(r.localStore,e,!1).then(()=>df(r,e,n)).catch(lp)}function df(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||FI(t,r)})}function FI(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(OI(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Pp(t))}function B_(t,e,n){for(const r of n)r instanceof LI?(t.ba.addReference(r.key,e),FL(t,r)):r instanceof $I?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||FI(t,r.key)):ce()}function FL(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(H("SyncEngine","New document in limbo: "+n),t.ya.add(r),Pp(t))}function Pp(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new J(Ue.fromString(e)),r=t.va.next();t.Sa.set(r,new DL(n)),t.wa=t.wa.insert(n,r),NI(t.remoteStore,new br(xn(nu(n.path)),r,"TargetPurposeLimboResolution",cp.ae))}}async function UI(t,e,n){const r=Ie(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Ep.$i(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(l,c){const u=Ie(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>N.forEach(c,f=>N.forEach(f.Qi,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>N.forEach(f.Ki,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Ia(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.rs.get(f),g=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(g);u.rs=u.rs.insert(f,p)}}}(r.localStore,i))}async function UL(t,e){const n=Ie(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await RI(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(l=>{l.reject(new X(L.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await UI(n,r.cs)}}function jL(t,e){const n=Ie(t),r=n.Sa.get(e);if(r&&r.ma)return we().add(r.key);{let s=we();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function BL(t){const e=Ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=VI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VL.bind(null,e),e.fa.c_=PL.bind(null,e.eventManager),e.fa.xa=kL.bind(null,e.eventManager),e}class W_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=PI(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return lL(this.persistence,new oL,e.initialUser,this.serializer)}createPersistence(e){return new rL(vp.Jr,this.serializer)}createSharedClientState(e){return new dL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class WL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>j_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UL.bind(null,this.syncEngine),await CL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SL}()}createDatastore(e){const n=PI(e.databaseInfo.databaseId),r=function(i){return new _L(i)}(e.databaseInfo);return function(i,o,a,l){return new EL(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new TL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>j_(this.syncEngine,n,0),function(){return $_.C()?new $_:new pL}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new xL(s,i,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Ie(n);H("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Aa(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class kp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class zL{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=nI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=MI(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qu(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await RI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function z_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qL(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>F_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>F_(e.remoteStore,i)),t._onlineComponents=e}function HL(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function qL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await qu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!HL(n))throw n;pi("Error using user provided cache. Falling back to memory cache: "+n),await qu(t,new W_)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await qu(t,new W_);return t._offlineComponents}async function KL(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await z_(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await z_(t,new WL))),t._onlineComponents}async function ec(t){const e=await KL(t),n=e.eventManager;return n.onListen=ML.bind(null,e.syncEngine),n.onUnlisten=$L.bind(null,e.syncEngine),n}function GL(t,e,n={}){const r=new Or;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new kp({next:f=>{o.enqueueAndForget(()=>Cp(i,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new X(L.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new X(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new Sp(nu(a.path),u,{includeMetadataChanges:!0,Z_:!0});return Ap(i,h)}(await ec(t),t.asyncQueue,e,n,r)),r.promise}function QL(t,e,n={}){const r=new Or;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new kp({next:f=>{o.enqueueAndForget(()=>Cp(i,h)),f.fromCache&&l.source==="server"?c.reject(new X(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new Sp(a,u,{includeMetadataChanges:!0,Z_:!0});return Ap(i,h)}(await ec(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function jI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const H_=new Map;/**
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
 */function YL(t,e,n){if(!n)throw new X(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XL(t,e,n,r){if(e===!0&&r===!0)throw new X(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function q_(t){if(!J.isDocumentKey(t))throw new X(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function JL(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function Dr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=JL(t);throw new X(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class K_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Np{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new K_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new K_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sx;switch(r.type){case"firstParty":return new Ox(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=H_.get(n);r&&(H("ComponentProvider","Removing Datastore"),H_.delete(n),r.terminate())}(this),Promise.resolve()}}function ZL(t,e,n,r={}){var s;const i=(t=Dr(t,Np))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=mt.MOCK_USER;else{a=OR(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new X(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(c)}t._authCredentials=new Px(new tI(a,l))}}/**
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
 */class Ra{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ra(this.firestore,e,this._query)}}class Mn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ea(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mn(this.firestore,e,this._key)}}class ea extends Ra{constructor(e,n,r){super(e,n,nu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mn(this.firestore,null,new J(e))}withConverter(e){return new ea(this.firestore,e,this._path)}}function G_(t,e,...n){if(t=Wn(t),arguments.length===1&&(e=nI.V()),YL("doc","path",e),t instanceof Np){const r=Ue.fromString(e,...n);return q_(r),new Mn(t,null,new J(r))}{if(!(t instanceof Mn||t instanceof ea))throw new X(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return q_(r),new Mn(t.firestore,t instanceof ea?t.converter:null,new J(r))}}/**
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
 */class e${constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new kI(this,"async_queue_retry"),this.ou=()=>{const n=Hu();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Hu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Hu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Or;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Ia(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=bp.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&ce()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}function Q_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ta extends Np{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new e$}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||BI(this),this._firestoreClient.terminate()}}function t$(t,e){const n=typeof t=="object"?t:ad(),r=typeof t=="string"?t:e||"(default)",s=od(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=NR("firestore");i&&ZL(s,...i)}return s}function Op(t){return t._firestoreClient||BI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function BI(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new zx(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,jI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new zL(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class tc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tc(Ct.fromBase64String(e))}catch(n){throw new X(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tc(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class WI{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zI{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}const n$=new RegExp("[~\\*/\\[\\]]");function r$(t,e,n){if(e.search(n$)>=0)throw Y_(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new WI(...e.split("."))._internalPath}catch{throw Y_(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Y_(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(L.INVALID_ARGUMENT,a+t+l)}/**
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
 */class HI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class s$ extends HI{data(){return super.data()}}function qI(t,e){return typeof e=="string"?r$(t,e):e instanceof WI?e._internalPath:e._delegate._internalPath}/**
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
 */function KI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class i${convertValue(e,n="none"){switch(gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return eu(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new zI(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xo(e));default:return null}}convertTimestamp(e){const n=$r(e);return new kt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);Qe(CI(r));const s=new Jo(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||cr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GI extends HI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fl extends GI{data(e={}){return super.data(e)}}class QI{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new so(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fl(this._firestore,this._userDataWriter,r.key,r,new so(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new fl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new so(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new fl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new so(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:o$(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function o$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
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
 */function YI(t){t=Dr(t,Mn);const e=Dr(t.firestore,ta);return GL(Op(e),t._key).then(n=>XI(e,t,n))}class Dp extends i${constructor(e){super(),this.firestore=e}convertBytes(e){return new tc(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mn(this.firestore,null,n)}}function a$(t){t=Dr(t,Ra);const e=Dr(t.firestore,ta),n=Op(e),r=new Dp(e);return KI(t._query),QL(n,t._query).then(s=>new QI(e,r,t,s))}function xp(t,...e){var n,r,s;t=Wn(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Q_(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Q_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Mn)c=Dr(t.firestore,ta),u=nu(t._key.path),l={next:h=>{e[o]&&e[o](XI(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Dr(t,Ra);c=Dr(h.firestore,ta),u=h._query;const f=new Dp(c);l={next:d=>{e[o]&&e[o](new QI(c,f,h,d))},error:e[o+1],complete:e[o+2]},KI(t._query)}return function(f,d,g,p){const _=new kp(p),v=new Sp(d,_,g);return f.asyncQueue.enqueueAndForget(async()=>Ap(await ec(f),v)),()=>{_.La(),f.asyncQueue.enqueueAndForget(async()=>Cp(await ec(f),v))}}(Op(c),u,a,l)}function XI(t,e,n){const r=n.docs.get(e._key),s=new Dp(t);return new GI(t,s,e._key,r,new so(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Li=s})(Fr),$n(new mn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ta(new kx(r.getProvider("auth-internal")),new xx(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new X(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jo(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Wt(m_,"4.2.0",e),Wt(m_,"4.2.0","esm2017")})();/**
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
 */const JI="firebasestorage.googleapis.com",l$="storageBucket",c$=2*60*1e3,u$=10*60*1e3;/**
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
 */class zn extends Bn{constructor(e,n,r=0){super(Ku(e),`Firebase Storage: ${n} (${Ku(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,zn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ku(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var jn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(jn||(jn={}));function Ku(t){return"storage/"+t}function h$(){const t="An unknown error occurred, please check the error payload for server response.";return new zn(jn.UNKNOWN,t)}function f$(){return new zn(jn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function d$(){return new zn(jn.CANCELED,"User canceled the upload/download.")}function p$(t){return new zn(jn.INVALID_URL,"Invalid URL '"+t+"'.")}function m$(t){return new zn(jn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function X_(t){return new zn(jn.INVALID_ARGUMENT,t)}function ZI(){return new zn(jn.APP_DELETED,"The Firebase app was deleted.")}function g$(t){return new zn(jn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class an{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=an.makeFromUrl(e,n)}catch{return new an(e,"")}if(r.path==="")return r;throw m$(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),g={bucket:1,path:3},p=n===JI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",v=new RegExp(`^https?://${p}/${s}/${_}`,"i"),A=[{regex:a,indices:l,postModify:i},{regex:d,indices:g,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<A.length;E++){const D=A[E],I=D.regex.exec(e);if(I){const R=I[D.indices.bucket];let b=I[D.indices.path];b||(b=""),r=new an(R,b),D.postModify(r);break}}if(r==null)throw p$(e);return r}}class _${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function y$(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(..._){c||(c=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(d,l())},_)}function f(){i&&clearTimeout(i)}function d(_,...v){if(c){f();return}if(_){f(),u.call(null,_,...v);return}if(l()||o){f(),u.call(null,_,...v);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,h(A)}let g=!1;function p(_){g||(g=!0,f(),!c&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,p(!0)},n),p}function v$(t){t(!1)}/**
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
 */function E$(t){return t!==void 0}function J_(t,e,n,r){if(r<e)throw X_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw X_(`Invalid value for '${t}'. Expected ${n} or less.`)}function w$(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var nc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(nc||(nc={}));/**
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
 */function T$(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class I${constructor(e,n,r,s,i,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new el(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===nc.NO_ERROR,l=i.getStatus();if(!a||T$(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===nc.ABORT;r(!1,new el(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new el(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());E$(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=h$();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?ZI():d$();o(l)}else{const l=f$();o(l)}};this.canceled_?n(!1,new el(!1,null,!0)):this.backoffId_=y$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&v$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class el{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function b$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function A$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function C$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function R$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function S$(t,e,n,r,s,i,o=!0){const a=w$(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return C$(c,e),b$(c,n),A$(c,i),R$(c,r),new I$(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function P$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function k$(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class rc{constructor(e,n){this._service=e,n instanceof an?this._location=n:this._location=an.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rc(e,n)}get root(){const e=new an(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return k$(this._location.path)}get storage(){return this._service}get parent(){const e=P$(this._location.path);if(e===null)return null;const n=new an(this._location.bucket,e);return new rc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw g$(e)}}function Z_(t,e){const n=e==null?void 0:e[l$];return n==null?null:an.makeFromBucketSpec(n,t)}class N${constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=JI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c$,this._maxUploadRetryTime=u$,this._requests=new Set,s!=null?this._bucket=an.makeFromBucketSpec(s,this._host):this._bucket=Z_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=an.makeFromBucketSpec(this._url,e):this._bucket=Z_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new _$(ZI());{const o=S$(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ey="@firebase/storage",ty="0.11.2";/**
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
 */const O$="storage";function D$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new N$(n,r,s,e,Fr)}function x$(){$n(new mn(O$,D$,"PUBLIC").setMultipleInstances(!0)),Wt(ey,ty,""),Wt(ey,ty,"esm2017")}x$();const Gu=new WeakMap;function e0(t,e){return Gu.has(e)||Gu.set(e,t||{f:{},r:{},s:{},u:{}}),Gu.get(e)}function M$(t,e,n,r){if(!t)return n;const[s,i]=t0(t);if(!s)return n;const o=e0(void 0,r)[s]||{},a=e||i;return a&&a in o?o[a]:n}function L$(t,e,n,r){if(!t)return;const[s,i]=t0(t);if(!s)return;const o=e0(void 0,r)[s],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(Rn),a}function t0(t){return SN(t)||PN(t)?["f",t.path]:kN(t)?["r",t.toString()]:NN(t)?["s",t.toString()]:[]}const Qu=new WeakMap;function $$(t,e,n){const r=ca();Qu.has(r)||Qu.set(r,new Map);const s=Qu.get(r),i=L$(e,n,t,r);return i&&s.set(i,t),i?()=>s.delete(i):Rn}const V$={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function pf(t,e,n,r){if(!CN(t))return[t,{}];const s=[{},{}],i=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const g=Object.getOwnPropertyDescriptor(a,d);g&&!g.enumerable&&Object.defineProperty(h,d,g)});for(const d in a){const g=a[d];if(g==null||g instanceof Date||g instanceof kt||g instanceof zI)h[d]=g;else if(_d(g)){const p=c+d;h[d]=p in n?l[d]:g.path,f[p]=g.converter?g:g.withConverter(r.converter)}else if(Array.isArray(g)){h[d]=Array(g.length);for(let p=0;p<g.length;p++){const _=g[p];_&&_.path in i&&(h[d][p]=i[_.path])}o(g,l[d]||h[d],c+d+".",[h[d],f])}else Es(g)?(h[d]={},o(g,l[d],c+d+".",[h[d],f])):h[d]=g}}return o(t,e,"",s),s}const Mp={reset:!1,wait:!0,maxRefDepth:2,converter:V$,snapshotOptions:{serverTimestamps:"estimate"}};function sc(t){for(const e in t)t[e].unsub()}function mf(t,e,n,r,s,i,o,a,l){const[c,u]=pf(r.data(t.snapshotOptions),gd(e,n),s,t);i.set(e,n,c),gf(t,e,n,s,u,i,o,a,l)}function F$({ref:t,target:e,path:n,depth:r,resolve:s,reject:i,ops:o},a){const l=Object.create(null);let c=Rn;return a.once?YI(t).then(u=>{u.exists()?mf(a,e,n,u,l,o,r,s,i):(o.set(e,n,null),s())}).catch(i):c=xp(t,u=>{u.exists()?mf(a,e,n,u,l,o,r,s,i):(o.set(e,n,null),s())},i),()=>{c(),sc(l)}}function gf(t,e,n,r,s,i,o,a,l){const c=Object.keys(s);if(Object.keys(r).filter(p=>c.indexOf(p)<0).forEach(p=>{r[p].unsub(),delete r[p]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function g(p){p in d&&++h>=f&&a(n)}c.forEach(p=>{const _=r[p],v=s[p],T=`${n}.${p}`;if(d[T]=!0,_)if(_.path!==v.path)_.unsub();else return;r[p]={data:()=>gd(e,T),unsub:F$({ref:v,target:e,path:T,depth:o,ops:i,resolve:g.bind(null,T),reject:l},t),path:v.path}})}function U$(t,e,n,r,s,i){const o=Object.assign({},Mp,i),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=Ve(c?[]:t.value);c||n.set(t,h,[]);const d=r;let g,p=Rn;const _=[],v={added:({newIndex:A,doc:E})=>{_.splice(A,0,Object.create(null));const D=_[A],[I,R]=pf(E.data(l),void 0,D,o);n.add(qn(f),A,I),gf(o,f,`${h}.${A}`,D,R,n,0,r.bind(null,E),s)},modified:({oldIndex:A,newIndex:E,doc:D})=>{const I=qn(f),R=_[A],b=I[A],[M,W]=pf(D.data(l),b,R,o);_.splice(E,0,R),n.remove(I,A),n.add(I,E,M),gf(o,f,`${h}.${E}`,R,W,n,0,r,s)},removed:({oldIndex:A})=>{const E=qn(f);n.remove(E,A),sc(_.splice(A,1)[0])}};function T(A){const E=A.docChanges(a);if(!g&&E.length){g=!0;let D=0;const I=E.length,R=Object.create(null);for(let b=0;b<I;b++)R[E[b].doc.id]=!0;r=b=>{b&&b.id in R&&++D>=I&&(c&&(n.set(t,h,qn(f)),f=t),d(qn(f)),r=Rn)}}E.forEach(D=>{v[D.type](D)}),E.length||(c&&(n.set(t,h,qn(f)),f=t),r(qn(f)))}return u?a$(e).then(T).catch(s):p=xp(e,T,s),A=>{if(p(),A){const E=typeof A=="function"?A():[];n.set(t,h,E)}_.forEach(sc)}}function j$(t,e,n,r,s,i){const o=Object.assign({},Mp,i),a="value",l=Object.create(null);r=ON(r,()=>gd(t,a));let c=Rn;function u(h){h.exists()?mf(o,t,a,h,l,n,0,r,s):(n.set(t,a,null),r(null))}return o.once?YI(e).then(u).catch(s):c=xp(e,u,s),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}sc(l)}}const ny=Symbol();function B$(t,e){let n=Rn;const r=Object.assign({},Mp,e),s=qn(t),i=r.target||Ve();xN()&&(r.once=!0);const o=M$(s,r.ssrKey,ny,ca()),a=o!==ny;a&&(i.value=o);let l=!a;const c=Ve(!1),u=Ve(),h=nv(),f=jy();let d=Rn;function g(){let v=qn(t);const T=new Promise((A,E)=>{if(n(r.reset),!v)return n=Rn,A(null);c.value=l,l=!0,v.converter||(v=v.withConverter(r.converter)),n=(_d(v)?j$:U$)(i,v,W$,A,E,r)}).catch(A=>(h.value===T&&(u.value=A),Promise.reject(A))).finally(()=>{h.value===T&&(c.value=!1)});h.value=T}let p=Rn;je(t)&&(p=Yt(t,g)),g(),s&&(d=$$(h.value,s,r.ssrKey)),No()&&mv(()=>h.value),f&&cb(_);function _(v=r.reset){p(),d(),n(v)}return Object.defineProperties(i,{error:{get:()=>u},data:{get:()=>i},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>_}})}const W$={set:(t,e,n)=>bN(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function ry(t,e){return B$(t,e)}function z$(t){return(e,n)=>{const r=MN(e,n).run(()=>Ve(t));UE.set(e,r),$N(r,e)}}function H$(t){return IN?LE(ca(t)):null}function q$(t,{firebaseApp:e,modules:n=[]}){t.provide(FE,e);for(const r of n)r(e,t)}const K$=t=>(qf("data-v-2fa153f2"),t=t(),Kf(),t),G$={class:"greetings"},Q$={class:"green"},Y$=K$(()=>Mt("h3",null,"Zakłady wyborcze 2023",-1)),X$={key:0},J$={key:1},Z$=vs({__name:"HelloWorld",props:{msg:{}},setup(t){const e=H$(),n=new Yn,r=Ve(null);function s(){r.value=null,e&&ok(e,n).catch(a=>{console.error("Failed sign",a),r.value=a})}function i(){e&&FP(e)}const o=jE();return(a,l)=>{var c,u;return bn(),Qn("div",G$,[Mt("h1",Q$,ao(a.msg),1),Y$,ut(o)?(bn(),Qn("div",X$,[Mt("p",null,"Witaj "+ao((c=ut(o))==null?void 0:c.displayName),1),Mt("p",null,"Zalogowano jako: "+ao((u=ut(o))==null?void 0:u.email),1),Mt("button",{onClick:i,class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 active:bg-blue-800"}," Wyloguj ")])):(bn(),Qn("div",J$,[Mt("img",{width:"200",onClick:s,src:TR})]))])}}});const Lp=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},eV=Lp(Z$,[["__scopeId","data-v-2fa153f2"]]),tV=t=>(qf("data-v-d6f9d14f"),t=t(),Kf(),t),nV=tV(()=>Mt("img",{alt:"Vue logo",class:"logo",src:EC,width:"300"},null,-1)),rV={class:"wrapper"},sV={class:"px-3"},iV=vs({__name:"App",setup(t){return(e,n)=>(bn(),Qn(tn,null,[Mt("header",null,[nV,Mt("div",rV,[rt(eV,{msg:"Zakłady"}),Mt("nav",null,[rt(ut(_h),{to:"/"},{default:oh(()=>[Il("Strona główna")]),_:1}),rt(ut(_h),{to:"/about"},{default:oh(()=>[Il("Zasady")]),_:1})])])]),Mt("div",sV,[rt(ut(jv))])],64))}});const oV=Lp(iV,[["__scopeId","data-v-d6f9d14f"]]),aV="modulepreload",lV=function(t){return"/"+t},sy={},cV=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=lV(i),i in sy)return;sy[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":aV,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},uV=t=>(qf("data-v-173e2a06"),t=t(),Kf(),t),hV={key:0},fV={key:0,class:"my-3"},dV=uV(()=>Mt("h3",null,"Twoje typy:",-1)),pV={key:1},mV=vs({__name:"HomeView",setup(t){var s;const e=jE();let n=ry(G_(Oy,"predictions",String((s=e.value)==null?void 0:s.email))),r=Ve({PiS:void 0,KO:void 0,TD:void 0,Lewica:void 0,Konfa:void 0,BS:void 0});return Yt(()=>n.value,i=>{r.value={...i}}),Yt(()=>e.value,()=>{var i;n=ry(G_(Oy,"predictions",String((i=e.value)==null?void 0:i.email)))}),(i,o)=>(_v("FormKit"),ut(e)?(bn(),Qn("main",hV,[ut(n)?(bn(),Qn("div",fV,[dV,(bn(!0),Qn(tn,null,mA(Object.keys(ut(n)),(a,l)=>(bn(),Qn("p",{key:l},ao(a)+" - "+ao(ut(n)[a])+"%",1))),128))])):ym("",!0),ym("",!0)])):(bn(),Qn("main",pV," Najpierw musisz się zalogować ")))}});const gV=Lp(mV,[["__scopeId","data-v-173e2a06"]]),_V=ER({history:VC("/"),routes:[{path:"/",name:"home",component:gV},{path:"/about",name:"about",component:()=>cV(()=>import("./AboutView-b6ba8a90.js"),["assets/AboutView-b6ba8a90.js","assets/AboutView-e9670c66.css"])}]}),n0=["__key","__init","__shim","__original","__index","__prevKey"];function Fi(){return Math.random().toString(36).substring(2,15)}function yV(t,e){const n=t instanceof Set?t:new Set(t);return e&&e.forEach(r=>n.add(r)),[...n]}function re(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Nt(t,e,n=!0,r=["__key"]){if(t===e)return!0;if(typeof e=="object"&&typeof t=="object"){if(t instanceof Map||t instanceof Set)return!1;if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(t instanceof RegExp&&e instanceof RegExp)return vV(t,e);if(t===null||e===null||Object.keys(t).length!==Object.keys(e).length)return!1;for(const s of r)if((s in t||s in e)&&t[s]!==e[s])return!1;for(const s in t)if(!(s in e)||t[s]!==e[s]&&!n||n&&!Nt(t[s],e[s],n,r))return!1;return!0}return!1}function vV(t,e){return t.source===e.source&&t.flags.split("").sort().join("")===e.flags.split("").sort().join("")}function Xt(t){const e=typeof t;if(e==="number")return!1;if(t===void 0)return!0;if(e==="string")return t==="";if(e==="object"){if(t===null)return!0;for(const n in t)return!1;return!(t instanceof RegExp||t instanceof Date)}return!1}function EV(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function wV(t){const e=`^${EV(t)}$`,n={MM:"(0[1-9]|1[012])",M:"([1-9]|1[012])",DD:"([012][0-9]|3[01])",D:"([012]?[0-9]|3[01])",YYYY:"\\d{4}",YY:"\\d{2}"},r=Object.keys(n);return new RegExp(r.reduce((s,i)=>s.replace(i,n[i]),e))}function _f(t){return Object.prototype.toString.call(t)==="[object Object]"}function bo(t){return _f(t)||Array.isArray(t)}function Ei(t){if(_f(t)===!1||t.__FKNode__||t.__POJO__===!1)return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(_f(n)===!1||n.hasOwnProperty("isPrototypeOf")===!1)}function _s(t,e,n=!1,r=!1){if(e===null)return null;const s={};if(typeof e=="string")return e;for(const i in t)if(re(e,i)&&(e[i]!==void 0||!r)){if(n&&Array.isArray(t[i])&&Array.isArray(e[i])){s[i]=t[i].concat(e[i]);continue}if(e[i]===void 0)continue;Ei(t[i])&&Ei(e[i])?s[i]=_s(t[i],e[i],n,r):s[i]=e[i]}else s[i]=t[i];for(const i in e)!re(s,i)&&e[i]!==void 0&&(s[i]=e[i]);return s}function TV(t){if(t[0]!=='"'&&t[0]!=="'"||t[0]!==t[t.length-1])return!1;const e=t[0];for(let n=1;n<t.length;n++)if(t[n]===e&&(n===1||t[n-1]!=="\\")&&n!==t.length-1)return!1;return!0}function IV(t){if(!t.length)return"";let e="",n="";for(let r=0;r<t.length;r++){const s=t.charAt(r);(s!=="\\"||n==="\\")&&(e+=s),n=s}return e}function Os(...t){return t.reduce((e,n)=>{const{value:r,name:s,modelValue:i,config:o,plugins:a,...l}=n;return Object.assign(e,l)},{})}function bV(t){const e=[];let n="",r=0,s="",i="";for(let o=0;o<t.length;o++){const a=t.charAt(o);a===s&&i!=="\\"?s="":(a==="'"||a==='"')&&!s&&i!=="\\"?s=a:a==="("&&!s?r++:a===")"&&!s&&r--,a===","&&!s&&r===0?(e.push(n),n=""):(a!==" "||s)&&(n+=a),i=a}return n&&e.push(n),e}function iy(t,e){const n={},r=e.filter(i=>i instanceof RegExp),s=new Set(e);for(const i in t)!s.has(i)&&!r.some(o=>o.test(i))&&(n[i]=t[i]);return n}function oy(t,e){const n={},r=e.filter(s=>s instanceof RegExp);return e.forEach(s=>{s instanceof RegExp||(n[s]=t[s])}),Object.keys(t).forEach(s=>{r.some(i=>i.test(s))&&(n[s]=t[s])}),n}function ei(t){return t.replace(/-([a-z0-9])/gi,(e,n)=>n.toUpperCase())}function r0(t){return t.replace(/([a-z0-9])([A-Z])/g,(e,n,r)=>n+"-"+r.toLowerCase()).replace(" ","-").toLowerCase()}function yf(t,e=n0){if(t!==null&&typeof t=="object"){let n;if(Array.isArray(t)?n=[...t]:Ei(t)&&(n={...t}),n)return CV(t,n,e),n}return t}function wi(t,e=n0){if(t===null||t instanceof RegExp||t instanceof Date||t instanceof Map||t instanceof Set||typeof File=="function"&&t instanceof File)return t;let n;Array.isArray(t)?n=t.map(r=>typeof r=="object"?wi(r,e):r):n=Object.keys(t).reduce((r,s)=>(r[s]=typeof t[s]=="object"?wi(t[s],e):t[s],r),{});for(const r of e)r in t&&Object.defineProperty(n,r,{enumerable:!1,value:t[r]});return n}function ln(t){return typeof t=="object"?wi(t):t}function AV(t,e){if(!t||typeof t!="object")return null;const n=e.split(".");let r=t;for(const s in n){const i=n[s];if(re(r,i)&&(r=r[i]),+s===n.length-1)return r;if(!r||typeof r!="object")return null}return null}function cn(t){return t!==void 0&&t!=="false"&&t!==!1?!0:void 0}function Ti(t){return Object.isFrozen(t)?t:Object.defineProperty(t,"__init",{enumerable:!1,value:!0})}function $p(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g," ").trim().replace(/\s+/g,"-")}function CV(t,e,n){for(const r of n)r in t&&Object.defineProperty(e,r,{enumerable:!1,value:t[r]});return e}function RV(t){let e=!1;return(...n)=>{if(!e)return e=!0,queueMicrotask(()=>e=!1),t(...n)}}function Vp(){const t=[];let e=0;const n=s=>t.push(s),r=s=>{const i=t[e];return typeof i=="function"?i(s,o=>(e++,r(o))):(e=0,s)};return n.dispatch=r,n.unshift=s=>t.unshift(s),n.remove=s=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)},n}function s0(){const t=new Map,e=new Map;let n;const r=(s,i)=>{if(n){n.set(i.name,[s,i]);return}t.has(i.name)&&t.get(i.name).forEach(o=>{(i.origin===s||o.modifiers.includes("deep"))&&o.listener(i)}),i.bubble&&s.bubble(i)};return r.flush=()=>{t.clear(),e.clear(),n==null||n.clear()},r.on=(s,i)=>{const[o,...a]=s.split("."),l=i.receipt||Fi(),c={modifiers:a,event:o,listener:i,receipt:l};return t.has(o)?t.get(o).push(c):t.set(o,[c]),e.has(l)?e.get(l).push(o):e.set(l,[o]),l},r.off=s=>{var i;e.has(s)&&((i=e.get(s))===null||i===void 0||i.forEach(o=>{const a=t.get(o);Array.isArray(a)&&t.set(o,a.filter(l=>l.receipt!==s))}),e.delete(s))},r.pause=s=>{n||(n=new Map),s&&s.walk(i=>i._e.pause())},r.play=s=>{if(!n)return;const i=n;n=void 0,i.forEach(([o,a])=>r(o,a)),s&&s.walk(o=>o._e.play())},r}function SV(t,e,n,r,s=!0,i){return e._e(t,{payload:r,name:n,bubble:s,origin:t,meta:i}),t}function PV(t,e,n){return Pa(t.parent)&&t.parent._e(t.parent,n),t}function kV(t,e,n,r){return e._e.on(n,r)}function NV(t,e,n){return e._e.off(n),t}const Fp=Vp();Fp((t,e)=>(t.message||(t.message=`E${t.code}`),e(t)));const Up=Vp();Up((t,e)=>{t.message||(t.message=`W${t.code}`);const n=e(t);return console&&typeof console.warn=="function"&&console.warn(n.message),n});function bs(t,e={}){Up.dispatch({code:t,data:e})}function Ht(t,e={}){throw Error(Fp.dispatch({code:t,data:e}).message)}function yn(t,e){const n={blocking:!1,key:Fi(),meta:{},type:"state",visible:!0,...t};return e&&n.value&&n.meta.localize!==!1&&(n.value=e.t(n),n.meta.locale=e.config.locale),n}const ay={apply:$V,set:DV,remove:i0,filter:MV,reduce:LV,release:UV,touch:xV};function OV(t=!1){const e={};let n,r=t,s=[];const i=new Map;let o;const a=new Proxy(e,{get(...l){const[c,u]=l;return u==="buffer"?r:u==="_b"?s:u==="_m"?i:u==="_r"?o:re(ay,u)?ay[u].bind(null,e,a,n):Reflect.get(...l)},set(l,c,u){return c==="_n"?(n=u,o==="__n"&&o0(n,a),!0):c==="_b"?(s=u,!0):c==="buffer"?(r=u,!0):c==="_r"?(o=u,!0):(Ht(101,n),!1)}});return a}function DV(t,e,n,r){if(e.buffer)return e._b.push([[r]]),e;if(t[r.key]!==r){if(typeof r.value=="string"&&r.meta.localize!==!1){const i=r.value;r.value=n.t(r),r.value!==i&&(r.meta.locale=n.props.locale)}const s=`message-${re(t,r.key)?"updated":"added"}`;t[r.key]=Object.freeze(n.hook.message.dispatch(r)),n.emit(s,r)}return e}function xV(t,e){for(const n in t){const r={...t[n]};e.set(r)}}function i0(t,e,n,r){if(re(t,r)){const s=t[r];delete t[r],n.emit("message-removed",s)}return e.buffer===!0&&(e._b=e._b.filter(s=>(s[0]=s[0].filter(i=>i.key!==r),s[1]||s[0].length))),e}function MV(t,e,n,r,s){for(const i in t){const o=t[i];(!s||o.type===s)&&!r(o)&&i0(t,e,n,i)}}function LV(t,e,n,r,s){for(const i in t){const o=t[i];s=r(s,o)}return s}function $V(t,e,n,r,s){if(Array.isArray(r)){if(e.buffer){e._b.push([r,s]);return}const i=new Set(r.map(o=>(e.set(o),o.key)));typeof s=="string"?e.filter(o=>o.type!==s||i.has(o.key)):typeof s=="function"&&e.filter(o=>!s(o)||i.has(o.key))}else for(const i in r){const o=n.at(i);o?o.store.apply(r[i],s):FV(n,e,i,r[i],s)}}function VV(t,...e){const n=`${t.name}-set`,r=s=>yn({key:$p(s),type:"error",value:s,meta:{source:n,autoClear:!0}});return e.filter(s=>!!s).map(s=>{if(typeof s=="string"&&(s=[s]),Array.isArray(s))return s.map(i=>r(i));{const i={};for(const o in s)Array.isArray(s[o])?i[o]=s[o].map(a=>r(a)):i[o]=[r(s[o])];return i}})}function FV(t,e,n,r,s){var i;const o=e._m;o.has(n)||o.set(n,[]),e._r||(e._r=o0(t,e)),(i=o.get(n))===null||i===void 0||i.push([r,s])}function o0(t,e){return t.on("child.deep",({payload:n})=>{e._m.forEach((r,s)=>{t.at(s)===n&&(r.forEach(([i,o])=>{n.store.apply(i,o)}),e._m.delete(s))}),e._m.size===0&&e._r&&(t.off(e._r),e._r=void 0)})}function UV(t,e){e.buffer=!1,e._b.forEach(([n,r])=>e.apply(n,r)),e._b=[]}function jV(){const t={};let e;return{count:(...n)=>BV(e,t,...n),init(n){e=n,n.on("message-added.deep",ly(t,1)),n.on("message-removed.deep",ly(t,-1))},merge:n=>cy(e,t,n),settled(n){return re(t,n)?t[n].promise:Promise.resolve()},unmerge:n=>cy(e,t,n,!0),value(n){return re(t,n)?t[n].count:0}}}function BV(t,e,n,r,s=0){if(r=WV(r||n),!re(e,n)){const i={condition:r,count:0,name:n,node:t,promise:Promise.resolve(),resolve:()=>{}};e[n]=i,s=t.store.reduce((o,a)=>o+i.condition(a)*1,s),t.each(o=>{o.ledger.count(i.name,i.condition),s+=o.ledger.value(i.name)})}return a0(e[n],s).promise}function WV(t){return typeof t=="function"?t:e=>e.type===t}function a0(t,e){const n=t.count,r=t.count+e;return t.count=r,n===0&&r!==0?(t.node.emit(`unsettled:${t.name}`,t.count,!1),t.promise=new Promise(s=>t.resolve=s)):n!==0&&r===0&&(t.node.emit(`settled:${t.name}`,t.count,!1),t.resolve()),t.node.emit(`count:${t.name}`,t.count,!1),t}function ly(t,e){return n=>{for(const r in t){const s=t[r];s.condition(n.payload)&&a0(s,e)}}}function cy(t,e,n,r=!1){const s=t;for(const i in e){const o=e[i].condition;r||n.ledger.count(i,o);const a=n.ledger.value(i)*(r?-1:1);if(t){do t.ledger.count(i,o,a),t=t.parent;while(t);t=s}}}const jp=new Map,dl=new Map,Bp=s0(),zV=[];function HV(t){t.props.id&&(jp.set(t.props.id,t),dl.set(t,t.props.id),Bp(t,{payload:t,name:t.props.id,bubble:!1,origin:t}))}function qV(t){if(dl.has(t)){const e=dl.get(t);dl.delete(t),jp.delete(e),Bp(t,{payload:null,name:e,bubble:!1,origin:t})}}function Sa(t){return jp.get(t)}function KV(t,e){zV.push(Bp.on(t,e))}function vf(t,e,n){let r=!0;return e in t.config._t?r=!1:t.emit(`config:${e}`,n,!1),e in t.props||(t.emit("prop",{prop:e,value:n}),t.emit(`prop:${e}`,n)),r}function GV(t={}){const e=new Set,n={...t,_add:s=>e.add(s),_rm:s=>e.delete(s)};return new Proxy(n,{set(s,i,o,a){return typeof i=="string"&&e.forEach(l=>vf(l,i,o)),Reflect.set(s,i,o,a)}})}function l0(t){const e=document.getElementById(t);if(e instanceof HTMLFormElement){const n=new Event("submit",{cancelable:!0,bubbles:!0});e.dispatchEvent(n);return}bs(151,t)}function QV(t){const e=n=>{for(const r in n.store){const s=n.store[r];s.type==="error"||s.type==="ui"&&r==="incomplete"?n.store.remove(r):s.type==="state"&&n.store.set({...s,value:!1})}};e(t),t.walk(e)}function c0(t,e){const n=typeof t=="string"?Sa(t):t;if(n){const r=o=>ln(o.props.initial)||(o.type==="group"?{}:o.type==="list"?[]:void 0);n._e.pause(n);const s=ln(e);return e&&!Xt(e)&&(n.props.initial=bo(s)?Ti(s):s,n.props._init=n.props.initial),n.input(r(n),!1),n.walk(o=>{o.type==="list"&&o.sync||o.input(r(o),!1)}),n.input(Xt(s)&&s?s:r(n),!1),n.type!=="input"&&e&&!Xt(e)&&bo(e)&&n.walk(o=>{o.props.initial=bo(o.value)?Ti(o.value):o.value,o.props._init=n.props.initial}),n._e.play(n),QV(n),n.emit("reset",n),n}bs(152,t)}const YV={delimiter:".",delay:0,locale:"en",rootClasses:t=>({[`formkit-${r0(t)}`]:!0})},u0=Symbol("index"),Ef=Symbol("removed"),wf=Symbol("moved"),h0=Symbol("inserted");function XV(t){return t.type==="list"&&Array.isArray(t._value)}function Pa(t){return t&&typeof t=="object"&&t.__FKNode__===!0}const pl=(t,e,n)=>{Ht(102,[t,n])},JV={_c:ve(vF,pl,!1),add:ve(hF),addProps:ve(uF),address:ve(wF,pl,!1),at:ve(TF),bubble:ve(PV),clearErrors:ve(kF),calm:ve(aF),config:ve(!1),define:ve(cF),disturb:ve(oF),destroy:ve(lF),extend:ve(OF),hydrate:ve(sF),index:ve(yF,_F,!1),input:ve(p0),each:ve(pF),emit:ve(SV),find:ve(bF),on:ve(kV),off:ve(NV),parent:ve(!1,fF),plugins:ve(!1),remove:ve(dF),root:ve(CF,pl,!1),reset:ve(PF),resetConfig:ve(gF),setErrors:ve(_0),submit:ve(SF),t:ve(RF),use:ve(Wp),name:ve(EF,!1,!1),walk:ve(mF)};function ZV(){return new Map(Object.entries(JV))}function ve(t,e,n=!0){return{get:t?(r,s)=>n?(...i)=>t(r,s,...i):t(r,s):!1,set:e!==void 0?e:pl.bind(null)}}function eF(){const t=new Map;return new Proxy(t,{get(e,n){return t.has(n)||t.set(n,Vp()),t.get(n)}})}let f0=0,tF=0;function nF(t){var e,n;return((e=t.parent)===null||e===void 0?void 0:e.type)==="list"?u0:t.name||`${((n=t.props)===null||n===void 0?void 0:n.type)||"input"}_${++f0}`}function d0(t){return t.type==="group"?Ti(t.value&&typeof t.value=="object"&&!Array.isArray(t.value)?t.value:{}):t.type==="list"?Ti(Array.isArray(t.value)?t.value:[]):t.value}function p0(t,e,n,r=!0){return e._value=rF(t,t.hook.input.dispatch(n)),t.emit("input",e._value),t.isCreated&&t.type==="input"&&Nt(e._value,e.value)?(t.emit("commitRaw",e.value),e.settled):(e.isSettled&&t.disturb(),r?(e._tmo&&clearTimeout(e._tmo),e._tmo=setTimeout(ic,t.props.delay,t,e)):ic(t,e),e.settled)}function rF(t,e){switch(t.type){case"input":break;case"group":(!e||typeof e!="object")&&Ht(107,[t,e]);break;case"list":Array.isArray(e)||Ht(108,[t,e]);break}return e}function ic(t,e,n=!0,r=!0){e._value=e.value=t.hook.commit.dispatch(e._value),t.type!=="input"&&r&&t.hydrate(),t.emit("commitRaw",e.value),t.emit("commit",e.value),n&&t.calm()}function m0(t,{name:e,value:n,from:r}){if(!Object.isFrozen(t._value)){if(XV(t)){const s=n===Ef?[]:n===wf&&typeof r=="number"?t._value.splice(r,1):[n];t._value.splice(e,n===wf||r===h0?0:1,...s);return}n!==Ef?t._value[e]=n:delete t._value[e]}}function sF(t,e){const n=e._value;return t.type==="list"&&t.sync&&iF(t,e),e.children.forEach(r=>{if(typeof n=="object")if(r.name in n){const s=r.type!=="input"||n[r.name]&&typeof n[r.name]=="object"?Ti(n[r.name]):n[r.name];if(!r.isSettled||!bo(s)&&Nt(s,r._value))return;r.input(s,!1)}else(t.type!=="list"||typeof r.name=="number")&&m0(e,{name:r.name,value:r.value}),n.__init||(r.type==="group"?r.input({},!1):r.type==="list"?r.input([],!1):r.input(void 0,!1))}),t}function iF(t,e){const n=t._value;if(!Array.isArray(n))return;const r=[],s=new Set(e.children),i=new Map;n.forEach((a,l)=>{if(e.children[l]&&e.children[l]._value===a)r.push(e.children[l]),s.delete(e.children[l]);else{r.push(null);const c=i.get(a)||[];c.push(l),i.set(a,c)}}),s.size&&i.size&&s.forEach(a=>{if(i.has(a._value)){const l=i.get(a._value),c=l.shift();r[c]=a,s.delete(a),l.length||i.delete(a._value)}});const o=[];for(i.forEach(a=>{o.push(...a)});s.size&&o.length;){const a=s.values().next().value,l=o.shift();if(l===void 0)break;r[l]=a,s.delete(a)}o.forEach((a,l)=>{r[a]=LF({value:l})}),s.size&&s.forEach(a=>{if(!("__FKP"in a)){const l=a._c.parent;if(!l||$F(l))return;l.ledger.unmerge(a),a._c.parent=null,a.destroy()}}),e.children=r}function oF(t,e){var n;return e._d<=0&&(e.isSettled=!1,t.emit("settled",!1,!1),e.settled=new Promise(r=>{e._resolve=r}),t.parent&&((n=t.parent)===null||n===void 0||n.disturb())),e._d++,t}function aF(t,e,n){var r;if(n!==void 0&&t.type!=="input")return m0(e,n),ic(t,e,!0,!1);e._d>0&&e._d--,e._d===0&&(e.isSettled=!0,t.emit("settled",!0,!1),t.parent&&((r=t.parent)===null||r===void 0||r.calm({name:t.name,value:e.value})),e._resolve&&e._resolve(e.value))}function lF(t,e){t.emit("destroying",t),t.store.filter(()=>!1),t.parent&&(t.parent.emit("childRemoved",t),t.parent.remove(t)),qV(t),t.emit("destroyed",t),e._e.flush(),e._value=e.value=void 0;for(const n in e.context)delete e.context[n];e.plugins.clear(),e.context=null}function cF(t,e,n){e.type=n.type,e.props.definition=wi(n),e.value=e._value=d0({type:t.type,value:e.value}),n.forceTypeProp&&(t.props.type&&(t.props.originalType=t.props.type),e.props.type=n.forceTypeProp),n.family&&(e.props.family=n.family),n.features&&n.features.forEach(r=>r(t)),n.props&&t.addProps(n.props),t.emit("defined",n)}function uF(t,e,n){var r;if(t.props.attrs){const s={...t.props.attrs};t.props._emit=!1;for(const o in s){const a=ei(o);n.includes(a)&&(t.props[a]=s[o],delete s[o])}const i=ln(e._value);t.props.initial=t.type!=="input"?Ti(i):i,t.props._emit=!0,t.props.attrs=s,t.props.definition&&(t.props.definition.props=[...((r=t.props.definition)===null||r===void 0?void 0:r.props)||[],...n])}return t.emit("added-props",n),t}function hF(t,e,n,r){if(t.type==="input"&&Ht(100,t),n.parent&&n.parent!==t&&n.parent.remove(n),!e.children.includes(n)){if(r!==void 0&&t.type==="list"){const s=e.children[r];s&&"__FKP"in s?(n._c.uid=s.uid,e.children.splice(r,1,n)):e.children.splice(r,0,n),Array.isArray(t.value)&&t.value.length<e.children.length&&t.disturb().calm({name:r,value:n.value,from:h0})}else e.children.push(n);n.isSettled||t.disturb()}if(n.parent!==t){if(n.parent=t,n.parent!==t)return t.remove(n),n.parent.add(n),t}else n.use(t.plugins);return ic(t,e,!1),t.ledger.merge(n),t.emit("child",n),t}function fF(t,e,n,r){return Pa(r)?(t.parent&&t.parent!==r&&t.parent.remove(t),e.parent=r,t.resetConfig(),r.children.includes(t)?t.use(r.plugins):r.add(t),!0):r===null?(e.parent=null,!0):!1}function dF(t,e,n){const r=e.children.indexOf(n);if(r!==-1){n.isSettled&&t.disturb(),e.children.splice(r,1);let s=cn(n.props.preserve),i=n.parent;for(;s===void 0&&i;)s=cn(i.props.preserve),i=i.parent;s?t.calm():t.calm({name:t.type==="list"?r:n.name,value:Ef}),n.parent=null,n.config._rmn=n}return t.ledger.unmerge(n),t}function pF(t,e,n){e.children.forEach(r=>!("__FKP"in r)&&n(r))}function mF(t,e,n,r=!1,s=!1){e.children.some(i=>{if("__FKP"in i)return!1;const o=n(i);return r&&o===!1?!0:s&&o===!1?!1:i.walk(n,r,s)})}function gF(t,e){const n=t.parent||void 0;e.config=g0(t.config._t,n),t.walk(r=>r.resetConfig())}function Wp(t,e,n,r=!0,s=!0){return Array.isArray(n)||n instanceof Set?(n.forEach(i=>Wp(t,e,i)),t):(e.plugins.has(n)||(s&&typeof n.library=="function"&&n.library(t),r&&n(t)!==!1&&(e.plugins.add(n),t.children.forEach(i=>i.use(n)))),t)}function _F(t,e,n,r){if(Pa(t.parent)){const s=t.parent.children,i=r>=s.length?s.length-1:r<0?0:r,o=s.indexOf(t);return o===-1?!1:(s.splice(o,1),s.splice(i,0,t),t.parent.children=s,t.parent.type==="list"&&t.parent.disturb().calm({name:i,value:wf,from:o}),!0)}return!1}function yF(t){if(t.parent){const e=[...t.parent.children].indexOf(t);return e===-1?t.parent.children.length:e}return-1}function vF(t,e){return e}function EF(t,e){var n;return((n=t.parent)===null||n===void 0?void 0:n.type)==="list"?t.index:e.name!==u0?e.name:t.index}function wF(t,e){return e.parent?e.parent.address.concat([t.name]):[t.name]}function TF(t,e,n){const r=typeof n=="string"?n.split(t.config.delimiter):n;if(!r.length)return;const s=r[0];let i=t.parent;for(i||(String(r[0])===String(t.name)&&r.shift(),i=t),s==="$parent"&&r.shift();i&&r.length;){const o=r.shift();switch(o){case"$root":i=t.root;break;case"$parent":i=i.parent;break;case"$self":i=t;break;default:i=i.children.find(a=>!("__FKP"in a)&&String(a.name)===String(o))||IF(i,o)}}return i||void 0}function IF(t,e){const n=String(e).match(/^(find)\((.*)\)$/);if(n){const[,r,s]=n,i=s.split(",").map(o=>o.trim());switch(r){case"find":return t.find(i[0],i[1]);default:return}}}function bF(t,e,n,r){return AF(t,n,r)}function AF(t,e,n="name"){const r=typeof n=="string"?i=>i[n]==e:n,s=[t];for(;s.length;){const i=s.shift();if(!("__FKP"in i)){if(r(i,e))return i;s.push(...i.children)}}}function CF(t){let e=t;for(;e.parent;)e=e.parent;return e}function g0(t={},e){let n;return new Proxy(t,{get(...r){const s=r[1];if(s==="_t")return t;const i=Reflect.get(...r);if(i!==void 0)return i;if(e){const o=e.config[s];if(o!==void 0)return o}if(t.rootConfig&&typeof s=="string"){const o=t.rootConfig[s];if(o!==void 0)return o}return s==="delay"&&(n==null?void 0:n.type)==="input"?20:YV[s]},set(...r){const s=r[1],i=r[2];if(s==="_n")return n=i,t.rootConfig&&t.rootConfig._add(n),!0;if(s==="_rmn")return t.rootConfig&&t.rootConfig._rm(n),n=void 0,!0;if(!Nt(t[s],i,!1)){const o=Reflect.set(...r);return n&&(n.emit(`config:${s}`,i,!1),vf(n,s,i),n.walk(a=>vf(a,s,i),!1,!0)),o}return!0}})}function RF(t,e,n,r="ui"){const s=typeof n=="string"?{key:n,value:n,type:r}:n,i=t.hook.text.dispatch(s);return t.emit("text",i,!1),i.value}function SF(t){const e=t.name;do{if(t.props.isForm===!0)break;t.parent||Ht(106,e),t=t.parent}while(t);t.props.id&&l0(t.props.id)}function PF(t,e,n){return c0(t,n)}function _0(t,e,n,r){const s=`${t.name}-set`,i=t.hook.setErrors.dispatch({localErrors:n,childErrors:r});return VV(t,i.localErrors,i.childErrors).forEach(o=>{t.store.apply(o,a=>a.meta.source===s)}),t}function kF(t,e,n=!0,r){return _0(t,e,[]),n&&(r=r||`${t.name}-set`,t.walk(s=>{s.store.filter(i=>!(i.type==="error"&&i.meta&&i.meta.source===r))})),t}function NF(t){const e={initial:typeof t=="object"?ln(t):t};let n,r=!0;return new Proxy(e,{get(...s){const[i,o]=s;if(re(e,o))return Reflect.get(...s);if(n&&typeof o=="string"&&n.config[o]!==void 0)return n.config[o]},set(s,i,o,a){if(i==="_n")return n=o,!0;if(i==="_emit")return r=o,!0;const{prop:l,value:c}=n.hook.prop.dispatch({prop:i,value:o});if(!Nt(e[l],c,!1)||typeof c=="object"){const u=Reflect.set(s,l,c,a);return r&&(n.emit("prop",{prop:l,value:c}),typeof l=="string"&&n.emit(`prop:${l}`,c)),u}return!0}})}function OF(t,e,n,r){return e.traps.set(n,r),t}function DF(t,e){if(t.props.definition)return t.define(t.props.definition);for(const n of e){if(t.props.definition)return;typeof n.library=="function"&&n.library(t)}}function xF(t){const e=d0(t),n=g0(t.config||{},t.parent);return{_d:0,_e:s0(),uid:Symbol(),_resolve:!1,_tmo:!1,_value:e,children:yV(t.children||[]),config:n,hook:eF(),isCreated:!1,isSettled:!0,ledger:jV(),name:nF(t),parent:t.parent||null,plugins:new Set,props:NF(e),settled:Promise.resolve(e),store:OV(!0),sync:t.sync||!1,traps:ZV(),type:t.type||"input",value:e}}function MF(t,e){var n,r,s;const i=(n=e.props)===null||n===void 0?void 0:n.id;if(i||(r=e.props)===null||r===void 0||delete r.id,t.ledger.init(t.store._n=t.props._n=t.config._n=t),t.props._emit=!1,Object.assign(t.props,i?{}:{id:`input_${tF++}`},(s=e.props)!==null&&s!==void 0?s:{}),t.props._emit=!0,DF(t,new Set([...e.plugins||[],...t.parent?t.parent.plugins:[]])),e.plugins)for(const o of e.plugins)Wp(t,t._c,o,!0,!1);return t.each(o=>t.add(o)),t.parent&&t.parent.add(t,e.index),t.type==="input"&&t.children.length&&Ht(100,t),p0(t,t._c,t._value,!1),t.store.release(),i&&HV(t),t.emit("created",t),t.isCreated=!0,t}function LF(t){var e,n,r,s;return{__FKP:!0,uid:Symbol(),name:(e=t==null?void 0:t.name)!==null&&e!==void 0?e:`p_${f0++}`,value:(n=t==null?void 0:t.value)!==null&&n!==void 0?n:null,_value:(r=t==null?void 0:t.value)!==null&&r!==void 0?r:null,type:(s=t==null?void 0:t.type)!==null&&s!==void 0?s:"input",use:()=>{},input(i){return this._value=i,this.value=i,Promise.resolve()},isSettled:!0}}function $F(t){return"__FKP"in t}function VF(t){const e=t||{},n=xF(e),r=new Proxy(n,{get(...s){const[,i]=s;if(i==="__FKNode__")return!0;const o=n.traps.get(i);return o&&o.get?o.get(r,n):Reflect.get(...s)},set(...s){const[,i,o]=s,a=n.traps.get(i);return a&&a.set?a.set(r,n,i,o):Reflect.set(...s)}});return MF(r,e)}function Tf(t){return typeof t!="string"&&re(t,"$el")}function If(t){return typeof t!="string"&&re(t,"$cmp")}function $s(t){return!t||typeof t=="string"?!1:re(t,"if")&&re(t,"then")}function FF(t){return typeof t!="string"&&"$formkit"in t}function UF(t){if(typeof t=="string")return{$el:"text",children:t};if(FF(t)){const{$formkit:e,for:n,if:r,children:s,bind:i,...o}=t;return Object.assign({$cmp:"FormKit",props:{...o,type:e}},r?{if:r}:{},n?{for:n}:{},s?{children:s}:{},i?{bind:i}:{})}return t}function en(t){let e;const n=new Set,r=function(_,v){return typeof _=="function"?_(v):_},s=[{"&&":(p,_,v)=>r(p,v)&&r(_,v),"||":(p,_,v)=>r(p,v)||r(_,v)},{"===":(p,_,v)=>r(p,v)===r(_,v),"!==":(p,_,v)=>r(p,v)!==r(_,v),"==":(p,_,v)=>r(p,v)==r(_,v),"!=":(p,_,v)=>r(p,v)!=r(_,v),">=":(p,_,v)=>r(p,v)>=r(_,v),"<=":(p,_,v)=>r(p,v)<=r(_,v),">":(p,_,v)=>r(p,v)>r(_,v),"<":(p,_,v)=>r(p,v)<r(_,v)},{"+":(p,_,v)=>r(p,v)+r(_,v),"-":(p,_,v)=>r(p,v)-r(_,v)},{"*":(p,_,v)=>r(p,v)*r(_,v),"/":(p,_,v)=>r(p,v)/r(_,v),"%":(p,_,v)=>r(p,v)%r(_,v)}],i=s.reduce((p,_)=>p.concat(Object.keys(_)),[]),o=new Set(i.map(p=>p.charAt(0)));function a(p,_,v,T){const A=p.filter(E=>E.startsWith(_));return A.length?A.find(E=>T.length>=v+E.length&&T.substring(v,v+E.length)===E?E:!1):!1}function l(p,_,v=1){let T=v?_.substring(p+1).trim():_.substring(0,p).trim();if(!T.length)return-1;if(!v){const E=T.split("").reverse(),D=E.findIndex(I=>o.has(I));T=E.slice(D).join("")}const A=T[0];return s.findIndex(E=>{const D=Object.keys(E);return!!a(D,A,0,T)})}function c(p,_){let v="";const T=_.length;let A=0;for(let E=p;E<T;E++){const D=_.charAt(E);if(D==="(")A++;else if(D===")")A--;else if(A===0&&D===" ")continue;if(A===0&&a(i,D,E,_))return[v,E-1];v+=D}return[v,_.length-1]}function u(p,_=0){const v=s[_],T=p.length,A=Object.keys(v);let E=0,D=!1,I=null,R="",b=null,M,W="",K="",me="",Z="",Fe=0;const We=(ee,se)=>{ee?me+=se:R+=se};for(let ee=0;ee<T;ee++)if(W=K,K=p.charAt(ee),(K==="'"||K==='"')&&W!=="\\"&&(E===0&&!D||E&&!Z)){E?Z=K:D=K,We(E,K);continue}else if(D&&(K!==D||W==="\\")||Z&&(K!==Z||W==="\\")){We(E,K);continue}else if(D===K){D=!1,We(E,K);continue}else if(Z===K){Z=!1,We(E,K);continue}else{if(K===" ")continue;if(K==="(")E===0?Fe=ee:me+=K,E++;else if(K===")")if(E--,E===0){const se=typeof R=="string"&&R.startsWith("$")?R:void 0,he=se&&p.charAt(ee+1)===".";let Xe="";he&&([Xe,ee]=c(ee+2,p));const Ft=I?_:l(Fe,p,0),ft=l(ee,p);Ft===-1&&ft===-1?(R=h(me,-1,se,Xe),typeof R=="string"&&(R=me)):I&&(Ft>=ft||ft===-1)&&_===Ft?(b=I.bind(null,h(me,-1,se,Xe)),I=null,R=""):ft>Ft&&_===ft?R=h(me,-1,se,Xe):R+=`(${me})${he?`.${Xe}`:""}`,me=""}else me+=K;else if(E===0&&(M=a(A,K,ee,p))){ee===0&&Ht(103,[M,p]),ee+=M.length-1,ee===p.length-1&&Ht(104,[M,p]),I?R&&(b=I.bind(null,h(R,_)),I=v[M].bind(null,b),R=""):b?(I=v[M].bind(null,h(b,_)),b=null):(I=v[M].bind(null,h(R,_)),R="");continue}else We(E,K)}return R&&I&&(I=I.bind(null,h(R,_))),I=!I&&b?b:I,!I&&R&&(I=(ee,se)=>typeof ee=="function"?ee(se):ee,I=I.bind(null,h(R,_))),!I&&!R&&Ht(105,p),I}function h(p,_,v,T){if(v){const A=h(v,s.length);let E,D=T?en(`$${T}`):!1;if(typeof A=="function"){const I=bV(String(p)).map(R=>h(R,-1));return R=>{const b=A(R);return typeof b!="function"?(bs(150,v),b):(E=b(...I.map(M=>typeof M=="function"?M(R):M)),D&&(D=D.provide(M=>{const W=e(M);return M.reduce((me,Z)=>{if(Z===T||(T==null?void 0:T.startsWith(`${Z}(`))){const We=AV(E,Z);me[Z]=()=>We}else me[Z]=W[Z];return me},{})})),D?D():E)}}}else if(typeof p=="string"){if(p==="true")return!0;if(p==="false")return!1;if(p==="undefined")return;if(TV(p))return IV(p.substring(1,p.length-1));if(!isNaN(+p))return Number(p);if(_<s.length-1)return u(p,_+1);if(p.startsWith("$")){const A=p.substring(1);return n.add(A),function(D){return A in D?D[A]():void 0}}return p}return p}const f=u(t.startsWith("$:")?t.substring(2):t),d=Array.from(n);function g(p){return e=p,Object.assign(f.bind(null,p(d)),{provide:g})}return Object.assign(f,{provide:g})}function ml(t,e,n){return n?typeof n=="string"?n.split(" ").reduce((s,i)=>Object.assign(s,{[i]:!0}),{}):typeof n=="function"?ml(t,e,n(e,t)):n:{}}function jF(t,e,...n){const r=n.reduce((s,i)=>{if(!i)return Yu(s);const{$reset:o,...a}=i;return Yu(o?a:Object.assign(s,a))},{});return Object.keys(t.hook.classes.dispatch({property:e,classes:r}).classes).filter(s=>r[s]).join(" ")||null}function Yu(t){const e="$remove:";let n=!1;const r=Object.keys(t).filter(s=>(t[s]&&s.startsWith(e)&&(n=!0),t[s]));return r.length>1&&n&&r.filter(i=>i.startsWith(e)).map(i=>{const o=i.substring(e.length);t[o]=!1,t[i]=!1}),t}function BF(t,e,n){const r=Sa(t);r?r.setErrors(e,n):bs(651,t)}function WF(t,e=!0){const n=Sa(t);n?n.clearErrors(e):bs(652,t)}const oc="1.2.2",y0=new WeakSet;function na(t,e){const n=e||Object.assign(new Map,{active:!1}),r=new Map,s=function(u){var h;n.active&&(n.has(t)||n.set(t,new Set),(h=n.get(t))===null||h===void 0||h.add(u))},i=function(u){return new Proxy(u,{get(...h){return typeof h[1]=="string"&&s(`prop:${h[1]}`),Reflect.get(...h)}})},o=function(u){return new Proxy(u,{get(...h){return h[1]==="value"?f=>(s(`count:${f}`),u.value(f)):Reflect.get(...h)}})},a=function(u,h){return Pa(u)?na(u,n):(h==="value"&&s("commit"),h==="_value"&&s("input"),h==="props"?i(u):h==="ledger"?o(u):u)},{proxy:l,revoke:c}=Proxy.revocable(t,{get(...u){switch(u[1]){case"_node":return t;case"deps":return n;case"watch":return(f,d)=>w0(l,f,d);case"observe":return()=>{const f=new Map(n);return n.clear(),n.active=!0,f};case"stopObserve":return()=>{const f=new Map(n);return n.active=!1,f};case"receipts":return r;case"kill":return()=>{E0(r),y0.add(u[2]),c()}}const h=Reflect.get(...u);return typeof h=="function"?(...f)=>{const d=h(...f);return a(d,u[1])}:a(h,u[1])}});return l}function v0(t,[e,n],r){e.forEach((s,i)=>{s.forEach(o=>{var a;t.receipts.has(i)||t.receipts.set(i,{}),t.receipts.set(i,Object.assign((a=t.receipts.get(i))!==null&&a!==void 0?a:{},{[o]:i.on(o,r)}))})}),n.forEach((s,i)=>{s.forEach(o=>{if(t.receipts.has(i)){const a=t.receipts.get(i);a&&re(a,o)&&(i.off(a[o]),delete a[o],t.receipts.set(i,a))}})})}function E0(t){t.forEach((e,n)=>{for(const r in e)n.off(e[r])})}function w0(t,e,n){const r=o=>{const a=t.stopObserve();v0(t,T0(s,a),()=>w0(t,e,n)),n&&n(o)},s=new Map(t.deps);t.observe();const i=e(t);i instanceof Promise?i.then(o=>r(o)):r(i)}function T0(t,e){const n=new Map,r=new Map;return e.forEach((s,i)=>{if(!t.has(i))n.set(i,s);else{const o=new Set,a=t.get(i);s.forEach(l=>!(a!=null&&a.has(l))&&o.add(l)),n.set(i,o)}}),t.forEach((s,i)=>{if(!e.has(i))r.set(i,s);else{const o=new Set,a=e.get(i);s.forEach(l=>!(a!=null&&a.has(l))&&o.add(l)),r.set(i,o)}}),[n,r]}function I0(t){return y0.has(t)}const bf=yn({type:"state",blocking:!0,visible:!1,value:!0,key:"validating"});function zF(t={}){return function(n){let r=ln(n.props.validationRules||{}),s={...t,...r},i=na(n);const o={input:Fi(),rerun:null,isPassing:!0};let a=ln(n.props.validation);n.on("prop:validation",({payload:c})=>l(c,r)),n.on("prop:validationRules",({payload:c})=>l(a,c));function l(c,u){var h;Nt(Object.keys(r||{}),Object.keys(u||{}))&&Nt(a,c)||(r=ln(u),a=ln(c),s={...t,...r},E0(i.receipts),(h=n.props.parsedRules)===null||h===void 0||h.forEach(f=>{var d;f.messageObserver=(d=f.messageObserver)===null||d===void 0?void 0:d.kill()}),n.store.filter(()=>!1,"validation"),n.props.parsedRules=hy(c,s),i.kill(),i=na(n),Af(i,n.props.parsedRules,o))}n.props.parsedRules=hy(a,s),Af(i,n.props.parsedRules,o)}}function Af(t,e,n){I0(t)||(n.input=Fi(),n.isPassing=!0,t.store.filter(r=>!r.meta.removeImmediately,"validation"),e.forEach(r=>r.debounce&&clearTimeout(r.timer)),e.length&&(t.store.set(bf),Cf(0,e,t,n,!1,()=>{t.store.remove(bf.key)})))}function Cf(t,e,n,r,s,i){const o=e[t];if(!o)return i();const a=r.input;o.state=null;function l(c,u){r.isPassing=r.isPassing&&!!u,o.queued=!1;const h=n.stopObserve();v0(n,T0(o.deps,h),()=>{try{n.store.set(bf)}catch{}o.queued=!0,r.rerun&&clearTimeout(r.rerun),r.rerun=setTimeout(Af,0,n,e,r)}),o.deps=h,r.input===a&&(o.state=u,u===!1?KF(n,o,s||c):qF(n,o),e.length>t+1?Cf(t+1,e,n,r,s||c,i):i())}(!Xt(n.value)||!o.skipEmpty)&&(r.isPassing||o.force)?o.queued?HF(o,n,c=>{c instanceof Promise?c.then(u=>l(!0,u)):l(!1,c)}):Cf(t+1,e,n,r,s,i):Xt(n.value)&&o.skipEmpty&&r.isPassing?(n.observe(),n.value,l(!1,r.isPassing)):l(!1,null)}function HF(t,e,n){t.debounce?t.timer=setTimeout(()=>{e.observe(),n(t.rule(e,...t.args))},t.debounce):(e.observe(),n(t.rule(e,...t.args)))}function qF(t,e){const n=`rule_${e.name}`;e.messageObserver&&(e.messageObserver=e.messageObserver.kill()),re(t.store,n)&&t.store.remove(n)}function KF(t,e,n){I0(t)||(e.messageObserver||(e.messageObserver=na(t._node)),e.messageObserver.watch(r=>QF(r,e),r=>{const s=GF(t,e,r),i=yn({blocking:e.blocking,key:`rule_${e.name}`,meta:{messageKey:e.name,removeImmediately:n,localize:!s,i18nArgs:r},type:"validation",value:s||"This field is not valid."});t.store.set(i)}))}function GF(t,e,n){const r=t.props.validationMessages&&re(t.props.validationMessages,e.name)?t.props.validationMessages[e.name]:void 0;return typeof r=="function"?r(...n):r}function QF(t,e){return[{node:t,name:zp(t),args:e.args}]}function zp(t){return typeof t.props.validationLabel=="function"?t.props.validationLabel(t):t.props.validationLabel||t.props.label||t.props.name||String(t.name)}const b0="(?:[\\*+?()0-9]+)",A0="[a-zA-Z][a-zA-Z0-9_]+",YF=new RegExp(`^(${b0}?${A0})(?:\\:(.*)+)?$`,"i"),XF=new RegExp(`^(${b0})(${A0})$`,"i"),JF=/([\*+?]+)?(\(\d+\))([\*+?]+)?/,uy=/\(\d+\)/,ZF={blocking:!0,debounce:0,force:!1,skipEmpty:!0,name:""};function hy(t,e){return t?(typeof t=="string"?eU(t):wi(t)).reduce((r,s)=>{let i=s.shift();const o={};if(typeof i=="string"){const[a,l]=nU(i);re(e,a)&&(i=e[a],Object.assign(o,l))}return typeof i=="function"&&r.push({rule:i,args:s,timer:0,state:null,queued:!0,deps:new Map,...ZF,...rU(o,i)}),r},[]):[]}function eU(t){return t.split("|").reduce((e,n)=>{const r=tU(n);return r&&e.push(r),e},[])}function tU(t){const e=t.trim();if(e){const n=e.match(YF);if(n&&typeof n[1]=="string"){const r=n[1].trim(),s=n[2]&&typeof n[2]=="string"?n[2].split(",").map(i=>i.trim()):[];return[r,...s]}}return!1}function nU(t){const e=t.match(XF);if(!e)return[t,{name:t}];const n={"*":{force:!0},"+":{skipEmpty:!1},"?":{blocking:!1}},[,r,s]=e,i=uy.test(r)?r.match(JF)||[]:[,r];return[s,[i[1],i[2],i[3]].reduce((o,a)=>(a&&(uy.test(a)?o.debounce=parseInt(a.substr(1,a.length-1)):a.split("").forEach(l=>re(n,l)&&Object.assign(o,n[l]))),o),{name:s})]}function rU(t,e){return t.name||(t.name=e.ruleName||e.name),["skipEmpty","force","debounce","blocking"].reduce((n,r)=>(re(e,r)&&!re(n,r)&&Object.assign(n,{[r]:e[r]}),n),t)}function B(t){return t[0].toUpperCase()+t.substr(1)}function ac(t,e="or"){return t.reduce((n,r,s)=>(n+=r,s<=t.length-2&&t.length>2&&(n+=", "),s===t.length-2&&(n+=`${t.length===2?" ":""}${e} `),n),"")}function Ar(t){const e=typeof t=="string"?new Date(Date.parse(t)):t;return e instanceof Date?new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"}).format(e):"(unknown)"}function C0(t,e){return Number(t)>=Number(e)?[e,t]:[t,e]}const sU={add:"Add",remove:"Remove",removeAll:"Remove all",incomplete:"Sorry, not all fields are filled out correctly.",submit:"Submit",noFiles:"No file chosen",moveUp:"Move up",moveDown:"Move down",isLoading:"Loading...",loadMore:"Load more",next:"Next",prev:"Previous",addAllValues:"Add all values",addSelectedValues:"Add selected values",removeAllValues:"Remove all values",removeSelectedValues:"Remove selected values",chooseDate:"Choose date",changeDate:"Change date",invalidDate:"The selected date is invalid.",summaryHeader:"There were errors in your form.",close:"Close"},iU={accepted({name:t}){return`Please accept the ${t}.`},date_after({name:t,args:e}){return Array.isArray(e)&&e.length?`${B(t)} must be after ${Ar(e[0])}.`:`${B(t)} must be in the future.`},alpha({name:t}){return`${B(t)} can only contain alphabetical characters.`},alphanumeric({name:t}){return`${B(t)} can only contain letters and numbers.`},alpha_spaces({name:t}){return`${B(t)} can only contain letters and spaces.`},contains_alpha({name:t}){return`${B(t)} must contain alphabetical characters.`},contains_alphanumeric({name:t}){return`${B(t)} must contain letters or numbers.`},contains_alpha_spaces({name:t}){return`${B(t)} must contain letters or spaces.`},contains_symbol({name:t}){return`${B(t)} must contain a symbol.`},contains_uppercase({name:t}){return`${B(t)} must contain an uppercase letter.`},contains_lowercase({name:t}){return`${B(t)} must contain a lowercase letter.`},contains_numeric({name:t}){return`${B(t)} must contain numbers.`},symbol({name:t}){return`${B(t)} must be a symbol.`},uppercase({name:t}){return`${B(t)} can only contain uppercase letters.`},lowercase({name:t}){return`${B(t)} can only contain lowercase letters.`},date_before({name:t,args:e}){return Array.isArray(e)&&e.length?`${B(t)} must be before ${Ar(e[0])}.`:`${B(t)} must be in the past.`},between({name:t,args:e}){if(isNaN(e[0])||isNaN(e[1]))return"This field was configured incorrectly and can’t be submitted.";const[n,r]=C0(e[0],e[1]);return`${B(t)} must be between ${n} and ${r}.`},confirm({name:t}){return`${B(t)} does not match.`},date_format({name:t,args:e}){return Array.isArray(e)&&e.length?`${B(t)} is not a valid date, please use the format ${e[0]}`:"This field was configured incorrectly and can’t be submitted"},date_between({name:t,args:e}){return`${B(t)} must be between ${Ar(e[0])} and ${Ar(e[1])}`},email:"Please enter a valid email address.",ends_with({name:t,args:e}){return`${B(t)} doesn’t end with ${ac(e)}.`},is({name:t}){return`${B(t)} is not an allowed value.`},length({name:t,args:[e=0,n=1/0]}){const r=Number(e)<=Number(n)?e:n,s=Number(n)>=Number(e)?n:e;return r==1&&s===1/0?`${B(t)} must be at least one character.`:r==0&&s?`${B(t)} must be less than or equal to ${s} characters.`:r===s?`${B(t)} should be ${s} characters long.`:r&&s===1/0?`${B(t)} must be greater than or equal to ${r} characters.`:`${B(t)} must be between ${r} and ${s} characters.`},matches({name:t}){return`${B(t)} is not an allowed value.`},max({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Cannot have more than ${n[0]} ${t}.`:`${B(t)} must be less than or equal to ${n[0]}.`},mime({name:t,args:e}){return e[0]?`${B(t)} must be of the type: ${e[0]}`:"No file formats allowed."},min({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Cannot have fewer than ${n[0]} ${t}.`:`Must be at least ${n[0]} ${t} .`},not({name:t,node:{value:e}}){return`“${e}” is not an allowed ${t}.`},number({name:t}){return`${B(t)} must be a number.`},require_one:({name:t,node:e,args:n})=>{const r=n.map(s=>{const i=e.at(s);return i?zp(i):!1}).filter(s=>!!s);return r.unshift(t),`${r.join(" or ")} is required.`},required({name:t}){return`${B(t)} is required.`},starts_with({name:t,args:e}){return`${B(t)} doesn’t start with ${ac(e)}.`},url(){return"Please enter a valid URL."}};var oU=Object.freeze({__proto__:null,ui:sU,validation:iU});const aU={add:"Dodaj",remove:"Usuń",removeAll:"Usuń wszystko",incomplete:"Nie wszystkie pola zostały wypełnione poprawnie.",submit:"Wyślij",noFiles:"Nie wybrano pliku",moveUp:"Przesuń w górę",moveDown:"Przesuń w dół",isLoading:"Ładowanie...",loadMore:"Załaduj więcej",next:"Kolejny",prev:"Poprzednia",addAllValues:"Dodaj wszystkie wartości",addSelectedValues:"Dodaj wybrane wartości",removeAllValues:"Usuń wszystkie wartości",removeSelectedValues:"Usuń wybrane wartości",chooseDate:"Wybierz datę",changeDate:"Zmień datę",invalidDate:"Wybrana data jest nieprawidłowa.",close:"Zamknij"},lU={accepted({name:t}){return`Proszę zaakceptować ${t}.`},date_after({name:t,args:e}){return Array.isArray(e)&&e.length?`${B(t)} musi być po ${Ar(e[0])}.`:`${B(t)} musi być w przyszłości.`},alpha({name:t}){return`Pole ${B(t)} może zawierać tylko znaki alfabetyczne.`},alphanumeric({name:t}){return`Pole ${B(t)} może zawierać tylko znaki alfanumeryczne.`},alpha_spaces({name:t}){return`Pole ${B(t)} mogą zawierać tylko litery i spacje.`},contains_alpha({name:t}){return`${B(t)} musi zawierać znaki alfabetyczne.`},contains_alphanumeric({name:t}){return`${B(t)} musi zawierać litery lub cyfry.`},contains_alpha_spaces({name:t}){return`${B(t)} musi zawierać litery lub spacje.`},contains_symbol({name:t}){return`${B(t)} musi zawierać symbol.`},contains_uppercase({name:t}){return`${B(t)} musi zawierać wielkie litery.`},contains_lowercase({name:t}){return`${B(t)} musi zawierać małe litery.`},contains_numeric({name:t}){return`${B(t)} musi zawierać liczby.`},symbol({name:t}){return`${B(t)} musi być symbolem.`},uppercase({name:t}){return`${B(t)} może zawierać tylko wielkie litery.`},lowercase({name:t}){return`${B(t)} może zawierać tylko małe litery.`},date_before({name:t,args:e}){return Array.isArray(e)&&e.length?`${B(t)} musi być przed ${Ar(e[0])}.`:`${B(t)} musi być w przeszłości.`},between({name:t,args:e}){if(isNaN(e[0])||isNaN(e[1]))return"Pole zostało wypełnione niepoprawnie i nie może zostać wysłane.";const[n,r]=C0(e[0],e[1]);return`Wartość pola ${B(t)} musi być pomiędzy ${n} i ${r}.`},confirm({name:t}){return`${B(t)} nie pokrywa się.`},date_format({name:t,args:e}){return Array.isArray(e)&&e.length?`Wartość pola ${B(t)} nie jest poprawną datą, proszę użyć formatu ${e[0]}`:"To pole zostało wypełnione niepoprawnie i nie może zostać wysłane"},date_between({name:t,args:e}){return`Data w polu ${B(t)} musi być pomiędzy ${Ar(e[0])} i ${Ar(e[1])}`},email:"Proszę wpisać poprawny adres email.",ends_with({name:t,args:e}){return`Pole ${B(t)} nie kończy się na ${ac(e)}.`},is({name:t}){return`Pole ${B(t)} nie jest dozwoloną wartością.`},length({name:t,args:[e=0,n=1/0]}){const r=Number(e)<=Number(n)?e:n,s=Number(n)>=Number(e)?n:e;return r==1&&s===1/0?`Pole ${B(t)} musi posiadać minimum jeden znak.`:r==0&&s?`Pole ${B(t)} musi zawierać ${s} lub mniej znaków.`:r&&s===1/0?`Pole ${B(t)} musi zawierać ${r} lub więcej znaków.`:r===s?`Pole ${B(t)} musi mieć ${r} znaków.`:`Pole ${B(t)} musi mieć ${r}-${s} znaków.`},matches({name:t}){return`Pole ${B(t)} zawiera niedozwolone znaki.`},max({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Nie można mieć więcej niż ${n[0]} ${t}.`:`Wartość pola ${B(t)} musi być mniejsza lub równa ${n[0]}.`},mime({name:t,args:e}){return e[0]?`${B(t)} musi być typem: ${e[0]}`:"Nie podano dozwolonych typów plików."},min({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Musisz podać więcej niż ${n[0]} ${t}.`:` Musisz podać conajmniej ${n[0]} ${B(t)}.`},not({name:t}){return`Wartość pola ${t} jest niedozwolona.`},number({name:t}){return`${B(t)} musi być numerem.`},require_one:({name:t,node:e,args:n})=>{const r=n.map(s=>{const i=e.at(s);return i?zp(i):!1}).filter(s=>!!s);return r.unshift(t),`${r.join(" lub ")} wymagany jest.`},required({name:t}){return`Pole ${B(t)} jest wymagane.`},starts_with({name:t,args:e}){return`Wartośc pola ${B(t)} nie zaczyna się od ${ac(e)}.`},url(){return"Wprowadź prawidłowy adres URL."}};var cU=Object.freeze({__proto__:null,ui:aU,validation:lU});function uU(t){return function(n){let r=fy(n.config.locale,t),s=r?t[r]:{};n.on("prop:locale",({payload:i})=>{r=fy(i,t),s=r?t[r]:{},n.store.touch()}),n.on("prop:label",()=>n.store.touch()),n.on("prop:validationLabel",()=>n.store.touch()),n.hook.text((i,o)=>{var a,l;const c=((a=i.meta)===null||a===void 0?void 0:a.messageKey)||i.key;if(re(s,i.type)&&re(s[i.type],c)){const u=s[i.type][c];typeof u=="function"?i.value=Array.isArray((l=i.meta)===null||l===void 0?void 0:l.i18nArgs)?u(...i.meta.i18nArgs):u(i):i.value=u}return o(i)})}}function fy(t,e){if(re(e,t))return t;const[n]=t.split("-");if(re(e,n))return n;for(const r in e)return r;return!1}function hU(...t){const e=t.reduce((r,s)=>_s(r,s),{}),n=()=>{};return n.library=function(r){const s=ei(r.props.type);re(e,s)&&r.define(e[s])},n}const fU=["classes","config","delay","errors","id","index","inputErrors","modelValue","onUpdate:modelValue","name","number","parent","plugins","sectionsSchema","type","validation","validationLabel","validationMessages","validationRules","onInput","onInputRaw","onUpdate:modelValue","onNode","onSubmit","onSubmitInvalid","onSubmitRaw"];function cu(t){return t&&typeof t=="object"&&"group"in t&&Array.isArray(t)}function R0(t){let e=1;return Array.isArray(t)?t.map(n=>{if(typeof n=="string"||typeof n=="number")return{label:String(n),value:String(n)};if(typeof n=="object"){if("group"in n)return n.options=R0(n.options||[]),n;"value"in n&&typeof n.value!="string"&&Object.assign(n,{value:`__mask_${e++}`,__original:n.value})}return n}):Object.keys(t).map(n=>({label:t[n],value:n}))}function ys(t,e){if(Array.isArray(t)){for(const n of t)if(!(typeof n!="object"&&n)){if(cu(n)){const r=ys(n.options,e);if(r!==void 0)return r}else if(e==n.value)return"__original"in n?n.__original:n.value}}return e}function Ii(t,e){return t===null&&e===void 0||t===void 0&&e===null?!1:t==e?!0:Ei(t)&&Ei(e)?Nt(t,e):!1}function Hp(t){t.hook.prop((e,n)=>(e.prop==="options"&&(typeof e.value=="function"?(t.props.optionsLoader=e.value,e.value=[]):e.value=R0(e.value)),n(e)))}function ue(t,e,n=!1){return(...r)=>{const s=i=>{const o=!e||typeof e=="string"?{$el:e}:e();return(Tf(o)||If(o))&&(o.meta||(o.meta={section:t}),r.length&&!o.children&&(o.children=[...r.map(a=>typeof a=="function"?a(i):a)]),Tf(o)&&(o.attrs={class:`$classes.${t}`,...o.attrs||{}})),{if:`$slots.${t}`,then:`$slots.${t}`,else:t in i?io(o,i[t]):o}};return s._s=t,n?dU(s):s}}function dU(t){return e=>[t(e)]}function lc(t){return typeof t=="object"&&("$el"in t||"$cmp"in t||"$formkit"in t)}function io(t,e={}){return typeof t=="string"?lc(e)||typeof e=="string"?e:t:Array.isArray(t)?lc(e)?e:t:_s(t,e)}const pU=ue("actions",()=>({$el:"div",if:"$actions"})),cc=ue("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"$type",name:"$node.props.altName || $node.name",disabled:"$option.attrs.disabled || $disabled",onInput:"$handlers.toggleChecked",checked:"$fns.eq($_value, $onValue)",onBlur:"$handlers.blur",value:"$: true",id:"$id","aria-describedby":{if:"$options.length",then:{if:"$option.help",then:'$: "help-" + $option.attrs.id',else:void 0},else:{if:"$help",then:'$: "help-" + $id',else:void 0}}}})),S0=ue("optionHelp",()=>({$el:"div",if:"$option.help",attrs:{id:'$: "help-" + $option.attrs.id'}})),dy=ue("inner","span"),uc=ue("label","span"),P0=ue("option",()=>({$el:"li",for:["option","$options"],attrs:{"data-disabled":"$option.attrs.disabled || $disabled"}})),k0=ue("options","ul"),hc=ue("wrapper",()=>({$el:"label",attrs:{"data-disabled":{if:"$options.length",then:void 0,else:"$disabled || undefined"},"data-checked":{if:"$options == undefined",then:"$fns.eq($_value, $onValue) || undefined",else:"$fns.isChecked($option.value) || undefined"}}})),mU=ue("input",()=>({$el:"button",bind:"$attrs",attrs:{type:"$type",disabled:"$disabled",name:"$node.name",id:"$id"}})),gU=ue("default",null),fc=ue("decorator",()=>({$el:"span",attrs:{"aria-hidden":"true"}})),N0=ue("fieldset",()=>({$el:"fieldset",attrs:{id:"$id","aria-describedby":{if:"$help",then:'$: "help-" + $id',else:void 0}}})),_U=ue("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"file",disabled:"$disabled",name:"$node.name",onChange:"$handlers.files",onBlur:"$handlers.blur",id:"$id","aria-describedby":"$describedBy"}})),yU=ue("fileItem",()=>({$el:"li",for:["file","$value"]})),vU=ue("fileList",()=>({$el:"ul",if:"$value.length",attrs:{"data-has-multiple":{if:"$value.length > 1",then:"true"}}})),EU=ue("fileName",()=>({$el:"span",attrs:{class:"$classes.fileName"}})),py=ue("fileRemove",()=>({$el:"button",attrs:{type:"button",onClick:"$handlers.resetFiles"}})),wU=ue("form",()=>({$el:"form",bind:"$attrs",attrs:{id:"$id",name:"$node.name",onSubmit:"$handlers.submit","data-loading":"$state.loading || undefined"}})),qp=ue("wrapper",null,!0),ur=ue("help",()=>({$el:"div",if:"$help",attrs:{id:'$: "help-" + $id'}})),nt=(t,e)=>ue(`${t}Icon`,()=>{const n=`_raw${t.charAt(0).toUpperCase()}${t.slice(1)}Icon`;return{if:`$${t}Icon && $${n}`,$el:`${e||"span"}`,attrs:{class:`$classes.${t}Icon + " " + $classes.icon`,innerHTML:`$${n}`,onClick:`$handlers.iconClick(${t})`,for:{if:`${e==="label"}`,then:"$id"}}}})(),bi=ue("inner","div"),uu=ue("label",()=>({$el:"label",if:"$label",attrs:{for:"$id"}})),O0=ue("legend",()=>({$el:"legend",if:"$label"})),Br=ue("message",()=>({$el:"li",for:["message","$messages"],attrs:{key:"$message.key",id:"$id + '-' + $message.key","data-message-type":"$message.type"}})),Wr=ue("messages",()=>({$el:"ul",if:"$defaultMessagePlacement && $fns.length($messages)"})),TU=ue("noFiles",()=>({$el:"span",if:"$value.length == 0"})),IU=ue("optGroup",()=>({$el:"optgroup",bind:"$option.attrs",attrs:{label:"$option.group"}})),my=ue("option",()=>({$el:"option",bind:"$option.attrs",attrs:{class:"$classes.option",value:"$option.value",selected:"$fns.isSelected($option)"}})),gy=ue("options",()=>({$el:null,if:"$options.length",for:["option","$option.options || $options"]})),As=ue("outer",()=>({$el:"div",attrs:{key:"$id","data-family":"$family || undefined","data-type":"$type","data-multiple":'$attrs.multiple || ($type != "select" && $options != undefined) || undefined',"data-disabled":'$: ($disabled !== "false" && $disabled) || undefined',"data-empty":"$state.empty || undefined","data-complete":"$state.complete || undefined","data-invalid":"$state.valid === false && $state.validationVisible || undefined","data-errors":"$state.errors || undefined","data-submitted":"$state.submitted || undefined","data-prefix-icon":"$_rawPrefixIcon !== undefined || undefined","data-suffix-icon":"$_rawSuffixIcon !== undefined || undefined","data-prefix-icon-click":"$onPrefixIconClick !== undefined || undefined","data-suffix-icon-click":"$onSuffixIconClick !== undefined || undefined"}})),hr=ue("prefix",null),bU=ue("input",()=>({$el:"select",bind:"$attrs",attrs:{id:"$id","data-placeholder":"$fns.showPlaceholder($_value, $placeholder)",disabled:"$disabled",class:"$classes.input",name:"$node.name",onChange:"$handlers.onChange",onInput:"$handlers.selectInput",onBlur:"$handlers.blur","aria-describedby":"$describedBy"}})),AU=ue("submit",()=>({$cmp:"FormKit",bind:"$submitAttrs",props:{type:"submit",disabled:"$disabled",label:"$submitLabel"}})),fr=ue("suffix",null),D0=ue("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"$type",disabled:"$disabled",name:"$node.name",onInput:"$handlers.DOMInput",onBlur:"$handlers.blur",value:"$_value",id:"$id","aria-describedby":"$describedBy"}})),CU=ue("input",()=>({$el:"textarea",bind:"$attrs",attrs:{disabled:"$disabled",name:"$node.name",onInput:"$handlers.DOMInput",onBlur:"$handlers.blur",value:"$_value",id:"$id","aria-describedby":"$describedBy"},children:"$initialValue"})),ka=ue("wrapper","div");function x0(t){return function(e,n){return e.prop==="options"&&Array.isArray(e.value)&&(e.value=e.value.map(r=>{var s;return!((s=r.attrs)===null||s===void 0)&&s.id?r:_s(r,{attrs:{id:`${t.props.id}-option-${$p(String(r.value))}`}})}),t.props.type==="checkbox"&&!Array.isArray(t.value)&&(t.isCreated?t.input([],!1):t.on("created",()=>{Array.isArray(t.value)||t.input([],!1)}))),n(e)}}function RU(t,e){const n=e.target;if(n instanceof HTMLInputElement){const r=Array.isArray(t.props.options)?ys(t.props.options,n.value):n.value;Array.isArray(t.props.options)&&t.props.options.length?Array.isArray(t._value)?t._value.some(s=>Ii(r,s))?t.input(t._value.filter(s=>!Ii(r,s))):t.input([...t._value,r]):t.input([r]):n.checked?t.input(t.props.onValue):t.input(t.props.offValue)}}function SU(t,e){var n,r;return(n=t.context)===null||n===void 0||n.value,(r=t.context)===null||r===void 0||r._value,Array.isArray(t._value)?t._value.some(s=>Ii(ys(t.props.options,e),s)):!1}function PU(t){t.on("created",()=>{var e,n;!((e=t.context)===null||e===void 0)&&e.handlers&&(t.context.handlers.toggleChecked=RU.bind(null,t)),!((n=t.context)===null||n===void 0)&&n.fns&&(t.context.fns.isChecked=SU.bind(null,t)),re(t.props,"onValue")||(t.props.onValue=!0),re(t.props,"offValue")||(t.props.offValue=!1)}),t.hook.prop(x0(t))}function ti(t,e){return n=>{n.props[`${t}Icon`]===void 0&&(n.props[`${t}Icon`]=e.startsWith("<svg")?e:`default:${e}`)}}function Kp(t){t.on("created",()=>{"disabled"in t.props&&(t.props.disabled=cn(t.props.disabled),t.config.disabled=cn(t.props.disabled))}),t.hook.prop(({prop:e,value:n},r)=>(n=e==="disabled"?cn(n):n,r({prop:e,value:n}))),t.on("prop:disabled",({payload:e})=>{t.config.disabled=cn(e)})}function gl(t,e){return n=>{n.store.set(yn({key:t,type:"ui",value:e||t,meta:{localize:!0,i18nArgs:[n]}}))}}const Xu=typeof window<"u";function M0(t){t.target instanceof HTMLElement&&t.target.hasAttribute("data-file-hover")&&t.target.removeAttribute("data-file-hover")}function _y(t,e){e.target instanceof HTMLInputElement?t==="dragover"&&e.target.setAttribute("data-file-hover","true"):e.preventDefault(),t==="drop"&&M0(e)}function kU(t){gl("noFiles","Select file")(t),gl("removeAll","Remove all")(t),gl("remove")(t),Xu&&(window._FormKit_File_Drop||(window.addEventListener("dragover",_y.bind(null,"dragover")),window.addEventListener("drop",_y.bind(null,"drop")),window.addEventListener("dragleave",M0),window._FormKit_File_Drop=!0)),t.hook.input((e,n)=>n(Array.isArray(e)?e:[])),t.on("reset",()=>{if(t.props.id&&Xu){const e=document.getElementById(t.props.id);e&&(e.value="")}}),t.on("created",()=>{Array.isArray(t.value)||t.input([],!1),t.context&&(t.context.handlers.resetFiles=e=>{if(e.preventDefault(),t.input([]),t.props.id&&Xu){const n=document.getElementById(t.props.id);n&&(n.value=""),n==null||n.focus()}},t.context.handlers.files=e=>{var n,r;const s=[];if(e.target instanceof HTMLInputElement&&e.target.files){for(let i=0;i<e.target.files.length;i++){let o;(o=e.target.files.item(i))&&s.push({name:o.name,file:o})}t.input(s)}t.context&&(t.context.files=s),typeof((n=t.props.attrs)===null||n===void 0?void 0:n.onChange)=="function"&&((r=t.props.attrs)===null||r===void 0||r.onChange(e))})})}const yy=yn({key:"loading",value:!0,visible:!1});async function NU(t,e){const n=Math.random();if(t.props._submitNonce=n,e.preventDefault(),await t.settled,t.ledger.value("validating")&&(t.store.set(yy),await t.ledger.settled("validating"),t.store.remove("loading"),t.props._submitNonce!==n))return;const r=s=>s.store.set(yn({key:"submitted",value:!0,visible:!1}));if(t.walk(r),r(t),t.emit("submit-raw"),typeof t.props.onSubmitRaw=="function"&&t.props.onSubmitRaw(e,t),t.ledger.value("blocking"))typeof t.props.onSubmitInvalid=="function"&&t.props.onSubmitInvalid(t),t.props.incompleteMessage!==!1&&t.store.set(yn({blocking:!1,key:"incomplete",meta:{localize:t.props.incompleteMessage===void 0,i18nArgs:[{node:t}],showAsMessage:!0},type:"ui",value:t.props.incompleteMessage||"Form incomplete."}));else if(typeof t.props.onSubmit=="function"){const s=t.props.onSubmit(t.hook.submit.dispatch(wi(t.value)),t);if(s instanceof Promise){const i=t.props.disabled===void 0&&t.props.submitBehavior!=="live";i&&(t.props.disabled=!0),t.store.set(yy),await s,i&&(t.props.disabled=!1),t.store.remove("loading")}}else e.target instanceof HTMLFormElement&&e.target.submit()}function OU(t){t.props.isForm=!0,t.ledger.count("validating",e=>e.key==="validating"),t.on("created",()=>{var e;!((e=t.context)===null||e===void 0)&&e.handlers&&(t.context.handlers.submit=NU.bind(null,t)),re(t.props,"actions")||(t.props.actions=!0)}),t.on("settled:blocking",()=>t.store.remove("incomplete"))}function DU(t){t.props.ignore===void 0&&(t.props.ignore=!0,t.parent=null)}function xU(t){t.on("created",()=>{t.context&&(t.context.initialValue=t.value||"")})}function L0(t){if(typeof t.props.number>"u")return;const e=["number","range","hidden"].includes(t.props.type);t.hook.input((n,r)=>{if(n==="")return r(void 0);const s=t.props.number==="integer"?parseInt(n):parseFloat(n);return Number.isFinite(s)?r(s):r(e?void 0:n)})}function MU(t,e){e.target instanceof HTMLInputElement&&t.input(ys(t.props.options,e.target.value))}function LU(t,e){var n,r;return(n=t.context)===null||n===void 0||n.value,(r=t.context)===null||r===void 0||r._value,Ii(ys(t.props.options,e),t._value)}function $U(t){t.on("created",()=>{var e,n;Array.isArray(t.props.options)||bs(350,{node:t,inputType:"radio"}),!((e=t.context)===null||e===void 0)&&e.handlers&&(t.context.handlers.toggleChecked=MU.bind(null,t)),!((n=t.context)===null||n===void 0)&&n.fns&&(t.context.fns.isChecked=LU.bind(null,t))}),t.hook.prop(x0(t))}let VU=0;function FU(t){t.sync&&t.plugins.add(UU)}function UU(t){t.props.type==="radio"&&(t.props.altName=`${t.name}_${VU++}`)}function jU(t,e){if(cu(e))return!1;t.context&&t.context.value;const n="__original"in e?e.__original:e.value;return Array.isArray(t._value)?t._value.some(r=>Ii(r,n)):(t._value===void 0||t._value===null&&!$0(t.props.options,null))&&e.attrs&&e.attrs["data-is-placeholder"]?!0:Ii(n,t._value)}function $0(t,e){return t.some(n=>cu(n)?$0(n.options,e):("__original"in n?n.__original:n.value)===e)}async function BU(t,e){var n;typeof((n=t.props.attrs)===null||n===void 0?void 0:n.onChange)=="function"&&(await new Promise(r=>setTimeout(r,0)),await t.settled,t.props.attrs.onChange(e))}function WU(t,e){const n=e.target,r=n.hasAttribute("multiple")?Array.from(n.selectedOptions).map(s=>ys(t.props.options,s.value)):ys(t.props.options,n.value);t.input(r)}function vy(t,e){return t.some(n=>n.attrs&&n.attrs["data-is-placeholder"])?t:[{label:e,value:"",attrs:{hidden:!0,disabled:!0,"data-is-placeholder":"true"}},...t]}function V0(t){const e=t.length>0?t[0]:void 0;if(e)return cu(e)?V0(e.options):"__original"in e?e.__original:e.value}function zU(t){t.on("created",()=>{var e,n,r;const s=cn((e=t.props.attrs)===null||e===void 0?void 0:e.multiple);!s&&t.props.placeholder&&Array.isArray(t.props.options)&&(t.hook.prop(({prop:i,value:o},a)=>(i==="options"&&(o=vy(o,t.props.placeholder)),a({prop:i,value:o}))),t.props.options=vy(t.props.options,t.props.placeholder)),s?t.value===void 0&&t.input([],!1):t.context&&!t.context.options&&(t.props.attrs=Object.assign({},t.props.attrs,{value:t._value}),t.on("input",({payload:i})=>{t.props.attrs=Object.assign({},t.props.attrs,{value:i})})),!((n=t.context)===null||n===void 0)&&n.handlers&&(t.context.handlers.selectInput=WU.bind(null,t),t.context.handlers.onChange=BU.bind(null,t)),!((r=t.context)===null||r===void 0)&&r.fns&&(t.context.fns.isSelected=jU.bind(null,t),t.context.fns.showPlaceholder=(i,o)=>{if(!Array.isArray(t.props.options))return!1;const a=t.props.options.some(l=>{if(l.attrs&&"data-is-placeholder"in l.attrs)return!1;const c="__original"in l?l.__original:l.value;return Nt(i,c)});return o&&!a?!0:void 0})}),t.hook.input((e,n)=>{var r,s,i;return!t.props.placeholder&&e===void 0&&Array.isArray((r=t.props)===null||r===void 0?void 0:r.options)&&t.props.options.length&&!cn((i=(s=t.props)===null||s===void 0?void 0:s.attrs)===null||i===void 0?void 0:i.multiple)&&(e=V0(t.props.options)),n(e)})}function Rf(t){return!!($s(t)&&t.if&&t.if.startsWith("$slots.")&&typeof t.then=="string"&&t.then.startsWith("$slots.")&&"else"in t)}function sr(t,e,n){const r=s=>{const i=e(s);if(n||lc(i)&&"if"in i||Rf(i)){const o={if:t,then:i};return n&&(o.else=n(s)),o}else Rf(i)?Object.assign(i.else,{if:t}):lc(i)&&Object.assign(i,{if:t});return i};return r._s=Fi(),r}function ni(t,e){const n=r=>{const s=t({});return Rf(s)?(Array.isArray(s.else)||(s.else=io(io(s.else,e),t._s?r[t._s]:{})),s):io(io(s,e),t._s?r[t._s]:{})};return n._s=t._s,n}const Ey={schema:As(Wr(Br("$message.value")),ka(mU(nt("prefix"),hr(),gU("$label || $ui.submit.value"),fr(),nt("suffix"))),ur("$help")),type:"input",family:"button",props:[],features:[gl("submit"),DU],schemaMemoKey:"h6st4epl3j8"},HU={schema:As(sr("$options == undefined",hc(dy(hr(),cc(),fc(nt("decorator")),fr()),ni(uc("$label"),{if:"$label"})),N0(O0("$label"),ur("$help"),k0(P0(hc(dy(hr(),ni(cc(),{bind:"$option.attrs",attrs:{id:"$option.attrs.id",value:"$option.value",checked:"$fns.isChecked($option.value)"}}),fc(nt("decorator")),fr()),ni(uc("$option.label"),{if:"$option.label"})),S0("$option.help"))))),sr("$options == undefined && $help",ur("$help")),Wr(Br("$message.value"))),type:"input",family:"box",props:["options","onValue","offValue","optionsLoader"],features:[Hp,PU,ti("decorator","checkboxDecorator")],schemaMemoKey:"qje02tb3gu8"},qU={schema:As(ka(uu("$label"),bi(nt("prefix","label"),hr(),_U(),vU(yU(nt("fileItem"),EU("$file.name"),sr("$value.length === 1",py(nt("fileRemove"),'$ui.remove.value + " " + $file.name')))),sr("$value.length > 1",py("$ui.removeAll.value")),TU(nt("noFiles"),"$ui.noFiles.value"),fr(),nt("suffix"))),ur("$help"),Wr(Br("$message.value"))),type:"input",family:"text",props:[],features:[kU,ti("fileItem","fileItem"),ti("fileRemove","fileRemove"),ti("noFiles","noFiles")],schemaMemoKey:"9kqc4852fv8"},KU={schema:wU("$slots.default",Wr(Br("$message.value")),pU(AU())),type:"group",props:["actions","submit","submitLabel","submitAttrs","submitBehavior","incompleteMessage"],features:[OU,Kp],schemaMemoKey:"5bg016redjo"},GU={schema:qp("$slots.default"),type:"group",props:[],features:[Kp]},QU={schema:D0(),type:"input",props:[],features:[L0]},YU={schema:qp("$slots.default"),type:"list",props:["sync","dynamic"],features:[Kp,FU]},XU={schema:qp(),type:"input",props:[],features:[]},JU={schema:As(sr("$options == undefined",hc(bi(hr(),cc(),fc(nt("decorator")),fr()),ni(uc("$label"),{if:"$label"})),N0(O0("$label"),ur("$help"),k0(P0(hc(bi(hr(),ni(cc(),{bind:"$option.attrs",attrs:{id:"$option.attrs.id",value:"$option.value",checked:"$fns.isChecked($option.value)"}}),fc(nt("decorator")),fr()),ni(uc("$option.label"),{if:"$option.label"})),S0("$option.help"))))),sr("$options == undefined && $help",ur("$help")),Wr(Br("$message.value"))),type:"input",family:"box",props:["options","onValue","offValue","optionsLoader"],features:[Hp,$U,ti("decorator","radioDecorator")],schemaMemoKey:"qje02tb3gu8"},ZU={schema:As(ka(uu("$label"),bi(nt("prefix"),hr(),bU(sr("$slots.default",()=>"$slots.default",gy(sr("$option.group",IU(gy(my("$option.label"))),my("$option.label"))))),sr("$attrs.multiple !== undefined",()=>"",nt("select")),fr(),nt("suffix"))),ur("$help"),Wr(Br("$message.value"))),type:"input",props:["options","placeholder","optionsLoader"],features:[Hp,zU,ti("select","select")],schemaMemoKey:"cb119h43krg"},e2={schema:As(ka(uu("$label"),bi(nt("prefix","label"),hr(),CU(),fr(),nt("suffix"))),ur("$help"),Wr(Br("$message.value"))),type:"input",props:[],features:[xU],schemaMemoKey:"b1n0td79m9g"},Dt={schema:As(ka(uu("$label"),bi(nt("prefix","label"),hr(),D0(),fr(),nt("suffix"))),ur("$help"),Wr(Br("$message.value"))),type:"input",family:"text",props:[],features:[L0],schemaMemoKey:"c3cc4kflsg"};var t2=Object.freeze({__proto__:null,button:Ey,checkbox:HU,color:Dt,date:Dt,datetimeLocal:Dt,email:Dt,file:qU,form:KU,group:GU,hidden:QU,list:YU,meta:XU,month:Dt,number:Dt,password:Dt,radio:JU,range:Dt,search:Dt,select:ZU,submit:Ey,tel:Dt,text:Dt,textarea:e2,time:Dt,url:Dt,week:Dt});const F0=function({value:e}){return["yes","on","1",1,!0,"true"].includes(e)};F0.skipEmpty=!1;const n2=function({value:t},e=!1){const n=Date.parse(e||new Date),r=Date.parse(String(t));return isNaN(r)?!1:r>n},r2=function({value:t},e="default"){const n={default:/^\p{L}+$/u,latin:/^[a-z]+$/i},r=re(n,e)?e:"default";return n[r].test(String(t))},s2=function({value:t},e="default"){const n={default:/^[\p{L} ]+$/u,latin:/^[a-z ]+$/i},r=re(n,e)?e:"default";return n[r].test(String(t))},i2=function({value:t},e="default"){const n={default:/^[0-9\p{L}]+$/u,latin:/^[0-9a-z]+$/i},r=re(n,e)?e:"default";return n[r].test(String(t))},o2=function({value:t},e=!1){const n=Date.parse(e||new Date),r=Date.parse(String(t));return isNaN(r)?!1:r<n},a2=function({value:e},n,r){if(!isNaN(e)&&!isNaN(n)&&!isNaN(r)){const s=1*e;n=Number(n),r=Number(r);const[i,o]=n<=r?[n,r]:[r,n];return s>=1*i&&s<=1*o}return!1},wy=/(_confirm(?:ed)?)$/,l2=function(e,n,r="loose"){var s;n||(n=wy.test(e.name)?e.name.replace(wy,""):`${e.name}_confirm`);const i=(s=e.at(n))===null||s===void 0?void 0:s.value;return r==="strict"?e.value===i:e.value==i},c2=function({value:t},e="default"){const n={default:/\p{L}/u,latin:/[a-z]/i},r=re(n,e)?e:"default";return n[r].test(String(t))},u2=function({value:t},e="default"){const n={default:/[\p{L} ]/u,latin:/[a-z ]/i},r=re(n,e)?e:"default";return n[r].test(String(t))},h2=function({value:t},e="default"){const n={default:/[0-9\p{L}]/u,latin:/[0-9a-z]/i},r=re(n,e)?e:"default";return n[r].test(String(t))},f2=function({value:t},e="default"){const n={default:/\p{Ll}/u,latin:/[a-z]/},r=re(n,e)?e:"default";return n[r].test(String(t))},d2=function({value:e}){return/[0-9]/.test(String(e))},p2=function({value:t}){return/[!-/:-@[-`{-~]/.test(String(t))},m2=function({value:t},e="default"){const n={default:/\p{Lu}/u,latin:/[A-Z]/},r=re(n,e)?e:"default";return n[r].test(String(t))},g2=function({value:e},n,r){n=n instanceof Date?n.getTime():Date.parse(n),r=r instanceof Date?r.getTime():Date.parse(r);const s=e instanceof Date?e.getTime():Date.parse(String(e));if(n&&!r)r=n,n=Date.now();else if(!n||!s)return!1;return s>=n&&s<=r},_2=function({value:e},n){return n&&typeof n=="string"?wV(n).test(String(e)):!isNaN(Date.parse(String(e)))},y2=function({value:e}){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(e))},v2=function({value:e},...n){return typeof e=="string"&&n.length?n.some(r=>e.endsWith(r)):typeof e=="string"&&n.length===0},E2=function({value:e},...n){return n.some(r=>typeof r=="object"?Nt(r,e):r==e)},w2=function({value:e},n=0,r=1/0){n=parseInt(n),r=isNaN(parseInt(r))?1/0:parseInt(r);const s=n<=r?n:r,i=r>=n?r:n;if(typeof e=="string"||Array.isArray(e))return e.length>=s&&e.length<=i;if(e&&typeof e=="object"){const o=Object.keys(e).length;return o>=s&&o<=i}return!1},T2=function({value:t},e="default"){const n={default:/^\p{Ll}+$/u,latin:/^[a-z]+$/},r=re(n,e)?e:"default";return n[r].test(String(t))},I2=function({value:e},...n){return n.some(r=>(typeof r=="string"&&r.substr(0,1)==="/"&&r.substr(-1)==="/"&&(r=new RegExp(r.substr(1,r.length-2))),r instanceof RegExp?r.test(String(e)):r===e))},b2=function({value:e},n=10){return Array.isArray(e)?e.length<=n:Number(e)<=Number(n)},A2=function({value:e},n=1){return Array.isArray(e)?e.length>=n:Number(e)>=Number(n)},C2=function({value:e},...n){return!n.some(r=>typeof r=="object"?Nt(r,e):r===e)},R2=function({value:e}){return!isNaN(e)},U0=function(t,...e){return Xt(t.value)?e.map(r=>{var s;return(s=t.at(r))===null||s===void 0?void 0:s.value}).some(r=>!Xt(r)):!0};U0.skipEmpty=!1;const j0=function({value:e},n="default"){return n==="trim"&&typeof e=="string"?!Xt(e.trim()):!Xt(e)};j0.skipEmpty=!1;const S2=function({value:e},...n){return typeof e=="string"&&n.length?n.some(r=>e.startsWith(r)):typeof e=="string"&&n.length===0},P2=function({value:t}){return/^[!-/:-@[-`{-~]+$/.test(String(t))},k2=function({value:t},e="default"){const n={default:/^\p{Lu}+$/u,latin:/^[A-Z]+$/},r=re(n,e)?e:"default";return n[r].test(String(t))},N2=function({value:e},...n){try{const r=n.length?n:["http:","https:"],s=new URL(String(e));return r.includes(s.protocol)}catch{return!1}},O2=Object.freeze(Object.defineProperty({__proto__:null,accepted:F0,alpha:r2,alpha_spaces:s2,alphanumeric:i2,between:a2,confirm:l2,contains_alpha:c2,contains_alpha_spaces:u2,contains_alphanumeric:h2,contains_lowercase:f2,contains_numeric:d2,contains_symbol:p2,contains_uppercase:m2,date_after:n2,date_before:o2,date_between:g2,date_format:_2,email:y2,ends_with:v2,is:E2,length:w2,lowercase:T2,matches:I2,max:b2,min:A2,not:C2,number:R2,require_one:U0,required:j0,starts_with:S2,symbol:P2,uppercase:k2,url:N2},Symbol.toStringTag,{value:"Module"}));let un,wn=null,dc,B0=!1,oo=!1;const D2=new Promise(t=>{dc=()=>{B0=!0,t()}}),ir=typeof window<"u"&&typeof fetch<"u";un=ir?getComputedStyle(document.documentElement):void 0;const Bs={},Ju={};function x2(t,e,n,r){e&&Object.assign(Bs,e),ir&&!oo&&(un!=null&&un.getPropertyValue("--formkit-theme"))?(dc(),oo=!0):t&&!oo&&ir?M2(t):!oo&&ir&&dc();const s=function(o){var a,l;o.addProps(["iconLoader","iconLoaderUrl"]),o.props.iconHandler=Ty(!((a=o.props)===null||a===void 0)&&a.iconLoader?o.props.iconLoader:r,!((l=o.props)===null||l===void 0)&&l.iconLoaderUrl?o.props.iconLoaderUrl:n),V2(o,o.props.iconHandler),o.on("created",()=>{var c;!((c=o==null?void 0:o.context)===null||c===void 0)&&c.handlers&&(o.context.handlers.iconClick=u=>{const h=`on${u.charAt(0).toUpperCase()}${u.slice(1)}IconClick`,f=o.props[h];if(f&&typeof f=="function")return d=>f(o,d)})})};return s.iconHandler=Ty(r,n),s}function M2(t){if(!(!t||!ir||typeof getComputedStyle!="function")&&(oo=!0,wn=document.getElementById("formkit-theme"),t&&ir&&(!(un!=null&&un.getPropertyValue("--formkit-theme"))&&!wn||wn!=null&&wn.getAttribute("data-theme")&&(wn==null?void 0:wn.getAttribute("data-theme"))!==t))){const n=`https://cdn.jsdelivr.net/npm/@formkit/themes@${oc.startsWith("__")?"latest":oc}/dist/${t}/theme.css`,r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.id="formkit-theme",r.setAttribute("data-theme",t),r.onload=()=>{un=getComputedStyle(document.documentElement),dc()},document.head.appendChild(r),r.href=n,wn&&wn.remove()}}function Ty(t,e){return n=>{if(typeof n!="string")return;if(n.startsWith("<svg"))return n;const r=n.startsWith("default:");n=r?n.split(":")[1]:n;const s=n in Bs;let i;if(s)return Bs[n];if(!Ju[n]){if(i=L2(n),i=ir&&typeof i>"u"?Promise.resolve(i):i,i instanceof Promise)Ju[n]=i.then(o=>!o&&typeof n=="string"&&!r?i=typeof t=="function"?t(n):$2(n,e):o).then(o=>(typeof n=="string"&&(Bs[r?`default:${n}`:n]=o),o));else if(typeof i=="string")return Bs[r?`default:${n}`:n]=i,i}return Ju[n]}}function L2(t){if(ir)return B0?Iy(t):D2.then(()=>Iy(t))}function Iy(t){const e=un==null?void 0:un.getPropertyValue(`--fk-icon-${t}`);if(e){const n=atob(e);if(n.startsWith("<svg"))return Bs[t]=n,n}}function $2(t,e){const n=oc.startsWith("__")?"latest":oc,r=typeof e=="function"?e(t):`https://cdn.jsdelivr.net/npm/@formkit/icons@${n}/dist/icons/${t}.svg`;if(ir)return fetch(`${r}`).then(async s=>{const i=await s.text();if(i.startsWith("<svg"))return i}).catch(s=>{console.error(s)})}function V2(t,e){const n=/^[a-zA-Z-]+(?:-icon|Icon)$/;Object.keys(t.props).filter(s=>n.test(s)).forEach(s=>F2(t,e,s))}function F2(t,e,n){const r=t.props[n],s=e(r),i=`_raw${n.charAt(0).toUpperCase()}${n.slice(1)}`,o=`on${n.charAt(0).toUpperCase()}${n.slice(1)}Click`;if(t.addProps([i,o]),t.on(`prop:${n}`,U2),s instanceof Promise)return s.then(a=>{t.props[i]=a});t.props[i]=s}function U2(t){var e;const n=t.origin,r=t.payload,s=(e=n==null?void 0:n.props)===null||e===void 0?void 0:e.iconHandler,i=t.name.split(":")[1],o=`_raw${i.charAt(0).toUpperCase()}${i.slice(1)}`;if(s&&typeof s=="function"){const a=s(r);if(a instanceof Promise)return a.then(l=>{n.props[o]=l});n.props[o]=a}}const by={100:({data:t})=>`Only groups, lists, and forms can have children (${t.name}).`,101:({data:t})=>`You cannot directly modify the store (${t.name}). See: https://formkit.com/advanced/core#message-store`,102:({data:[t,e]})=>`You cannot directly assign node.${e} (${t.name})`,103:({data:[t]})=>`Schema expressions cannot start with an operator (${t})`,104:({data:[t,e]})=>`Schema expressions cannot end with an operator (${t} in "${e}")`,105:({data:t})=>`Invalid schema expression: ${t}`,106:({data:t})=>`Cannot submit because (${t}) is not in a form.`,107:({data:[t,e]})=>`Cannot set ${t.name} to non object value: ${e}`,108:({data:[t,e]})=>`Cannot set ${t.name} to non array value: ${e}`,300:({data:[t]})=>`Cannot set behavior prop to overscroll (on ${t.name} input) when options prop is a function.`,600:({data:t})=>`Unknown input type${typeof t.props.type=="string"?' "'+t.props.type+'"':""} ("${t.name}")`,601:({data:t})=>`Input definition${typeof t.props.type=="string"?' "'+t.props.type+'"':""} is missing a schema or component property (${t.name}).`},Ay={150:({data:t})=>`Schema function "${t}()" is not a valid function.`,151:({data:t})=>`No form element with id: ${t}`,152:({data:t})=>`No input element with id: ${t}`,350:({data:{node:t,inputType:e}})=>`Invalid options prop for ${t.name} input (${e}). See https://formkit.com/inputs/${e}`,650:'Schema "$get()" must use the id of an input to access.',651:({data:t})=>`Cannot setErrors() on "${t}" because no such id exists.`,652:({data:t})=>`Cannot clearErrors() on "${t}" because no such id exists.`,800:({data:t})=>`${t} is deprecated.`},j2=(t,e)=>{if(t.code in by){const n=by[t.code];t.message=typeof n=="function"?n(t):n}return e(t)};let Cy=!1;function B2(){Cy||(Fp(j2),Up(W2),Cy=!0)}const W2=(t,e)=>{if(t.code in Ay){const n=Ay[t.code];t.message=typeof n=="function"?n(t):n}return e(t)},z2=typeof window>"u",Zu=new Map;function H2(t,e){var n;!z2||!t||(Zu.has(t)||Zu.set(t,new Set),(n=Zu.get(t))===null||n===void 0||n.add(e))}const W0=typeof window>"u",Ao={},ri={};let St;const Xn=new WeakMap,q2="__raw__",K2=/[a-zA-Z0-9\-][cC]lass$/;function G2(t,e){const n=Ve(null);if(t==="get"){const s={};return n.value=Q2.bind(null,s),n}const r=t.split(".");return Gn(()=>{n.value=Gp(je(e)?e.value:e,r)}),n}function Gp(t,e){if(Array.isArray(t)){for(const s of t){const i=s!==!1&&Gp(s,e);if(i!==void 0)return i}return}let n,r=t;for(const s in e){const i=e[s];if(typeof r!="object"||r===null){n=void 0;break}const o=r[i];if(Number(s)===e.length-1&&o!==void 0){n=typeof o=="function"?o.bind(r):o;break}r=o}return n}function Q2(t,e){if(typeof e!="string")return bs(650);if(e in t||(t[e]=Ve(void 0)),t[e].value===void 0){t[e].value=null;const n=Sa(e);n&&(t[e].value=n.context),KV(e,({payload:r})=>{t[e].value=Pa(r)?r.context:r})}return t[e].value}function Ry(t,e,n){function r(d,g){const p=h(en(g.if),{if:!0}),_=c(d,g.then),v=g.else?c(d,g.else):null;return[p,_,v]}function s(d,g){var p,_;const v=h(en(d.if));let T=()=>g,A=()=>g;return typeof d.then=="object"?A=i(d.then,void 0):typeof d.then=="string"&&(!((p=d.then)===null||p===void 0)&&p.startsWith("$"))?A=h(en(d.then)):A=()=>d.then,re(d,"else")&&(typeof d.else=="object"?T=i(d.else):typeof d.else=="string"&&(!((_=d.else)===null||_===void 0)&&_.startsWith("$"))?T=h(en(d.else)):T=()=>d.else),()=>v()?A():T()}function i(d,g,p={}){const _=new Set(Object.keys(d||{})),v=g?h(en(g)):()=>({}),T=[A=>{const E=v();for(const D in E)_.has(D)||(A[D]=E[D])}];if(d){if($s(d))return s(d,p);for(let A in d){const E=d[A];let D;const I=typeof E=="string";A.startsWith(q2)?(A=A.substring(7),D=()=>E):I&&E.startsWith("$")&&E.length>1&&!(E.startsWith("$reset")&&K2.test(A))?D=h(en(E)):typeof E=="object"&&$s(E)?D=s(E,void 0):typeof E=="object"&&Ei(E)?D=i(E):D=()=>E,T.push(R=>{R[A]=D()})}}return()=>{const A=Array.isArray(d)?[]:{};return T.forEach(E=>E(A)),A}}function o(d,g){let p=null,_=()=>null,v=!1,T=null,A=null,E=null,D=!1;const I=UF(g);if(Tf(I)?(p=I.$el,_=I.$el!=="text"?i(I.attrs,I.bind):()=>null):If(I)?(typeof I.$cmp=="string"?re(d,I.$cmp)?p=d[I.$cmp]:(p=I.$cmp,D=!0):p=I.$cmp,_=i(I.props,I.bind)):$s(I)&&([v,T,A]=r(d,I)),!$s(I)&&"if"in I?v=h(en(I.if)):!$s(I)&&p===null&&(v=()=>!0),"children"in I&&I.children)if(typeof I.children=="string")if(I.children.startsWith("$slots."))p=p==="text"?"slot":p,T=h(en(I.children));else if(I.children.startsWith("$")&&I.children.length>1){const R=h(en(I.children));T=()=>String(R())}else T=()=>String(I.children);else if(Array.isArray(I.children))T=c(d,I.children);else{const[R,b,M]=r(d,I.children);T=W=>R&&R()?b&&b(W):M&&M(W)}if(If(I))if(T){const R=T;T=b=>({default(M,W){var K,me,Z,Fe;const We=St;W&&(St=W),M&&((K=Xn.get(St))===null||K===void 0||K.unshift(M)),b&&((me=Xn.get(St))===null||me===void 0||me.unshift(b));const ee=R(b);return M&&((Z=Xn.get(St))===null||Z===void 0||Z.shift()),b&&((Fe=Xn.get(St))===null||Fe===void 0||Fe.shift()),St=We,ee}}),T.slot=!0}else T=()=>({});if("for"in I&&I.for){const R=I.for.length===3?I.for[2]:I.for[1];E=[typeof R=="string"&&R.startsWith("$")?h(en(R)):()=>R,I.for[0],I.for.length===3?String(I.for[1]):null]}return[v,p,_,T,A,E,D]}function a(d,g){const p=d(g),_=St;return Object.keys(p).reduce((v,T)=>{const A=p&&p[T];return v[T]=E=>A&&A(E,_)||null,v},{})}function l(d,g){const[p,_,v,T,A,E,D]=o(d,g);let I=R=>{if(p&&_===null&&T)return p()?T(R):A&&A(R);if(_&&(!p||p())){if(_==="text"&&T)return Il(String(T()));if(_==="slot"&&T)return T(R);const b=D?_v(_):_,M=T!=null&&T.slot?a(T,R):null;return Do(b,v(),M||(T?T(R):[]))}return typeof A=="function"?A(R):A};if(E){const R=I,[b,M,W]=E;I=()=>{const K=b(),me=Number.isFinite(K)?Array(Number(K)).fill(0).map((ee,se)=>se):K,Z=[];if(typeof me!="object")return null;const Fe=Xn.get(St)||[],We=Array.isArray(me);for(const ee in me){if(We&&ee in Array.prototype)continue;const se=Object.defineProperty({...Fe.reduce((he,Xe)=>he.__idata?{...he,...Xe}:Xe,{}),[M]:me[ee],...W!==null?{[W]:We?Number(ee):ee}:{}},"__idata",{enumerable:!1,value:!0});Fe.unshift(se),Z.push(R.bind(null,se)()),Fe.shift()}return Z}}return I}function c(d,g){if(Array.isArray(g)){const _=g.map(l.bind(null,d));return v=>_.map(T=>T(v))}const p=l(d,g);return _=>p(_)}const u=[];function h(d,g={}){const p=new WeakMap;return u.push((_,v)=>{p.set(v,d.provide(T=>_(T,g)))}),()=>p.get(St)()}function f(d,g){var p;n??(n=JSON.stringify(e));const[_,v]=re(Ao,n)?Ao[n]:[c(t,e),u];return W0||((p=ri[n])!==null&&p!==void 0||(ri[n]=0),ri[n]++,Ao[n]=[_,v]),v.forEach(T=>{T(d,g)}),()=>(St=g,_())}return f}function z0(t,e){const n=Xn.get(St)||[];let r;return n.length&&(r=Gp(n,t.split("."))),r===void 0?e:r}function Y2(t,e){return new Proxy(t,{get(...n){let r;const s=n[1];if(typeof s=="string"){const i=St;St=e,r=z0(s,void 0),St=i}return r!==void 0?r:Reflect.get(...n)}})}function Sy(t,e,n){return t((r,s={})=>r.reduce((i,o)=>{if(o.startsWith("slots.")){const a=o.substring(6),l=()=>e.slots&&re(e.slots,a)&&typeof e.slots[a]=="function";if(s.if)i[o]=l;else if(e.slots){const c=Y2(e,n);i[o]=()=>l()?e.slots[a](c):null}}else{const a=G2(o,e);i[o]=()=>z0(o,a.value)}return i},{}),n)}function Py(t,e,n){if(e??(e=JSON.stringify(t)),ri[e]--,ri[e]===0){delete ri[e];const[,r]=Ao[e];delete Ao[e],r.length=0}Xn.delete(n)}const H0=vs({name:"FormKitSchema",props:{schema:{type:[Array,Object],required:!0},data:{type:Object,default:()=>({})},library:{type:Object,default:()=>({})},memoKey:{type:String,required:!1}},setup(t,e){var n;const r=No();let s={};Xn.set(s,[]);let i=Ry(t.library,t.schema,t.memoKey),o,a;W0||Yt(()=>t.schema,(c,u)=>{var h;const f=s;s={},Xn.set(s,[]),i=Ry(t.library,t.schema,t.memoKey),o=Sy(i,a,s),c===u&&((h=r==null?void 0:r.proxy)===null||h===void 0?void 0:h.$forceUpdate)(),Py(t.schema,t.memoKey,f)},{deep:!0}),Gn(()=>{var c;a=Object.assign(Jn((c=t.data)!==null&&c!==void 0?c:{}),{slots:e.slots}),e.slots,o=Sy(i,a,s)});function l(){Py(t.schema,t.memoKey,s),a.node&&a.node.destroy(),a.slots=null,a=null,o=null}return Qf(l),H2((n=No())===null||n===void 0?void 0:n.appContext.app,l),()=>o?o():null}}),X2=typeof window>"u",ky=Symbol("FormKitParent");function J2(t,e){const n=ij(t,e);if(n.props.definition||Ht(600,n),n.props.definition.component)return()=>{var l;return Do((l=n.props.definition)===null||l===void 0?void 0:l.component,{context:n.context},{...e.slots})};const r=Ve([]);let s=n.props.definition.schemaMemoKey;const i=()=>{var l,c;const u=(c=(l=n.props)===null||l===void 0?void 0:l.definition)===null||c===void 0?void 0:c.schema;u||Ht(601,n),typeof u=="function"?(r.value=u({...t.sectionsSchema}),(s&&t.sectionsSchema||"memoKey"in u&&typeof u.memoKey=="string")&&(s=(s??(u==null?void 0:u.memoKey))+JSON.stringify(t.sectionsSchema))):r.value=u};i(),X2||n.on("schema",()=>{s+="♻️",i()}),e.emit("node",n);const o=n.props.definition.library,a={FormKit:ra(q0),...o};return e.expose({node:n}),()=>Do(H0,{schema:r.value,data:n.context,library:a,memoKey:s},{...e.slots})}const q0=vs(J2,{props:fU,inheritAttrs:!1}),Z2=Symbol();function ej(t,e){return t.component(e.alias||"FormKit",q0).component(e.schemaAlias||"FormKitSchema",H0),{get:Sa,setLocale:n=>{var r;!((r=e.config)===null||r===void 0)&&r.rootConfig&&(e.config.rootConfig.locale=n)},clearErrors:WF,setErrors:BF,submit:l0,reset:c0}}const K0=Symbol.for("FormKitOptions"),tj=Symbol.for("FormKitConfig"),nj={install(t,e){const n=Object.assign({alias:"FormKit",schemaAlias:"FormKitSchema"},typeof e=="function"?e():e),r=GV(n.config||{});n.config={rootConfig:r},t.config.globalProperties.$formkit=ej(t,n),t.provide(K0,n),t.provide(tj,r)}},rj=typeof window<"u",eh=["help","label","ignore","disabled","preserve",/^preserve(-e|E)rrors/,/^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,/^[a-zA-Z-]+(?:-class|Class)$/,"prefixIcon","suffixIcon",/^[a-zA-Z-]+(?:-icon|Icon)$/];function Ny(t,e){e.classes&&Object.keys(e.classes).forEach(n=>{typeof n=="string"&&(t.props[`_${n}Class`]=e.classes[n],bo(e.classes[n])&&n==="inner"&&Object.values(e.classes[n]))})}function sj(t){return t?["Submit","SubmitRaw","SubmitInvalid"].reduce((n,r)=>{const s=`on${r}`;return s in t&&typeof t[s]=="function"&&(n[s]=t[s]),n},{}):{}}function ij(t,e,n={}){var r;const s=Object.assign({},$t(K0)||{},n),i=$t(Z2,Ve(rj?document:void 0)),o=No(),a=sj(o==null?void 0:o.vnode.props),l=["modelValue","model-value"].some(I=>{var R;return I in((R=o==null?void 0:o.vnode.props)!==null&&R!==void 0?R:{})});let c=!1;dv(()=>{c=!0});const u=t.modelValue!==void 0?t.modelValue:ln(e.attrs.value);function h(){var I;const R={...Os(t),...a,type:(I=t.type)!==null&&I!==void 0?I:"text",__root:i.value,__slots:e.slots},b=iy(Os(e.attrs),eh);b.key||(b.key=Fi()),R.attrs=b;const M=oy(Os(e.attrs),eh);for(const K in M)R[ei(K)]=M[K];const W={props:{}};return Ny(W,t),Object.assign(R,W.props),typeof R.type!="string"&&(R.definition=R.type,delete R.type),R}const f=h(),d=f.ignore?null:t.parent||$t(ky,null),g=VF(_s(s||{},{name:t.name||void 0,value:u,parent:d,plugins:(s.plugins||[]).concat((r=t.plugins)!==null&&r!==void 0?r:[]),config:t.config||{},props:f,index:t.index,sync:!!cn(e.attrs.sync||e.attrs.dynamic)},!1,!0));g.props.definition||Ht(600,g);const p=Ve(new Set(g.props.definition.props||[]));g.on("added-props",({payload:I})=>{Array.isArray(I)&&I.forEach(R=>p.value.add(R))});const _=Et(()=>eh.concat([...p.value]).reduce((I,R)=>(typeof R=="string"?(I.push(ei(R)),I.push(r0(R))):I.push(R),I),[]));Gn(()=>Ny(g,t));const v=Os(t);for(const I in v)Yt(()=>t[I],()=>{t[I]!==void 0&&(g.props[I]=t[I])});Gn(()=>{g.props.__root=i.value});const T=new Set,A=Os(e.attrs);Gn(()=>{E(oy(A,_.value))});function E(I){T.forEach(R=>{R(),T.delete(R)});for(const R in I){const b=ei(R);T.add(Yt(()=>e.attrs[R],()=>{g.props[b]=e.attrs[R]}))}}if(Gn(()=>{const I=iy(Os(e.attrs),_.value);"multiple"in I&&(I.multiple=cn(I.multiple)),typeof I.onBlur=="function"&&(I.onBlur=RV(I.onBlur)),g.props.attrs=Object.assign({},g.props.attrs||{},I)}),Gn(()=>{var I;const R=((I=t.errors)!==null&&I!==void 0?I:[]).map(b=>yn({key:$p(b),type:"error",value:b,meta:{source:"prop"}}));g.store.apply(R,b=>b.type==="error"&&b.meta.source==="prop")}),g.type!=="input"){const I=`${g.name}-prop`;Gn(()=>{var R;const b=(R=t.inputErrors)!==null&&R!==void 0?R:{},M=Object.keys(b);M.length||g.clearErrors(!0,I);const W=M.reduce((K,me)=>{let Z=b[me];return typeof Z=="string"&&(Z=[Z]),Array.isArray(Z)&&(K[me]=Z.map(Fe=>yn({key:Fe,type:"error",value:Fe,meta:{source:I}}))),K},{});g.store.apply(W,K=>K.type==="error"&&K.meta.source===I)})}Gn(()=>Object.assign(g.config,t.config)),g.type!=="input"&&co(ky,g);let D;return g.on("modelUpdated",()=>{var I,R;e.emit("inputRaw",(I=g.context)===null||I===void 0?void 0:I.value,g),c&&e.emit("input",(R=g.context)===null||R===void 0?void 0:R.value,g),l&&g.context&&(D=ln(g.value),e.emit("update:modelValue",yf(g.value)))}),l&&(Yt(jb(t,"modelValue"),I=>{Nt(D,I)||g.input(I,!1)},{deep:!0}),g.value!==u&&g.emit("modelUpdated")),pv(()=>g.destroy()),g}const oj=function(e){e.ledger.count("blocking",b=>b.blocking);const n=Ve(!e.ledger.value("blocking"));e.ledger.count("errors",b=>b.type==="error");const r=Ve(!!e.ledger.value("errors"));let s=!1;zf(()=>{s=!0});const i=Jn(e.store.reduce((b,M)=>(M.visible&&(b[M.key]=M),b),{})),o=Ve(e.props.validationVisibility||(e.props.type==="checkbox"?"dirty":"blur"));e.on("prop:validationVisibility",({payload:b})=>{o.value=b});const a=Ve(o.value==="live"),l=Ve(e.children.map(b=>b.uid)),c=Et(()=>{if(!A.state)return!1;if(A.state.submitted)return!0;if(!a.value&&!A.state.settled)return!1;switch(o.value){case"live":return!0;case"blur":return A.state.blurred;case"dirty":return A.state.dirty;default:return!1}}),u=Et(()=>A&&h.value?n.value&&!r.value:A.state.dirty&&!Xt(A.value)),h=Ve(Array.isArray(e.props.parsedRules)&&e.props.parsedRules.length>0);e.on("prop:parsedRules",({payload:b})=>{h.value=Array.isArray(b)&&b.length>0});const f=Et(()=>{const b={};for(const M in i){const W=i[M];(W.type!=="validation"||c.value)&&(b[M]=W)}return b}),d=Jn(e.store.reduce((b,M)=>(M.type==="ui"&&M.visible&&(b[M.key]=M),b),{})),g=Jn({}),p=new Proxy(g,{get(...b){const[M,W]=b;let K=Reflect.get(...b);return!K&&typeof W=="string"&&!re(M,W)&&!W.startsWith("__v")&&na(e).watch(Z=>{const Fe=typeof Z.config.rootClasses=="function"?Z.config.rootClasses(W,Z):{},We=Z.config.classes?ml(W,Z,Z.config.classes[W]):{},ee=ml(W,Z,Z.props[`_${W}Class`]),se=ml(W,Z,Z.props[`${W}Class`]);K=jF(Z,W,Fe,We,ee,se),M[W]=K??""}),K}}),_=Et(()=>{const b=[];A.help&&b.push(`help-${e.props.id}`);for(const M in f.value)b.push(`${e.props.id}-${M}`);return b.length?b.join(" "):void 0}),v=Ve(e.value),T=Ve(e.value),A=Jn({_value:T,attrs:e.props.attrs,disabled:e.props.disabled,describedBy:_,fns:{length:b=>Object.keys(b).length,number:b=>Number(b),string:b=>String(b),json:b=>JSON.stringify(b),eq:Nt},handlers:{blur:b=>{e&&(e.store.set(yn({key:"blurred",visible:!1,value:!0})),typeof e.props.attrs.onBlur=="function"&&e.props.attrs.onBlur(b))},touch:()=>{var b;const M=A.dirtyBehavior==="compare";if(!((b=e.store.dirty)===null||b===void 0)&&b.value&&!M)return;const W=!Nt(e.props._init,e._value);!W&&!M||e.store.set(yn({key:"dirty",visible:!1,value:W}))},DOMInput:b=>{e.input(b.target.value),e.emit("dom-input-event",b)}},help:e.props.help,id:e.props.id,items:l,label:e.props.label,messages:f,node:ra(e),options:e.props.options,defaultMessagePlacement:!0,slots:e.props.__slots,state:{blurred:!1,complete:u,dirty:!1,empty:Xt(v),submitted:!1,settled:e.isSettled,valid:n,errors:r,rules:h,validationVisible:c},type:e.props.type,family:e.props.family,ui:d,value:v,classes:p});e.on("created",()=>{Nt(A.value,e.value)||(T.value=e.value,v.value=e.value,Va(v),Va(T)),(async()=>(await e.settled,e&&(e.props._init=ln(e.value))))()}),e.on("settled",({payload:b})=>{A.state.settled=b});function E(b){b.forEach(M=>{M=ei(M),re(A,M)||(A[M]=e.props[M]),e.on(`prop:${M}`,({payload:W})=>{A[M]=W})})}E((()=>{const b=["__root","help","label","disabled","options","type","attrs","preserve","preserveErrors","id","dirtyBehavior"],M=/^[a-zA-Z-]+(?:-icon|Icon)$/,W=Object.keys(e.props).filter(K=>M.test(K));return b.concat(W)})());function I(b){b.props&&E(b.props)}e.props.definition&&I(e.props.definition),e.on("added-props",({payload:b})=>E(b)),e.on("input",({payload:b})=>{e.type!=="input"&&!je(b)&&!Rr(b)?T.value=yf(b):(T.value=b,Va(T))}),e.on("commitRaw",({payload:b})=>{e.type!=="input"&&!je(b)&&!Rr(b)?v.value=T.value=yf(b):(v.value=T.value=b,Va(v)),e.emit("modelUpdated")}),e.on("commit",({payload:b})=>{(!A.state.dirty||A.dirtyBehavior==="compare")&&e.isCreated&&s&&A.handlers.touch(),u&&e.type==="input"&&r.value&&!cn(e.props.preserveErrors)&&e.store.filter(M=>{var W;return!(M.type==="error"&&((W=M.meta)===null||W===void 0?void 0:W.autoClear)===!0)}),e.type==="list"&&e.sync&&(l.value=e.children.map(M=>M.uid)),A.state.empty=Xt(b)});const R=async b=>{b.type==="ui"&&b.visible&&!b.meta.showAsMessage?d[b.key]=b:b.visible?i[b.key]=b:b.type==="state"&&(A.state[b.key]=!!b.value)};e.on("message-added",b=>R(b.payload)),e.on("message-updated",b=>R(b.payload)),e.on("message-removed",({payload:b})=>{delete d[b.key],delete i[b.key],delete A.state[b.key]}),e.on("settled:blocking",()=>{n.value=!0}),e.on("unsettled:blocking",()=>{n.value=!1}),e.on("settled:errors",()=>{r.value=!1}),e.on("unsettled:errors",()=>{r.value=!0}),Yt(c,b=>{b&&(a.value=!0)}),e.context=A,e.emit("context",e,!1),e.on("destroyed",()=>{e.context=void 0,e=null})},aj=(t={})=>{B2();const{rules:e={},locales:n={},inputs:r={},messages:s={},locale:i=void 0,theme:o=void 0,iconLoaderUrl:a=void 0,iconLoader:l=void 0,icons:c={},...u}=t,h=zF({...O2,...e||{}}),f=uU(_s({en:oU,...n||{}},s)),d=hU(t2,r),g=x2(o,c,a,l);return _s({plugins:[d,g,oj,f,h],...i?{config:{locale:i}}:{}},u||{},!0)},lj={apiKey:"AIzaSyCS6jfWPaS9ULRtbGaVcgWGdi61SYZ5QNA",authDomain:"elections-86b8b.firebaseapp.com",projectId:"elections-86b8b",storageBucket:"elections-86b8b.appspot.com",messagingSenderId:"369687186588",appId:"1:369687186588:web:1733816fba13f51828b159",measurementId:"G-JXKXHVH0J1"},G0=tE(lj),Oy=t$(G0),Na=mC(oV);Na.use(vC());Na.use(_V);Na.use(q$,{firebaseApp:G0,modules:[z$()]});Na.use(nj,aj({theme:"genesis",locales:{pl:cU},locale:"pl"}));Na.mount("#app");export{Lp as _,cj as a,Qn as c,bn as o};
