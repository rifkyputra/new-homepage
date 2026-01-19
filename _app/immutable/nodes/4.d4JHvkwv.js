import{l as W,C as vt,f as xt}from"../chunks/DbliTh_W.js";import{H as gt}from"../chunks/D0iwhpLH.js";import"../chunks/DsnmJJEf.js";import{i as z,n as A,j as D,k as b,l as X,m as g,o as Y,a1 as ft,x as E,a5 as _t,B as o,y as S,z as a,C as x,a6 as ht,A as t,D as y,N as ut}from"../chunks/7jZ7zA9w.js";import{s as Z,r as tt,i as yt}from"../chunks/DhpeYoMj.js";import{e as bt,a as f,i as wt}from"../chunks/B9fcM2bj.js";import{c as $t}from"../chunks/r3fEVCHW.js";import{I as et,N as kt,t as H,f as T}from"../chunks/QhXGDYdU.js";import{C as Bt}from"../chunks/D6qhaNdy.js";function V(s,r){z(r,!0);/**
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
 */let e=tt(r,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];et(s,Z({name:"arrow-left"},()=>e,{get iconNode(){return n},children:(p,w)=>{var l=D(),c=b(l);X(c,()=>r.children??Y),g(p,l)},$$slots:{default:!0}})),A()}function jt(s,r){z(r,!0);/**
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
 */let e=tt(r,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]];et(s,Z({name:"share-2"},()=>e,{get iconNode(){return n},children:(p,w)=>{var l=D(),c=b(l);X(c,()=>r.children??Y),g(p,l)},$$slots:{default:!0}})),A()}function Nt(s,r){throw new gt(s,r)}const Ct=async({params:s})=>{const e=(await W()).find(n=>n.slug===s.slug);if(!e)throw Nt(404,"Blog post not found");return{post:e}};async function Pt(){return(await W()).map(r=>({slug:r.slug}))}const Gt=Object.freeze(Object.defineProperty({__proto__:null,entries:Pt,load:Ct},Symbol.toStringTag,{value:"Module"}));var St=E('<meta name="description"/> <meta property="og:title"/> <meta property="og:description"/> <meta property="og:type" content="article"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"/> <meta name="twitter:description"/>',1),Ht=E('<span class="px-3 py-1 bg-slate-500/30 text-gray-200 rounded-full text-sm"> </span>'),Tt=(s,r)=>{navigator.share?navigator.share({title:r.metadata.title,text:r.metadata.excerpt,url:window.location.href}):navigator.clipboard.writeText(window.location.href)},zt=E('<div class="min-h-screen bg-gradient-to-br from-slate-800 to-slate-700 text-white"><div class="flex justify-center pt-8"><!></div> <main class="container mx-auto px-6 py-12"><div class="mb-8"><a href="/blog" class="inline-flex items-center gap-2 text-gray-300 hover:text-gray-200 transition-colors"><!> Back to Blog</a></div> <article class="max-w-4xl mx-auto"><header class="mb-12"><div class="flex flex-wrap gap-2 mb-4"></div> <h1 class="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"> </h1> <p class="text-xl text-gray-300 mb-8 leading-relaxed"> </p> <div class="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-white/20"><div class="flex items-center gap-6 text-gray-300"><div class="flex items-center gap-2"><!> <span> </span></div> <div class="flex items-center gap-2"><!> <span> </span></div> <span> </span></div> <button class="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"><!> Share</button></div></header> <div class="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-gray-300 prose-strong:text-white prose-code:text-gray-300 prose-pre:bg-slate-800 prose-pre:border prose-pre:border-white/20"><!></div> <footer class="mt-16 pt-8 border-t border-white/20"><div class="flex justify-between items-center"><a href="/blog" class="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 rounded-lg transition-colors font-semibold"><!> Back to Blog</a> <div class="text-center"><p class="text-gray-400 mb-2">Enjoyed this article?</p> <a href="/links" class="text-gray-200 hover:text-white transition-colors font-semibold">Follow me for more content</a></div></div></footer></article></main></div>');function Jt(s,r){z(r,!0);const{post:e}=r.data;var n=zt();_t(i=>{var m=St(),d=b(m),v=o(d,2),u=o(v,2),U=o(u,6),mt=o(U,2);S(()=>{ht.title=`${e.metadata.title??""} - Rifky Putra`,f(d,"content",e.metadata.excerpt),f(v,"content",e.metadata.title),f(u,"content",e.metadata.excerpt),f(U,"content",e.metadata.title),f(mt,"content",e.metadata.excerpt)}),g(i,m)});var p=a(n),w=a(p);kt(w,{}),t(p);var l=o(p,2),c=a(l),I=a(c),at=a(I);V(at,{class:"w-4 h-4"}),y(),t(I),t(c);var M=o(c,2),_=a(M),$=a(_);bt($,21,()=>e.metadata.tags,wt,(i,m)=>{var d=Ht(),v=a(d,!0);t(d),S(()=>x(v,ut(m))),g(i,d)}),t($);var k=o($,2),rt=a(k,!0);t(k);var B=o(k,2),ot=a(B,!0);t(B);var O=o(B,2),j=a(O),N=a(j),F=a(N);Bt(F,{class:"w-5 h-5"});var R=o(F,2),st=a(R,!0);t(R),t(N);var C=o(N,2),q=a(C);vt(q,{class:"w-5 h-5"});var G=o(q,2),nt=a(G,!0);t(G),t(C);var J=o(C,2),it=a(J);t(J),t(j);var P=o(j,2);P.__click=[Tt,e];var lt=a(P);jt(lt,{class:"w-4 h-4"}),y(),t(P),t(O),t(_);var h=o(_,2),ct=a(h);{var dt=i=>{var m=D(),d=b(m);$t(d,()=>e.component,(v,u)=>{u(v,{})}),g(i,m)};yt(ct,i=>{e.component&&i(dt)})}t(h);var K=o(h,2),L=a(K),Q=a(L),pt=a(Q);V(pt,{class:"w-4 h-4"}),y(),t(Q),y(2),t(L),t(K),t(M),t(l),t(n),S(i=>{x(rt,e.metadata.title),x(ot,e.metadata.excerpt),x(st,i),x(nt,e.metadata.readTime),x(it,`By ${e.metadata.author??""}`)},[()=>xt(e.metadata.date)]),H(1,c,()=>T,()=>({duration:600})),H(1,_,()=>T,()=>({duration:800,delay:200})),H(1,h,()=>T,()=>({duration:800,delay:400})),g(s,n),A()}ft(["click"]);export{Jt as component,Gt as universal};
