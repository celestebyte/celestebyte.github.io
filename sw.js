(()=>{var n="https://celestebyte.github.io/";var i="luna_sw",r="../offline.html",c="../offline.jpg",d="../images/error.svg",f=n;console.log("load sw.js",f);self.addEventListener("install",e=>{e.waitUntil(caches.open(i).then(t=>{t.add(new Request(r,{cache:"reload"})),t.add(new Request(c,{cache:"reload"})),t.add(new Request(d,{cache:"reload"}))}))});self.addEventListener("activate",e=>{e.waitUntil((async()=>{"navigationPreload"in self.registration&&await self.registration.navigationPreload.enable()})()),self.clients.claim()});self.skipWaiting();self.addEventListener("fetch",e=>{(e.request.url.startsWith(self.location.origin)||e.request.url.match(/^https:\/\/cdn\.jsdelivr\.net/))&&e.respondWith((async()=>{let t=await caches.open(i);try{let a=await fetch(e.request);return a.status===200&&await t.put(e.request,a.clone()),a}catch{let s=await t.match(e.request);return s||await t.match(r)}})())});})();
