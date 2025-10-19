import"./DsnmJJEf.js";import{a as Ce,b as Xe,o as Be,s as se,c as et}from"./VpGTQMf3.js";import{b as xe,h as N,a as oe,bb as tt,c as le,d as ae,e as Fe,s as Le,f as R,U as at,p as we,bc as qe,z as J,ak as He,v as C,G as rt,x as nt,H as it,y as Me,A as X,a3 as st,ax as ot,bd as de,be as ce,a2 as Se,aV as lt,Z as Ne,ap as Re,aC as dt,B as ye,bf as ct,bg as pe,a1 as De,ac as ke,bh as ut,ah as ft,bi as vt,ao as pt,bj as ht,K as $e,bk as gt,E as je,bl as mt,aw as bt,bm as _t,bn as xt,bo as wt,aT as yt,bp as kt,bq as We,Q as $t,n as z,N as Et,br as It,bs as Ct,g as K,W as Mt,l as G,m as S,i as Q,q as y,r as H,t as w,j as V,k as Y,aS as St,bt as Nt,aM as ue,o as F,aR as ee,J as j,u as me,w as U,I as Pe,bu as Te}from"./CaBH6Iz7.js";import{p as O,r as fe,s as Ee,i as Z}from"./oW7ZNcUw.js";import{b as Ae,s as ne,c as he,a as Ge}from"./Qi9MA218.js";function Tt(t,e,a){N&&oe();var r=t,i=at,s,n,d=null,m=tt;function o(){s&&we(s),d!==null&&(d.lastChild.remove(),r.before(d),d=null),s=n}xe(()=>{if(m(i,i=e())){var v=r,_=Le();_&&(d=document.createDocumentFragment(),d.append(v=le())),n=ae(()=>a(v)),_?Fe.add_callback(o):o()}}),N&&(r=R)}function Ue(t,e){return e}function At(t,e,a){for(var r=t.items,i=[],s=e.length,n=0;n<s;n++)vt(e[n].e,i,!0);var d=s>0&&i.length===0&&a!==null;if(d){var m=a.parentNode;pt(m),m.append(a),r.clear(),q(t,e[0].prev,e[s-1].next)}ht(i,()=>{for(var o=0;o<s;o++){var v=e[o];d||(r.delete(v.k),q(t,v.prev,v.next)),ke(v.e,!d)}})}function Ke(t,e,a,r,i,s=null){var n=t,d={flags:e,items:new Map,first:null},m=(e&qe)!==0;if(m){var o=t;n=N?J(He(o)):o.appendChild(le())}N&&oe();var v=null,_=!1,h=new Map,x=rt(()=>{var u=a();return dt(u)?u:u==null?[]:Re(u)}),c,p;function l(){Ot(p,c,d,h,n,i,e,r,a),s!==null&&(c.length===0?v?ye(v):v=ae(()=>s(n)):v!==null&&we(v,()=>{v=null}))}xe(()=>{p??=$e,c=C(x);var u=c.length;if(_&&u===0)return;_=u===0;let g=!1;if(N){var $=nt(n)===it;$!==(u===0)&&(n=Me(),J(n),X(!1),g=!0)}if(N){for(var M=null,I,f=0;f<u;f++){if(R.nodeType===st&&R.data===ot){n=R,g=!0,X(!1);break}var b=c[f],k=r(b,f);I=be(R,d,M,null,b,k,f,i,e,a),d.items.set(k,I),M=I}u>0&&J(Me())}if(N)u===0&&s&&(v=ae(()=>s(n)));else if(Le()){var T=new Set,B=Fe;for(f=0;f<u;f+=1){b=c[f],k=r(b,f);var A=d.items.get(k)??h.get(k);A?(e&(de|ce))!==0&&Qe(A,b,f,e):(I=be(null,d,null,null,b,k,f,i,e,a,!0),h.set(k,I)),T.add(k)}for(const[E,L]of d.items)T.has(E)||B.skipped_effects.add(L.e);B.add_callback(l)}else l();g&&X(!0),C(x)}),N&&(n=R)}function Ot(t,e,a,r,i,s,n,d,m){var o=(n&ut)!==0,v=(n&(de|ce))!==0,_=e.length,h=a.items,x=a.first,c=x,p,l=null,u,g=[],$=[],M,I,f,b;if(o)for(b=0;b<_;b+=1)M=e[b],I=d(M,b),f=h.get(I),f!==void 0&&(f.a?.measure(),(u??=new Set).add(f));for(b=0;b<_;b+=1){if(M=e[b],I=d(M,b),f=h.get(I),f===void 0){var k=r.get(I);if(k!==void 0){r.delete(I),h.set(I,k);var T=l?l.next:c;q(a,l,k),q(a,k,T),ge(k,T,i),l=k}else{var B=c?c.e.nodes_start:i;l=be(B,a,l,l===null?a.first:l.next,M,I,b,s,n,m)}h.set(I,l),g=[],$=[],c=l.next;continue}if(v&&Qe(f,M,b,n),(f.e.f&pe)!==0&&(ye(f.e),o&&(f.a?.unfix(),(u??=new Set).delete(f))),f!==c){if(p!==void 0&&p.has(f)){if(g.length<$.length){var A=$[0],E;l=A.prev;var L=g[0],W=g[g.length-1];for(E=0;E<g.length;E+=1)ge(g[E],A,i);for(E=0;E<$.length;E+=1)p.delete($[E]);q(a,L.prev,W.next),q(a,l,L),q(a,W,A),c=A,l=W,b-=1,g=[],$=[]}else p.delete(f),ge(f,c,i),q(a,f.prev,f.next),q(a,f,l===null?a.first:l.next),q(a,l,f),l=f;continue}for(g=[],$=[];c!==null&&c.k!==I;)(c.e.f&pe)===0&&(p??=new Set).add(c),$.push(c),c=c.next;if(c===null)continue;f=c}g.push(f),l=f,c=f.next}if(c!==null||p!==void 0){for(var P=p===void 0?[]:Re(p);c!==null;)(c.e.f&pe)===0&&P.push(c),c=c.next;var ve=P.length;if(ve>0){var Ze=(n&qe)!==0&&_===0?i:null;if(o){for(b=0;b<ve;b+=1)P[b].a?.measure();for(b=0;b<ve;b+=1)P[b].a?.fix()}At(a,P,Ze)}}o&&De(()=>{if(u!==void 0)for(f of u)f.a?.apply()}),t.first=a.first&&a.first.e,t.last=l&&l.e;for(var Je of r.values())ke(Je.e);r.clear()}function Qe(t,e,a,r){(r&de)!==0&&Se(t.v,e),(r&ce)!==0?Se(t.i,a):t.i=a}function be(t,e,a,r,i,s,n,d,m,o,v){var _=(m&de)!==0,h=(m&ct)===0,x=_?h?lt(i,!1,!1):Ne(i):i,c=(m&ce)===0?n:Ne(n),p={i:c,v:x,k:s,a:null,e:null,prev:a,next:r};try{if(t===null){var l=document.createDocumentFragment();l.append(t=le())}return p.e=ae(()=>d(t,x,c,o),N),p.e.prev=a&&a.e,p.e.next=r&&r.e,a===null?v||(e.first=p):(a.next=p,a.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function ge(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,i=e?e.e.nodes_start:a,s=t.e.nodes_start;s!==null&&s!==r;){var n=ft(s);i.before(s),s=n}}function q(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function zt(t,e,a,r,i,s){let n=N;N&&oe();var d,m,o=null;N&&R.nodeType===gt&&(o=R,oe());var v=N?R:t,_;xe(()=>{const h=e()||null;var x=mt;h!==d&&(_&&(h===null?we(_,()=>{_=null,m=null}):h===m?ye(_):(ke(_),Ce(!1))),h&&h!==m&&(_=ae(()=>{if(o=N?o:document.createElementNS(x,h),bt(o,o),r){N&&_t(h)&&o.append(document.createComment(""));var c=N?He(o):o.appendChild(le());N&&(c===null?X(!1):J(c)),r(o,c)}$e.nodes_end=o,v.before(o)})),d=h,d&&(m=d),Ce(!0))},je),n&&(X(!0),J(v))}const Bt=()=>performance.now(),D={tick:t=>requestAnimationFrame(t),now:()=>Bt(),tasks:new Set};function Ve(){const t=D.now();D.tasks.forEach(e=>{e.c(t)||(D.tasks.delete(e),e.f())}),D.tasks.size!==0&&D.tick(Ve)}function Ft(t){let e;return D.tasks.size===0&&D.tick(Ve),{promise:new Promise(a=>{D.tasks.add(e={c:t,f:a})}),abort(){D.tasks.delete(e)}}}function re(t,e){We(()=>{t.dispatchEvent(new CustomEvent(e))})}function Lt(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function Oe(t){const e={},a=t.split(";");for(const r of a){const[i,s]=r.split(":");if(!i||s===void 0)break;const n=Lt(i.trim());e[n]=s.trim()}return e}const qt=t=>t;function te(t,e,a,r){var i=(t&It)!==0,s=(t&Ct)!==0,n=i&&s,d=(t&kt)!==0,m=n?"both":i?"in":"out",o,v=e.inert,_=e.style.overflow,h,x;function c(){return We(()=>o??=a()(e,r?.()??{},{direction:m}))}var p={is_global:d,in(){if(e.inert=v,!i){x?.abort(),x?.reset?.();return}s||h?.abort(),re(e,"introstart"),h=_e(e,c(),x,1,()=>{re(e,"introend"),h?.abort(),h=o=void 0,e.style.overflow=_})},out($){if(!s){$?.(),o=void 0;return}e.inert=!0,re(e,"outrostart"),x=_e(e,c(),h,0,()=>{re(e,"outroend"),$?.()})},stop:()=>{h?.abort(),x?.abort()}},l=$e;if((l.transitions??=[]).push(p),i&&Xe){var u=d;if(!u){for(var g=l.parent;g&&(g.f&je)!==0;)for(;(g=g.parent)&&(g.f&xt)===0;);u=!g||(g.f&wt)!==0}u&&yt(()=>{Et(()=>p.in())})}}function _e(t,e,a,r,i){var s=r===1;if($t(e)){var n,d=!1;return De(()=>{if(!d){var l=e({direction:s?"in":"out"});n=_e(t,l,a,r,i)}}),{abort:()=>{d=!0,n?.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(a?.deactivate(),!e?.duration)return i(),{abort:z,deactivate:z,reset:z,t:()=>r};const{delay:m=0,css:o,tick:v,easing:_=qt}=e;var h=[];if(s&&a===void 0&&(v&&v(0,1),o)){var x=Oe(o(0,1));h.push(x,x)}var c=()=>1-r,p=t.animate(h,{duration:m,fill:"forwards"});return p.onfinish=()=>{p.cancel();var l=a?.t()??1-r;a?.abort();var u=r-l,g=e.duration*Math.abs(u),$=[];if(g>0){var M=!1;if(o)for(var I=Math.ceil(g/16.666666666666668),f=0;f<=I;f+=1){var b=l+u*_(f/I),k=Oe(o(b,1-b));$.push(k),M||=k.overflow==="hidden"}M&&(t.style.overflow="hidden"),c=()=>{var T=p.currentTime;return l+u*_(T/g)},v&&Ft(()=>{if(p.playState!=="running")return!1;var T=c();return v(T,1-T),!0})}p=t.animate($,{duration:g,fill:"forwards"}),p.onfinish=()=>{c=()=>r,v?.(r,1-r),i()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=z)},deactivate:()=>{i=z},reset:()=>{r===0&&v?.(1,0)},t:()=>c()}}const Ht=t=>t;function Ye(t){const e=t-1;return e*e*e+1}function ze(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function ie(t,{delay:e=0,duration:a=400,easing:r=Ht}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:a,easing:r,css:s=>`opacity: ${s*i}`}}function pa(t,{delay:e=0,duration:a=400,easing:r=Ye,x:i=0,y:s=0,opacity:n=0}={}){const d=getComputedStyle(t),m=+d.opacity,o=d.transform==="none"?"":d.transform,v=m*(1-n),[_,h]=ze(i),[x,c]=ze(s);return{delay:e,duration:a,easing:r,css:(p,l)=>`
			transform: ${o} translate(${(1-p)*_}${h}, ${(1-p)*x}${c});
			opacity: ${m-v*l}`}}function Rt(t,{delay:e=0,duration:a=400,easing:r=Ye,axis:i="y"}={}){const s=getComputedStyle(t),n=+s.opacity,d=i==="y"?"height":"width",m=parseFloat(s[d]),o=i==="y"?["top","bottom"]:["left","right"],v=o.map(u=>`${u[0].toUpperCase()}${u.slice(1)}`),_=parseFloat(s[`padding${v[0]}`]),h=parseFloat(s[`padding${v[1]}`]),x=parseFloat(s[`margin${v[0]}`]),c=parseFloat(s[`margin${v[1]}`]),p=parseFloat(s[`border${v[0]}Width`]),l=parseFloat(s[`border${v[1]}Width`]);return{delay:e,duration:a,easing:r,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*n};${d}: ${u*m}px;padding-${o[0]}: ${u*_}px;padding-${o[1]}: ${u*h}px;margin-${o[0]}: ${u*x}px;margin-${o[1]}: ${u*c}px;border-${o[0]}-width: ${u*p}px;border-${o[1]}-width: ${u*l}px;min-${d}: 0`}}/**
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
 */const Dt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var jt=Mt("<svg><!><!></svg>");function Ie(t,e){K(e,!0);const a=O(e,"color",3,"currentColor"),r=O(e,"size",3,24),i=O(e,"strokeWidth",3,2),s=O(e,"absoluteStrokeWidth",3,!1),n=O(e,"iconNode",19,()=>[]),d=fe(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var m=jt();Ae(m,_=>({...Dt,...d,width:r(),height:r(),stroke:a(),"stroke-width":_,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>s()?Number(i())*24/Number(r()):i()]);var o=y(m);Ke(o,17,n,Ue,(_,h)=>{var x=St(()=>Nt(C(h),2));let c=()=>C(x)[0],p=()=>C(x)[1];var l=V(),u=Y(l);zt(u,c,!0,(g,$)=>{Ae(g,()=>({...p()}))}),S(_,l)});var v=H(o);G(v,()=>e.children??z),w(m),S(t,m),Q()}function Wt(t,e){K(e,!0);/**
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
 */let a=fe(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]];Ie(t,Ee({name:"fish"},()=>a,{get iconNode(){return r},children:(i,s)=>{var n=V(),d=Y(n);G(d,()=>e.children??z),S(i,n)},$$slots:{default:!0}})),Q()}function Pt(t,e){K(e,!0);/**
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
 */let a=fe(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];Ie(t,Ee({name:"menu"},()=>a,{get iconNode(){return r},children:(i,s)=>{var n=V(),d=Y(n);G(d,()=>e.children??z),S(i,n)},$$slots:{default:!0}})),Q()}function Gt(t,e){K(e,!0);/**
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
 */let a=fe(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];Ie(t,Ee({name:"x"},()=>a,{get iconNode(){return r},children:(i,s)=>{var n=V(),d=Y(n);G(d,()=>e.children??z),S(i,n)},$$slots:{default:!0}})),Q()}function Ut(t,e){j(e,!C(e))}var Kt=(t,e)=>{(t.key==="Enter"||t.key===" "||t.key==="Escape")&&e()},Qt=t=>t.stopPropagation(),Vt=(t,e)=>{t.key==="Escape"&&e()},Yt=F('<button type="button" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] animate-[fadeIn_0.3s_ease] border-0 p-0 cursor-pointer" aria-label="Close mobile menu"><div class="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 w-[calc(100vw-2rem)] max-w-sm bg-[rgba(215,212,212,0.95)] backdrop-blur-xl border border-white/25 rounded-xl p-6 shadow-2xl animate-[slideDown_0.3s_ease]" role="dialog" aria-label="Mobile navigation menu" tabindex="-1"><ul class="flex flex-col gap-4 list-none m-0 p-0"><li><a href="/my-projects" class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10">My Projects</a></li> <li><a href="/links" class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10">Links</a></li> <li><a href="/blog" class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10">Blog</a></li> <li><a href="/contact" class="block p-4 no-underline text-white text-center rounded-xl font-medium bg-white/10 border border-white/25 transition-colors duration-300 hover:bg-white/20">Contact me</a></li></ul></div></button>'),Zt=F('<nav class="glass-nav sticky top-3 py-9 mx-2 sm:mx-4 md:mx-auto svelte-1h32yp1" style="z-index: 99;"><div class="flex items-center justify-between w-full relative z-10"><div class="flex items-center gap-2.5"><a href="/" class="flex items-center gap-2 no-underline text-white transition-opacity duration-300 hover:opacity-80"><!> <strong class="hidden sm:block">Home</strong></a></div> <button class="flex items-center justify-center p-2 text-white bg-transparent border-none rounded-lg transition-colors duration-300 hover:bg-white/10 md:hidden z-10" aria-label="Toggle menu"><!></button> <ul class="hidden md:flex items-center gap-4 list-none m-0 p-0 z-10"><li><a href="/my-projects" class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap">My Projects</a></li> <li><a href="/links" class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap">Links</a></li> <li><a href="/blog" class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap">Blog</a></li></ul> <div class="hidden md:flex items-center gap-2.5 z-10"><a href="/contact" class="px-4 py-2 rounded-full border border-white/25 no-underline text-white whitespace-nowrap transition-all duration-300 hover:bg-white/10 hover:border-white/40">Contact me</a></div></div> <!></nav>');function ha(t,e){K(e,!0);let a=ee(!1),r=ee(!1);function i(){j(a,!1)}Be(()=>{function l(){j(r,window.innerWidth<768),C(r)||j(a,!1)}return l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}});var s=Zt(),n=y(s),d=y(n),m=y(d);m.__click=i;var o=y(m);Wt(o,{class:"w-7 h-7 rounded-lg"}),me(2),w(m),w(d);var v=H(d,2);v.__click=[Ut,a];var _=y(v);{var h=l=>{Gt(l,{class:"w-6 h-6"})},x=l=>{Pt(l,{class:"w-6 h-6"})};Z(_,l=>{C(a)?l(h):l(x,!1)})}w(v),me(4),w(n);var c=H(n,2);{var p=l=>{var u=Yt();u.__click=i,u.__keydown=[Kt,i];var g=y(u);g.__click=[Qt],g.__keydown=[Vt,i];var $=y(g),M=y($),I=y(M);I.__click=i,w(M);var f=H(M,2),b=y(f);b.__click=i,w(f);var k=H(f,2),T=y(k);T.__click=i,w(k);var B=H(k,2),A=y(B);A.__click=i,w(B),w($),w(g),w(u),S(l,u)};Z(c,l=>{C(a)&&C(r)&&l(p)})}w(s),S(t,s),Q()}ue(["click","keydown"]);var Jt=F('<button><div class="glass-text svelte-1ubpodc"><!></div></button>'),Xt=(t,e)=>(t.key==="Enter"||t.key===" ")&&e()(),ea=F('<div role="button" tabindex="0"><div class="glass-text svelte-1ubpodc"><!></div></div>'),ta=F('<div><div class="glass-text svelte-1ubpodc"><!></div></div>');function ga(t,e){K(e,!0);let a=O(e,"width",3,"300px"),r=O(e,"height",3,"200px"),i=O(e,"borderRadius",3,"56px"),s=O(e,"onClick",3,void 0),n=O(e,"class",3,""),d=O(e,"type",3,"div");const o=O(e,"background",3,"clear")()==="black",u=`${`--glass-bg: ${o?"rgba(50, 47, 47, 0.38)":"rgba(18, 17, 17, 0.08)"};`} ${`--glass-box-shadow: ${o?"inset 0 0 8px -5px #b59c9c":"inset 0 0 12px -5px #b59c9c"};`} ${`--glass-backdrop-blur: ${o?"blur(7px)":"blur(10px)"};`} ${`--glass-after-backdrop-blur: ${o?"blur(10px)":"blur(0px)"};`} ${`--glass-text-color: ${o?"#ffffff":"currentColor"};`} ${`--glass-text-size: ${o?"24px":"18px"};`} ${`--glass-text-shadow: ${o?"0px 2px 3px rgba(0, 0, 0, 0.22)":"0px 2px 4px rgba(0, 0, 0, 0.22)"};`}`;var g=V(),$=Y(g);{var M=f=>{var b=Jt();b.__click=function(...B){s()?.apply(this,B)};var k=y(b),T=y(k);G(T,()=>e.children??z),w(k),w(b),U(()=>{ne(b,1,`liquid-glass ${n()??""}`,"svelte-1ubpodc"),he(b,`width: ${a()??""}; height: ${r()??""}; border-radius: ${i()??""}; ${u}`)}),S(f,b)},I=f=>{var b=V(),k=Y(b);{var T=A=>{var E=ea();E.__click=function(...P){s()?.apply(this,P)},E.__keydown=[Xt,s];var L=y(E),W=y(L);G(W,()=>e.children??z),w(L),w(E),U(()=>{ne(E,1,`liquid-glass ${n()??""}`,"svelte-1ubpodc"),he(E,`width: ${a()??""}; height: ${r()??""}; border-radius: ${i()??""}; ${u}`)}),S(A,E)},B=A=>{var E=ta(),L=y(E),W=y(L);G(W,()=>e.children??z),w(L),w(E),U(()=>{ne(E,1,`liquid-glass ${n()??""}`,"svelte-1ubpodc"),he(E,`width: ${a()??""}; height: ${r()??""}; border-radius: ${i()??""}; ${u}`)}),S(A,E)};Z(k,A=>{s()?A(T):A(B,!1)},!0)}S(f,b)};Z($,f=>{d()==="button"?f(M):f(I,!1)})}S(t,g),Q()}ue(["click","keydown"]);var aa=F('<div class="px-4 sm:px-6 pb-4 sm:pb-6 text-white/90 leading-relaxed border-t border-white/10"><p class="m-0 pt-4 text-sm sm:text-base"> </p></div>'),ra=F('<div class="bg-[rgba(215,212,212,0.01)] backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]"><button class="w-full p-4 sm:p-6 flex justify-between items-center bg-transparent border-none text-white text-base sm:text-lg font-semibold text-left cursor-pointer transition-all duration-300 hover:bg-white/5"><span class="flex-1 leading-relaxed"> </span> <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button> <!></div>'),na=F('<div class="w-full max-w-3xl mx-auto"><h2 class="qa-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-8 bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent svelte-odpx0l">Frequently Asked Questions</h2> <div class="flex flex-col gap-4"></div></div>');function ma(t){let e=Pe([{question:"What technologies do you specialize in?",answer:"I specialize in modern web technologies including SvelteKit, TypeScript, React, Node.js, and various databases. I'm passionate about creating performant, accessible, and user-friendly applications.",isOpen:!1},{question:"How can I contact you for project collaborations?",answer:"You can reach out to me through the contact form on this website, or connect with me on LinkedIn. I'm always open to discussing interesting projects and opportunities.",isOpen:!1},{question:"Do you work with remote teams?",answer:"Absolutely! I have extensive experience working with distributed teams across different time zones. I believe in clear communication, regular updates, and using the right tools to ensure smooth collaboration.",isOpen:!1},{question:"What's your approach to web development?",answer:"I follow a user-centered approach, focusing on performance, accessibility, and maintainable code. I believe in progressive enhancement, semantic HTML, and building applications that work well for everyone.",isOpen:!1},{question:"How do you stay updated with the latest technologies?",answer:"I regularly read tech blogs, participate in developer communities, contribute to open source projects, and experiment with new technologies in personal projects like this website. Continuous learning is essential in our field.",isOpen:!1},{question:"What's your experience with design systems?",answer:"I have experience building and maintaining design systems that ensure consistency across applications. I understand the importance of reusable components, design tokens, and documentation for scalable design systems.",isOpen:!1}]);function a(s){e[s].isOpen=!e[s].isOpen}var r=na(),i=H(y(r),2);Ke(i,21,()=>e,Ue,(s,n,d)=>{var m=ra(),o=y(m);o.__click=()=>a(d);var v=y(o),_=y(v,!0);w(v);var h=H(v,2);let x;w(o);var c=H(o,2);{var p=l=>{var u=aa(),g=y(u),$=y(g,!0);w(g),w(u),U(()=>se($,C(n).answer)),te(3,u,()=>Rt,()=>({duration:300})),S(l,u)};Z(c,l=>{C(n).isOpen&&l(p)})}w(m),U(l=>{Ge(o,"aria-expanded",C(n).isOpen),se(_,C(n).question),x=ne(h,1,"ml-3 sm:ml-4 transition-transform duration-300 text-white/70",null,x,l)},[()=>({"rotate-180":C(n).isOpen})]),te(1,m,()=>ie,()=>({duration:600,delay:d*100})),S(s,m)}),w(i),w(r),S(t,r)}ue(["click"]);var ia=(t,e)=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),j(e,!C(e)))},sa=F('<div id="greeting-tooltip" class="tooltip absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap z-50 backdrop-blur-sm border border-white/20" role="tooltip" aria-live="polite"> <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-black/80"></div></div>'),oa=F('<div class="greeting-wrapper relative inline-block" role="button" tabindex="0" aria-label="Show language information for greeting"><h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 greeting-text cursor-pointer transition-transform duration-300 hover:scale-105 svelte-1131o65" id="greeting-text"> </h2> <!></div>'),la=F('<div class="greeting-container prose text-center"><!></div>');function ba(t,e){K(e,!0);const a=[{text:"Hello, my name is",language:"English"},{text:"Hola, me llamo",language:"Spanish"},{text:"Bonjour, je m'appelle",language:"French"},{text:"Hallo, ich heiße",language:"German"},{text:"Ciao, mi chiamo",language:"Italian"},{text:"Olá, meu nome é",language:"Portuguese"},{text:"Привет, меня зовут",language:"Russian"},{text:"こんにちは、私の名前は",language:"Japanese"},{text:"你好，我叫",language:"Chinese (Simplified)"},{text:"안녕하세요, 제 이름은",language:"Korean"},{text:"مرحباً، اسمي",language:"Arabic"},{text:"Sampurasun, nami abdi",language:"Sundanese"},{text:"Saluton, mia nomo estas",language:"Esperanto"},{text:"Hej, jag heter",language:"Swedish"},{text:"Hei, nimeni on",language:"Finnish"},{text:"Salve, nomen mihi est",language:"Latin"},{text:"Cześć, nazywam się",language:"Polish"},{text:"Merhaba, benim adım",language:"Turkish"},{text:"Kia ora, ko au te",language:"Maori"}];let r=Math.floor(Math.random()*a.length),i=ee(Pe(a[r])),s=ee(0),n=ee(!1),d=null;function m(){r=Math.floor(Math.random()*a.length),j(i,a[r],!0),j(s,C(s)+1)}Be(()=>{d=setInterval(m,4e3)}),et(()=>{d&&clearInterval(d)});var o=la(),v=y(o);Tt(v,()=>C(s),_=>{var h=oa();h.__keydown=[ia,n];var x=y(h),c=y(x);w(x);var p=H(x,2);{var l=u=>{var g=sa(),$=y(g);me(),w(g),U(()=>se($,`${C(i).language??""} `)),te(1,g,()=>ie,()=>({duration:100})),te(2,g,()=>ie,()=>({duration:500})),S(u,g)};Z(p,u=>{C(n)&&u(l)})}w(h),U(()=>{Ge(x,"aria-describedby",C(n)?"greeting-tooltip":void 0),se(c,`${C(i).text??""}..`)}),Te("mouseenter",h,()=>j(n,!0)),Te("mouseleave",h,()=>j(n,!1)),te(1,x,()=>ie,()=>({duration:1800,delay:200})),S(_,h)}),w(o),S(t,o),Q()}ue(["keydown"]);export{ba as G,Ie as I,ga as L,ha as N,ma as Q,pa as a,Ke as e,ie as f,Ue as i,te as t};
