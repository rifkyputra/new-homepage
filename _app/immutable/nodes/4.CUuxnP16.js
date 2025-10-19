import{l as V,C as vt,f as xt}from"../chunks/DFOydx2P.js";import{H as ft}from"../chunks/D0iwhpLH.js";import"../chunks/DsnmJJEf.js";import{g as T,i as E,j as I,k as w,l as W,m as f,n as Y,aM as gt,o as O,X as ut,r as o,w as S,q as a,$ as _t,t,u as b,v as ht}from"../chunks/CaBH6Iz7.js";import{s as x}from"../chunks/VpGTQMf3.js";import{s as Z,r as tt,i as bt}from"../chunks/oW7ZNcUw.js";import{I as et,N as wt,e as yt,t as H,i as $t,f as M}from"../chunks/B6vH-BbK.js";import{c as kt}from"../chunks/BbK0v5s1.js";import{a as g}from"../chunks/Qi9MA218.js";import{C as jt}from"../chunks/S7rVYxjA.js";function U(s,r){T(r,!0);/**
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
 */let e=tt(r,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];et(s,Z({name:"arrow-left"},()=>e,{get iconNode(){return n},children:(d,y)=>{var l=I(),p=w(l);W(p,()=>r.children??Y),f(d,l)},$$slots:{default:!0}})),E()}function Bt(s,r){T(r,!0);/**
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
 */let e=tt(r,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]];et(s,Z({name:"share-2"},()=>e,{get iconNode(){return n},children:(d,y)=>{var l=I(),p=w(l);W(p,()=>r.children??Y),f(d,l)},$$slots:{default:!0}})),E()}function Nt(s,r){throw new ft(s,r)}const Pt=async({params:s})=>{const e=(await V()).find(n=>n.slug===s.slug);if(!e)throw Nt(404,"Blog post not found");return{post:e}};async function Ct(){return(await V()).map(r=>({slug:r.slug}))}const Gt=Object.freeze(Object.defineProperty({__proto__:null,entries:Ct,load:Pt},Symbol.toStringTag,{value:"Module"}));var St=O('<meta name="description"/> <meta property="og:title"/> <meta property="og:description"/> <meta property="og:type" content="article"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"/> <meta name="twitter:description"/>',1),Ht=O('<span class="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm"> </span>'),Mt=(s,r)=>{navigator.share?navigator.share({title:r.metadata.title,text:r.metadata.excerpt,url:window.location.href}):navigator.clipboard.writeText(window.location.href)},Tt=O('<div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"><div class="flex justify-center pt-8"><!></div> <main class="container mx-auto px-6 py-12"><div class="mb-8"><a href="/blog" class="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors"><!> Back to Blog</a></div> <article class="max-w-4xl mx-auto"><header class="mb-12"><div class="flex flex-wrap gap-2 mb-4"></div> <h1 class="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"> </h1> <p class="text-xl text-gray-300 mb-8 leading-relaxed"> </p> <div class="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-white/20"><div class="flex items-center gap-6 text-gray-300"><div class="flex items-center gap-2"><!> <span> </span></div> <div class="flex items-center gap-2"><!> <span> </span></div> <span> </span></div> <button class="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"><!> Share</button></div></header> <div class="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-purple-300 prose-strong:text-white prose-code:text-purple-300 prose-pre:bg-slate-800 prose-pre:border prose-pre:border-white/20"><!></div> <footer class="mt-16 pt-8 border-t border-white/20"><div class="flex justify-between items-center"><a href="/blog" class="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors font-semibold"><!> Back to Blog</a> <div class="text-center"><p class="text-gray-400 mb-2">Enjoyed this article?</p> <a href="/links" class="text-purple-300 hover:text-purple-200 transition-colors font-semibold">Follow me for more content</a></div></div></footer></article></main></div>');function Jt(s,r){T(r,!0);const{post:e}=r.data;var n=Tt();ut(i=>{var m=St(),c=w(m),v=o(c,2),h=o(v,2),Q=o(h,6),mt=o(Q,2);S(()=>{_t.title=`${e.metadata.title??""} - Rifky Putra`,g(c,"content",e.metadata.excerpt),g(v,"content",e.metadata.title),g(h,"content",e.metadata.excerpt),g(Q,"content",e.metadata.title),g(mt,"content",e.metadata.excerpt)}),f(i,m)});var d=a(n),y=a(d);wt(y,{}),t(d);var l=o(d,2),p=a(l),q=a(p),at=a(q);U(at,{class:"w-4 h-4"}),b(),t(q),t(p);var z=o(p,2),u=a(z),$=a(u);yt($,21,()=>e.metadata.tags,$t,(i,m)=>{var c=Ht(),v=a(c,!0);t(c),S(()=>x(v,ht(m))),f(i,c)}),t($);var k=o($,2),rt=a(k,!0);t(k);var j=o(k,2),ot=a(j,!0);t(j);var A=o(j,2),B=a(A),N=a(B),D=a(N);jt(D,{class:"w-5 h-5"});var F=o(D,2),st=a(F,!0);t(F),t(N);var P=o(N,2),R=a(P);vt(R,{class:"w-5 h-5"});var X=o(R,2),nt=a(X,!0);t(X),t(P);var G=o(P,2),it=a(G);t(G),t(B);var C=o(B,2);C.__click=[Mt,e];var lt=a(C);Bt(lt,{class:"w-4 h-4"}),b(),t(C),t(A),t(u);var _=o(u,2),pt=a(_);{var ct=i=>{var m=I(),c=w(m);kt(c,()=>e.component,(v,h)=>{h(v,{})}),f(i,m)};bt(pt,i=>{e.component&&i(ct)})}t(_);var J=o(_,2),K=a(J),L=a(K),dt=a(L);U(dt,{class:"w-4 h-4"}),b(),t(L),b(2),t(K),t(J),t(z),t(l),t(n),S(i=>{x(rt,e.metadata.title),x(ot,e.metadata.excerpt),x(st,i),x(nt,e.metadata.readTime),x(it,`By ${e.metadata.author??""}`)},[()=>xt(e.metadata.date)]),H(1,p,()=>M,()=>({duration:600})),H(1,u,()=>M,()=>({duration:800,delay:200})),H(1,_,()=>M,()=>({duration:800,delay:400})),f(s,n),E()}gt(["click"]);export{Jt as component,Gt as universal};
