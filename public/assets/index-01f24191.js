(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function zf(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ue={},Ks=[],mn=()=>{},Rb=()=>!1,Cb=/^on[^a-z]/,Sc=t=>Cb.test(t),Hf=t=>t.startsWith("onUpdate:"),ot=Object.assign,qf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sb=Object.prototype.hasOwnProperty,Te=(t,e)=>Sb.call(t,e),re=Array.isArray,Gs=t=>Pc(t)==="[object Map]",Ky=t=>Pc(t)==="[object Set]",ce=t=>typeof t=="function",Ze=t=>typeof t=="string",Kf=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",Gy=t=>$e(t)&&ce(t.then)&&ce(t.catch),Qy=Object.prototype.toString,Pc=t=>Qy.call(t),Pb=t=>Pc(t).slice(8,-1),Yy=t=>Pc(t)==="[object Object]",Gf=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ul=zf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},kb=/-(\w)/g,Un=kc(t=>t.replace(kb,(e,n)=>n?n.toUpperCase():"")),Nb=/\B([A-Z])/g,Ni=kc(t=>t.replace(Nb,"-$1").toLowerCase()),Nc=kc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Su=kc(t=>t?`on${Nc(t)}`:""),Oo=(t,e)=>!Object.is(t,e),Pu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Cl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ob=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gm;const vh=()=>gm||(gm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qf(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?Lb(r):Qf(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ze(t))return t;if($e(t))return t}}const Db=/;(?![^(]*\))/g,xb=/:([^]+)/,Mb=/\/\*[^]*?\*\//g;function Lb(t){const e={};return t.replace(Mb,"").split(Db).forEach(n=>{if(n){const r=n.split(xb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Yf(t){let e="";if(Ze(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Yf(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Vb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$b=zf(Vb);function Xy(t){return!!t||t===""}const Qs=t=>Ze(t)?t:t==null?"":re(t)||$e(t)&&(t.toString===Qy||!ce(t.toString))?JSON.stringify(t,Jy,2):String(t),Jy=(t,e)=>e&&e.__v_isRef?Jy(t,e.value):Gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ky(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!re(e)&&!Yy(e)?String(e):e;let jt;class Zy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ev(t){return new Zy(t)}function Fb(t,e=jt){e&&e.active&&e.effects.push(t)}function tv(){return jt}function Ub(t){jt&&jt.cleanups.push(t)}const Xf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},nv=t=>(t.w&Vr)>0,rv=t=>(t.n&Vr)>0,jb=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Vr},Bb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];nv(s)&&!rv(s)?s.delete(t):e[n++]=s,s.w&=~Vr,s.n&=~Vr}e.length=n}},Sl=new WeakMap;let ro=0,Vr=1;const Eh=30;let on;const ss=Symbol(""),wh=Symbol("");class Jf{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fb(this,r)}run(){if(!this.active)return this.fn();let e=on,n=Nr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=on,on=this,Nr=!0,Vr=1<<++ro,ro<=Eh?jb(this):_m(this),this.fn()}finally{ro<=Eh&&Bb(this),Vr=1<<--ro,on=this.parent,Nr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){on===this?this.deferStop=!0:this.active&&(_m(this),this.onStop&&this.onStop(),this.active=!1)}}function _m(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nr=!0;const sv=[];function Oi(){sv.push(Nr),Nr=!1}function Di(){const t=sv.pop();Nr=t===void 0?!0:t}function $t(t,e,n){if(Nr&&on){let r=Sl.get(t);r||Sl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Xf()),iv(s)}}function iv(t,e){let n=!1;ro<=Eh?rv(t)||(t.n|=Vr,n=!nv(t)):n=!t.has(on),n&&(t.add(on),on.deps.push(t))}function hr(t,e,n,r,s,i){const o=Sl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?Gf(n)&&a.push(o.get("length")):(a.push(o.get(ss)),Gs(t)&&a.push(o.get(wh)));break;case"delete":re(t)||(a.push(o.get(ss)),Gs(t)&&a.push(o.get(wh)));break;case"set":Gs(t)&&a.push(o.get(ss));break}if(a.length===1)a[0]&&Th(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Th(Xf(l))}}function Th(t,e){const n=re(t)?t:[...t];for(const r of n)r.computed&&ym(r);for(const r of n)r.computed||ym(r)}function ym(t,e){(t!==on||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Wb(t,e){var n;return(n=Sl.get(t))==null?void 0:n.get(e)}const zb=zf("__proto__,__v_isRef,__isVue"),ov=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kf)),Hb=Zf(),qb=Zf(!1,!0),Kb=Zf(!0),vm=Gb();function Gb(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let i=0,o=this.length;i<o;i++)$t(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Oi();const r=Ie(this)[e].apply(this,n);return Di(),r}}),t}function Qb(t){const e=Ie(this);return $t(e,"has",t),e.hasOwnProperty(t)}function Zf(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?hA:hv:e?uv:cv).get(r))return r;const o=re(r);if(!t){if(o&&Te(vm,s))return Reflect.get(vm,s,i);if(s==="hasOwnProperty")return Qb}const a=Reflect.get(r,s,i);return(Kf(s)?ov.has(s):zb(s))||(t||$t(r,"get",s),e)?a:He(a)?o&&Gf(s)?a:a.value:$e(a)?t?dv(a):tr(a):a}}const Yb=av(),Xb=av(!0);function av(t=!1){return function(n,r,s,i){let o=n[r];if(li(o)&&He(o)&&!He(s))return!1;if(!t&&(!Pl(s)&&!li(s)&&(o=Ie(o),s=Ie(s)),!re(n)&&He(o)&&!He(s)))return o.value=s,!0;const a=re(n)&&Gf(r)?Number(r)<n.length:Te(n,r),l=Reflect.set(n,r,s,i);return n===Ie(i)&&(a?Oo(s,o)&&hr(n,"set",r,s):hr(n,"add",r,s)),l}}function Jb(t,e){const n=Te(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&hr(t,"delete",e,void 0),r}function Zb(t,e){const n=Reflect.has(t,e);return(!Kf(e)||!ov.has(e))&&$t(t,"has",e),n}function eA(t){return $t(t,"iterate",re(t)?"length":ss),Reflect.ownKeys(t)}const lv={get:Hb,set:Yb,deleteProperty:Jb,has:Zb,ownKeys:eA},tA={get:Kb,set(t,e){return!0},deleteProperty(t,e){return!0}},nA=ot({},lv,{get:qb,set:Xb}),ed=t=>t,Oc=t=>Reflect.getPrototypeOf(t);function Ba(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ie(t),i=Ie(e);n||(e!==i&&$t(s,"get",e),$t(s,"get",i));const{has:o}=Oc(s),a=r?ed:n?rd:Do;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Wa(t,e=!1){const n=this.__v_raw,r=Ie(n),s=Ie(t);return e||(t!==s&&$t(r,"has",t),$t(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function za(t,e=!1){return t=t.__v_raw,!e&&$t(Ie(t),"iterate",ss),Reflect.get(t,"size",t)}function Em(t){t=Ie(t);const e=Ie(this);return Oc(e).has.call(e,t)||(e.add(t),hr(e,"add",t,t)),this}function wm(t,e){e=Ie(e);const n=Ie(this),{has:r,get:s}=Oc(n);let i=r.call(n,t);i||(t=Ie(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Oo(e,o)&&hr(n,"set",t,e):hr(n,"add",t,e),this}function Tm(t){const e=Ie(this),{has:n,get:r}=Oc(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&hr(e,"delete",t,void 0),i}function Im(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&hr(t,"clear",void 0,void 0),n}function Ha(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ie(o),l=e?ed:t?rd:Do;return!t&&$t(a,"iterate",ss),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function qa(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=Gs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?ed:e?rd:Do;return!e&&$t(i,"iterate",l?wh:ss),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function wr(t){return function(...e){return t==="delete"?!1:this}}function rA(){const t={get(i){return Ba(this,i)},get size(){return za(this)},has:Wa,add:Em,set:wm,delete:Tm,clear:Im,forEach:Ha(!1,!1)},e={get(i){return Ba(this,i,!1,!0)},get size(){return za(this)},has:Wa,add:Em,set:wm,delete:Tm,clear:Im,forEach:Ha(!1,!0)},n={get(i){return Ba(this,i,!0)},get size(){return za(this,!0)},has(i){return Wa.call(this,i,!0)},add:wr("add"),set:wr("set"),delete:wr("delete"),clear:wr("clear"),forEach:Ha(!0,!1)},r={get(i){return Ba(this,i,!0,!0)},get size(){return za(this,!0)},has(i){return Wa.call(this,i,!0)},add:wr("add"),set:wr("set"),delete:wr("delete"),clear:wr("clear"),forEach:Ha(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=qa(i,!1,!1),n[i]=qa(i,!0,!1),e[i]=qa(i,!1,!0),r[i]=qa(i,!0,!0)}),[t,n,e,r]}const[sA,iA,oA,aA]=rA();function td(t,e){const n=e?t?aA:oA:t?iA:sA;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Te(n,s)&&s in r?n:r,s,i)}const lA={get:td(!1,!1)},cA={get:td(!1,!0)},uA={get:td(!0,!1)},cv=new WeakMap,uv=new WeakMap,hv=new WeakMap,hA=new WeakMap;function fA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dA(t){return t.__v_skip||!Object.isExtensible(t)?0:fA(Pb(t))}function tr(t){return li(t)?t:nd(t,!1,lv,lA,cv)}function fv(t){return nd(t,!1,nA,cA,uv)}function dv(t){return nd(t,!0,tA,uA,hv)}function nd(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=dA(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Or(t){return li(t)?Or(t.__v_raw):!!(t&&t.__v_isReactive)}function li(t){return!!(t&&t.__v_isReadonly)}function Pl(t){return!!(t&&t.__v_isShallow)}function pv(t){return Or(t)||li(t)}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function ua(t){return Cl(t,"__v_skip",!0),t}const Do=t=>$e(t)?tr(t):t,rd=t=>$e(t)?dv(t):t;function mv(t){Nr&&on&&(t=Ie(t),iv(t.dep||(t.dep=Xf())))}function sd(t,e){t=Ie(t);const n=t.dep;n&&Th(n)}function He(t){return!!(t&&t.__v_isRef===!0)}function je(t){return _v(t,!1)}function gv(t){return _v(t,!0)}function _v(t,e){return He(t)?t:new pA(t,e)}class pA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:Do(e)}get value(){return mv(this),this._value}set value(e){const n=this.__v_isShallow||Pl(e)||li(e);e=n?e:Ie(e),Oo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Do(e),sd(this))}}function Ka(t){sd(t)}function Re(t){return He(t)?t.value:t}function Qn(t){return ce(t)?t():Re(t)}const mA={get:(t,e,n)=>Re(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return He(s)&&!He(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function yv(t){return Or(t)?t:new Proxy(t,mA)}class gA{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Wb(Ie(this._object),this._key)}}class _A{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function yA(t,e,n){return He(t)?t:ce(t)?new _A(t):$e(t)&&arguments.length>1?vA(t,e,n):je(t)}function vA(t,e,n){const r=t[e];return He(r)?r:new gA(t,e,n)}class EA{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Jf(e,()=>{this._dirty||(this._dirty=!0,sd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return mv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function wA(t,e,n=!1){let r,s;const i=ce(t);return i?(r=t,s=mn):(r=t.get,s=t.set),new EA(r,s,i||!s,n)}function Dr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Dc(i,e,n)}return s}function gn(t,e,n,r){if(ce(t)){const i=Dr(t,e,n,r);return i&&Gy(i)&&i.catch(o=>{Dc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(gn(t[i],e,n,r));return s}function Dc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Dr(l,null,10,[t,o,a]);return}}TA(t,n,s,r)}function TA(t,e,n,r=!0){console.error(t)}let xo=!1,Ih=!1;const Et=[];let Cn=0;const Ys=[];let Yn=null,Xr=0;const vv=Promise.resolve();let id=null;function od(t){const e=id||vv;return t?e.then(this?t.bind(this):t):e}function IA(t){let e=Cn+1,n=Et.length;for(;e<n;){const r=e+n>>>1;Mo(Et[r])<t?e=r+1:n=r}return e}function ad(t){(!Et.length||!Et.includes(t,xo&&t.allowRecurse?Cn+1:Cn))&&(t.id==null?Et.push(t):Et.splice(IA(t.id),0,t),Ev())}function Ev(){!xo&&!Ih&&(Ih=!0,id=vv.then(Tv))}function bA(t){const e=Et.indexOf(t);e>Cn&&Et.splice(e,1)}function AA(t){re(t)?Ys.push(...t):(!Yn||!Yn.includes(t,t.allowRecurse?Xr+1:Xr))&&Ys.push(t),Ev()}function bm(t,e=xo?Cn+1:0){for(;e<Et.length;e++){const n=Et[e];n&&n.pre&&(Et.splice(e,1),e--,n())}}function wv(t){if(Ys.length){const e=[...new Set(Ys)];if(Ys.length=0,Yn){Yn.push(...e);return}for(Yn=e,Yn.sort((n,r)=>Mo(n)-Mo(r)),Xr=0;Xr<Yn.length;Xr++)Yn[Xr]();Yn=null,Xr=0}}const Mo=t=>t.id==null?1/0:t.id,RA=(t,e)=>{const n=Mo(t)-Mo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Tv(t){Ih=!1,xo=!0,Et.sort(RA);const e=mn;try{for(Cn=0;Cn<Et.length;Cn++){const n=Et[Cn];n&&n.active!==!1&&Dr(n,null,14)}}finally{Cn=0,Et.length=0,wv(),xo=!1,id=null,(Et.length||Ys.length)&&Tv()}}function CA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ue;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Ue;f&&(s=n.map(d=>Ze(d)?d.trim():d)),h&&(s=n.map(Ob))}let a,l=r[a=Su(e)]||r[a=Su(Un(e))];!l&&i&&(l=r[a=Su(Ni(e))]),l&&gn(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gn(c,t,6,s)}}function Iv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ce(t)){const l=c=>{const u=Iv(c,e,!0);u&&(a=!0,ot(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?($e(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>o[l]=null):ot(o,i),$e(t)&&r.set(t,o),o)}function xc(t,e){return!t||!Sc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,Ni(e))||Te(t,e))}let Xt=null,Mc=null;function kl(t){const e=Xt;return Xt=t,Mc=t&&t.type.__scopeId||null,e}function ld(t){Mc=t}function cd(){Mc=null}function Nl(t,e=Xt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Mm(-1);const i=kl(e);let o;try{o=t(...s)}finally{kl(i),r._d&&Mm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ku(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:p}=t;let _,v;const w=kl(t);try{if(n.shapeFlag&4){const E=s||r;_=Rn(u.call(E,E,h,i,d,f,m)),v=l}else{const E=e;_=Rn(E.length>1?E(i,{attrs:l,slots:a,emit:c}):E(i,null)),v=e.props?l:SA(l)}}catch(E){_o.length=0,Dc(E,t,1),_=Me(cs)}let I=_;if(v&&p!==!1){const E=Object.keys(v),{shapeFlag:x}=I;E.length&&x&7&&(o&&E.some(Hf)&&(v=PA(v,o)),I=ci(I,v))}return n.dirs&&(I=ci(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),_=I,kl(w),_}const SA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Sc(n))&&((e||(e={}))[n]=t[n]);return e},PA=(t,e)=>{const n={};for(const r in t)(!Hf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Am(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!xc(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Am(r,o,c):!0:!!o;return!1}function Am(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!xc(n,i))return!0}return!1}function NA({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const OA=t=>t.__isSuspense;function DA(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):AA(t)}function Xn(t,e){return ud(t,null,e)}const Ga={};function Zt(t,e,n){return ud(t,e,n)}function ud(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ue){var a;const l=tv()===((a=rt)==null?void 0:a.scope)?rt:null;let c,u=!1,h=!1;if(He(t)?(c=()=>t.value,u=Pl(t)):Or(t)?(c=()=>t,r=!0):re(t)?(h=!0,u=t.some(E=>Or(E)||Pl(E)),c=()=>t.map(E=>{if(He(E))return E.value;if(Or(E))return Bs(E);if(ce(E))return Dr(E,l,2)})):ce(t)?e?c=()=>Dr(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),gn(t,l,3,[d])}:c=mn,e&&r){const E=c;c=()=>Bs(E())}let f,d=E=>{f=w.onStop=()=>{Dr(E,l,4)}},m;if($o)if(d=mn,e?n&&gn(e,l,3,[c(),h?[]:void 0,d]):c(),s==="sync"){const E=AR();m=E.__watcherHandles||(E.__watcherHandles=[])}else return mn;let p=h?new Array(t.length).fill(Ga):Ga;const _=()=>{if(w.active)if(e){const E=w.run();(r||u||(h?E.some((x,b)=>Oo(x,p[b])):Oo(E,p)))&&(f&&f(),gn(e,l,3,[E,p===Ga?void 0:h&&p[0]===Ga?[]:p,d]),p=E)}else w.run()};_.allowRecurse=!!e;let v;s==="sync"?v=_:s==="post"?v=()=>Mt(_,l&&l.suspense):(_.pre=!0,l&&(_.id=l.uid),v=()=>ad(_));const w=new Jf(c,v);e?n?_():p=w.run():s==="post"?Mt(w.run.bind(w),l&&l.suspense):w.run();const I=()=>{w.stop(),l&&l.scope&&qf(l.scope.effects,w)};return m&&m.push(I),I}function xA(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?bv(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const o=rt;ui(this);const a=ud(s,i.bind(r),n);return o?ui(o):is(),a}function bv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Bs(t,e){if(!$e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),He(t))Bs(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)Bs(t[n],e);else if(Ky(t)||Gs(t))t.forEach(n=>{Bs(n,e)});else if(Yy(t))for(const n in t)Bs(t[n],e);return t}function Kr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Oi(),gn(l,n,8,[t.el,a,t,e]),Di())}}function ws(t,e){return ce(t)?(()=>ot({name:t.name},e,{setup:t}))():t}const hl=t=>!!t.type.__asyncLoader,Av=t=>t.type.__isKeepAlive;function MA(t,e){Rv(t,"a",e)}function LA(t,e){Rv(t,"da",e)}function Rv(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Lc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Av(s.parent.vnode)&&VA(r,e,n,s),s=s.parent}}function VA(t,e,n,r){const s=Lc(e,t,r,!0);hd(()=>{qf(r[e],s)},n)}function Lc(t,e,n=rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Oi(),ui(n);const a=gn(e,n,t,o);return is(),Di(),a});return r?s.unshift(i):s.push(i),i}}const vr=t=>(e,n=rt)=>(!$o||t==="sp")&&Lc(t,(...r)=>e(...r),n),$A=vr("bm"),Cv=vr("m"),FA=vr("bu"),UA=vr("u"),Sv=vr("bum"),hd=vr("um"),Pv=vr("sp"),jA=vr("rtg"),BA=vr("rtc");function WA(t,e=rt){Lc("ec",t,e)}const kv="components";function Nv(t,e){return HA(kv,t,!0,e)||t}const zA=Symbol.for("v-ndc");function HA(t,e,n=!0,r=!1){const s=Xt||rt;if(s){const i=s.type;if(t===kv){const a=TR(i,!1);if(a&&(a===e||a===Un(e)||a===Nc(Un(e))))return i}const o=Rm(s[t]||i[t],e)||Rm(s.appContext[t],e);return!o&&r?i:o}}function Rm(t,e){return t&&(t[e]||t[Un(e)]||t[Nc(Un(e))])}function qA(t,e,n,r){let s;const i=n&&n[r];if(re(t)||Ze(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const bh=t=>t?Bv(t)?gd(t)||t.proxy:bh(t.parent):null,mo=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bh(t.parent),$root:t=>bh(t.root),$emit:t=>t.emit,$options:t=>fd(t),$forceUpdate:t=>t.f||(t.f=()=>ad(t.update)),$nextTick:t=>t.n||(t.n=od.bind(t.proxy)),$watch:t=>xA.bind(t)}),Nu=(t,e)=>t!==Ue&&!t.__isScriptSetup&&Te(t,e),KA={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Nu(r,e))return o[e]=1,r[e];if(s!==Ue&&Te(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Te(c,e))return o[e]=3,i[e];if(n!==Ue&&Te(n,e))return o[e]=4,n[e];Ah&&(o[e]=0)}}const u=mo[e];let h,f;if(u)return e==="$attrs"&&$t(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ue&&Te(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Te(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Nu(s,e)?(s[e]=n,!0):r!==Ue&&Te(r,e)?(r[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ue&&Te(t,o)||Nu(e,o)||(a=i[0])&&Te(a,o)||Te(r,o)||Te(mo,o)||Te(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Cm(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ah=!0;function GA(t){const e=fd(t),n=t.proxy,r=t.ctx;Ah=!1,e.beforeCreate&&Sm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:p,deactivated:_,beforeDestroy:v,beforeUnmount:w,destroyed:I,unmounted:E,render:x,renderTracked:b,renderTriggered:C,errorCaptured:A,serverPrefetch:L,expose:W,inheritAttrs:K,components:_e,directives:Z,filters:We}=e;if(c&&QA(c,r,null),o)for(const ie in o){const fe=o[ie];ce(fe)&&(r[ie]=fe.bind(n))}if(s){const ie=s.call(n,n);$e(ie)&&(t.data=tr(ie))}if(Ah=!0,i)for(const ie in i){const fe=i[ie],et=ce(fe)?fe.bind(n,n):ce(fe.get)?fe.get.bind(n,n):mn,Ft=!ce(fe)&&ce(fe.set)?fe.set.bind(n):mn,dt=wt({get:et,set:Ft});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Dt=>dt.value=Dt})}if(a)for(const ie in a)Ov(a[ie],r,n,ie);if(l){const ie=ce(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(fe=>{go(fe,ie[fe])})}u&&Sm(u,t,"c");function ee(ie,fe){re(fe)?fe.forEach(et=>ie(et.bind(n))):fe&&ie(fe.bind(n))}if(ee($A,h),ee(Cv,f),ee(FA,d),ee(UA,m),ee(MA,p),ee(LA,_),ee(WA,A),ee(BA,b),ee(jA,C),ee(Sv,w),ee(hd,E),ee(Pv,L),re(W))if(W.length){const ie=t.exposed||(t.exposed={});W.forEach(fe=>{Object.defineProperty(ie,fe,{get:()=>n[fe],set:et=>n[fe]=et})})}else t.exposed||(t.exposed={});x&&t.render===mn&&(t.render=x),K!=null&&(t.inheritAttrs=K),_e&&(t.components=_e),Z&&(t.directives=Z)}function QA(t,e,n=mn){re(t)&&(t=Rh(t));for(const r in t){const s=t[r];let i;$e(s)?"default"in s?i=Vt(s.from||r,s.default,!0):i=Vt(s.from||r):i=Vt(s),He(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Sm(t,e,n){gn(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ov(t,e,n,r){const s=r.includes(".")?bv(n,r):()=>n[r];if(Ze(t)){const i=e[t];ce(i)&&Zt(s,i)}else if(ce(t))Zt(s,t.bind(n));else if($e(t))if(re(t))t.forEach(i=>Ov(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&Zt(s,i,t)}}function fd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Ol(l,c,o,!0)),Ol(l,e,o)),$e(e)&&i.set(e,l),l}function Ol(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ol(t,i,n,!0),s&&s.forEach(o=>Ol(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=YA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const YA={data:Pm,props:km,emits:km,methods:so,computed:so,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:so,directives:so,watch:JA,provide:Pm,inject:XA};function Pm(t,e){return e?t?function(){return ot(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function XA(t,e){return so(Rh(t),Rh(e))}function Rh(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function so(t,e){return t?ot(Object.create(null),t,e):e}function km(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:ot(Object.create(null),Cm(t),Cm(e??{})):e}function JA(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=Pt(t[r],e[r]);return n}function Dv(){return{app:null,config:{isNativeTag:Rb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ZA=0;function eR(t,e){return function(r,s=null){ce(r)||(r=ot({},r)),s!=null&&!$e(s)&&(s=null);const i=Dv(),o=new Set;let a=!1;const l=i.app={_uid:ZA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:RR,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ce(c.install)?(o.add(c),c.install(l,...u)):ce(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=Me(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,gd(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Dl=l;try{return c()}finally{Dl=null}}};return l}}let Dl=null;function go(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function Vt(t,e,n=!1){const r=rt||Xt;if(r||Dl){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Dl._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}function tR(t,e,n,r=!1){const s={},i={};Cl(i,$c,1),t.propsDefaults=Object.create(null),xv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:fv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nR(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ie(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(xc(t.emitsOptions,f))continue;const d=e[f];if(l)if(Te(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const m=Un(f);s[m]=Ch(l,a,m,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{xv(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!Te(e,h)&&((u=Ni(h))===h||!Te(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ch(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Te(e,h))&&(delete i[h],c=!0)}c&&hr(t,"set","$attrs")}function xv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ul(l))continue;const c=e[l];let u;s&&Te(s,u=Un(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:xc(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Ie(n),c=a||Ue;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ch(s,l,h,c[h],t,!Te(c,h))}}return o}function Ch(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Te(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ce(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(ui(s),r=c[n]=l.call(null,e),is())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ni(n))&&(r=!0))}return r}function Mv(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ce(t)){const u=h=>{l=!0;const[f,d]=Mv(h,e,!0);ot(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return $e(t)&&r.set(t,Ks),Ks;if(re(i))for(let u=0;u<i.length;u++){const h=Un(i[u]);Nm(h)&&(o[h]=Ue)}else if(i)for(const u in i){const h=Un(u);if(Nm(h)){const f=i[u],d=o[h]=re(f)||ce(f)?{type:f}:ot({},f);if(d){const m=xm(Boolean,d.type),p=xm(String,d.type);d[0]=m>-1,d[1]=p<0||m<p,(m>-1||Te(d,"default"))&&a.push(h)}}}const c=[o,a];return $e(t)&&r.set(t,c),c}function Nm(t){return t[0]!=="$"}function Om(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Dm(t,e){return Om(t)===Om(e)}function xm(t,e){return re(e)?e.findIndex(n=>Dm(n,t)):ce(e)&&Dm(e,t)?0:-1}const Lv=t=>t[0]==="_"||t==="$stable",dd=t=>re(t)?t.map(Rn):[Rn(t)],rR=(t,e,n)=>{if(e._n)return e;const r=Nl((...s)=>dd(e(...s)),n);return r._c=!1,r},Vv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Lv(s))continue;const i=t[s];if(ce(i))e[s]=rR(s,i,r);else if(i!=null){const o=dd(i);e[s]=()=>o}}},$v=(t,e)=>{const n=dd(e);t.slots.default=()=>n},sR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ie(e),Cl(e,"_",n)):Vv(e,t.slots={})}else t.slots={},e&&$v(t,e);Cl(t.slots,$c,1)},iR=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ue;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ot(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Vv(e,s)),o=e}else e&&($v(t,e),o={default:1});if(i)for(const a in s)!Lv(a)&&!(a in o)&&delete s[a]};function Sh(t,e,n,r,s=!1){if(re(t)){t.forEach((f,d)=>Sh(f,e&&(re(e)?e[d]:e),n,r,s));return}if(hl(r)&&!s)return;const i=r.shapeFlag&4?gd(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ue?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ze(c)?(u[c]=null,Te(h,c)&&(h[c]=null)):He(c)&&(c.value=null)),ce(l))Dr(l,a,12,[o,u]);else{const f=Ze(l),d=He(l);if(f||d){const m=()=>{if(t.f){const p=f?Te(h,l)?h[l]:u[l]:l.value;s?re(p)&&qf(p,i):re(p)?p.includes(i)||p.push(i):f?(u[l]=[i],Te(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,Te(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Mt(m,n)):m()}}}const Mt=DA;function oR(t){return aR(t)}function aR(t,e){const n=vh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=mn,insertStaticContent:m}=t,p=(g,y,T,R=null,P=null,k=null,j=!1,M=null,V=!!y.dynamicChildren)=>{if(g===y)return;g&&!Gi(g,y)&&(R=S(g),Dt(g,P,k,!0),g=null),y.patchFlag===-2&&(V=!1,y.dynamicChildren=null);const{type:D,ref:Q,shapeFlag:q}=y;switch(D){case Vc:_(g,y,T,R);break;case cs:v(g,y,T,R);break;case fl:g==null&&w(y,T,R,j);break;case sn:_e(g,y,T,R,P,k,j,M,V);break;default:q&1?x(g,y,T,R,P,k,j,M,V):q&6?Z(g,y,T,R,P,k,j,M,V):(q&64||q&128)&&D.process(g,y,T,R,P,k,j,M,V,$)}Q!=null&&P&&Sh(Q,g&&g.ref,k,y||g,!y)},_=(g,y,T,R)=>{if(g==null)r(y.el=a(y.children),T,R);else{const P=y.el=g.el;y.children!==g.children&&c(P,y.children)}},v=(g,y,T,R)=>{g==null?r(y.el=l(y.children||""),T,R):y.el=g.el},w=(g,y,T,R)=>{[g.el,g.anchor]=m(g.children,y,T,R,g.el,g.anchor)},I=({el:g,anchor:y},T,R)=>{let P;for(;g&&g!==y;)P=f(g),r(g,T,R),g=P;r(y,T,R)},E=({el:g,anchor:y})=>{let T;for(;g&&g!==y;)T=f(g),s(g),g=T;s(y)},x=(g,y,T,R,P,k,j,M,V)=>{j=j||y.type==="svg",g==null?b(y,T,R,P,k,j,M,V):L(g,y,P,k,j,M,V)},b=(g,y,T,R,P,k,j,M)=>{let V,D;const{type:Q,props:q,shapeFlag:Y,transition:oe,dirs:de}=g;if(V=g.el=o(g.type,k,q&&q.is,q),Y&8?u(V,g.children):Y&16&&A(g.children,V,null,R,P,k&&Q!=="foreignObject",j,M),de&&Kr(g,null,R,"created"),C(V,g,g.scopeId,j,R),q){for(const ke in q)ke!=="value"&&!ul(ke)&&i(V,ke,null,q[ke],k,g.children,R,P,pt);"value"in q&&i(V,"value",null,q.value),(D=q.onVnodeBeforeMount)&&bn(D,R,g)}de&&Kr(g,null,R,"beforeMount");const Oe=(!P||P&&!P.pendingBranch)&&oe&&!oe.persisted;Oe&&oe.beforeEnter(V),r(V,y,T),((D=q&&q.onVnodeMounted)||Oe||de)&&Mt(()=>{D&&bn(D,R,g),Oe&&oe.enter(V),de&&Kr(g,null,R,"mounted")},P)},C=(g,y,T,R,P)=>{if(T&&d(g,T),R)for(let k=0;k<R.length;k++)d(g,R[k]);if(P){let k=P.subTree;if(y===k){const j=P.vnode;C(g,j,j.scopeId,j.slotScopeIds,P.parent)}}},A=(g,y,T,R,P,k,j,M,V=0)=>{for(let D=V;D<g.length;D++){const Q=g[D]=M?br(g[D]):Rn(g[D]);p(null,Q,y,T,R,P,k,j,M)}},L=(g,y,T,R,P,k,j)=>{const M=y.el=g.el;let{patchFlag:V,dynamicChildren:D,dirs:Q}=y;V|=g.patchFlag&16;const q=g.props||Ue,Y=y.props||Ue;let oe;T&&Gr(T,!1),(oe=Y.onVnodeBeforeUpdate)&&bn(oe,T,y,g),Q&&Kr(y,g,T,"beforeUpdate"),T&&Gr(T,!0);const de=P&&y.type!=="foreignObject";if(D?W(g.dynamicChildren,D,M,T,R,de,k):j||fe(g,y,M,null,T,R,de,k,!1),V>0){if(V&16)K(M,y,q,Y,T,R,P);else if(V&2&&q.class!==Y.class&&i(M,"class",null,Y.class,P),V&4&&i(M,"style",q.style,Y.style,P),V&8){const Oe=y.dynamicProps;for(let ke=0;ke<Oe.length;ke++){const Ge=Oe[ke],nn=q[Ge],Os=Y[Ge];(Os!==nn||Ge==="value")&&i(M,Ge,nn,Os,P,g.children,T,R,pt)}}V&1&&g.children!==y.children&&u(M,y.children)}else!j&&D==null&&K(M,y,q,Y,T,R,P);((oe=Y.onVnodeUpdated)||Q)&&Mt(()=>{oe&&bn(oe,T,y,g),Q&&Kr(y,g,T,"updated")},R)},W=(g,y,T,R,P,k,j)=>{for(let M=0;M<y.length;M++){const V=g[M],D=y[M],Q=V.el&&(V.type===sn||!Gi(V,D)||V.shapeFlag&70)?h(V.el):T;p(V,D,Q,null,R,P,k,j,!0)}},K=(g,y,T,R,P,k,j)=>{if(T!==R){if(T!==Ue)for(const M in T)!ul(M)&&!(M in R)&&i(g,M,T[M],null,j,y.children,P,k,pt);for(const M in R){if(ul(M))continue;const V=R[M],D=T[M];V!==D&&M!=="value"&&i(g,M,D,V,j,y.children,P,k,pt)}"value"in R&&i(g,"value",T.value,R.value)}},_e=(g,y,T,R,P,k,j,M,V)=>{const D=y.el=g?g.el:a(""),Q=y.anchor=g?g.anchor:a("");let{patchFlag:q,dynamicChildren:Y,slotScopeIds:oe}=y;oe&&(M=M?M.concat(oe):oe),g==null?(r(D,T,R),r(Q,T,R),A(y.children,T,Q,P,k,j,M,V)):q>0&&q&64&&Y&&g.dynamicChildren?(W(g.dynamicChildren,Y,T,P,k,j,M),(y.key!=null||P&&y===P.subTree)&&Fv(g,y,!0)):fe(g,y,T,Q,P,k,j,M,V)},Z=(g,y,T,R,P,k,j,M,V)=>{y.slotScopeIds=M,g==null?y.shapeFlag&512?P.ctx.activate(y,T,R,j,V):We(y,T,R,P,k,j,V):Ke(g,y,V)},We=(g,y,T,R,P,k,j)=>{const M=g.component=_R(g,R,P);if(Av(g)&&(M.ctx.renderer=$),yR(M),M.asyncDep){if(P&&P.registerDep(M,ee),!g.el){const V=M.subTree=Me(cs);v(null,V,y,T)}return}ee(M,g,y,T,P,k,j)},Ke=(g,y,T)=>{const R=y.component=g.component;if(kA(g,y,T))if(R.asyncDep&&!R.asyncResolved){ie(R,y,T);return}else R.next=y,bA(R.update),R.update();else y.el=g.el,R.vnode=y},ee=(g,y,T,R,P,k,j)=>{const M=()=>{if(g.isMounted){let{next:Q,bu:q,u:Y,parent:oe,vnode:de}=g,Oe=Q,ke;Gr(g,!1),Q?(Q.el=de.el,ie(g,Q,j)):Q=de,q&&Pu(q),(ke=Q.props&&Q.props.onVnodeBeforeUpdate)&&bn(ke,oe,Q,de),Gr(g,!0);const Ge=ku(g),nn=g.subTree;g.subTree=Ge,p(nn,Ge,h(nn.el),S(nn),g,P,k),Q.el=Ge.el,Oe===null&&NA(g,Ge.el),Y&&Mt(Y,P),(ke=Q.props&&Q.props.onVnodeUpdated)&&Mt(()=>bn(ke,oe,Q,de),P)}else{let Q;const{el:q,props:Y}=y,{bm:oe,m:de,parent:Oe}=g,ke=hl(y);if(Gr(g,!1),oe&&Pu(oe),!ke&&(Q=Y&&Y.onVnodeBeforeMount)&&bn(Q,Oe,y),Gr(g,!0),q&&Ae){const Ge=()=>{g.subTree=ku(g),Ae(q,g.subTree,g,P,null)};ke?y.type.__asyncLoader().then(()=>!g.isUnmounted&&Ge()):Ge()}else{const Ge=g.subTree=ku(g);p(null,Ge,T,R,g,P,k),y.el=Ge.el}if(de&&Mt(de,P),!ke&&(Q=Y&&Y.onVnodeMounted)){const Ge=y;Mt(()=>bn(Q,Oe,Ge),P)}(y.shapeFlag&256||Oe&&hl(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&g.a&&Mt(g.a,P),g.isMounted=!0,y=T=R=null}},V=g.effect=new Jf(M,()=>ad(D),g.scope),D=g.update=()=>V.run();D.id=g.uid,Gr(g,!0),D()},ie=(g,y,T)=>{y.component=g;const R=g.vnode.props;g.vnode=y,g.next=null,nR(g,y.props,R,T),iR(g,y.children,T),Oi(),bm(),Di()},fe=(g,y,T,R,P,k,j,M,V=!1)=>{const D=g&&g.children,Q=g?g.shapeFlag:0,q=y.children,{patchFlag:Y,shapeFlag:oe}=y;if(Y>0){if(Y&128){Ft(D,q,T,R,P,k,j,M,V);return}else if(Y&256){et(D,q,T,R,P,k,j,M,V);return}}oe&8?(Q&16&&pt(D,P,k),q!==D&&u(T,q)):Q&16?oe&16?Ft(D,q,T,R,P,k,j,M,V):pt(D,P,k,!0):(Q&8&&u(T,""),oe&16&&A(q,T,R,P,k,j,M,V))},et=(g,y,T,R,P,k,j,M,V)=>{g=g||Ks,y=y||Ks;const D=g.length,Q=y.length,q=Math.min(D,Q);let Y;for(Y=0;Y<q;Y++){const oe=y[Y]=V?br(y[Y]):Rn(y[Y]);p(g[Y],oe,T,null,P,k,j,M,V)}D>Q?pt(g,P,k,!0,!1,q):A(y,T,R,P,k,j,M,V,q)},Ft=(g,y,T,R,P,k,j,M,V)=>{let D=0;const Q=y.length;let q=g.length-1,Y=Q-1;for(;D<=q&&D<=Y;){const oe=g[D],de=y[D]=V?br(y[D]):Rn(y[D]);if(Gi(oe,de))p(oe,de,T,null,P,k,j,M,V);else break;D++}for(;D<=q&&D<=Y;){const oe=g[q],de=y[Y]=V?br(y[Y]):Rn(y[Y]);if(Gi(oe,de))p(oe,de,T,null,P,k,j,M,V);else break;q--,Y--}if(D>q){if(D<=Y){const oe=Y+1,de=oe<Q?y[oe].el:R;for(;D<=Y;)p(null,y[D]=V?br(y[D]):Rn(y[D]),T,de,P,k,j,M,V),D++}}else if(D>Y)for(;D<=q;)Dt(g[D],P,k,!0),D++;else{const oe=D,de=D,Oe=new Map;for(D=de;D<=Y;D++){const Ut=y[D]=V?br(y[D]):Rn(y[D]);Ut.key!=null&&Oe.set(Ut.key,D)}let ke,Ge=0;const nn=Y-de+1;let Os=!1,dm=0;const Ki=new Array(nn);for(D=0;D<nn;D++)Ki[D]=0;for(D=oe;D<=q;D++){const Ut=g[D];if(Ge>=nn){Dt(Ut,P,k,!0);continue}let In;if(Ut.key!=null)In=Oe.get(Ut.key);else for(ke=de;ke<=Y;ke++)if(Ki[ke-de]===0&&Gi(Ut,y[ke])){In=ke;break}In===void 0?Dt(Ut,P,k,!0):(Ki[In-de]=D+1,In>=dm?dm=In:Os=!0,p(Ut,y[In],T,null,P,k,j,M,V),Ge++)}const pm=Os?lR(Ki):Ks;for(ke=pm.length-1,D=nn-1;D>=0;D--){const Ut=de+D,In=y[Ut],mm=Ut+1<Q?y[Ut+1].el:R;Ki[D]===0?p(null,In,T,mm,P,k,j,M,V):Os&&(ke<0||D!==pm[ke]?dt(In,T,mm,2):ke--)}}},dt=(g,y,T,R,P=null)=>{const{el:k,type:j,transition:M,children:V,shapeFlag:D}=g;if(D&6){dt(g.component.subTree,y,T,R);return}if(D&128){g.suspense.move(y,T,R);return}if(D&64){j.move(g,y,T,$);return}if(j===sn){r(k,y,T);for(let q=0;q<V.length;q++)dt(V[q],y,T,R);r(g.anchor,y,T);return}if(j===fl){I(g,y,T);return}if(R!==2&&D&1&&M)if(R===0)M.beforeEnter(k),r(k,y,T),Mt(()=>M.enter(k),P);else{const{leave:q,delayLeave:Y,afterLeave:oe}=M,de=()=>r(k,y,T),Oe=()=>{q(k,()=>{de(),oe&&oe()})};Y?Y(k,de,Oe):Oe()}else r(k,y,T)},Dt=(g,y,T,R=!1,P=!1)=>{const{type:k,props:j,ref:M,children:V,dynamicChildren:D,shapeFlag:Q,patchFlag:q,dirs:Y}=g;if(M!=null&&Sh(M,null,T,g,!0),Q&256){y.ctx.deactivate(g);return}const oe=Q&1&&Y,de=!hl(g);let Oe;if(de&&(Oe=j&&j.onVnodeBeforeUnmount)&&bn(Oe,y,g),Q&6)ja(g.component,T,R);else{if(Q&128){g.suspense.unmount(T,R);return}oe&&Kr(g,null,y,"beforeUnmount"),Q&64?g.type.remove(g,y,T,P,$,R):D&&(k!==sn||q>0&&q&64)?pt(D,y,T,!1,!0):(k===sn&&q&384||!P&&Q&16)&&pt(V,y,T),R&&ks(g)}(de&&(Oe=j&&j.onVnodeUnmounted)||oe)&&Mt(()=>{Oe&&bn(Oe,y,g),oe&&Kr(g,null,y,"unmounted")},T)},ks=g=>{const{type:y,el:T,anchor:R,transition:P}=g;if(y===sn){Ns(T,R);return}if(y===fl){E(g);return}const k=()=>{s(T),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:j,delayLeave:M}=P,V=()=>j(T,k);M?M(g.el,k,V):V()}else k()},Ns=(g,y)=>{let T;for(;g!==y;)T=f(g),s(g),g=T;s(y)},ja=(g,y,T)=>{const{bum:R,scope:P,update:k,subTree:j,um:M}=g;R&&Pu(R),P.stop(),k&&(k.active=!1,Dt(j,g,y,T)),M&&Mt(M,y),Mt(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},pt=(g,y,T,R=!1,P=!1,k=0)=>{for(let j=k;j<g.length;j++)Dt(g[j],y,T,R,P)},S=g=>g.shapeFlag&6?S(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),z=(g,y,T)=>{g==null?y._vnode&&Dt(y._vnode,null,null,!0):p(y._vnode||null,g,y,null,null,null,T),bm(),wv(),y._vnode=g},$={p,um:Dt,m:dt,r:ks,mt:We,mc:A,pc:fe,pbc:W,n:S,o:t};let G,Ae;return e&&([G,Ae]=e($)),{render:z,hydrate:G,createApp:eR(z,G)}}function Gr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fv(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=br(s[i]),a.el=o.el),n||Fv(o,a)),a.type===Vc&&(a.el=o.el)}}function lR(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const cR=t=>t.__isTeleport,sn=Symbol.for("v-fgt"),Vc=Symbol.for("v-txt"),cs=Symbol.for("v-cmt"),fl=Symbol.for("v-stc"),_o=[];let ln=null;function Sn(t=!1){_o.push(ln=t?null:[])}function uR(){_o.pop(),ln=_o[_o.length-1]||null}let Lo=1;function Mm(t){Lo+=t}function Uv(t){return t.dynamicChildren=Lo>0?ln||Ks:null,uR(),Lo>0&&ln&&ln.push(t),t}function Jn(t,e,n,r,s,i){return Uv(Lt(t,e,n,r,s,i,!0))}function hR(t,e,n,r,s){return Uv(Me(t,e,n,r,s,!0))}function Ph(t){return t?t.__v_isVNode===!0:!1}function Gi(t,e){return t.type===e.type&&t.key===e.key}const $c="__vInternal",jv=({key:t})=>t??null,dl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||He(t)||ce(t)?{i:Xt,r:t,k:e,f:!!n}:t:null);function Lt(t,e=null,n=null,r=0,s=null,i=t===sn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jv(e),ref:e&&dl(e),scopeId:Mc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xt};return a?(pd(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ze(n)?8:16),Lo>0&&!o&&ln&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ln.push(l),l}const Me=fR;function fR(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===zA)&&(t=cs),Ph(t)){const a=ci(t,e,!0);return n&&pd(a,n),Lo>0&&!i&&ln&&(a.shapeFlag&6?ln[ln.indexOf(t)]=a:ln.push(a)),a.patchFlag|=-2,a}if(IR(t)&&(t=t.__vccOpts),e){e=dR(e);let{class:a,style:l}=e;a&&!Ze(a)&&(e.class=Yf(a)),$e(l)&&(pv(l)&&!re(l)&&(l=ot({},l)),e.style=Qf(l))}const o=Ze(t)?1:OA(t)?128:cR(t)?64:$e(t)?4:ce(t)?2:0;return Lt(t,e,n,r,s,o,i,!0)}function dR(t){return t?pv(t)||$c in t?ot({},t):t:null}function ci(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?pR(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&jv(a),ref:e&&e.ref?n&&s?re(s)?s.concat(dl(e)):[s,dl(e)]:dl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==sn?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ci(t.ssContent),ssFallback:t.ssFallback&&ci(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function xl(t=" ",e=0){return Me(Vc,null,t,e)}function aB(t,e){const n=Me(fl,null,t);return n.staticCount=e,n}function Lm(t="",e=!1){return e?(Sn(),hR(cs,null,t)):Me(cs,null,t)}function Rn(t){return t==null||typeof t=="boolean"?Me(cs):re(t)?Me(sn,null,t.slice()):typeof t=="object"?br(t):Me(Vc,null,String(t))}function br(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ci(t)}function pd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!($c in e)?e._ctx=Xt:s===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:Xt},n=32):(e=String(e),r&64?(n=16,e=[xl(e)]):n=8);t.children=e,t.shapeFlag|=n}function pR(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Yf([e.class,r.class]));else if(s==="style")e.style=Qf([e.style,r.style]);else if(Sc(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function bn(t,e,n,r=null){gn(t,e,7,[n,r])}const mR=Dv();let gR=0;function _R(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||mR,i={uid:gR++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mv(r,s),emitsOptions:Iv(r,s),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=CA.bind(null,i),t.ce&&t.ce(i),i}let rt=null;const Vo=()=>rt||Xt;let md,Ds,Vm="__VUE_INSTANCE_SETTERS__";(Ds=vh()[Vm])||(Ds=vh()[Vm]=[]),Ds.push(t=>rt=t),md=t=>{Ds.length>1?Ds.forEach(e=>e(t)):Ds[0](t)};const ui=t=>{md(t),t.scope.on()},is=()=>{rt&&rt.scope.off(),md(null)};function Bv(t){return t.vnode.shapeFlag&4}let $o=!1;function yR(t,e=!1){$o=e;const{props:n,children:r}=t.vnode,s=Bv(t);tR(t,n,s,e),sR(t,r);const i=s?vR(t,e):void 0;return $o=!1,i}function vR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ua(new Proxy(t.ctx,KA));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?wR(t):null;ui(t),Oi();const i=Dr(r,t,0,[t.props,s]);if(Di(),is(),Gy(i)){if(i.then(is,is),e)return i.then(o=>{$m(t,o,e)}).catch(o=>{Dc(o,t,0)});t.asyncDep=i}else $m(t,i,e)}else Wv(t,e)}function $m(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=yv(e)),Wv(t,n)}let Fm;function Wv(t,e,n){const r=t.type;if(!t.render){if(!e&&Fm&&!r.render){const s=r.template||fd(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=ot(ot({isCustomElement:i,delimiters:a},o),l);r.render=Fm(s,c)}}t.render=r.render||mn}ui(t),Oi(),GA(t),Di(),is()}function ER(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return $t(t,"get","$attrs"),e[n]}}))}function wR(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ER(t)},slots:t.slots,emit:t.emit,expose:e}}function gd(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yv(ua(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mo)return mo[n](t)},has(e,n){return n in e||n in mo}}))}function TR(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function IR(t){return ce(t)&&"__vccOpts"in t}const wt=(t,e)=>wA(t,e,$o);function Fo(t,e,n){const r=arguments.length;return r===2?$e(e)&&!re(e)?Ph(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ph(n)&&(n=[n]),Me(t,e,n))}const bR=Symbol.for("v-scx"),AR=()=>Vt(bR),RR="3.3.4",CR="http://www.w3.org/2000/svg",Jr=typeof document<"u"?document:null,Um=Jr&&Jr.createElement("template"),SR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Jr.createElementNS(CR,t):Jr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Jr.createTextNode(t),createComment:t=>Jr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Um.innerHTML=r?`<svg>${t}</svg>`:t;const a=Um.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function PR(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function kR(t,e,n){const r=t.style,s=Ze(n);if(n&&!s){if(e&&!Ze(e))for(const i in e)n[i]==null&&kh(r,i,"");for(const i in n)kh(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const jm=/\s*!important$/;function kh(t,e,n){if(re(n))n.forEach(r=>kh(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=NR(t,e);jm.test(n)?t.setProperty(Ni(r),n.replace(jm,""),"important"):t[r]=n}}const Bm=["Webkit","Moz","ms"],Ou={};function NR(t,e){const n=Ou[e];if(n)return n;let r=Un(e);if(r!=="filter"&&r in t)return Ou[e]=r;r=Nc(r);for(let s=0;s<Bm.length;s++){const i=Bm[s]+r;if(i in t)return Ou[e]=i}return e}const Wm="http://www.w3.org/1999/xlink";function OR(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wm,e.slice(6,e.length)):t.setAttributeNS(Wm,e,n);else{const i=$b(e);n==null||i&&!Xy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function DR(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Xy(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function xR(t,e,n,r){t.addEventListener(e,n,r)}function MR(t,e,n,r){t.removeEventListener(e,n,r)}function LR(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=VR(e);if(r){const c=i[e]=UR(r,s);xR(t,a,c,l)}else o&&(MR(t,a,o,l),i[e]=void 0)}}const zm=/(?:Once|Passive|Capture)$/;function VR(t){let e;if(zm.test(t)){e={};let r;for(;r=t.match(zm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ni(t.slice(2)),e]}let Du=0;const $R=Promise.resolve(),FR=()=>Du||($R.then(()=>Du=0),Du=Date.now());function UR(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;gn(jR(r,n.value),e,5,[r])};return n.value=t,n.attached=FR(),n}function jR(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Hm=/^on[a-z]/,BR=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?PR(t,r,s):e==="style"?kR(t,n,r):Sc(e)?Hf(e)||LR(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WR(t,e,r,s))?DR(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),OR(t,e,r,s))};function WR(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Hm.test(e)&&ce(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hm.test(e)&&Ze(n)?!1:e in t}const zR=ot({patchProp:BR},SR);let qm;function HR(){return qm||(qm=oR(zR))}const qR=(...t)=>{const e=HR().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=KR(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function KR(t){return Ze(t)?document.querySelector(t):t}var GR=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const QR=Symbol();var Km;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Km||(Km={}));function YR(){const t=ev(!0),e=t.run(()=>je({}));let n=[],r=[];const s=ua({install(i){s._a=i,i.provide(QR,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!GR?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const XR="/assets/logo-8b9aaf55.png";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Vs=typeof window<"u";function JR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function xu(t,e){const n={};for(const r in e){const s=e[r];n[r]=yn(s)?s.map(t):t(s)}return n}const yo=()=>{},yn=Array.isArray,ZR=/\/$/,eC=t=>t.replace(ZR,"");function Mu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=sC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function tC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hi(e.matched[r],n.matched[s])&&zv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rC(t[n],e[n]))return!1;return!0}function rC(t,e){return yn(t)?Qm(t,e):yn(e)?Qm(e,t):t===e}function Qm(t,e){return yn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function sC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Uo;(function(t){t.pop="pop",t.push="push"})(Uo||(Uo={}));var vo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vo||(vo={}));function iC(t){if(!t)if(Vs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),eC(t)}const oC=/^[^#]+#/;function aC(t,e){return t.replace(oC,"#")+e}function lC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fc=()=>({left:window.pageXOffset,top:window.pageYOffset});function cC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=lC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ym(t,e){return(history.state?history.state.position-e:-1)+t}const Nh=new Map;function uC(t,e){Nh.set(t,e)}function hC(t){const e=Nh.get(t);return Nh.delete(t),e}let fC=()=>location.protocol+"//"+location.host;function Hv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Gm(l,"")}return Gm(n,t)+r+s}function dC(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=Hv(t,location),m=n.value,p=e.value;let _=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}_=p?f.position-p.position:0}else r(d);s.forEach(v=>{v(n.value,m,{delta:_,type:Uo.pop,direction:_?_>0?vo.forward:vo.back:vo.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const m=s.indexOf(f);m>-1&&s.splice(m,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Se({},f.state,{scroll:Fc()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Xm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fc():null}}function pC(t){const{history:e,location:n}=window,r={value:Hv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:fC()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Se({},e.state,Xm(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Se({},s.value,e.state,{forward:l,scroll:Fc()});i(u.current,u,!0);const h=Se({},Xm(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function mC(t){t=iC(t);const e=pC(t),n=dC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:aC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function gC(t){return typeof t=="string"||t&&typeof t=="object"}function qv(t){return typeof t=="string"||typeof t=="symbol"}const Tr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Kv=Symbol("");var Jm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Jm||(Jm={}));function fi(t,e){return Se(new Error,{type:t,[Kv]:!0},e)}function Gn(t,e){return t instanceof Error&&Kv in t&&(e==null||!!(t.type&e))}const Zm="[^/]+?",_C={sensitive:!1,strict:!1,start:!0,end:!0},yC=/[.+*?^${}()[\]/\\]/g;function vC(t,e){const n=Se({},_C,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(yC,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:p,optional:_,regexp:v}=f;i.push({name:m,repeatable:p,optional:_});const w=v||Zm;if(w!==Zm){d+=10;try{new RegExp(`(${w})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${m}" (${w}): `+E.message)}}let I=p?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(I=_&&c.length<2?`(?:/${I})`:"/"+I),_&&(I+="?"),s+=I,d+=20,_&&(d+=-8),p&&(d+=-20),w===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=i[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:p,optional:_}=d,v=m in c?c[m]:"";if(yn(v)&&!p)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const w=yn(v)?v.join("/"):v;if(!w)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=w}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function EC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function wC(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=EC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(eg(r))return 1;if(eg(s))return-1}return s.length-r.length}function eg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const TC={type:0,value:""},IC=/[a-zA-Z0-9_]/;function bC(t){if(!t)return[[]];if(t==="/")return[[TC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:IC.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function AC(t,e,n){const r=vC(bC(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function RC(t,e){const n=[],r=new Map;e=rg({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,m=CC(u);m.aliasOf=f&&f.record;const p=rg(e,u),_=[m];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of I)_.push(Se({},m,{components:f?f.record.components:m.components,path:E,aliasOf:f?f.record:m}))}let v,w;for(const I of _){const{path:E}=I;if(h&&E[0]!=="/"){const x=h.record.path,b=x[x.length-1]==="/"?"":"/";I.path=h.record.path+(E&&b+E)}if(v=AC(I,h,p),f?f.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),d&&u.name&&!ng(v)&&o(u.name)),m.children){const x=m.children;for(let b=0;b<x.length;b++)i(x[b],v,f&&f.children[b])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return w?()=>{o(w)}:yo}function o(u){if(qv(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&wC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Gv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ng(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},m,p;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw fi(1,{location:u});p=f.record.name,d=Se(tg(h.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&tg(u.params,f.keys.map(w=>w.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(w=>w.re.test(m)),f&&(d=f.parse(m),p=f.record.name);else{if(f=h.name?r.get(h.name):n.find(w=>w.re.test(h.path)),!f)throw fi(1,{location:u,currentLocation:h});p=f.record.name,d=Se({},h.params,u.params),m=f.stringify(d)}const _=[];let v=f;for(;v;)_.unshift(v.record),v=v.parent;return{name:p,path:m,params:d,matched:_,meta:PC(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function tg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function CC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:SC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function SC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ng(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function PC(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function rg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Gv(t,e){return e.children.some(n=>n===t||Gv(t,n))}const Qv=/#/g,kC=/&/g,NC=/\//g,OC=/=/g,DC=/\?/g,Yv=/\+/g,xC=/%5B/g,MC=/%5D/g,Xv=/%5E/g,LC=/%60/g,Jv=/%7B/g,VC=/%7C/g,Zv=/%7D/g,$C=/%20/g;function _d(t){return encodeURI(""+t).replace(VC,"|").replace(xC,"[").replace(MC,"]")}function FC(t){return _d(t).replace(Jv,"{").replace(Zv,"}").replace(Xv,"^")}function Oh(t){return _d(t).replace(Yv,"%2B").replace($C,"+").replace(Qv,"%23").replace(kC,"%26").replace(LC,"`").replace(Jv,"{").replace(Zv,"}").replace(Xv,"^")}function UC(t){return Oh(t).replace(OC,"%3D")}function jC(t){return _d(t).replace(Qv,"%23").replace(DC,"%3F")}function BC(t){return t==null?"":jC(t).replace(NC,"%2F")}function Ml(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function WC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Yv," "),o=i.indexOf("="),a=Ml(o<0?i:i.slice(0,o)),l=o<0?null:Ml(i.slice(o+1));if(a in e){let c=e[a];yn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function sg(t){let e="";for(let n in t){const r=t[n];if(n=UC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(yn(r)?r.map(i=>i&&Oh(i)):[r&&Oh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function zC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=yn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const HC=Symbol(""),ig=Symbol(""),yd=Symbol(""),eE=Symbol(""),Dh=Symbol("");function Qi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ar(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(fi(4,{from:n,to:e})):h instanceof Error?a(h):gC(h)?a(fi(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Lu(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(qC(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ar(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=JR(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Ar(f,n,r,i,o)()}))}}return s}function qC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function og(t){const e=Vt(yd),n=Vt(eE),r=wt(()=>e.resolve(Re(t.to))),s=wt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(hi.bind(null,u));if(f>-1)return f;const d=ag(l[c-2]);return c>1&&ag(u)===d&&h[h.length-1].path!==d?h.findIndex(hi.bind(null,l[c-2])):f}),i=wt(()=>s.value>-1&&QC(n.params,r.value.params)),o=wt(()=>s.value>-1&&s.value===n.matched.length-1&&zv(n.params,r.value.params));function a(l={}){return GC(l)?e[Re(t.replace)?"replace":"push"](Re(t.to)).catch(yo):Promise.resolve()}return{route:r,href:wt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const KC=ws({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:og,setup(t,{slots:e}){const n=tr(og(t)),{options:r}=Vt(yd),s=wt(()=>({[lg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[lg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Fo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),xh=KC;function GC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!yn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ag(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const lg=(t,e,n)=>t??e??n,YC=ws({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Vt(Dh),s=wt(()=>t.route||r.value),i=Vt(ig,0),o=wt(()=>{let c=Re(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=wt(()=>s.value.matched[o.value]);go(ig,wt(()=>o.value+1)),go(HC,a),go(Dh,s);const l=je();return Zt(()=>[l.value,a.value,t.name],([c,u,h],[f,d,m])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!hi(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return cg(n.default,{Component:f,route:c});const d=h.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,_=Fo(f,Se({},m,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return cg(n.default,{Component:_,route:c})||_}}});function cg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tE=YC;function XC(t){const e=RC(t.routes,t),n=t.parseQuery||WC,r=t.stringifyQuery||sg,s=t.history,i=Qi(),o=Qi(),a=Qi(),l=gv(Tr);let c=Tr;Vs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xu.bind(null,S=>""+S),h=xu.bind(null,BC),f=xu.bind(null,Ml);function d(S,z){let $,G;return qv(S)?($=e.getRecordMatcher(S),G=z):G=S,e.addRoute(G,$)}function m(S){const z=e.getRecordMatcher(S);z&&e.removeRoute(z)}function p(){return e.getRoutes().map(S=>S.record)}function _(S){return!!e.getRecordMatcher(S)}function v(S,z){if(z=Se({},z||l.value),typeof S=="string"){const T=Mu(n,S,z.path),R=e.resolve({path:T.path},z),P=s.createHref(T.fullPath);return Se(T,R,{params:f(R.params),hash:Ml(T.hash),redirectedFrom:void 0,href:P})}let $;if("path"in S)$=Se({},S,{path:Mu(n,S.path,z.path).path});else{const T=Se({},S.params);for(const R in T)T[R]==null&&delete T[R];$=Se({},S,{params:h(T)}),z.params=h(z.params)}const G=e.resolve($,z),Ae=S.hash||"";G.params=u(f(G.params));const g=tC(r,Se({},S,{hash:FC(Ae),path:G.path})),y=s.createHref(g);return Se({fullPath:g,hash:Ae,query:r===sg?zC(S.query):S.query||{}},G,{redirectedFrom:void 0,href:y})}function w(S){return typeof S=="string"?Mu(n,S,l.value.path):Se({},S)}function I(S,z){if(c!==S)return fi(8,{from:z,to:S})}function E(S){return C(S)}function x(S){return E(Se(w(S),{replace:!0}))}function b(S){const z=S.matched[S.matched.length-1];if(z&&z.redirect){const{redirect:$}=z;let G=typeof $=="function"?$(S):$;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=w(G):{path:G},G.params={}),Se({query:S.query,hash:S.hash,params:"path"in G?{}:S.params},G)}}function C(S,z){const $=c=v(S),G=l.value,Ae=S.state,g=S.force,y=S.replace===!0,T=b($);if(T)return C(Se(w(T),{state:typeof T=="object"?Se({},Ae,T.state):Ae,force:g,replace:y}),z||$);const R=$;R.redirectedFrom=z;let P;return!g&&nC(r,G,$)&&(P=fi(16,{to:R,from:G}),dt(G,G,!0,!1)),(P?Promise.resolve(P):W(R,G)).catch(k=>Gn(k)?Gn(k,2)?k:Ft(k):fe(k,R,G)).then(k=>{if(k){if(Gn(k,2))return C(Se({replace:y},w(k.to),{state:typeof k.to=="object"?Se({},Ae,k.to.state):Ae,force:g}),z||R)}else k=_e(R,G,!0,y,Ae);return K(R,G,k),k})}function A(S,z){const $=I(S,z);return $?Promise.reject($):Promise.resolve()}function L(S){const z=Ns.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(S):S()}function W(S,z){let $;const[G,Ae,g]=JC(S,z);$=Lu(G.reverse(),"beforeRouteLeave",S,z);for(const T of G)T.leaveGuards.forEach(R=>{$.push(Ar(R,S,z))});const y=A.bind(null,S,z);return $.push(y),pt($).then(()=>{$=[];for(const T of i.list())$.push(Ar(T,S,z));return $.push(y),pt($)}).then(()=>{$=Lu(Ae,"beforeRouteUpdate",S,z);for(const T of Ae)T.updateGuards.forEach(R=>{$.push(Ar(R,S,z))});return $.push(y),pt($)}).then(()=>{$=[];for(const T of g)if(T.beforeEnter)if(yn(T.beforeEnter))for(const R of T.beforeEnter)$.push(Ar(R,S,z));else $.push(Ar(T.beforeEnter,S,z));return $.push(y),pt($)}).then(()=>(S.matched.forEach(T=>T.enterCallbacks={}),$=Lu(g,"beforeRouteEnter",S,z),$.push(y),pt($))).then(()=>{$=[];for(const T of o.list())$.push(Ar(T,S,z));return $.push(y),pt($)}).catch(T=>Gn(T,8)?T:Promise.reject(T))}function K(S,z,$){a.list().forEach(G=>L(()=>G(S,z,$)))}function _e(S,z,$,G,Ae){const g=I(S,z);if(g)return g;const y=z===Tr,T=Vs?history.state:{};$&&(G||y?s.replace(S.fullPath,Se({scroll:y&&T&&T.scroll},Ae)):s.push(S.fullPath,Ae)),l.value=S,dt(S,z,$,y),Ft()}let Z;function We(){Z||(Z=s.listen((S,z,$)=>{if(!ja.listening)return;const G=v(S),Ae=b(G);if(Ae){C(Se(Ae,{replace:!0}),G).catch(yo);return}c=G;const g=l.value;Vs&&uC(Ym(g.fullPath,$.delta),Fc()),W(G,g).catch(y=>Gn(y,12)?y:Gn(y,2)?(C(y.to,G).then(T=>{Gn(T,20)&&!$.delta&&$.type===Uo.pop&&s.go(-1,!1)}).catch(yo),Promise.reject()):($.delta&&s.go(-$.delta,!1),fe(y,G,g))).then(y=>{y=y||_e(G,g,!1),y&&($.delta&&!Gn(y,8)?s.go(-$.delta,!1):$.type===Uo.pop&&Gn(y,20)&&s.go(-1,!1)),K(G,g,y)}).catch(yo)}))}let Ke=Qi(),ee=Qi(),ie;function fe(S,z,$){Ft(S);const G=ee.list();return G.length?G.forEach(Ae=>Ae(S,z,$)):console.error(S),Promise.reject(S)}function et(){return ie&&l.value!==Tr?Promise.resolve():new Promise((S,z)=>{Ke.add([S,z])})}function Ft(S){return ie||(ie=!S,We(),Ke.list().forEach(([z,$])=>S?$(S):z()),Ke.reset()),S}function dt(S,z,$,G){const{scrollBehavior:Ae}=t;if(!Vs||!Ae)return Promise.resolve();const g=!$&&hC(Ym(S.fullPath,0))||(G||!$)&&history.state&&history.state.scroll||null;return od().then(()=>Ae(S,z,g)).then(y=>y&&cC(y)).catch(y=>fe(y,S,z))}const Dt=S=>s.go(S);let ks;const Ns=new Set,ja={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,hasRoute:_,getRoutes:p,resolve:v,options:t,push:E,replace:x,go:Dt,back:()=>Dt(-1),forward:()=>Dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:et,install(S){const z=this;S.component("RouterLink",xh),S.component("RouterView",tE),S.config.globalProperties.$router=z,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Re(l)}),Vs&&!ks&&l.value===Tr&&(ks=!0,E(s.location).catch(Ae=>{}));const $={};for(const Ae in Tr)Object.defineProperty($,Ae,{get:()=>l.value[Ae],enumerable:!0});S.provide(yd,z),S.provide(eE,fv($)),S.provide(Dh,l);const G=S.unmount;Ns.add(S),S.unmount=function(){Ns.delete(S),Ns.size<1&&(c=Tr,Z&&Z(),Z=null,l.value=Tr,ks=!1,ie=!1),G()}}};function pt(S){return S.reduce((z,$)=>z.then(()=>L($)),Promise.resolve())}return ja}function JC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>hi(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>hi(c,l))||s.push(l))}return[n,r,s]}const ZC="/assets/google_btn-3f54b946.png";/**
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
 */const nE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(t,e){if(!t)throw xi(e)},xi=function(t){return new Error("Firebase Database ("+nE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const rE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new tS;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const m=c<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sE=function(t){const e=rE(t);return Uc.encodeByteArray(e,!0)},Ll=function(t){return sE(t).replace(/\./g,"")},Vl=function(t){try{return Uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nS(t){return iE(void 0,t)}function iE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rS(n)||(t[n]=iE(t[n],e[n]));return t}function rS(t){return t!=="__proto__"}/**
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
 */function sS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iS=()=>sS().__FIREBASE_DEFAULTS__,oS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vl(t[1]);return e&&JSON.parse(e)},vd=()=>{try{return iS()||oS()||aS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oE=t=>{var e,n;return(n=(e=vd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lS=t=>{const e=oE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},aE=()=>{var t;return(t=vd())===null||t===void 0?void 0:t.config},lE=t=>{var e;return(e=vd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ll(JSON.stringify(n)),Ll(JSON.stringify(o)),a].join(".")}/**
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
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ed(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function uS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hS(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uE(){return nE.NODE_ADMIN===!0}function hE(){try{return typeof indexedDB=="object"}catch{return!1}}function fS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const dS="FirebaseError";class qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dS,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mi.prototype.create)}}class Mi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pS(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new qn(s,a,r)}}function pS(t,e){return t.replace(mS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mS=/\{\$([^}]+)}/g;/**
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
 */function Bo(t){return JSON.parse(t)}function ht(t){return JSON.stringify(t)}/**
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
 */const fE=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Bo(Vl(i[0])||""),n=Bo(Vl(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},gS=function(t){const e=fE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_S=function(t){const e=fE(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Er(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function di(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Mh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $l(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Fl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ug(i)&&ug(o)){if(!Fl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ug(t){return t!==null&&typeof t=="object"}/**
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
 */function Li(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class yS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function vS(t,e){const n=new ES(t,e);return n.subscribe.bind(n)}class ES{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vu),s.error===void 0&&(s.error=Vu),s.complete===void 0&&(s.complete=Vu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vu(){}function TS(t,e){return`${t} failed: ${e} argument `}/**
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
 */const IS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,F(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Kt(t){return t&&t._delegate?t._delegate:t}class vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qr="[DEFAULT]";/**
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
 */class bS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RS(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AS(t){return t===Qr?void 0:t}function RS(t){return t.instantiationMode==="EAGER"}/**
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
 */class CS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const SS={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},PS=pe.INFO,kS={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},NS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ha{constructor(e){this.name=e,this._logLevel=PS,this._logHandler=NS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const OS=(t,e)=>e.some(n=>t instanceof n);let hg,fg;function DS(){return hg||(hg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xS(){return fg||(fg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dE=new WeakMap,Lh=new WeakMap,pE=new WeakMap,$u=new WeakMap,wd=new WeakMap;function MS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dE.set(n,t)}).catch(()=>{}),wd.set(e,t),e}function LS(t){if(Lh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lh.set(t,e)}let Vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VS(t){Vh=t(Vh)}function $S(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fu(this),e,...n);return pE.set(r,e.sort?e.sort():[e]),xr(r)}:xS().includes(t)?function(...e){return t.apply(Fu(this),e),xr(dE.get(this))}:function(...e){return xr(t.apply(Fu(this),e))}}function FS(t){return typeof t=="function"?$S(t):(t instanceof IDBTransaction&&LS(t),OS(t,DS())?new Proxy(t,Vh):t)}function xr(t){if(t instanceof IDBRequest)return MS(t);if($u.has(t))return $u.get(t);const e=FS(t);return e!==t&&($u.set(t,e),wd.set(e,t)),e}const Fu=t=>wd.get(t);function US(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xr(o.result),l.oldVersion,l.newVersion,xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const jS=["get","getKey","getAll","getAllKeys","count"],BS=["put","add","delete","clear"],Uu=new Map;function dg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uu.get(e))return Uu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=BS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jS.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Uu.set(e,i),i}VS(t=>({...t,get:(e,n,r)=>dg(e,n)||t.get(e,n,r),has:(e,n)=>!!dg(e,n)||t.has(e,n)}));/**
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
 */class WS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $h="@firebase/app",pg="0.9.19";/**
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
 */const us=new ha("@firebase/app"),HS="@firebase/app-compat",qS="@firebase/analytics-compat",KS="@firebase/analytics",GS="@firebase/app-check-compat",QS="@firebase/app-check",YS="@firebase/auth",XS="@firebase/auth-compat",JS="@firebase/database",ZS="@firebase/database-compat",eP="@firebase/functions",tP="@firebase/functions-compat",nP="@firebase/installations",rP="@firebase/installations-compat",sP="@firebase/messaging",iP="@firebase/messaging-compat",oP="@firebase/performance",aP="@firebase/performance-compat",lP="@firebase/remote-config",cP="@firebase/remote-config-compat",uP="@firebase/storage",hP="@firebase/storage-compat",fP="@firebase/firestore",dP="@firebase/firestore-compat",pP="firebase",mP="10.4.0";/**
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
 */const Fh="[DEFAULT]",gP={[$h]:"fire-core",[HS]:"fire-core-compat",[KS]:"fire-analytics",[qS]:"fire-analytics-compat",[QS]:"fire-app-check",[GS]:"fire-app-check-compat",[YS]:"fire-auth",[XS]:"fire-auth-compat",[JS]:"fire-rtdb",[ZS]:"fire-rtdb-compat",[eP]:"fire-fn",[tP]:"fire-fn-compat",[nP]:"fire-iid",[rP]:"fire-iid-compat",[sP]:"fire-fcm",[iP]:"fire-fcm-compat",[oP]:"fire-perf",[aP]:"fire-perf-compat",[lP]:"fire-rc",[cP]:"fire-rc-compat",[uP]:"fire-gcs",[hP]:"fire-gcs-compat",[fP]:"fire-fst",[dP]:"fire-fst-compat","fire-js":"fire-js",[pP]:"fire-js-all"};/**
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
 */const Ul=new Map,Uh=new Map;function _P(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jn(t){const e=t.name;if(Uh.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;Uh.set(e,t);for(const n of Ul.values())_P(n,t);return!0}function Td(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const yP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mr=new Mi("app","Firebase",yP);/**
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
 */class vP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
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
 */const Br=mP;function mE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Mr.create("bad-app-name",{appName:String(s)});if(n||(n=aE()),!n)throw Mr.create("no-options");const i=Ul.get(s);if(i){if(Fl(n,i.options)&&Fl(r,i.config))return i;throw Mr.create("duplicate-app",{appName:s})}const o=new CS(s);for(const l of Uh.values())o.addComponent(l);const a=new vP(n,r,o);return Ul.set(s,a),a}function Id(t=Fh){const e=Ul.get(t);if(!e&&t===Fh&&aE())return mE();if(!e)throw Mr.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let s=(r=gP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}jn(new vn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const EP="firebase-heartbeat-database",wP=1,Wo="firebase-heartbeat-store";let ju=null;function gE(){return ju||(ju=US(EP,wP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wo)}}}).catch(t=>{throw Mr.create("idb-open",{originalErrorMessage:t.message})})),ju}async function TP(t){try{return await(await gE()).transaction(Wo).objectStore(Wo).get(_E(t))}catch(e){if(e instanceof qn)us.warn(e.message);else{const n=Mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(n.message)}}}async function mg(t,e){try{const r=(await gE()).transaction(Wo,"readwrite");await r.objectStore(Wo).put(e,_E(t)),await r.done}catch(n){if(n instanceof qn)us.warn(n.message);else{const r=Mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});us.warn(r.message)}}}function _E(t){return`${t.name}!${t.options.appId}`}/**
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
 */const IP=1024,bP=30*24*60*60*1e3;class AP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=bP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gg(),{heartbeatsToSend:n,unsentEntries:r}=RP(this._heartbeatsCache.heartbeats),s=Ll(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function gg(){return new Date().toISOString().substring(0,10)}function RP(t,e=IP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_g(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_g(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hE()?fS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await TP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _g(t){return Ll(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function SP(t){jn(new vn("platform-logger",e=>new WS(e),"PRIVATE")),jn(new vn("heartbeat",e=>new AP(e),"PRIVATE")),Wt($h,pg,t),Wt($h,pg,"esm2017"),Wt("fire-js","")}SP("");function bd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function yE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PP=yE,vE=new Mi("auth","Firebase",yE());/**
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
 */const jl=new ha("@firebase/auth");function kP(t,...e){jl.logLevel<=pe.WARN&&jl.warn(`Auth (${Br}): ${t}`,...e)}function pl(t,...e){jl.logLevel<=pe.ERROR&&jl.error(`Auth (${Br}): ${t}`,...e)}/**
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
 */function Bn(t,...e){throw Ad(t,...e)}function Mn(t,...e){return Ad(t,...e)}function EE(t,e,n){const r=Object.assign(Object.assign({},PP()),{[e]:n});return new Mi("auth","Firebase",r).create(e,{appName:t.name})}function NP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Bn(t,"argument-error"),EE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ad(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vE.create(t,...e)}function le(t,e,...n){if(!t)throw Ad(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pl(e),new Error(e)}function fr(t,e){t||nr(e)}/**
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
 */function jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OP(){return yg()==="http:"||yg()==="https:"}function yg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function DP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OP()||uS()||"connection"in navigator)?navigator.onLine:!0}function xP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,fr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ed()||cE()}get(){return DP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rd(t,e){fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const LP=new fa(3e4,6e4);function TE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function da(t,e,n,r,s={}){return IE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Li(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),wE.fetch()(bE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function IE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MP),e);try{const s=new $P(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qa(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw EE(t,u,c);Bn(t,u)}}catch(s){if(s instanceof qn)throw s;Bn(t,"network-request-failed",{message:String(s)})}}async function VP(t,e,n,r,s={}){const i=await da(t,e,n,r,s);return"mfaPendingCredential"in i&&Bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function bE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Rd(t.config,s):`${t.config.apiScheme}://${s}`}class $P{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mn(this.auth,"network-request-failed")),LP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Mn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function FP(t,e){return da(t,"POST","/v1/accounts:delete",e)}async function UP(t,e){return da(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jP(t,e=!1){const n=Kt(t),r=await n.getIdToken(e),s=Cd(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Eo(Bu(s.auth_time)),issuedAtTime:Eo(Bu(s.iat)),expirationTime:Eo(Bu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bu(t){return Number(t)*1e3}function Cd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vl(n);return s?JSON.parse(s):(pl("Failed to decode base64 JWT payload"),null)}catch(s){return pl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function BP(t){const e=Cd(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qn&&WP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class AE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await zo(t,UP(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?KP(i.providerUserInfo):[],a=qP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new AE(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function HP(t){const e=Kt(t);await Bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function KP(t){return t.map(e=>{var{providerId:n}=e,r=bd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function GP(t,e){const n=await IE(t,{},async()=>{const r=Li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=bE(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):BP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return le(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await GP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ho;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ho,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
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
 */function Ir(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class os{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=bd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new AE(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await zo(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jP(this,e)}reload(){return HP(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new os(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zo(this,FP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,p=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:E,isAnonymous:x,providerData:b,stsTokenManager:C}=n;le(I&&C,e,"internal-error");const A=Ho.fromJSON(this.name,C);le(typeof I=="string",e,"internal-error"),Ir(h,e.name),Ir(f,e.name),le(typeof E=="boolean",e,"internal-error"),le(typeof x=="boolean",e,"internal-error"),Ir(d,e.name),Ir(m,e.name),Ir(p,e.name),Ir(_,e.name),Ir(v,e.name),Ir(w,e.name);const L=new os({uid:I,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:x,photoURL:m,phoneNumber:d,tenantId:p,stsTokenManager:A,createdAt:v,lastLoginAt:w});return b&&Array.isArray(b)&&(L.providerData=b.map(W=>Object.assign({},W))),_&&(L._redirectEventId=_),L}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ho;s.updateFromServerResponse(n);const i=new os({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bl(i),i}}/**
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
 */const vg=new Map;function rr(t){fr(t instanceof Function,"Expected a class definition");let e=vg.get(t);return e?(fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vg.set(t,e),e)}/**
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
 */class RE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}RE.type="NONE";const Eg=RE;/**
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
 */function ml(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ml(this.userKey,s.apiKey,i),this.fullPersistenceKey=ml("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?os._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xs(rr(Eg),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||rr(Eg);const o=ml(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=os._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Xs(i,e,r))}}/**
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
 */function wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(NE(e))return"Blackberry";if(OE(e))return"Webos";if(Sd(e))return"Safari";if((e.includes("chrome/")||SE(e))&&!e.includes("edge/"))return"Chrome";if(kE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function CE(t=Ct()){return/firefox\//i.test(t)}function Sd(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function SE(t=Ct()){return/crios\//i.test(t)}function PE(t=Ct()){return/iemobile/i.test(t)}function kE(t=Ct()){return/android/i.test(t)}function NE(t=Ct()){return/blackberry/i.test(t)}function OE(t=Ct()){return/webos/i.test(t)}function Bc(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QP(t=Ct()){var e;return Bc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YP(){return hS()&&document.documentMode===10}function DE(t=Ct()){return Bc(t)||kE(t)||OE(t)||NE(t)||/windows phone/i.test(t)||PE(t)}function XP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function xE(t,e=[]){let n;switch(t){case"Browser":n=wg(Ct());break;case"Worker":n=`${wg(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
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
 */class JP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ZP(t,e={}){return da(t,"GET","/v2/passwordPolicy",TE(t,e))}/**
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
 */const ek=6;class tk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ek,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class nk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tg(this),this.idTokenSubscription=new Tg(this),this.beforeStateQueue=new JP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Kt(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZP(this),n=new tk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rr(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wc(t){return Kt(t)}class Tg{constructor(e){this.auth=e,this.observer=null,this.addObserver=vS(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function rk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rk().appendChild(r)})}function ik(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ok(t,e){const n=Td(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fl(i,e??{}))return s;Bn(s,"already-initialized")}return n.initialize({options:e})}function ak(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lk(t,e,n){const r=Wc(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ME(e),{host:o,port:a}=ck(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||uk()}function ME(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ck(t){const e=ME(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ig(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ig(o)}}}function Ig(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class LE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}/**
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
 */async function Js(t,e){return VP(t,"POST","/v1/accounts:signInWithIdp",TE(t,e))}/**
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
 */const hk="http://localhost";class hs extends LE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=bd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new hs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Js(e,n)}buildRequest(){const e={requestUri:hk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Li(n)}return e}}/**
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
 */class Pd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pa extends Pd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rr extends pa{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
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
 */class Zn extends pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hs._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
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
 */class Cr extends pa{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
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
 */class Sr extends pa{constructor(){super("twitter.com")}static credential(e,n){return hs._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
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
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await os._fromIdTokenResponse(e,r,s),o=bg(r);return new pi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bg(r);return new pi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wl extends qn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Wl(e,n,r,s)}}function VE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wl._fromErrorAndOperation(t,i,e,r):i})}async function fk(t,e,n=!1){const r=await zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
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
 */async function dk(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await zo(t,VE(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=Cd(i.idToken);le(o,r,"internal-error");const{sub:a}=o;return le(t.uid===a,r,"user-mismatch"),pi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bn(r,"user-mismatch"),i}}/**
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
 */async function pk(t,e,n=!1){const r="signIn",s=await VE(t,r,e),i=await pi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function $E(t,e,n,r){return Kt(t).onIdTokenChanged(e,n,r)}function mk(t,e,n){return Kt(t).beforeAuthStateChanged(e,n)}function gk(t){return Kt(t).signOut()}const zl="__sak";/**
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
 */class FE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zl,"1"),this.storage.removeItem(zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _k(){const t=Ct();return Sd(t)||Bc(t)}const yk=1e3,vk=10;class UE extends FE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_k()&&XP(),this.fallbackToPolling=DE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);YP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}UE.type="LOCAL";const Ek=UE;/**
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
 */class jE extends FE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jE.type="SESSION";const BE=jE;/**
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
 */function wk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await wk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zc.receivers=[];/**
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
 */function kd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Tk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=kd("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ln(){return window}function Ik(t){Ln().location.href=t}/**
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
 */function WE(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function bk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ak(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Rk(){return WE()?self:null}/**
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
 */const zE="firebaseLocalStorageDb",Ck=1,Hl="firebaseLocalStorage",HE="fbase_key";class ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hc(t,e){return t.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function Sk(){const t=indexedDB.deleteDatabase(zE);return new ma(t).toPromise()}function Bh(){const t=indexedDB.open(zE,Ck);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hl,{keyPath:HE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hl)?e(r):(r.close(),await Sk(),e(await Bh()))})})}async function Ag(t,e,n){const r=Hc(t,!0).put({[HE]:e,value:n});return new ma(r).toPromise()}async function Pk(t,e){const n=Hc(t,!1).get(e),r=await new ma(n).toPromise();return r===void 0?null:r.value}function Rg(t,e){const n=Hc(t,!0).delete(e);return new ma(n).toPromise()}const kk=800,Nk=3;class qE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Nk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zc._getInstance(Rk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bk(),!this.activeServiceWorker)return;this.sender=new Tk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ak()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bh();return await Ag(e,zl,"1"),await Rg(e,zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ag(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Pk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Hc(s,!1).getAll();return new ma(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qE.type="LOCAL";const Ok=qE;new fa(3e4,6e4);/**
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
 */function KE(t,e){return e?rr(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nd extends LE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Dk(t){return pk(t.auth,new Nd(t),t.bypassAuthState)}function xk(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),dk(n,new Nd(t),t.bypassAuthState)}async function Mk(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),fk(n,new Nd(t),t.bypassAuthState)}/**
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
 */class GE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dk;case"linkViaPopup":case"linkViaRedirect":return Mk;case"reauthViaPopup":case"reauthViaRedirect":return xk;default:Bn(this.auth,"internal-error")}}resolve(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Lk=new fa(2e3,1e4);async function Vk(t,e,n){const r=Wc(t);NP(t,e,Pd);const s=KE(r,n);return new Zr(r,"signInViaPopup",e,s).executeNotNull()}class Zr extends GE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const e=kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lk.get())};e()}}Zr.currentPopupAction=null;/**
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
 */const $k="pendingRedirect",gl=new Map;class Fk extends GE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gl.get(this.auth._key());if(!e){try{const r=await Uk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gl.set(this.auth._key(),e)}return this.bypassAuthState||gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uk(t,e){const n=Wk(e),r=Bk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function jk(t,e){gl.set(t._key(),e)}function Bk(t){return rr(t._redirectPersistence)}function Wk(t){return ml($k,t.config.apiKey,t.name)}async function zk(t,e,n=!1){const r=Wc(t),s=KE(r,e),o=await new Fk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Hk=10*60*1e3;class qk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!QE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cg(e))}saveEventToCache(e){this.cachedEventUids.add(Cg(e)),this.lastProcessedEventTime=Date.now()}}function Cg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function QE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return QE(t);default:return!1}}/**
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
 */async function Gk(t,e={}){return da(t,"GET","/v1/projects",e)}/**
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
 */const Qk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yk=/^https?/;async function Xk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Gk(t);for(const n of e)try{if(Jk(n))return}catch{}Bn(t,"unauthorized-domain")}function Jk(t){const e=jh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Yk.test(n))return!1;if(Qk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Zk=new fa(3e4,6e4);function Sg(){const t=Ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eN(t){return new Promise((e,n)=>{var r,s,i;function o(){Sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sg(),n(Mn(t,"network-request-failed"))},timeout:Zk.get()})}if(!((s=(r=Ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ln().gapi)===null||i===void 0)&&i.load)o();else{const a=ik("iframefcb");return Ln()[a]=()=>{gapi.load?o():n(Mn(t,"network-request-failed"))},sk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _l=null,e})}let _l=null;function tN(t){return _l=_l||eN(t),_l}/**
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
 */const nN=new fa(5e3,15e3),rN="__/auth/iframe",sN="emulator/auth/iframe",iN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aN(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rd(e,sN):`https://${t.config.authDomain}/${rN}`,r={apiKey:e.apiKey,appName:t.name,v:Br},s=oN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Li(r).slice(1)}`}async function lN(t){const e=await tN(t),n=Ln().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:aN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Mn(t,"network-request-failed"),a=Ln().setTimeout(()=>{i(o)},nN.get());function l(){Ln().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const cN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uN=500,hN=600,fN="_blank",dN="http://localhost";class Pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pN(t,e,n,r=uN,s=hN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cN),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ct().toLowerCase();n&&(a=SE(c)?fN:n),CE(c)&&(e=e||dN,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,m])=>`${f}${d}=${m},`,"");if(QP(c)&&a!=="_self")return mN(e||"",a),new Pg(null);const h=window.open(e||"",a,u);le(h,t,"popup-blocked");try{h.focus()}catch{}return new Pg(h)}function mN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gN="__/auth/handler",_N="emulator/auth/handler",yN=encodeURIComponent("fac");async function kg(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:s};if(e instanceof Pd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof pa){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${yN}=${encodeURIComponent(l)}`:"";return`${vN(t)}?${Li(a).slice(1)}${c}`}function vN({config:t}){return t.emulator?Rd(t,_N):`https://${t.authDomain}/${gN}`}/**
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
 */const Wu="webStorageSupport";class EN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BE,this._completeRedirectFn=zk,this._overrideRedirectResult=jk}async _openPopup(e,n,r,s){var i;fr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await kg(e,n,r,jh(),s);return pN(e,o,kd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await kg(e,n,r,jh(),s);return Ik(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(fr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lN(e),r=new qk(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wu,{type:Wu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wu];o!==void 0&&n(!!o),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return DE()||Sd()||Bc()}}const wN=EN;var Ng="@firebase/auth",Og="1.3.0";/**
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
 */class TN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bN(t){jn(new vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xE(t)},c=new nk(r,s,i,l);return ak(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jn(new vn("auth-internal",e=>{const n=Wc(e.getProvider("auth").getImmediate());return(r=>new TN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(Ng,Og,IN(t)),Wt(Ng,Og,"esm2017")}/**
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
 */const AN=5*60,RN=lE("authIdTokenMaxAge")||AN;let Dg=null;const CN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RN)return;const s=n==null?void 0:n.token;Dg!==s&&(Dg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function YE(t=Id()){const e=Td(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ok(t,{popupRedirectResolver:wN,persistence:[Ok,Ek,BE]}),r=lE("authTokenSyncURL");if(r){const i=CN(r);mk(n,i,()=>i(n.currentUser)),$E(n,o=>i(o))}const s=oE("auth");return s&&lk(n,`http://${s}`),n}bN("Browser");/**
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
 */const SN=new Map,PN={activated:!1,tokenObservers:[]};function En(t){return SN.get(t)||Object.assign({},PN)}const xg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class kN{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new jo,await NN(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new jo,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function NN(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const ON={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ql=new Mi("appCheck","AppCheck",ON);function XE(t){if(!En(t).activated)throw ql.create("use-before-activation",{appName:t.name})}/**
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
 */const DN="firebase-app-check-database",xN=1,Wh="firebase-app-check-store";let Ya=null;function MN(){return Ya||(Ya=new Promise((t,e)=>{try{const n=indexedDB.open(DN,xN);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(ql.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Wh,{keyPath:"compositeKey"})}}}catch(n){e(ql.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ya)}function LN(t,e){return VN($N(t),e)}async function VN(t,e){const r=(await MN()).transaction(Wh,"readwrite"),i=r.objectStore(Wh).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(ql.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function $N(t){return`${t.options.appId}-${t.name}`}/**
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
 */const zh=new ha("@firebase/app-check");function Mg(t,e){return hE()?LN(t,e).catch(n=>{zh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const FN={error:"UNKNOWN_ERROR"};function UN(t){return Uc.encodeString(JSON.stringify(t),!1)}async function Hh(t,e=!1){const n=t.app;XE(n);const r=En(n);let s=r.token,i;if(s&&!io(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(io(l)?s=l:await Mg(n,void 0))}if(!e&&s&&io(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await En(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?zh.warn(l.message):zh.error(l),i=l}let a;return s?i?io(s)?a={token:s.token,internalError:i}:a=Vg(i):(a={token:s.token},r.token=s,await Mg(n,s)):a=Vg(i),o&&zN(n,a),a}async function jN(t){const e=t.app;XE(e);const{provider:n}=En(e);{const{token:r}=await n.getToken();return{token:r}}}function BN(t,e,n,r){const{app:s}=t,i=En(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&io(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),Lg(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Lg(t))}function JE(t,e){const n=En(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Lg(t){const{app:e}=t,n=En(e);let r=n.tokenRefresher;r||(r=WN(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function WN(t){const{app:e}=t;return new kN(async()=>{const n=En(e);let r;if(n.token?r=await Hh(t,!0):r=await Hh(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=En(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},xg.RETRIAL_MIN_WAIT,xg.RETRIAL_MAX_WAIT)}function zN(t,e){const n=En(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function io(t){return t.expireTimeMillis-Date.now()>0}function Vg(t){return{token:UN(FN),error:t}}/**
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
 */class HN{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=En(this.app);for(const n of e)JE(this.app,n.next);return Promise.resolve()}}function qN(t,e){return new HN(t,e)}function KN(t){return{getToken:e=>Hh(t,e),getLimitedUseToken:()=>jN(t),addTokenListener:e=>BN(t,"INTERNAL",e),removeTokenListener:e=>JE(t.app,e)}}const GN="@firebase/app-check",QN="0.8.0",YN="app-check",$g="app-check-internal";function XN(){jn(new vn(YN,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return qN(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider($g).initialize()})),jn(new vn($g,t=>{const e=t.getProvider("app-check").getImmediate();return KN(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Wt(GN,QN)}XN();var JN="firebase",ZN="10.4.0";/**
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
 */Wt(JN,ZN,"app");const ZE=Symbol("firebaseApp");function ga(t){return Vo()&&Vt(ZE,null)||Id(t)}const kn=()=>{},eO=typeof window<"u";function Od(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function tO(t,e,n){const r=(""+e).split("."),s=r.pop(),i=r.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(s),1,n):i[s]=n}function Ts(t){return!!t&&typeof t=="object"}const nO=Object.prototype;function rO(t){return Ts(t)&&Object.getPrototypeOf(t)===nO}function Dd(t){return Ts(t)&&t.type==="document"}function sO(t){return Ts(t)&&t.type==="collection"}function iO(t){return Dd(t)||sO(t)}function oO(t){return Ts(t)&&t.type==="query"}function aO(t){return Ts(t)&&"ref"in t}function lO(t){return Ts(t)&&typeof t.bucket=="string"}function cO(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const uO=Symbol.for("v-scx");function hO(){return!!Vt(uO,0)}const Xa=new WeakMap;function fO(t,e){if(!Xa.has(t)){const n=ev(!0);Xa.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Xa.delete(t)}}return Xa.get(t)}const ew=new WeakMap;function tw(t){return ew.get(ga(t))}const Ja=new WeakMap;function dO(t){const e=ga(t);if(!Ja.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{Ja.set(e,i),n(i.value)}];Ja.set(e,s)}return Ja.get(e)}function pO(t,e){const n=YE(e);$E(n,r=>{const s=dO();t.value=r,Array.isArray(s)&&s[1](t)})}const Fg="@firebase/database",Ug="1.0.1";/**
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
 */let nw="";function mO(t){nw=t}/**
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
 */class gO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ht(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class _O{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Er(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const rw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gO(e)}}catch{}return new _O},es=rw("localStorage"),qh=rw("sessionStorage");/**
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
 */const Zs=new ha("@firebase/database"),yO=function(){let t=1;return function(){return t++}}(),sw=function(t){const e=IS(t),n=new yS;n.update(e);const r=n.digest();return Uc.encodeByteArray(r)},_a=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=_a.apply(null,r):typeof r=="object"?e+=ht(r):e+=r,e+=" "}return e};let as=null,jg=!0;const vO=function(t,e){F(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Zs.logLevel=pe.VERBOSE,as=Zs.log.bind(Zs),e&&qh.set("logging_enabled",!0)):typeof t=="function"?as=t:(as=null,qh.remove("logging_enabled"))},_t=function(...t){if(jg===!0&&(jg=!1,as===null&&qh.get("logging_enabled")===!0&&vO(!0)),as){const e=_a.apply(null,t);as(e)}},ya=function(t){return function(...e){_t(t,...e)}},Kh=function(...t){const e="FIREBASE INTERNAL ERROR: "+_a(...t);Zs.error(e)},fs=function(...t){const e=`FIREBASE FATAL ERROR: ${_a(...t)}`;throw Zs.error(e),new Error(e)},zt=function(...t){const e="FIREBASE WARNING: "+_a(...t);Zs.warn(e)},EO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&zt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},iw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mi="[MIN_NAME]",ds="[MAX_NAME]",Vi=function(t,e){if(t===e)return 0;if(t===mi||e===ds)return-1;if(e===mi||t===ds)return 1;{const n=Bg(t),r=Bg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},TO=function(t,e){return t===e?0:t<e?-1:1},Yi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ht(e))},xd=function(t){if(typeof t!="object"||t===null)return ht(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ht(e[r]),n+=":",n+=xd(t[e[r]]);return n+="}",n},ow=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function tn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const aw=function(t){F(!iw(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},IO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},AO=new RegExp("^-?(0*)\\d{1,10}$"),RO=-2147483648,CO=2147483647,Bg=function(t){if(AO.test(t)){const e=Number(t);if(e>=RO&&e<=CO)return e}return null},va=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw zt("Exception was thrown by user callback.",n),e},Math.floor(0))}},SO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class PO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){zt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class kO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',zt(e)}}class Gh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gh.OWNER="owner";/**
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
 */const Md="5",lw="v",cw="s",uw="r",hw="f",fw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dw="ls",pw="p",Qh="ac",mw="websocket",gw="long_polling";/**
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
 */class NO{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=es.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&es.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function OO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _w(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let r;if(e===mw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===gw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);OO(t)&&(n.ns=t.namespace);const s=[];return tn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class DO{constructor(){this.counters_={}}incrementCounter(e,n=1){Er(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nS(this.counters_)}}/**
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
 */const zu={},Hu={};function Ld(t){const e=t.toString();return zu[e]||(zu[e]=new DO),zu[e]}function xO(t,e){const n=t.toString();return Hu[n]||(Hu[n]=e()),Hu[n]}/**
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
 */class MO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&va(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Wg="start",LO="close",VO="pLPCommand",$O="pRTLPCB",yw="id",vw="pw",Ew="ser",FO="cb",UO="seg",jO="ts",BO="d",WO="dframe",ww=1870,Tw=30,zO=ww-Tw,HO=25e3,qO=3e4;class Ws{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ya(e),this.stats_=Ld(n),this.urlFn=l=>(this.appCheckToken&&(l[Qh]=this.appCheckToken),_w(n,gw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new MO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qO)),wO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vd((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Wg)this.id=a,this.password=l;else if(o===LO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Wg]="t",r[Ew]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[FO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[lw]=Md,this.transportSessionId&&(r[cw]=this.transportSessionId),this.lastSessionId&&(r[dw]=this.lastSessionId),this.applicationId&&(r[pw]=this.applicationId),this.appCheckToken&&(r[Qh]=this.appCheckToken),typeof location<"u"&&location.hostname&&fw.test(location.hostname)&&(r[uw]=hw);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ws.forceAllow_=!0}static forceDisallow(){Ws.forceDisallow_=!0}static isAvailable(){return Ws.forceAllow_?!0:!Ws.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!IO()&&!bO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ht(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sE(n),s=ow(r,zO);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[WO]="t",r[yw]=e,r[vw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ht(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vd{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yO(),window[VO+this.uniqueCallbackIdentifier]=e,window[$O+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){_t("frame writing exception"),a.stack&&_t(a.stack),_t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yw]=this.myID,e[vw]=this.myPW,e[Ew]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tw+r.length<=ww;){const o=this.pendingSegs.shift();r=r+"&"+UO+s+"="+o.seg+"&"+jO+s+"="+o.ts+"&"+BO+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(HO)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const KO=16384,GO=45e3;let Kl=null;typeof MozWebSocket<"u"?Kl=MozWebSocket:typeof WebSocket<"u"&&(Kl=WebSocket);class an{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ya(this.connId),this.stats_=Ld(n),this.connURL=an.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[lw]=Md,typeof location<"u"&&location.hostname&&fw.test(location.hostname)&&(o[uw]=hw),n&&(o[cw]=n),r&&(o[dw]=r),s&&(o[Qh]=s),i&&(o[pw]=i),_w(e,mw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,es.set("previous_websocket_failure",!0);try{let r;uE(),this.mySock=new Kl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Kl!==null&&!an.forceDisallow_}static previouslyFailed(){return es.isInMemoryStorage||es.get("previous_websocket_failure")===!0}markConnectionHealthy(){es.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Bo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ht(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ow(n,KO);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(GO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}an.responsesRequiredToBeHealthy=2;an.healthyTimeout=3e4;/**
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
 */class qo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ws,an]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=an&&an.isAvailable();let r=n&&!an.previouslyFailed();if(e.webSocketOnly&&(n||zt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[an];else{const s=this.transports_=[];for(const i of qo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);qo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qo.globalTransportInitialized_=!1;/**
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
 */const QO=6e4,YO=5e3,XO=10*1024,JO=100*1024,qu="t",zg="d",ZO="s",Hg="r",e1="e",qg="o",Kg="a",Gg="n",Qg="p",t1="h";class n1{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ya("c:"+this.id+":"),this.transportManager_=new qo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=wo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qu in e){const n=e[qu];n===Kg?this.upgradeIfSecondaryHealthy_():n===Hg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yi("t",e),r=Yi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Gg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yi("t",e),r=Yi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yi(qu,e);if(zg in e){const r=e[zg];if(n===t1){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Gg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ZO?this.onConnectionShutdown_(r):n===Hg?this.onReset_(r):n===e1?Kh("Server Error: "+r):n===qg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Md!==r&&zt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),wo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(es.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Iw{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class bw{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Gl extends bw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ed()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Gl}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Yg=32,Xg=768;class Fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ne(){return new Fe("")}function ve(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $r(t){return t.pieces_.length-t.pieceNum_}function xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Fe(t.pieces_,e)}function Aw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function r1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Rw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Cw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Fe(e,0)}function st(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Fe(n,0)}function ge(t){return t.pieceNum_>=t.pieces_.length}function Jt(t,e){const n=ve(t),r=ve(e);if(n===null)return e;if(n===r)return Jt(xe(t),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Sw(t,e){if($r(t)!==$r(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function cn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if($r(t)>$r(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class s1{constructor(e,n){this.errorPrefix_=n,this.parts_=Rw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=jc(this.parts_[r]);Pw(this)}}function i1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=jc(e),Pw(t)}function o1(t){const e=t.parts_.pop();t.byteLength_-=jc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Pw(t){if(t.byteLength_>Xg)throw new Error(t.errorPrefix_+"has a key path longer than "+Xg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Yg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yg+") or object contains a cycle "+Yr(t))}function Yr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class $d extends bw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new $d}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xi=1e3,a1=60*5*1e3,Jg=30*1e3,l1=1.3,c1=3e4,u1="server_kill",Zg=3;class or extends Iw{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=or.nextPersistentConnectionId_++,this.log_=ya("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xi,this.maxReconnectDelay_=a1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!uE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$d.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Gl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(ht(i)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new jo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;or.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Er(e,"w")){const r=di(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();zt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_S(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ht(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Kh("Unrecognized action received from server: "+ht(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>c1&&(this.reconnectDelay_=Xi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*l1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+or.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new n1(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{zt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(u1)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&zt(h),l())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mh(this.interruptReasons_)&&(this.reconnectDelay_=Xi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>xd(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Fe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){_t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zg&&(this.reconnectDelay_=Jg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+nw.replace(/\./g,"-")]=1,Ed()?e["framework.cordova"]=1:cE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gl.getInstance().currentlyOnline();return Mh(this.interruptReasons_)&&e}}or.nextPersistentConnectionId_=0;or.nextConnectionId_=0;/**
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
 */class Ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ee(e,n)}}/**
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
 */class qc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ee(mi,e),s=new Ee(mi,n);return this.compare(r,s)!==0}minPost(){return Ee.MIN}}/**
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
 */let Za;class kw extends qc{static get __EMPTY_NODE(){return Za}static set __EMPTY_NODE(e){Za=e}compare(e,n){return Vi(e.name,n.name)}isDefinedOn(e){throw xi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ee.MIN}maxPost(){return new Ee(ds,Za)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new Ee(e,Za)}toString(){return".key"}}const ei=new kw;/**
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
 */let el=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Bt=class oo{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??oo.RED,this.left=s??Nn.EMPTY_NODE,this.right=i??Nn.EMPTY_NODE}copy(e,n,r,s,i){return new oo(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Nn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Nn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,oo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,oo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Bt.RED=!0;Bt.BLACK=!1;class h1{copy(e,n,r,s,i){return this}insert(e,n,r){return new Bt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Nn=class yl{constructor(e,n=yl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new yl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new el(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new el(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new el(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new el(this.root_,null,this.comparator_,!0,e)}};Nn.EMPTY_NODE=new h1;/**
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
 */function f1(t,e){return Vi(t.name,e.name)}function Fd(t,e){return Vi(t,e)}/**
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
 */let Yh;function d1(t){Yh=t}const Nw=function(t){return typeof t=="number"?"number:"+aw(t):"string:"+t},Ow=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Er(e,".sv"),"Priority must be a string or number.")}else F(t===Yh||t.isEmpty(),"priority of unexpected type.");F(t===Yh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let e_;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ow(this.priorityNode_)}static set __childrenNodeConstructor(e){e_=e}static get __childrenNodeConstructor(){return e_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ge(e)?this:ve(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ve(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(F(r!==".priority"||$r(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Nw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=aw(this.value_):e+=this.value_,this.lazyHash_=sw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=tt.VALUE_TYPE_ORDER.indexOf(n),i=tt.VALUE_TYPE_ORDER.indexOf(r);return F(s>=0,"Unknown leaf type: "+n),F(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Dw,xw;function p1(t){Dw=t}function m1(t){xw=t}class g1 extends qc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Vi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ee.MIN}maxPost(){return new Ee(ds,new tt("[PRIORITY-POST]",xw))}makePost(e,n){const r=Dw(e);return new Ee(n,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const It=new g1;/**
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
 */const _1=Math.log(2);class y1{constructor(e){const n=i=>parseInt(Math.log(i)/_1,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ql=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Bt(f,h.node,Bt.BLACK,null,null);{const d=parseInt(u/2,10)+l,m=s(l,d),p=s(d+1,c);return h=t[d],f=n?n(h):h,new Bt(f,h.node,Bt.BLACK,m,p)}},i=function(l){let c=null,u=null,h=t.length;const f=function(m,p){const _=h-m,v=h;h-=m;const w=s(_+1,v),I=t[_],E=n?n(I):I;d(new Bt(E,I.node,p,null,w))},d=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const p=l.nextBitIsOne(),_=Math.pow(2,l.count-(m+1));p?f(_,Bt.BLACK):(f(_,Bt.BLACK),f(_,Bt.RED))}return u},o=new y1(t.length),a=i(o);return new Nn(r||e,a)};/**
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
 */let Ku;const xs={};class sr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return F(xs&&It,"ChildrenNode.ts has not been loaded"),Ku=Ku||new sr({".priority":xs},{".priority":It}),Ku}get(e){const n=di(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Nn?n:null}hasIndex(e){return Er(this.indexSet_,e.toString())}addIndex(e,n){F(e!==ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Ee.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Ql(r,e.getCompare()):a=xs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new sr(u,c)}addToIndexes(e,n){const r=$l(this.indexes_,(s,i)=>{const o=di(this.indexSet_,i);if(F(o,"Missing index implementation for "+i),s===xs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ql(a,o.getCompare())}else return xs;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Ee(e.name,a))),l.insert(e,e.node)}});return new sr(r,this.indexSet_)}removeFromIndexes(e,n){const r=$l(this.indexes_,s=>{if(s===xs)return s;{const i=n.get(e.name);return i?s.remove(new Ee(e.name,i)):s}});return new sr(r,this.indexSet_)}}/**
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
 */let Ji;class Ce{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ow(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ji||(Ji=new Ce(new Nn(Fd),null,sr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ji}updatePriority(e){return this.children_.isEmpty()?this:new Ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ji:n}}getChild(e){const n=ve(e);return n===null?this:this.getImmediateChild(n).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ee(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ji:this.priorityNode_;return new Ce(s,o,i)}}updateChild(e,n){const r=ve(e);if(r===null)return n;{F(ve(e)!==".priority"||$r(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(xe(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(It,(o,a)=>{n[o]=a.val(e),r++,i&&Ce.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Nw(this.getPriority().val())+":"),this.forEachChild(It,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":sw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Ee(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ee(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ee.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ee.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ea?-1:0}withIndex(e){if(e===ei||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(It),s=n.getIterator(It);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ei?null:this.indexMap_.get(e.toString())}}Ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class v1 extends Ce{constructor(){super(new Nn(Fd),Ce.EMPTY_NODE,sr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ce.EMPTY_NODE}isEmpty(){return!1}}const Ea=new v1;Object.defineProperties(Ee,{MIN:{value:new Ee(mi,Ce.EMPTY_NODE)},MAX:{value:new Ee(ds,Ea)}});kw.__EMPTY_NODE=Ce.EMPTY_NODE;tt.__childrenNodeConstructor=Ce;d1(Ea);m1(Ea);/**
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
 */const E1=!0;function yt(t,e=null){if(t===null)return Ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,yt(e))}if(!(t instanceof Array)&&E1){const n=[];let r=!1;if(tn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=yt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ee(o,l)))}}),n.length===0)return Ce.EMPTY_NODE;const i=Ql(n,f1,o=>o.name,Fd);if(r){const o=Ql(n,It.getCompare());return new Ce(i,yt(e),new sr({".priority":o},{".priority":It}))}else return new Ce(i,yt(e),sr.Default)}else{let n=Ce.EMPTY_NODE;return tn(t,(r,s)=>{if(Er(t,r)&&r.substring(0,1)!=="."){const i=yt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(yt(e))}}p1(yt);/**
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
 */class w1 extends qc{constructor(e){super(),this.indexPath_=e,F(!ge(e)&&ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Vi(e.name,n.name):i}makePost(e,n){const r=yt(e),s=Ce.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ee(n,s)}maxPost(){const e=Ce.EMPTY_NODE.updateChild(this.indexPath_,Ea);return new Ee(ds,e)}toString(){return Rw(this.indexPath_,0).join("/")}}/**
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
 */class T1 extends qc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Vi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ee.MIN}maxPost(){return Ee.MAX}makePost(e,n){const r=yt(e);return new Ee(n,r)}toString(){return".value"}}const I1=new T1;/**
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
 */function b1(t){return{type:"value",snapshotNode:t}}function A1(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function R1(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function t_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function C1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ud{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=It}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mi}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ds}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===It}copy(){const e=new Ud;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function n_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===It?n="$priority":t.index_===I1?n="$value":t.index_===ei?n="$key":(F(t.index_ instanceof w1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ht(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ht(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ht(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ht(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ht(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function r_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==It&&(e.i=t.index_.toString()),e}/**
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
 */class Yl extends Iw{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=ya("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Yl.getListenId_(e,r),a={};this.listens_[o]=a;const l=n_(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),di(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=Yl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=n_(e._queryParams),r=e._path.toString(),s=new jo;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Li(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Bo(a.responseText)}catch{zt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&zt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class S1{constructor(){this.rootNode_=Ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Xl(){return{value:null,children:new Map}}function Mw(t,e,n){if(ge(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ve(e);t.children.has(r)||t.children.set(r,Xl());const s=t.children.get(r);e=xe(e),Mw(s,e,n)}}function Xh(t,e,n){t.value!==null?n(e,t.value):P1(t,(r,s)=>{const i=new Fe(e.toString()+"/"+r);Xh(s,i,n)})}function P1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class k1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const s_=10*1e3,N1=30*1e3,O1=5*60*1e3;class D1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new k1(e);const r=s_+(N1-s_)*Math.random();wo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;tn(e,(s,i)=>{i>0&&Er(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),wo(this.reportStats_.bind(this),Math.floor(Math.random()*2*O1))}}/**
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
 */var On;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(On||(On={}));function Lw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $w(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Jl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=On.ACK_USER_WRITE,this.source=Lw()}operationForChild(e){if(ge(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Fe(e));return new Jl(Ne(),n,this.revert)}}else return F(ve(this.path)===e,"operationForChild called for unrelated child."),new Jl(xe(this.path),this.affectedTree,this.revert)}}/**
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
 */class ps{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=On.OVERWRITE}operationForChild(e){return ge(this.path)?new ps(this.source,Ne(),this.snap.getImmediateChild(e)):new ps(this.source,xe(this.path),this.snap)}}/**
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
 */class Ko{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=On.MERGE}operationForChild(e){if(ge(this.path)){const n=this.children.subtree(new Fe(e));return n.isEmpty()?null:n.value?new ps(this.source,Ne(),n.value):new Ko(this.source,Ne(),n)}else return F(ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ko(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class jd{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ge(e))return this.isFullyInitialized()&&!this.filtered_;const n=ve(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function x1(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(C1(o.childName,o.snapshotNode))}),Zi(t,s,"child_removed",e,r,n),Zi(t,s,"child_added",e,r,n),Zi(t,s,"child_moved",i,r,n),Zi(t,s,"child_changed",e,r,n),Zi(t,s,"value",e,r,n),s}function Zi(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>L1(t,a,l)),o.forEach(a=>{const l=M1(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function M1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function L1(t,e,n){if(e.childName==null||n.childName==null)throw xi("Should only compare child_ events.");const r=new Ee(e.childName,e.snapshotNode),s=new Ee(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function Fw(t,e){return{eventCache:t,serverCache:e}}function To(t,e,n,r){return Fw(new jd(e,n,r),t.serverCache)}function Uw(t,e,n,r){return Fw(t.eventCache,new jd(e,n,r))}function Jh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ms(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Gu;const V1=()=>(Gu||(Gu=new Nn(TO)),Gu);class De{constructor(e,n=V1()){this.value=e,this.children=n}static fromObject(e){let n=new De(null);return tn(e,(r,s)=>{n=n.set(new Fe(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ne(),value:this.value};if(ge(e))return null;{const r=ve(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(xe(e),n);return i!=null?{path:st(new Fe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ge(e))return this;{const n=ve(e),r=this.children.get(n);return r!==null?r.subtree(xe(e)):new De(null)}}set(e,n){if(ge(e))return new De(n,this.children);{const r=ve(e),i=(this.children.get(r)||new De(null)).set(xe(e),n),o=this.children.insert(r,i);return new De(this.value,o)}}remove(e){if(ge(e))return this.children.isEmpty()?new De(null):new De(null,this.children);{const n=ve(e),r=this.children.get(n);if(r){const s=r.remove(xe(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new De(null):new De(this.value,i)}else return this}}get(e){if(ge(e))return this.value;{const n=ve(e),r=this.children.get(n);return r?r.get(xe(e)):null}}setTree(e,n){if(ge(e))return n;{const r=ve(e),i=(this.children.get(r)||new De(null)).setTree(xe(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new De(this.value,o)}}fold(e){return this.fold_(Ne(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(st(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ne(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ge(e))return null;{const i=ve(e),o=this.children.get(i);return o?o.findOnPath_(xe(e),st(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ne(),n)}foreachOnPath_(e,n,r){if(ge(e))return this;{this.value&&r(n,this.value);const s=ve(e),i=this.children.get(s);return i?i.foreachOnPath_(xe(e),st(n,s),r):new De(null)}}foreach(e){this.foreach_(Ne(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(st(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new De(null))}}function Io(t,e,n){if(ge(e))return new _n(new De(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Jt(s,e);return i=i.updateChild(o,n),new _n(t.writeTree_.set(s,i))}else{const s=new De(n),i=t.writeTree_.setTree(e,s);return new _n(i)}}}function i_(t,e,n){let r=t;return tn(n,(s,i)=>{r=Io(r,st(e,s),i)}),r}function o_(t,e){if(ge(e))return _n.empty();{const n=t.writeTree_.setTree(e,new De(null));return new _n(n)}}function Zh(t,e){return Is(t,e)!=null}function Is(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Jt(n.path,e)):null}function a_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(It,(r,s)=>{e.push(new Ee(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ee(r,s.value))}),e}function Lr(t,e){if(ge(e))return t;{const n=Is(t,e);return n!=null?new _n(new De(n)):new _n(t.writeTree_.subtree(e))}}function ef(t){return t.writeTree_.isEmpty()}function gi(t,e){return jw(Ne(),t.writeTree_,e)}function jw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(F(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=jw(st(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(st(t,".priority"),r)),n}}/**
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
 */function Bw(t,e){return Kw(e,t)}function $1(t,e,n,r,s){F(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Io(t.visibleWrites,e,n)),t.lastWriteId=r}function F1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function U1(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&j1(a,r.path)?s=!1:cn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return B1(t),!0;if(r.snap)t.visibleWrites=o_(t.visibleWrites,r.path);else{const a=r.children;tn(a,l=>{t.visibleWrites=o_(t.visibleWrites,st(r.path,l))})}return!0}else return!1}function j1(t,e){if(t.snap)return cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&cn(st(t.path,n),e))return!0;return!1}function B1(t){t.visibleWrites=Ww(t.allWrites,W1,Ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function W1(t){return t.visible}function Ww(t,e,n){let r=_n.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)cn(n,o)?(a=Jt(n,o),r=Io(r,a,i.snap)):cn(o,n)&&(a=Jt(o,n),r=Io(r,Ne(),i.snap.getChild(a)));else if(i.children){if(cn(n,o))a=Jt(n,o),r=i_(r,a,i.children);else if(cn(o,n))if(a=Jt(o,n),ge(a))r=i_(r,Ne(),i.children);else{const l=di(i.children,ve(a));if(l){const c=l.getChild(xe(a));r=Io(r,Ne(),c)}}}else throw xi("WriteRecord should have .snap or .children")}}return r}function zw(t,e,n,r,s){if(!r&&!s){const i=Is(t.visibleWrites,e);if(i!=null)return i;{const o=Lr(t.visibleWrites,e);if(ef(o))return n;if(n==null&&!Zh(o,Ne()))return null;{const a=n||Ce.EMPTY_NODE;return gi(o,a)}}}else{const i=Lr(t.visibleWrites,e);if(!s&&ef(i))return n;if(!s&&n==null&&!Zh(i,Ne()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(cn(c.path,e)||cn(e,c.path))},a=Ww(t.allWrites,o,e),l=n||Ce.EMPTY_NODE;return gi(a,l)}}}function z1(t,e,n){let r=Ce.EMPTY_NODE;const s=Is(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(It,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Lr(t.visibleWrites,e);return n.forEachChild(It,(o,a)=>{const l=gi(Lr(i,new Fe(o)),a);r=r.updateImmediateChild(o,l)}),a_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Lr(t.visibleWrites,e);return a_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function H1(t,e,n,r,s){F(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=st(e,n);if(Zh(t.visibleWrites,i))return null;{const o=Lr(t.visibleWrites,i);return ef(o)?s.getChild(n):gi(o,s.getChild(n))}}function q1(t,e,n,r){const s=st(e,n),i=Is(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Lr(t.visibleWrites,s);return gi(o,r.getNode().getImmediateChild(n))}else return null}function K1(t,e){return Is(t.visibleWrites,e)}function G1(t,e,n,r,s,i,o){let a;const l=Lr(t.visibleWrites,e),c=Is(l,Ne());if(c!=null)a=c;else if(n!=null)a=gi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<s;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function Q1(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function tf(t,e,n,r){return zw(t.writeTree,t.treePath,e,n,r)}function Hw(t,e){return z1(t.writeTree,t.treePath,e)}function l_(t,e,n,r){return H1(t.writeTree,t.treePath,e,n,r)}function Zl(t,e){return K1(t.writeTree,st(t.treePath,e))}function Y1(t,e,n,r,s,i){return G1(t.writeTree,t.treePath,e,n,r,s,i)}function Bd(t,e,n){return q1(t.writeTree,t.treePath,e,n)}function qw(t,e){return Kw(st(t.treePath,e),t.writeTree)}function Kw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class X1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,t_(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,R1(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,A1(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,t_(r,e.snapshotNode,s.oldSnap));else throw xi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class J1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Gw=new J1;class Wd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new jd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ms(this.viewCache_),i=Y1(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function Z1(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function eD(t,e,n,r,s){const i=new X1;let o,a;if(n.type===On.OVERWRITE){const c=n;c.source.fromUser?o=nf(t,e,c.path,c.snap,r,s,i):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ge(c.path),o=ec(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===On.MERGE){const c=n;c.source.fromUser?o=nD(t,e,c.path,c.children,r,s,i):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=rf(t,e,c.path,c.children,r,s,a,i))}else if(n.type===On.ACK_USER_WRITE){const c=n;c.revert?o=iD(t,e,c.path,r,s,i):o=rD(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===On.LISTEN_COMPLETE)o=sD(t,e,n.path,r,i);else throw xi("Unknown operation type: "+n.type);const l=i.getChanges();return tD(e,o,l),{viewCache:o,changes:l}}function tD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Jh(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(b1(Jh(e)))}}function Qw(t,e,n,r,s,i){const o=e.eventCache;if(Zl(r,n)!=null)return e;{let a,l;if(ge(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ms(e),u=c instanceof Ce?c:Ce.EMPTY_NODE,h=Hw(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=tf(r,ms(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=ve(n);if(c===".priority"){F($r(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=l_(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=xe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=l_(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Bd(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return To(e,a,o.isFullyInitialized()||ge(n),t.filter.filtersNodes())}}function ec(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ge(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=ve(n);if(!l.isCompleteForPath(n)&&$r(n)>1)return e;const m=xe(n),_=l.getNode().getImmediateChild(d).updateChild(m,r);d===".priority"?c=u.updatePriority(l.getNode(),_):c=u.updateChild(l.getNode(),d,_,m,Gw,null)}const h=Uw(e,c,l.isFullyInitialized()||ge(n),u.filtersNodes()),f=new Wd(s,h,i);return Qw(t,h,n,s,f,a)}function nf(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new Wd(s,e,i);if(ge(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=To(e,c,!0,t.filter.filtersNodes());else{const h=ve(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=To(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=xe(n),d=a.getNode().getImmediateChild(h);let m;if(ge(f))m=r;else{const p=u.getCompleteChild(h);p!=null?Aw(f)===".priority"&&p.getChild(Cw(f)).isEmpty()?m=p:m=p.updateChild(f,r):m=Ce.EMPTY_NODE}if(d.equals(m))l=e;else{const p=t.filter.updateChild(a.getNode(),h,m,f,u,o);l=To(e,p,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function c_(t,e){return t.eventCache.isCompleteForChild(e)}function nD(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=st(n,l);c_(e,ve(u))&&(a=nf(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=st(n,l);c_(e,ve(u))||(a=nf(t,a,u,c,s,i,o))}),a}function u_(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function rf(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ge(n)?c=r:c=new De(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),m=u_(t,d,f);l=ec(t,l,new Fe(h),m,s,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const m=e.serverCache.getNode().getImmediateChild(h),p=u_(t,m,f);l=ec(t,l,new Fe(h),p,s,i,o,a)}}),l}function rD(t,e,n,r,s,i,o){if(Zl(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ge(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ec(t,e,n,l.getNode().getChild(n),s,i,a,o);if(ge(n)){let c=new De(null);return l.getNode().forEachChild(ei,(u,h)=>{c=c.set(new Fe(u),h)}),rf(t,e,n,c,s,i,a,o)}else return e}else{let c=new De(null);return r.foreach((u,h)=>{const f=st(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),rf(t,e,n,c,s,i,a,o)}}function sD(t,e,n,r,s){const i=e.serverCache,o=Uw(e,i.getNode(),i.isFullyInitialized()||ge(n),i.isFiltered());return Qw(t,o,n,r,Gw,s)}function iD(t,e,n,r,s,i){let o;if(Zl(r,n)!=null)return e;{const a=new Wd(r,e,s),l=e.eventCache.getNode();let c;if(ge(n)||ve(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=tf(r,ms(e));else{const h=e.serverCache.getNode();F(h instanceof Ce,"serverChildren would be complete if leaf node"),u=Hw(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=ve(n);let h=Bd(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,xe(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ce.EMPTY_NODE,xe(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=tf(r,ms(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Zl(r,Ne())!=null,To(e,c,o,t.filter.filtersNodes())}}function oD(t,e){const n=ms(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ge(e)&&!n.getImmediateChild(ve(e)).isEmpty())?n.getChild(e):null}function h_(t,e,n,r){e.type===On.MERGE&&e.source.queryId!==null&&(F(ms(t.viewCache_),"We should always have a full cache before handling merges"),F(Jh(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=eD(t.processor_,s,e,n,r);return Z1(t.processor_,i.viewCache),F(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,aD(t,i.changes,i.viewCache.eventCache.getNode(),null)}function aD(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return x1(t.eventGenerator_,e,n,s)}/**
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
 */let f_;function lD(t){F(!f_,"__referenceConstructor has already been defined"),f_=t}function zd(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return F(i!=null,"SyncTree gave us an op for an invalid query."),h_(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(h_(o,e,n,r));return i}}function Hd(t,e){let n=null;for(const r of t.views.values())n=n||oD(r,e);return n}/**
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
 */let d_;function cD(t){F(!d_,"__referenceConstructor has already been defined"),d_=t}class p_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new De(null),this.pendingWriteTree_=Q1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uD(t,e,n,r,s){return $1(t.pendingWriteTree_,e,n,r,s),s?Gc(t,new ps(Lw(),e,n)):[]}function zs(t,e,n=!1){const r=F1(t.pendingWriteTree_,e);if(U1(t.pendingWriteTree_,e)){let i=new De(null);return r.snap!=null?i=i.set(Ne(),!0):tn(r.children,o=>{i=i.set(new Fe(o),!0)}),Gc(t,new Jl(r.path,i,n))}else return[]}function Kc(t,e,n){return Gc(t,new ps(Vw(),e,n))}function hD(t,e,n){const r=De.fromObject(n);return Gc(t,new Ko(Vw(),e,r))}function fD(t,e,n,r){const s=Zw(t,r);if(s!=null){const i=eT(s),o=i.path,a=i.queryId,l=Jt(o,e),c=new ps($w(a),l,n);return tT(t,o,c)}else return[]}function dD(t,e,n,r){const s=Zw(t,r);if(s){const i=eT(s),o=i.path,a=i.queryId,l=Jt(o,e),c=De.fromObject(n),u=new Ko($w(a),l,c);return tT(t,o,u)}else return[]}function Yw(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Jt(o,e),c=Hd(a,l);if(c)return c});return zw(s,e,i,n,!0)}function Gc(t,e){return Xw(e,t.syncPointTree_,null,Bw(t.pendingWriteTree_,Ne()))}function Xw(t,e,n,r){if(ge(t.path))return Jw(t,e,n,r);{const s=e.get(Ne());n==null&&s!=null&&(n=Hd(s,Ne()));let i=[];const o=ve(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=qw(r,o);i=i.concat(Xw(a,l,c,u))}return s&&(i=i.concat(zd(s,t,r,n))),i}}function Jw(t,e,n,r){const s=e.get(Ne());n==null&&s!=null&&(n=Hd(s,Ne()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=qw(r,o),u=t.operationForChild(o);u&&(i=i.concat(Jw(u,a,l,c)))}),s&&(i=i.concat(zd(s,t,r,n))),i}function Zw(t,e){return t.tagToQueryMap.get(e)}function eT(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Fe(t.substr(0,e))}}function tT(t,e,n){const r=t.syncPointTree_.get(e);F(r,"Missing sync point for query tag that we're tracking");const s=Bw(t.pendingWriteTree_,e);return zd(r,n,s,null)}/**
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
 */class qd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qd(n)}node(){return this.node_}}class Kd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=st(this.path_,e);return new Kd(this.syncTree_,n)}node(){return Yw(this.syncTree_,this.path_)}}const pD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},m_=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gD(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},gD=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&F(!1,"Unexpected increment value: "+r);const s=e.node();if(F(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},_D=function(t,e,n,r){return Gd(e,new Kd(n,t),r)},yD=function(t,e,n){return Gd(t,new qd(e),n)};function Gd(t,e,n){const r=t.getPriority().val(),s=m_(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=m_(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new tt(a,yt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new tt(s))),o.forEachChild(It,(a,l)=>{const c=Gd(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class Qd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Yd(t,e){let n=e instanceof Fe?e:new Fe(e),r=t,s=ve(n);for(;s!==null;){const i=di(r.node.children,s)||{children:{},childCount:0};r=new Qd(s,r,i),n=xe(n),s=ve(n)}return r}function $i(t){return t.node.value}function nT(t,e){t.node.value=e,sf(t)}function rT(t){return t.node.childCount>0}function vD(t){return $i(t)===void 0&&!rT(t)}function Qc(t,e){tn(t.node.children,(n,r)=>{e(new Qd(n,t,r))})}function sT(t,e,n,r){n&&!r&&e(t),Qc(t,s=>{sT(s,e,!0,r)}),n&&r&&e(t)}function ED(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function wa(t){return new Fe(t.parent===null?t.name:wa(t.parent)+"/"+t.name)}function sf(t){t.parent!==null&&wD(t.parent,t.name,t)}function wD(t,e,n){const r=vD(n),s=Er(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,sf(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,sf(t))}/**
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
 */const TD=/[\[\].#$\/\u0000-\u001F\u007F]/,ID=/[\[\].#$\u0000-\u001F\u007F]/,Qu=10*1024*1024,iT=function(t){return typeof t=="string"&&t.length!==0&&!TD.test(t)},bD=function(t){return typeof t=="string"&&t.length!==0&&!ID.test(t)},AD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bD(t)},oT=function(t,e,n){const r=n instanceof Fe?new s1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Yr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Yr(r)+" with contents = "+e.toString());if(iw(e))throw new Error(t+"contains "+e.toString()+" "+Yr(r));if(typeof e=="string"&&e.length>Qu/3&&jc(e)>Qu)throw new Error(t+"contains a string greater than "+Qu+" utf8 bytes "+Yr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(tn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!iT(o)))throw new Error(t+" contains an invalid key ("+o+") "+Yr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);i1(r,o),oT(t,a,r),o1(r)}),s&&i)throw new Error(t+' contains ".value" child '+Yr(r)+" in addition to actual children.")}},RD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!iT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!AD(n))throw new Error(TS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class CD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function SD(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Sw(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function bs(t,e,n){SD(t,n),PD(t,r=>cn(r,e)||cn(e,r))}function PD(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(kD(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function kD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();as&&_t("event: "+n.toString()),va(r)}}}/**
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
 */const ND="repo_interrupt",OD=25;class DD{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new CD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xl(),this.transactionQueueTree_=new Qd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xD(t,e,n){if(t.stats_=Ld(t.repoInfo_),t.forceRestClient_||SO())t.server_=new Yl(t.repoInfo_,(r,s,i,o)=>{g_(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>__(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ht(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new or(t.repoInfo_,e,(r,s,i,o)=>{g_(t,r,s,i,o)},r=>{__(t,r)},r=>{LD(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=xO(t.repoInfo_,()=>new D1(t.stats_,t.server_)),t.infoData_=new S1,t.infoSyncTree_=new p_({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Kc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Xd(t,"connected",!1),t.serverSyncTree_=new p_({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);bs(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function MD(t){const n=t.infoData_.getNode(new Fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function aT(t){return pD({timestamp:MD(t)})}function g_(t,e,n,r,s){t.dataUpdateCount++;const i=new Fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=$l(n,c=>yt(c));o=dD(t.serverSyncTree_,i,l,s)}else{const l=yt(n);o=fD(t.serverSyncTree_,i,l,s)}else if(r){const l=$l(n,c=>yt(c));o=hD(t.serverSyncTree_,i,l)}else{const l=yt(n);o=Kc(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Zd(t,i)),bs(t.eventQueue_,a,o)}function __(t,e){Xd(t,"connected",e),e===!1&&$D(t)}function LD(t,e){tn(e,(n,r)=>{Xd(t,n,r)})}function Xd(t,e,n){const r=new Fe("/.info/"+e),s=yt(n);t.infoData_.updateSnapshot(r,s);const i=Kc(t.infoSyncTree_,r,s);bs(t.eventQueue_,r,i)}function VD(t){return t.nextWriteId_++}function $D(t){lT(t,"onDisconnectEvents");const e=aT(t),n=Xl();Xh(t.onDisconnect_,Ne(),(s,i)=>{const o=_D(s,i,t.serverSyncTree_,e);Mw(n,s,o)});let r=[];Xh(n,Ne(),(s,i)=>{r=r.concat(Kc(t.serverSyncTree_,s,i));const o=BD(t,s);Zd(t,o)}),t.onDisconnect_=Xl(),bs(t.eventQueue_,Ne(),r)}function FD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ND)}function lT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_t(n,...e)}function cT(t,e,n){return Yw(t.serverSyncTree_,e,n)||Ce.EMPTY_NODE}function Jd(t,e=t.transactionQueueTree_){if(e||Yc(t,e),$i(e)){const n=hT(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&UD(t,wa(e),n)}else rT(e)&&Qc(e,n=>{Jd(t,n)})}function UD(t,e,n){const r=n.map(c=>c.currentWriteId),s=cT(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];F(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Jt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{lT(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(zs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Yc(t,Yd(t.transactionQueueTree_,e)),Jd(t,t.transactionQueueTree_),bs(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)va(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{zt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Zd(t,e)}},o)}function Zd(t,e){const n=uT(t,e),r=wa(n),s=hT(t,n);return jD(t,s,r),r}function jD(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Jt(n,l.path);let u=!1,h;if(F(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(zs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=OD)u=!0,h="maxretry",s=s.concat(zs(t.serverSyncTree_,l.currentWriteId,!0));else{const f=cT(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){oT("transaction failed: Data returned ",d,l.path);let m=yt(d);typeof d=="object"&&d!=null&&Er(d,".priority")||(m=m.updatePriority(f.getPriority()));const _=l.currentWriteId,v=aT(t),w=yD(m,f,v);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=w,l.currentWriteId=VD(t),o.splice(o.indexOf(_),1),s=s.concat(uD(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),s=s.concat(zs(t.serverSyncTree_,_,!0))}else u=!0,h="nodata",s=s.concat(zs(t.serverSyncTree_,l.currentWriteId,!0))}bs(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Yc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)va(r[a]);Jd(t,t.transactionQueueTree_)}function uT(t,e){let n,r=t.transactionQueueTree_;for(n=ve(e);n!==null&&$i(r)===void 0;)r=Yd(r,n),e=xe(e),n=ve(e);return r}function hT(t,e){const n=[];return fT(t,e,n),n.sort((r,s)=>r.order-s.order),n}function fT(t,e,n){const r=$i(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Qc(e,s=>{fT(t,s,n)})}function Yc(t,e){const n=$i(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,nT(e,n.length>0?n:void 0)}Qc(e,r=>{Yc(t,r)})}function BD(t,e){const n=wa(uT(t,e)),r=Yd(t.transactionQueueTree_,e);return ED(r,s=>{Yu(t,s)}),Yu(t,r),sT(r,s=>{Yu(t,s)}),n}function Yu(t,e){const n=$i(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(zs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?nT(e,void 0):n.length=i+1,bs(t.eventQueue_,wa(e),s);for(let o=0;o<r.length;o++)va(r[o])}}/**
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
 */function WD(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function zD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):zt(`Invalid query segment '${n}' in query '${t}'`)}return e}const y_=function(t,e){const n=HD(t),r=n.namespace;n.domain==="firebase.com"&&fs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&fs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||EO();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new NO(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Fe(n.pathString)}},HD=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=WD(t.substring(u,h)));const f=zD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class ep{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ge(this._path)?null:Aw(this._path)}get ref(){return new Fi(this._repo,this._path)}get _queryIdentifier(){const e=r_(this._queryParams),n=xd(e);return n==="{}"?"default":n}get _queryObject(){return r_(this._queryParams)}isEqual(e){if(e=Kt(e),!(e instanceof ep))return!1;const n=this._repo===e._repo,r=Sw(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+r1(this._path)}}class Fi extends ep{constructor(e,n){super(e,n,new Ud,!1)}get parent(){const e=Cw(this._path);return e===null?null:new Fi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}lD(Fi);cD(Fi);/**
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
 */const qD="FIREBASE_DATABASE_EMULATOR_HOST",of={};let KD=!1;function GD(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||fs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=y_(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[qD]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=y_(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Gh(Gh.OWNER):new kO(t.name,t.options,e);RD("Invalid Firebase Database URL",o),ge(o.path)||fs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=YD(a,t,u,new PO(t.name,n));return new XD(h,t)}function QD(t,e){const n=of[e];(!n||n[t.key]!==t)&&fs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),FD(t),delete n[t.key]}function YD(t,e,n,r){let s=of[e.name];s||(s={},of[e.name]=s);let i=s[t.toURLString()];return i&&fs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new DD(t,KD,n,r),s[t.toURLString()]=i,i}class XD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fi(this._repo,Ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fs("Cannot call "+e+" on a deleted database.")}}/**
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
 */function JD(t){mO(Br),jn(new vn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return GD(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Wt(Fg,Ug,t),Wt(Fg,Ug,"esm2017")}or.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};or.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};JD();var ZD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,tp=tp||{},ne=ZD||self;function Xc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ta(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ex(t){return Object.prototype.hasOwnProperty.call(t,Xu)&&t[Xu]||(t[Xu]=++tx)}var Xu="closure_uid_"+(1e9*Math.random()>>>0),tx=0;function nx(t,e,n){return t.call.apply(t.bind,arguments)}function rx(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function bt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?bt=nx:bt=rx,bt.apply(null,arguments)}function tl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Wr(){this.s=this.s,this.o=this.o}var sx=0;Wr.prototype.s=!1;Wr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),sx!=0)&&ex(this)};Wr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function np(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function v_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Xc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function At(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};var ix=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",()=>{},e),ne.removeEventListener("test",()=>{},e)}catch{}return t}();function Go(t){return/^[\s\xa0]*$/.test(t)}function Jc(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function Pn(t){return Jc().indexOf(t)!=-1}function rp(t){return rp[" "](t),t}rp[" "]=function(){};function ox(t,e){var n=Jx;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ax=Pn("Opera"),_i=Pn("Trident")||Pn("MSIE"),pT=Pn("Edge"),af=pT||_i,mT=Pn("Gecko")&&!(Jc().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge"))&&!(Pn("Trident")||Pn("MSIE"))&&!Pn("Edge"),lx=Jc().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge");function gT(){var t=ne.document;return t?t.documentMode:void 0}var lf;e:{var Ju="",Zu=function(){var t=Jc();if(mT)return/rv:([^\);]+)(\)|;)/.exec(t);if(pT)return/Edge\/([\d\.]+)/.exec(t);if(_i)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(lx)return/WebKit\/(\S+)/.exec(t);if(ax)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zu&&(Ju=Zu?Zu[1]:""),_i){var eh=gT();if(eh!=null&&eh>parseFloat(Ju)){lf=String(eh);break e}}lf=Ju}var cf;if(ne.document&&_i){var E_=gT();cf=E_||parseInt(lf,10)||void 0}else cf=void 0;var cx=cf;function Qo(t,e){if(At.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(mT){e:{try{rp(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ux[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Qo.$.h.call(this)}}lt(Qo,At);var ux={2:"touch",3:"pen",4:"mouse"};Qo.prototype.h=function(){Qo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ia="closure_listenable_"+(1e6*Math.random()|0),hx=0;function fx(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++hx,this.fa=this.ia=!1}function Zc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function sp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function dx(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function _T(t){const e={};for(const n in t)e[n]=t[n];return e}const w_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yT(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<w_.length;i++)n=w_[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function eu(t){this.src=t,this.g={},this.h=0}eu.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=hf(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new fx(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function uf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=dT(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Zc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hf(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var ip="closure_lm_"+(1e6*Math.random()|0),th={};function vT(t,e,n,r,s){if(r&&r.once)return wT(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)vT(t,e[i],n,r,s);return null}return n=lp(n),t&&t[Ia]?t.O(e,n,Ta(r)?!!r.capture:!!r,s):ET(t,e,n,!1,r,s)}function ET(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ta(s)?!!s.capture:!!s,a=ap(t);if(a||(t[ip]=a=new eu(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=px(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ix||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(IT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function px(){function t(n){return e.call(t.src,t.listener,n)}const e=mx;return t}function wT(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)wT(t,e[i],n,r,s);return null}return n=lp(n),t&&t[Ia]?t.P(e,n,Ta(r)?!!r.capture:!!r,s):ET(t,e,n,!0,r,s)}function TT(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)TT(t,e[i],n,r,s);else r=Ta(r)?!!r.capture:!!r,n=lp(n),t&&t[Ia]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=hf(i,n,r,s),-1<n&&(Zc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ap(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hf(e,n,r,s)),(n=-1<t?e[t]:null)&&op(n))}function op(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ia])uf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(IT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ap(e))?(uf(n,t),n.h==0&&(n.src=null,e[ip]=null)):Zc(t)}}}function IT(t){return t in th?th[t]:th[t]="on"+t}function mx(t,e){if(t.fa)t=!0;else{e=new Qo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&op(t),t=n.call(r,e)}return t}function ap(t){return t=t[ip],t instanceof eu?t:null}var nh="__closure_events_fn_"+(1e9*Math.random()>>>0);function lp(t){return typeof t=="function"?t:(t[nh]||(t[nh]=function(e){return t.handleEvent(e)}),t[nh])}function at(){Wr.call(this),this.i=new eu(this),this.S=this,this.J=null}lt(at,Wr);at.prototype[Ia]=!0;at.prototype.removeEventListener=function(t,e,n,r){TT(this,t,e,n,r)};function ft(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new At(e,t);else if(e instanceof At)e.target=e.target||t;else{var s=e;e=new At(r,t),yT(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=nl(o,r,!0,e)&&s}if(o=e.g=t,s=nl(o,r,!0,e)&&s,s=nl(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=nl(o,r,!1,e)&&s}at.prototype.N=function(){if(at.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Zc(n[r]);delete t.g[e],t.h--}}this.J=null};at.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};at.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function nl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&uf(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var cp=ne.JSON.stringify;class gx{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function _x(){var t=up;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yx{constructor(){this.h=this.g=null}add(e,n){const r=bT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bT=new gx(()=>new vx,t=>t.reset());class vx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ex(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function wx(t){ne.setTimeout(()=>{throw t},0)}let Yo,Xo=!1,up=new yx,AT=()=>{const t=ne.Promise.resolve(void 0);Yo=()=>{t.then(Tx)}};var Tx=()=>{for(var t;t=_x();){try{t.h.call(t.g)}catch(n){wx(n)}var e=bT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xo=!1};function tu(t,e){at.call(this),this.h=t||1,this.g=e||ne,this.j=bt(this.qb,this),this.l=Date.now()}lt(tu,at);U=tu.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ft(this,"tick"),this.ga&&(hp(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){tu.$.N.call(this),hp(this),delete this.g};function fp(t,e,n){if(typeof t=="function")n&&(t=bt(t,n));else if(t&&typeof t.handleEvent=="function")t=bt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function RT(t){t.g=fp(()=>{t.g=null,t.i&&(t.i=!1,RT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ix extends Wr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:RT(this)}N(){super.N(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jo(t){Wr.call(this),this.h=t,this.g={}}lt(Jo,Wr);var T_=[];function CT(t,e,n,r){Array.isArray(n)||(n&&(T_[0]=n.toString()),n=T_);for(var s=0;s<n.length;s++){var i=vT(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ST(t){sp(t.g,function(e,n){this.g.hasOwnProperty(n)&&op(e)},t),t.g={}}Jo.prototype.N=function(){Jo.$.N.call(this),ST(this)};Jo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function nu(){this.g=!0}nu.prototype.Ea=function(){this.g=!1};function bx(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Ax(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Hs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Cx(t,n)+(r?" "+r:"")})}function Rx(t,e){t.info(function(){return"TIMEOUT: "+e})}nu.prototype.info=function(){};function Cx(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return cp(n)}catch{return e}}var As={},I_=null;function ru(){return I_=I_||new at}As.Ta="serverreachability";function PT(t){At.call(this,As.Ta,t)}lt(PT,At);function Zo(t){const e=ru();ft(e,new PT(e))}As.STAT_EVENT="statevent";function kT(t,e){At.call(this,As.STAT_EVENT,t),this.stat=e}lt(kT,At);function Nt(t){const e=ru();ft(e,new kT(e,t))}As.Ua="timingevent";function NT(t,e){At.call(this,As.Ua,t),this.size=e}lt(NT,At);function ba(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var su={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},OT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function dp(){}dp.prototype.h=null;function b_(t){return t.h||(t.h=t.i())}function DT(){}var Aa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pp(){At.call(this,"d")}lt(pp,At);function mp(){At.call(this,"c")}lt(mp,At);var ff;function iu(){}lt(iu,dp);iu.prototype.g=function(){return new XMLHttpRequest};iu.prototype.i=function(){return{}};ff=new iu;function Ra(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Jo(this),this.P=Sx,t=af?125:void 0,this.V=new tu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new xT}function xT(){this.i=null,this.g="",this.h=!1}var Sx=45e3,df={},tc={};U=Ra.prototype;U.setTimeout=function(t){this.P=t};function pf(t,e,n){t.L=1,t.v=au(dr(e)),t.s=n,t.S=!0,MT(t,null)}function MT(t,e){t.G=Date.now(),Ca(t),t.A=dr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),WT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new xT,t.g=uI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Ix(bt(t.Pa,t,t.g),t.O)),CT(t.U,t.g,"readystatechange",t.nb),e=t.I?_T(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Zo(),bx(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&Dn(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const u=Dn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||af||this.g&&(this.h.h||this.g.ja()||S_(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Zo(3):Zo(2)),ou(this);var n=this.g.da();this.ca=n;t:if(LT(this)){var r=S_(this.g);t="";var s=r.length,i=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ts(this),bo(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ax(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Go(a)){var c=a;break t}}c=null}if(n=c)Hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mf(this,n);else{this.i=!1,this.o=3,Nt(12),ts(this),bo(this);break e}}this.S?(VT(this,u,o),af&&this.i&&u==3&&(CT(this.U,this.V,"tick",this.mb),this.V.start())):(Hs(this.j,this.m,o,null),mf(this,o)),u==4&&ts(this),this.i&&!this.J&&(u==4?oI(this.l,this):(this.i=!1,Ca(this)))}else Qx(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Nt(12)):(this.o=0,Nt(13)),ts(this),bo(this)}}}catch{}finally{}};function LT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function VT(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=Px(t,n),s==tc){e==4&&(t.o=4,Nt(14),r=!1),Hs(t.j,t.m,null,"[Incomplete Response]");break}else if(s==df){t.o=4,Nt(15),Hs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Hs(t.j,t.m,s,null),mf(t,s);LT(t)&&s!=tc&&s!=df&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Nt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),wp(e),e.M=!0,Nt(11))):(Hs(t.j,t.m,n,"[Invalid Chunked Response]"),ts(t),bo(t))}U.mb=function(){if(this.g){var t=Dn(this.g),e=this.g.ja();this.C<e.length&&(ou(this),VT(this,t,e),this.i&&t!=4&&Ca(this))}};function Px(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?tc:(n=Number(e.substring(n,r)),isNaN(n)?df:(r+=1,r+n>e.length?tc:(e=e.slice(r,r+n),t.C=r+n,e)))}U.cancel=function(){this.J=!0,ts(this)};function Ca(t){t.Y=Date.now()+t.P,$T(t,t.P)}function $T(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ba(bt(t.lb,t),e)}function ou(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Rx(this.j,this.A),this.L!=2&&(Zo(),Nt(17)),ts(this),this.o=2,bo(this)):$T(this,this.Y-t)};function bo(t){t.l.H==0||t.J||oI(t.l,t)}function ts(t){ou(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,hp(t.V),ST(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function mf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||gf(n.i,t))){if(!t.K&&gf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)sc(n),hu(n);else break e;Ep(n),Nt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ba(bt(n.ib,n),6e3));if(1>=qT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ns(n,11)}else if((t.K||n.g==t)&&sc(n),!Go(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(gp(i,i.h),i.h=null))}if(r.F){const p=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.Da=p,Le(r.I,r.F,p))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=cI(r,r.J?r.pa:null,r.Y),o.K){KT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ou(a),Ca(a)),r.g=o}else sI(r);0<n.j.length&&fu(n)}else c[0]!="stop"&&c[0]!="close"||ns(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ns(n,7):vp(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Zo(4)}catch{}}function kx(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Xc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Nx(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Xc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function FT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Nx(t),r=kx(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var UT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ox(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ls(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ls){this.h=t.h,nc(this,t.j),this.s=t.s,this.g=t.g,rc(this,t.m),this.l=t.l;var e=t.i,n=new ea;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),A_(this,n),this.o=t.o}else t&&(e=String(t).match(UT))?(this.h=!1,nc(this,e[1]||"",!0),this.s=ao(e[2]||""),this.g=ao(e[3]||"",!0),rc(this,e[4]),this.l=ao(e[5]||"",!0),A_(this,e[6]||"",!0),this.o=ao(e[7]||"")):(this.h=!1,this.i=new ea(null,this.h))}ls.prototype.toString=function(){var t=[],e=this.j;e&&t.push(lo(e,R_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(lo(e,R_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(lo(n,n.charAt(0)=="/"?Mx:xx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",lo(n,Vx)),t.join("")};function dr(t){return new ls(t)}function nc(t,e,n){t.j=n?ao(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function rc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function A_(t,e,n){e instanceof ea?(t.i=e,$x(t.i,t.h)):(n||(e=lo(e,Lx)),t.i=new ea(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function au(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ao(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Dx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Dx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var R_=/[#\/\?@]/g,xx=/[#\?:]/g,Mx=/[#\?]/g,Lx=/[#\?@]/g,Vx=/#/g;function ea(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zr(t){t.g||(t.g=new Map,t.h=0,t.i&&Ox(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=ea.prototype;U.add=function(t,e){zr(this),this.i=null,t=Ui(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function jT(t,e){zr(t),e=Ui(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function BT(t,e){return zr(t),e=Ui(t,e),t.g.has(e)}U.forEach=function(t,e){zr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};U.ta=function(){zr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};U.Z=function(t){zr(this);let e=[];if(typeof t=="string")BT(this,t)&&(e=e.concat(this.g.get(Ui(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return zr(this),this.i=null,t=Ui(this,t),BT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function WT(t,e,n){jT(t,e),0<n.length&&(t.i=null,t.g.set(Ui(t,e),np(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ui(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $x(t,e){e&&!t.j&&(zr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(jT(this,r),WT(this,s,n))},t)),t.j=e}var Fx=class{constructor(t,e){this.g=t,this.map=e}};function zT(t){this.l=t||Ux,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ka&&ne.g.Ka()&&ne.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ux=10;function HT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qT(t){return t.h?1:t.g?t.g.size:0}function gf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function gp(t,e){t.g?t.g.add(e):t.h=e}function KT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zT.prototype.cancel=function(){if(this.i=GT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function GT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return np(t.i)}var jx=class{stringify(t){return ne.JSON.stringify(t,void 0)}parse(t){return ne.JSON.parse(t,void 0)}};function Bx(){this.g=new jx}function Wx(t,e,n){const r=n||"";try{FT(t,function(s,i){let o=s;Ta(s)&&(o=cp(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function zx(t,e){const n=new nu;if(ne.Image){const r=new Image;r.onload=tl(rl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=tl(rl,n,r,"TestLoadImage: error",!1,e),r.onabort=tl(rl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=tl(rl,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function rl(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function lu(t){this.l=t.ec||null,this.j=t.ob||!1}lt(lu,dp);lu.prototype.g=function(){return new cu(this.l,this.j)};lu.prototype.i=function(t){return function(){return t}}({});function cu(t,e){at.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=_p,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(cu,at);var _p=0;U=cu.prototype;U.open=function(t,e){if(this.readyState!=_p)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ta(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ne).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sa(this)),this.readyState=_p};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ta(this)),this.g&&(this.readyState=3,ta(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;QT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function QT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sa(this):ta(this),this.readyState==3&&QT(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,Sa(this))};U.Ya=function(t){this.g&&(this.response=t,Sa(this))};U.ka=function(){this.g&&Sa(this)};function Sa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ta(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ta(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(cu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Hx=ne.JSON.parse;function qe(t){at.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=YT,this.L=this.M=!1}lt(qe,at);var YT="",qx=/^https?$/i,Kx=["POST","PUT"];U=qe.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ff.g(),this.C=this.u?b_(this.u):b_(ff),this.g.onreadystatechange=bt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){C_(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ne.FormData&&t instanceof ne.FormData,!(0<=dT(Kx,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ZT(this),0<this.B&&((this.L=Gx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=bt(this.ua,this)):this.A=fp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){C_(this,i)}};function Gx(t){return _i&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof tp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function C_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,XT(t),uu(t)}function XT(t){t.F||(t.F=!0,ft(t,"complete"),ft(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),uu(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),uu(this,!0)),qe.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?JT(this):this.kb())};U.kb=function(){JT(this)};function JT(t){if(t.h&&typeof tp<"u"&&(!t.C[1]||Dn(t)!=4||t.da()!=2)){if(t.v&&Dn(t)==4)fp(t.La,0,t);else if(ft(t,"readystatechange"),Dn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(UT)[1]||null;!s&&ne.self&&ne.self.location&&(s=ne.self.location.protocol.slice(0,-1)),r=!qx.test(s?s.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var i=2<Dn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",XT(t)}}finally{uu(t)}}}}function uu(t,e){if(t.g){ZT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function ZT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function Dn(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Hx(e)}};function S_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case YT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Qx(t){const e={};t=(t.g&&2<=Dn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Go(t[r]))continue;var n=Ex(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}dx(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function eI(t){let e="";return sp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function yp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=eI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function eo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tI(t){this.Ga=0,this.j=[],this.l=new nu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=eo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=eo("baseRetryDelayMs",5e3,t),this.hb=eo("retryDelaySeedMs",1e4,t),this.eb=eo("forwardChannelMaxRetries",2,t),this.xa=eo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new zT(t&&t.concurrentRequestLimit),this.Ja=new Bx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=tI.prototype;U.ra=8;U.H=1;function vp(t){if(nI(t),t.H==3){var e=t.W++,n=dr(t.I);if(Le(n,"SID",t.K),Le(n,"RID",e),Le(n,"TYPE","terminate"),Pa(t,n),e=new Ra(t,t.l,e),e.L=2,e.v=au(dr(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon)try{n=ne.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=uI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ca(e)}lI(t)}function hu(t){t.g&&(wp(t),t.g.cancel(),t.g=null)}function nI(t){hu(t),t.u&&(ne.clearTimeout(t.u),t.u=null),sc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function fu(t){if(!HT(t.i)&&!t.m){t.m=!0;var e=t.Na;Yo||AT(),Xo||(Yo(),Xo=!0),up.add(e,t),t.C=0}}function Yx(t,e){return qT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ba(bt(t.Na,t,e),aI(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ra(this,this.l,t);let i=this.s;if(this.U&&(i?(i=_T(i),yT(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rI(this,s,e),n=dr(this.I),Le(n,"RID",t),Le(n,"CVER",22),this.F&&Le(n,"X-HTTP-Session-Id",this.F),Pa(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(eI(i)))+"&"+e:this.o&&yp(n,this.o,i)),gp(this.i,s),this.bb&&Le(n,"TYPE","init"),this.P?(Le(n,"$req",e),Le(n,"SID","null"),s.aa=!0,pf(s,n,null)):pf(s,n,e),this.H=2}}else this.H==3&&(t?P_(this,t):this.j.length==0||HT(this.i)||P_(this))};function P_(t,e){var n;e?n=e.m:n=t.W++;const r=dr(t.I);Le(r,"SID",t.K),Le(r,"RID",n),Le(r,"AID",t.V),Pa(t,r),t.o&&t.s&&yp(r,t.o,t.s),n=new Ra(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=rI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),gp(t.i,n),pf(n,r,e)}function Pa(t,e){t.na&&sp(t.na,function(n,r){Le(e,r,n)}),t.h&&FT({},function(n,r){Le(e,r,n)})}function rI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?bt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{Wx(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function sI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Yo||AT(),Xo||(Yo(),Xo=!0),up.add(e,t),t.A=0}}function Ep(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ba(bt(t.Ma,t),aI(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,iI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ba(bt(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Nt(10),hu(this),iI(this))};function wp(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function iI(t){t.g=new Ra(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dr(t.wa);Le(e,"RID","rpc"),Le(e,"SID",t.K),Le(e,"AID",t.V),Le(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Le(e,"TO",t.qa),Le(e,"TYPE","xmlhttp"),Pa(t,e),t.o&&t.s&&yp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=au(dr(e)),n.s=null,n.S=!0,MT(n,t)}U.ib=function(){this.v!=null&&(this.v=null,hu(this),Ep(this),Nt(19))};function sc(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function oI(t,e){var n=null;if(t.g==e){sc(t),wp(t),t.g=null;var r=2}else if(gf(t.i,e))n=e.F,KT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=ru(),ft(r,new NT(r,n)),fu(t)}else sI(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&Yx(t,e)||r==2&&Ep(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ns(t,5);break;case 4:ns(t,10);break;case 3:ns(t,6);break;default:ns(t,2)}}}function aI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ns(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=bt(t.pb,t);n||(n=new ls("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||nc(n,"https"),au(n)),zx(n.toString(),r)}else Nt(2);t.H=0,t.h&&t.h.za(e),lI(t),nI(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Nt(2)):(this.l.info("Failed to ping google.com"),Nt(1))};function lI(t){if(t.H=0,t.ma=[],t.h){const e=GT(t.i);(e.length!=0||t.j.length!=0)&&(v_(t.ma,e),v_(t.ma,t.j),t.i.i.length=0,np(t.j),t.j.length=0),t.h.ya()}}function cI(t,e,n){var r=n instanceof ls?dr(n):new ls(n);if(r.g!="")e&&(r.g=e+"."+r.g),rc(r,r.m);else{var s=ne.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new ls(null);r&&nc(i,r),e&&(i.g=e),s&&rc(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Le(r,n,e),Le(r,"VER",t.ra),Pa(t,r),r}function uI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new qe(new lu({ob:!0})):new qe(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function hI(){}U=hI.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function ic(){if(_i&&!(10<=Number(cx)))throw Error("Environmental error: no available transport.")}ic.prototype.g=function(t,e){return new Gt(t,e)};function Gt(t,e){at.call(this),this.g=new tI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Go(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Go(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ji(this)}lt(Gt,at);Gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Nt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cI(t,null,t.Y),fu(t)};Gt.prototype.close=function(){vp(this.g)};Gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=cp(t),t=n);e.j.push(new Fx(e.fb++,t)),e.H==3&&fu(e)};Gt.prototype.N=function(){this.g.h=null,delete this.j,vp(this.g),delete this.g,Gt.$.N.call(this)};function fI(t){pp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(fI,pp);function dI(){mp.call(this),this.status=1}lt(dI,mp);function ji(t){this.g=t}lt(ji,hI);ji.prototype.Ba=function(){ft(this.g,"a")};ji.prototype.Aa=function(t){ft(this.g,new fI(t))};ji.prototype.za=function(t){ft(this.g,new dI)};ji.prototype.ya=function(){ft(this.g,"b")};function Xx(){this.blockSize=-1}function wn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}lt(wn,Xx);wn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function rh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}wn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)rh(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){rh(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){rh(this,r),s=0;break}}this.h=s,this.i+=e};wn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Pe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Jx={};function Tp(t){return-128<=t&&128>t?ox(t,function(e){return new Pe([e|0],0>e?-1:0)}):new Pe([t|0],0>t?-1:0)}function xn(t){if(isNaN(t)||!isFinite(t))return ti;if(0>t)return ut(xn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=_f;return new Pe(e,0)}function pI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(pI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xn(Math.pow(e,8)),r=ti,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=xn(Math.pow(e,i)),r=r.R(i).add(xn(o))):(r=r.R(n),r=r.add(xn(o)))}return r}var _f=4294967296,ti=Tp(0),yf=Tp(1),k_=Tp(16777216);U=Pe.prototype;U.ea=function(){if(Qt(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:_f+r)*e,e*=_f}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ir(this))return"0";if(Qt(this))return"-"+ut(this).toString(t);for(var e=xn(Math.pow(t,6)),n=this,r="";;){var s=ac(n,e).g;n=oc(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,ir(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ir(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Qt(t){return t.h==-1}U.X=function(t){return t=oc(this,t),Qt(t)?-1:ir(t)?0:1};function ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Pe(n,~t.h).add(yf)}U.abs=function(){return Qt(this)?ut(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Pe(n,n[n.length-1]&-2147483648?-1:0)};function oc(t,e){return t.add(ut(e))}U.R=function(t){if(ir(this)||ir(t))return ti;if(Qt(this))return Qt(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(Qt(t))return ut(this.R(ut(t)));if(0>this.X(k_)&&0>t.X(k_))return xn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,sl(n,2*r+2*s),n[2*r+2*s+1]+=i*l,sl(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,sl(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,sl(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Pe(n,0)};function sl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function to(t,e){this.g=t,this.h=e}function ac(t,e){if(ir(e))throw Error("division by zero");if(ir(t))return new to(ti,ti);if(Qt(t))return e=ac(ut(t),e),new to(ut(e.g),ut(e.h));if(Qt(e))return e=ac(t,ut(e)),new to(ut(e.g),e.h);if(30<t.g.length){if(Qt(t)||Qt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=yf,r=e;0>=r.X(t);)n=N_(n),r=N_(r);var s=Ms(n,1),i=Ms(r,1);for(r=Ms(r,2),n=Ms(n,2);!ir(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ms(r,1),n=Ms(n,1)}return e=oc(t,s.R(e)),new to(s,e)}for(s=ti;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=xn(n),o=i.R(e);Qt(o)||0<o.X(t);)n-=r,i=xn(n),o=i.R(e);ir(i)&&(i=yf),s=s.add(i),t=oc(t,o)}return new to(s,t)}U.gb=function(t){return ac(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Pe(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Pe(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Pe(n,this.h^t.h)};function N_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Pe(n,t.h)}function Ms(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Pe(s,t.h)}ic.prototype.createWebChannel=ic.prototype.g;Gt.prototype.send=Gt.prototype.u;Gt.prototype.open=Gt.prototype.m;Gt.prototype.close=Gt.prototype.close;su.NO_ERROR=0;su.TIMEOUT=8;su.HTTP_ERROR=6;OT.COMPLETE="complete";DT.EventType=Aa;Aa.OPEN="a";Aa.CLOSE="b";Aa.ERROR="c";Aa.MESSAGE="d";at.prototype.listen=at.prototype.O;qe.prototype.listenOnce=qe.prototype.P;qe.prototype.getLastError=qe.prototype.Sa;qe.prototype.getLastErrorCode=qe.prototype.Ia;qe.prototype.getStatus=qe.prototype.da;qe.prototype.getResponseJson=qe.prototype.Wa;qe.prototype.getResponseText=qe.prototype.ja;qe.prototype.send=qe.prototype.ha;qe.prototype.setWithCredentials=qe.prototype.Oa;wn.prototype.digest=wn.prototype.l;wn.prototype.reset=wn.prototype.reset;wn.prototype.update=wn.prototype.j;Pe.prototype.add=Pe.prototype.add;Pe.prototype.multiply=Pe.prototype.R;Pe.prototype.modulo=Pe.prototype.gb;Pe.prototype.compare=Pe.prototype.X;Pe.prototype.toNumber=Pe.prototype.ea;Pe.prototype.toString=Pe.prototype.toString;Pe.prototype.getBits=Pe.prototype.D;Pe.fromNumber=xn;Pe.fromString=pI;var Zx=function(){return new ic},eM=function(){return ru()},sh=su,tM=OT,nM=As,O_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},il=DT,rM=qe,sM=wn,ni=Pe;const D_="@firebase/firestore";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Bi="10.4.0";/**
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
 */const gs=new ha("@firebase/firestore");function no(){return gs.logLevel}function H(t,...e){if(gs.logLevel<=pe.DEBUG){const n=e.map(Ip);gs.debug(`Firestore (${Bi}): ${t}`,...n)}}function pr(t,...e){if(gs.logLevel<=pe.ERROR){const n=e.map(Ip);gs.error(`Firestore (${Bi}): ${t}`,...n)}}function yi(t,...e){if(gs.logLevel<=pe.WARN){const n=e.map(Ip);gs.warn(`Firestore (${Bi}): ${t}`,...n)}}function Ip(t){if(typeof t=="string")return t;try{/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Bi}) INTERNAL ASSERTION FAILED: `+t;throw pr(e),new Error(e)}function Ve(t,e){t||te()}function ue(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class mI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class oM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aM{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ar,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new mI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new gt(e)}}class lM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new uM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function fM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class gI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=fM(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function vi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Xe(0,0))}static max(){return new ae(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class na{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return na.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof na?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ze extends na{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const dM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends na{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return dM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new X(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new X(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(ze.fromString(e))}static fromName(e){return new J(ze.fromString(e).popFirst(5))}static empty(){return new J(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new ze(e.slice()))}}function pM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new Fr(s,J.empty(),e)}function mM(t){return new Fr(t.readTime,t.key,-1)}class Fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fr(ae.min(),J.empty(),-1)}static max(){return new Fr(ae.max(),J.empty(),-1)}}function gM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const _M="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ka(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==_M)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(s=>s?N.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new N((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new N((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Na(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}bp.ae=-1;function du(t){return t==null}function lc(t){return t===0&&1/t==-1/0}function vM(t){return typeof t=="number"&&Number.isInteger(t)&&!lc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function x_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ol(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ol(this.root,e,this.comparator,!1)}getReverseIterator(){return new ol(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ol(this.root,e,this.comparator,!0)}}class ol{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ct(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Rt{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new M_(this.data.getIterator())}getIteratorFrom(e){return new M_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class M_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new un([])}unionWith(e){let n=new Rt(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class yI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new yI("Invalid base64 string: "+i):i}}(e);return new St(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const EM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=EM.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _s(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
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
 */function Ap(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rp(t){const e=t.mapValue.fields.__previous_value__;return Ap(e)?Rp(e):e}function ra(t){const e=Ur(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class wM{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class sa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const al={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ap(t)?4:TM(t)?9007199254740991:10:te()}function Wn(t,e){if(t===e)return!0;const n=ys(t);if(n!==ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ra(t).isEqual(ra(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ur(s.timestampValue),a=Ur(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return _s(s.bytesValue).isEqual(_s(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),a=Ye(i.doubleValue);return o===a?lc(o)===lc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return vi(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(x_(o)!==x_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Wn(o[l],a[l])))return!1;return!0}(t,e);default:return te()}}function ia(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function Ei(t,e){if(t===e)return 0;const n=ys(t),r=ys(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ye(i.integerValue||i.doubleValue),l=Ye(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return L_(t.timestampValue,e.timestampValue);case 4:return L_(ra(t),ra(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const a=_s(i),l=_s(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=be(a[c],l[c]);if(u!==0)return u}return be(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=be(Ye(i.latitude),Ye(o.latitude));return a!==0?a:be(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Ei(a[c],l[c]);if(u)return u}return be(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===al.mapValue&&o===al.mapValue)return 0;if(i===al.mapValue)return 1;if(o===al.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=be(l[h],u[h]);if(f!==0)return f;const d=Ei(a[l[h]],c[u[h]]);if(d!==0)return d}return be(l.length,u.length)}(t.mapValue,e.mapValue);default:throw te()}}function L_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Ur(t),r=Ur(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function wi(t){return vf(t)}function vf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _s(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vf(n.fields[o])}`;return s+"}"}(t.mapValue):te()}function Ef(t){return!!t&&"integerValue"in t}function Cp(t){return!!t&&"arrayValue"in t}function V_(t){return!!t&&"nullValue"in t}function $_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vl(t){return!!t&&"mapValue"in t}function Ao(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ao(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ao(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ao(n)}setAll(e){let n=Tt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ao(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());vl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];vl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Wi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Yt(Ao(this.value))}}function vI(t){const e=[];return Wi(t.fields,(n,r)=>{const s=new Tt([n]);if(vl(r)){const i=vI(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new un(e)}/**
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
 */class vt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new vt(e,0,ae.min(),ae.min(),ae.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,ae.min(),ae.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,ae.min(),ae.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cc{constructor(e,n){this.position=e,this.inclusive=n}}function F_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Ei(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function U_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ro{constructor(e,n="asc"){this.field=e,this.dir=n}}function IM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class EI{}class Je extends EI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AM(e,n,r):n==="array-contains"?new SM(e,r):n==="in"?new PM(e,r):n==="not-in"?new kM(e,r):n==="array-contains-any"?new NM(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RM(e,r):new CM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ei(n,this.value)):n!==null&&ys(this.value)===ys(n)&&this.matchesComparison(Ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class zn extends EI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new zn(e,n)}matches(e){return wI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function wI(t){return t.op==="and"}function TI(t){return bM(t)&&wI(t)}function bM(t){for(const e of t.filters)if(e instanceof zn)return!1;return!0}function wf(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+wi(t.value);if(TI(t))return t.filters.map(e=>wf(e)).join(",");{const e=t.filters.map(n=>wf(n)).join(",");return`${t.op}(${e})`}}function II(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&Wn(r.value,s.value)}(t,e):t instanceof zn?function(r,s){return s instanceof zn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&II(o,s.filters[a]),!0):!1}(t,e):void te()}function bI(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${wi(n.value)}`}(t):t instanceof zn?function(n){return n.op.toString()+" {"+n.getFilters().map(bI).join(" ,")+"}"}(t):"Filter"}class AM extends Je{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class RM extends Je{constructor(e,n){super(e,"in",n),this.keys=AI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CM extends Je{constructor(e,n){super(e,"not-in",n),this.keys=AI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class SM extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cp(n)&&ia(n.arrayValue,this.value)}}class PM extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class kM extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ia(this.value.arrayValue,n)}}class NM extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ia(this.value.arrayValue,r))}}/**
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
 */class OM{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function j_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new OM(t,e,n,r,s,i,o)}function Sp(t){const e=ue(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),du(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wi(r)).join(",")),e.he=n}return e.he}function Pp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!II(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!U_(t.startAt,e.startAt)&&U_(t.endAt,e.endAt)}function Tf(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class pu{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function DM(t,e,n,r,s,i,o,a){return new pu(t,e,n,r,s,i,o,a)}function mu(t){return new pu(t)}function B_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function MM(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function LM(t){return t.collectionGroup!==null}function Co(t){const e=ue(t);if(e.Pe===null){e.Pe=[];const n=MM(e),r=xM(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ro(n)),e.Pe.push(new Ro(Tt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ro(Tt.keyField(),i))}}}return e.Pe}function Vn(t){const e=ue(t);return e.Ie||(e.Ie=VM(e,Co(t))),e.Ie}function VM(t,e){if(t.limitType==="F")return j_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ro(s.field,i)});const n=t.endAt?new cc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cc(t.startAt.position,t.startAt.inclusive):null;return j_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function If(t,e,n){return new pu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gu(t,e){return Pp(Vn(t),Vn(e))&&t.limitType===e.limitType}function RI(t){return`${Sp(Vn(t))}|lt:${t.limitType}`}function $s(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>bI(s)).join(", ")}]`),du(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>wi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>wi(s)).join(",")),`Target(${r})`}(Vn(t))}; limitType=${t.limitType})`}function _u(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Co(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=F_(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Co(r),s)||r.endAt&&!function(o,a,l){const c=F_(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Co(r),s))}(t,e)}function $M(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CI(t){return(e,n)=>{let r=!1;for(const s of Co(t)){const i=FM(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function FM(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Ei(l,c):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class zi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Wi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return _I(this.inner)}size(){return this.innerSize}}/**
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
 */const UM=new Be(J.comparator);function mr(){return UM}const SI=new Be(J.comparator);function co(...t){let e=SI;for(const n of t)e=e.insert(n.key,n);return e}function PI(t){let e=SI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rs(){return So()}function kI(){return So()}function So(){return new zi(t=>t.toString(),(t,e)=>t.isEqual(e))}const jM=new Be(J.comparator),BM=new Rt(J.comparator);function me(...t){let e=BM;for(const n of t)e=e.add(n);return e}const WM=new Rt(be);function zM(){return WM}/**
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
 */function NI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lc(e)?"-0":e}}function OI(t){return{integerValue:""+t}}function HM(t,e){return vM(e)?OI(e):NI(t,e)}/**
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
 */class yu{constructor(){this._=void 0}}function qM(t,e,n){return t instanceof uc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ap(i)&&(i=Rp(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof oa?xI(t,e):t instanceof aa?MI(t,e):function(s,i){const o=DI(s,i),a=W_(o)+W_(s.Te);return Ef(o)&&Ef(s.Te)?OI(a):NI(s.serializer,a)}(t,e)}function KM(t,e,n){return t instanceof oa?xI(t,e):t instanceof aa?MI(t,e):n}function DI(t,e){return t instanceof hc?function(r){return Ef(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class uc extends yu{}class oa extends yu{constructor(e){super(),this.elements=e}}function xI(t,e){const n=LI(e);for(const r of t.elements)n.some(s=>Wn(s,r))||n.push(r);return{arrayValue:{values:n}}}class aa extends yu{constructor(e){super(),this.elements=e}}function MI(t,e){let n=LI(e);for(const r of t.elements)n=n.filter(s=>!Wn(s,r));return{arrayValue:{values:n}}}class hc extends yu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function W_(t){return Ye(t.integerValue||t.doubleValue)}function LI(t){return Cp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function GM(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof oa&&s instanceof oa||r instanceof aa&&s instanceof aa?vi(r.elements,s.elements,Wn):r instanceof hc&&s instanceof hc?Wn(r.Te,s.Te):r instanceof uc&&s instanceof uc}(t.transform,e.transform)}class QM{constructor(e,n){this.version=e,this.transformResults=n}}class lr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new lr}static exists(e){return new lr(void 0,e)}static updateTime(e){return new lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function El(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vu{}function VI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new FI(t.key,lr.none()):new Oa(t.key,t.data,lr.none());{const n=t.data,r=Yt.empty();let s=new Rt(Tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Rs(t.key,r,new un(s.toArray()),lr.none())}}function YM(t,e,n){t instanceof Oa?function(s,i,o){const a=s.value.clone(),l=H_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Rs?function(s,i,o){if(!El(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=H_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll($I(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n,r){return t instanceof Oa?function(i,o,a,l){if(!El(i.precondition,o))return a;const c=i.value.clone(),u=q_(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rs?function(i,o,a,l){if(!El(i.precondition,o))return a;const c=q_(i.fieldTransforms,l,o),u=o.data;return u.setAll($I(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return El(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function XM(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=DI(r.transform,s||null);i!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,i))}return n||null}function z_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vi(r,s,(i,o)=>GM(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oa extends vu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rs extends vu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $I(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function H_(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,KM(o,a,n[s]))}return r}function q_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,qM(i,o,e))}return r}class FI extends vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JM extends vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ZM{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&YM(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=VI(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&vi(this.mutations,e.mutations,(n,r)=>z_(n,r))&&vi(this.baseMutations,e.baseMutations,(n,r)=>z_(n,r))}}class kp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return jM}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new kp(e,n,r,s)}}/**
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
 */class eL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,ye;function nL(t){switch(t){default:return te();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function UI(t){if(t===void 0)return pr("GRPC error has no .code"),O.UNKNOWN;switch(t){case Qe.OK:return O.OK;case Qe.CANCELLED:return O.CANCELLED;case Qe.UNKNOWN:return O.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return O.INTERNAL;case Qe.UNAVAILABLE:return O.UNAVAILABLE;case Qe.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Qe.NOT_FOUND:return O.NOT_FOUND;case Qe.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Qe.ABORTED:return O.ABORTED;case Qe.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Qe.DATA_LOSS:return O.DATA_LOSS;default:return te()}}(ye=Qe||(Qe={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rL(){return new TextEncoder}/**
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
 */const sL=new ni([4294967295,4294967295],0);function K_(t){const e=rL().encode(t),n=new sM;return n.update(e),new Uint8Array(n.digest())}function G_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ni([n,r],0),new ni([s,i],0)]}class Np{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new uo(`Invalid padding: ${n}`);if(r<0)throw new uo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new uo(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=ni.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(ni.fromNumber(r)));return s.compare(sL)===1&&(s=new ni([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=K_(e),[r,s]=G_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Np(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=K_(e),[r,s]=G_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Eu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Eu(ae.min(),s,new Be(be),mr(),me())}}class Da{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Da(r,n,me(),me(),me())}}/**
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
 */class wl{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class jI{constructor(e,n){this.targetId=e,this.ye=n}}class BI{constructor(e,n,r=St.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Q_{constructor(){this.we=0,this.Se=X_(),this.be=St.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=me(),n=me(),r=me();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te()}}),new Da(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=X_()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class iL{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=mr(),this.Ue=Y_(),this.We=new Be(be)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Tf(i))if(r===0){const o=new J(i.path);this.je(n,o,vt.newNoDocument(o,ae.min()))}else Ve(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,c)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=_s(r).toUint8Array()}catch(l){if(l instanceof yI)return yi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Np(o,s,i)}catch(l){return yi(l instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Tf(a.target)){const l=new J(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,vt.newNoDocument(l,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=me();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.et(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Eu(e,n,this.We,this.$e,r);return this.$e=mr(),this.Ue=Y_(),this.We=new Be(be),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Q_,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Rt(be),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Q_),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Y_(){return new Be(J.comparator)}function X_(){return new Be(J.comparator)}const oL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),aL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),lL=(()=>({and:"AND",or:"OR"}))();class cL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bf(t,e){return t.useProto3Json||du(e)?e:{value:e}}function fc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uL(t,e){return fc(t,e.toTimestamp())}function $n(t){return Ve(!!t),ae.fromTimestamp(function(n){const r=Ur(n);return new Xe(r.seconds,r.nanos)}(t))}function Op(t,e){return function(r){return new ze(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function zI(t){const e=ze.fromString(t);return Ve(GI(e)),e}function Af(t,e){return Op(t.databaseId,e.path)}function ih(t,e){const n=zI(e);if(n.get(1)!==t.databaseId.projectId)throw new X(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(HI(n))}function Rf(t,e){return Op(t.databaseId,e)}function hL(t){const e=zI(t);return e.length===4?ze.emptyPath():HI(e)}function Cf(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HI(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function J_(t,e,n){return{name:Af(t,e),fields:n.value.mapValue.fields}}function fL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Ve(u===void 0||typeof u=="string"),St.fromBase64String(u||"")):(Ve(u===void 0||u instanceof Uint8Array),St.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?O.UNKNOWN:UI(c.code);return new X(u,c.message||"")}(o);n=new BI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ih(t,r.document.name),i=$n(r.document.updateTime),o=r.document.createTime?$n(r.document.createTime):ae.min(),a=new Yt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new wl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ih(t,r.document),i=r.readTime?$n(r.readTime):ae.min(),o=vt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new wl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ih(t,r.document),i=r.removedTargetIds||[];n=new wl([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new tL(s,i),a=r.targetId;n=new jI(a,o)}}return n}function dL(t,e){let n;if(e instanceof Oa)n={update:J_(t,e.key,e.value)};else if(e instanceof FI)n={delete:Af(t,e.key)};else if(e instanceof Rs)n={update:J_(t,e.key,e.data),updateMask:TL(e.fieldMask)};else{if(!(e instanceof JM))return te();n={verify:Af(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof uc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof aa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof hc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:uL(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(t,e.precondition)),n}function pL(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?$n(s.updateTime):$n(i);return o.isEqual(ae.min())&&(o=$n(i)),new QM(o,s.transformResults||[])}(n,e))):[]}function mL(t,e){return{documents:[Rf(t,e.path)]}}function gL(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Rf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return KI(zn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Fs(h.field),direction:vL(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=bf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function _L(t){let e=hL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=qI(h);return f instanceof zn&&TI(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(m){return new Ro(Us(m.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,du(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new cc(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new cc(d,f)}(n.endAt)),DM(e,s,o,i,a,"F",l,c)}function yL(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Us(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Us(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Us(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Us(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Us(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zn.create(n.compositeFilter.filters.map(r=>qI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function vL(t){return oL[t]}function EL(t){return aL[t]}function wL(t){return lL[t]}function Fs(t){return{fieldPath:t.canonicalString()}}function Us(t){return Tt.fromServerFormat(t.fieldPath)}function KI(t){return t instanceof Je?function(n){if(n.op==="=="){if($_(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NAN"}};if(V_(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($_(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NOT_NAN"}};if(V_(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(n.field),op:EL(n.op),value:n.value}}}(t):t instanceof zn?function(n){const r=n.getFilters().map(s=>KI(s));return r.length===1?r[0]:{compositeFilter:{op:wL(n.op),filters:r}}}(t):te()}function TL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function GI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Pr{constructor(e,n,r,s,i=ae.min(),o=ae.min(),a=St.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class IL{constructor(e){this.ht=e}}function bL(t){const e=_L({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?If(e,e.limit,"L"):e}/**
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
 */class AL{constructor(){this.an=new RL}addToCollectionParentIndex(e,n){return this.an.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Fr.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Fr.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class RL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Rt(ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Rt(ze.comparator)).toArray()}}/**
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
 */class Ti{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Ti(0)}static Ln(){return new Ti(-1)}}/**
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
 */class CL{constructor(){this.changes=new zi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class SL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class PL{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Po(r.mutation,s,un.empty(),Xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=co();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=rs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=mr();const o=So(),a=function(){return So()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Rs)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Po(u.mutation,c,u.mutation.getFieldMask(),Xe.now())):o.set(c.key,un.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new SL(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=So();let s=new Be((o,a)=>o-a),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||un.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||me()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=kI();u.forEach(f=>{if(!i.has(f)){const d=VI(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(rs());let a=-1,l=i;return o.next(c=>N.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?N.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,me())).next(u=>({batchId:a,changes:PI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let s=co();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=co();return this.indexManager.getCollectionParents(e,i).next(a=>N.forEach(a,l=>{const c=function(h,f){return new pu(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,vt.newInvalidDocument(u)))});let a=co();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Po(u.mutation,c,un.empty(),Xe.now()),_u(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class kL{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return N.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:$n(s.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:bL(s.bundledQuery),readTime:$n(s.readTime)}}(n)),N.resolve()}}/**
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
 */class NL{constructor(){this.overlays=new Be(J.comparator),this.Pr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=rs();return N.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=rs(),i=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=rs(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=rs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return N.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eL(n,r));let i=this.Pr.get(n);i===void 0&&(i=me(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
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
 */class Dp{constructor(){this.Ir=new Rt(nt.dr),this.Tr=new Rt(nt.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new nt(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new J(new ze([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new J(new ze([])),r=new nt(n,e),s=new nt(n,e+1);let i=me();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return J.comparator(e.key,n.key)||be(e.yr,n.yr)}static Er(e,n){return be(e.yr,n.yr)||J.comparator(e.key,n.key)}}/**
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
 */class OL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Rt(nt.dr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZM(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new nt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Rt(be);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const o=new nt(new J(i),0);let a=new Rt(be);return this.Sr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.yr)),!0)},o),N.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return N.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new nt(n,0),s=this.Sr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DL{constructor(e){this.Fr=e,this.docs=function(){return new Be(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=mr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=mr();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gM(mM(u),r)<=0||(s.has(u.key)||_u(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te()}Mr(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xL(this)}getSize(e){return N.resolve(this.size)}}class xL extends CL{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class ML{constructor(e){this.persistence=e,this.Or=new zi(n=>Sp(n),Pp),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Dp,this.targetCount=0,this.Lr=Ti.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),N.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ti(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Qn(n),N.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Br.containsKey(n))}}/**
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
 */class LL{constructor(e,n){this.kr={},this.overlays={},this.qr=new bp(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new ML(this),this.indexManager=new AL,this.remoteDocumentCache=function(s){return new DL(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new IL(n),this.Ur=new kL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new OL(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new VL(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return N.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class VL extends yM{constructor(e){super(),this.currentSequenceNumber=e}}class xp{constructor(e){this.persistence=e,this.jr=new Dp,this.Hr=null}static Jr(e){return new xp(e)}get Yr(){if(this.Hr)return this.Hr;throw te()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),N.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Yr,r=>{const s=J.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return N.or([()=>N.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class Mp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Mp(e,n.fromCache,r,s)}}/**
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
 */class $L{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class FL{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new $L;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(no()<=pe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",$s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),N.resolve()):(no()<=pe.DEBUG&&H("QueryEngine","Query:",$s(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(no()<=pe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",$s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(n))):N.resolve())}Hi(e,n){if(B_(n))return N.resolve(null);let r=Vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=If(n,null,"F"),r=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Xi(n,a);return this.es(n,c,o,l.readTime)?this.Hi(e,If(n,null,"F")):this.ts(e,c,n,l)}))})))}Ji(e,n,r,s){return B_(n)||s.isEqual(ae.min())?N.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?N.resolve(null):(no()<=pe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$s(n)),this.ts(e,o,n,pM(s,-1)).next(a=>a))})}Xi(e,n){let r=new Rt(CI(e));return n.forEach((s,i)=>{_u(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return no()<=pe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",$s(n)),this.ji.getDocumentsMatchingQuery(e,n,Fr.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class UL{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new Be(be),this.ss=new zi(i=>Sp(i),Pp),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PL(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function jL(t,e,n,r){return new UL(t,e,n,r)}async function QI(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=me();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({cs:c,removedBatchIds:o,addedBatchIds:a}))})})}function BL(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=N.resolve();return f.forEach(m=>{d=d.next(()=>u.getEntry(l,m)).next(p=>{const _=c.docVersions.get(m);Ve(_!==null),p.version.compareTo(_)<0&&(h.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=me();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function YI(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function WL(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(St.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(p,_,v){return p.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,u)&&a.push(n.Kr.updateTargetData(i,d))});let l=mr(),c=me();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(zL(i,o,e.documentUpdates).next(u=>{l=u.ls,c=u.hs})),!r.isEqual(ae.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return N.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.rs=s,i))}function zL(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=mr();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ls:o,hs:s}})}function HL(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qL(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new Pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Sf(t,e,n){const r=ue(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Na(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function Z_(t,e,n){const r=ue(t);let s=ae.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=ue(l),f=h.ss.get(u);return f!==void 0?N.resolve(h.rs.get(f)):h.Kr.getTargetData(c,u)}(r,o,Vn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:me())).next(a=>(KL(r,$M(e),a),{documents:a,Ps:i})))}function KL(t,e,n){let r=t.os.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class ey{constructor(){this.activeTargetIds=zM()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GL{constructor(){this.ro=new ey,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new ey,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QL{so(e){}shutdown(){}}/**
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
 */class ty{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ll=null;function oh(){return ll===null?ll=function(){return 268435456+Math.round(2147483648*Math.random())}():ll++,"0x"+ll.toString(16)}/**
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
 */const YL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class XL{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const mt="WebChannelConnection";class JL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=oh(),l=this.Do(n,r);H("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(c,i,o),this.vo(n,l,c,s).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw yi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=YL[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=oh();return new Promise((o,a)=>{const l=new rM;l.setWithCredentials(!0),l.listenOnce(tM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case sh.NO_ERROR:const u=l.getResponseJson();H(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case sh.TIMEOUT:H(mt,`RPC '${e}' ${i} timed out`),a(new X(O.DEADLINE_EXCEEDED,"Request time out"));break;case sh.HTTP_ERROR:const h=l.getStatus();if(H(mt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(v)>=0?v:O.UNKNOWN}(d.status);a(new X(m,d.message))}else a(new X(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new X(O.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{H(mt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);H(mt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Mo(e,n,r){const s=oh(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Zx(),a=eM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");H(mt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const m=new XL({ho:_=>{d?H(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(f||(H(mt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),H(mt,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},Po:()=>h.close()}),p=(_,v,w)=>{_.listen(v,I=>{try{w(I)}catch(E){setTimeout(()=>{throw E},0)}})};return p(h,il.EventType.OPEN,()=>{d||H(mt,`RPC '${e}' stream ${s} transport opened.`)}),p(h,il.EventType.CLOSE,()=>{d||(d=!0,H(mt,`RPC '${e}' stream ${s} transport closed`),m.mo())}),p(h,il.EventType.ERROR,_=>{d||(d=!0,yi(mt,`RPC '${e}' stream ${s} transport errored:`,_),m.mo(new X(O.UNAVAILABLE,"The operation could not be completed")))}),p(h,il.EventType.MESSAGE,_=>{var v;if(!d){const w=_.data[0];Ve(!!w);const I=w,E=I.error||((v=I[0])===null||v===void 0?void 0:v.error);if(E){H(mt,`RPC '${e}' stream ${s} received error:`,E);const x=E.status;let b=function(L){const W=Qe[L];if(W!==void 0)return UI(W)}(x),C=E.message;b===void 0&&(b=O.INTERNAL,C="Unknown error status: "+x+" with message "+E.message),d=!0,m.mo(new X(b,C)),h.close()}else H(mt,`RPC '${e}' stream ${s} received:`,w),m.fo(w)}}),p(a,nM.STAT_EVENT,_=>{_.stat===O_.PROXY?H(mt,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===O_.NOPROXY&&H(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.Vo()},0),m}}function ah(){return typeof document<"u"?document:null}/**
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
 */function wu(t){return new cL(t,!0)}/**
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
 */class XI{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class JI{constructor(e,n,r,s,i,o,a,l){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new XI(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(pr(n.toString()),pr("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new X(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZL extends JI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=fL(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?$n(o.readTime):ae.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=Cf(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Tf(l)?{documents:mL(i,l)}:{query:gL(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=WI(i,o.resumeToken);const c=bf(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=fc(i,o.snapshotVersion.toTimestamp());const c=bf(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=yL(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=Cf(this.serializer),n.removeTarget=e,this.n_(n)}}class eV extends JI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=pL(e.writeResults,e.commitTime),r=$n(e.commitTime);return this.listener.T_(r,n)}return Ve(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Cf(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dL(this.serializer,r))};this.n_(n)}}/**
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
 */class tV extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new X(O.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(O.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(O.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class nV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(pr(n),this.p_=!1):H("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class rV{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{Cs(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ue(l);c.F_.add(4),await xa(c),c.O_.set("Unknown"),c.F_.delete(4),await Tu(c)}(this))})}),this.O_=new nV(r,s)}}async function Tu(t){if(Cs(t))for(const e of t.M_)await e(!0)}async function xa(t){for(const e of t.M_)await e(!1)}function ZI(t,e){const n=ue(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),$p(n)?Vp(n):Hi(n).Yo()&&Lp(n,e))}function e0(t,e){const n=ue(t),r=Hi(n);n.v_.delete(e),r.Yo()&&t0(n,e),n.v_.size===0&&(r.Yo()?r.e_():Cs(n)&&n.O_.set("Unknown"))}function Lp(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hi(t).l_(e)}function t0(t,e){t.N_.Le(e),Hi(t).h_(e)}function Vp(t){t.N_=new iL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Hi(t).start(),t.O_.y_()}function $p(t){return Cs(t)&&!Hi(t).Jo()&&t.v_.size>0}function Cs(t){return ue(t).F_.size===0}function n0(t){t.N_=void 0}async function sV(t){t.v_.forEach((e,n)=>{Lp(t,e)})}async function iV(t,e){n0(t),$p(t)?(t.O_.b_(e),Vp(t)):t.O_.set("Unknown")}async function oV(t,e,n){if(t.O_.set("Online"),e instanceof BI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await dc(t,r)}else if(e instanceof wl?t.N_.Ge(e):e instanceof jI?t.N_.Xe(e):t.N_.He(e),!n.isEqual(ae.min()))try{const r=await YI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.v_.get(c);u&&i.v_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.v_.get(l);if(!u)return;i.v_.set(l,u.withResumeToken(St.EMPTY_BYTE_STRING,u.snapshotVersion)),t0(i,l);const h=new Pr(u.target,l,c,u.sequenceNumber);Lp(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await dc(t,r)}}async function dc(t,e,n){if(!Na(e))throw e;t.F_.add(1),await xa(t),t.O_.set("Offline"),n||(n=()=>YI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Tu(t)})}function r0(t,e){return e().catch(n=>dc(t,n,e))}async function Iu(t){const e=ue(t),n=jr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;aV(e);)try{const s=await HL(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,lV(e,s)}catch(s){await dc(e,s)}s0(e)&&i0(e)}function aV(t){return Cs(t)&&t.C_.length<10}function lV(t,e){t.C_.push(e);const n=jr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function s0(t){return Cs(t)&&!jr(t).Jo()&&t.C_.length>0}function i0(t){jr(t).start()}async function cV(t){jr(t).A_()}async function uV(t){const e=jr(t);for(const n of t.C_)e.d_(n.mutations)}async function hV(t,e,n){const r=t.C_.shift(),s=kp.from(r,e,n);await r0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Iu(t)}async function fV(t,e){e&&jr(t).I_&&await async function(r,s){if(function(o){return nL(o)&&o!==O.ABORTED}(s.code)){const i=r.C_.shift();jr(r).Xo(),await r0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Iu(r)}}(t,e),s0(t)&&i0(t)}async function ny(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Cs(n);n.F_.add(3),await xa(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Tu(n)}async function dV(t,e){const n=ue(t);e?(n.F_.delete(2),await Tu(n)):e||(n.F_.add(2),await xa(n),n.O_.set("Unknown"))}function Hi(t){return t.B_||(t.B_=function(n,r,s){const i=ue(n);return i.V_(),new ZL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:sV.bind(null,t),Eo:iV.bind(null,t),c_:oV.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),$p(t)?Vp(t):t.O_.set("Unknown")):(await t.B_.stop(),n0(t))})),t.B_}function jr(t){return t.L_||(t.L_=function(n,r,s){const i=ue(n);return i.V_(),new eV(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:cV.bind(null,t),Eo:fV.bind(null,t),E_:uV.bind(null,t),T_:hV.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Iu(t)):(await t.L_.stop(),t.C_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class Fp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Fp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Up(t,e){if(pr("AsyncQueue",`${e}: ${t}`),Na(t))return new X(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ri{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=co(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new ri(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ri;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ry{constructor(){this.k_=new Be(J.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):te():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ii{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ii(e,n,ri.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class pV{constructor(){this.Q_=void 0,this.listeners=[]}}class mV{constructor(){this.queries=new zi(e=>RI(e),gu),this.onlineState="Unknown",this.K_=new Set}}async function jp(t,e){const n=ue(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new pV),s)try{i.Q_=await n.onListen(r)}catch(o){const a=Up(o,`Initialization of query '${$s(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&Wp(n)}async function Bp(t,e){const n=ue(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function gV(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&Wp(n)}function _V(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Wp(t){t.K_.forEach(e=>{e.next()})}class zp{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ii(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Ii.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class o0{constructor(e){this.key=e}}class a0{constructor(e){this.key=e}}class yV{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=me(),this.mutatedKeys=me(),this.ua=CI(e),this.ca=new ri(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new ry,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=_u(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),p=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?m!==p&&(r.track({type:3,doc:d}),_=!0):this.Ia(f,d)||(r.track({type:2,doc:d}),_=!0,(l&&this.ua(d,l)>0||c&&this.ua(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),_=!0):f&&!d&&(r.track({type:1,doc:f}),_=!0,(l||c)&&(a=!0)),_&&(d?(o=o.add(d),i=p?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((c,u)=>function(f,d){const m=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return m(f)-m(d)}(c.type,u.type)||this.ua(c.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,i.length!==0||l?{snapshot:new Ii(this.query,e.ca,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new ry,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=me(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new a0(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new o0(r))}),n}Ra(e){this.oa=e.Ps,this.aa=me();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Ii.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class vV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EV{constructor(e){this.key=e,this.ma=!1}}class wV{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new zi(a=>RI(a),gu),this.pa=new Map,this.ya=new Set,this.wa=new Be(J.comparator),this.Sa=new Map,this.ba=new Dp,this.Da={},this.Ca=new Map,this.va=Ti.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function TV(t,e){const n=OV(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await qL(n.localStore,Vn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await IV(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&ZI(n.remoteStore,o)}return s}async function IV(t,e,n,r,s){t.Ma=(h,f,d)=>async function(p,_,v,w){let I=_.view.ha(v);I.es&&(I=await Z_(p.localStore,_.query,!1).then(({documents:b})=>_.view.ha(b,I)));const E=w&&w.targetChanges.get(_.targetId),x=_.view.applyChanges(I,p.isPrimaryClient,E);return iy(p,_.targetId,x.Ea),x.snapshot}(t,h,f,d);const i=await Z_(t.localStore,e,!0),o=new yV(e,i.Ps),a=o.ha(i.documents),l=Da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);iy(t,n,c.Ea);const u=new vV(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function bV(t,e){const n=ue(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!gu(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Sf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),e0(n.remoteStore,r.targetId),Pf(n,r.targetId)}).catch(ka)):(Pf(n,r.targetId),await Sf(n.localStore,r.targetId,!0))}async function AV(t,e,n){const r=DV(t);try{const s=await function(o,a){const l=ue(o),c=Xe.now(),u=a.reduce((d,m)=>d.add(m.key),me());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=mr(),p=me();return l._s.getEntries(d,u).next(_=>{m=_,m.forEach((v,w)=>{w.isValidDocument()||(p=p.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,m)).next(_=>{h=_;const v=[];for(const w of a){const I=XM(w,h.get(w.key).overlayedDocument);I!=null&&v.push(new Rs(w.key,I,vI(I.value.mapValue),lr.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,v,a)}).next(_=>{f=_;const v=_.applyToLocalDocumentSet(h,p);return l.documentOverlayCache.saveOverlays(d,_.batchId,v)})}).then(()=>({batchId:f.batchId,changes:PI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new Be(be)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,s.batchId,n),await Ma(r,s.changes),await Iu(r.remoteStore)}catch(s){const i=Up(s,"Failed to persist write");n.reject(i)}}async function l0(t,e){const n=ue(t);try{const r=await WL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Ve(o.ma):s.removedDocuments.size>0&&(Ve(o.ma),o.ma=!1))}),await Ma(n,r,e)}catch(r){await ka(r)}}function sy(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ue(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.U_(a)&&(c=!0)}),c&&Wp(l)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RV(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Be(J.comparator);o=o.insert(i,vt.newNoDocument(i,ae.min()));const a=me().add(i),l=new Eu(ae.min(),new Map,new Be(be),o,a);await l0(r,l),r.wa=r.wa.remove(i),r.Sa.delete(e),Hp(r)}else await Sf(r.localStore,e,!1).then(()=>Pf(r,e,n)).catch(ka)}async function CV(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await BL(n.localStore,e);u0(n,r,null),c0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ma(n,s)}catch(s){await ka(s)}}async function SV(t,e,n){const r=ue(t);try{const s=await function(o,a){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ve(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);u0(r,e,n),c0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ma(r,s)}catch(s){await ka(s)}}function c0(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function u0(t,e,n){const r=ue(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function Pf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||h0(t,r)})}function h0(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(e0(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Hp(t))}function iy(t,e,n){for(const r of n)r instanceof o0?(t.ba.addReference(r.key,e),PV(t,r)):r instanceof a0?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||h0(t,r.key)):te()}function PV(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(H("SyncEngine","New document in limbo: "+n),t.ya.add(r),Hp(t))}function Hp(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new J(ze.fromString(e)),r=t.va.next();t.Sa.set(r,new EV(n)),t.wa=t.wa.insert(n,r),ZI(t.remoteStore,new Pr(Vn(mu(n.path)),r,"TargetPurposeLimboResolution",bp.ae))}}async function Ma(t,e,n){const r=ue(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Mp.$i(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(l,c){const u=ue(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>N.forEach(c,f=>N.forEach(f.Qi,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>N.forEach(f.Ki,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Na(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.rs.get(f),m=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(m);u.rs=u.rs.insert(f,p)}}}(r.localStore,i))}async function kV(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await QI(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(l=>{l.reject(new X(O.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ma(n,r.cs)}}function NV(t,e){const n=ue(t),r=n.Sa.get(e);if(r&&r.ma)return me().add(r.key);{let s=me();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function OV(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=l0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RV.bind(null,e),e.fa.c_=gV.bind(null,e.eventManager),e.fa.xa=_V.bind(null,e.eventManager),e}function DV(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SV.bind(null,e),e}class oy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=wu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return jL(this.persistence,new FL,e.initialUser,this.serializer)}createPersistence(e){return new LL(xp.Jr,this.serializer)}createSharedClientState(e){return new GL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kV.bind(null,this.syncEngine),await dV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mV}()}createDatastore(e){const n=wu(e.databaseInfo.databaseId),r=function(i){return new JL(i)}(e.databaseInfo);return function(i,o,a,l){return new tV(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new rV(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>sy(this.syncEngine,n,0),function(){return ty.C()?new ty:new QL}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new wV(s,i,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ue(n);H("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await xa(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class qp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):pr("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class MV{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=gI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Up(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await QI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ay(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VV(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>ny(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>ny(e.remoteStore,i)),t._onlineComponents=e}function LV(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function VV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await lh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!LV(n))throw n;yi("Error using user provided cache. Falling back to memory cache: "+n),await lh(t,new oy)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await lh(t,new oy);return t._offlineComponents}async function f0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await ay(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await ay(t,new xV))),t._onlineComponents}function $V(t){return f0(t).then(e=>e.syncEngine)}async function pc(t){const e=await f0(t),n=e.eventManager;return n.onListen=TV.bind(null,e.syncEngine),n.onUnlisten=bV.bind(null,e.syncEngine),n}function FV(t,e,n={}){const r=new ar;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new qp({next:f=>{o.enqueueAndForget(()=>Bp(i,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new X(O.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new X(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new zp(mu(a.path),u,{includeMetadataChanges:!0,Z_:!0});return jp(i,h)}(await pc(t),t.asyncQueue,e,n,r)),r.promise}function UV(t,e,n={}){const r=new ar;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new qp({next:f=>{o.enqueueAndForget(()=>Bp(i,h)),f.fromCache&&l.source==="server"?c.reject(new X(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new zp(a,u,{includeMetadataChanges:!0,Z_:!0});return jp(i,h)}(await pc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function d0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ly=new Map;/**
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
 */function jV(t,e,n){if(!n)throw new X(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BV(t,e,n,r){if(e===!0&&r===!0)throw new X(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cy(t){if(!J.isDocumentKey(t))throw new X(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kp(t);throw new X(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class uy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=d0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gp{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iM;switch(r.type){case"firstParty":return new cM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ly.get(n);r&&(H("ComponentProvider","Removing Datastore"),ly.delete(n),r.terminate())}(this),Promise.resolve()}}function WV(t,e,n,r={}){var s;const i=(t=Fn(t,Gp))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=gt.MOCK_USER;else{a=cS(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new X(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new gt(c)}t._authCredentials=new oM(new mI(a,l))}}/**
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
 */class La{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new La(this.firestore,e,this._query)}}class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new la(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}}class la extends La{constructor(e,n,r){super(e,n,mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new J(e))}withConverter(e){return new la(this.firestore,e,this._path)}}function ch(t,e,...n){if(t=Kt(t),arguments.length===1&&(e=gI.V()),jV("doc","path",e),t instanceof Gp){const r=ze.fromString(e,...n);return cy(r),new Ht(t,null,new J(r))}{if(!(t instanceof Ht||t instanceof la))throw new X(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return cy(r),new Ht(t.firestore,t instanceof la?t.converter:null,new J(r))}}/**
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
 */class zV{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new XI(this,"async_queue_retry"),this.ou=()=>{const n=ah();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=ah();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=ah();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new ar;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Na(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw pr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=Fp.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&te()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}function hy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class bi extends Gp{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new zV}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||p0(this),this._firestoreClient.terminate()}}function HV(t,e){const n=typeof t=="object"?t:Id(),r=typeof t=="string"?t:e||"(default)",s=Td(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=lS("firestore");i&&WV(s,...i)}return s}function bu(t){return t._firestoreClient||p0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function p0(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new wM(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,d0(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new MV(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ai{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ai(St.fromBase64String(e))}catch(n){throw new X(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ai(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class m0{constructor(e){this._methodName=e}}/**
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
 */class Au{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */const qV=/^__.*__$/;class KV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oa(e,this.data,n,this.fieldTransforms)}}function g0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Yp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Yp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return mc(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(g0(this.Tu)&&qV.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class GV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wu(e)}wu(e,n,r,s=!1){return new Yp({Tu:e,methodName:n,yu:r,path:Tt.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function QV(t){const e=t._freezeSettings(),n=wu(t._databaseId);return new GV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YV(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);E0("Data must be an object, but it was:",o,r);const a=y0(r,o);let l,c;if(i.merge)l=new un(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=XV(e,h,n);if(!o.contains(f))throw new X(O.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ZV(u,f)||u.push(f)}l=new un(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new KV(new Yt(a),l,c)}function _0(t,e){if(v0(t=Kt(t)))return E0("Unsupported field value:",e,t),y0(t,e);if(t instanceof m0)return function(r,s){if(!g0(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=_0(a,s.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Kt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HM(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Xe.fromDate(r);return{timestampValue:fc(s.serializer,i)}}if(r instanceof Xe){const i=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fc(s.serializer,i)}}if(r instanceof Au)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ai)return{bytesValue:WI(s.serializer,r._byteString)};if(r instanceof Ht){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Op(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${Kp(r)}`)}(t,e)}function y0(t,e){const n={};return _I(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wi(t,(r,s)=>{const i=_0(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function v0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Au||t instanceof Ai||t instanceof Ht||t instanceof m0)}function E0(t,e,n){if(!v0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Kp(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function XV(t,e,n){if((e=Kt(e))instanceof Qp)return e._internalPath;if(typeof e=="string")return w0(t,e);throw mc("Field path arguments must be of type string or ",t,!1,void 0,n)}const JV=new RegExp("[~\\*/\\[\\]]");function w0(t,e,n){if(e.search(JV)>=0)throw mc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qp(...e.split("."))._internalPath}catch{throw mc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(O.INVALID_ARGUMENT,a+t+l)}function ZV(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class T0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(I0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e$ extends T0{data(){return super.data()}}function I0(t,e){return typeof e=="string"?w0(t,e):e instanceof Qp?e._internalPath:e._delegate._internalPath}/**
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
 */function b0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class t${convertValue(e,n="none"){switch(ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Wi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Au(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ra(e));default:return null}}convertTimestamp(e){const n=Ur(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);Ve(GI(r));const s=new sa(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||pr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function n$(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class A0 extends T0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Tl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(I0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Tl extends A0{data(e={}){return super.data(e)}}class R0{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ho(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Tl(this._firestore,this._userDataWriter,r.key,r,new ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Tl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ho(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Tl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ho(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:r$(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function r$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
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
 */function C0(t){t=Fn(t,Ht);const e=Fn(t.firestore,bi);return FV(bu(e),t._key).then(n=>S0(e,t,n))}class Xp extends t${constructor(e){super(),this.firestore=e}convertBytes(e){return new Ai(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}function s$(t){t=Fn(t,La);const e=Fn(t.firestore,bi),n=bu(e),r=new Xp(e);return b0(t._query),UV(n,t._query).then(s=>new R0(e,r,t,s))}function i$(t,e,n){t=Fn(t,Ht);const r=Fn(t.firestore,bi),s=n$(t.converter,e,n);return o$(r,[YV(QV(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,lr.none())])}function Jp(t,...e){var n,r,s;t=Kt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||hy(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(hy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Ht)c=Fn(t.firestore,bi),u=mu(t._key.path),l={next:h=>{e[o]&&e[o](S0(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Fn(t,La);c=Fn(h.firestore,bi),u=h._query;const f=new Xp(c);l={next:d=>{e[o]&&e[o](new R0(c,f,h,d))},error:e[o+1],complete:e[o+2]},b0(t._query)}return function(f,d,m,p){const _=new qp(p),v=new zp(d,_,m);return f.asyncQueue.enqueueAndForget(async()=>jp(await pc(f),v)),()=>{_.La(),f.asyncQueue.enqueueAndForget(async()=>Bp(await pc(f),v))}}(bu(c),u,a,l)}function o$(t,e){return function(r,s){const i=new ar;return r.asyncQueue.enqueueAndForget(async()=>AV(await $V(r),s,i)),i.promise}(bu(t),e)}function S0(t,e,n){const r=n.docs.get(e._key),s=new Xp(t);return new A0(t,s,e._key,r,new ho(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Bi=s})(Br),jn(new vn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new bi(new aM(r.getProvider("auth-internal")),new hM(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new X(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sa(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Wt(D_,"4.2.0",e),Wt(D_,"4.2.0","esm2017")})();/**
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
 */const P0="firebasestorage.googleapis.com",a$="storageBucket",l$=2*60*1e3,c$=10*60*1e3;/**
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
 */class Kn extends qn{constructor(e,n,r=0){super(uh(e),`Firebase Storage: ${n} (${uh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Kn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Hn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Hn||(Hn={}));function uh(t){return"storage/"+t}function u$(){const t="An unknown error occurred, please check the error payload for server response.";return new Kn(Hn.UNKNOWN,t)}function h$(){return new Kn(Hn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function f$(){return new Kn(Hn.CANCELED,"User canceled the upload/download.")}function d$(t){return new Kn(Hn.INVALID_URL,"Invalid URL '"+t+"'.")}function p$(t){return new Kn(Hn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function fy(t){return new Kn(Hn.INVALID_ARGUMENT,t)}function k0(){return new Kn(Hn.APP_DELETED,"The Firebase app was deleted.")}function m$(t){return new Kn(Hn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(r.path==="")return r;throw p$(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),m={bucket:1,path:3},p=n===P0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",v=new RegExp(`^https?://${p}/${s}/${_}`,"i"),I=[{regex:a,indices:l,postModify:i},{regex:d,indices:m,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<I.length;E++){const x=I[E],b=x.regex.exec(e);if(b){const C=b[x.indices.bucket];let A=b[x.indices.path];A||(A=""),r=new hn(C,A),x.postModify(r);break}}if(r==null)throw d$(e);return r}}class g${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function _$(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(..._){c||(c=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(d,l())},_)}function f(){i&&clearTimeout(i)}function d(_,...v){if(c){f();return}if(_){f(),u.call(null,_,...v);return}if(l()||o){f(),u.call(null,_,...v);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,h(I)}let m=!1;function p(_){m||(m=!0,f(),!c&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,p(!0)},n),p}function y$(t){t(!1)}/**
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
 */function v$(t){return t!==void 0}function dy(t,e,n,r){if(r<e)throw fy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw fy(`Invalid value for '${t}'. Expected ${n} or less.`)}function E$(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var gc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gc||(gc={}));/**
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
 */function w$(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class T${constructor(e,n,r,s,i,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new cl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===gc.NO_ERROR,l=i.getStatus();if(!a||w$(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===gc.ABORT;r(!1,new cl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new cl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());v$(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=u$();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?k0():f$();o(l)}else{const l=h$();o(l)}};this.canceled_?n(!1,new cl(!1,null,!0)):this.backoffId_=_$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&y$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class cl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function I$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function b$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function A$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function R$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function C$(t,e,n,r,s,i,o=!0){const a=E$(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return A$(c,e),I$(c,n),b$(c,i),R$(c,r),new T$(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function S$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function P$(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class _c{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _c(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return P$(this._location.path)}get storage(){return this._service}get parent(){const e=S$(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new _c(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw m$(e)}}function py(t,e){const n=e==null?void 0:e[a$];return n==null?null:hn.makeFromBucketSpec(n,t)}class k${constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=P0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l$,this._maxUploadRetryTime=c$,this._requests=new Set,s!=null?this._bucket=hn.makeFromBucketSpec(s,this._host):this._bucket=py(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=py(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _c(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new g$(k0());{const o=C$(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const my="@firebase/storage",gy="0.11.2";/**
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
 */const N$="storage";function O$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new k$(n,r,s,e,Br)}function D$(){jn(new vn(N$,O$,"PUBLIC").setMultipleInstances(!0)),Wt(my,gy,""),Wt(my,gy,"esm2017")}D$();const hh=new WeakMap;function N0(t,e){return hh.has(e)||hh.set(e,t||{f:{},r:{},s:{},u:{}}),hh.get(e)}function x$(t,e,n,r){if(!t)return n;const[s,i]=O0(t);if(!s)return n;const o=N0(void 0,r)[s]||{},a=e||i;return a&&a in o?o[a]:n}function M$(t,e,n,r){if(!t)return;const[s,i]=O0(t);if(!s)return;const o=N0(void 0,r)[s],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(kn),a}function O0(t){return iO(t)||oO(t)?["f",t.path]:aO(t)?["r",t.toString()]:lO(t)?["s",t.toString()]:[]}const fh=new WeakMap;function L$(t,e,n){const r=ga();fh.has(r)||fh.set(r,new Map);const s=fh.get(r),i=M$(e,n,t,r);return i&&s.set(i,t),i?()=>s.delete(i):kn}const V$={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function kf(t,e,n,r){if(!rO(t))return[t,{}];const s=[{},{}],i=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const m=Object.getOwnPropertyDescriptor(a,d);m&&!m.enumerable&&Object.defineProperty(h,d,m)});for(const d in a){const m=a[d];if(m==null||m instanceof Date||m instanceof Xe||m instanceof Au)h[d]=m;else if(Dd(m)){const p=c+d;h[d]=p in n?l[d]:m.path,f[p]=m.converter?m:m.withConverter(r.converter)}else if(Array.isArray(m)){h[d]=Array(m.length);for(let p=0;p<m.length;p++){const _=m[p];_&&_.path in i&&(h[d][p]=i[_.path])}o(m,l[d]||h[d],c+d+".",[h[d],f])}else Ts(m)?(h[d]={},o(m,l[d],c+d+".",[h[d],f])):h[d]=m}}return o(t,e,"",s),s}const Zp={reset:!1,wait:!0,maxRefDepth:2,converter:V$,snapshotOptions:{serverTimestamps:"estimate"}};function yc(t){for(const e in t)t[e].unsub()}function Nf(t,e,n,r,s,i,o,a,l){const[c,u]=kf(r.data(t.snapshotOptions),Od(e,n),s,t);i.set(e,n,c),Of(t,e,n,s,u,i,o,a,l)}function $$({ref:t,target:e,path:n,depth:r,resolve:s,reject:i,ops:o},a){const l=Object.create(null);let c=kn;return a.once?C0(t).then(u=>{u.exists()?Nf(a,e,n,u,l,o,r,s,i):(o.set(e,n,null),s())}).catch(i):c=Jp(t,u=>{u.exists()?Nf(a,e,n,u,l,o,r,s,i):(o.set(e,n,null),s())},i),()=>{c(),yc(l)}}function Of(t,e,n,r,s,i,o,a,l){const c=Object.keys(s);if(Object.keys(r).filter(p=>c.indexOf(p)<0).forEach(p=>{r[p].unsub(),delete r[p]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function m(p){p in d&&++h>=f&&a(n)}c.forEach(p=>{const _=r[p],v=s[p],w=`${n}.${p}`;if(d[w]=!0,_)if(_.path!==v.path)_.unsub();else return;r[p]={data:()=>Od(e,w),unsub:$$({ref:v,target:e,path:w,depth:o,ops:i,resolve:m.bind(null,w),reject:l},t),path:v.path}})}function F$(t,e,n,r,s,i){const o=Object.assign({},Zp,i),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=je(c?[]:t.value);c||n.set(t,h,[]);const d=r;let m,p=kn;const _=[],v={added:({newIndex:I,doc:E})=>{_.splice(I,0,Object.create(null));const x=_[I],[b,C]=kf(E.data(l),void 0,x,o);n.add(Qn(f),I,b),Of(o,f,`${h}.${I}`,x,C,n,0,r.bind(null,E),s)},modified:({oldIndex:I,newIndex:E,doc:x})=>{const b=Qn(f),C=_[I],A=b[I],[L,W]=kf(x.data(l),A,C,o);_.splice(E,0,C),n.remove(b,I),n.add(b,E,L),Of(o,f,`${h}.${E}`,C,W,n,0,r,s)},removed:({oldIndex:I})=>{const E=Qn(f);n.remove(E,I),yc(_.splice(I,1)[0])}};function w(I){const E=I.docChanges(a);if(!m&&E.length){m=!0;let x=0;const b=E.length,C=Object.create(null);for(let A=0;A<b;A++)C[E[A].doc.id]=!0;r=A=>{A&&A.id in C&&++x>=b&&(c&&(n.set(t,h,Qn(f)),f=t),d(Qn(f)),r=kn)}}E.forEach(x=>{v[x.type](x)}),E.length||(c&&(n.set(t,h,Qn(f)),f=t),r(Qn(f)))}return u?s$(e).then(w).catch(s):p=Jp(e,w,s),I=>{if(p(),I){const E=typeof I=="function"?I():[];n.set(t,h,E)}_.forEach(yc)}}function U$(t,e,n,r,s,i){const o=Object.assign({},Zp,i),a="value",l=Object.create(null);r=cO(r,()=>Od(t,a));let c=kn;function u(h){h.exists()?Nf(o,t,a,h,l,n,0,r,s):(n.set(t,a,null),r(null))}return o.once?C0(e).then(u).catch(s):c=Jp(e,u,s),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}yc(l)}}const _y=Symbol();function j$(t,e){let n=kn;const r=Object.assign({},Zp,e),s=Qn(t),i=r.target||je();hO()&&(r.once=!0);const o=x$(s,r.ssrKey,_y,ga()),a=o!==_y;a&&(i.value=o);let l=!a;const c=je(!1),u=je(),h=gv(),f=tv();let d=kn;function m(){let v=Qn(t);const w=new Promise((I,E)=>{if(n(r.reset),!v)return n=kn,I(null);c.value=l,l=!0,v.converter||(v=v.withConverter(r.converter)),n=(Dd(v)?U$:F$)(i,v,B$,I,E,r)}).catch(I=>(h.value===w&&(u.value=I),Promise.reject(I))).finally(()=>{h.value===w&&(c.value=!1)});h.value=w}let p=kn;He(t)&&(p=Zt(t,m)),m(),s&&(d=L$(h.value,s,r.ssrKey)),Vo()&&Pv(()=>h.value),f&&Ub(_);function _(v=r.reset){p(),d(),n(v)}return Object.defineProperties(i,{error:{get:()=>u},data:{get:()=>i},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>_}})}const B$={set:(t,e,n)=>tO(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function yy(t,e){return j$(t,e)}function W$(t){return(e,n)=>{const r=fO(e,n).run(()=>je(t));ew.set(e,r),pO(r,e)}}function z$(t){return eO?YE(ga(t)):null}function H$(t,{firebaseApp:e,modules:n=[]}){t.provide(ZE,e);for(const r of n)r(e,t)}const q$=t=>(ld("data-v-2fa153f2"),t=t(),cd(),t),K$={class:"greetings"},G$={class:"green"},Q$=q$(()=>Lt("h3",null,"Zakłady wyborcze 2023",-1)),Y$={key:0},X$={key:1},J$=ws({__name:"HelloWorld",props:{msg:{}},setup(t){const e=z$(),n=new Zn,r=je(null);function s(){r.value=null,e&&Vk(e,n).catch(a=>{console.error("Failed sign",a),r.value=a})}function i(){e&&gk(e)}const o=tw();return(a,l)=>{var c,u;return Sn(),Jn("div",K$,[Lt("h1",G$,Qs(a.msg),1),Q$,Re(o)?(Sn(),Jn("div",Y$,[Lt("p",null,"Witaj "+Qs((c=Re(o))==null?void 0:c.displayName),1),Lt("p",null,"Zalogowano jako: "+Qs((u=Re(o))==null?void 0:u.email),1),Lt("button",{onClick:i,class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 active:bg-blue-800"}," Wyloguj ")])):(Sn(),Jn("div",X$,[Lt("img",{width:"200",onClick:s,src:ZC})]))])}}});const em=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Z$=em(J$,[["__scopeId","data-v-2fa153f2"]]),eF=t=>(ld("data-v-d6f9d14f"),t=t(),cd(),t),tF=eF(()=>Lt("img",{alt:"Vue logo",class:"logo",src:XR,width:"300"},null,-1)),nF={class:"wrapper"},rF={class:"px-3"},sF=ws({__name:"App",setup(t){return(e,n)=>(Sn(),Jn(sn,null,[Lt("header",null,[tF,Lt("div",nF,[Me(Z$,{msg:"Zakłady"}),Lt("nav",null,[Me(Re(xh),{to:"/"},{default:Nl(()=>[xl("Strona główna")]),_:1}),Me(Re(xh),{to:"/about"},{default:Nl(()=>[xl("Zasady")]),_:1})])])]),Lt("div",rF,[Me(Re(tE))])],64))}});const iF=em(sF,[["__scopeId","data-v-d6f9d14f"]]),oF="modulepreload",aF=function(t){return"/"+t},vy={},lF=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=aF(i),i in vy)return;vy[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":oF,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},cF=t=>(ld("data-v-650cd4d8"),t=t(),cd(),t),uF={key:0,class:"my-3"},hF=cF(()=>Lt("h3",null,"Twoje typy:",-1)),fF={key:0},dF=ws({__name:"HomeView",setup(t){var i;const e=tw();let n=yy(ch(yh,"predictions",String((i=e.value)==null?void 0:i.email))),r=je({PiS:null,KO:null,TD:null,Lewica:null,Konfa:null,BS:null});Zt(()=>n.value,o=>{r.value={...o}}),Zt(()=>e.value,()=>{var o;n=yy(ch(yh,"predictions",String((o=e.value)==null?void 0:o.email)))});async function s(){var o;await i$(ch(yh,"predictions",String((o=e.value)==null?void 0:o.email)),r.value)}return(o,a)=>{const l=Nv("FormKit");return Sn(),Jn("main",null,[Re(n)?(Sn(),Jn("div",uF,[hF,(Sn(!0),Jn(sn,null,qA(Object.keys(Re(n)),(c,u)=>(Sn(),Jn("p",{key:u},Qs(c)+" - "+Qs(Re(n)[c])+"%",1))),128))])):Lm("",!0),Me(l,{onSubmit:s,type:"form"},{default:Nl(()=>[Me(l,{modelValue:Re(r).PiS,"onUpdate:modelValue":a[0]||(a[0]=c=>Re(r).PiS=c),validation:"required",help:"Podaj z dokładnością do 1 miejsca po przecinku(kropce)",number:"",step:"0.1",placeholder:"Np: 37.5",label:"Prawo i Sprawiedliwość",type:"number"},null,8,["modelValue"]),Me(l,{modelValue:Re(r).KO,"onUpdate:modelValue":a[1]||(a[1]=c=>Re(r).KO=c),validation:"required",help:"Podaj z dokładnością do 1 miejsca po przecinku(kropce)",number:"",placeholder:"Np: 37.5",label:"Koalicja Obywatelska",type:"number"},null,8,["modelValue"]),Me(l,{modelValue:Re(r).TD,"onUpdate:modelValue":a[2]||(a[2]=c=>Re(r).TD=c),validation:"required",help:"Podaj z dokładnością do 1 miejsca po przecinku(kropce)",number:"",placeholder:"Np: 37.5",label:"Trzecia Droga",type:"number"},null,8,["modelValue"]),Me(l,{modelValue:Re(r).Lewica,"onUpdate:modelValue":a[3]||(a[3]=c=>Re(r).Lewica=c),validation:"required",help:"Podaj z dokładnością do 1 miejsca po przecinku(kropce)",number:"",placeholder:"Np: 37.5",label:"Lewica",type:"number"},null,8,["modelValue"]),Me(l,{modelValue:Re(r).Konfa,"onUpdate:modelValue":a[4]||(a[4]=c=>Re(r).Konfa=c),validation:"required",help:"Podaj z dokładnością do 1 miejsca po przecinku(kropce)",number:"",placeholder:"Np: 37.5",label:"Konfederacja",type:"number"},null,8,["modelValue"]),Me(l,{modelValue:Re(r).BS,"onUpdate:modelValue":a[5]||(a[5]=c=>Re(r).BS=c),validation:"required",help:"Podaj z dokładnością do 1 miejsca po przecinku(kropce)",number:"",placeholder:"Np: 37.5",label:"Bezpartyjni Samorządowcy",type:"number"},null,8,["modelValue"]),Re(r)?(Sn(),Jn("span",fF,"Suma: "+Qs(Object.values(Re(r)).reduce((c,u)=>c+u,0))+"%",1)):Lm("",!0)]),_:1})])}}});const pF=em(dF,[["__scopeId","data-v-650cd4d8"]]),mF=XC({history:mC("/"),routes:[{path:"/",name:"home",component:pF},{path:"/about",name:"about",component:()=>lF(()=>import("./AboutView-fd52232f.js"),["assets/AboutView-fd52232f.js","assets/AboutView-e9670c66.css"])}]}),D0=["__key","__init","__shim","__original","__index","__prevKey"];function qi(){return Math.random().toString(36).substring(2,15)}function gF(t,e){const n=t instanceof Set?t:new Set(t);return e&&e.forEach(r=>n.add(r)),[...n]}function se(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ot(t,e,n=!0,r=["__key"]){if(t===e)return!0;if(typeof e=="object"&&typeof t=="object"){if(t instanceof Map||t instanceof Set)return!1;if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(t instanceof RegExp&&e instanceof RegExp)return _F(t,e);if(t===null||e===null||Object.keys(t).length!==Object.keys(e).length)return!1;for(const s of r)if((s in t||s in e)&&t[s]!==e[s])return!1;for(const s in t)if(!(s in e)||t[s]!==e[s]&&!n||n&&!Ot(t[s],e[s],n,r))return!1;return!0}return!1}function _F(t,e){return t.source===e.source&&t.flags.split("").sort().join("")===e.flags.split("").sort().join("")}function en(t){const e=typeof t;if(e==="number")return!1;if(t===void 0)return!0;if(e==="string")return t==="";if(e==="object"){if(t===null)return!0;for(const n in t)return!1;return!(t instanceof RegExp||t instanceof Date)}return!1}function yF(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function vF(t){const e=`^${yF(t)}$`,n={MM:"(0[1-9]|1[012])",M:"([1-9]|1[012])",DD:"([012][0-9]|3[01])",D:"([012]?[0-9]|3[01])",YYYY:"\\d{4}",YY:"\\d{2}"},r=Object.keys(n);return new RegExp(r.reduce((s,i)=>s.replace(i,n[i]),e))}function Df(t){return Object.prototype.toString.call(t)==="[object Object]"}function ko(t){return Df(t)||Array.isArray(t)}function Ri(t){if(Df(t)===!1||t.__FKNode__||t.__POJO__===!1)return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(Df(n)===!1||n.hasOwnProperty("isPrototypeOf")===!1)}function vs(t,e,n=!1,r=!1){if(e===null)return null;const s={};if(typeof e=="string")return e;for(const i in t)if(se(e,i)&&(e[i]!==void 0||!r)){if(n&&Array.isArray(t[i])&&Array.isArray(e[i])){s[i]=t[i].concat(e[i]);continue}if(e[i]===void 0)continue;Ri(t[i])&&Ri(e[i])?s[i]=vs(t[i],e[i],n,r):s[i]=e[i]}else s[i]=t[i];for(const i in e)!se(s,i)&&e[i]!==void 0&&(s[i]=e[i]);return s}function EF(t){if(t[0]!=='"'&&t[0]!=="'"||t[0]!==t[t.length-1])return!1;const e=t[0];for(let n=1;n<t.length;n++)if(t[n]===e&&(n===1||t[n-1]!=="\\")&&n!==t.length-1)return!1;return!0}function wF(t){if(!t.length)return"";let e="",n="";for(let r=0;r<t.length;r++){const s=t.charAt(r);(s!=="\\"||n==="\\")&&(e+=s),n=s}return e}function Ls(...t){return t.reduce((e,n)=>{const{value:r,name:s,modelValue:i,config:o,plugins:a,...l}=n;return Object.assign(e,l)},{})}function TF(t){const e=[];let n="",r=0,s="",i="";for(let o=0;o<t.length;o++){const a=t.charAt(o);a===s&&i!=="\\"?s="":(a==="'"||a==='"')&&!s&&i!=="\\"?s=a:a==="("&&!s?r++:a===")"&&!s&&r--,a===","&&!s&&r===0?(e.push(n),n=""):(a!==" "||s)&&(n+=a),i=a}return n&&e.push(n),e}function Ey(t,e){const n={},r=e.filter(i=>i instanceof RegExp),s=new Set(e);for(const i in t)!s.has(i)&&!r.some(o=>o.test(i))&&(n[i]=t[i]);return n}function wy(t,e){const n={},r=e.filter(s=>s instanceof RegExp);return e.forEach(s=>{s instanceof RegExp||(n[s]=t[s])}),Object.keys(t).forEach(s=>{r.some(i=>i.test(s))&&(n[s]=t[s])}),n}function si(t){return t.replace(/-([a-z0-9])/gi,(e,n)=>n.toUpperCase())}function x0(t){return t.replace(/([a-z0-9])([A-Z])/g,(e,n,r)=>n+"-"+r.toLowerCase()).replace(" ","-").toLowerCase()}function xf(t,e=D0){if(t!==null&&typeof t=="object"){let n;if(Array.isArray(t)?n=[...t]:Ri(t)&&(n={...t}),n)return bF(t,n,e),n}return t}function Ci(t,e=D0){if(t===null||t instanceof RegExp||t instanceof Date||t instanceof Map||t instanceof Set||typeof File=="function"&&t instanceof File)return t;let n;Array.isArray(t)?n=t.map(r=>typeof r=="object"?Ci(r,e):r):n=Object.keys(t).reduce((r,s)=>(r[s]=typeof t[s]=="object"?Ci(t[s],e):t[s],r),{});for(const r of e)r in t&&Object.defineProperty(n,r,{enumerable:!1,value:t[r]});return n}function fn(t){return typeof t=="object"?Ci(t):t}function IF(t,e){if(!t||typeof t!="object")return null;const n=e.split(".");let r=t;for(const s in n){const i=n[s];if(se(r,i)&&(r=r[i]),+s===n.length-1)return r;if(!r||typeof r!="object")return null}return null}function dn(t){return t!==void 0&&t!=="false"&&t!==!1?!0:void 0}function Si(t){return Object.isFrozen(t)?t:Object.defineProperty(t,"__init",{enumerable:!1,value:!0})}function tm(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g," ").trim().replace(/\s+/g,"-")}function bF(t,e,n){for(const r of n)r in t&&Object.defineProperty(e,r,{enumerable:!1,value:t[r]});return e}function AF(t){let e=!1;return(...n)=>{if(!e)return e=!0,queueMicrotask(()=>e=!1),t(...n)}}function nm(){const t=[];let e=0;const n=s=>t.push(s),r=s=>{const i=t[e];return typeof i=="function"?i(s,o=>(e++,r(o))):(e=0,s)};return n.dispatch=r,n.unshift=s=>t.unshift(s),n.remove=s=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)},n}function M0(){const t=new Map,e=new Map;let n;const r=(s,i)=>{if(n){n.set(i.name,[s,i]);return}t.has(i.name)&&t.get(i.name).forEach(o=>{(i.origin===s||o.modifiers.includes("deep"))&&o.listener(i)}),i.bubble&&s.bubble(i)};return r.flush=()=>{t.clear(),e.clear(),n==null||n.clear()},r.on=(s,i)=>{const[o,...a]=s.split("."),l=i.receipt||qi(),c={modifiers:a,event:o,listener:i,receipt:l};return t.has(o)?t.get(o).push(c):t.set(o,[c]),e.has(l)?e.get(l).push(o):e.set(l,[o]),l},r.off=s=>{var i;e.has(s)&&((i=e.get(s))===null||i===void 0||i.forEach(o=>{const a=t.get(o);Array.isArray(a)&&t.set(o,a.filter(l=>l.receipt!==s))}),e.delete(s))},r.pause=s=>{n||(n=new Map),s&&s.walk(i=>i._e.pause())},r.play=s=>{if(!n)return;const i=n;n=void 0,i.forEach(([o,a])=>r(o,a)),s&&s.walk(o=>o._e.play())},r}function RF(t,e,n,r,s=!0,i){return e._e(t,{payload:r,name:n,bubble:s,origin:t,meta:i}),t}function CF(t,e,n){return $a(t.parent)&&t.parent._e(t.parent,n),t}function SF(t,e,n,r){return e._e.on(n,r)}function PF(t,e,n){return e._e.off(n),t}const rm=nm();rm((t,e)=>(t.message||(t.message=`E${t.code}`),e(t)));const sm=nm();sm((t,e)=>{t.message||(t.message=`W${t.code}`);const n=e(t);return console&&typeof console.warn=="function"&&console.warn(n.message),n});function Ss(t,e={}){sm.dispatch({code:t,data:e})}function qt(t,e={}){throw Error(rm.dispatch({code:t,data:e}).message)}function Tn(t,e){const n={blocking:!1,key:qi(),meta:{},type:"state",visible:!0,...t};return e&&n.value&&n.meta.localize!==!1&&(n.value=e.t(n),n.meta.locale=e.config.locale),n}const Ty={apply:MF,set:NF,remove:L0,filter:DF,reduce:xF,release:$F,touch:OF};function kF(t=!1){const e={};let n,r=t,s=[];const i=new Map;let o;const a=new Proxy(e,{get(...l){const[c,u]=l;return u==="buffer"?r:u==="_b"?s:u==="_m"?i:u==="_r"?o:se(Ty,u)?Ty[u].bind(null,e,a,n):Reflect.get(...l)},set(l,c,u){return c==="_n"?(n=u,o==="__n"&&V0(n,a),!0):c==="_b"?(s=u,!0):c==="buffer"?(r=u,!0):c==="_r"?(o=u,!0):(qt(101,n),!1)}});return a}function NF(t,e,n,r){if(e.buffer)return e._b.push([[r]]),e;if(t[r.key]!==r){if(typeof r.value=="string"&&r.meta.localize!==!1){const i=r.value;r.value=n.t(r),r.value!==i&&(r.meta.locale=n.props.locale)}const s=`message-${se(t,r.key)?"updated":"added"}`;t[r.key]=Object.freeze(n.hook.message.dispatch(r)),n.emit(s,r)}return e}function OF(t,e){for(const n in t){const r={...t[n]};e.set(r)}}function L0(t,e,n,r){if(se(t,r)){const s=t[r];delete t[r],n.emit("message-removed",s)}return e.buffer===!0&&(e._b=e._b.filter(s=>(s[0]=s[0].filter(i=>i.key!==r),s[1]||s[0].length))),e}function DF(t,e,n,r,s){for(const i in t){const o=t[i];(!s||o.type===s)&&!r(o)&&L0(t,e,n,i)}}function xF(t,e,n,r,s){for(const i in t){const o=t[i];s=r(s,o)}return s}function MF(t,e,n,r,s){if(Array.isArray(r)){if(e.buffer){e._b.push([r,s]);return}const i=new Set(r.map(o=>(e.set(o),o.key)));typeof s=="string"?e.filter(o=>o.type!==s||i.has(o.key)):typeof s=="function"&&e.filter(o=>!s(o)||i.has(o.key))}else for(const i in r){const o=n.at(i);o?o.store.apply(r[i],s):VF(n,e,i,r[i],s)}}function LF(t,...e){const n=`${t.name}-set`,r=s=>Tn({key:tm(s),type:"error",value:s,meta:{source:n,autoClear:!0}});return e.filter(s=>!!s).map(s=>{if(typeof s=="string"&&(s=[s]),Array.isArray(s))return s.map(i=>r(i));{const i={};for(const o in s)Array.isArray(s[o])?i[o]=s[o].map(a=>r(a)):i[o]=[r(s[o])];return i}})}function VF(t,e,n,r,s){var i;const o=e._m;o.has(n)||o.set(n,[]),e._r||(e._r=V0(t,e)),(i=o.get(n))===null||i===void 0||i.push([r,s])}function V0(t,e){return t.on("child.deep",({payload:n})=>{e._m.forEach((r,s)=>{t.at(s)===n&&(r.forEach(([i,o])=>{n.store.apply(i,o)}),e._m.delete(s))}),e._m.size===0&&e._r&&(t.off(e._r),e._r=void 0)})}function $F(t,e){e.buffer=!1,e._b.forEach(([n,r])=>e.apply(n,r)),e._b=[]}function FF(){const t={};let e;return{count:(...n)=>UF(e,t,...n),init(n){e=n,n.on("message-added.deep",Iy(t,1)),n.on("message-removed.deep",Iy(t,-1))},merge:n=>by(e,t,n),settled(n){return se(t,n)?t[n].promise:Promise.resolve()},unmerge:n=>by(e,t,n,!0),value(n){return se(t,n)?t[n].count:0}}}function UF(t,e,n,r,s=0){if(r=jF(r||n),!se(e,n)){const i={condition:r,count:0,name:n,node:t,promise:Promise.resolve(),resolve:()=>{}};e[n]=i,s=t.store.reduce((o,a)=>o+i.condition(a)*1,s),t.each(o=>{o.ledger.count(i.name,i.condition),s+=o.ledger.value(i.name)})}return $0(e[n],s).promise}function jF(t){return typeof t=="function"?t:e=>e.type===t}function $0(t,e){const n=t.count,r=t.count+e;return t.count=r,n===0&&r!==0?(t.node.emit(`unsettled:${t.name}`,t.count,!1),t.promise=new Promise(s=>t.resolve=s)):n!==0&&r===0&&(t.node.emit(`settled:${t.name}`,t.count,!1),t.resolve()),t.node.emit(`count:${t.name}`,t.count,!1),t}function Iy(t,e){return n=>{for(const r in t){const s=t[r];s.condition(n.payload)&&$0(s,e)}}}function by(t,e,n,r=!1){const s=t;for(const i in e){const o=e[i].condition;r||n.ledger.count(i,o);const a=n.ledger.value(i)*(r?-1:1);if(t){do t.ledger.count(i,o,a),t=t.parent;while(t);t=s}}}const im=new Map,Il=new Map,om=M0(),BF=[];function WF(t){t.props.id&&(im.set(t.props.id,t),Il.set(t,t.props.id),om(t,{payload:t,name:t.props.id,bubble:!1,origin:t}))}function zF(t){if(Il.has(t)){const e=Il.get(t);Il.delete(t),im.delete(e),om(t,{payload:null,name:e,bubble:!1,origin:t})}}function Va(t){return im.get(t)}function HF(t,e){BF.push(om.on(t,e))}function Mf(t,e,n){let r=!0;return e in t.config._t?r=!1:t.emit(`config:${e}`,n,!1),e in t.props||(t.emit("prop",{prop:e,value:n}),t.emit(`prop:${e}`,n)),r}function qF(t={}){const e=new Set,n={...t,_add:s=>e.add(s),_rm:s=>e.delete(s)};return new Proxy(n,{set(s,i,o,a){return typeof i=="string"&&e.forEach(l=>Mf(l,i,o)),Reflect.set(s,i,o,a)}})}function F0(t){const e=document.getElementById(t);if(e instanceof HTMLFormElement){const n=new Event("submit",{cancelable:!0,bubbles:!0});e.dispatchEvent(n);return}Ss(151,t)}function KF(t){const e=n=>{for(const r in n.store){const s=n.store[r];s.type==="error"||s.type==="ui"&&r==="incomplete"?n.store.remove(r):s.type==="state"&&n.store.set({...s,value:!1})}};e(t),t.walk(e)}function U0(t,e){const n=typeof t=="string"?Va(t):t;if(n){const r=o=>fn(o.props.initial)||(o.type==="group"?{}:o.type==="list"?[]:void 0);n._e.pause(n);const s=fn(e);return e&&!en(e)&&(n.props.initial=ko(s)?Si(s):s,n.props._init=n.props.initial),n.input(r(n),!1),n.walk(o=>{o.type==="list"&&o.sync||o.input(r(o),!1)}),n.input(en(s)&&s?s:r(n),!1),n.type!=="input"&&e&&!en(e)&&ko(e)&&n.walk(o=>{o.props.initial=ko(o.value)?Si(o.value):o.value,o.props._init=n.props.initial}),n._e.play(n),KF(n),n.emit("reset",n),n}Ss(152,t)}const GF={delimiter:".",delay:0,locale:"en",rootClasses:t=>({[`formkit-${x0(t)}`]:!0})},j0=Symbol("index"),Lf=Symbol("removed"),Vf=Symbol("moved"),B0=Symbol("inserted");function QF(t){return t.type==="list"&&Array.isArray(t._value)}function $a(t){return t&&typeof t=="object"&&t.__FKNode__===!0}const bl=(t,e,n)=>{qt(102,[t,n])},YF={_c:we(_U,bl,!1),add:we(cU),addProps:we(lU),address:we(vU,bl,!1),at:we(EU),bubble:we(CF),clearErrors:we(SU),calm:we(iU),config:we(!1),define:we(aU),disturb:we(sU),destroy:we(oU),extend:we(kU),hydrate:we(nU),index:we(gU,mU,!1),input:we(H0),each:we(fU),emit:we(RF),find:we(TU),on:we(SF),off:we(PF),parent:we(!1,uU),plugins:we(!1),remove:we(hU),root:we(bU,bl,!1),reset:we(CU),resetConfig:we(pU),setErrors:we(G0),submit:we(RU),t:we(AU),use:we(am),name:we(yU,!1,!1),walk:we(dU)};function XF(){return new Map(Object.entries(YF))}function we(t,e,n=!0){return{get:t?(r,s)=>n?(...i)=>t(r,s,...i):t(r,s):!1,set:e!==void 0?e:bl.bind(null)}}function JF(){const t=new Map;return new Proxy(t,{get(e,n){return t.has(n)||t.set(n,nm()),t.get(n)}})}let W0=0,ZF=0;function eU(t){var e,n;return((e=t.parent)===null||e===void 0?void 0:e.type)==="list"?j0:t.name||`${((n=t.props)===null||n===void 0?void 0:n.type)||"input"}_${++W0}`}function z0(t){return t.type==="group"?Si(t.value&&typeof t.value=="object"&&!Array.isArray(t.value)?t.value:{}):t.type==="list"?Si(Array.isArray(t.value)?t.value:[]):t.value}function H0(t,e,n,r=!0){return e._value=tU(t,t.hook.input.dispatch(n)),t.emit("input",e._value),t.isCreated&&t.type==="input"&&Ot(e._value,e.value)?(t.emit("commitRaw",e.value),e.settled):(e.isSettled&&t.disturb(),r?(e._tmo&&clearTimeout(e._tmo),e._tmo=setTimeout(vc,t.props.delay,t,e)):vc(t,e),e.settled)}function tU(t,e){switch(t.type){case"input":break;case"group":(!e||typeof e!="object")&&qt(107,[t,e]);break;case"list":Array.isArray(e)||qt(108,[t,e]);break}return e}function vc(t,e,n=!0,r=!0){e._value=e.value=t.hook.commit.dispatch(e._value),t.type!=="input"&&r&&t.hydrate(),t.emit("commitRaw",e.value),t.emit("commit",e.value),n&&t.calm()}function q0(t,{name:e,value:n,from:r}){if(!Object.isFrozen(t._value)){if(QF(t)){const s=n===Lf?[]:n===Vf&&typeof r=="number"?t._value.splice(r,1):[n];t._value.splice(e,n===Vf||r===B0?0:1,...s);return}n!==Lf?t._value[e]=n:delete t._value[e]}}function nU(t,e){const n=e._value;return t.type==="list"&&t.sync&&rU(t,e),e.children.forEach(r=>{if(typeof n=="object")if(r.name in n){const s=r.type!=="input"||n[r.name]&&typeof n[r.name]=="object"?Si(n[r.name]):n[r.name];if(!r.isSettled||!ko(s)&&Ot(s,r._value))return;r.input(s,!1)}else(t.type!=="list"||typeof r.name=="number")&&q0(e,{name:r.name,value:r.value}),n.__init||(r.type==="group"?r.input({},!1):r.type==="list"?r.input([],!1):r.input(void 0,!1))}),t}function rU(t,e){const n=t._value;if(!Array.isArray(n))return;const r=[],s=new Set(e.children),i=new Map;n.forEach((a,l)=>{if(e.children[l]&&e.children[l]._value===a)r.push(e.children[l]),s.delete(e.children[l]);else{r.push(null);const c=i.get(a)||[];c.push(l),i.set(a,c)}}),s.size&&i.size&&s.forEach(a=>{if(i.has(a._value)){const l=i.get(a._value),c=l.shift();r[c]=a,s.delete(a),l.length||i.delete(a._value)}});const o=[];for(i.forEach(a=>{o.push(...a)});s.size&&o.length;){const a=s.values().next().value,l=o.shift();if(l===void 0)break;r[l]=a,s.delete(a)}o.forEach((a,l)=>{r[a]=xU({value:l})}),s.size&&s.forEach(a=>{if(!("__FKP"in a)){const l=a._c.parent;if(!l||MU(l))return;l.ledger.unmerge(a),a._c.parent=null,a.destroy()}}),e.children=r}function sU(t,e){var n;return e._d<=0&&(e.isSettled=!1,t.emit("settled",!1,!1),e.settled=new Promise(r=>{e._resolve=r}),t.parent&&((n=t.parent)===null||n===void 0||n.disturb())),e._d++,t}function iU(t,e,n){var r;if(n!==void 0&&t.type!=="input")return q0(e,n),vc(t,e,!0,!1);e._d>0&&e._d--,e._d===0&&(e.isSettled=!0,t.emit("settled",!0,!1),t.parent&&((r=t.parent)===null||r===void 0||r.calm({name:t.name,value:e.value})),e._resolve&&e._resolve(e.value))}function oU(t,e){t.emit("destroying",t),t.store.filter(()=>!1),t.parent&&(t.parent.emit("childRemoved",t),t.parent.remove(t)),zF(t),t.emit("destroyed",t),e._e.flush(),e._value=e.value=void 0;for(const n in e.context)delete e.context[n];e.plugins.clear(),e.context=null}function aU(t,e,n){e.type=n.type,e.props.definition=Ci(n),e.value=e._value=z0({type:t.type,value:e.value}),n.forceTypeProp&&(t.props.type&&(t.props.originalType=t.props.type),e.props.type=n.forceTypeProp),n.family&&(e.props.family=n.family),n.features&&n.features.forEach(r=>r(t)),n.props&&t.addProps(n.props),t.emit("defined",n)}function lU(t,e,n){var r;if(t.props.attrs){const s={...t.props.attrs};t.props._emit=!1;for(const o in s){const a=si(o);n.includes(a)&&(t.props[a]=s[o],delete s[o])}const i=fn(e._value);t.props.initial=t.type!=="input"?Si(i):i,t.props._emit=!0,t.props.attrs=s,t.props.definition&&(t.props.definition.props=[...((r=t.props.definition)===null||r===void 0?void 0:r.props)||[],...n])}return t.emit("added-props",n),t}function cU(t,e,n,r){if(t.type==="input"&&qt(100,t),n.parent&&n.parent!==t&&n.parent.remove(n),!e.children.includes(n)){if(r!==void 0&&t.type==="list"){const s=e.children[r];s&&"__FKP"in s?(n._c.uid=s.uid,e.children.splice(r,1,n)):e.children.splice(r,0,n),Array.isArray(t.value)&&t.value.length<e.children.length&&t.disturb().calm({name:r,value:n.value,from:B0})}else e.children.push(n);n.isSettled||t.disturb()}if(n.parent!==t){if(n.parent=t,n.parent!==t)return t.remove(n),n.parent.add(n),t}else n.use(t.plugins);return vc(t,e,!1),t.ledger.merge(n),t.emit("child",n),t}function uU(t,e,n,r){return $a(r)?(t.parent&&t.parent!==r&&t.parent.remove(t),e.parent=r,t.resetConfig(),r.children.includes(t)?t.use(r.plugins):r.add(t),!0):r===null?(e.parent=null,!0):!1}function hU(t,e,n){const r=e.children.indexOf(n);if(r!==-1){n.isSettled&&t.disturb(),e.children.splice(r,1);let s=dn(n.props.preserve),i=n.parent;for(;s===void 0&&i;)s=dn(i.props.preserve),i=i.parent;s?t.calm():t.calm({name:t.type==="list"?r:n.name,value:Lf}),n.parent=null,n.config._rmn=n}return t.ledger.unmerge(n),t}function fU(t,e,n){e.children.forEach(r=>!("__FKP"in r)&&n(r))}function dU(t,e,n,r=!1,s=!1){e.children.some(i=>{if("__FKP"in i)return!1;const o=n(i);return r&&o===!1?!0:s&&o===!1?!1:i.walk(n,r,s)})}function pU(t,e){const n=t.parent||void 0;e.config=K0(t.config._t,n),t.walk(r=>r.resetConfig())}function am(t,e,n,r=!0,s=!0){return Array.isArray(n)||n instanceof Set?(n.forEach(i=>am(t,e,i)),t):(e.plugins.has(n)||(s&&typeof n.library=="function"&&n.library(t),r&&n(t)!==!1&&(e.plugins.add(n),t.children.forEach(i=>i.use(n)))),t)}function mU(t,e,n,r){if($a(t.parent)){const s=t.parent.children,i=r>=s.length?s.length-1:r<0?0:r,o=s.indexOf(t);return o===-1?!1:(s.splice(o,1),s.splice(i,0,t),t.parent.children=s,t.parent.type==="list"&&t.parent.disturb().calm({name:i,value:Vf,from:o}),!0)}return!1}function gU(t){if(t.parent){const e=[...t.parent.children].indexOf(t);return e===-1?t.parent.children.length:e}return-1}function _U(t,e){return e}function yU(t,e){var n;return((n=t.parent)===null||n===void 0?void 0:n.type)==="list"?t.index:e.name!==j0?e.name:t.index}function vU(t,e){return e.parent?e.parent.address.concat([t.name]):[t.name]}function EU(t,e,n){const r=typeof n=="string"?n.split(t.config.delimiter):n;if(!r.length)return;const s=r[0];let i=t.parent;for(i||(String(r[0])===String(t.name)&&r.shift(),i=t),s==="$parent"&&r.shift();i&&r.length;){const o=r.shift();switch(o){case"$root":i=t.root;break;case"$parent":i=i.parent;break;case"$self":i=t;break;default:i=i.children.find(a=>!("__FKP"in a)&&String(a.name)===String(o))||wU(i,o)}}return i||void 0}function wU(t,e){const n=String(e).match(/^(find)\((.*)\)$/);if(n){const[,r,s]=n,i=s.split(",").map(o=>o.trim());switch(r){case"find":return t.find(i[0],i[1]);default:return}}}function TU(t,e,n,r){return IU(t,n,r)}function IU(t,e,n="name"){const r=typeof n=="string"?i=>i[n]==e:n,s=[t];for(;s.length;){const i=s.shift();if(!("__FKP"in i)){if(r(i,e))return i;s.push(...i.children)}}}function bU(t){let e=t;for(;e.parent;)e=e.parent;return e}function K0(t={},e){let n;return new Proxy(t,{get(...r){const s=r[1];if(s==="_t")return t;const i=Reflect.get(...r);if(i!==void 0)return i;if(e){const o=e.config[s];if(o!==void 0)return o}if(t.rootConfig&&typeof s=="string"){const o=t.rootConfig[s];if(o!==void 0)return o}return s==="delay"&&(n==null?void 0:n.type)==="input"?20:GF[s]},set(...r){const s=r[1],i=r[2];if(s==="_n")return n=i,t.rootConfig&&t.rootConfig._add(n),!0;if(s==="_rmn")return t.rootConfig&&t.rootConfig._rm(n),n=void 0,!0;if(!Ot(t[s],i,!1)){const o=Reflect.set(...r);return n&&(n.emit(`config:${s}`,i,!1),Mf(n,s,i),n.walk(a=>Mf(a,s,i),!1,!0)),o}return!0}})}function AU(t,e,n,r="ui"){const s=typeof n=="string"?{key:n,value:n,type:r}:n,i=t.hook.text.dispatch(s);return t.emit("text",i,!1),i.value}function RU(t){const e=t.name;do{if(t.props.isForm===!0)break;t.parent||qt(106,e),t=t.parent}while(t);t.props.id&&F0(t.props.id)}function CU(t,e,n){return U0(t,n)}function G0(t,e,n,r){const s=`${t.name}-set`,i=t.hook.setErrors.dispatch({localErrors:n,childErrors:r});return LF(t,i.localErrors,i.childErrors).forEach(o=>{t.store.apply(o,a=>a.meta.source===s)}),t}function SU(t,e,n=!0,r){return G0(t,e,[]),n&&(r=r||`${t.name}-set`,t.walk(s=>{s.store.filter(i=>!(i.type==="error"&&i.meta&&i.meta.source===r))})),t}function PU(t){const e={initial:typeof t=="object"?fn(t):t};let n,r=!0;return new Proxy(e,{get(...s){const[i,o]=s;if(se(e,o))return Reflect.get(...s);if(n&&typeof o=="string"&&n.config[o]!==void 0)return n.config[o]},set(s,i,o,a){if(i==="_n")return n=o,!0;if(i==="_emit")return r=o,!0;const{prop:l,value:c}=n.hook.prop.dispatch({prop:i,value:o});if(!Ot(e[l],c,!1)||typeof c=="object"){const u=Reflect.set(s,l,c,a);return r&&(n.emit("prop",{prop:l,value:c}),typeof l=="string"&&n.emit(`prop:${l}`,c)),u}return!0}})}function kU(t,e,n,r){return e.traps.set(n,r),t}function NU(t,e){if(t.props.definition)return t.define(t.props.definition);for(const n of e){if(t.props.definition)return;typeof n.library=="function"&&n.library(t)}}function OU(t){const e=z0(t),n=K0(t.config||{},t.parent);return{_d:0,_e:M0(),uid:Symbol(),_resolve:!1,_tmo:!1,_value:e,children:gF(t.children||[]),config:n,hook:JF(),isCreated:!1,isSettled:!0,ledger:FF(),name:eU(t),parent:t.parent||null,plugins:new Set,props:PU(e),settled:Promise.resolve(e),store:kF(!0),sync:t.sync||!1,traps:XF(),type:t.type||"input",value:e}}function DU(t,e){var n,r,s;const i=(n=e.props)===null||n===void 0?void 0:n.id;if(i||(r=e.props)===null||r===void 0||delete r.id,t.ledger.init(t.store._n=t.props._n=t.config._n=t),t.props._emit=!1,Object.assign(t.props,i?{}:{id:`input_${ZF++}`},(s=e.props)!==null&&s!==void 0?s:{}),t.props._emit=!0,NU(t,new Set([...e.plugins||[],...t.parent?t.parent.plugins:[]])),e.plugins)for(const o of e.plugins)am(t,t._c,o,!0,!1);return t.each(o=>t.add(o)),t.parent&&t.parent.add(t,e.index),t.type==="input"&&t.children.length&&qt(100,t),H0(t,t._c,t._value,!1),t.store.release(),i&&WF(t),t.emit("created",t),t.isCreated=!0,t}function xU(t){var e,n,r,s;return{__FKP:!0,uid:Symbol(),name:(e=t==null?void 0:t.name)!==null&&e!==void 0?e:`p_${W0++}`,value:(n=t==null?void 0:t.value)!==null&&n!==void 0?n:null,_value:(r=t==null?void 0:t.value)!==null&&r!==void 0?r:null,type:(s=t==null?void 0:t.type)!==null&&s!==void 0?s:"input",use:()=>{},input(i){return this._value=i,this.value=i,Promise.resolve()},isSettled:!0}}function MU(t){return"__FKP"in t}function LU(t){const e=t||{},n=OU(e),r=new Proxy(n,{get(...s){const[,i]=s;if(i==="__FKNode__")return!0;const o=n.traps.get(i);return o&&o.get?o.get(r,n):Reflect.get(...s)},set(...s){const[,i,o]=s,a=n.traps.get(i);return a&&a.set?a.set(r,n,i,o):Reflect.set(...s)}});return DU(r,e)}function $f(t){return typeof t!="string"&&se(t,"$el")}function Ff(t){return typeof t!="string"&&se(t,"$cmp")}function js(t){return!t||typeof t=="string"?!1:se(t,"if")&&se(t,"then")}function VU(t){return typeof t!="string"&&"$formkit"in t}function $U(t){if(typeof t=="string")return{$el:"text",children:t};if(VU(t)){const{$formkit:e,for:n,if:r,children:s,bind:i,...o}=t;return Object.assign({$cmp:"FormKit",props:{...o,type:e}},r?{if:r}:{},n?{for:n}:{},s?{children:s}:{},i?{bind:i}:{})}return t}function rn(t){let e;const n=new Set,r=function(_,v){return typeof _=="function"?_(v):_},s=[{"&&":(p,_,v)=>r(p,v)&&r(_,v),"||":(p,_,v)=>r(p,v)||r(_,v)},{"===":(p,_,v)=>r(p,v)===r(_,v),"!==":(p,_,v)=>r(p,v)!==r(_,v),"==":(p,_,v)=>r(p,v)==r(_,v),"!=":(p,_,v)=>r(p,v)!=r(_,v),">=":(p,_,v)=>r(p,v)>=r(_,v),"<=":(p,_,v)=>r(p,v)<=r(_,v),">":(p,_,v)=>r(p,v)>r(_,v),"<":(p,_,v)=>r(p,v)<r(_,v)},{"+":(p,_,v)=>r(p,v)+r(_,v),"-":(p,_,v)=>r(p,v)-r(_,v)},{"*":(p,_,v)=>r(p,v)*r(_,v),"/":(p,_,v)=>r(p,v)/r(_,v),"%":(p,_,v)=>r(p,v)%r(_,v)}],i=s.reduce((p,_)=>p.concat(Object.keys(_)),[]),o=new Set(i.map(p=>p.charAt(0)));function a(p,_,v,w){const I=p.filter(E=>E.startsWith(_));return I.length?I.find(E=>w.length>=v+E.length&&w.substring(v,v+E.length)===E?E:!1):!1}function l(p,_,v=1){let w=v?_.substring(p+1).trim():_.substring(0,p).trim();if(!w.length)return-1;if(!v){const E=w.split("").reverse(),x=E.findIndex(b=>o.has(b));w=E.slice(x).join("")}const I=w[0];return s.findIndex(E=>{const x=Object.keys(E);return!!a(x,I,0,w)})}function c(p,_){let v="";const w=_.length;let I=0;for(let E=p;E<w;E++){const x=_.charAt(E);if(x==="(")I++;else if(x===")")I--;else if(I===0&&x===" ")continue;if(I===0&&a(i,x,E,_))return[v,E-1];v+=x}return[v,_.length-1]}function u(p,_=0){const v=s[_],w=p.length,I=Object.keys(v);let E=0,x=!1,b=null,C="",A=null,L,W="",K="",_e="",Z="",We=0;const Ke=(ee,ie)=>{ee?_e+=ie:C+=ie};for(let ee=0;ee<w;ee++)if(W=K,K=p.charAt(ee),(K==="'"||K==='"')&&W!=="\\"&&(E===0&&!x||E&&!Z)){E?Z=K:x=K,Ke(E,K);continue}else if(x&&(K!==x||W==="\\")||Z&&(K!==Z||W==="\\")){Ke(E,K);continue}else if(x===K){x=!1,Ke(E,K);continue}else if(Z===K){Z=!1,Ke(E,K);continue}else{if(K===" ")continue;if(K==="(")E===0?We=ee:_e+=K,E++;else if(K===")")if(E--,E===0){const ie=typeof C=="string"&&C.startsWith("$")?C:void 0,fe=ie&&p.charAt(ee+1)===".";let et="";fe&&([et,ee]=c(ee+2,p));const Ft=b?_:l(We,p,0),dt=l(ee,p);Ft===-1&&dt===-1?(C=h(_e,-1,ie,et),typeof C=="string"&&(C=_e)):b&&(Ft>=dt||dt===-1)&&_===Ft?(A=b.bind(null,h(_e,-1,ie,et)),b=null,C=""):dt>Ft&&_===dt?C=h(_e,-1,ie,et):C+=`(${_e})${fe?`.${et}`:""}`,_e=""}else _e+=K;else if(E===0&&(L=a(I,K,ee,p))){ee===0&&qt(103,[L,p]),ee+=L.length-1,ee===p.length-1&&qt(104,[L,p]),b?C&&(A=b.bind(null,h(C,_)),b=v[L].bind(null,A),C=""):A?(b=v[L].bind(null,h(A,_)),A=null):(b=v[L].bind(null,h(C,_)),C="");continue}else Ke(E,K)}return C&&b&&(b=b.bind(null,h(C,_))),b=!b&&A?A:b,!b&&C&&(b=(ee,ie)=>typeof ee=="function"?ee(ie):ee,b=b.bind(null,h(C,_))),!b&&!C&&qt(105,p),b}function h(p,_,v,w){if(v){const I=h(v,s.length);let E,x=w?rn(`$${w}`):!1;if(typeof I=="function"){const b=TF(String(p)).map(C=>h(C,-1));return C=>{const A=I(C);return typeof A!="function"?(Ss(150,v),A):(E=A(...b.map(L=>typeof L=="function"?L(C):L)),x&&(x=x.provide(L=>{const W=e(L);return L.reduce((_e,Z)=>{if(Z===w||(w==null?void 0:w.startsWith(`${Z}(`))){const Ke=IF(E,Z);_e[Z]=()=>Ke}else _e[Z]=W[Z];return _e},{})})),x?x():E)}}}else if(typeof p=="string"){if(p==="true")return!0;if(p==="false")return!1;if(p==="undefined")return;if(EF(p))return wF(p.substring(1,p.length-1));if(!isNaN(+p))return Number(p);if(_<s.length-1)return u(p,_+1);if(p.startsWith("$")){const I=p.substring(1);return n.add(I),function(x){return I in x?x[I]():void 0}}return p}return p}const f=u(t.startsWith("$:")?t.substring(2):t),d=Array.from(n);function m(p){return e=p,Object.assign(f.bind(null,p(d)),{provide:m})}return Object.assign(f,{provide:m})}function Al(t,e,n){return n?typeof n=="string"?n.split(" ").reduce((s,i)=>Object.assign(s,{[i]:!0}),{}):typeof n=="function"?Al(t,e,n(e,t)):n:{}}function FU(t,e,...n){const r=n.reduce((s,i)=>{if(!i)return dh(s);const{$reset:o,...a}=i;return dh(o?a:Object.assign(s,a))},{});return Object.keys(t.hook.classes.dispatch({property:e,classes:r}).classes).filter(s=>r[s]).join(" ")||null}function dh(t){const e="$remove:";let n=!1;const r=Object.keys(t).filter(s=>(t[s]&&s.startsWith(e)&&(n=!0),t[s]));return r.length>1&&n&&r.filter(i=>i.startsWith(e)).map(i=>{const o=i.substring(e.length);t[o]=!1,t[i]=!1}),t}function UU(t,e,n){const r=Va(t);r?r.setErrors(e,n):Ss(651,t)}function jU(t,e=!0){const n=Va(t);n?n.clearErrors(e):Ss(652,t)}const Ec="1.2.2",Q0=new WeakSet;function ca(t,e){const n=e||Object.assign(new Map,{active:!1}),r=new Map,s=function(u){var h;n.active&&(n.has(t)||n.set(t,new Set),(h=n.get(t))===null||h===void 0||h.add(u))},i=function(u){return new Proxy(u,{get(...h){return typeof h[1]=="string"&&s(`prop:${h[1]}`),Reflect.get(...h)}})},o=function(u){return new Proxy(u,{get(...h){return h[1]==="value"?f=>(s(`count:${f}`),u.value(f)):Reflect.get(...h)}})},a=function(u,h){return $a(u)?ca(u,n):(h==="value"&&s("commit"),h==="_value"&&s("input"),h==="props"?i(u):h==="ledger"?o(u):u)},{proxy:l,revoke:c}=Proxy.revocable(t,{get(...u){switch(u[1]){case"_node":return t;case"deps":return n;case"watch":return(f,d)=>J0(l,f,d);case"observe":return()=>{const f=new Map(n);return n.clear(),n.active=!0,f};case"stopObserve":return()=>{const f=new Map(n);return n.active=!1,f};case"receipts":return r;case"kill":return()=>{X0(r),Q0.add(u[2]),c()}}const h=Reflect.get(...u);return typeof h=="function"?(...f)=>{const d=h(...f);return a(d,u[1])}:a(h,u[1])}});return l}function Y0(t,[e,n],r){e.forEach((s,i)=>{s.forEach(o=>{var a;t.receipts.has(i)||t.receipts.set(i,{}),t.receipts.set(i,Object.assign((a=t.receipts.get(i))!==null&&a!==void 0?a:{},{[o]:i.on(o,r)}))})}),n.forEach((s,i)=>{s.forEach(o=>{if(t.receipts.has(i)){const a=t.receipts.get(i);a&&se(a,o)&&(i.off(a[o]),delete a[o],t.receipts.set(i,a))}})})}function X0(t){t.forEach((e,n)=>{for(const r in e)n.off(e[r])})}function J0(t,e,n){const r=o=>{const a=t.stopObserve();Y0(t,Z0(s,a),()=>J0(t,e,n)),n&&n(o)},s=new Map(t.deps);t.observe();const i=e(t);i instanceof Promise?i.then(o=>r(o)):r(i)}function Z0(t,e){const n=new Map,r=new Map;return e.forEach((s,i)=>{if(!t.has(i))n.set(i,s);else{const o=new Set,a=t.get(i);s.forEach(l=>!(a!=null&&a.has(l))&&o.add(l)),n.set(i,o)}}),t.forEach((s,i)=>{if(!e.has(i))r.set(i,s);else{const o=new Set,a=e.get(i);s.forEach(l=>!(a!=null&&a.has(l))&&o.add(l)),r.set(i,o)}}),[n,r]}function eb(t){return Q0.has(t)}const Uf=Tn({type:"state",blocking:!0,visible:!1,value:!0,key:"validating"});function BU(t={}){return function(n){let r=fn(n.props.validationRules||{}),s={...t,...r},i=ca(n);const o={input:qi(),rerun:null,isPassing:!0};let a=fn(n.props.validation);n.on("prop:validation",({payload:c})=>l(c,r)),n.on("prop:validationRules",({payload:c})=>l(a,c));function l(c,u){var h;Ot(Object.keys(r||{}),Object.keys(u||{}))&&Ot(a,c)||(r=fn(u),a=fn(c),s={...t,...r},X0(i.receipts),(h=n.props.parsedRules)===null||h===void 0||h.forEach(f=>{var d;f.messageObserver=(d=f.messageObserver)===null||d===void 0?void 0:d.kill()}),n.store.filter(()=>!1,"validation"),n.props.parsedRules=Ry(c,s),i.kill(),i=ca(n),jf(i,n.props.parsedRules,o))}n.props.parsedRules=Ry(a,s),jf(i,n.props.parsedRules,o)}}function jf(t,e,n){eb(t)||(n.input=qi(),n.isPassing=!0,t.store.filter(r=>!r.meta.removeImmediately,"validation"),e.forEach(r=>r.debounce&&clearTimeout(r.timer)),e.length&&(t.store.set(Uf),Bf(0,e,t,n,!1,()=>{t.store.remove(Uf.key)})))}function Bf(t,e,n,r,s,i){const o=e[t];if(!o)return i();const a=r.input;o.state=null;function l(c,u){r.isPassing=r.isPassing&&!!u,o.queued=!1;const h=n.stopObserve();Y0(n,Z0(o.deps,h),()=>{try{n.store.set(Uf)}catch{}o.queued=!0,r.rerun&&clearTimeout(r.rerun),r.rerun=setTimeout(jf,0,n,e,r)}),o.deps=h,r.input===a&&(o.state=u,u===!1?HU(n,o,s||c):zU(n,o),e.length>t+1?Bf(t+1,e,n,r,s||c,i):i())}(!en(n.value)||!o.skipEmpty)&&(r.isPassing||o.force)?o.queued?WU(o,n,c=>{c instanceof Promise?c.then(u=>l(!0,u)):l(!1,c)}):Bf(t+1,e,n,r,s,i):en(n.value)&&o.skipEmpty&&r.isPassing?(n.observe(),n.value,l(!1,r.isPassing)):l(!1,null)}function WU(t,e,n){t.debounce?t.timer=setTimeout(()=>{e.observe(),n(t.rule(e,...t.args))},t.debounce):(e.observe(),n(t.rule(e,...t.args)))}function zU(t,e){const n=`rule_${e.name}`;e.messageObserver&&(e.messageObserver=e.messageObserver.kill()),se(t.store,n)&&t.store.remove(n)}function HU(t,e,n){eb(t)||(e.messageObserver||(e.messageObserver=ca(t._node)),e.messageObserver.watch(r=>KU(r,e),r=>{const s=qU(t,e,r),i=Tn({blocking:e.blocking,key:`rule_${e.name}`,meta:{messageKey:e.name,removeImmediately:n,localize:!s,i18nArgs:r},type:"validation",value:s||"This field is not valid."});t.store.set(i)}))}function qU(t,e,n){const r=t.props.validationMessages&&se(t.props.validationMessages,e.name)?t.props.validationMessages[e.name]:void 0;return typeof r=="function"?r(...n):r}function KU(t,e){return[{node:t,name:lm(t),args:e.args}]}function lm(t){return typeof t.props.validationLabel=="function"?t.props.validationLabel(t):t.props.validationLabel||t.props.label||t.props.name||String(t.name)}const tb="(?:[\\*+?()0-9]+)",nb="[a-zA-Z][a-zA-Z0-9_]+",GU=new RegExp(`^(${tb}?${nb})(?:\\:(.*)+)?$`,"i"),QU=new RegExp(`^(${tb})(${nb})$`,"i"),YU=/([\*+?]+)?(\(\d+\))([\*+?]+)?/,Ay=/\(\d+\)/,XU={blocking:!0,debounce:0,force:!1,skipEmpty:!0,name:""};function Ry(t,e){return t?(typeof t=="string"?JU(t):Ci(t)).reduce((r,s)=>{let i=s.shift();const o={};if(typeof i=="string"){const[a,l]=e2(i);se(e,a)&&(i=e[a],Object.assign(o,l))}return typeof i=="function"&&r.push({rule:i,args:s,timer:0,state:null,queued:!0,deps:new Map,...XU,...t2(o,i)}),r},[]):[]}function JU(t){return t.split("|").reduce((e,n)=>{const r=ZU(n);return r&&e.push(r),e},[])}function ZU(t){const e=t.trim();if(e){const n=e.match(GU);if(n&&typeof n[1]=="string"){const r=n[1].trim(),s=n[2]&&typeof n[2]=="string"?n[2].split(",").map(i=>i.trim()):[];return[r,...s]}}return!1}function e2(t){const e=t.match(QU);if(!e)return[t,{name:t}];const n={"*":{force:!0},"+":{skipEmpty:!1},"?":{blocking:!1}},[,r,s]=e,i=Ay.test(r)?r.match(YU)||[]:[,r];return[s,[i[1],i[2],i[3]].reduce((o,a)=>(a&&(Ay.test(a)?o.debounce=parseInt(a.substr(1,a.length-1)):a.split("").forEach(l=>se(n,l)&&Object.assign(o,n[l]))),o),{name:s})]}function t2(t,e){return t.name||(t.name=e.ruleName||e.name),["skipEmpty","force","debounce","blocking"].reduce((n,r)=>(se(e,r)&&!se(n,r)&&Object.assign(n,{[r]:e[r]}),n),t)}function B(t){return t[0].toUpperCase()+t.substr(1)}function wc(t,e="or"){return t.reduce((n,r,s)=>(n+=r,s<=t.length-2&&t.length>2&&(n+=", "),s===t.length-2&&(n+=`${t.length===2?" ":""}${e} `),n),"")}function kr(t){const e=typeof t=="string"?new Date(Date.parse(t)):t;return e instanceof Date?new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"}).format(e):"(unknown)"}function rb(t,e){return Number(t)>=Number(e)?[e,t]:[t,e]}const n2={add:"Add",remove:"Remove",removeAll:"Remove all",incomplete:"Sorry, not all fields are filled out correctly.",submit:"Submit",noFiles:"No file chosen",moveUp:"Move up",moveDown:"Move down",isLoading:"Loading...",loadMore:"Load more",next:"Next",prev:"Previous",addAllValues:"Add all values",addSelectedValues:"Add selected values",removeAllValues:"Remove all values",removeSelectedValues:"Remove selected values",chooseDate:"Choose date",changeDate:"Change date",invalidDate:"The selected date is invalid.",summaryHeader:"There were errors in your form.",close:"Close"},r2={accepted({name:t}){return`Please accept the ${t}.`},date_after({name:t,args:e}){return Array.isArray(e)&&e.length?`${B(t)} must be after ${kr(e[0])}.`:`${B(t)} must be in the future.`},alpha({name:t}){return`${B(t)} can only contain alphabetical characters.`},alphanumeric({name:t}){return`${B(t)} can only contain letters and numbers.`},alpha_spaces({name:t}){return`${B(t)} can only contain letters and spaces.`},contains_alpha({name:t}){return`${B(t)} must contain alphabetical characters.`},contains_alphanumeric({name:t}){return`${B(t)} must contain letters or numbers.`},contains_alpha_spaces({name:t}){return`${B(t)} must contain letters or spaces.`},contains_symbol({name:t}){return`${B(t)} must contain a symbol.`},contains_uppercase({name:t}){return`${B(t)} must contain an uppercase letter.`},contains_lowercase({name:t}){return`${B(t)} must contain a lowercase letter.`},contains_numeric({name:t}){return`${B(t)} must contain numbers.`},symbol({name:t}){return`${B(t)} must be a symbol.`},uppercase({name:t}){return`${B(t)} can only contain uppercase letters.`},lowercase({name:t}){return`${B(t)} can only contain lowercase letters.`},date_before({name:t,args:e}){return Array.isArray(e)&&e.length?`${B(t)} must be before ${kr(e[0])}.`:`${B(t)} must be in the past.`},between({name:t,args:e}){if(isNaN(e[0])||isNaN(e[1]))return"This field was configured incorrectly and can’t be submitted.";const[n,r]=rb(e[0],e[1]);return`${B(t)} must be between ${n} and ${r}.`},confirm({name:t}){return`${B(t)} does not match.`},date_format({name:t,args:e}){return Array.isArray(e)&&e.length?`${B(t)} is not a valid date, please use the format ${e[0]}`:"This field was configured incorrectly and can’t be submitted"},date_between({name:t,args:e}){return`${B(t)} must be between ${kr(e[0])} and ${kr(e[1])}`},email:"Please enter a valid email address.",ends_with({name:t,args:e}){return`${B(t)} doesn’t end with ${wc(e)}.`},is({name:t}){return`${B(t)} is not an allowed value.`},length({name:t,args:[e=0,n=1/0]}){const r=Number(e)<=Number(n)?e:n,s=Number(n)>=Number(e)?n:e;return r==1&&s===1/0?`${B(t)} must be at least one character.`:r==0&&s?`${B(t)} must be less than or equal to ${s} characters.`:r===s?`${B(t)} should be ${s} characters long.`:r&&s===1/0?`${B(t)} must be greater than or equal to ${r} characters.`:`${B(t)} must be between ${r} and ${s} characters.`},matches({name:t}){return`${B(t)} is not an allowed value.`},max({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Cannot have more than ${n[0]} ${t}.`:`${B(t)} must be less than or equal to ${n[0]}.`},mime({name:t,args:e}){return e[0]?`${B(t)} must be of the type: ${e[0]}`:"No file formats allowed."},min({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Cannot have fewer than ${n[0]} ${t}.`:`Must be at least ${n[0]} ${t} .`},not({name:t,node:{value:e}}){return`“${e}” is not an allowed ${t}.`},number({name:t}){return`${B(t)} must be a number.`},require_one:({name:t,node:e,args:n})=>{const r=n.map(s=>{const i=e.at(s);return i?lm(i):!1}).filter(s=>!!s);return r.unshift(t),`${r.join(" or ")} is required.`},required({name:t}){return`${B(t)} is required.`},starts_with({name:t,args:e}){return`${B(t)} doesn’t start with ${wc(e)}.`},url(){return"Please enter a valid URL."}};var s2=Object.freeze({__proto__:null,ui:n2,validation:r2});const i2={add:"Dodaj",remove:"Usuń",removeAll:"Usuń wszystko",incomplete:"Nie wszystkie pola zostały wypełnione poprawnie.",submit:"Wyślij",noFiles:"Nie wybrano pliku",moveUp:"Przesuń w górę",moveDown:"Przesuń w dół",isLoading:"Ładowanie...",loadMore:"Załaduj więcej",next:"Kolejny",prev:"Poprzednia",addAllValues:"Dodaj wszystkie wartości",addSelectedValues:"Dodaj wybrane wartości",removeAllValues:"Usuń wszystkie wartości",removeSelectedValues:"Usuń wybrane wartości",chooseDate:"Wybierz datę",changeDate:"Zmień datę",invalidDate:"Wybrana data jest nieprawidłowa.",close:"Zamknij"},o2={accepted({name:t}){return`Proszę zaakceptować ${t}.`},date_after({name:t,args:e}){return Array.isArray(e)&&e.length?`${B(t)} musi być po ${kr(e[0])}.`:`${B(t)} musi być w przyszłości.`},alpha({name:t}){return`Pole ${B(t)} może zawierać tylko znaki alfabetyczne.`},alphanumeric({name:t}){return`Pole ${B(t)} może zawierać tylko znaki alfanumeryczne.`},alpha_spaces({name:t}){return`Pole ${B(t)} mogą zawierać tylko litery i spacje.`},contains_alpha({name:t}){return`${B(t)} musi zawierać znaki alfabetyczne.`},contains_alphanumeric({name:t}){return`${B(t)} musi zawierać litery lub cyfry.`},contains_alpha_spaces({name:t}){return`${B(t)} musi zawierać litery lub spacje.`},contains_symbol({name:t}){return`${B(t)} musi zawierać symbol.`},contains_uppercase({name:t}){return`${B(t)} musi zawierać wielkie litery.`},contains_lowercase({name:t}){return`${B(t)} musi zawierać małe litery.`},contains_numeric({name:t}){return`${B(t)} musi zawierać liczby.`},symbol({name:t}){return`${B(t)} musi być symbolem.`},uppercase({name:t}){return`${B(t)} może zawierać tylko wielkie litery.`},lowercase({name:t}){return`${B(t)} może zawierać tylko małe litery.`},date_before({name:t,args:e}){return Array.isArray(e)&&e.length?`${B(t)} musi być przed ${kr(e[0])}.`:`${B(t)} musi być w przeszłości.`},between({name:t,args:e}){if(isNaN(e[0])||isNaN(e[1]))return"Pole zostało wypełnione niepoprawnie i nie może zostać wysłane.";const[n,r]=rb(e[0],e[1]);return`Wartość pola ${B(t)} musi być pomiędzy ${n} i ${r}.`},confirm({name:t}){return`${B(t)} nie pokrywa się.`},date_format({name:t,args:e}){return Array.isArray(e)&&e.length?`Wartość pola ${B(t)} nie jest poprawną datą, proszę użyć formatu ${e[0]}`:"To pole zostało wypełnione niepoprawnie i nie może zostać wysłane"},date_between({name:t,args:e}){return`Data w polu ${B(t)} musi być pomiędzy ${kr(e[0])} i ${kr(e[1])}`},email:"Proszę wpisać poprawny adres email.",ends_with({name:t,args:e}){return`Pole ${B(t)} nie kończy się na ${wc(e)}.`},is({name:t}){return`Pole ${B(t)} nie jest dozwoloną wartością.`},length({name:t,args:[e=0,n=1/0]}){const r=Number(e)<=Number(n)?e:n,s=Number(n)>=Number(e)?n:e;return r==1&&s===1/0?`Pole ${B(t)} musi posiadać minimum jeden znak.`:r==0&&s?`Pole ${B(t)} musi zawierać ${s} lub mniej znaków.`:r&&s===1/0?`Pole ${B(t)} musi zawierać ${r} lub więcej znaków.`:r===s?`Pole ${B(t)} musi mieć ${r} znaków.`:`Pole ${B(t)} musi mieć ${r}-${s} znaków.`},matches({name:t}){return`Pole ${B(t)} zawiera niedozwolone znaki.`},max({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Nie można mieć więcej niż ${n[0]} ${t}.`:`Wartość pola ${B(t)} musi być mniejsza lub równa ${n[0]}.`},mime({name:t,args:e}){return e[0]?`${B(t)} musi być typem: ${e[0]}`:"Nie podano dozwolonych typów plików."},min({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Musisz podać więcej niż ${n[0]} ${t}.`:` Musisz podać conajmniej ${n[0]} ${B(t)}.`},not({name:t}){return`Wartość pola ${t} jest niedozwolona.`},number({name:t}){return`${B(t)} musi być numerem.`},require_one:({name:t,node:e,args:n})=>{const r=n.map(s=>{const i=e.at(s);return i?lm(i):!1}).filter(s=>!!s);return r.unshift(t),`${r.join(" lub ")} wymagany jest.`},required({name:t}){return`Pole ${B(t)} jest wymagane.`},starts_with({name:t,args:e}){return`Wartośc pola ${B(t)} nie zaczyna się od ${wc(e)}.`},url(){return"Wprowadź prawidłowy adres URL."}};var a2=Object.freeze({__proto__:null,ui:i2,validation:o2});function l2(t){return function(n){let r=Cy(n.config.locale,t),s=r?t[r]:{};n.on("prop:locale",({payload:i})=>{r=Cy(i,t),s=r?t[r]:{},n.store.touch()}),n.on("prop:label",()=>n.store.touch()),n.on("prop:validationLabel",()=>n.store.touch()),n.hook.text((i,o)=>{var a,l;const c=((a=i.meta)===null||a===void 0?void 0:a.messageKey)||i.key;if(se(s,i.type)&&se(s[i.type],c)){const u=s[i.type][c];typeof u=="function"?i.value=Array.isArray((l=i.meta)===null||l===void 0?void 0:l.i18nArgs)?u(...i.meta.i18nArgs):u(i):i.value=u}return o(i)})}}function Cy(t,e){if(se(e,t))return t;const[n]=t.split("-");if(se(e,n))return n;for(const r in e)return r;return!1}function c2(...t){const e=t.reduce((r,s)=>vs(r,s),{}),n=()=>{};return n.library=function(r){const s=si(r.props.type);se(e,s)&&r.define(e[s])},n}const u2=["classes","config","delay","errors","id","index","inputErrors","modelValue","onUpdate:modelValue","name","number","parent","plugins","sectionsSchema","type","validation","validationLabel","validationMessages","validationRules","onInput","onInputRaw","onUpdate:modelValue","onNode","onSubmit","onSubmitInvalid","onSubmitRaw"];function Ru(t){return t&&typeof t=="object"&&"group"in t&&Array.isArray(t)}function sb(t){let e=1;return Array.isArray(t)?t.map(n=>{if(typeof n=="string"||typeof n=="number")return{label:String(n),value:String(n)};if(typeof n=="object"){if("group"in n)return n.options=sb(n.options||[]),n;"value"in n&&typeof n.value!="string"&&Object.assign(n,{value:`__mask_${e++}`,__original:n.value})}return n}):Object.keys(t).map(n=>({label:t[n],value:n}))}function Es(t,e){if(Array.isArray(t)){for(const n of t)if(!(typeof n!="object"&&n)){if(Ru(n)){const r=Es(n.options,e);if(r!==void 0)return r}else if(e==n.value)return"__original"in n?n.__original:n.value}}return e}function Pi(t,e){return t===null&&e===void 0||t===void 0&&e===null?!1:t==e?!0:Ri(t)&&Ri(e)?Ot(t,e):!1}function cm(t){t.hook.prop((e,n)=>(e.prop==="options"&&(typeof e.value=="function"?(t.props.optionsLoader=e.value,e.value=[]):e.value=sb(e.value)),n(e)))}function he(t,e,n=!1){return(...r)=>{const s=i=>{const o=!e||typeof e=="string"?{$el:e}:e();return($f(o)||Ff(o))&&(o.meta||(o.meta={section:t}),r.length&&!o.children&&(o.children=[...r.map(a=>typeof a=="function"?a(i):a)]),$f(o)&&(o.attrs={class:`$classes.${t}`,...o.attrs||{}})),{if:`$slots.${t}`,then:`$slots.${t}`,else:t in i?fo(o,i[t]):o}};return s._s=t,n?h2(s):s}}function h2(t){return e=>[t(e)]}function Tc(t){return typeof t=="object"&&("$el"in t||"$cmp"in t||"$formkit"in t)}function fo(t,e={}){return typeof t=="string"?Tc(e)||typeof e=="string"?e:t:Array.isArray(t)?Tc(e)?e:t:vs(t,e)}const f2=he("actions",()=>({$el:"div",if:"$actions"})),Ic=he("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"$type",name:"$node.props.altName || $node.name",disabled:"$option.attrs.disabled || $disabled",onInput:"$handlers.toggleChecked",checked:"$fns.eq($_value, $onValue)",onBlur:"$handlers.blur",value:"$: true",id:"$id","aria-describedby":{if:"$options.length",then:{if:"$option.help",then:'$: "help-" + $option.attrs.id',else:void 0},else:{if:"$help",then:'$: "help-" + $id',else:void 0}}}})),ib=he("optionHelp",()=>({$el:"div",if:"$option.help",attrs:{id:'$: "help-" + $option.attrs.id'}})),Sy=he("inner","span"),bc=he("label","span"),ob=he("option",()=>({$el:"li",for:["option","$options"],attrs:{"data-disabled":"$option.attrs.disabled || $disabled"}})),ab=he("options","ul"),Ac=he("wrapper",()=>({$el:"label",attrs:{"data-disabled":{if:"$options.length",then:void 0,else:"$disabled || undefined"},"data-checked":{if:"$options == undefined",then:"$fns.eq($_value, $onValue) || undefined",else:"$fns.isChecked($option.value) || undefined"}}})),d2=he("input",()=>({$el:"button",bind:"$attrs",attrs:{type:"$type",disabled:"$disabled",name:"$node.name",id:"$id"}})),p2=he("default",null),Rc=he("decorator",()=>({$el:"span",attrs:{"aria-hidden":"true"}})),lb=he("fieldset",()=>({$el:"fieldset",attrs:{id:"$id","aria-describedby":{if:"$help",then:'$: "help-" + $id',else:void 0}}})),m2=he("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"file",disabled:"$disabled",name:"$node.name",onChange:"$handlers.files",onBlur:"$handlers.blur",id:"$id","aria-describedby":"$describedBy"}})),g2=he("fileItem",()=>({$el:"li",for:["file","$value"]})),_2=he("fileList",()=>({$el:"ul",if:"$value.length",attrs:{"data-has-multiple":{if:"$value.length > 1",then:"true"}}})),y2=he("fileName",()=>({$el:"span",attrs:{class:"$classes.fileName"}})),Py=he("fileRemove",()=>({$el:"button",attrs:{type:"button",onClick:"$handlers.resetFiles"}})),v2=he("form",()=>({$el:"form",bind:"$attrs",attrs:{id:"$id",name:"$node.name",onSubmit:"$handlers.submit","data-loading":"$state.loading || undefined"}})),um=he("wrapper",null,!0),gr=he("help",()=>({$el:"div",if:"$help",attrs:{id:'$: "help-" + $id'}})),it=(t,e)=>he(`${t}Icon`,()=>{const n=`_raw${t.charAt(0).toUpperCase()}${t.slice(1)}Icon`;return{if:`$${t}Icon && $${n}`,$el:`${e||"span"}`,attrs:{class:`$classes.${t}Icon + " " + $classes.icon`,innerHTML:`$${n}`,onClick:`$handlers.iconClick(${t})`,for:{if:`${e==="label"}`,then:"$id"}}}})(),ki=he("inner","div"),Cu=he("label",()=>({$el:"label",if:"$label",attrs:{for:"$id"}})),cb=he("legend",()=>({$el:"legend",if:"$label"})),Hr=he("message",()=>({$el:"li",for:["message","$messages"],attrs:{key:"$message.key",id:"$id + '-' + $message.key","data-message-type":"$message.type"}})),qr=he("messages",()=>({$el:"ul",if:"$defaultMessagePlacement && $fns.length($messages)"})),E2=he("noFiles",()=>({$el:"span",if:"$value.length == 0"})),w2=he("optGroup",()=>({$el:"optgroup",bind:"$option.attrs",attrs:{label:"$option.group"}})),ky=he("option",()=>({$el:"option",bind:"$option.attrs",attrs:{class:"$classes.option",value:"$option.value",selected:"$fns.isSelected($option)"}})),Ny=he("options",()=>({$el:null,if:"$options.length",for:["option","$option.options || $options"]})),Ps=he("outer",()=>({$el:"div",attrs:{key:"$id","data-family":"$family || undefined","data-type":"$type","data-multiple":'$attrs.multiple || ($type != "select" && $options != undefined) || undefined',"data-disabled":'$: ($disabled !== "false" && $disabled) || undefined',"data-empty":"$state.empty || undefined","data-complete":"$state.complete || undefined","data-invalid":"$state.valid === false && $state.validationVisible || undefined","data-errors":"$state.errors || undefined","data-submitted":"$state.submitted || undefined","data-prefix-icon":"$_rawPrefixIcon !== undefined || undefined","data-suffix-icon":"$_rawSuffixIcon !== undefined || undefined","data-prefix-icon-click":"$onPrefixIconClick !== undefined || undefined","data-suffix-icon-click":"$onSuffixIconClick !== undefined || undefined"}})),_r=he("prefix",null),T2=he("input",()=>({$el:"select",bind:"$attrs",attrs:{id:"$id","data-placeholder":"$fns.showPlaceholder($_value, $placeholder)",disabled:"$disabled",class:"$classes.input",name:"$node.name",onChange:"$handlers.onChange",onInput:"$handlers.selectInput",onBlur:"$handlers.blur","aria-describedby":"$describedBy"}})),I2=he("submit",()=>({$cmp:"FormKit",bind:"$submitAttrs",props:{type:"submit",disabled:"$disabled",label:"$submitLabel"}})),yr=he("suffix",null),ub=he("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"$type",disabled:"$disabled",name:"$node.name",onInput:"$handlers.DOMInput",onBlur:"$handlers.blur",value:"$_value",id:"$id","aria-describedby":"$describedBy"}})),b2=he("input",()=>({$el:"textarea",bind:"$attrs",attrs:{disabled:"$disabled",name:"$node.name",onInput:"$handlers.DOMInput",onBlur:"$handlers.blur",value:"$_value",id:"$id","aria-describedby":"$describedBy"},children:"$initialValue"})),Fa=he("wrapper","div");function hb(t){return function(e,n){return e.prop==="options"&&Array.isArray(e.value)&&(e.value=e.value.map(r=>{var s;return!((s=r.attrs)===null||s===void 0)&&s.id?r:vs(r,{attrs:{id:`${t.props.id}-option-${tm(String(r.value))}`}})}),t.props.type==="checkbox"&&!Array.isArray(t.value)&&(t.isCreated?t.input([],!1):t.on("created",()=>{Array.isArray(t.value)||t.input([],!1)}))),n(e)}}function A2(t,e){const n=e.target;if(n instanceof HTMLInputElement){const r=Array.isArray(t.props.options)?Es(t.props.options,n.value):n.value;Array.isArray(t.props.options)&&t.props.options.length?Array.isArray(t._value)?t._value.some(s=>Pi(r,s))?t.input(t._value.filter(s=>!Pi(r,s))):t.input([...t._value,r]):t.input([r]):n.checked?t.input(t.props.onValue):t.input(t.props.offValue)}}function R2(t,e){var n,r;return(n=t.context)===null||n===void 0||n.value,(r=t.context)===null||r===void 0||r._value,Array.isArray(t._value)?t._value.some(s=>Pi(Es(t.props.options,e),s)):!1}function C2(t){t.on("created",()=>{var e,n;!((e=t.context)===null||e===void 0)&&e.handlers&&(t.context.handlers.toggleChecked=A2.bind(null,t)),!((n=t.context)===null||n===void 0)&&n.fns&&(t.context.fns.isChecked=R2.bind(null,t)),se(t.props,"onValue")||(t.props.onValue=!0),se(t.props,"offValue")||(t.props.offValue=!1)}),t.hook.prop(hb(t))}function ii(t,e){return n=>{n.props[`${t}Icon`]===void 0&&(n.props[`${t}Icon`]=e.startsWith("<svg")?e:`default:${e}`)}}function hm(t){t.on("created",()=>{"disabled"in t.props&&(t.props.disabled=dn(t.props.disabled),t.config.disabled=dn(t.props.disabled))}),t.hook.prop(({prop:e,value:n},r)=>(n=e==="disabled"?dn(n):n,r({prop:e,value:n}))),t.on("prop:disabled",({payload:e})=>{t.config.disabled=dn(e)})}function Rl(t,e){return n=>{n.store.set(Tn({key:t,type:"ui",value:e||t,meta:{localize:!0,i18nArgs:[n]}}))}}const ph=typeof window<"u";function fb(t){t.target instanceof HTMLElement&&t.target.hasAttribute("data-file-hover")&&t.target.removeAttribute("data-file-hover")}function Oy(t,e){e.target instanceof HTMLInputElement?t==="dragover"&&e.target.setAttribute("data-file-hover","true"):e.preventDefault(),t==="drop"&&fb(e)}function S2(t){Rl("noFiles","Select file")(t),Rl("removeAll","Remove all")(t),Rl("remove")(t),ph&&(window._FormKit_File_Drop||(window.addEventListener("dragover",Oy.bind(null,"dragover")),window.addEventListener("drop",Oy.bind(null,"drop")),window.addEventListener("dragleave",fb),window._FormKit_File_Drop=!0)),t.hook.input((e,n)=>n(Array.isArray(e)?e:[])),t.on("reset",()=>{if(t.props.id&&ph){const e=document.getElementById(t.props.id);e&&(e.value="")}}),t.on("created",()=>{Array.isArray(t.value)||t.input([],!1),t.context&&(t.context.handlers.resetFiles=e=>{if(e.preventDefault(),t.input([]),t.props.id&&ph){const n=document.getElementById(t.props.id);n&&(n.value=""),n==null||n.focus()}},t.context.handlers.files=e=>{var n,r;const s=[];if(e.target instanceof HTMLInputElement&&e.target.files){for(let i=0;i<e.target.files.length;i++){let o;(o=e.target.files.item(i))&&s.push({name:o.name,file:o})}t.input(s)}t.context&&(t.context.files=s),typeof((n=t.props.attrs)===null||n===void 0?void 0:n.onChange)=="function"&&((r=t.props.attrs)===null||r===void 0||r.onChange(e))})})}const Dy=Tn({key:"loading",value:!0,visible:!1});async function P2(t,e){const n=Math.random();if(t.props._submitNonce=n,e.preventDefault(),await t.settled,t.ledger.value("validating")&&(t.store.set(Dy),await t.ledger.settled("validating"),t.store.remove("loading"),t.props._submitNonce!==n))return;const r=s=>s.store.set(Tn({key:"submitted",value:!0,visible:!1}));if(t.walk(r),r(t),t.emit("submit-raw"),typeof t.props.onSubmitRaw=="function"&&t.props.onSubmitRaw(e,t),t.ledger.value("blocking"))typeof t.props.onSubmitInvalid=="function"&&t.props.onSubmitInvalid(t),t.props.incompleteMessage!==!1&&t.store.set(Tn({blocking:!1,key:"incomplete",meta:{localize:t.props.incompleteMessage===void 0,i18nArgs:[{node:t}],showAsMessage:!0},type:"ui",value:t.props.incompleteMessage||"Form incomplete."}));else if(typeof t.props.onSubmit=="function"){const s=t.props.onSubmit(t.hook.submit.dispatch(Ci(t.value)),t);if(s instanceof Promise){const i=t.props.disabled===void 0&&t.props.submitBehavior!=="live";i&&(t.props.disabled=!0),t.store.set(Dy),await s,i&&(t.props.disabled=!1),t.store.remove("loading")}}else e.target instanceof HTMLFormElement&&e.target.submit()}function k2(t){t.props.isForm=!0,t.ledger.count("validating",e=>e.key==="validating"),t.on("created",()=>{var e;!((e=t.context)===null||e===void 0)&&e.handlers&&(t.context.handlers.submit=P2.bind(null,t)),se(t.props,"actions")||(t.props.actions=!0)}),t.on("settled:blocking",()=>t.store.remove("incomplete"))}function N2(t){t.props.ignore===void 0&&(t.props.ignore=!0,t.parent=null)}function O2(t){t.on("created",()=>{t.context&&(t.context.initialValue=t.value||"")})}function db(t){if(typeof t.props.number>"u")return;const e=["number","range","hidden"].includes(t.props.type);t.hook.input((n,r)=>{if(n==="")return r(void 0);const s=t.props.number==="integer"?parseInt(n):parseFloat(n);return Number.isFinite(s)?r(s):r(e?void 0:n)})}function D2(t,e){e.target instanceof HTMLInputElement&&t.input(Es(t.props.options,e.target.value))}function x2(t,e){var n,r;return(n=t.context)===null||n===void 0||n.value,(r=t.context)===null||r===void 0||r._value,Pi(Es(t.props.options,e),t._value)}function M2(t){t.on("created",()=>{var e,n;Array.isArray(t.props.options)||Ss(350,{node:t,inputType:"radio"}),!((e=t.context)===null||e===void 0)&&e.handlers&&(t.context.handlers.toggleChecked=D2.bind(null,t)),!((n=t.context)===null||n===void 0)&&n.fns&&(t.context.fns.isChecked=x2.bind(null,t))}),t.hook.prop(hb(t))}let L2=0;function V2(t){t.sync&&t.plugins.add($2)}function $2(t){t.props.type==="radio"&&(t.props.altName=`${t.name}_${L2++}`)}function F2(t,e){if(Ru(e))return!1;t.context&&t.context.value;const n="__original"in e?e.__original:e.value;return Array.isArray(t._value)?t._value.some(r=>Pi(r,n)):(t._value===void 0||t._value===null&&!pb(t.props.options,null))&&e.attrs&&e.attrs["data-is-placeholder"]?!0:Pi(n,t._value)}function pb(t,e){return t.some(n=>Ru(n)?pb(n.options,e):("__original"in n?n.__original:n.value)===e)}async function U2(t,e){var n;typeof((n=t.props.attrs)===null||n===void 0?void 0:n.onChange)=="function"&&(await new Promise(r=>setTimeout(r,0)),await t.settled,t.props.attrs.onChange(e))}function j2(t,e){const n=e.target,r=n.hasAttribute("multiple")?Array.from(n.selectedOptions).map(s=>Es(t.props.options,s.value)):Es(t.props.options,n.value);t.input(r)}function xy(t,e){return t.some(n=>n.attrs&&n.attrs["data-is-placeholder"])?t:[{label:e,value:"",attrs:{hidden:!0,disabled:!0,"data-is-placeholder":"true"}},...t]}function mb(t){const e=t.length>0?t[0]:void 0;if(e)return Ru(e)?mb(e.options):"__original"in e?e.__original:e.value}function B2(t){t.on("created",()=>{var e,n,r;const s=dn((e=t.props.attrs)===null||e===void 0?void 0:e.multiple);!s&&t.props.placeholder&&Array.isArray(t.props.options)&&(t.hook.prop(({prop:i,value:o},a)=>(i==="options"&&(o=xy(o,t.props.placeholder)),a({prop:i,value:o}))),t.props.options=xy(t.props.options,t.props.placeholder)),s?t.value===void 0&&t.input([],!1):t.context&&!t.context.options&&(t.props.attrs=Object.assign({},t.props.attrs,{value:t._value}),t.on("input",({payload:i})=>{t.props.attrs=Object.assign({},t.props.attrs,{value:i})})),!((n=t.context)===null||n===void 0)&&n.handlers&&(t.context.handlers.selectInput=j2.bind(null,t),t.context.handlers.onChange=U2.bind(null,t)),!((r=t.context)===null||r===void 0)&&r.fns&&(t.context.fns.isSelected=F2.bind(null,t),t.context.fns.showPlaceholder=(i,o)=>{if(!Array.isArray(t.props.options))return!1;const a=t.props.options.some(l=>{if(l.attrs&&"data-is-placeholder"in l.attrs)return!1;const c="__original"in l?l.__original:l.value;return Ot(i,c)});return o&&!a?!0:void 0})}),t.hook.input((e,n)=>{var r,s,i;return!t.props.placeholder&&e===void 0&&Array.isArray((r=t.props)===null||r===void 0?void 0:r.options)&&t.props.options.length&&!dn((i=(s=t.props)===null||s===void 0?void 0:s.attrs)===null||i===void 0?void 0:i.multiple)&&(e=mb(t.props.options)),n(e)})}function Wf(t){return!!(js(t)&&t.if&&t.if.startsWith("$slots.")&&typeof t.then=="string"&&t.then.startsWith("$slots.")&&"else"in t)}function cr(t,e,n){const r=s=>{const i=e(s);if(n||Tc(i)&&"if"in i||Wf(i)){const o={if:t,then:i};return n&&(o.else=n(s)),o}else Wf(i)?Object.assign(i.else,{if:t}):Tc(i)&&Object.assign(i,{if:t});return i};return r._s=qi(),r}function oi(t,e){const n=r=>{const s=t({});return Wf(s)?(Array.isArray(s.else)||(s.else=fo(fo(s.else,e),t._s?r[t._s]:{})),s):fo(fo(s,e),t._s?r[t._s]:{})};return n._s=t._s,n}const My={schema:Ps(qr(Hr("$message.value")),Fa(d2(it("prefix"),_r(),p2("$label || $ui.submit.value"),yr(),it("suffix"))),gr("$help")),type:"input",family:"button",props:[],features:[Rl("submit"),N2],schemaMemoKey:"h6st4epl3j8"},W2={schema:Ps(cr("$options == undefined",Ac(Sy(_r(),Ic(),Rc(it("decorator")),yr()),oi(bc("$label"),{if:"$label"})),lb(cb("$label"),gr("$help"),ab(ob(Ac(Sy(_r(),oi(Ic(),{bind:"$option.attrs",attrs:{id:"$option.attrs.id",value:"$option.value",checked:"$fns.isChecked($option.value)"}}),Rc(it("decorator")),yr()),oi(bc("$option.label"),{if:"$option.label"})),ib("$option.help"))))),cr("$options == undefined && $help",gr("$help")),qr(Hr("$message.value"))),type:"input",family:"box",props:["options","onValue","offValue","optionsLoader"],features:[cm,C2,ii("decorator","checkboxDecorator")],schemaMemoKey:"qje02tb3gu8"},z2={schema:Ps(Fa(Cu("$label"),ki(it("prefix","label"),_r(),m2(),_2(g2(it("fileItem"),y2("$file.name"),cr("$value.length === 1",Py(it("fileRemove"),'$ui.remove.value + " " + $file.name')))),cr("$value.length > 1",Py("$ui.removeAll.value")),E2(it("noFiles"),"$ui.noFiles.value"),yr(),it("suffix"))),gr("$help"),qr(Hr("$message.value"))),type:"input",family:"text",props:[],features:[S2,ii("fileItem","fileItem"),ii("fileRemove","fileRemove"),ii("noFiles","noFiles")],schemaMemoKey:"9kqc4852fv8"},H2={schema:v2("$slots.default",qr(Hr("$message.value")),f2(I2())),type:"group",props:["actions","submit","submitLabel","submitAttrs","submitBehavior","incompleteMessage"],features:[k2,hm],schemaMemoKey:"5bg016redjo"},q2={schema:um("$slots.default"),type:"group",props:[],features:[hm]},K2={schema:ub(),type:"input",props:[],features:[db]},G2={schema:um("$slots.default"),type:"list",props:["sync","dynamic"],features:[hm,V2]},Q2={schema:um(),type:"input",props:[],features:[]},Y2={schema:Ps(cr("$options == undefined",Ac(ki(_r(),Ic(),Rc(it("decorator")),yr()),oi(bc("$label"),{if:"$label"})),lb(cb("$label"),gr("$help"),ab(ob(Ac(ki(_r(),oi(Ic(),{bind:"$option.attrs",attrs:{id:"$option.attrs.id",value:"$option.value",checked:"$fns.isChecked($option.value)"}}),Rc(it("decorator")),yr()),oi(bc("$option.label"),{if:"$option.label"})),ib("$option.help"))))),cr("$options == undefined && $help",gr("$help")),qr(Hr("$message.value"))),type:"input",family:"box",props:["options","onValue","offValue","optionsLoader"],features:[cm,M2,ii("decorator","radioDecorator")],schemaMemoKey:"qje02tb3gu8"},X2={schema:Ps(Fa(Cu("$label"),ki(it("prefix"),_r(),T2(cr("$slots.default",()=>"$slots.default",Ny(cr("$option.group",w2(Ny(ky("$option.label"))),ky("$option.label"))))),cr("$attrs.multiple !== undefined",()=>"",it("select")),yr(),it("suffix"))),gr("$help"),qr(Hr("$message.value"))),type:"input",props:["options","placeholder","optionsLoader"],features:[cm,B2,ii("select","select")],schemaMemoKey:"cb119h43krg"},J2={schema:Ps(Fa(Cu("$label"),ki(it("prefix","label"),_r(),b2(),yr(),it("suffix"))),gr("$help"),qr(Hr("$message.value"))),type:"input",props:[],features:[O2],schemaMemoKey:"b1n0td79m9g"},xt={schema:Ps(Fa(Cu("$label"),ki(it("prefix","label"),_r(),ub(),yr(),it("suffix"))),gr("$help"),qr(Hr("$message.value"))),type:"input",family:"text",props:[],features:[db],schemaMemoKey:"c3cc4kflsg"};var Z2=Object.freeze({__proto__:null,button:My,checkbox:W2,color:xt,date:xt,datetimeLocal:xt,email:xt,file:z2,form:H2,group:q2,hidden:K2,list:G2,meta:Q2,month:xt,number:xt,password:xt,radio:Y2,range:xt,search:xt,select:X2,submit:My,tel:xt,text:xt,textarea:J2,time:xt,url:xt,week:xt});const gb=function({value:e}){return["yes","on","1",1,!0,"true"].includes(e)};gb.skipEmpty=!1;const ej=function({value:t},e=!1){const n=Date.parse(e||new Date),r=Date.parse(String(t));return isNaN(r)?!1:r>n},tj=function({value:t},e="default"){const n={default:/^\p{L}+$/u,latin:/^[a-z]+$/i},r=se(n,e)?e:"default";return n[r].test(String(t))},nj=function({value:t},e="default"){const n={default:/^[\p{L} ]+$/u,latin:/^[a-z ]+$/i},r=se(n,e)?e:"default";return n[r].test(String(t))},rj=function({value:t},e="default"){const n={default:/^[0-9\p{L}]+$/u,latin:/^[0-9a-z]+$/i},r=se(n,e)?e:"default";return n[r].test(String(t))},sj=function({value:t},e=!1){const n=Date.parse(e||new Date),r=Date.parse(String(t));return isNaN(r)?!1:r<n},ij=function({value:e},n,r){if(!isNaN(e)&&!isNaN(n)&&!isNaN(r)){const s=1*e;n=Number(n),r=Number(r);const[i,o]=n<=r?[n,r]:[r,n];return s>=1*i&&s<=1*o}return!1},Ly=/(_confirm(?:ed)?)$/,oj=function(e,n,r="loose"){var s;n||(n=Ly.test(e.name)?e.name.replace(Ly,""):`${e.name}_confirm`);const i=(s=e.at(n))===null||s===void 0?void 0:s.value;return r==="strict"?e.value===i:e.value==i},aj=function({value:t},e="default"){const n={default:/\p{L}/u,latin:/[a-z]/i},r=se(n,e)?e:"default";return n[r].test(String(t))},lj=function({value:t},e="default"){const n={default:/[\p{L} ]/u,latin:/[a-z ]/i},r=se(n,e)?e:"default";return n[r].test(String(t))},cj=function({value:t},e="default"){const n={default:/[0-9\p{L}]/u,latin:/[0-9a-z]/i},r=se(n,e)?e:"default";return n[r].test(String(t))},uj=function({value:t},e="default"){const n={default:/\p{Ll}/u,latin:/[a-z]/},r=se(n,e)?e:"default";return n[r].test(String(t))},hj=function({value:e}){return/[0-9]/.test(String(e))},fj=function({value:t}){return/[!-/:-@[-`{-~]/.test(String(t))},dj=function({value:t},e="default"){const n={default:/\p{Lu}/u,latin:/[A-Z]/},r=se(n,e)?e:"default";return n[r].test(String(t))},pj=function({value:e},n,r){n=n instanceof Date?n.getTime():Date.parse(n),r=r instanceof Date?r.getTime():Date.parse(r);const s=e instanceof Date?e.getTime():Date.parse(String(e));if(n&&!r)r=n,n=Date.now();else if(!n||!s)return!1;return s>=n&&s<=r},mj=function({value:e},n){return n&&typeof n=="string"?vF(n).test(String(e)):!isNaN(Date.parse(String(e)))},gj=function({value:e}){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(e))},_j=function({value:e},...n){return typeof e=="string"&&n.length?n.some(r=>e.endsWith(r)):typeof e=="string"&&n.length===0},yj=function({value:e},...n){return n.some(r=>typeof r=="object"?Ot(r,e):r==e)},vj=function({value:e},n=0,r=1/0){n=parseInt(n),r=isNaN(parseInt(r))?1/0:parseInt(r);const s=n<=r?n:r,i=r>=n?r:n;if(typeof e=="string"||Array.isArray(e))return e.length>=s&&e.length<=i;if(e&&typeof e=="object"){const o=Object.keys(e).length;return o>=s&&o<=i}return!1},Ej=function({value:t},e="default"){const n={default:/^\p{Ll}+$/u,latin:/^[a-z]+$/},r=se(n,e)?e:"default";return n[r].test(String(t))},wj=function({value:e},...n){return n.some(r=>(typeof r=="string"&&r.substr(0,1)==="/"&&r.substr(-1)==="/"&&(r=new RegExp(r.substr(1,r.length-2))),r instanceof RegExp?r.test(String(e)):r===e))},Tj=function({value:e},n=10){return Array.isArray(e)?e.length<=n:Number(e)<=Number(n)},Ij=function({value:e},n=1){return Array.isArray(e)?e.length>=n:Number(e)>=Number(n)},bj=function({value:e},...n){return!n.some(r=>typeof r=="object"?Ot(r,e):r===e)},Aj=function({value:e}){return!isNaN(e)},_b=function(t,...e){return en(t.value)?e.map(r=>{var s;return(s=t.at(r))===null||s===void 0?void 0:s.value}).some(r=>!en(r)):!0};_b.skipEmpty=!1;const yb=function({value:e},n="default"){return n==="trim"&&typeof e=="string"?!en(e.trim()):!en(e)};yb.skipEmpty=!1;const Rj=function({value:e},...n){return typeof e=="string"&&n.length?n.some(r=>e.startsWith(r)):typeof e=="string"&&n.length===0},Cj=function({value:t}){return/^[!-/:-@[-`{-~]+$/.test(String(t))},Sj=function({value:t},e="default"){const n={default:/^\p{Lu}+$/u,latin:/^[A-Z]+$/},r=se(n,e)?e:"default";return n[r].test(String(t))},Pj=function({value:e},...n){try{const r=n.length?n:["http:","https:"],s=new URL(String(e));return r.includes(s.protocol)}catch{return!1}},kj=Object.freeze(Object.defineProperty({__proto__:null,accepted:gb,alpha:tj,alpha_spaces:nj,alphanumeric:rj,between:ij,confirm:oj,contains_alpha:aj,contains_alpha_spaces:lj,contains_alphanumeric:cj,contains_lowercase:uj,contains_numeric:hj,contains_symbol:fj,contains_uppercase:dj,date_after:ej,date_before:sj,date_between:pj,date_format:mj,email:gj,ends_with:_j,is:yj,length:vj,lowercase:Ej,matches:wj,max:Tj,min:Ij,not:bj,number:Aj,require_one:_b,required:yb,starts_with:Rj,symbol:Cj,uppercase:Sj,url:Pj},Symbol.toStringTag,{value:"Module"}));let pn,An=null,Cc,vb=!1,po=!1;const Nj=new Promise(t=>{Cc=()=>{vb=!0,t()}}),ur=typeof window<"u"&&typeof fetch<"u";pn=ur?getComputedStyle(document.documentElement):void 0;const qs={},mh={};function Oj(t,e,n,r){e&&Object.assign(qs,e),ur&&!po&&(pn!=null&&pn.getPropertyValue("--formkit-theme"))?(Cc(),po=!0):t&&!po&&ur?Dj(t):!po&&ur&&Cc();const s=function(o){var a,l;o.addProps(["iconLoader","iconLoaderUrl"]),o.props.iconHandler=Vy(!((a=o.props)===null||a===void 0)&&a.iconLoader?o.props.iconLoader:r,!((l=o.props)===null||l===void 0)&&l.iconLoaderUrl?o.props.iconLoaderUrl:n),Lj(o,o.props.iconHandler),o.on("created",()=>{var c;!((c=o==null?void 0:o.context)===null||c===void 0)&&c.handlers&&(o.context.handlers.iconClick=u=>{const h=`on${u.charAt(0).toUpperCase()}${u.slice(1)}IconClick`,f=o.props[h];if(f&&typeof f=="function")return d=>f(o,d)})})};return s.iconHandler=Vy(r,n),s}function Dj(t){if(!(!t||!ur||typeof getComputedStyle!="function")&&(po=!0,An=document.getElementById("formkit-theme"),t&&ur&&(!(pn!=null&&pn.getPropertyValue("--formkit-theme"))&&!An||An!=null&&An.getAttribute("data-theme")&&(An==null?void 0:An.getAttribute("data-theme"))!==t))){const n=`https://cdn.jsdelivr.net/npm/@formkit/themes@${Ec.startsWith("__")?"latest":Ec}/dist/${t}/theme.css`,r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.id="formkit-theme",r.setAttribute("data-theme",t),r.onload=()=>{pn=getComputedStyle(document.documentElement),Cc()},document.head.appendChild(r),r.href=n,An&&An.remove()}}function Vy(t,e){return n=>{if(typeof n!="string")return;if(n.startsWith("<svg"))return n;const r=n.startsWith("default:");n=r?n.split(":")[1]:n;const s=n in qs;let i;if(s)return qs[n];if(!mh[n]){if(i=xj(n),i=ur&&typeof i>"u"?Promise.resolve(i):i,i instanceof Promise)mh[n]=i.then(o=>!o&&typeof n=="string"&&!r?i=typeof t=="function"?t(n):Mj(n,e):o).then(o=>(typeof n=="string"&&(qs[r?`default:${n}`:n]=o),o));else if(typeof i=="string")return qs[r?`default:${n}`:n]=i,i}return mh[n]}}function xj(t){if(ur)return vb?$y(t):Nj.then(()=>$y(t))}function $y(t){const e=pn==null?void 0:pn.getPropertyValue(`--fk-icon-${t}`);if(e){const n=atob(e);if(n.startsWith("<svg"))return qs[t]=n,n}}function Mj(t,e){const n=Ec.startsWith("__")?"latest":Ec,r=typeof e=="function"?e(t):`https://cdn.jsdelivr.net/npm/@formkit/icons@${n}/dist/icons/${t}.svg`;if(ur)return fetch(`${r}`).then(async s=>{const i=await s.text();if(i.startsWith("<svg"))return i}).catch(s=>{console.error(s)})}function Lj(t,e){const n=/^[a-zA-Z-]+(?:-icon|Icon)$/;Object.keys(t.props).filter(s=>n.test(s)).forEach(s=>Vj(t,e,s))}function Vj(t,e,n){const r=t.props[n],s=e(r),i=`_raw${n.charAt(0).toUpperCase()}${n.slice(1)}`,o=`on${n.charAt(0).toUpperCase()}${n.slice(1)}Click`;if(t.addProps([i,o]),t.on(`prop:${n}`,$j),s instanceof Promise)return s.then(a=>{t.props[i]=a});t.props[i]=s}function $j(t){var e;const n=t.origin,r=t.payload,s=(e=n==null?void 0:n.props)===null||e===void 0?void 0:e.iconHandler,i=t.name.split(":")[1],o=`_raw${i.charAt(0).toUpperCase()}${i.slice(1)}`;if(s&&typeof s=="function"){const a=s(r);if(a instanceof Promise)return a.then(l=>{n.props[o]=l});n.props[o]=a}}const Fy={100:({data:t})=>`Only groups, lists, and forms can have children (${t.name}).`,101:({data:t})=>`You cannot directly modify the store (${t.name}). See: https://formkit.com/advanced/core#message-store`,102:({data:[t,e]})=>`You cannot directly assign node.${e} (${t.name})`,103:({data:[t]})=>`Schema expressions cannot start with an operator (${t})`,104:({data:[t,e]})=>`Schema expressions cannot end with an operator (${t} in "${e}")`,105:({data:t})=>`Invalid schema expression: ${t}`,106:({data:t})=>`Cannot submit because (${t}) is not in a form.`,107:({data:[t,e]})=>`Cannot set ${t.name} to non object value: ${e}`,108:({data:[t,e]})=>`Cannot set ${t.name} to non array value: ${e}`,300:({data:[t]})=>`Cannot set behavior prop to overscroll (on ${t.name} input) when options prop is a function.`,600:({data:t})=>`Unknown input type${typeof t.props.type=="string"?' "'+t.props.type+'"':""} ("${t.name}")`,601:({data:t})=>`Input definition${typeof t.props.type=="string"?' "'+t.props.type+'"':""} is missing a schema or component property (${t.name}).`},Uy={150:({data:t})=>`Schema function "${t}()" is not a valid function.`,151:({data:t})=>`No form element with id: ${t}`,152:({data:t})=>`No input element with id: ${t}`,350:({data:{node:t,inputType:e}})=>`Invalid options prop for ${t.name} input (${e}). See https://formkit.com/inputs/${e}`,650:'Schema "$get()" must use the id of an input to access.',651:({data:t})=>`Cannot setErrors() on "${t}" because no such id exists.`,652:({data:t})=>`Cannot clearErrors() on "${t}" because no such id exists.`,800:({data:t})=>`${t} is deprecated.`},Fj=(t,e)=>{if(t.code in Fy){const n=Fy[t.code];t.message=typeof n=="function"?n(t):n}return e(t)};let jy=!1;function Uj(){jy||(rm(Fj),sm(jj),jy=!0)}const jj=(t,e)=>{if(t.code in Uy){const n=Uy[t.code];t.message=typeof n=="function"?n(t):n}return e(t)},Bj=typeof window>"u",gh=new Map;function Wj(t,e){var n;!Bj||!t||(gh.has(t)||gh.set(t,new Set),(n=gh.get(t))===null||n===void 0||n.add(e))}const Eb=typeof window>"u",No={},ai={};let kt;const er=new WeakMap,zj="__raw__",Hj=/[a-zA-Z0-9\-][cC]lass$/;function qj(t,e){const n=je(null);if(t==="get"){const s={};return n.value=Kj.bind(null,s),n}const r=t.split(".");return Xn(()=>{n.value=fm(He(e)?e.value:e,r)}),n}function fm(t,e){if(Array.isArray(t)){for(const s of t){const i=s!==!1&&fm(s,e);if(i!==void 0)return i}return}let n,r=t;for(const s in e){const i=e[s];if(typeof r!="object"||r===null){n=void 0;break}const o=r[i];if(Number(s)===e.length-1&&o!==void 0){n=typeof o=="function"?o.bind(r):o;break}r=o}return n}function Kj(t,e){if(typeof e!="string")return Ss(650);if(e in t||(t[e]=je(void 0)),t[e].value===void 0){t[e].value=null;const n=Va(e);n&&(t[e].value=n.context),HF(e,({payload:r})=>{t[e].value=$a(r)?r.context:r})}return t[e].value}function By(t,e,n){function r(d,m){const p=h(rn(m.if),{if:!0}),_=c(d,m.then),v=m.else?c(d,m.else):null;return[p,_,v]}function s(d,m){var p,_;const v=h(rn(d.if));let w=()=>m,I=()=>m;return typeof d.then=="object"?I=i(d.then,void 0):typeof d.then=="string"&&(!((p=d.then)===null||p===void 0)&&p.startsWith("$"))?I=h(rn(d.then)):I=()=>d.then,se(d,"else")&&(typeof d.else=="object"?w=i(d.else):typeof d.else=="string"&&(!((_=d.else)===null||_===void 0)&&_.startsWith("$"))?w=h(rn(d.else)):w=()=>d.else),()=>v()?I():w()}function i(d,m,p={}){const _=new Set(Object.keys(d||{})),v=m?h(rn(m)):()=>({}),w=[I=>{const E=v();for(const x in E)_.has(x)||(I[x]=E[x])}];if(d){if(js(d))return s(d,p);for(let I in d){const E=d[I];let x;const b=typeof E=="string";I.startsWith(zj)?(I=I.substring(7),x=()=>E):b&&E.startsWith("$")&&E.length>1&&!(E.startsWith("$reset")&&Hj.test(I))?x=h(rn(E)):typeof E=="object"&&js(E)?x=s(E,void 0):typeof E=="object"&&Ri(E)?x=i(E):x=()=>E,w.push(C=>{C[I]=x()})}}return()=>{const I=Array.isArray(d)?[]:{};return w.forEach(E=>E(I)),I}}function o(d,m){let p=null,_=()=>null,v=!1,w=null,I=null,E=null,x=!1;const b=$U(m);if($f(b)?(p=b.$el,_=b.$el!=="text"?i(b.attrs,b.bind):()=>null):Ff(b)?(typeof b.$cmp=="string"?se(d,b.$cmp)?p=d[b.$cmp]:(p=b.$cmp,x=!0):p=b.$cmp,_=i(b.props,b.bind)):js(b)&&([v,w,I]=r(d,b)),!js(b)&&"if"in b?v=h(rn(b.if)):!js(b)&&p===null&&(v=()=>!0),"children"in b&&b.children)if(typeof b.children=="string")if(b.children.startsWith("$slots."))p=p==="text"?"slot":p,w=h(rn(b.children));else if(b.children.startsWith("$")&&b.children.length>1){const C=h(rn(b.children));w=()=>String(C())}else w=()=>String(b.children);else if(Array.isArray(b.children))w=c(d,b.children);else{const[C,A,L]=r(d,b.children);w=W=>C&&C()?A&&A(W):L&&L(W)}if(Ff(b))if(w){const C=w;w=A=>({default(L,W){var K,_e,Z,We;const Ke=kt;W&&(kt=W),L&&((K=er.get(kt))===null||K===void 0||K.unshift(L)),A&&((_e=er.get(kt))===null||_e===void 0||_e.unshift(A));const ee=C(A);return L&&((Z=er.get(kt))===null||Z===void 0||Z.shift()),A&&((We=er.get(kt))===null||We===void 0||We.shift()),kt=Ke,ee}}),w.slot=!0}else w=()=>({});if("for"in b&&b.for){const C=b.for.length===3?b.for[2]:b.for[1];E=[typeof C=="string"&&C.startsWith("$")?h(rn(C)):()=>C,b.for[0],b.for.length===3?String(b.for[1]):null]}return[v,p,_,w,I,E,x]}function a(d,m){const p=d(m),_=kt;return Object.keys(p).reduce((v,w)=>{const I=p&&p[w];return v[w]=E=>I&&I(E,_)||null,v},{})}function l(d,m){const[p,_,v,w,I,E,x]=o(d,m);let b=C=>{if(p&&_===null&&w)return p()?w(C):I&&I(C);if(_&&(!p||p())){if(_==="text"&&w)return xl(String(w()));if(_==="slot"&&w)return w(C);const A=x?Nv(_):_,L=w!=null&&w.slot?a(w,C):null;return Fo(A,v(),L||(w?w(C):[]))}return typeof I=="function"?I(C):I};if(E){const C=b,[A,L,W]=E;b=()=>{const K=A(),_e=Number.isFinite(K)?Array(Number(K)).fill(0).map((ee,ie)=>ie):K,Z=[];if(typeof _e!="object")return null;const We=er.get(kt)||[],Ke=Array.isArray(_e);for(const ee in _e){if(Ke&&ee in Array.prototype)continue;const ie=Object.defineProperty({...We.reduce((fe,et)=>fe.__idata?{...fe,...et}:et,{}),[L]:_e[ee],...W!==null?{[W]:Ke?Number(ee):ee}:{}},"__idata",{enumerable:!1,value:!0});We.unshift(ie),Z.push(C.bind(null,ie)()),We.shift()}return Z}}return b}function c(d,m){if(Array.isArray(m)){const _=m.map(l.bind(null,d));return v=>_.map(w=>w(v))}const p=l(d,m);return _=>p(_)}const u=[];function h(d,m={}){const p=new WeakMap;return u.push((_,v)=>{p.set(v,d.provide(w=>_(w,m)))}),()=>p.get(kt)()}function f(d,m){var p;n??(n=JSON.stringify(e));const[_,v]=se(No,n)?No[n]:[c(t,e),u];return Eb||((p=ai[n])!==null&&p!==void 0||(ai[n]=0),ai[n]++,No[n]=[_,v]),v.forEach(w=>{w(d,m)}),()=>(kt=m,_())}return f}function wb(t,e){const n=er.get(kt)||[];let r;return n.length&&(r=fm(n,t.split("."))),r===void 0?e:r}function Gj(t,e){return new Proxy(t,{get(...n){let r;const s=n[1];if(typeof s=="string"){const i=kt;kt=e,r=wb(s,void 0),kt=i}return r!==void 0?r:Reflect.get(...n)}})}function Wy(t,e,n){return t((r,s={})=>r.reduce((i,o)=>{if(o.startsWith("slots.")){const a=o.substring(6),l=()=>e.slots&&se(e.slots,a)&&typeof e.slots[a]=="function";if(s.if)i[o]=l;else if(e.slots){const c=Gj(e,n);i[o]=()=>l()?e.slots[a](c):null}}else{const a=qj(o,e);i[o]=()=>wb(o,a.value)}return i},{}),n)}function zy(t,e,n){if(e??(e=JSON.stringify(t)),ai[e]--,ai[e]===0){delete ai[e];const[,r]=No[e];delete No[e],r.length=0}er.delete(n)}const Tb=ws({name:"FormKitSchema",props:{schema:{type:[Array,Object],required:!0},data:{type:Object,default:()=>({})},library:{type:Object,default:()=>({})},memoKey:{type:String,required:!1}},setup(t,e){var n;const r=Vo();let s={};er.set(s,[]);let i=By(t.library,t.schema,t.memoKey),o,a;Eb||Zt(()=>t.schema,(c,u)=>{var h;const f=s;s={},er.set(s,[]),i=By(t.library,t.schema,t.memoKey),o=Wy(i,a,s),c===u&&((h=r==null?void 0:r.proxy)===null||h===void 0?void 0:h.$forceUpdate)(),zy(t.schema,t.memoKey,f)},{deep:!0}),Xn(()=>{var c;a=Object.assign(tr((c=t.data)!==null&&c!==void 0?c:{}),{slots:e.slots}),e.slots,o=Wy(i,a,s)});function l(){zy(t.schema,t.memoKey,s),a.node&&a.node.destroy(),a.slots=null,a=null,o=null}return hd(l),Wj((n=Vo())===null||n===void 0?void 0:n.appContext.app,l),()=>o?o():null}}),Qj=typeof window>"u",Hy=Symbol("FormKitParent");function Yj(t,e){const n=rB(t,e);if(n.props.definition||qt(600,n),n.props.definition.component)return()=>{var l;return Fo((l=n.props.definition)===null||l===void 0?void 0:l.component,{context:n.context},{...e.slots})};const r=je([]);let s=n.props.definition.schemaMemoKey;const i=()=>{var l,c;const u=(c=(l=n.props)===null||l===void 0?void 0:l.definition)===null||c===void 0?void 0:c.schema;u||qt(601,n),typeof u=="function"?(r.value=u({...t.sectionsSchema}),(s&&t.sectionsSchema||"memoKey"in u&&typeof u.memoKey=="string")&&(s=(s??(u==null?void 0:u.memoKey))+JSON.stringify(t.sectionsSchema))):r.value=u};i(),Qj||n.on("schema",()=>{s+="♻️",i()}),e.emit("node",n);const o=n.props.definition.library,a={FormKit:ua(Ib),...o};return e.expose({node:n}),()=>Fo(Tb,{schema:r.value,data:n.context,library:a,memoKey:s},{...e.slots})}const Ib=ws(Yj,{props:u2,inheritAttrs:!1}),Xj=Symbol();function Jj(t,e){return t.component(e.alias||"FormKit",Ib).component(e.schemaAlias||"FormKitSchema",Tb),{get:Va,setLocale:n=>{var r;!((r=e.config)===null||r===void 0)&&r.rootConfig&&(e.config.rootConfig.locale=n)},clearErrors:jU,setErrors:UU,submit:F0,reset:U0}}const bb=Symbol.for("FormKitOptions"),Zj=Symbol.for("FormKitConfig"),eB={install(t,e){const n=Object.assign({alias:"FormKit",schemaAlias:"FormKitSchema"},typeof e=="function"?e():e),r=qF(n.config||{});n.config={rootConfig:r},t.config.globalProperties.$formkit=Jj(t,n),t.provide(bb,n),t.provide(Zj,r)}},tB=typeof window<"u",_h=["help","label","ignore","disabled","preserve",/^preserve(-e|E)rrors/,/^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,/^[a-zA-Z-]+(?:-class|Class)$/,"prefixIcon","suffixIcon",/^[a-zA-Z-]+(?:-icon|Icon)$/];function qy(t,e){e.classes&&Object.keys(e.classes).forEach(n=>{typeof n=="string"&&(t.props[`_${n}Class`]=e.classes[n],ko(e.classes[n])&&n==="inner"&&Object.values(e.classes[n]))})}function nB(t){return t?["Submit","SubmitRaw","SubmitInvalid"].reduce((n,r)=>{const s=`on${r}`;return s in t&&typeof t[s]=="function"&&(n[s]=t[s]),n},{}):{}}function rB(t,e,n={}){var r;const s=Object.assign({},Vt(bb)||{},n),i=Vt(Xj,je(tB?document:void 0)),o=Vo(),a=nB(o==null?void 0:o.vnode.props),l=["modelValue","model-value"].some(b=>{var C;return b in((C=o==null?void 0:o.vnode.props)!==null&&C!==void 0?C:{})});let c=!1;Cv(()=>{c=!0});const u=t.modelValue!==void 0?t.modelValue:fn(e.attrs.value);function h(){var b;const C={...Ls(t),...a,type:(b=t.type)!==null&&b!==void 0?b:"text",__root:i.value,__slots:e.slots},A=Ey(Ls(e.attrs),_h);A.key||(A.key=qi()),C.attrs=A;const L=wy(Ls(e.attrs),_h);for(const K in L)C[si(K)]=L[K];const W={props:{}};return qy(W,t),Object.assign(C,W.props),typeof C.type!="string"&&(C.definition=C.type,delete C.type),C}const f=h(),d=f.ignore?null:t.parent||Vt(Hy,null),m=LU(vs(s||{},{name:t.name||void 0,value:u,parent:d,plugins:(s.plugins||[]).concat((r=t.plugins)!==null&&r!==void 0?r:[]),config:t.config||{},props:f,index:t.index,sync:!!dn(e.attrs.sync||e.attrs.dynamic)},!1,!0));m.props.definition||qt(600,m);const p=je(new Set(m.props.definition.props||[]));m.on("added-props",({payload:b})=>{Array.isArray(b)&&b.forEach(C=>p.value.add(C))});const _=wt(()=>_h.concat([...p.value]).reduce((b,C)=>(typeof C=="string"?(b.push(si(C)),b.push(x0(C))):b.push(C),b),[]));Xn(()=>qy(m,t));const v=Ls(t);for(const b in v)Zt(()=>t[b],()=>{t[b]!==void 0&&(m.props[b]=t[b])});Xn(()=>{m.props.__root=i.value});const w=new Set,I=Ls(e.attrs);Xn(()=>{E(wy(I,_.value))});function E(b){w.forEach(C=>{C(),w.delete(C)});for(const C in b){const A=si(C);w.add(Zt(()=>e.attrs[C],()=>{m.props[A]=e.attrs[C]}))}}if(Xn(()=>{const b=Ey(Ls(e.attrs),_.value);"multiple"in b&&(b.multiple=dn(b.multiple)),typeof b.onBlur=="function"&&(b.onBlur=AF(b.onBlur)),m.props.attrs=Object.assign({},m.props.attrs||{},b)}),Xn(()=>{var b;const C=((b=t.errors)!==null&&b!==void 0?b:[]).map(A=>Tn({key:tm(A),type:"error",value:A,meta:{source:"prop"}}));m.store.apply(C,A=>A.type==="error"&&A.meta.source==="prop")}),m.type!=="input"){const b=`${m.name}-prop`;Xn(()=>{var C;const A=(C=t.inputErrors)!==null&&C!==void 0?C:{},L=Object.keys(A);L.length||m.clearErrors(!0,b);const W=L.reduce((K,_e)=>{let Z=A[_e];return typeof Z=="string"&&(Z=[Z]),Array.isArray(Z)&&(K[_e]=Z.map(We=>Tn({key:We,type:"error",value:We,meta:{source:b}}))),K},{});m.store.apply(W,K=>K.type==="error"&&K.meta.source===b)})}Xn(()=>Object.assign(m.config,t.config)),m.type!=="input"&&go(Hy,m);let x;return m.on("modelUpdated",()=>{var b,C;e.emit("inputRaw",(b=m.context)===null||b===void 0?void 0:b.value,m),c&&e.emit("input",(C=m.context)===null||C===void 0?void 0:C.value,m),l&&m.context&&(x=fn(m.value),e.emit("update:modelValue",xf(m.value)))}),l&&(Zt(yA(t,"modelValue"),b=>{Ot(x,b)||m.input(b,!1)},{deep:!0}),m.value!==u&&m.emit("modelUpdated")),Sv(()=>m.destroy()),m}const sB=function(e){e.ledger.count("blocking",A=>A.blocking);const n=je(!e.ledger.value("blocking"));e.ledger.count("errors",A=>A.type==="error");const r=je(!!e.ledger.value("errors"));let s=!1;od(()=>{s=!0});const i=tr(e.store.reduce((A,L)=>(L.visible&&(A[L.key]=L),A),{})),o=je(e.props.validationVisibility||(e.props.type==="checkbox"?"dirty":"blur"));e.on("prop:validationVisibility",({payload:A})=>{o.value=A});const a=je(o.value==="live"),l=je(e.children.map(A=>A.uid)),c=wt(()=>{if(!I.state)return!1;if(I.state.submitted)return!0;if(!a.value&&!I.state.settled)return!1;switch(o.value){case"live":return!0;case"blur":return I.state.blurred;case"dirty":return I.state.dirty;default:return!1}}),u=wt(()=>I&&h.value?n.value&&!r.value:I.state.dirty&&!en(I.value)),h=je(Array.isArray(e.props.parsedRules)&&e.props.parsedRules.length>0);e.on("prop:parsedRules",({payload:A})=>{h.value=Array.isArray(A)&&A.length>0});const f=wt(()=>{const A={};for(const L in i){const W=i[L];(W.type!=="validation"||c.value)&&(A[L]=W)}return A}),d=tr(e.store.reduce((A,L)=>(L.type==="ui"&&L.visible&&(A[L.key]=L),A),{})),m=tr({}),p=new Proxy(m,{get(...A){const[L,W]=A;let K=Reflect.get(...A);return!K&&typeof W=="string"&&!se(L,W)&&!W.startsWith("__v")&&ca(e).watch(Z=>{const We=typeof Z.config.rootClasses=="function"?Z.config.rootClasses(W,Z):{},Ke=Z.config.classes?Al(W,Z,Z.config.classes[W]):{},ee=Al(W,Z,Z.props[`_${W}Class`]),ie=Al(W,Z,Z.props[`${W}Class`]);K=FU(Z,W,We,Ke,ee,ie),L[W]=K??""}),K}}),_=wt(()=>{const A=[];I.help&&A.push(`help-${e.props.id}`);for(const L in f.value)A.push(`${e.props.id}-${L}`);return A.length?A.join(" "):void 0}),v=je(e.value),w=je(e.value),I=tr({_value:w,attrs:e.props.attrs,disabled:e.props.disabled,describedBy:_,fns:{length:A=>Object.keys(A).length,number:A=>Number(A),string:A=>String(A),json:A=>JSON.stringify(A),eq:Ot},handlers:{blur:A=>{e&&(e.store.set(Tn({key:"blurred",visible:!1,value:!0})),typeof e.props.attrs.onBlur=="function"&&e.props.attrs.onBlur(A))},touch:()=>{var A;const L=I.dirtyBehavior==="compare";if(!((A=e.store.dirty)===null||A===void 0)&&A.value&&!L)return;const W=!Ot(e.props._init,e._value);!W&&!L||e.store.set(Tn({key:"dirty",visible:!1,value:W}))},DOMInput:A=>{e.input(A.target.value),e.emit("dom-input-event",A)}},help:e.props.help,id:e.props.id,items:l,label:e.props.label,messages:f,node:ua(e),options:e.props.options,defaultMessagePlacement:!0,slots:e.props.__slots,state:{blurred:!1,complete:u,dirty:!1,empty:en(v),submitted:!1,settled:e.isSettled,valid:n,errors:r,rules:h,validationVisible:c},type:e.props.type,family:e.props.family,ui:d,value:v,classes:p});e.on("created",()=>{Ot(I.value,e.value)||(w.value=e.value,v.value=e.value,Ka(v),Ka(w)),(async()=>(await e.settled,e&&(e.props._init=fn(e.value))))()}),e.on("settled",({payload:A})=>{I.state.settled=A});function E(A){A.forEach(L=>{L=si(L),se(I,L)||(I[L]=e.props[L]),e.on(`prop:${L}`,({payload:W})=>{I[L]=W})})}E((()=>{const A=["__root","help","label","disabled","options","type","attrs","preserve","preserveErrors","id","dirtyBehavior"],L=/^[a-zA-Z-]+(?:-icon|Icon)$/,W=Object.keys(e.props).filter(K=>L.test(K));return A.concat(W)})());function b(A){A.props&&E(A.props)}e.props.definition&&b(e.props.definition),e.on("added-props",({payload:A})=>E(A)),e.on("input",({payload:A})=>{e.type!=="input"&&!He(A)&&!Or(A)?w.value=xf(A):(w.value=A,Ka(w))}),e.on("commitRaw",({payload:A})=>{e.type!=="input"&&!He(A)&&!Or(A)?v.value=w.value=xf(A):(v.value=w.value=A,Ka(v)),e.emit("modelUpdated")}),e.on("commit",({payload:A})=>{(!I.state.dirty||I.dirtyBehavior==="compare")&&e.isCreated&&s&&I.handlers.touch(),u&&e.type==="input"&&r.value&&!dn(e.props.preserveErrors)&&e.store.filter(L=>{var W;return!(L.type==="error"&&((W=L.meta)===null||W===void 0?void 0:W.autoClear)===!0)}),e.type==="list"&&e.sync&&(l.value=e.children.map(L=>L.uid)),I.state.empty=en(A)});const C=async A=>{A.type==="ui"&&A.visible&&!A.meta.showAsMessage?d[A.key]=A:A.visible?i[A.key]=A:A.type==="state"&&(I.state[A.key]=!!A.value)};e.on("message-added",A=>C(A.payload)),e.on("message-updated",A=>C(A.payload)),e.on("message-removed",({payload:A})=>{delete d[A.key],delete i[A.key],delete I.state[A.key]}),e.on("settled:blocking",()=>{n.value=!0}),e.on("unsettled:blocking",()=>{n.value=!1}),e.on("settled:errors",()=>{r.value=!1}),e.on("unsettled:errors",()=>{r.value=!0}),Zt(c,A=>{A&&(a.value=!0)}),e.context=I,e.emit("context",e,!1),e.on("destroyed",()=>{e.context=void 0,e=null})},iB=(t={})=>{Uj();const{rules:e={},locales:n={},inputs:r={},messages:s={},locale:i=void 0,theme:o=void 0,iconLoaderUrl:a=void 0,iconLoader:l=void 0,icons:c={},...u}=t,h=BU({...kj,...e||{}}),f=l2(vs({en:s2,...n||{}},s)),d=c2(Z2,r),m=Oj(o,c,a,l);return vs({plugins:[d,m,sB,f,h],...i?{config:{locale:i}}:{}},u||{},!0)},oB={apiKey:"AIzaSyCS6jfWPaS9ULRtbGaVcgWGdi61SYZ5QNA",authDomain:"elections-86b8b.firebaseapp.com",projectId:"elections-86b8b",storageBucket:"elections-86b8b.appspot.com",messagingSenderId:"369687186588",appId:"1:369687186588:web:1733816fba13f51828b159",measurementId:"G-JXKXHVH0J1"},Ab=mE(oB),yh=HV(Ab),Ua=qR(iF);Ua.use(YR());Ua.use(mF);Ua.use(H$,{firebaseApp:Ab,modules:[W$()]});Ua.use(eB,iB({theme:"genesis",locales:{pl:a2},locale:"pl"}));Ua.mount("#app");export{em as _,aB as a,Jn as c,Sn as o};
