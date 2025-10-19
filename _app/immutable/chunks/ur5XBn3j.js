import"./DsnmJJEf.js";import{a as we,b as Ge,o as Ue,s as xe}from"./BMnGYR0V.js";import{c as ve,b as Se,bb as Ae,z as K,h as M,ak as Oe,a as ce,v as S,G as Ve,x as Ke,H as Ye,y as ye,A as Y,f as W,a3 as Xe,ax as Ze,d as ae,s as Je,bc as re,bd as ne,e as et,a2 as ke,aV as tt,Z as $e,ap as Be,aC as at,B as pe,p as ze,be as rt,bf as oe,a1 as qe,ac as he,bg as nt,ah as st,bh as it,ao as ot,bi as lt,K as _e,bj as dt,E as Fe,bk as ct,aw as ut,bl as ft,bm as vt,bn as pt,aT as ht,bo as _t,bp as Le,Q as bt,n as B,N as gt,bq as mt,br as wt,g as U,W as xt,l as P,m as A,i as V,q as k,r as L,t as y,j as Q,k as G,aS as yt,bs as kt,aM as be,o as H,aR as Ee,J as ee,u as Ce,w as X,I as $t}from"./D2vQ3WTN.js";import{p as O,r as se,s as ge,i as Z}from"./DHty0IRq.js";import{b as Ne,s as te,c as le,a as Et}from"./CI8dCaJy.js";function Re(t,e){return e}function Ct(t,e,a){for(var r=t.items,n=[],l=e.length,s=0;s<l;s++)it(e[s].e,n,!0);var f=l>0&&n.length===0&&a!==null;if(f){var g=a.parentNode;ot(g),g.append(a),r.clear(),F(t,e[0].prev,e[l-1].next)}lt(n,()=>{for(var i=0;i<l;i++){var v=e[i];f||(r.delete(v.k),F(t,v.prev,v.next)),he(v.e,!f)}})}function We(t,e,a,r,n,l=null){var s=t,f={flags:e,items:new Map,first:null},g=(e&Ae)!==0;if(g){var i=t;s=M?K(Oe(i)):i.appendChild(ve())}M&&ce();var v=null,m=!1,_=new Map,w=Ve(()=>{var c=a();return at(c)?c:c==null?[]:Be(c)}),d,p;function o(){Nt(p,d,f,_,s,n,e,r,a),l!==null&&(d.length===0?v?pe(v):v=ae(()=>l(s)):v!==null&&ze(v,()=>{v=null}))}Se(()=>{p??=_e,d=S(w);var c=d.length;if(m&&c===0)return;m=c===0;let b=!1;if(M){var $=Ke(s)===Ye;$!==(c===0)&&(s=ye(),K(s),Y(!1),b=!0)}if(M){for(var N=null,C,u=0;u<c;u++){if(W.nodeType===Xe&&W.data===Ze){s=W,b=!0,Y(!1);break}var h=d[u],x=r(h,u);C=ue(W,f,N,null,h,x,u,n,e,a),f.items.set(x,C),N=C}c>0&&K(ye())}if(M)c===0&&l&&(v=ae(()=>l(s)));else if(Je()){var T=new Set,z=et;for(u=0;u<c;u+=1){h=d[u],x=r(h,u);var I=f.items.get(x)??_.get(x);I?(e&(re|ne))!==0&&He(I,h,u,e):(C=ue(null,f,null,null,h,x,u,n,e,a,!0),_.set(x,C)),T.add(x)}for(const[E,q]of f.items)T.has(E)||z.skipped_effects.add(q.e);z.add_callback(o)}else o();b&&Y(!0),S(w)}),M&&(s=W)}function Nt(t,e,a,r,n,l,s,f,g){var i=(s&nt)!==0,v=(s&(re|ne))!==0,m=e.length,_=a.items,w=a.first,d=w,p,o=null,c,b=[],$=[],N,C,u,h;if(i)for(h=0;h<m;h+=1)N=e[h],C=f(N,h),u=_.get(C),u!==void 0&&(u.a?.measure(),(c??=new Set).add(u));for(h=0;h<m;h+=1){if(N=e[h],C=f(N,h),u=_.get(C),u===void 0){var x=r.get(C);if(x!==void 0){r.delete(C),_.set(C,x);var T=o?o.next:d;F(a,o,x),F(a,x,T),de(x,T,n),o=x}else{var z=d?d.e.nodes_start:n;o=ue(z,a,o,o===null?a.first:o.next,N,C,h,l,s,g)}_.set(C,o),b=[],$=[],d=o.next;continue}if(v&&He(u,N,h,s),(u.e.f&oe)!==0&&(pe(u.e),i&&(u.a?.unfix(),(c??=new Set).delete(u))),u!==d){if(p!==void 0&&p.has(u)){if(b.length<$.length){var I=$[0],E;o=I.prev;var q=b[0],D=b[b.length-1];for(E=0;E<b.length;E+=1)de(b[E],I,n);for(E=0;E<$.length;E+=1)p.delete($[E]);F(a,q.prev,D.next),F(a,o,q),F(a,D,I),d=I,o=D,h-=1,b=[],$=[]}else p.delete(u),de(u,d,n),F(a,u.prev,u.next),F(a,u,o===null?a.first:o.next),F(a,o,u),o=u;continue}for(b=[],$=[];d!==null&&d.k!==C;)(d.e.f&oe)===0&&(p??=new Set).add(d),$.push(d),d=d.next;if(d===null)continue;u=d}b.push(u),o=u,d=u.next}if(d!==null||p!==void 0){for(var j=p===void 0?[]:Be(p);d!==null;)(d.e.f&oe)===0&&j.push(d),d=d.next;var ie=j.length;if(ie>0){var Pe=(s&Ae)!==0&&m===0?n:null;if(i){for(h=0;h<ie;h+=1)j[h].a?.measure();for(h=0;h<ie;h+=1)j[h].a?.fix()}Ct(a,j,Pe)}}i&&qe(()=>{if(c!==void 0)for(u of c)u.a?.apply()}),t.first=a.first&&a.first.e,t.last=o&&o.e;for(var Qe of r.values())he(Qe.e);r.clear()}function He(t,e,a,r){(r&re)!==0&&ke(t.v,e),(r&ne)!==0?ke(t.i,a):t.i=a}function ue(t,e,a,r,n,l,s,f,g,i,v){var m=(g&re)!==0,_=(g&rt)===0,w=m?_?tt(n,!1,!1):$e(n):n,d=(g&ne)===0?s:$e(s),p={i:d,v:w,k:l,a:null,e:null,prev:a,next:r};try{if(t===null){var o=document.createDocumentFragment();o.append(t=ve())}return p.e=ae(()=>f(t,w,d,i),M),p.e.prev=a&&a.e,p.e.next=r&&r.e,a===null?v||(e.first=p):(a.next=p,a.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function de(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,n=e?e.e.nodes_start:a,l=t.e.nodes_start;l!==null&&l!==r;){var s=st(l);n.before(l),l=s}}function F(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Tt(t,e,a,r,n,l){let s=M;M&&ce();var f,g,i=null;M&&W.nodeType===dt&&(i=W,ce());var v=M?W:t,m;Se(()=>{const _=e()||null;var w=ct;_!==f&&(m&&(_===null?ze(m,()=>{m=null,g=null}):_===g?pe(m):(he(m),we(!1))),_&&_!==g&&(m=ae(()=>{if(i=M?i:document.createElementNS(w,_),ut(i,i),r){M&&ft(_)&&i.append(document.createComment(""));var d=M?Oe(i):i.appendChild(ve());M&&(d===null?Y(!1):K(d)),r(i,d)}_e.nodes_end=i,v.before(i)})),f=_,f&&(g=f),we(!0))},Fe),s&&(Y(!0),K(v))}const It=()=>performance.now(),R={tick:t=>requestAnimationFrame(t),now:()=>It(),tasks:new Set};function De(){const t=R.now();R.tasks.forEach(e=>{e.c(t)||(R.tasks.delete(e),e.f())}),R.tasks.size!==0&&R.tick(De)}function Mt(t){let e;return R.tasks.size===0&&R.tick(De),{promise:new Promise(a=>{R.tasks.add(e={c:t,f:a})}),abort(){R.tasks.delete(e)}}}function J(t,e){Le(()=>{t.dispatchEvent(new CustomEvent(e))})}function St(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function Te(t){const e={},a=t.split(";");for(const r of a){const[n,l]=r.split(":");if(!n||l===void 0)break;const s=St(n.trim());e[s]=l.trim()}return e}const At=t=>t;function Ie(t,e,a,r){var n=(t&mt)!==0,l=(t&wt)!==0,s=n&&l,f=(t&_t)!==0,g=s?"both":n?"in":"out",i,v=e.inert,m=e.style.overflow,_,w;function d(){return Le(()=>i??=a()(e,r?.()??{},{direction:g}))}var p={is_global:f,in(){if(e.inert=v,!n){w?.abort(),w?.reset?.();return}l||_?.abort(),J(e,"introstart"),_=fe(e,d(),w,1,()=>{J(e,"introend"),_?.abort(),_=i=void 0,e.style.overflow=m})},out($){if(!l){$?.(),i=void 0;return}e.inert=!0,J(e,"outrostart"),w=fe(e,d(),_,0,()=>{J(e,"outroend"),$?.()})},stop:()=>{_?.abort(),w?.abort()}},o=_e;if((o.transitions??=[]).push(p),n&&Ge){var c=f;if(!c){for(var b=o.parent;b&&(b.f&Fe)!==0;)for(;(b=b.parent)&&(b.f&vt)===0;);c=!b||(b.f&pt)!==0}c&&ht(()=>{gt(()=>p.in())})}}function fe(t,e,a,r,n){var l=r===1;if(bt(e)){var s,f=!1;return qe(()=>{if(!f){var o=e({direction:l?"in":"out"});s=fe(t,o,a,r,n)}}),{abort:()=>{f=!0,s?.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(a?.deactivate(),!e?.duration)return n(),{abort:B,deactivate:B,reset:B,t:()=>r};const{delay:g=0,css:i,tick:v,easing:m=At}=e;var _=[];if(l&&a===void 0&&(v&&v(0,1),i)){var w=Te(i(0,1));_.push(w,w)}var d=()=>1-r,p=t.animate(_,{duration:g,fill:"forwards"});return p.onfinish=()=>{p.cancel();var o=a?.t()??1-r;a?.abort();var c=r-o,b=e.duration*Math.abs(c),$=[];if(b>0){var N=!1;if(i)for(var C=Math.ceil(b/16.666666666666668),u=0;u<=C;u+=1){var h=o+c*m(u/C),x=Te(i(h,1-h));$.push(x),N||=x.overflow==="hidden"}N&&(t.style.overflow="hidden"),d=()=>{var T=p.currentTime;return o+c*m(T/b)},v&&Mt(()=>{if(p.playState!=="running")return!1;var T=d();return v(T,1-T),!0})}p=t.animate($,{duration:b,fill:"forwards"}),p.onfinish=()=>{d=()=>r,v?.(r,1-r),n()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=B)},deactivate:()=>{n=B},reset:()=>{r===0&&v?.(1,0)},t:()=>d()}}const Ot=t=>t;function je(t){const e=t-1;return e*e*e+1}function Me(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function Bt(t,{delay:e=0,duration:a=400,easing:r=Ot}={}){const n=+getComputedStyle(t).opacity;return{delay:e,duration:a,easing:r,css:l=>`opacity: ${l*n}`}}function sa(t,{delay:e=0,duration:a=400,easing:r=je,x:n=0,y:l=0,opacity:s=0}={}){const f=getComputedStyle(t),g=+f.opacity,i=f.transform==="none"?"":f.transform,v=g*(1-s),[m,_]=Me(n),[w,d]=Me(l);return{delay:e,duration:a,easing:r,css:(p,o)=>`
			transform: ${i} translate(${(1-p)*m}${_}, ${(1-p)*w}${d});
			opacity: ${g-v*o}`}}function zt(t,{delay:e=0,duration:a=400,easing:r=je,axis:n="y"}={}){const l=getComputedStyle(t),s=+l.opacity,f=n==="y"?"height":"width",g=parseFloat(l[f]),i=n==="y"?["top","bottom"]:["left","right"],v=i.map(c=>`${c[0].toUpperCase()}${c.slice(1)}`),m=parseFloat(l[`padding${v[0]}`]),_=parseFloat(l[`padding${v[1]}`]),w=parseFloat(l[`margin${v[0]}`]),d=parseFloat(l[`margin${v[1]}`]),p=parseFloat(l[`border${v[0]}Width`]),o=parseFloat(l[`border${v[1]}Width`]);return{delay:e,duration:a,easing:r,css:c=>`overflow: hidden;opacity: ${Math.min(c*20,1)*s};${f}: ${c*g}px;padding-${i[0]}: ${c*m}px;padding-${i[1]}: ${c*_}px;margin-${i[0]}: ${c*w}px;margin-${i[1]}: ${c*d}px;border-${i[0]}-width: ${c*p}px;border-${i[1]}-width: ${c*o}px;min-${f}: 0`}}/**
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
 */const qt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ft=xt("<svg><!><!></svg>");function me(t,e){U(e,!0);const a=O(e,"color",3,"currentColor"),r=O(e,"size",3,24),n=O(e,"strokeWidth",3,2),l=O(e,"absoluteStrokeWidth",3,!1),s=O(e,"iconNode",19,()=>[]),f=se(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var g=Ft();Ne(g,m=>({...qt,...f,width:r(),height:r(),stroke:a(),"stroke-width":m,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>l()?Number(n())*24/Number(r()):n()]);var i=k(g);We(i,17,s,Re,(m,_)=>{var w=yt(()=>kt(S(_),2));let d=()=>S(w)[0],p=()=>S(w)[1];var o=Q(),c=G(o);Tt(c,d,!0,(b,$)=>{Ne(b,()=>({...p()}))}),A(m,o)});var v=L(i);P(v,()=>e.children??B),y(g),A(t,g),V()}function Lt(t,e){U(e,!0);/**
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
 */let a=se(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]];me(t,ge({name:"fish"},()=>a,{get iconNode(){return r},children:(n,l)=>{var s=Q(),f=G(s);P(f,()=>e.children??B),A(n,s)},$$slots:{default:!0}})),V()}function Rt(t,e){U(e,!0);/**
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
 */let a=se(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];me(t,ge({name:"menu"},()=>a,{get iconNode(){return r},children:(n,l)=>{var s=Q(),f=G(s);P(f,()=>e.children??B),A(n,s)},$$slots:{default:!0}})),V()}function Wt(t,e){U(e,!0);/**
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
 */let a=se(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];me(t,ge({name:"x"},()=>a,{get iconNode(){return r},children:(n,l)=>{var s=Q(),f=G(s);P(f,()=>e.children??B),A(n,s)},$$slots:{default:!0}})),V()}function Ht(t,e){ee(e,!S(e))}var Dt=(t,e)=>{(t.key==="Enter"||t.key===" "||t.key==="Escape")&&e()},jt=t=>t.stopPropagation(),Pt=(t,e)=>{t.key==="Escape"&&e()},Qt=H('<button type="button" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] animate-[fadeIn_0.3s_ease] border-0 p-0 cursor-pointer" aria-label="Close mobile menu"><div class="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 w-[calc(100vw-2rem)] max-w-sm bg-[rgba(215,212,212,0.95)] backdrop-blur-xl border border-white/25 rounded-xl p-6 shadow-2xl animate-[slideDown_0.3s_ease]" role="dialog" aria-label="Mobile navigation menu" tabindex="-1"><ul class="flex flex-col gap-4 list-none m-0 p-0"><li><a href="/my-projects" class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10">My Projects</a></li> <li><a href="/links" class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10">Links</a></li> <li><a href="/blog" class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10">Blog</a></li> <li><a href="/contact" class="block p-4 no-underline text-white text-center rounded-xl font-medium bg-white/10 border border-white/25 transition-colors duration-300 hover:bg-white/20">Contact me</a></li></ul></div></button>'),Gt=H('<nav class="glass-nav sticky top-3 py-9 mx-2 sm:mx-4 md:mx-auto svelte-1h32yp1" style="z-index: 99;"><div class="flex items-center justify-between w-full relative z-10"><div class="flex items-center gap-2.5"><a href="/" class="flex items-center gap-2 no-underline text-white transition-opacity duration-300 hover:opacity-80"><!> <strong class="hidden sm:block">Home</strong></a></div> <button class="flex items-center justify-center p-2 text-white bg-transparent border-none rounded-lg transition-colors duration-300 hover:bg-white/10 md:hidden z-10" aria-label="Toggle menu"><!></button> <ul class="hidden md:flex items-center gap-4 list-none m-0 p-0 z-10"><li><a href="/my-projects" class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap">My Projects</a></li> <li><a href="/links" class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap">Links</a></li> <li><a href="/blog" class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap">Blog</a></li></ul> <div class="hidden md:flex items-center gap-2.5 z-10"><a href="/contact" class="px-4 py-2 rounded-full border border-white/25 no-underline text-white whitespace-nowrap transition-all duration-300 hover:bg-white/10 hover:border-white/40">Contact me</a></div></div> <!></nav>');function ia(t,e){U(e,!0);let a=Ee(!1),r=Ee(!1);function n(){ee(a,!1)}Ue(()=>{function o(){ee(r,window.innerWidth<768),S(r)||ee(a,!1)}return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}});var l=Gt(),s=k(l),f=k(s),g=k(f);g.__click=n;var i=k(g);Lt(i,{class:"w-7 h-7 rounded-lg"}),Ce(2),y(g),y(f);var v=L(f,2);v.__click=[Ht,a];var m=k(v);{var _=o=>{Wt(o,{class:"w-6 h-6"})},w=o=>{Rt(o,{class:"w-6 h-6"})};Z(m,o=>{S(a)?o(_):o(w,!1)})}y(v),Ce(4),y(s);var d=L(s,2);{var p=o=>{var c=Qt();c.__click=n,c.__keydown=[Dt,n];var b=k(c);b.__click=[jt],b.__keydown=[Pt,n];var $=k(b),N=k($),C=k(N);C.__click=n,y(N);var u=L(N,2),h=k(u);h.__click=n,y(u);var x=L(u,2),T=k(x);T.__click=n,y(x);var z=L(x,2),I=k(z);I.__click=n,y(z),y($),y(b),y(c),A(o,c)};Z(d,o=>{S(a)&&S(r)&&o(p)})}y(l),A(t,l),V()}be(["click","keydown"]);var Ut=H('<button><div class="glass-text svelte-1ubpodc"><!></div></button>'),Vt=(t,e)=>(t.key==="Enter"||t.key===" ")&&e()(),Kt=H('<div role="button" tabindex="0"><div class="glass-text svelte-1ubpodc"><!></div></div>'),Yt=H('<div><div class="glass-text svelte-1ubpodc"><!></div></div>');function oa(t,e){U(e,!0);let a=O(e,"width",3,"300px"),r=O(e,"height",3,"200px"),n=O(e,"borderRadius",3,"56px"),l=O(e,"onClick",3,void 0),s=O(e,"class",3,""),f=O(e,"type",3,"div");const i=O(e,"background",3,"clear")()==="black",c=`${`--glass-bg: ${i?"rgba(50, 47, 47, 0.38)":"rgba(18, 17, 17, 0.08)"};`} ${`--glass-box-shadow: ${i?"inset 0 0 8px -5px #b59c9c":"inset 0 0 12px -5px #b59c9c"};`} ${`--glass-backdrop-blur: ${i?"blur(7px)":"blur(10px)"};`} ${`--glass-after-backdrop-blur: ${i?"blur(10px)":"blur(0px)"};`} ${`--glass-text-color: ${i?"#ffffff":"currentColor"};`} ${`--glass-text-size: ${i?"24px":"18px"};`} ${`--glass-text-shadow: ${i?"0px 2px 3px rgba(0, 0, 0, 0.22)":"0px 2px 4px rgba(0, 0, 0, 0.22)"};`}`;var b=Q(),$=G(b);{var N=u=>{var h=Ut();h.__click=function(...z){l()?.apply(this,z)};var x=k(h),T=k(x);P(T,()=>e.children??B),y(x),y(h),X(()=>{te(h,1,`liquid-glass ${s()??""}`,"svelte-1ubpodc"),le(h,`width: ${a()??""}; height: ${r()??""}; border-radius: ${n()??""}; ${c}`)}),A(u,h)},C=u=>{var h=Q(),x=G(h);{var T=I=>{var E=Kt();E.__click=function(...j){l()?.apply(this,j)},E.__keydown=[Vt,l];var q=k(E),D=k(q);P(D,()=>e.children??B),y(q),y(E),X(()=>{te(E,1,`liquid-glass ${s()??""}`,"svelte-1ubpodc"),le(E,`width: ${a()??""}; height: ${r()??""}; border-radius: ${n()??""}; ${c}`)}),A(I,E)},z=I=>{var E=Yt(),q=k(E),D=k(q);P(D,()=>e.children??B),y(q),y(E),X(()=>{te(E,1,`liquid-glass ${s()??""}`,"svelte-1ubpodc"),le(E,`width: ${a()??""}; height: ${r()??""}; border-radius: ${n()??""}; ${c}`)}),A(I,E)};Z(x,I=>{l()?I(T):I(z,!1)},!0)}A(u,h)};Z($,u=>{f()==="button"?u(N):u(C,!1)})}A(t,b),V()}be(["click","keydown"]);var Xt=H('<div class="px-4 sm:px-6 pb-4 sm:pb-6 text-white/90 leading-relaxed border-t border-white/10"><p class="m-0 pt-4 text-sm sm:text-base"> </p></div>'),Zt=H('<div class="bg-[rgba(215,212,212,0.01)] backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]"><button class="w-full p-4 sm:p-6 flex justify-between items-center bg-transparent border-none text-white text-base sm:text-lg font-semibold text-left cursor-pointer transition-all duration-300 hover:bg-white/5"><span class="flex-1 leading-relaxed"> </span> <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button> <!></div>'),Jt=H('<div class="w-full max-w-3xl mx-auto"><h2 class="qa-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-8 bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent svelte-odpx0l">Frequently Asked Questions</h2> <div class="flex flex-col gap-4"></div></div>');function la(t){let e=$t([{question:"What technologies do you specialize in?",answer:"I specialize in modern web technologies including SvelteKit, TypeScript, React, Node.js, and various databases. I'm passionate about creating performant, accessible, and user-friendly applications.",isOpen:!1},{question:"How can I contact you for project collaborations?",answer:"You can reach out to me through the contact form on this website, or connect with me on LinkedIn. I'm always open to discussing interesting projects and opportunities.",isOpen:!1},{question:"Do you work with remote teams?",answer:"Absolutely! I have extensive experience working with distributed teams across different time zones. I believe in clear communication, regular updates, and using the right tools to ensure smooth collaboration.",isOpen:!1},{question:"What's your approach to web development?",answer:"I follow a user-centered approach, focusing on performance, accessibility, and maintainable code. I believe in progressive enhancement, semantic HTML, and building applications that work well for everyone.",isOpen:!1},{question:"How do you stay updated with the latest technologies?",answer:"I regularly read tech blogs, participate in developer communities, contribute to open source projects, and experiment with new technologies in personal projects like this website. Continuous learning is essential in our field.",isOpen:!1},{question:"What's your experience with design systems?",answer:"I have experience building and maintaining design systems that ensure consistency across applications. I understand the importance of reusable components, design tokens, and documentation for scalable design systems.",isOpen:!1}]);function a(l){e[l].isOpen=!e[l].isOpen}var r=Jt(),n=L(k(r),2);We(n,21,()=>e,Re,(l,s,f)=>{var g=Zt(),i=k(g);i.__click=()=>a(f);var v=k(i),m=k(v,!0);y(v);var _=L(v,2);let w;y(i);var d=L(i,2);{var p=o=>{var c=Xt(),b=k(c),$=k(b,!0);y(b),y(c),X(()=>xe($,S(s).answer)),Ie(3,c,()=>zt,()=>({duration:300})),A(o,c)};Z(d,o=>{S(s).isOpen&&o(p)})}y(g),X(o=>{Et(i,"aria-expanded",S(s).isOpen),xe(m,S(s).question),w=te(_,1,"ml-3 sm:ml-4 transition-transform duration-300 text-white/70",null,w,o)},[()=>({"rotate-180":S(s).isOpen})]),Ie(1,g,()=>Bt,()=>({duration:600,delay:f*100})),A(l,g)}),y(n),y(r),A(t,r)}be(["click"]);export{me as I,oa as L,ia as N,la as Q,sa as a,We as e,Bt as f,Re as i,Ie as t};
