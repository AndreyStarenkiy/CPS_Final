!function(e){var t={};function o(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t,o){var n;n=function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var s=t[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}return o.m=e,o.c=t,o.p="",o(0)}([function(e,t){var o,n,s;n=document.scrollingElement||document.documentElement,s=null,o=null,e.exports={toggle:function(){return s?disable():enable()},disable:function(){return s=n.scrollTop,o=document.body.style.cssText,document.body.style.cssText=";overflow: hidden; position: fixed; height:   100%; width:    100%; top:      "+-s+"px; "},enable:function(){return document.body.style.cssText=o,n.scrollTop=s}}}])},e.exports=n()},function(e,t,o){"use strict";o.r(t),o.d(t,"disableBodyScroll",(function(){return v})),o.d(t,"clearAllBodyScrollLocks",(function(){return _})),o.d(t,"enableBodyScroll",(function(){return w}));var n=!1;if("undefined"!=typeof window){var s={get passive(){n=!0}};window.addEventListener("testPassive",null,s),window.removeEventListener("testPassive",null,s)}var d="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),r=[],i=!1,a=-1,l=void 0,c=void 0,p=void 0,u=function(e){return r.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},m=function(e){var t=e||window.event;return!!u(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},y=function(){void 0!==p&&(document.body.style.paddingRight=p,p=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0)},f=function(){if(void 0!==c){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=c.position,document.body.style.top=c.top,document.body.style.left=c.left,window.scrollTo(t,e),c=void 0}},v=function(e,t){if(e){if(!r.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};r=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(r),[o]),d?window.requestAnimationFrame((function(){if(void 0===c){c={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===p){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);p=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")}(t),d&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-a;!u(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?m(e):e.stopPropagation())}(t,e)},i||(document.addEventListener("touchmove",m,n?{passive:!1}:void 0),i=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},_=function(){d&&(r.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),i&&(document.removeEventListener("touchmove",m,n?{passive:!1}:void 0),i=!1),a=-1),d?f():y(),r=[]},w=function(e){e?(r=r.filter((function(t){return t.targetElement!==e})),d&&(e.ontouchstart=null,e.ontouchmove=null,i&&0===r.length&&(document.removeEventListener("touchmove",m,n?{passive:!1}:void 0),i=!1)),d?f():y()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},function(e,t,o){e.exports=o(3)},function(e,t,o){"use strict";o.r(t);o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12),o(13);console.log("Works!")},function(e,t,o){},function(e,t){document.querySelector(".swiper");var o=document.querySelector(".swiper-wrapper"),n=document.querySelector(".brands__expand-brands");document.querySelector(".expand-brands__text"),document.querySelector(".expand-brands__expand-img");window.addEventListener("DOMContentLoaded",(function(){!function(){if(console.log("initializeSwiper WoRKS"),window.matchMedia("(max-width: 767.98px)").matches){console.log("Kapusta)");new Swiper(".swiper",{direction:"horizontal",loop:!1,spaceBetween:16,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}});o.classList.add("swiper-wrapper--initialized"),console.log("SWIPER INITIALIZED"),n.classList.add("expand-brands--disabled")}}()}))},function(e,t,o){var n=o(1),s=(n.disableBodyScroll,n.enableBodyScroll,document.querySelector(".upper-header__burger")),d=document.querySelector(".upper-header__chat"),r=document.querySelector(".upper-header__call"),i=document.querySelector(".side-menu__close-btn"),a=document.querySelector(".side-menu"),l=document.querySelector(".side-menu-wrapper"),c=document.querySelector(".modal-feedback"),p=document.querySelector(".modal-call"),u=document.querySelector(".body"),m=(document.querySelector(".app"),document.querySelector(".modal-cover")),y=o(0);y.disable(),y.enable(),console.log("???"),d.addEventListener("click",(function(){console.log("click chat"),c.classList.add("modal-feedback--modal-open"),m.classList.add("modal-cover--modal-open"),u.classList.add("body--modal-open"),y.disable()})),r.addEventListener("click",(function(){console.log("click call"),p.classList.add("modal-call--modal-open"),m.classList.add("modal-cover--modal-open"),u.classList.add("body--modal-open"),y.disable()})),s.addEventListener("click",(function(){a.classList.add("side-menu--open"),m.classList.add("modal-cover--modal-open"),l.classList.add("side-menu-wrapper--modal-open"),u.classList.add("body--modal-open"),y.disable()})),m.addEventListener("click",(function(){a.classList.remove("side-menu--open"),c.classList.remove("modal-feedback--modal-open"),m.classList.remove("modal-cover--modal-open"),l.classList.remove("side-menu-wrapper--modal-open"),y.enable()})),i.addEventListener("click",(function(){a.classList.remove("side-menu--open"),m.classList.remove("modal-cover--modal-open"),l.classList.remove("side-menu-wrapper--modal-open"),y.enable()})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(a.classList.remove("side-menu--open"),m.classList.remove("modal-cover--modal-open"),l.classList.remove("side-menu-wrapper--modal-open"),y.enable())}))},function(e,t){var o=document.querySelector(".swiper"),n=document.querySelector(".brands__swiper-wrapper"),s=document.querySelector(".brands__expand-brands"),d=document.querySelector(".expand-brands__text"),r=document.querySelector(".expand-brands__expand-img");s.addEventListener("click",(function(){o.classList.contains("swiper--expanded")?(r.classList.remove("expand-brands__expand-img--upside"),o.style.maxHeight="192px",o.classList.remove("swiper--expanded"),s.classList.remove("brands__expand-brands--expanded"),d.textContent="Показать всё"):(r.classList.add("expand-brands__expand-img--upside"),o.style.maxHeight=o.scrollHeight+"px",o.classList.add("swiper--expanded"),s.classList.add("brands__expand-brands--expanded"),d.textContent="Скрыть")})),window.matchMedia("(max-width: 767.98px)").matches&&n.classList.add("brands__swiper-wrapper--initialized")},function(e,t){var o=document.querySelector(".types__swiper"),n=document.querySelector(".types__swiper-wrapper"),s=document.querySelector(".types__expand-types"),d=document.querySelector(".expand-types__text"),r=document.querySelector(".expand-types__expand-img");s.addEventListener("click",(function(){o.classList.contains("swiper--expanded")?(r.classList.remove("expand-types__expand-img--upside"),o.style.maxHeight="192px",o.classList.remove("swiper--expanded"),s.classList.remove("types__expand-types--expanded"),d.textContent="Показать всё"):(r.classList.add("expand-types__expand-img--upside"),o.style.maxHeight=o.scrollHeight+"px",o.classList.add("swiper--expanded"),s.classList.add("types__expand-types--expanded"),d.textContent="Скрыть")})),window.matchMedia("(max-width: 767.98px)").matches&&(console.log("Kapusta)"),o.classList.add("types__swiper--initialized"),n.classList.add("types__swiper-wrapper--initialized"),console.log("SWIPER INITIALIZED"),s.classList.add("expand-types--disabled"))},function(e,t){var o=document.querySelector(".prices__swiper"),n=document.querySelector(".prices__swiper-wrapper"),s=document.querySelectorAll(".prices-swiper-slide"),d=document.querySelector(".prices-swiper-slide__info-slide"),r=document.querySelectorAll(".prices-swiper-slide__price"),i=document.querySelectorAll(".prices-swiper-slide__time"),a=document.querySelectorAll(".prices-swiper-slide__order"),l=document.querySelectorAll(".prices-swiper-slide__service"),c=document.querySelector(".prices-swiper-slide__spacer"),p=document.querySelectorAll(".prices-swiper-slide__text"),u=document.querySelectorAll(".prices-swiper-slide__info"),m=document.querySelector(".prices__expand-prices"),y=document.querySelector(".expand-prices__text"),f=document.querySelector(".expand-prices__expand-img");if(m.addEventListener("click",(function(){o.classList.contains("swiper--expanded")?(f.classList.remove("expand-prices__expand-img--upside"),o.style.maxHeight="232px",o.classList.remove("swiper--expanded"),m.classList.remove("prices__expand-prices--expanded"),y.textContent="Показать всё"):(f.classList.add("expand-prices__expand-img--upside"),o.style.maxHeight=o.scrollHeight+"px",o.classList.add("swiper--expanded"),m.classList.add("prices__expand-prices--expanded"),y.textContent="Скрыть")})),window.matchMedia("(max-width: 767.98px)").matches)console.log("Prices-swiper initialized!"),o.classList.add("prices__swiper--initialized"),m.classList.add("expand-prices--disabled");else{n.classList.add("prices__swiper-wrapper--swiper-off"),o.classList.add("prices__swiper--swiper-off");for(var v=0;v<s.length;v++)s[v].classList.add("prices-swiper-slide--swiper-off");for(v=0;v<a.length;v++)a[v].classList.add("prices-swiper-slide__order--swiper-off");for(v=0;v<u.length;v++)u[v].classList.add("prices-swiper-slide__info--swiper-off");for(v=0;v<l.length;v++)l[v].classList.add("prices-swiper-slide__service--swiper-off");for(v=0;v<p.length;v++)p[v].classList.add("prices-swiper-slide__text--swiper-off");for(v=0;v<r.length;v++)r[v].classList.add("prices-swiper-slide__price--swiper-off");for(v=0;v<i.length;v++)i[v].classList.add("prices-swiper-slide__time--swiper-off");d.classList.add("prices-swiper-slide__info-slide--swiper-off"),c.classList.add("prices-swiper-slide__spacer--swiper-off")}},function(e,t){var o=document.querySelector(".article__read-more"),n=document.querySelector(".article__text-button"),s=document.querySelector(".article__text-3"),d=document.querySelector(".article__text-3-wrapper"),r=document.querySelector(".article__text-2"),i=document.querySelector(".article__text-2-wrapper"),a=document.querySelector(".article__expand-img");o.addEventListener("click",(function(){console.log("poka nichego)"),s.classList.add("article__text-3--expanded")})),o.addEventListener("click",(function(){d.classList.contains("article__text-3-wrapper--expanded")?(d.style.maxHeight="1px",d.classList.remove("article__text-3-wrapper--expanded"),i.style.maxHeight="1px",i.classList.remove("article__text-2-wrapper--expanded"),a.classList.remove("article__expand-img--expanded"),o.classList.remove("article__read-more--expanded"),n.textContent="Показать всё"):(d.style.maxHeight=s.scrollHeight+"px",d.classList.add("article__text-3-wrapper--expanded"),i.style.maxHeight=r.scrollHeight+"px",i.classList.add("article__text-2-wrapper--expanded"),a.classList.add("article__expand-img--expanded"),o.classList.add("article__read-more--expanded"),n.textContent="Скрыть")}))},function(e,t,o){var n=document.querySelector(".modal-feedback"),s=document.querySelector(".modal-feedback__close-btn"),d=document.querySelector(".modal-cover"),r=document.querySelector(".side-menu__chat"),i=(document.querySelector(".side-menu__call"),document.querySelector(".modal-call"),document.querySelector(".side-menu")),a=document.querySelector(".side-menu-wrapper"),l=document.querySelector(".body"),c=o(0);c.disable(),c.enable(),r.addEventListener("click",(function(){n.classList.add("modal-feedback--modal-open"),d.classList.add("modal-cover--modal-open"),i.classList.remove("side-menu--open"),a.classList.remove("side-menu-wrapper--modal-open"),l.classList.add("body--modal-open"),c.enable(),c.disable()})),d.addEventListener("click",(function(){n.classList.remove("modal-feedback--modal-open"),d.classList.remove("modal-cover--modal-open"),a.classList.remove("side-menu-wrapper--modal-open"),c.enable()})),s.addEventListener("click",(function(){n.classList.remove("modal-feedback--modal-open"),d.classList.remove("modal-cover--modal-open"),c.enable()})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(n.classList.remove("modal-feedback--modal-open"),d.classList.remove("modal-cover--modal-open"),a.classList.remove("side-menu-wrapper--modal-open"),c.enable())}))},function(e,t){document.querySelector(".side-menu__chat")},function(e,t,o){var n=o(1),s=(n.disableBodyScroll,n.enableBodyScroll,document.querySelector(".modal-feedback"),document.querySelector(".modal-call__close-btn")),d=document.querySelector(".modal-cover"),r=document.querySelector(".side-menu__call"),i=document.querySelector(".modal-call"),a=document.querySelector(".side-menu"),l=document.querySelector(".side-menu-wrapper"),c=document.querySelector(".body"),p=o(0);p.disable(),p.enable(),r.addEventListener("click",(function(){i.classList.add("modal-call--modal-open"),d.classList.add("modal-cover--modal-open"),a.classList.remove("side-menu--open"),l.classList.remove("side-menu-wrapper--modal-open"),c.classList.add("body--modal-open"),p.enable(),p.disable()})),d.addEventListener("click",(function(){i.classList.remove("modal-call--modal-open"),c.classList.remove("body--modal-open"),l.classList.remove("side-menu-wrapper--modal-open"),p.enable()})),s.addEventListener("click",(function(){i.classList.remove("modal-call--modal-open"),d.classList.remove("modal-cover--modal-open"),c.classList.remove("body--modal-open"),p.enable()})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(i.classList.remove("modal-call--modal-open"),l.classList.remove("side-menu-wrapper--modal-open"),c.classList.remove("body--modal-open"),p.enable())}))}]);
//# sourceMappingURL=bundle.js.map