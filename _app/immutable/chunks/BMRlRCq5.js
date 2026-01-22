import{t as i,f as c,v as m,u as _,r as h,h as b,w as y,i as S,j as $,k,l as E,m as x,n as I,o as N}from"./Ddo7XWCv.js";import"./DsnmJJEf.js";import{s as V,r as j}from"./zGD_bbhG.js";import{I as M}from"./WtkiIYrv.js";function w(e,a,v=a){var o=new WeakSet;i(e,"input",async l=>{var r=l?e.defaultValue:e.value;if(r=f(e)?d(r):r,v(r),c!==null&&o.add(c),await m(),r!==(r=a())){var t=e.selectionStart,s=e.selectionEnd,u=e.value.length;if(e.value=r??"",s!==null){var n=e.value.length;t===s&&s===u&&n>u?(e.selectionStart=n,e.selectionEnd=n):(e.selectionStart=t,e.selectionEnd=Math.min(s,n))}}}),(b&&e.defaultValue!==e.value||_(a)==null&&e.value)&&(v(f(e)?d(e.value):e.value),c!==null&&o.add(c)),h(()=>{var l=a();if(e===document.activeElement){var r=y??c;if(o.has(r))return}f(e)&&l===d(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function f(e){var a=e.type;return a==="number"||a==="range"}function d(e){return e===""?null:+e}function z(e,a){S(a,!0);/**
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
 */let v=j(a,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];M(e,V({name:"search"},()=>v,{get iconNode(){return o},children:(l,r)=>{var t=$(),s=k(t);E(s,()=>a.children??N),x(l,t)},$$slots:{default:!0}})),I()}export{z as S,w as b};
