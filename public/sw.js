if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const t=e=>a(e,i),o={module:{uri:i},exports:r,require:t};s[i]=Promise.all(c.map((e=>o[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-1QbXMQ-1cgltmjbH7i1Cv.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1QbXMQ-1cgltmjbH7i1Cv/_buildManifest.js",revision:"e5e5851595512498c361bcc10af63f6e"},{url:"/_next/static/1QbXMQ-1cgltmjbH7i1Cv/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-08a52d9a2b1b2d3e.js",revision:"08a52d9a2b1b2d3e"},{url:"/_next/static/chunks/100-38b4445ffd921a41.js",revision:"38b4445ffd921a41"},{url:"/_next/static/chunks/141-22ac0ca60c3eac36.js",revision:"22ac0ca60c3eac36"},{url:"/_next/static/chunks/17-3328a8a818601829.js",revision:"3328a8a818601829"},{url:"/_next/static/chunks/17007de1-11ff5d611818adb7.js",revision:"11ff5d611818adb7"},{url:"/_next/static/chunks/1bfc9850-53d6f45dc084575b.js",revision:"53d6f45dc084575b"},{url:"/_next/static/chunks/466-c9b560a80e961154.js",revision:"c9b560a80e961154"},{url:"/_next/static/chunks/479-4d90f584e947e630.js",revision:"4d90f584e947e630"},{url:"/_next/static/chunks/554-2ec06f42fc0d20ca.js",revision:"2ec06f42fc0d20ca"},{url:"/_next/static/chunks/653-a48ca216a0c5fffc.js",revision:"a48ca216a0c5fffc"},{url:"/_next/static/chunks/675-8a7bcb32c3fc768b.js",revision:"8a7bcb32c3fc768b"},{url:"/_next/static/chunks/696-695f4b95dd3187b3.js",revision:"695f4b95dd3187b3"},{url:"/_next/static/chunks/803-fe8f8eab99154816.js",revision:"fe8f8eab99154816"},{url:"/_next/static/chunks/853-b02802ef870191a6.js",revision:"b02802ef870191a6"},{url:"/_next/static/chunks/95b64a6e-bd006fc7c913a2a6.js",revision:"bd006fc7c913a2a6"},{url:"/_next/static/chunks/c16184b3-42c9ca767714b4ac.js",revision:"42c9ca767714b4ac"},{url:"/_next/static/chunks/c31f1870-c5c6748d2aa99192.js",revision:"c5c6748d2aa99192"},{url:"/_next/static/chunks/d0447323-1d28c02e18c8ee03.js",revision:"1d28c02e18c8ee03"},{url:"/_next/static/chunks/d7eeaac4-92f162fb3d2bcd19.js",revision:"92f162fb3d2bcd19"},{url:"/_next/static/chunks/framework-114634acb84f8baa.js",revision:"114634acb84f8baa"},{url:"/_next/static/chunks/main-8e65c6fcee628a80.js",revision:"8e65c6fcee628a80"},{url:"/_next/static/chunks/pages/_app-b7f256a33dea8613.js",revision:"b7f256a33dea8613"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/_offline-a555dc22c16cb0a2.js",revision:"a555dc22c16cb0a2"},{url:"/_next/static/chunks/pages/dashboard-c2ec3f47c4ce8452.js",revision:"c2ec3f47c4ce8452"},{url:"/_next/static/chunks/pages/dashboard/admin-121ca5e8962f5995.js",revision:"121ca5e8962f5995"},{url:"/_next/static/chunks/pages/dashboard/admin/%5Bid%5D-3cd5bf39ba7798b2.js",revision:"3cd5bf39ba7798b2"},{url:"/_next/static/chunks/pages/dashboard/myorders-73e4f40f58717e4f.js",revision:"73e4f40f58717e4f"},{url:"/_next/static/chunks/pages/dashboard/payment-46581afe03bf857f.js",revision:"46581afe03bf857f"},{url:"/_next/static/chunks/pages/dashboard/payment/order-44e24aa5a7652303.js",revision:"44e24aa5a7652303"},{url:"/_next/static/chunks/pages/dashboard/payment/receive-bc8218ab934e0815.js",revision:"bc8218ab934e0815"},{url:"/_next/static/chunks/pages/dashboard/payment/tax-638e81dc4b5f9ce6.js",revision:"638e81dc4b5f9ce6"},{url:"/_next/static/chunks/pages/dashboard/payment/voucher-123d5680ec8ae5cb.js",revision:"123d5680ec8ae5cb"},{url:"/_next/static/chunks/pages/dashboard/settings-519385321c6f9d65.js",revision:"519385321c6f9d65"},{url:"/_next/static/chunks/pages/dashboard/support-a5b81360e0d5168b.js",revision:"a5b81360e0d5168b"},{url:"/_next/static/chunks/pages/dashboard/transactions-27d0b0243b661e22.js",revision:"27d0b0243b661e22"},{url:"/_next/static/chunks/pages/index-d26171331032279c.js",revision:"d26171331032279c"},{url:"/_next/static/chunks/pages/login-db79073d1bc3bb06.js",revision:"db79073d1bc3bb06"},{url:"/_next/static/chunks/pages/register-fb99897a4ecbfbf5.js",revision:"fb99897a4ecbfbf5"},{url:"/_next/static/chunks/pages/track-14a337efb4cd3eb4.js",revision:"14a337efb4cd3eb4"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b4e069b4701168b7.js",revision:"b4e069b4701168b7"},{url:"/_next/static/css/1024c5adb7b1145b.css",revision:"1024c5adb7b1145b"},{url:"/_next/static/css/55ee97fc18160e46.css",revision:"55ee97fc18160e46"},{url:"/_offline",revision:"1QbXMQ-1cgltmjbH7i1Cv"},{url:"/bgadmin.jpeg",revision:"31fb5d23ebf1f00932fa6a5697b72b67"},{url:"/cardbg.png",revision:"254a2dba4da899c58c2366eced88f195"},{url:"/hero1.jpeg",revision:"dd230f8753cb962815916f4c79ae8ca5"},{url:"/herobg.png",revision:"684ae5a6f4292ced9a52a7547303caba"},{url:"/icons/icon-144x144.png",revision:"74d7a7da497b4c3324a6f2bf4816bb57"},{url:"/icons/icon-192x192.png",revision:"58409b1883a81657a8b9ce0775b905ca"},{url:"/icons/icon-36x36.png",revision:"15fe157c2f3427d8e8b5cc0124729c6d"},{url:"/icons/icon-48x48.png",revision:"a36cdc3cb137d09358453409d294094e"},{url:"/icons/icon-512x512.png",revision:"20e22bf222e1c5fc148d02e6b8e93b08"},{url:"/icons/icon-72x72.png",revision:"a4fe4f8761f6bd6373ed27aa11573374"},{url:"/icons/icon-96x96.png",revision:"0a28f4c7c131f1ff261c606dcdc06229"},{url:"/img2.jpeg",revision:"b753c63f02d8faa803df43abb97e4458"},{url:"/img3.jpeg",revision:"f0babcf8bd6baeb3980a445793d43ea6"},{url:"/img4.jpeg",revision:"8bfaa607fad1155d2aced1bdbf32b03f"},{url:"/img6.jpeg",revision:"07b2e55e60361423feb7ff8c444d619d"},{url:"/manifest.json",revision:"263a8ed3941f602cfaa91a3b36d393be"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/sectionbg.png",revision:"0f7821fc7039c704e5532becf465c678"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
