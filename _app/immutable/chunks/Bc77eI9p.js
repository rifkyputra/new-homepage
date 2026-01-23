import"./DsnmJJEf.js";import{am as O,an as Y,u as G,D as y,Z as I,F as o,a9 as E,G as b,i as R,j as J,k as V,l as Z,o as H,m as p,n as D,x as _,A as P,z as v,C as g,y as S,ah as W,I as X,ab as j}from"./Ddo7XWCv.js";import{s as $,r as tt,p as et,i as C}from"./zGD_bbhG.js";import{s as st,f as rt}from"./DOHVBits.js";import{b as ot}from"./DbXC-GL3.js";import{S as at,s as it,h as B,g as nt,n as N,a as lt,b as ut,t as A}from"./Bs_no7bU.js";import{I as ct}from"./DEv7MZAp.js";var K=class extends at{#e;#r=void 0;#t;#s;constructor(t,e){super(),this.#e=t,this.setOptions(e),this.bindMethods(),this.#o()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){const e=this.options;this.options=this.#e.defaultMutationOptions(t),it(this.options,e)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#t,observer:this}),e?.mutationKey&&this.options.mutationKey&&B(e.mutationKey)!==B(this.options.mutationKey)?this.reset():this.#t?.state.status==="pending"&&this.#t.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#t?.removeObserver(this)}onMutationUpdate(t){this.#o(),this.#a(t)}getCurrentResult(){return this.#r}reset(){this.#t?.removeObserver(this),this.#t=void 0,this.#o(),this.#a()}mutate(t,e){return this.#s=e,this.#t?.removeObserver(this),this.#t=this.#e.getMutationCache().build(this.#e,this.options),this.#t.addObserver(this),this.#t.execute(t)}#o(){const t=this.#t?.state??nt();this.#r={...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset}}#a(t){N.batch(()=>{if(this.#s&&this.hasListeners()){const e=this.#r.variables,a=this.#r.context,r={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};if(t?.type==="success"){try{this.#s.onSuccess?.(t.data,e,a,r)}catch(s){Promise.reject(s)}try{this.#s.onSettled?.(t.data,null,e,a,r)}catch(s){Promise.reject(s)}}else if(t?.type==="error"){try{this.#s.onError?.(t.error,e,a,r)}catch(s){Promise.reject(s)}try{this.#s.onSettled?.(void 0,t.error,e,a,r)}catch(s){Promise.reject(s)}}}this.listeners.forEach(e=>{e(this.#r)})})}};function dt(t){return lt()}function ht(t,e){switch(t){case"post":Y(e);break;case"pre":O(e);break}}const q=(t,e,a)=>{let r=!1,s=Array.isArray(t)?[]:void 0;ht(e,()=>{const i=Array.isArray(t)?t.map(m=>m()):t();if(!r){r=!0,s=i;return}const u=G(()=>a(i,s));return s=i,u})};function mt(t,e){const a=E(()=>dt());let r=y(I(new K(o(a),t())));q(()=>o(a),"pre",()=>{b(r,new K(o(a),t()),!0)}),O(()=>{o(r).setOptions(t())});const s=(m,d)=>{o(r).mutate(m,d).catch(ut)};let i=y(I(o(r).getCurrentResult()));q(()=>o(r),"pre",()=>{b(i,o(r).getCurrentResult(),!0)}),O(()=>o(r).subscribe(d=>{N.batchCalls(()=>{Object.assign(o(i),d)})()}));const u=E(()=>new Proxy(o(i),{get:(m,d)=>{const x={...o(i),mutate:s,mutateAsync:o(i).mutate};return d=="value"?x:x[d]}}));return o(u)}function ft(t,e){R(e,!0);/**
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
 */let a=tt(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];ct(t,$({name:"mail"},()=>a,{get iconNode(){return r},children:(s,i)=>{var u=J(),m=V(u);Z(m,()=>e.children??H),p(s,u)},$$slots:{default:!0}})),D()}var pt=_(`<div class="bg-[#f8f8f8] backdrop-blur-sm rounded-2xl p-6 border border-[#d8d8d8] text-center"><h2 class="text-2xl font-bold mb-2 text-[#080808]">Thanks — message sent</h2> <p class="text-[#9c9c9c]">I'll reply to you shortly.</p></div>`),bt=_(`<p class="text-sm text-red-500 font-['IBM_Plex_Mono']"> </p>`),xt=_(`<form class="space-y-4"><div><label for="name" class="block text-xs font-semibold font-['IBM_Plex_Mono'] text-[#080808] mb-2">Name</label> <input type="text" id="name" name="name" required class="w-full px-4 py-2 bg-[#f8f8f8] border border-[#d8d8d8] rounded text-xs font-['IBM_Plex_Mono'] text-[#080808] placeholder:text-[#757575] focus:outline-none focus:border-[#3f8e00]" placeholder="Your name"/></div> <div><label for="email" class="block text-xs font-semibold font-['IBM_Plex_Mono'] text-[#080808] mb-2">Email</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 bg-[#f8f8f8] border border-[#d8d8d8] rounded text-xs font-['IBM_Plex_Mono'] text-[#080808] placeholder:text-[#757575] focus:outline-none focus:border-[#3f8e00]" placeholder="your@email.com"/></div> <div><label for="message" class="block text-xs font-semibold font-['IBM_Plex_Mono'] text-[#080808] mb-2">Message</label> <textarea id="message" name="message" rows="5" required class="w-full px-4 py-2 bg-[#f8f8f8] border border-[#d8d8d8] rounded text-xs font-['IBM_Plex_Mono'] text-[#080808] placeholder:text-[#757575] focus:outline-none focus:border-[#3f8e00] resize-none" placeholder="Your message..."></textarea></div> <!> <button type="submit" class="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#3f8e00] hover:bg-[#2d6600] border border-[#62ba1b] rounded text-white font-bold font-['IBM_Plex_Mono'] text-sm shadow-[0px_8px_30px_0px_rgba(63,142,0,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"><!> <!></button></form>`),vt=_("<div><!></div>");function Ct(t,e){R(e,!0);const a="https://rifky-backend.rifqempul.workers.dev";let r=et(e,"class",3,""),s=y(null),i=y(!1);const u=mt(()=>({mutationFn:async n=>{const l=await fetch(`${a}/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),h=await l.json();if(!l.ok||!h.success)throw new Error(h.error||"Something went wrong. Please try again.");return h},onSuccess:()=>{b(i,!0),o(s)?.reset(),A.success("Message sent successfully!",{description:"I'll get back to you as soon as possible."}),e.onSuccess?.()},onError:n=>{A.error("Failed to send message",{description:n.message||"Something went wrong. Please try again."})}}));function m(n){n.preventDefault();const l=n.target;b(s,l,!0);const h=new FormData(l),M={name:h.get("name")?.toString().trim()||"",email:h.get("email")?.toString().trim()||"",message:h.get("message")?.toString().trim()||""};u.mutate(M)}var d=vt(),x=v(d);{var F=n=>{var l=pt();p(n,l)},L=n=>{var l=xt(),h=S(v(l),6);{var M=c=>{var f=bt(),Q=v(f,!0);g(f),P(()=>X(Q,u.error?.message||"An error occurred")),p(c,f)};C(h,c=>{u.isError&&c(M)})}var w=S(h,2),k=v(w);ft(k,{class:"w-4 h-4"});var U=S(k,2);{var T=c=>{var f=j("Sending...");p(c,f)},z=c=>{var f=j("Submit");p(c,f)};C(U,c=>{u.isPending?c(T):c(z,!1)})}g(w),g(l),ot(l,c=>b(s,c),()=>o(s)),P(()=>w.disabled=u.isPending),W("submit",l,m),p(n,l)};C(x,n=>{o(i)?n(F):n(L,!1)})}g(d),P(()=>st(d,1,rt(r()))),p(t,d),D()}export{Ct as C,ft as M};
