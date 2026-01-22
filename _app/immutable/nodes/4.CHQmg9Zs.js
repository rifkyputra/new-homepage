import{l as W,C as vt,f as ft}from"../chunks/DdkDWJQF.js";import{H as xt}from"../chunks/D0iwhpLH.js";import"../chunks/DsnmJJEf.js";import{o as E,t as F,a as u,v as X,b as f,w as G,x as Y,a3 as gt,ac as _t,f as M,s as o,B as H,c as a,I as v,ad as ut,r as e,C as w,F as ht}from"../chunks/B4IWmBRq.js";import{s as Z,r as tt,i as bt}from"../chunks/DY4nccB3.js";import{e as yt,b as _,i as wt}from"../chunks/CmpTQlA3.js";import{c as $t}from"../chunks/DSLF8Oue.js";import{t as I,f as T}from"../chunks/Z46oLU-1.js";import{I as et,N as kt}from"../chunks/C56_P2eU.js";import{G as Bt}from"../chunks/8NEmP_Au.js";import{C as jt}from"../chunks/CTYsDjOd.js";function V(n,r){E(r,!0);/**
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
 */let t=tt(r,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];et(n,Z({name:"arrow-left"},()=>t,{get iconNode(){return i},children:(c,d)=>{var s=F(),l=u(s);X(l,()=>r.children??Y),f(c,s)},$$slots:{default:!0}})),G()}function Nt(n,r){E(r,!0);/**
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
 */let t=tt(r,["$$slots","$$events","$$legacy"]);const i=[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]];et(n,Z({name:"share-2"},()=>t,{get iconNode(){return i},children:(c,d)=>{var s=F(),l=u(s);X(l,()=>r.children??Y),f(c,s)},$$slots:{default:!0}})),G()}function Pt(n,r){throw new xt(n,r)}const Ct=async({params:n})=>{const t=(await W()).find(i=>i.slug===n.slug);if(!t)throw Pt(404,"Blog post not found");return{post:t}};async function St(){return(await W()).map(r=>({slug:r.slug}))}const Lt=Object.freeze(Object.defineProperty({__proto__:null,entries:St,load:Ct},Symbol.toStringTag,{value:"Module"}));var Ht=M('<meta name="description"/> <meta property="og:title"/> <meta property="og:description"/> <meta property="og:type" content="article"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"/> <meta name="twitter:description"/>',1),It=M('<span class="px-3 py-1 bg-slate-500/30 text-gray-200 rounded-full text-sm"> </span>'),Tt=(n,r)=>{navigator.share?navigator.share({title:r.metadata.title,text:r.metadata.excerpt,url:window.location.href}):navigator.clipboard.writeText(window.location.href)},Et=M('<div class="flex justify-center pt-8"><!></div> <main class="container mx-auto px-6 py-12"><div class="mb-8"><a href="/blog" class="inline-flex items-center gap-2 text-gray-300 hover:text-gray-200 transition-colors"><!> Back to Blog</a></div> <article class="max-w-4xl mx-auto"><header class="mb-12"><div class="flex flex-wrap gap-2 mb-4"></div> <h1 class="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"> </h1> <p class="text-xl text-gray-300 mb-8 leading-relaxed"> </p> <div class="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-white/20"><div class="flex items-center gap-6 text-gray-300"><div class="flex items-center gap-2"><!> <span> </span></div> <div class="flex items-center gap-2"><!> <span> </span></div> <span> </span></div> <button class="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"><!> Share</button></div></header> <div class="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-gray-300 prose-strong:text-white prose-code:text-gray-300 prose-pre:bg-slate-800 prose-pre:border prose-pre:border-white/20"><!></div> <footer class="mt-16 pt-8 border-t border-white/20"><div class="flex justify-between items-center"><a href="/blog" class="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 rounded-lg transition-colors font-semibold"><!> Back to Blog</a> <div class="text-center"><p class="text-gray-400 mb-2">Enjoyed this article?</p> <a href="/links" class="text-gray-200 hover:text-white transition-colors font-semibold">Follow me for more content</a></div></div></footer></article></main>',1);function Qt(n,r){E(r,!0);const{post:t}=r.data;_t(i=>{var c=Ht(),d=u(c),s=o(d,2),l=o(s,2),x=o(l,6),m=o(x,2);H(()=>{ut.title=`${t.metadata.title??""} - Rifky Putra`,_(d,"content",t.metadata.excerpt),_(s,"content",t.metadata.title),_(l,"content",t.metadata.excerpt),_(x,"content",t.metadata.title),_(m,"content",t.metadata.excerpt)}),f(i,c)}),Bt(n,{class:"min-h-screen text-white",children:(i,c)=>{var d=Et(),s=u(d),l=a(s);kt(l,{}),e(s);var x=o(s,2),m=a(x),O=a(m),at=a(O);V(at,{class:"w-4 h-4"}),w(),e(O),e(m);var z=o(m,2),h=a(z),$=a(h);yt($,21,()=>t.metadata.tags,wt,(p,y)=>{var g=It(),S=a(g,!0);e(g),H(()=>v(S,ht(y))),f(p,g)}),e($);var k=o($,2),rt=a(k,!0);e(k);var B=o(k,2),ot=a(B,!0);e(B);var A=o(B,2),j=a(A),N=a(j),D=a(N);jt(D,{class:"w-5 h-5"});var R=o(D,2),st=a(R,!0);e(R),e(N);var P=o(N,2),q=a(P);vt(q,{class:"w-5 h-5"});var J=o(q,2),nt=a(J,!0);e(J),e(P);var K=o(P,2),it=a(K);e(K),e(j);var C=o(j,2);C.__click=[Tt,t];var lt=a(C);Nt(lt,{class:"w-4 h-4"}),w(),e(C),e(A),e(h);var b=o(h,2),ct=a(b);{var dt=p=>{var y=F(),g=u(y);$t(g,()=>t.component,(S,mt)=>{mt(S,{})}),f(p,y)};bt(ct,p=>{t.component&&p(dt)})}e(b);var L=o(b,2),Q=a(L),U=a(Q),pt=a(U);V(pt,{class:"w-4 h-4"}),w(),e(U),w(2),e(Q),e(L),e(z),e(x),H(p=>{v(rt,t.metadata.title),v(ot,t.metadata.excerpt),v(st,p),v(nt,t.metadata.readTime),v(it,`By ${t.metadata.author??""}`)},[()=>ft(t.metadata.date)]),I(1,m,()=>T,()=>({duration:600})),I(1,h,()=>T,()=>({duration:800,delay:200})),I(1,b,()=>T,()=>({duration:800,delay:400})),f(i,d)},$$slots:{default:!0}}),G()}gt(["click"]);export{Qt as component,Lt as universal};
