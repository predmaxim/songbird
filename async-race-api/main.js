(()=>{"use strict";var e={192:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(537),a=t.n(r),c=t(645),o=t.n(c)()(a());o.push([e.id,".dispnone{display:none !important}#app{position:relative}.race__header,.race__body{display:flex;gap:10px;align-items:center}.race{margin-bottom:30px;border-bottom:dashed 3px}.finish-flag-icon{margin-left:auto;margin-right:60px}.btn{padding:5px 10px;text-transform:uppercase}.controls-create-car,.controls-update-car{display:flex;gap:10px;margin-bottom:10px;flex-wrap:wrap}.car-name-update,.car-name-create{padding:5px}.car-color-update,.car-color-create{height:29px}.winners-table__car{display:flex;gap:20px;align-items:center;margin-bottom:10px;justify-content:space-around;text-align:center}.winners-table__header{display:flex;gap:20px;align-items:center}.winners-table__body{padding:10px;max-width:400px}.winners-table__header{display:flex;align-items:center;justify-content:space-around;background:#d1d1d1;font-weight:700;text-align:center;padding:10px;max-width:400px}.menu{margin-bottom:30px}.car-controls{display:flex;flex-direction:column;gap:10px}.winner-message-container{margin:auto;padding:25px;border-radius:15px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:#47f56f;font-size:20px}.winner-message-container .winner-message{margin:auto}","",{version:3,sources:["webpack://./src/style.scss"],names:[],mappings:"AAEA,UACE,uBAAA,CAGF,KACE,iBAAA,CAGF,0BAEE,YAAA,CACA,QAAA,CACA,kBAAA,CAIF,MACE,kBAAA,CACA,wBAAA,CAGF,kBACE,gBAAA,CACA,iBAAA,CAGF,KACE,gBAAA,CACA,wBAAA,CAGF,0CAEE,YAAA,CAEA,QAAA,CACA,kBAAA,CACA,cAAA,CAGF,kCAEE,WAAA,CAGF,oCAEE,WAAA,CAGF,oBACE,YAAA,CACA,QAAA,CACA,kBAAA,CACA,kBAAA,CACA,4BAAA,CACA,iBAAA,CAGF,uBACE,YAAA,CACA,QAAA,CACA,kBAAA,CAGF,qBACE,YAAA,CACA,eAAA,CAGF,uBACE,YAAA,CACA,kBAAA,CACA,4BAAA,CACA,kBAAA,CACA,eAAA,CACA,iBAAA,CACA,YAAA,CACA,eAAA,CAGF,MACE,kBAAA,CAGF,cACE,YAAA,CACA,qBAAA,CACA,QAAA,CAGF,0BACE,WAAA,CACA,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,kBAAA,CACA,cAAA,CAEA,0CACE,WAAA",sourcesContent:["// @import '~normalize.css';\n\n.dispnone {\n  display: none !important;\n}\n\n#app {\n  position: relative;\n}\n\n.race__header,\n.race__body {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n\n.race {\n  margin-bottom: 30px;\n  border-bottom: dashed 3px;\n}\n\n.finish-flag-icon {\n  margin-left: auto;\n  margin-right: 60px;\n}\n\n.btn {\n  padding: 5px 10px;\n  text-transform: uppercase;\n}\n\n.controls-create-car,\n.controls-update-car {\n  display: flex;\n  // align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n}\n\n.car-name-update,\n.car-name-create {\n  padding: 5px;\n}\n\n.car-color-update,\n.car-color-create {\n  height: 29px;\n}\n\n.winners-table__car {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin-bottom: 10px;\n  justify-content: space-around;\n  text-align: center;\n}\n\n.winners-table__header {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\n.winners-table__body {\n  padding: 10px;\n  max-width: 400px;\n}\n\n.winners-table__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background: rgb(209, 209, 209);\n  font-weight: 700;\n  text-align: center;\n  padding: 10px;\n  max-width: 400px;\n}\n\n.menu {\n  margin-bottom: 30px;\n}\n\n.car-controls {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.winner-message-container {\n  margin: auto;\n  padding: 25px;\n  border-radius: 15px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: rgb(71 245 111);\n  font-size: 20px;\n\n  .winner-message {\n    margin: auto;\n  }\n}"],sourceRoot:""}]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,c){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&o[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),c="/*# ".concat(a," */");return[n].concat([c]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},o=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],l=c[u]||0,d="".concat(u," ").concat(l);c[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=a(f,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:v,references:1})}o.push(d)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var c=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<c.length;o++){var i=t(c[o]);n[i].references--}for(var s=r(e,a),u=0;u<c.length;u++){var l=t(c[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var c=n[r]={id:r,exports:{}};return e[r](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),c=t(569),o=t.n(c),i=t(565),s=t.n(i),u=t(216),l=t.n(u),d=t(589),p=t.n(d),f=t(192),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=o().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var A=function(e,n,t,r){return new(t||(t=Promise))((function(a,c){function o(e){try{s(r.next(e))}catch(e){c(e)}}function i(e){try{s(r.throw(e))}catch(e){c(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,i)}s((r=r.apply(e,n||[])).next())}))},b=function(e,n){var t,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c&&(c=0,i[0]&&(o=0)),o;)try{if(t=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=n.call(e,o)}catch(e){i=[6,e],r=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},m="".concat("http","://").concat("127.0.0.1",":").concat("3000"),h=function(e){return A(void 0,void 0,void 0,(function(){return b(this,(function(n){switch(n.label){case 0:return[4,fetch("".concat(m,"/").concat(e),{method:"GET"})];case 1:return[2,n.sent()]}}))}))},g=function(e,n,t){return A(void 0,void 0,void 0,(function(){return b(this,(function(r){switch(r.label){case 0:return[4,fetch("".concat(m,"/").concat(e),{method:"POST",headers:n,body:JSON.stringify(t)})];case 1:return[2,r.sent()]}}))}))},y=function(e,n,t){return A(void 0,void 0,void 0,(function(){return b(this,(function(r){switch(r.label){case 0:return[4,fetch("".concat(m,"/").concat(e),{method:"PUT",headers:n,body:JSON.stringify(t)})];case 1:return[2,r.sent()]}}))}))},w=function(e){return A(void 0,void 0,void 0,(function(){return b(this,(function(n){switch(n.label){case 0:return[4,fetch("".concat(m,"/").concat(e),{method:"DELETE"})];case 1:return[2,n.sent()]}}))}))},C=function(e,n){return A(void 0,void 0,void 0,(function(){return b(this,(function(t){switch(t.label){case 0:return[4,h("garage".concat(e?"?_limit=".concat(e):"").concat(n?"&_page=".concat(n):""))];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()]}}))}))},x=function(e){return A(void 0,void 0,void 0,(function(){return b(this,(function(n){switch(n.label){case 0:return[4,h("garage/".concat(e))];case 1:return[4,n.sent().json()];case 2:return[2,n.sent()]}}))}))},E=function(e,n){return A(void 0,void 0,void 0,(function(){return b(this,(function(t){switch(t.label){case 0:return[4,g("garage",{"Content-Type":"application/json"},{name:n,color:e})];case 1:return[2,t.sent()]}}))}))},S=function(e){return A(void 0,void 0,void 0,(function(){return b(this,(function(n){return[2,w("garage/".concat(e))]}))}))},_=function(e,n,t){return A(void 0,void 0,void 0,(function(){return b(this,(function(r){switch(r.label){case 0:return[4,y("garage/".concat(e),{"Content-Type":"application/json"},{name:t,color:n})];case 1:return[2,r.sent().json()]}}))}))},B=function(e,n,t,r){return A(void 0,void 0,void 0,(function(){var a,c,o,i;return b(this,(function(s){switch(s.label){case 0:return a=e?"?_limit=".concat(e):"",c=n?"&_page=".concat(n):"",o=t?"&_sort=".concat(t):"",i=r?"&_order=".concat(r):"",[4,h("winners".concat(a).concat(c).concat(o).concat(i))];case 1:return[4,s.sent().json()];case 2:return[2,s.sent()]}}))}))},M=function(e){var n=e.id,t=e.wins,r=e.time;return A(void 0,void 0,void 0,(function(){return b(this,(function(e){switch(e.label){case 0:return[4,g("winners",{"Content-Type":"application/json"},{id:n,wins:t,time:r})];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},q=function(e){return A(void 0,void 0,void 0,(function(){return b(this,(function(n){return[2,w("winners/".concat(e))]}))}))},k=function(e){var n=e.id,t=e.wins,r=e.time;return A(void 0,void 0,void 0,(function(){return b(this,(function(e){switch(e.label){case 0:return[4,y("winners/".concat(n),{"Content-Type":"application/json"},{wins:t,time:r})];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},j=function(e,n){return A(void 0,void 0,void 0,(function(){var t;return b(this,(function(r){switch(r.label){case 0:return[4,(a="engine?id=".concat(e,"&status=").concat(n),A(void 0,void 0,void 0,(function(){return b(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(m,"/").concat(a),{method:"PATCH"})];case 1:return[2,e.sent()]}}))})))];case 1:return(t=r.sent()).ok?[2,t.json()]:[2]}var a}))}))},L=["Lada","BMW","Audi","BMW","Ford","Honda","Hyundai","Kia","Lada","Mazda","Mercedes","Mitsubishi","Nissan","Renault","Skoda","Toyota","Volkswagen","Acura","Daihatsu","Datsun","Honda","Infiniti","Isuzu","Lexus","Mazda","Mitsubishi","Nissan","Scion","Subaru","Suzuki","Toyota","Buick","Cadillac","Chevrolet","Chrysler","Dodge","Ford","GMC","Hummer","Jeep","Lincoln","Mercury","Oldsmobile","Pontiac","Tesla","Aurus","ГАЗ","Москвич","ТагАЗ","УАЗ","Audi","BMW","Opel","Porsche","Volkswagen","Daewoo","Genesis","Hyundai","Kia","SsangYong","Alfa Romeo","Aston Martin","Bentley","Bugatti","Citroen","DS","Ferrari","Fiat","Jaguar","Lamborghini","Lancia","Land Rover","Maserati","Maybach","Mini","Peugeot","Ravon","Renault","Rolls - Royce","Rover","Saab","SEAT","Skoda","Smart","Volvo","ZAZ","Brilliance","BYD","Changan","Chery","DongFeng","Exeed","FAW","Foton","GAC","Geely","Great Wall","Haima","Haval","JAC","Lifan","Luxgen"],T=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e},F=function(){return"".concat(L[T(0,L.length)]," ").concat(T(0,1e4))},G=function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},H=function(e,n,t,r){return new(t||(t=Promise))((function(a,c){function o(e){try{s(r.next(e))}catch(e){c(e)}}function i(e){try{s(r.throw(e))}catch(e){c(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,i)}s((r=r.apply(e,n||[])).next())}))},N=function(e,n){var t,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c&&(c=0,i[0]&&(o=0)),o;)try{if(t=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=n.call(e,o)}catch(e){i=[6,e],r=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},z=10,P=null,R=1,I=1,W=0,O=0,Y={id:0,wins:0,time:0},D={},J=function(e){return parseInt(e.closest(".race").id.slice(7))},Z=function(e,n){e.classList.remove("dispnone"),n.classList.add("dispnone")},Q=function(e,n){document.querySelector(".winner-message-container")&&document.querySelector(".winner-message-container").remove();var t=document.createElement("div");t.className="winner-message-container";var r=document.createElement("div");r.className="winner-message",r.textContent="".concat(e," won. ").concat(n,"s"),t.appendChild(r),document.querySelector(".race-container").appendChild(t)},U=function(){return H(void 0,void 0,void 0,(function(){var e,n;return N(this,(function(t){switch(t.label){case 0:return e=document.querySelector(".garage-page h1"),n="Garage (".concat,[4,C()];case 1:return e.textContent=n.apply("Garage (",[t.sent().length,")"]),[2]}}))}))},V=function(){return H(void 0,void 0,void 0,(function(){return N(this,(function(e){return document.querySelector(".garage-page-num").textContent="Page #".concat(R),[2]}))}))},K=function(e,n){return H(void 0,void 0,void 0,(function(){var t,r;return N(this,(function(a){switch(a.label){case 0:return[4,C(e,n)];case 1:return t=a.sent(),(r=document.querySelector(".race-container")).replaceChildren(),t.forEach((function(e){return r.insertAdjacentHTML("beforeend",function(e){var n=e.id,t=e.color,r=e.name||F(),a=t||G();return'\n  <div id="car-id-'.concat(n,'" class="race car-').concat(r,'">\n      <div class="race__header">\n        <button class="btn-select btn">s</button>\n        <button class="btn-remove btn">r</button>\n        <div class="car-name">').concat(r,'</div>\n      </div>\n      <div class="race__body">\n        <button class="btn-start btn">a</button>\n        <button class="btn-stop btn" disabled>b</button>\n        <svg class="car-icon" fill="').concat(a,'" viewBox="0 0 640 512" height="48px" width="48px"\n          xmlns="http://www.w3.org/2000/svg">\n          <path\n            d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z" />\n        </svg>\n        <svg class="finish-flag-icon" fill="red" viewBox="0 0 24 24" height="48px" width="48px"\n          xmlns="http://www.w3.org/2000/svg">\n          <path\n            d="M18.383,4.318c-0.374-0.155-0.804-0.069-1.09,0.217c-1.264,1.263-3.321,1.264-4.586,0c-2.045-2.043-5.37-2.043-7.414,0  C5.105,4.722,5,4.977,5,5.242v13c0,0.552,0.447,1,1,1s1-0.448,1-1v-4.553c1.271-0.997,3.121-0.911,4.293,0.26  c2.045,2.043,5.371,2.043,7.414,0C18.895,13.761,19,13.507,19,13.242v-8C19,4.837,18.756,4.473,18.383,4.318z" />\n        </svg>\n      </div>\n    </div>')}(e))})),[2]}}))}))},X=function(e){document.querySelector("#car-id-".concat(e," .car-icon")),cancelAnimationFrame(D[e]),delete D[e]},$=function(e){return H(void 0,void 0,void 0,(function(){var n,t,r,a,c,o,i,s,u,l,d,p,f,v;return N(this,(function(A){switch(A.label){case 0:return[4,j(e,"started")];case 1:return n=A.sent(),t=n.distance,r=n.velocity,a=t/r,c=document.querySelector("#car-id-".concat(e," .car-icon")),o=window.innerWidth+20-c.getBoundingClientRect().x,s=t*(i=o/t),u=r*i,l=Number((a*i).toFixed(2)),d=document.querySelector("#car-id-".concat(e," .btn-start")),p=document.querySelector("#car-id-".concat(e," .btn-stop")),f=function(e,n,t,r){var a=null,c=document.querySelector("#car-id-".concat(e," .car-icon"));return function r(o){a||(a=o);var i=c.getBoundingClientRect().x,s=o-a;c.style.transform="translateX(".concat(s*t,"px)"),i<n&&(D[e]=requestAnimationFrame(r))}}(e,s,u),requestAnimationFrame(f),d.disabled=!0,p.disabled=!1,[4,j(e,"drive")];case 2:return A.sent()?Y.time?l<Y.time&&(Y.id=e,Y.time=l,Y.wins+=1):(Y.id=e,Y.time=l,Y.wins+=1):(X(e),d.disabled=!0,p.disabled=!0),(W+=1)!==O?[3,9]:0!==Y.id?[3,3]:(Q("No one","Тo time"),[3,9]);case 3:return v=Q,[4,x(Y.id)];case 4:return v.apply(void 0,[A.sent().name,Y.time]),[4,H(void 0,void 0,void 0,(function(){var e,n;return N(this,(function(t){switch(t.label){case 0:return[4,B()];case 1:return e=t.sent(),n=e.reduce((function(e,n){return e.id===n.id&&(e.wins+=n.wins,n.time<e.time&&(e.time=n.time)),e}),Y),e.some((function(e){return e.id===Y.id}))?[4,k(n)]:[3,3];case 2:return t.sent(),[3,5];case 3:return[4,M(n)];case 4:t.sent(),t.label=5;case 5:return[2]}}))}))];case 5:return A.sent(),[4,ae(z,I)];case 6:return A.sent(),[4,ne()];case 7:return A.sent(),[4,te()];case 8:A.sent(),A.label=9;case 9:return[2]}}))}))},ee=function(e){return H(void 0,void 0,void 0,(function(){return N(this,(function(n){switch(n.label){case 0:return[4,j(e,"stopped")];case 1:return n.sent(),X(e),document.querySelector("#car-id-".concat(e," .car-icon")).style.transform="translateX(0px)",document.querySelector("#car-id-".concat(e," .btn-start")).disabled=!1,document.querySelector("#car-id-".concat(e," .btn-stop")).disabled=!0,Y={id:0,wins:0,time:0},[2]}}))}))},ne=function(){return H(void 0,void 0,void 0,(function(){var e,n;return N(this,(function(t){switch(t.label){case 0:return e=document.querySelector(".winners-page h1"),n="Winners (".concat,[4,B()];case 1:return e.textContent=n.apply("Winners (",[t.sent().length,")"]),[2]}}))}))},te=function(){return H(void 0,void 0,void 0,(function(){return N(this,(function(e){return document.querySelector(".winners-page-num").textContent="Page #".concat(I),[2]}))}))},re=function(e,n){var t=n.id,r=n.wins,a=n.time;return H(void 0,void 0,void 0,(function(){var n,c,o;return N(this,(function(i){switch(i.label){case 0:return[4,x(t)];case 1:return n=i.sent(),c=n.color,o=n.name,[2,'\n    <div id="winner-id-'.concat(t,'" class="winners-table__car car-').concat(o,'">\n    <div class="winners-table__num">').concat(e,'</div>\n    <svg class="car-icon winners-table__car" fill="').concat(c,'" viewBox="0 0 640 512" height="24px" width="24px"\n      xmlns="http://www.w3.org/2000/svg">\n      <path\n        d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z" />\n    </svg>\n    <div class="winners-table__name">').concat(o,'</div>\n    <div class="winners-table__wins">').concat(r,'</div>\n    <div class="winners-table__best-time">').concat(a,"</div>\n  </div>")]}}))}))},ae=function(e,n,t,r){return H(void 0,void 0,void 0,(function(){var a,c;return N(this,(function(o){switch(o.label){case 0:return[4,B(e,n,t,r)];case 1:return a=o.sent(),(c=document.querySelector(".winners-table__body")).replaceChildren(),a.forEach((function(e,n){return H(void 0,void 0,void 0,(function(){var t,r,a;return N(this,(function(o){switch(o.label){case 0:return r=(t=c).insertAdjacentHTML,a=["beforeend"],[4,re(n+1,e)];case 1:return[2,r.apply(t,a.concat([o.sent()]))]}}))}))})),[2]}}))}))};H(void 0,void 0,void 0,(function(){var e,n,t,r,a,c,o,i,s,u,l;return N(this,(function(d){switch(d.label){case 0:return[4,C()];case 1:return e=d.sent(),n='\n  <div class="menu">\n    <button class="btn-garage btn"">garage</button>\n    <button class="btn-winners btn"">winners</button>\n  </div>',t='\n    <div class="car-controls">\n\n      <div class="car-create">\n        <input type="text" name="car-name-create" class="car-name-create">\n        <input type="color" name="car-color-create" class="car-color-create">\n        <button type="submit" class="btn btn-create">create</button>\n      </div>\n\n      <div class="car-update">\n        <input type="text" name="car-name-update" class="car-name-update">\n        <input type="color" name="car-color-update" class="car-color-update">\n        <button type="submit" class="btn btn-update" disabled>update</button>\n      </div>\n\n      <div class="controls-race">\n        <button type="submit" class="btn btn-race">race</button>\n        <button type="submit" class="btn btn-reset">race reset</button>\n        <button type="submit" class="btn btn-generate">generate 100 cars</button>\n      </div>\n    </div>',r=document.querySelector("#app"),(a=document.createElement("div")).className="garage-page",a.id="garage-page",(c=document.createElement("div")).className="race-container",(o=document.createElement("h1")).textContent="Garage (".concat(e.length,")"),(i=document.createElement("p")).className="garage-page-num",i.textContent="Page #1",(s=document.createElement("button")).className="garage-btn-prev btn",s.textContent="prev",s.disabled=!0,(u=document.createElement("button")).className="garage-btn-next btn",u.textContent="next",l=u,[4,C()];case 2:return l.disabled=d.sent().length<=7,K(7,1),a.insertAdjacentHTML("beforeend",t),r.insertAdjacentElement("afterbegin",a),r.insertAdjacentHTML("afterbegin",n),[o,i,c,s,u].forEach((function(e){a.insertAdjacentElement("beforeend",e)})),[2]}}))})),H(void 0,void 0,void 0,(function(){var e,n,t,r,a,c,o;return N(this,(function(i){switch(i.label){case 0:return[4,B()];case 1:return e=i.sent(),n=document.querySelector("#app"),(t=document.createElement("div")).className="winners-page dispnone",t.id="winners-page",(r=document.createElement("h1")).textContent="Winners (".concat(e.length,")"),(a=document.createElement("p")).className="winners-page-num",a.textContent="Page #1",(c=document.createElement("button")).className="winners-btn-prev btn",c.textContent="prev",c.disabled=!0,(o=document.createElement("button")).className="winners-btn-next btn",o.textContent="next",o.disabled=!(e.length>z),[a,r].forEach((function(e){return t.insertAdjacentElement("afterbegin",e)})),t.insertAdjacentHTML("beforeend",'\n  <div class="winners-table">\n      <div class="winners-table__header">\n        <div>num</div>\n        <div>car</div>\n        <div>name</div>\n        <div>wins</div>\n        <div>time</div>\n      </div>\n      <div class="winners-table__body"></div>\n    </div>'),[c,o].forEach((function(e){return t.insertAdjacentElement("beforeend",e)})),n.insertAdjacentElement("beforeend",t),e.forEach((function(e,n){return H(void 0,void 0,void 0,(function(){var t,r,a;return N(this,(function(c){switch(c.label){case 0:return r=(t=document.querySelector(".winners-table__body")).insertAdjacentHTML,a=["beforeend"],[4,re(n+1,e)];case 1:return[2,r.apply(t,a.concat([c.sent()]))]}}))}))})),[2]}}))})),document.addEventListener("click",(function(e){return H(void 0,void 0,void 0,(function(){var n,t,r,a,c,o,i,s,u,l,d,p,f,v,A,b,m,h,g,y,w,B,M,k,j,L,T,Y;return N(this,(function(D){switch(D.label){case 0:return n=e.target,t=document.getElementById("garage-page"),r=document.getElementById("winners-page"),a=document.querySelector(".btn-update"),c=document.querySelector(".btn-create"),o=document.querySelector(".btn-garage"),i=document.querySelector(".btn-winners"),s=document.querySelector(".btn-generate"),u=document.querySelector(".car-name-update"),l=document.querySelector(".car-name-create"),d=document.querySelector(".car-color-update"),p=document.querySelector(".car-color-create"),f=document.querySelector(".garage-btn-prev"),v=document.querySelector(".garage-btn-next"),A=document.querySelector(".winners-btn-prev"),b=document.querySelector(".winners-btn-next"),m=document.querySelector(".btn-race"),h=document.querySelector(".btn-reset"),n===o&&Z(t,r),n===i&&Z(r,t),n!==a?[3,4]:(g=u.value,j=d.value,[4,_(L=+P,j||G(),g||F())]);case 1:return D.sent(),[4,K(7,R)];case 2:return D.sent(),[4,ae(z,I)];case 3:D.sent(),a.disabled=!0,u.value="",D.label=4;case 4:return n!==c?[3,8]:(y=l.value?l.value:F(),j=p.value,[4,E(j,y)]);case 5:return D.sent(),[4,K(7,R)];case 6:return D.sent(),[4,U()];case 7:D.sent(),l.value="",D.label=8;case 8:if(n!==s)return[3,15];w=0,D.label=9;case 9:return w<100?(B=l.value?l.value:F(),j=G(),[4,E(j,B)]):[3,13];case 10:return D.sent(),[4,K(7,R)];case 11:D.sent(),v.disabled=!1,D.label=12;case 12:return w+=1,[3,9];case 13:return[4,U()];case 14:D.sent(),D.label=15;case 15:return n.classList.contains("btn-select")?(a.disabled=!1,P=J(n),[4,x(+P)]):[3,17];case 16:M=D.sent(),k=M.name,j=M.color,u.value=k,d.value=j,D.label=17;case 17:return n.classList.contains("btn-remove")?(L=+J(n),[4,S(L)]):[3,24];case 18:return D.sent(),[4,K(7,R)];case 19:return D.sent(),[4,U()];case 20:return D.sent(),V(),[4,q(L)];case 21:return D.sent(),[4,ae(z,I)];case 22:return D.sent(),[4,ne()];case 23:D.sent(),te(),D.label=24;case 24:return n.classList.contains("btn-start")&&(L=J(n),$(L)),n.classList.contains("btn-stop")?(L=J(n),[4,ee(L)]):[3,26];case 25:D.sent(),D.label=26;case 26:return n!==m?[3,28]:(W=0,[4,C(7,R)]);case 27:(T=D.sent()).forEach((function(e){return H(void 0,void 0,void 0,(function(){return N(this,(function(n){switch(n.label){case 0:return[4,$(e.id)];case 1:return[2,n.sent()]}}))}))})),O=T.length,m.disabled=!0,D.label=28;case 28:return n!==h?[3,30]:(document.querySelector(".winner-message-container")&&document.querySelector(".winner-message-container").remove(),[4,C(7,R)]);case 29:(T=D.sent()).forEach((function(e){return H(void 0,void 0,void 0,(function(){return N(this,(function(n){switch(n.label){case 0:return[4,ee(e.id)];case 1:return[2,n.sent()]}}))}))})),W=0,m.disabled=!1,D.label=30;case 30:return n!==f?[3,33]:((R-=1)<=1?(R=1,f.disabled=!0,v.disabled=!1):(f.disabled=!1,v.disabled=!1),[4,K(7,R)]);case 31:return D.sent(),[4,U()];case 32:D.sent(),V(),D.label=33;case 33:return n!==v?[3,37]:[4,C()];case 34:return Y=D.sent().length,(R+=1)>=Math.ceil(Y/7)?(R=Math.ceil(Y/7),v.disabled=!0,f.disabled=!1,Y<=7&&(v.disabled=!0,f.disabled=!0)):(v.disabled=!1,f.disabled=!1),[4,K(7,R)];case 35:return D.sent(),[4,U()];case 36:D.sent(),V(),D.label=37;case 37:return n!==A?[3,40]:((I-=1)<=1?(I=1,A.disabled=!0,b.disabled=!1):(A.disabled=!1,b.disabled=!1),[4,ae(z,I)]);case 38:return D.sent(),[4,ne()];case 39:D.sent(),te(),D.label=40;case 40:return n!==b?[3,44]:(I+=1,[4,C()]);case 41:return Y=D.sent().length,I>=Math.ceil(Y/z)?(I=Math.ceil(Y/z),b.disabled=!0,A.disabled=!1):(b.disabled=!1,A.disabled=!1),[4,ae(z,I)];case 42:return D.sent(),[4,ne()];case 43:D.sent(),te(),D.label=44;case 44:return[2]}}))}))}))})()})();
//# sourceMappingURL=main.js.map