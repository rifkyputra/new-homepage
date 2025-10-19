import"./DsnmJJEf.js";import{b as Ne,c as et,o as Be,s as de,a as tt}from"./CAentjq_.js";import{b as we,h as T,a as ae,bd as at,c as ce,d as re,e as Fe,s as Le,f as R,U as rt,p as ye,be as qe,z as Z,ak as He,v as M,G as nt,x as it,H as ot,y as Se,A as J,a3 as st,ax as lt,bf as ue,bg as ve,a2 as Te,aX as dt,Z as $e,ap as Re,aC as ct,B as ke,bh as ut,bi as he,a1 as je,ac as Ee,bj as vt,ah as ft,bk as ht,ao as pt,bl as gt,K as Ce,bm as bt,E as De,bn as mt,aw as _t,bo as xt,bp as wt,bq as yt,aV as kt,br as Et,bs as Pe,Q as Ct,n as B,N as It,bt as Mt,bu as Nt,g as P,W as St,l as Q,m as N,i as W,q as y,r as L,t as w,j as X,k as Y,aP as We,bc as Tt,aM as ne,o as O,aU as ee,J as D,u as be,w as K,I as Ge,aQ as Ae}from"./CLXbfhRn.js";import{p as $,r as ie,s as Ie,i as V}from"./qIDNk25R.js";import{b as me,s as se,c as pe,a as Ue}from"./Bxu8UNUa.js";function $t(t,e,a){T&&ae();var r=t,o=rt,i,n,d=null,b=at;function s(){i&&ye(i),d!==null&&(d.lastChild.remove(),r.before(d),d=null),i=n}we(()=>{if(b(o,o=e())){var v=r,x=Le();x&&(d=document.createDocumentFragment(),d.append(v=ce())),n=re(()=>a(v)),x?Fe.add_callback(s):s()}}),T&&(r=R)}function Qe(t,e){return e}function At(t,e,a){for(var r=t.items,o=[],i=e.length,n=0;n<i;n++)ht(e[n].e,o,!0);var d=i>0&&o.length===0&&a!==null;if(d){var b=a.parentNode;pt(b),b.append(a),r.clear(),H(t,e[0].prev,e[i-1].next)}gt(o,()=>{for(var s=0;s<i;s++){var v=e[s];d||(r.delete(v.k),H(t,v.prev,v.next)),Ee(v.e,!d)}})}function Ke(t,e,a,r,o,i=null){var n=t,d={flags:e,items:new Map,first:null},b=(e&qe)!==0;if(b){var s=t;n=T?Z(He(s)):s.appendChild(ce())}T&&ae();var v=null,x=!1,f=new Map,_=nt(()=>{var c=a();return ct(c)?c:c==null?[]:Re(c)}),u,p;function l(){zt(p,u,d,f,n,o,e,r,a),i!==null&&(u.length===0?v?ke(v):v=re(()=>i(n)):v!==null&&ye(v,()=>{v=null}))}we(()=>{p??=Ce,u=M(_);var c=u.length;if(x&&c===0)return;x=c===0;let g=!1;if(T){var E=it(n)===ot;E!==(c===0)&&(n=Se(),Z(n),J(!1),g=!0)}if(T){for(var S=null,I,h=0;h<c;h++){if(R.nodeType===st&&R.data===lt){n=R,g=!0,J(!1);break}var m=u[h],k=r(m,h);I=_e(R,d,S,null,m,k,h,o,e,a),d.items.set(k,I),S=I}c>0&&Z(Se())}if(T)c===0&&i&&(v=re(()=>i(n)));else if(Le()){var A=new Set,F=Fe;for(h=0;h<c;h+=1){m=u[h],k=r(m,h);var z=d.items.get(k)??f.get(k);z?(e&(ue|ve))!==0&&Ve(z,m,h,e):(I=_e(null,d,null,null,m,k,h,o,e,a,!0),f.set(k,I)),A.add(k)}for(const[C,q]of d.items)A.has(C)||F.skipped_effects.add(q.e);F.add_callback(l)}else l();g&&J(!0),M(_)}),T&&(n=R)}function zt(t,e,a,r,o,i,n,d,b){var s=(n&vt)!==0,v=(n&(ue|ve))!==0,x=e.length,f=a.items,_=a.first,u=_,p,l=null,c,g=[],E=[],S,I,h,m;if(s)for(m=0;m<x;m+=1)S=e[m],I=d(S,m),h=f.get(I),h!==void 0&&(h.a?.measure(),(c??=new Set).add(h));for(m=0;m<x;m+=1){if(S=e[m],I=d(S,m),h=f.get(I),h===void 0){var k=r.get(I);if(k!==void 0){r.delete(I),f.set(I,k);var A=l?l.next:u;H(a,l,k),H(a,k,A),ge(k,A,o),l=k}else{var F=u?u.e.nodes_start:o;l=_e(F,a,l,l===null?a.first:l.next,S,I,m,i,n,b)}f.set(I,l),g=[],E=[],u=l.next;continue}if(v&&Ve(h,S,m,n),(h.e.f&he)!==0&&(ke(h.e),s&&(h.a?.unfix(),(c??=new Set).delete(h))),h!==u){if(p!==void 0&&p.has(h)){if(g.length<E.length){var z=E[0],C;l=z.prev;var q=g[0],G=g[g.length-1];for(C=0;C<g.length;C+=1)ge(g[C],z,o);for(C=0;C<E.length;C+=1)p.delete(E[C]);H(a,q.prev,G.next),H(a,l,q),H(a,G,z),u=z,l=G,m-=1,g=[],E=[]}else p.delete(h),ge(h,u,o),H(a,h.prev,h.next),H(a,h,l===null?a.first:l.next),H(a,l,h),l=h;continue}for(g=[],E=[];u!==null&&u.k!==I;)(u.e.f&he)===0&&(p??=new Set).add(u),E.push(u),u=u.next;if(u===null)continue;h=u}g.push(h),l=h,u=h.next}if(u!==null||p!==void 0){for(var U=p===void 0?[]:Re(p);u!==null;)(u.e.f&he)===0&&U.push(u),u=u.next;var fe=U.length;if(fe>0){var Ze=(n&qe)!==0&&x===0?o:null;if(s){for(m=0;m<fe;m+=1)U[m].a?.measure();for(m=0;m<fe;m+=1)U[m].a?.fix()}At(a,U,Ze)}}s&&je(()=>{if(c!==void 0)for(h of c)h.a?.apply()}),t.first=a.first&&a.first.e,t.last=l&&l.e;for(var Je of r.values())Ee(Je.e);r.clear()}function Ve(t,e,a,r){(r&ue)!==0&&Te(t.v,e),(r&ve)!==0?Te(t.i,a):t.i=a}function _e(t,e,a,r,o,i,n,d,b,s,v){var x=(b&ue)!==0,f=(b&ut)===0,_=x?f?dt(o,!1,!1):$e(o):o,u=(b&ve)===0?n:$e(n),p={i:u,v:_,k:i,a:null,e:null,prev:a,next:r};try{if(t===null){var l=document.createDocumentFragment();l.append(t=ce())}return p.e=re(()=>d(t,_,u,s),T),p.e.prev=a&&a.e,p.e.next=r&&r.e,a===null?v||(e.first=p):(a.next=p,a.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function ge(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,o=e?e.e.nodes_start:a,i=t.e.nodes_start;i!==null&&i!==r;){var n=ft(i);o.before(i),i=n}}function H(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Ot(t,e,a,r,o){T&&ae();var i=e.$$slots?.[a],n=!1;i===!0&&(i=e.children,n=!0),i===void 0||i(t,n?()=>r:r)}function Bt(t,e,a,r,o,i){let n=T;T&&ae();var d,b,s=null;T&&R.nodeType===bt&&(s=R,ae());var v=T?R:t,x;we(()=>{const f=e()||null;var _=a||f==="svg"?mt:null;f!==d&&(x&&(f===null?ye(x,()=>{x=null,b=null}):f===b?ke(x):(Ee(x),Ne(!1))),f&&f!==b&&(x=re(()=>{if(s=T?s:_?document.createElementNS(_,f):document.createElement(f),_t(s,s),r){T&&xt(f)&&s.append(document.createComment(""));var u=T?He(s):s.appendChild(ce());T&&(u===null?J(!1):Z(u)),r(s,u)}Ce.nodes_end=s,v.before(s)})),d=f,d&&(b=d),Ne(!0))},De),n&&(J(!0),Z(v))}const Ft=()=>performance.now(),j={tick:t=>requestAnimationFrame(t),now:()=>Ft(),tasks:new Set};function Xe(){const t=j.now();j.tasks.forEach(e=>{e.c(t)||(j.tasks.delete(e),e.f())}),j.tasks.size!==0&&j.tick(Xe)}function Lt(t){let e;return j.tasks.size===0&&j.tick(Xe),{promise:new Promise(a=>{j.tasks.add(e={c:t,f:a})}),abort(){j.tasks.delete(e)}}}function oe(t,e){Pe(()=>{t.dispatchEvent(new CustomEvent(e))})}function qt(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function ze(t){const e={},a=t.split(";");for(const r of a){const[o,i]=r.split(":");if(!o||i===void 0)break;const n=qt(o.trim());e[n]=i.trim()}return e}const Ht=t=>t;function te(t,e,a,r){var o=(t&Mt)!==0,i=(t&Nt)!==0,n=o&&i,d=(t&Et)!==0,b=n?"both":o?"in":"out",s,v=e.inert,x=e.style.overflow,f,_;function u(){return Pe(()=>s??=a()(e,r?.()??{},{direction:b}))}var p={is_global:d,in(){if(e.inert=v,!o){_?.abort(),_?.reset?.();return}i||f?.abort(),oe(e,"introstart"),f=xe(e,u(),_,1,()=>{oe(e,"introend"),f?.abort(),f=s=void 0,e.style.overflow=x})},out(E){if(!i){E?.(),s=void 0;return}e.inert=!0,oe(e,"outrostart"),_=xe(e,u(),f,0,()=>{oe(e,"outroend"),E?.()})},stop:()=>{f?.abort(),_?.abort()}},l=Ce;if((l.transitions??=[]).push(p),o&&et){var c=d;if(!c){for(var g=l.parent;g&&(g.f&De)!==0;)for(;(g=g.parent)&&(g.f&wt)===0;);c=!g||(g.f&yt)!==0}c&&kt(()=>{It(()=>p.in())})}}function xe(t,e,a,r,o){var i=r===1;if(Ct(e)){var n,d=!1;return je(()=>{if(!d){var l=e({direction:i?"in":"out"});n=xe(t,l,a,r,o)}}),{abort:()=>{d=!0,n?.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(a?.deactivate(),!e?.duration)return o(),{abort:B,deactivate:B,reset:B,t:()=>r};const{delay:b=0,css:s,tick:v,easing:x=Ht}=e;var f=[];if(i&&a===void 0&&(v&&v(0,1),s)){var _=ze(s(0,1));f.push(_,_)}var u=()=>1-r,p=t.animate(f,{duration:b,fill:"forwards"});return p.onfinish=()=>{p.cancel();var l=a?.t()??1-r;a?.abort();var c=r-l,g=e.duration*Math.abs(c),E=[];if(g>0){var S=!1;if(s)for(var I=Math.ceil(g/16.666666666666668),h=0;h<=I;h+=1){var m=l+c*x(h/I),k=ze(s(m,1-m));E.push(k),S||=k.overflow==="hidden"}S&&(t.style.overflow="hidden"),u=()=>{var A=p.currentTime;return l+c*x(A/g)},v&&Lt(()=>{if(p.playState!=="running")return!1;var A=u();return v(A,1-A),!0})}p=t.animate(E,{duration:g,fill:"forwards"}),p.onfinish=()=>{u=()=>r,v?.(r,1-r),o()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=B)},deactivate:()=>{o=B},reset:()=>{r===0&&v?.(1,0)},t:()=>u()}}const Rt=t=>t;function Ye(t){const e=t-1;return e*e*e+1}function Oe(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function le(t,{delay:e=0,duration:a=400,easing:r=Rt}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:a,easing:r,css:i=>`opacity: ${i*o}`}}function ma(t,{delay:e=0,duration:a=400,easing:r=Ye,x:o=0,y:i=0,opacity:n=0}={}){const d=getComputedStyle(t),b=+d.opacity,s=d.transform==="none"?"":d.transform,v=b*(1-n),[x,f]=Oe(o),[_,u]=Oe(i);return{delay:e,duration:a,easing:r,css:(p,l)=>`
			transform: ${s} translate(${(1-p)*x}${f}, ${(1-p)*_}${u});
			opacity: ${b-v*l}`}}function jt(t,{delay:e=0,duration:a=400,easing:r=Ye,axis:o="y"}={}){const i=getComputedStyle(t),n=+i.opacity,d=o==="y"?"height":"width",b=parseFloat(i[d]),s=o==="y"?["top","bottom"]:["left","right"],v=s.map(c=>`${c[0].toUpperCase()}${c.slice(1)}`),x=parseFloat(i[`padding${v[0]}`]),f=parseFloat(i[`padding${v[1]}`]),_=parseFloat(i[`margin${v[0]}`]),u=parseFloat(i[`margin${v[1]}`]),p=parseFloat(i[`border${v[0]}Width`]),l=parseFloat(i[`border${v[1]}Width`]);return{delay:e,duration:a,easing:r,css:c=>`overflow: hidden;opacity: ${Math.min(c*20,1)*n};${d}: ${c*b}px;padding-${s[0]}: ${c*x}px;padding-${s[1]}: ${c*f}px;margin-${s[0]}: ${c*_}px;margin-${s[1]}: ${c*u}px;border-${s[0]}-width: ${c*p}px;border-${s[1]}-width: ${c*l}px;min-${d}: 0`}}/**
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
 */const Dt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Pt=St("<svg><!><!></svg>");function Me(t,e){P(e,!0);const a=$(e,"color",3,"currentColor"),r=$(e,"size",3,24),o=$(e,"strokeWidth",3,2),i=$(e,"absoluteStrokeWidth",3,!1),n=$(e,"iconNode",19,()=>[]),d=ie(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var b=Pt();me(b,x=>({...Dt,...d,width:r(),height:r(),stroke:a(),"stroke-width":x,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(o())*24/Number(r()):o()]);var s=y(b);Ke(s,17,n,Qe,(x,f)=>{var _=We(()=>Tt(M(f),2));let u=()=>M(_)[0],p=()=>M(_)[1];var l=X(),c=Y(l);Bt(c,u,!0,(g,E)=>{me(g,()=>({...p()}))}),N(x,l)});var v=L(s);Q(v,()=>e.children??B),w(b),N(t,b),W()}function Wt(t,e){P(e,!0);/**
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
 */let a=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]];Me(t,Ie({name:"fish"},()=>a,{get iconNode(){return r},children:(o,i)=>{var n=X(),d=Y(n);Q(d,()=>e.children??B),N(o,n)},$$slots:{default:!0}})),W()}function Gt(t,e){P(e,!0);/**
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
 */let a=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];Me(t,Ie({name:"menu"},()=>a,{get iconNode(){return r},children:(o,i)=>{var n=X(),d=Y(n);Q(d,()=>e.children??B),N(o,n)},$$slots:{default:!0}})),W()}function Ut(t,e){P(e,!0);/**
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
 */let a=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];Me(t,Ie({name:"x"},()=>a,{get iconNode(){return r},children:(o,i)=>{var n=X(),d=Y(n);Q(d,()=>e.children??B),N(o,n)},$$slots:{default:!0}})),W()}function Qt(t,e){D(e,!M(e))}var Kt=(t,e)=>{(t.key==="Enter"||t.key===" "||t.key==="Escape")&&e()},Vt=t=>t.stopPropagation(),Xt=(t,e)=>{t.key==="Escape"&&e()},Yt=O('<button type="button" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] animate-[fadeIn_0.3s_ease] border-0 p-0 cursor-pointer" aria-label="Close mobile menu"><div class="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 w-[calc(100vw-2rem)] max-w-sm bg-[rgba(215,212,212,0.95)] backdrop-blur-xl border border-white/25 rounded-xl p-6 shadow-2xl animate-[slideDown_0.3s_ease]" role="dialog" aria-label="Mobile navigation menu" tabindex="-1"><ul class="flex flex-col gap-4 list-none m-0 p-0"><li><a href="/my-projects" class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10">My Projects</a></li> <li><a href="/links" class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10">Links</a></li> <li><a href="/blog" class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10">Blog</a></li> <li><a href="/contact" class="block p-4 no-underline text-white text-center rounded-xl font-medium bg-white/10 border border-white/25 transition-colors duration-300 hover:bg-white/20">Contact me</a></li></ul></div></button>'),Zt=O('<nav class="glass-nav sticky top-3 py-9 mx-2 sm:mx-4 md:mx-auto svelte-1h32yp1" style="z-index: 99;"><div class="flex items-center justify-between w-full relative z-10"><div class="flex items-center gap-2.5"><a href="/" class="flex items-center gap-2 no-underline text-white transition-opacity duration-300 hover:opacity-80"><!> <strong class="hidden sm:block">Home</strong></a></div> <button class="flex items-center justify-center p-2 text-white bg-transparent border-none rounded-lg transition-colors duration-300 hover:bg-white/10 md:hidden z-10" aria-label="Toggle menu"><!></button> <ul class="hidden md:flex items-center gap-4 list-none m-0 p-0 z-10"><li><a href="/my-projects" class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap">My Projects</a></li> <li><a href="/links" class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap">Links</a></li> <li><a href="/blog" class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap">Blog</a></li></ul> <div class="hidden md:flex items-center gap-2.5 z-10"><a href="/contact" class="px-4 py-2 rounded-full border border-white/25 no-underline text-white whitespace-nowrap transition-all duration-300 hover:bg-white/10 hover:border-white/40">Contact me</a></div></div> <!></nav>');function _a(t,e){P(e,!0);let a=ee(!1),r=ee(!1);function o(){D(a,!1)}Be(()=>{function l(){D(r,window.innerWidth<768),M(r)||D(a,!1)}return l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}});var i=Zt(),n=y(i),d=y(n),b=y(d);b.__click=o;var s=y(b);Wt(s,{class:"w-7 h-7 rounded-lg"}),be(2),w(b),w(d);var v=L(d,2);v.__click=[Qt,a];var x=y(v);{var f=l=>{Ut(l,{class:"w-6 h-6"})},_=l=>{Gt(l,{class:"w-6 h-6"})};V(x,l=>{M(a)?l(f):l(_,!1)})}w(v),be(4),w(n);var u=L(n,2);{var p=l=>{var c=Yt();c.__click=o,c.__keydown=[Kt,o];var g=y(c);g.__click=[Vt],g.__keydown=[Xt,o];var E=y(g),S=y(E),I=y(S);I.__click=o,w(S);var h=L(S,2),m=y(h);m.__click=o,w(h);var k=L(h,2),A=y(k);A.__click=o,w(k);var F=L(k,2),z=y(F);z.__click=o,w(F),w(E),w(g),w(c),N(l,c)};V(u,l=>{M(a)&&M(r)&&l(p)})}w(i),N(t,i),W()}ne(["click","keydown"]);var Jt=O('<button><div class="glass-text svelte-1ubpodc"><!></div></button>'),ea=(t,e)=>(t.key==="Enter"||t.key===" ")&&e()(),ta=O('<div role="button" tabindex="0"><div class="glass-text svelte-1ubpodc"><!></div></div>'),aa=O('<div><div class="glass-text svelte-1ubpodc"><!></div></div>');function xa(t,e){P(e,!0);let a=$(e,"width",3,"300px"),r=$(e,"height",3,"200px"),o=$(e,"borderRadius",3,"56px"),i=$(e,"onClick",3,void 0),n=$(e,"class",3,""),d=$(e,"type",3,"div");const s=$(e,"background",3,"clear")()==="black",c=`${`--glass-bg: ${s?"rgba(50, 47, 47, 0.38)":"rgba(18, 17, 17, 0.08)"};`} ${`--glass-box-shadow: ${s?"inset 0 0 8px -5px #b59c9c":"inset 0 0 12px -5px #b59c9c"};`} ${`--glass-backdrop-blur: ${s?"blur(7px)":"blur(10px)"};`} ${`--glass-after-backdrop-blur: ${s?"blur(10px)":"blur(0px)"};`} ${`--glass-text-color: ${s?"#ffffff":"currentColor"};`} ${`--glass-text-size: ${s?"24px":"18px"};`} ${`--glass-text-shadow: ${s?"0px 2px 3px rgba(0, 0, 0, 0.22)":"0px 2px 4px rgba(0, 0, 0, 0.22)"};`}`;var g=X(),E=Y(g);{var S=h=>{var m=Jt();m.__click=function(...F){i()?.apply(this,F)};var k=y(m),A=y(k);Q(A,()=>e.children??B),w(k),w(m),K(()=>{se(m,1,`liquid-glass ${n()??""}`,"svelte-1ubpodc"),pe(m,`width: ${a()??""}; height: ${r()??""}; border-radius: ${o()??""}; ${c}`)}),N(h,m)},I=h=>{var m=X(),k=Y(m);{var A=z=>{var C=ta();C.__click=function(...U){i()?.apply(this,U)},C.__keydown=[ea,i];var q=y(C),G=y(q);Q(G,()=>e.children??B),w(q),w(C),K(()=>{se(C,1,`liquid-glass ${n()??""}`,"svelte-1ubpodc"),pe(C,`width: ${a()??""}; height: ${r()??""}; border-radius: ${o()??""}; ${c}`)}),N(z,C)},F=z=>{var C=aa(),q=y(C),G=y(q);Q(G,()=>e.children??B),w(q),w(C),K(()=>{se(C,1,`liquid-glass ${n()??""}`,"svelte-1ubpodc"),pe(C,`width: ${a()??""}; height: ${r()??""}; border-radius: ${o()??""}; ${c}`)}),N(z,C)};V(k,z=>{i()?z(A):z(F,!1)},!0)}N(h,m)};V(E,h=>{d()==="button"?h(S):h(I,!1)})}N(t,g),W()}ne(["click","keydown"]);var ra=O('<div class="px-4 sm:px-6 pb-4 sm:pb-6 text-white/90 leading-relaxed border-t border-white/10"><p class="m-0 pt-4 text-sm sm:text-base"> </p></div>'),na=O('<div class="bg-[rgba(215,212,212,0.01)] backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]"><button class="w-full p-4 sm:p-6 flex justify-between items-center bg-transparent border-none text-white text-base sm:text-lg font-semibold text-left cursor-pointer transition-all duration-300 hover:bg-white/5"><span class="flex-1 leading-relaxed"> </span> <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button> <!></div>'),ia=O('<div class="w-full max-w-3xl mx-auto"><h2 class="qa-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-8 bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent svelte-odpx0l">Frequently Asked Questions</h2> <div class="flex flex-col gap-4"></div></div>');function wa(t){let e=Ge([{question:"What technologies do you specialize in?",answer:"I specialize in modern web technologies including SvelteKit, TypeScript, React, Node.js, and various databases. I'm passionate about creating performant, accessible, and user-friendly applications.",isOpen:!1},{question:"How can I contact you for project collaborations?",answer:"You can reach out to me through the contact form on this website, or connect with me on LinkedIn. I'm always open to discussing interesting projects and opportunities.",isOpen:!1},{question:"Do you work with remote teams?",answer:"Absolutely! I have extensive experience working with distributed teams across different time zones. I believe in clear communication, regular updates, and using the right tools to ensure smooth collaboration.",isOpen:!1},{question:"What's your approach to web development?",answer:"I follow a user-centered approach, focusing on performance, accessibility, and maintainable code. I believe in progressive enhancement, semantic HTML, and building applications that work well for everyone.",isOpen:!1},{question:"How do you stay updated with the latest technologies?",answer:"I regularly read tech blogs, participate in developer communities, contribute to open source projects, and experiment with new technologies in personal projects like this website. Continuous learning is essential in our field.",isOpen:!1},{question:"What's your experience with design systems?",answer:"I have experience building and maintaining design systems that ensure consistency across applications. I understand the importance of reusable components, design tokens, and documentation for scalable design systems.",isOpen:!1}]);function a(i){e[i].isOpen=!e[i].isOpen}var r=ia(),o=L(y(r),2);Ke(o,21,()=>e,Qe,(i,n,d)=>{var b=na(),s=y(b);s.__click=()=>a(d);var v=y(s),x=y(v,!0);w(v);var f=L(v,2);let _;w(s);var u=L(s,2);{var p=l=>{var c=ra(),g=y(c),E=y(g,!0);w(g),w(c),K(()=>de(E,M(n).answer)),te(3,c,()=>jt,()=>({duration:300})),N(l,c)};V(u,l=>{M(n).isOpen&&l(p)})}w(b),K(l=>{Ue(s,"aria-expanded",M(n).isOpen),de(x,M(n).question),_=se(f,1,"ml-3 sm:ml-4 transition-transform duration-300 text-white/70",null,_,l)},[()=>({"rotate-180":M(n).isOpen})]),te(1,b,()=>le,()=>({duration:600,delay:d*100})),N(i,b)}),w(o),w(r),N(t,r)}ne(["click"]);var oa=(t,e)=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),D(e,!M(e)))},sa=O('<div id="greeting-tooltip" class="tooltip absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap z-50 backdrop-blur-sm border border-white/20" role="tooltip" aria-live="polite"> <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-black/80"></div></div>'),la=O('<div class="greeting-wrapper relative inline-block" role="button" tabindex="0" aria-label="Show language information for greeting"><h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 greeting-text cursor-pointer transition-transform duration-300 hover:scale-105 svelte-1131o65" id="greeting-text"> </h2> <!></div>'),da=O('<div class="greeting-container prose text-center"><!></div>');function ya(t,e){P(e,!0);const a=[{text:"Hello, my name is",language:"English"},{text:"Hola, me llamo",language:"Spanish"},{text:"Bonjour, je m'appelle",language:"French"},{text:"Hallo, ich heiße",language:"German"},{text:"Ciao, mi chiamo",language:"Italian"},{text:"Olá, meu nome é",language:"Portuguese"},{text:"Привет, меня зовут",language:"Russian"},{text:"こんにちは、私の名前は",language:"Japanese"},{text:"你好，我叫",language:"Chinese (Simplified)"},{text:"안녕하세요, 제 이름은",language:"Korean"},{text:"مرحباً، اسمي",language:"Arabic"},{text:"Sampurasun, nami abdi",language:"Sundanese"},{text:"Saluton, mia nomo estas",language:"Esperanto"},{text:"Hej, jag heter",language:"Swedish"},{text:"Hei, nimeni on",language:"Finnish"},{text:"Salve, nomen mihi est",language:"Latin"},{text:"Cześć, nazywam się",language:"Polish"},{text:"Merhaba, benim adım",language:"Turkish"},{text:"Kia ora, ko au te",language:"Maori"}];let r=Math.floor(Math.random()*a.length),o=ee(Ge(a[r])),i=ee(0),n=ee(!1),d=null;function b(){r=Math.floor(Math.random()*a.length),D(o,a[r],!0),D(i,M(i)+1)}Be(()=>{d=setInterval(b,4e3)}),tt(()=>{d&&clearInterval(d)});var s=da(),v=y(s);$t(v,()=>M(i),x=>{var f=la();f.__keydown=[oa,n];var _=y(f),u=y(_);w(_);var p=L(_,2);{var l=c=>{var g=sa(),E=y(g);be(),w(g),K(()=>de(E,`${M(o).language??""} `)),te(1,g,()=>le,()=>({duration:100})),te(2,g,()=>le,()=>({duration:500})),N(c,g)};V(p,c=>{M(n)&&c(l)})}w(f),K(()=>{Ue(_,"aria-describedby",M(n)?"greeting-tooltip":void 0),de(u,`${M(o).text??""}..`)}),Ae("mouseenter",f,()=>D(n,!0)),Ae("mouseleave",f,()=>D(n,!1)),te(1,_,()=>le,()=>({duration:1800,delay:200})),N(x,f)}),w(s),N(t,s),W()}ne(["keydown"]);var ca=(t,e)=>{t.stopPropagation(),e.onremove?.()},ua=O('<button type="button" class="inline-flex items-center justify-center w-4 h-4 text-current rounded-full hover:bg-white/20 transition-colors duration-150" aria-label="Remove"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>'),va=O("<div><!> <!></div>");function ka(t,e){P(e,!0);let a=$(e,"variant",3,"primary"),r=$(e,"size",3,"md"),o=$(e,"removable",3,!1),i=$(e,"disabled",3,!1),n=$(e,"selected",3,!1),d=$(e,"class",3,""),b=ie(e,["$$slots","$$events","$$legacy","variant","size","removable","disabled","selected","class","onclick","onkeydown","onmouseenter","onmouseleave","onremove"]);const s={sm:"px-2 py-1 text-xs",md:"px-3 py-1.5 text-sm",lg:"px-4 py-2 text-base"},v={primary:"bg-blue-500/20 text-blue-200 border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50",secondary:"bg-teal-500/20 text-teal-200 border-teal-400/30 hover:bg-teal-500/30 hover:border-teal-400/50",accent:"bg-purple-500/20 text-purple-200 border-purple-400/30 hover:bg-purple-500/30 hover:border-purple-400/50",success:"bg-green-500/20 text-green-200 border-green-400/30 hover:bg-green-500/30 hover:border-green-400/50",warning:"bg-yellow-500/20 text-yellow-200 border-yellow-400/30 hover:bg-yellow-500/30 hover:border-yellow-400/50",error:"bg-red-500/20 text-red-200 border-red-400/30 hover:bg-red-500/30 hover:border-red-400/50",neutral:"bg-white/10 text-white/90 border-white/20 hover:bg-white/15 hover:border-white/30",glass:"bg-white/8 text-white/95 border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25"},x=We(()=>["inline-flex items-center gap-1.5 font-medium transition-all duration-200 rounded-full border","focus:outline-none focus:ring-2 focus:ring-white/20","disabled:opacity-50 disabled:cursor-not-allowed",s[r()],v[a()],n()?"ring-2 ring-white/30":"",i()?"pointer-events-none":"",d()].filter(Boolean).join(" "));var f=va();me(f,()=>({class:M(x),...b,onclick:e.onclick,onkeydown:e.onkeydown,onmouseenter:e.onmouseenter,onmouseleave:e.onmouseleave}));var _=y(f);Ot(_,e,"default",{});var u=L(_,2);{var p=l=>{var c=ua();c.__click=[ca,e],N(l,c)};V(u,l=>{o()&&l(p)})}w(f),N(t,f),W()}ne(["click"]);export{ka as C,ya as G,Me as I,xa as L,_a as N,wa as Q,Bt as a,ma as b,Ke as e,le as f,Qe as i,Ot as s,te as t};
