!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BhUploader=t():e.BhUploader=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){e.exports=n(230)},4:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},5:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=p[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(l(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(l(r.parts[o],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],s=i[2],l=i[3],u={css:a,media:s,sourceMap:l};n[o]?n[o].parts.push(u):t.push(n[o]={id:o,parts:[u]})}return t}function o(e,t){var n=h(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e,t){var n,r,i;if(t.singleton){var o=y++;n=v||(v=s(t)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=s(t),r=f.bind(null,n),i=function(){a(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function u(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p={},c=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},d=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=c(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=d()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],l=p[s.id];l.refs--,o.push(l)}if(e){var u=i(e);r(u,t)}for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete p[l.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},230:function(e,t,n){var r,i,o={};n(231),r=n(233),i=n(234),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(a.template=i),a.computed||(a.computed={}),Object.keys(o).forEach(function(e){var t=o[e];a.computed[e]=function(){return t}})},231:function(e,t,n){var r=n(232);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)},232:function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".bh-uploader[_v-1670ffa1]{line-height:28px;position:relative;overflow:hidden;display:inline-block}.file-input[_v-1670ffa1]{position:absolute;top:0;right:0;margin:0;opacity:0;-ms-filter:'alpha(opacity=0)';font-size:200px!important;direction:ltr;cursor:pointer}",""])},233:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(!e||!t||0===t.length)return!0;var n=e.match(/\.\w+$/);if(n&&1!==n.length)return!1;var r=n[0];return $.inArray(r,t)>-1},r=function(){var e=this,t=$(e.elInput);if(!e.url)return console.warn("Initialize file uploader failed: upload url is null !"),!1;var r={url:e.url,autoUpload:!0,dataType:"json",add:function(t,r){var i=e.fileType;return i&&i.length>0&&r.files&&r.files.length>0&&!n(r.files[0].name,i)?void e.$dispatch("etype",{data:r,msg:"不支持的文件格式"}):void(e.callbacks&&e.callbacks.beforeSubmit&&e.callbacks.beforeSubmit(t,r)===!1||r.submit())},submit:function(e,t){},done:function(t,n){e.$dispatch("done",n)},fail:function(t,n){e.$dispatch("failed",{data:n,msg:"上传失败"})}};return t.fileupload(r),!0};t.default={data:function(){return{elInput:null}},props:{url:String,type:{type:String,default:"link"},fileType:{type:Array,default:[]},text:{type:String,default:"选择文件"},callbacks:Object},methods:{triggerClick:function(){$(this.elInput).click()}},ready:function(){this.elInput="link"===this.type?this.$els.linkfile:this.$els.buttonfile,r.call(this)},beforeDestroy:function(){var e="link"===this.type?this.$els.linkfile:this.$els.buttonfile;try{$(e).fileupload("destroy")}catch(e){console.warn("destroy fileupload failed !")}}}},234:function(e,t){e.exports=' <div class=bh-uploader _v-1670ffa1=""> <a v-if="type === &quot;link&quot;" class=bh-file-upload href=javascript:void(0) _v-1670ffa1=""> <input v-el:linkfile="" class=file-input type=file _v-1670ffa1="">{{text}} </a> <div v-if="type === &quot;button&quot;" type=button class="bh-btn bh-btn-primary bh-btn-large waves-effect" _v-1670ffa1=""> <input v-el:buttonfile="" class=file-input type=file _v-1670ffa1="">{{text}} </div> </div> '}})});