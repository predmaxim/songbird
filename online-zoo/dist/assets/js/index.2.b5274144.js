(()=>{var e={138:()=>{document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".menu__item").forEach((e=>e.href==window.location.href&&e.classList.add("active")));const e=document.querySelector(".menu-btn"),t=e.querySelector(".mdi-menu"),o=document.querySelector(".close-btn"),l=o.querySelector(".mdi-close"),s=document.querySelector("header .menu"),n=document.querySelector(".overlay"),a=document.querySelector("header");addEventListener("click",(i=>{i.target!=e&&i.target!=t||(s.style.transform="translateX(0)",e.classList.add("opazero"),o.classList.remove("opazero"),n.classList.remove("opazero"),a.classList.add("mob-menu-open"),e.classList.add("mob-menu-open"),document.body.style.overflow="hidden"),i.target!=o&&i.target!=l&&i.target!=n&&i.target!=s||(s.style.transform="",e.classList.remove("opazero"),o.classList.add("opazero"),n.classList.add("opazero"),a.classList.remove("mob-menu-open"),e.classList.remove("mob-menu-open"),document.body.style.overflow="")}))}))}},t={};function o(l){var s=t[l];if(void 0!==s)return s.exports;var n=t[l]={exports:{}};return e[l](n,n.exports,o),n.exports}(()=>{"use strict";o(138),window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#range__range-input"),t=document.querySelector("#amount"),o=document.querySelectorAll("#range-values option"),l=[...o].reduce(((e,t)=>e+t.label.slice(1)+","),"").split(",").filter((e=>""!==e)).sort(((e,t)=>e-t));document.addEventListener("input",(s=>{s.target==e&&(t.value=l[e.value-1],l.some((t=>t==l[e.value-1]))?([...o].forEach((e=>e.classList.remove("active"))),[...o].filter((e=>e.label.slice(1)==l[s.target.value-1]))[0].classList.add("active")):[...o].forEach((e=>e.classList.remove("active")))),s.target==t&&(s.target.value.length>4&&(s.target.value=s.target.value.slice(0,4)),e.value=l.reduce(((e,o,l)=>o==t.value?l+1:e),3),l.some((e=>e==t.value))?([...o].forEach((e=>e.classList.remove("active"))),[...o].filter((e=>e.label.slice(1)==t.value))[0].classList.add("active")):[...o].forEach((e=>e.classList.remove("active"))))})),document.addEventListener("click",(s=>{[...o].some((e=>e==s.target))&&([...o].forEach((e=>e.classList.remove("active"))),[...o].filter((e=>e==s.target))[0].classList.add("active"),t.value=l[s.target.value-1],e.value=s.target.value)}))})),function(e){const t=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,o=document.querySelector("#subscription-form"),l=o.querySelector('input[type="email"]'),s=o.querySelector('input[type="submit"]');l.oninput=()=>0==t.test(l.value)?(l.classList.add("error"),s.classList.add("error"),s.setAttribute("disabled","true"),!1):(l.classList.remove("error"),s.classList.remove("error"),s.setAttribute("disabled","false"),!0)}();const e=[{id:1,name:"Michael John",avatar:"assets/img/user.png",location:"Local Austria",date:"Today",comment:"The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."},{id:2,name:"Oskar Samborsky",avatar:"assets/img/user1.jpg",location:"Local Austria",date:"Yesterday",comment:"The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."},{id:3,name:"Fredericka Michelin",avatar:"assets/img/user2.jpg",location:"Local Austria",date:"Yesterday",comment:"The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."},{id:4,name:"Mila Riksha",avatar:"assets/img/user3.jpg",location:"Local Austria",date:"Yesterday",comment:"The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."},{id:5,name:"Michael John",avatar:"assets/img/user.png",location:"Local Austria",date:"Today",comment:"The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."},{id:6,name:"Oskar Samborsky",avatar:"assets/img/user1.jpg",location:"Local Austria",date:"Yesterday",comment:"The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."},{id:7,name:"Fredericka Michelin",avatar:"assets/img/user2.jpg",location:"Local Austria",date:"Yesterday",comment:"The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."},{id:8,name:"Mila Riksha",avatar:"assets/img/user3.jpg",location:"Local Austria",date:"Yesterday",comment:"The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n    The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."}];document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".overlay"),o=(document.querySelectorAll(".item"),document.querySelector(".testimonials-popup")),l=o.querySelector(".close-popup-btn"),s=l.querySelector(".mdi-close"),n=/item user-\d+/;addEventListener("click",(a=>{var i;a.target.parentElement.className.match(n)&&(i=e.filter((e=>e.id==a.target.parentElement.className.match(n).input.slice(10)))[0],console.log(i),o.querySelector(".avatar").src=i.avatar,o.querySelector(".name").textContent=i.name,o.querySelector(".location").textContent=i.location,o.querySelector(".date").textContent=i.date,o.querySelector(".item__text").textContent=i.comment,o.querySelector(".item").classList.add(`user-${i.id}`),o.classList.add("popup-center"),t.classList.remove("opazero")),a.target!=l&&a.target!=s&&a.target!=t||(o.classList.remove("popup-center"),t.classList.add("opazero"),document.body.style.overflow="")}))})),document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".testimonials__slider"),o=document.querySelector(".testimonials-container");let l=document.querySelector(".slider-pagination"),s=document.querySelector(".thumb"),n=document.querySelectorAll(".testimonials-container .item"),a=0,i=0,r=0;for(let t=0;t<e.length;t++)o.insertAdjacentHTML("afterbegin",'\n    <div class="item">\n      <div class="item__header" >\n        <img src="" class="avatar" ></img>\n        <div class="header-text" >\n          <div class="name"></div>\n          <div class="info">\n            <div class="location"></div>\n            <div class="date"></div>\n          </div>\n        </div>\n      </div>\n      <div class="item__text"></div>\n      <div class="item__wrapper"></div>\n    </div>'),o.querySelector(".avatar").src=e[t].avatar,o.querySelector(".name").textContent=e[t].name,o.querySelector(".location").textContent=e[t].location,o.querySelector(".date").textContent=e[t].date,o.querySelector(".item__text").textContent=e[t].comment,o.querySelector(".item").classList.add(`user-${e[t].id}`);function c(){n=document.querySelectorAll(".testimonials-container .item"),r=n[0].offsetWidth,a=Math.round(t.offsetWidth/r),l=document.querySelector(".slider-pagination"),s=document.querySelector(".thumb"),i=a/n.length*100,s.style.width=i+"%"}c(),s.onmousedown=function(e){e.preventDefault();let t=e.clientX-s.getBoundingClientRect().left;function n(e){let n=e.clientX-t-l.getBoundingClientRect().left;n<0&&(n=0);let a=l.offsetWidth-s.offsetWidth;n>a&&(n=a),s.style.left=n+"px",o.style.transition="1s",o.style.transform=`translateX(${3.81*-n}px)`}document.addEventListener("mousemove",n),document.addEventListener("mouseup",(function e(){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",n)}))},s.ondragstart=function(){return!1},window.addEventListener("resize",c)}))})()})();
//# sourceMappingURL=index.2.b5274144.js.map