!function(n,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var e in t)("object"==typeof exports?exports:n)[e]=t[e]}}(window,(function(){return function(n){function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(r){return n[r]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},r.p="",r(r.s=0)}([function(n,r,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n){return"[object Array]"===c.call(n)}function i(n){return"[object Object]"===c.call(n)}function a(n){return"[object Null]"===c.call(n)}function l(n){if(this.options=Object.assign({theme:"light",container:null,data:"{}",expand:!1},n),a(n.container))throw new Error("Container: dom element is required");this.render()}t(1);var c=Object.prototype.toString;l.prototype.renderRight=function(n,r,t){!function(n){return"number"==typeof n}(t)?function(n){return"boolean"==typeof n}(t)?r.setAttribute("class",n+"rightBoolean"):"null"===t?r.setAttribute("class",n+"rightNull"):r.setAttribute("class",n+"rightString"):r.setAttribute("class",n+"rightNumber"),r.innerText=t},l.prototype.renderChildren=function(n,r,t,e,o,a){var l=this,c=this.createElement("span"),s=this.options.expand?"rotate90":"",u=this.options.expand?"add-height":"";c.setAttribute("class",n+"folder "+s),c.onclick=function(n){var r=n.target.parentNode.nextSibling;l.toggleItem(r,n.target)};var f=0,d=!1;i(t)?(f=Object.keys(t).length,d=!0):f=t.length,a.innerHTML=d?r+"&nbsp;&nbsp{"+f+"}":r+"&nbsp;&nbsp["+f+"]",a.prepend(c),e.setAttribute("class",n+"rightObj "+u),l.parse(t,e,o+0,n)},l.prototype.parse=function(n,r,t,o){var i=this;this.forEach(n,(function(n,a){var l=i.createItem(t,o,r,a,"object"!==e(n)),c=l.left,s=l.right;"object"===e(n)?i.renderChildren(o,a,n,s,t,c):i.renderRight(o,s,n)}))},l.prototype.createItem=function(n,r,t,e,o){var i=this,a=this.createElement("div"),l=this.createElement("div"),c=this.createElement("div"),s=this.createElement("div");return a.style.marginLeft=2*n+"px",l.innerHTML="".concat(e,'<span class="jv-').concat(r,'-symbol">&nbsp;:&nbsp;</span>'),o?(a.appendChild(s),s.appendChild(l),s.appendChild(c),t.appendChild(a),a.setAttribute("class",r+"current"),s.setAttribute("class","jv-wrap"),l.setAttribute("class",r+"left")):(a.appendChild(l),a.appendChild(c),t.appendChild(a),a.setAttribute("class",r+"current"),l.setAttribute("class",r+"left jv-folder"),l.onclick=function(n){var r=n.target.nextSibling;i.toggleItem(r,n.target.querySelector("span"))}),{left:l,right:c,current:a}},l.prototype.render=function(){var n,r=this.options.data,t="jv-"+this.options.theme+"-",e=this.options.container,i="object";e.setAttribute("class",t+"con");try{n=JSON.parse(r)}catch(n){throw new Error("It is not a json format")}o(n)&&(i="array");var a=this.createItem(0,t,e,i),l=a.left,c=a.right;this.renderChildren(t,i,n,c,0,l)},l.prototype.toggleItem=function(n,r){n.classList.toggle("add-height"),r.classList.toggle("rotate90")},l.prototype.createElement=function(n){return document.createElement(n)},l.prototype.forEach=function(n,r){if(!function(n){return void 0===n}(n)&&!a(n))if("object"===e(n)&&o(n))for(var t=0,i=n.length;t<i;t++)r.call(null,n[t],t,n);else for(key in n)n.hasOwnProperty(key)&&r.call(null,n[key]||"null",key,n)},n.exports=l},function(n,r,t){var e=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);e(o,{insert:"head",singleton:!1});var i=o.locals?o.locals:{};n.exports=i},function(n,r,t){"use strict";function e(n){for(var r=-1,t=0;t<f.length;t++)if(f[t].identifier===n){r=t;break}return r}function o(n,r){for(var t={},o=[],i=0;i<n.length;i++){var a=n[i],l=r.base?a[0]+r.base:a[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var d=e(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1===d?f.push({identifier:u,updater:c(p,r),references:1}):(f[d].references++,f[d].updater(p)),o.push(u)}return o}function i(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var i=u(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}function a(n,r,t,e){var o=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=d(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function l(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function c(n,r){var t,e,o;if(r.singleton){var c=h++;t=p||(p=i(r)),e=a.bind(null,t,c,!1),o=a.bind(null,t,c,!0)}else t=i(r),e=l.bind(null,t,r),o=function(){!function(n){null!==n.parentNode&&n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}var s=function(){var n;return function(){return void 0===n&&(n=!(!(window&&document&&document.all)||window.atob)),n}}(),u=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),f=[],d=function(){var n=[];return function(r,t){return n[r]=t,n.filter(Boolean).join("\n")}}(),p=null,h=0;n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=s());var t=o(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var a=e(t[i]);f[a].references--}for(var l=o(n,r),c=0;c<t.length;c++){var s=e(t[c]);0===f[s].references&&(f[s].updater(),f.splice(s,1))}t=l}}}},function(n,r,t){(r=t(4)(!1)).push([n.i,"/* html, body{\r\n    width: 100%;\r\n    height: 100%;\r\n} */\r\n\r\n\r\n.add-height{\r\n    height: auto !important;\r\n}\r\n\r\n.rotate90{\r\n    transform: rotate(0deg) !important;\r\n}\r\n\r\n.jv-wrap{\r\n    display: flex;\r\n}\r\n\r\n.jv-folder{\r\n    cursor: pointer;\r\n}\r\n\r\n/* for light them */\r\n\r\n.jv-light-symbol{\r\n    color: #000;\r\n    font-weight: bold;\r\n}\r\n\r\n.jv-light-con{\r\n    background: #fff;\r\n    color: #000;\r\n    font-family: monospace;\r\n    overflow: auto;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.jv-light-current {\r\n    line-height: 30px;\r\n    padding-left: 20px;\r\n    position: relative;\r\n}\r\n\r\n.jv-light-left {\r\n    display: inline-block;\r\n}\r\n\r\n.jv-light-rightString {\r\n    display: inline-block;\r\n    color: #7a3e9d;\r\n}\r\n\r\n.jv-light-rightBoolean {\r\n    display: inline-block;\r\n    color: #448c27;\r\n}\r\n\r\n.jv-light-rightNumber {\r\n    display: inline-block;\r\n    color: #f53232;\r\n}\r\n\r\n.jv-light-rightNull {\r\n    display: inline-block;\r\n    color: #9c5d27;\r\n}\r\n\r\n.jv-light-rightObj {\r\n    display: block !important;\r\n    overflow: hidden;\r\n    height: 0;\r\n}\r\n\r\n.jv-light-folder {\r\n    width: 0px;\r\n    display: inline-block;\r\n    margin-left: -15px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    height: 0px;\r\n    border: 4px solid transparent;\r\n    border-top: 8px solid #484d50;\r\n    position: absolute;\r\n    top: 11px;\r\n    transform-origin: 50% 25%;\r\n    transform: rotate(-90deg);\r\n}\r\n\r\n\r\n\r\n\r\n/* for dark theme */\r\n\r\n.jv-dark-con{\r\n    background: #272822;\r\n    color: #fff;\r\n    font-family: monospace;\r\n    overflow: auto;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.jv-dark-symbol{\r\n    color: #fff;\r\n    font-weight: bold;\r\n}\r\n\r\n.jv-dark-current {\r\n    line-height: 30px;\r\n    padding-left: 20px;\r\n    position: relative;\r\n}\r\n\r\n.jv-dark-left {\r\n    display: inline-block;\r\n}\r\n\r\n.jv-dark-rightString {\r\n    display: inline-block;\r\n    color: #66d9ef;\r\n}\r\n\r\n.jv-dark-rightBoolean {\r\n    display: inline-block;\r\n    color: #a6e22e;\r\n}\r\n\r\n.jv-dark-rightNumber {\r\n    display: inline-block;\r\n    color: #f92672;\r\n}\r\n\r\n.jv-dark-rightNull {\r\n    display: inline-block;\r\n    color: #e6db74;\r\n}\r\n\r\n.jv-dark-rightObj {\r\n    display: block !important;\r\n    overflow: hidden;\r\n    height: 0;\r\n}\r\n\r\n.jv-dark-folder {\r\n    width: 0px;\r\n    display: inline-block;\r\n    margin-left: -15px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    height: 0px;\r\n    border: 4px solid transparent;\r\n    border-top: 8px solid #fff;\r\n    position: absolute;\r\n    top: 11px;\r\n    transform: rotate(-90deg);\r\n    transform-origin: 50% 25%;\r\n}\r\n\r\n",""]),n.exports=r},function(n){"use strict";function r(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=function(n){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r);return"/*# ".concat(t," */")}(e),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=r(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,r,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i,a=0;a<this.length;a++)null!=(i=this[a][0])&&(o[i]=!0);for(var l,c=0;c<n.length;c++)l=[].concat(n[c]),(!e||!o[l[0]])&&(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))},t}}])}));