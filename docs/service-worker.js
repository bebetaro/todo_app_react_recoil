if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const o={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return o;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-7c877640"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./src/assets/images//icon-24-arrow-down.svg",revision:"f7ecdf1905314812c8bcbd7cc6a94718"},{url:"./src/assets/images//icon-24-arrow-up.svg",revision:"355d3f1552662b2767650592419e494a"},{url:"./src/assets/images//icon-24-back.svg",revision:"76641061598b8f997f5a32165df6d07f"},{url:"./src/assets/images//icon-24-expansion.svg",revision:"c91f12113083ca00001fa01cab68fef9"},{url:"./src/assets/images//icon-24-offline.svg",revision:"087a2c387a08edebc0bb64e29cdda8e3"},{url:"./src/assets/images//icon-24-verified.svg",revision:"3ab48a83a5953ecfc367a2dbbe639bc2"},{url:"bundle.js",revision:"f9e5ad988a376e1e7eaa5c470d130447"},{url:"bundle.js.LICENSE.txt",revision:"f78bb9c25687c9903b89004c98194541"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"5c79c5ba99e625dfc1a110142b3106f8"}],{})}));
