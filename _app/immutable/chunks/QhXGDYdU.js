import"./DsnmJJEf.js";import{b as be,h as z,a as ae,a_ as Be,c as me,d as xe,f as je,s as Fe,g as Y,U as Oe,p as _e,a$ as Ae,E as we,b0 as qe,an as Le,b1 as We,ap as Pe,J as ue,I as ve,R as ye,K as He,aA as Re,b2 as fe,b3 as De,b4 as Ge,e as Ke,b5 as Qe,b6 as ke,Z as Ue,q as Ze,o as S,b7 as Je,u as Ve,b8 as Xe,b9 as Ye,i as q,a7 as et,l as W,m as y,n as L,z as m,B as T,A as b,j as G,k as K,N as w,a4 as $e,ba as tt,a1 as J,a3 as Ce,x as N,a2 as U,Q as F,D as ie,y as P,O as Ie,C as re,aW as at,a8 as he}from"./7jZ7zA9w.js";import{p as k,r as V,s as de,i as H}from"./DhpeYoMj.js";import{b as se,e as Me,i as Ne,s as ee,f as oe,a as Se}from"./B9fcM2bj.js";function rt(t,e,s){z&&ae();var a=t,o=Oe,n,i,l=null,f=Be;function r(){n&&_e(n),l!==null&&(l.lastChild.remove(),a.before(l),l=null),n=i}be(()=>{if(f(o,o=e())){var v=a,g=Fe();g&&(l=document.createDocumentFragment(),l.append(v=me())),i=xe(()=>s(v)),g?je.add_callback(r):r()}}),z&&(a=Y)}function nt(t,e,s,a,o){z&&ae();var n=e.$$slots?.[s],i=!1;n===!0&&(n=e.children,i=!0),n===void 0||n(t,i?()=>a:a)}function ot(t,e,s,a,o,n){let i=z;z&&ae();var l,f,r=null;z&&Y.nodeType===Ae&&(r=Y,ae());var v=z?Y:t,g;be(()=>{const d=e()||null;var h=s||d==="svg"?qe:null;d!==l&&(g&&(d===null?_e(g,()=>{g=null,f=null}):d===f?He(g):(Re(g),fe(!1))),d&&d!==f&&(g=xe(()=>{if(r=z?r:h?document.createElementNS(h,d):document.createElement(d),Le(r,r),a){z&&We(d)&&r.append(document.createComment(""));var _=z?Pe(r):r.appendChild(me());z&&(_===null?ue(!1):ve(_)),a(r,_)}ye.nodes_end=r,v.before(r)})),l=d,l&&(f=l),fe(!0))},we),i&&(ue(!0),ve(v))}const it=()=>performance.now(),j={tick:t=>requestAnimationFrame(t),now:()=>it(),tasks:new Set};function Ee(){const t=j.now();j.tasks.forEach(e=>{e.c(t)||(j.tasks.delete(e),e.f())}),j.tasks.size!==0&&j.tick(Ee)}function st(t){let e;return j.tasks.size===0&&j.tick(Ee),{promise:new Promise(s=>{j.tasks.add(e={c:t,f:s})}),abort(){j.tasks.delete(e)}}}function X(t,e){ke(()=>{t.dispatchEvent(new CustomEvent(e))})}function lt(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function ge(t){const e={},s=t.split(";");for(const a of s){const[o,n]=a.split(":");if(!o||n===void 0)break;const i=lt(o.trim());e[i]=n.trim()}return e}const dt=t=>t;function Z(t,e,s,a){var o=(t&Xe)!==0,n=(t&Ye)!==0,i=o&&n,l=(t&Qe)!==0,f=i?"both":o?"in":"out",r,v=e.inert,g=e.style.overflow,d,h;function _(){return ke(()=>r??=s()(e,a?.()??{},{direction:f}))}var x={is_global:l,in(){if(e.inert=v,!o){h?.abort(),h?.reset?.();return}n||d?.abort(),X(e,"introstart"),d=le(e,_(),h,1,()=>{X(e,"introend"),d?.abort(),d=r=void 0,e.style.overflow=g})},out($){if(!n){$?.(),r=void 0;return}e.inert=!0,X(e,"outrostart"),h=le(e,_(),d,0,()=>{X(e,"outroend"),$?.()})},stop:()=>{d?.abort(),h?.abort()}},c=ye;if((c.transitions??=[]).push(x),o&&Je){var u=l;if(!u){for(var p=c.parent;p&&(p.f&we)!==0;)for(;(p=p.parent)&&(p.f&De)===0;);u=!p||(p.f&Ge)!==0}u&&Ke(()=>{Ve(()=>x.in())})}}function le(t,e,s,a,o){var n=a===1;if(Ue(e)){var i,l=!1;return Ze(()=>{if(!l){var c=e({direction:n?"in":"out"});i=le(t,c,s,a,o)}}),{abort:()=>{l=!0,i?.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(s?.deactivate(),!e?.duration)return o(),{abort:S,deactivate:S,reset:S,t:()=>a};const{delay:f=0,css:r,tick:v,easing:g=dt}=e;var d=[];if(n&&s===void 0&&(v&&v(0,1),r)){var h=ge(r(0,1));d.push(h,h)}var _=()=>1-a,x=t.animate(d,{duration:f,fill:"forwards"});return x.onfinish=()=>{x.cancel();var c=s?.t()??1-a;s?.abort();var u=a-c,p=e.duration*Math.abs(u),$=[];if(p>0){var O=!1;if(r)for(var R=Math.ceil(p/16.666666666666668),C=0;C<=R;C+=1){var I=c+u*g(C/R),E=ge(r(I,1-I));$.push(E),O||=E.overflow==="hidden"}O&&(t.style.overflow="hidden"),_=()=>{var B=x.currentTime;return c+u*g(B/p)},v&&st(()=>{if(x.playState!=="running")return!1;var B=_();return v(B,1-B),!0})}x=t.animate($,{duration:p,fill:"forwards"}),x.onfinish=()=>{_=()=>a,v?.(a,1-a),o()}},{abort:()=>{x&&(x.cancel(),x.effect=null,x.onfinish=S)},deactivate:()=>{o=S},reset:()=>{a===0&&v?.(1,0)},t:()=>_()}}const ct=t=>t;function ze(t){const e=t-1;return e*e*e+1}function pe(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function te(t,{delay:e=0,duration:s=400,easing:a=ct}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:s,easing:a,css:n=>`opacity: ${n*o}`}}function Pt(t,{delay:e=0,duration:s=400,easing:a=ze,x:o=0,y:n=0,opacity:i=0}={}){const l=getComputedStyle(t),f=+l.opacity,r=l.transform==="none"?"":l.transform,v=f*(1-i),[g,d]=pe(o),[h,_]=pe(n);return{delay:e,duration:s,easing:a,css:(x,c)=>`
			transform: ${r} translate(${(1-x)*g}${d}, ${(1-x)*h}${_});
			opacity: ${f-v*c}`}}function ut(t,{delay:e=0,duration:s=400,easing:a=ze,axis:o="y"}={}){const n=getComputedStyle(t),i=+n.opacity,l=o==="y"?"height":"width",f=parseFloat(n[l]),r=o==="y"?["top","bottom"]:["left","right"],v=r.map(u=>`${u[0].toUpperCase()}${u.slice(1)}`),g=parseFloat(n[`padding${v[0]}`]),d=parseFloat(n[`padding${v[1]}`]),h=parseFloat(n[`margin${v[0]}`]),_=parseFloat(n[`margin${v[1]}`]),x=parseFloat(n[`border${v[0]}Width`]),c=parseFloat(n[`border${v[1]}Width`]);return{delay:e,duration:s,easing:a,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*i};${l}: ${u*f}px;padding-${r[0]}: ${u*g}px;padding-${r[1]}: ${u*d}px;margin-${r[0]}: ${u*h}px;margin-${r[1]}: ${u*_}px;border-${r[0]}-width: ${u*x}px;border-${r[1]}-width: ${u*c}px;min-${l}: 0`}}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const vt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ft=et("<svg><!><!></svg>");function ce(t,e){q(e,!0);const s=k(e,"color",3,"currentColor"),a=k(e,"size",3,24),o=k(e,"strokeWidth",3,2),n=k(e,"absoluteStrokeWidth",3,!1),i=k(e,"iconNode",19,()=>[]),l=V(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var f=ft();se(f,g=>({...vt,...l,width:a(),height:a(),stroke:s(),"stroke-width":g,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>n()?Number(o())*24/Number(a()):o()]);var r=m(f);Me(r,17,i,Ne,(g,d)=>{var h=$e(()=>tt(w(d),2));let _=()=>w(h)[0],x=()=>w(h)[1];var c=G(),u=K(c);ot(u,_,!0,(p,$)=>{se(p,()=>({...x()}))}),y(g,c)});var v=T(r);W(v,()=>e.children??S),b(f),y(t,f),L()}function ht(t,e){q(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let s=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]];ce(t,de({name:"fish"},()=>s,{get iconNode(){return a},children:(o,n)=>{var i=G(),l=K(i);W(l,()=>e.children??S),y(o,i)},$$slots:{default:!0}})),L()}function gt(t,e){q(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let s=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];ce(t,de({name:"menu"},()=>s,{get iconNode(){return a},children:(o,n)=>{var i=G(),l=K(i);W(l,()=>e.children??S),y(o,i)},$$slots:{default:!0}})),L()}function pt(t,e){q(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let s=V(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(t,de({name:"x"},()=>s,{get iconNode(){return a},children:(o,n)=>{var i=G(),l=K(i);W(l,()=>e.children??S),y(o,i)},$$slots:{default:!0}})),L()}function bt(t,e){F(e,!w(e))}var mt=(t,e)=>{(t.key==="Enter"||t.key===" "||t.key==="Escape")&&e()},xt=t=>t.stopPropagation(),_t=(t,e)=>{t.key==="Escape"&&e()},wt=N('<button type="button" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] animate-[fadeIn_0.3s_ease] border-0 p-0 cursor-pointer" aria-label="Close mobile menu"><div class="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 w-[calc(100vw-2rem)] max-w-sm bg-[rgba(215,212,212,0.95)] backdrop-blur-xl border border-white/25 rounded-xl p-6 shadow-2xl animate-[slideDown_0.3s_ease]" role="dialog" aria-label="Mobile navigation menu" tabindex="-1"><ul class="flex flex-col gap-4 list-none m-0 p-0"><li><a href="/my-projects" class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10">Portfolio</a></li> <li><a href="/links" class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10">Links</a></li> <li><a href="/blog" class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10">Blog</a></li> <li><a href="/contact" class="block p-4 no-underline text-white text-center rounded-xl font-medium bg-white/10 border border-white/25 transition-colors duration-300 hover:bg-white/20">Contact me</a></li></ul></div></button>'),yt=N('<nav class="glass-nav sticky top-3 py-9 mx-2 sm:mx-4 md:mx-auto svelte-1h32yp1" style="z-index: 99;"><div class="flex items-center justify-between w-full relative z-10"><div class="flex items-center gap-2.5"><a href="/" class="flex items-center gap-2 no-underline text-white transition-opacity duration-300 hover:opacity-80"><!> <strong class="hidden sm:block">Home</strong></a></div> <button class="flex items-center justify-center p-2 text-white bg-transparent border-none rounded-lg transition-colors duration-300 hover:bg-white/10 md:hidden z-10" aria-label="Toggle menu"><!></button> <ul class="hidden md:flex items-center gap-4 list-none m-0 p-0 z-10"><li><a href="/my-projects" class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap">Portfolio</a></li> <li><a href="/links" class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap">Links</a></li> <li><a href="/blog" class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap">Blog</a></li></ul> <div class="hidden md:flex items-center gap-2.5 z-10"><a href="/contact" class="px-4 py-2 rounded-full border border-white/25 no-underline text-white whitespace-nowrap transition-all duration-300 hover:bg-white/10 hover:border-white/40">Contact me</a></div></div> <!></nav>');function Ht(t,e){q(e,!0);let s=U(!1),a=U(!1);function o(){F(s,!1)}Ce(()=>{function c(){F(a,window.innerWidth<768),w(a)||F(s,!1)}return c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}});var n=yt(),i=m(n),l=m(i),f=m(l);f.__click=o;var r=m(f);ht(r,{class:"w-7 h-7 rounded-lg"}),ie(2),b(f),b(l);var v=T(l,2);v.__click=[bt,s];var g=m(v);{var d=c=>{pt(c,{class:"w-6 h-6"})},h=c=>{gt(c,{class:"w-6 h-6"})};H(g,c=>{w(s)?c(d):c(h,!1)})}b(v),ie(4),b(i);var _=T(i,2);{var x=c=>{var u=wt();u.__click=o,u.__keydown=[mt,o];var p=m(u);p.__click=[xt],p.__keydown=[_t,o];var $=m(p),O=m($),R=m(O);R.__click=o,b(O);var C=T(O,2),I=m(C);I.__click=o,b(C);var E=T(C,2),B=m(E);B.__click=o,b(E);var D=T(E,2),A=m(D);A.__click=o,b(D),b($),b(p),b(u),y(c,u)};H(_,c=>{w(s)&&w(a)&&c(x)})}b(n),y(t,n),L()}J(["click","keydown"]);var kt=N('<button><div class="glass-text svelte-1ubpodc"><!></div></button>'),$t=(t,e)=>(t.key==="Enter"||t.key===" ")&&e()(),Ct=N('<div role="button" tabindex="0"><div class="glass-text svelte-1ubpodc"><!></div></div>'),It=N('<div><div class="glass-text svelte-1ubpodc"><!></div></div>');function Rt(t,e){q(e,!0);let s=k(e,"width",3,"300px"),a=k(e,"height",3,"200px"),o=k(e,"borderRadius",3,"56px"),n=k(e,"onClick",3,void 0),i=k(e,"class",3,""),l=k(e,"type",3,"div");const r=k(e,"background",3,"clear")()==="black",u=`${`--glass-bg: ${r?"rgba(50, 47, 47, 0.38)":"rgba(18, 17, 17, 0.08)"};`} ${`--glass-box-shadow: ${r?"inset 0 0 8px -5px #b59c9c":"inset 0 0 12px -5px #b59c9c"};`} ${`--glass-backdrop-blur: ${r?"blur(7px)":"blur(10px)"};`} ${`--glass-after-backdrop-blur: ${r?"blur(10px)":"blur(0px)"};`} ${`--glass-text-color: ${r?"#ffffff":"currentColor"};`} ${`--glass-text-size: ${r?"24px":"18px"};`} ${`--glass-text-shadow: ${r?"0px 2px 3px rgba(0, 0, 0, 0.22)":"0px 2px 4px rgba(0, 0, 0, 0.22)"};`}`;var p=G(),$=K(p);{var O=C=>{var I=kt();I.__click=function(...D){n()?.apply(this,D)};var E=m(I),B=m(E);W(B,()=>e.children??S),b(E),b(I),P(()=>{ee(I,1,`liquid-glass ${i()??""}`,"svelte-1ubpodc"),oe(I,`width: ${s()??""}; height: ${a()??""}; border-radius: ${o()??""}; ${u}`)}),y(C,I)},R=C=>{var I=G(),E=K(I);{var B=A=>{var M=Ct();M.__click=function(...Te){n()?.apply(this,Te)},M.__keydown=[$t,n];var Q=m(M),ne=m(Q);W(ne,()=>e.children??S),b(Q),b(M),P(()=>{ee(M,1,`liquid-glass ${i()??""}`,"svelte-1ubpodc"),oe(M,`width: ${s()??""}; height: ${a()??""}; border-radius: ${o()??""}; ${u}`)}),y(A,M)},D=A=>{var M=It(),Q=m(M),ne=m(Q);W(ne,()=>e.children??S),b(Q),b(M),P(()=>{ee(M,1,`liquid-glass ${i()??""}`,"svelte-1ubpodc"),oe(M,`width: ${s()??""}; height: ${a()??""}; border-radius: ${o()??""}; ${u}`)}),y(A,M)};H(E,A=>{n()?A(B):A(D,!1)},!0)}y(C,I)};H($,C=>{l()==="button"?C(O):C(R,!1)})}y(t,p),L()}J(["click","keydown"]);var Mt=N('<div class="px-4 sm:px-6 pb-4 sm:pb-6 text-white/90 leading-relaxed border-t border-white/10"><p class="m-0 pt-4 text-sm sm:text-base"> </p></div>'),Nt=N('<div class="bg-[rgba(215,212,212,0.01)] backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]"><button class="w-full p-4 sm:p-6 flex justify-between items-center bg-transparent border-none text-white text-base sm:text-lg font-semibold text-left cursor-pointer transition-all duration-300 hover:bg-white/5"><span class="flex-1 leading-relaxed"> </span> <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button> <!></div>'),St=N('<div class="w-full max-w-3xl mx-auto"><h2 class="qa-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-8 bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent svelte-odpx0l">Frequently Asked Questions</h2> <div class="flex flex-col gap-4"></div></div>');function Dt(t){let e=Ie([{question:"What technologies do you specialize in?",answer:"I specialize in modern web technologies including SvelteKit, TypeScript, React, Node.js, and various databases. I'm passionate about creating performant, accessible, and user-friendly applications.",isOpen:!1},{question:"How can I contact you for project collaborations?",answer:"You can reach out to me through the contact form on this website, or connect with me on LinkedIn. I'm always open to discussing interesting projects and opportunities.",isOpen:!1},{question:"Do you work with remote teams?",answer:"Absolutely! I have extensive experience working with distributed teams across different time zones. I believe in clear communication, regular updates, and using the right tools to ensure smooth collaboration.",isOpen:!1},{question:"What's your approach to web development?",answer:"I follow a user-centered approach, focusing on performance, accessibility, and maintainable code. I believe in progressive enhancement, semantic HTML, and building applications that work well for everyone.",isOpen:!1},{question:"How do you stay updated with the latest technologies?",answer:"I regularly read tech blogs, participate in developer communities, contribute to open source projects, and experiment with new technologies in personal projects like this website. Continuous learning is essential in our field.",isOpen:!1},{question:"What's your experience with design systems?",answer:"I have experience building and maintaining design systems that ensure consistency across applications. I understand the importance of reusable components, design tokens, and documentation for scalable design systems.",isOpen:!1}]);function s(n){e[n].isOpen=!e[n].isOpen}var a=St(),o=T(m(a),2);Me(o,21,()=>e,Ne,(n,i,l)=>{var f=Nt(),r=m(f);r.__click=()=>s(l);var v=m(r),g=m(v,!0);b(v);var d=T(v,2);let h;b(r);var _=T(r,2);{var x=c=>{var u=Mt(),p=m(u),$=m(p,!0);b(p),b(u),P(()=>re($,w(i).answer)),Z(3,u,()=>ut,()=>({duration:300})),y(c,u)};H(_,c=>{w(i).isOpen&&c(x)})}b(f),P(c=>{Se(r,"aria-expanded",w(i).isOpen),re(g,w(i).question),h=ee(d,1,"ml-3 sm:ml-4 transition-transform duration-300 text-white/70",null,h,c)},[()=>({"rotate-180":w(i).isOpen})]),Z(1,f,()=>te,()=>({duration:600,delay:l*100})),y(n,f)}),b(o),b(a),y(t,a)}J(["click"]);var Et=(t,e)=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),F(e,!w(e)))},zt=N('<div id="greeting-tooltip" class="tooltip absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap z-50 backdrop-blur-sm border border-white/20" role="tooltip" aria-live="polite"> <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-black/80"></div></div>'),Tt=N('<div class="greeting-wrapper relative inline-block" role="button" tabindex="0" aria-label="Show language information for greeting"><h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 greeting-text cursor-pointer transition-transform duration-300 hover:scale-105 svelte-1131o65" id="greeting-text"> </h2> <!></div>'),Bt=N('<div class="greeting-container prose text-center"><!></div>');function Gt(t,e){q(e,!0);const s=[{text:"Hello, my name is",language:"English"},{text:"Halo, nama saya",language:"Indonesian"},{text:"Hola, me llamo",language:"Spanish"},{text:"Bonjour, je m'appelle",language:"French"},{text:"Hallo, ich heiße",language:"German"},{text:"Ciao, mi chiamo",language:"Italian"},{text:"Olá, meu nome é",language:"Portuguese"},{text:"こんにちは、私の名前は",language:"Japanese"},{text:"你好，我叫",language:"Chinese (Simplified)"},{text:"안녕하세요, 제 이름은",language:"Korean"},{text:"Sampurasun, nami abdi",language:"Sundanese"},{text:"Saluton, mia nomo estas",language:"Esperanto"},{text:"Hej, jag heter",language:"Swedish"},{text:"Hei, nimeni on",language:"Finnish"},{text:"Cześć, nazywam się",language:"Polish"},{text:"Merhaba, benim adım",language:"Turkish"},{text:"Kia ora, ko au te",language:"Maori"}];let a=Math.floor(Math.random()*s.length),o=U(Ie(s[a])),n=U(0),i=U(!1),l=null;function f(){a=Math.floor(Math.random()*s.length),F(o,s[a],!0),F(n,w(n)+1)}Ce(()=>{l=setInterval(f,4e3)}),at(()=>{l&&clearInterval(l)});var r=Bt(),v=m(r);rt(v,()=>w(n),g=>{var d=Tt();d.__keydown=[Et,i];var h=m(d),_=m(h);b(h);var x=T(h,2);{var c=u=>{var p=zt(),$=m(p);ie(),b(p),P(()=>re($,`${w(o).language??""} `)),Z(1,p,()=>te,()=>({duration:100})),Z(2,p,()=>te,()=>({duration:500})),y(u,p)};H(x,u=>{w(i)&&u(c)})}b(d),P(()=>{Se(h,"aria-describedby",w(i)?"greeting-tooltip":void 0),re(_,`${w(o).text??""}..`)}),he("mouseenter",d,()=>F(i,!0)),he("mouseleave",d,()=>F(i,!1)),Z(1,h,()=>te,()=>({duration:1800,delay:200})),y(g,d)}),b(r),y(t,r),L()}J(["keydown"]);var jt=(t,e)=>{t.stopPropagation(),e.onremove?.()},Ft=N('<button type="button" class="inline-flex items-center justify-center w-4 h-4 text-current rounded-full hover:bg-white/20 transition-colors duration-150" aria-label="Remove"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>'),Ot=N("<div><!> <!></div>");function Kt(t,e){q(e,!0);let s=k(e,"variant",3,"primary"),a=k(e,"size",3,"md"),o=k(e,"removable",3,!1),n=k(e,"disabled",3,!1),i=k(e,"selected",3,!1),l=k(e,"class",3,""),f=V(e,["$$slots","$$events","$$legacy","variant","size","removable","disabled","selected","class","onclick","onkeydown","onmouseenter","onmouseleave","onremove"]);const r={sm:"px-2 py-1 text-xs",md:"px-3 py-1.5 text-sm",lg:"px-4 py-2 text-base"},v={primary:"bg-blue-500/20 text-blue-200 border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50",secondary:"bg-teal-500/20 text-teal-200 border-teal-400/30 hover:bg-teal-500/30 hover:border-teal-400/50",accent:"bg-purple-500/20 text-purple-200 border-purple-400/30 hover:bg-purple-500/30 hover:border-purple-400/50",success:"bg-green-500/20 text-green-200 border-green-400/30 hover:bg-green-500/30 hover:border-green-400/50",warning:"bg-yellow-500/20 text-yellow-200 border-yellow-400/30 hover:bg-yellow-500/30 hover:border-yellow-400/50",error:"bg-red-500/20 text-red-200 border-red-400/30 hover:bg-red-500/30 hover:border-red-400/50",neutral:"bg-white/10 text-white/90 border-white/20 hover:bg-white/15 hover:border-white/30",glass:"bg-white/8 text-white/95 border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25"},g=$e(()=>["inline-flex items-center gap-1.5 font-medium transition-all duration-200 rounded-full border","focus:outline-none focus:ring-2 focus:ring-white/20","disabled:opacity-50 disabled:cursor-not-allowed",r[a()],v[s()],i()?"ring-2 ring-white/30":"",n()?"pointer-events-none":"",l()].filter(Boolean).join(" "));var d=Ot();se(d,()=>({class:w(g),...f,onclick:e.onclick,onkeydown:e.onkeydown,onmouseenter:e.onmouseenter,onmouseleave:e.onmouseleave}));var h=m(d);nt(h,e,"default",{});var _=T(h,2);{var x=c=>{var u=Ft();u.__click=[jt,e],y(c,u)};H(_,c=>{o()&&c(x)})}b(d),y(t,d),L()}J(["click"]);export{Kt as C,Gt as G,ce as I,Rt as L,Ht as N,Dt as Q,pt as X,Pt as a,ot as e,te as f,nt as s,Z as t};
