(()=>{var t={341:(t,r,e)=>{t.exports=e(685)},171:(t,r,e)=>{e(450);var n=e(58).Object,o=t.exports=function(t,r,e){return n.defineProperty(t,r,e)};n.defineProperty.sham&&(o.sham=!0)},685:(t,r,e)=>{var n=e(171);t.exports=n},916:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},59:(t,r,e)=>{var n=e(941);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},532:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},29:(t,r,e)=>{var n=e(746),o=e(988),u=e(216);t.exports=n?function(t,r,e){return o.f(t,r,u(1,e))}:function(t,r,e){return t[r]=e,t}},216:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},746:(t,r,e)=>{var n=e(981);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},333:(t,r,e)=>{var n=e(899),o=e(941),u=n.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},887:(t,r,e)=>{"use strict";var n=e(899),o=e(677).f,u=e(252),i=e(58),c=e(843),a=e(29),f=e(457),p=function(t){var r=function(r,e,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,e)}return new t(r,e,n)}return t.apply(this,arguments)};return r.prototype=t.prototype,r};t.exports=function(t,r){var e,s,l,y,v,h,b,w,g=t.target,x=t.global,m=t.stat,d=t.proto,j=x?n:m?n[g]:(n[g]||{}).prototype,O=x?i:i[g]||(i[g]={}),P=O.prototype;for(l in r)e=!u(x?l:g+(m?".":"#")+l,t.forced)&&j&&f(j,l),v=O[l],e&&(h=t.noTargetGet?(w=o(j,l))&&w.value:j[l]),y=e&&h?h:r[l],e&&typeof v==typeof y||(b=t.bind&&e?c(y,n):t.wrap&&e?p(y):d&&"function"==typeof y?c(Function.call,y):y,(t.sham||y&&y.sham||v&&v.sham)&&a(b,"sham",!0),O[l]=b,d&&(f(i,s=g+"Prototype")||a(i,s,{}),i[s][l]=y,t.real&&P&&!P[l]&&a(P,l,y)))}},981:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},843:(t,r,e)=>{var n=e(916);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},899:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},457:(t,r,e)=>{var n=e(678),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,r){return o.call(n(t),r)}},840:(t,r,e)=>{var n=e(746),o=e(981),u=e(333);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},26:(t,r,e)=>{var n=e(981),o=e(532),u="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},252:(t,r,e)=>{var n=e(981),o=/#|\.prototype\./,u=function(t,r){var e=c[i(t)];return e==f||e!=a&&("function"==typeof r?n(r):!!r)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},a=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},941:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},988:(t,r,e)=>{var n=e(746),o=e(840),u=e(59),i=e(935),c=Object.defineProperty;r.f=n?c:function(t,r,e){if(u(t),r=i(r,!0),u(e),o)try{return c(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},677:(t,r,e)=>{var n=e(746),o=e(760),u=e(216),i=e(529),c=e(935),a=e(457),f=e(840),p=Object.getOwnPropertyDescriptor;r.f=n?p:function(t,r){if(t=i(t),r=c(r,!0),f)try{return p(t,r)}catch(t){}if(a(t,r))return u(!o.f.call(t,r),t[r])}},760:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},58:t=>{t.exports={}},219:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},529:(t,r,e)=>{var n=e(26),o=e(219);t.exports=function(t){return n(o(t))}},678:(t,r,e)=>{var n=e(219);t.exports=function(t){return Object(n(t))}},935:(t,r,e)=>{var n=e(941);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},450:(t,r,e)=>{var n=e(887),o=e(746);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:e(988).f})}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var u=r[n]={exports:{}};return t[n](u,u.exports,e),u.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";var t=e(341);function r(r,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),t(r,o.key,o)}}new(function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=r}var e,n;return e=t,(n=[{key:"getName",value:function(){return this.name}}])&&r(e.prototype,n),t}())("dog")})()})();