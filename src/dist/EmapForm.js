!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EmapForm=t():e.EmapForm=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){e.exports=n(279)},4:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},5:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=p[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(u(o.parts[r],t))}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(u(o.parts[r],t));p[o.id]={id:o.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],r=i[0],s=i[1],a=i[2],u=i[3],f={css:s,media:a,sourceMap:u};n[r]?n[r].parts.push(f):t.push(n[r]={id:r,parts:[f]})}return t}function r(e,t){var n=h(),o=$[$.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),$.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=$.indexOf(e);t>=0&&$.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function u(e,t){var n,o,i;if(t.singleton){var r=v++;n=m||(m=a(t)),o=f.bind(null,n,r,!1),i=f.bind(null,n,r,!0)}else n=a(t),o=l.bind(null,n),i=function(){s(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function f(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function l(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},c=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,$=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=c()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return o(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var a=n[s],u=p[a.id];u.refs--,r.push(u)}if(e){var f=i(e);o(f,t)}for(var s=0;s<r.length;s++){var u=r[s];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete p[u.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},279:function(e,t,n){var o,i,r={};n(280),o=n(282),i=n(283),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(s.template=i),s.computed||(s.computed={}),Object.keys(r).forEach(function(e){var t=r[e];s.computed[e]=function(){return t}})},280:function(e,t,n){var o=n(281);"string"==typeof o&&(o=[[e.id,o,""]]);n(5)(o,{});o.locals&&(e.exports=o.locals)},281:function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"body>main>article{min-height:68px}",""])},282:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{inited:!1}},props:{options:Object,offsetTop:{default:84},offsetRight:{default:16},scrollTop:{default:$("header.bh-header-mini").outerHeight()},outline:{type:Boolean,default:!0},container:{default:null}},methods:{disableItem:function(e){$(this.$el).emapForm("disableItem",e)},enableItem:function(e){$(this.$el).emapForm("enableItem",e)},saveUpload:function(){$(this.$el).emapForm("saveUpload")},showItem:function(e){$(this.$el).emapForm("showItem",e)},hideItem:function(e){$(this.$el).emapForm("hideItem",e)},getValue:function(){return $(this.$el).emapForm("getValue")},setValue:function(e){$(this.$el).emapForm("setValue",e)},setLabelColor:function(e){$(this.$el).emapForm("changeLabelColor",e)},reloadValidate:function(){$(this.$el).emapForm("reloadValidate")},getModel:function(){return $(this.$el).emapForm("getModel")},validate:function(){return $(this.$el).emapValidate("validate")},requireItem:function(e){return $(this.$el).emapForm("requireItem",e)},unRequireItem:function(e){return $(this.$el).emapForm("unRequireItem",e)},clear:function(e){return $(this.$el).emapForm("clear",e)},initForm:function(e){var t=this,n=$(this.$el),o=WIS_EMAP_SERV.getModel(e.pagePath,e.modelName,"form",e.queryParams,{"content-type":"json"});e.data=o,n.emapForm(e),this.reloadValidate(),n.on("_formChange",function(e){t.$dispatch("change",e)}),this.inited=!0,this.$dispatch("inited")},initOutline:function(){if(this.outline){if(!this.container)return void console.error("emap form 没有指定 container !");$.bhFormOutline.show({offset:{right:this.offsetRight,top:this.offsetTop},scrollOffsetTop:this.scrollTop,insertContainer:$(this.container)}),$.bhAffix({hostContainer:$(this.container),fixedContainer:$("div.bh-form-outline")})}},destroyOutline:function(){this.outline&&$.bhFormOutline.hide({insertContainer:$(this.container),destory:!0})},init:function(){this.options&&(this.initForm(this.options),this.initOutline())},reload:function(){this.inited&&this.destroy(),this.init()},destroy:function(){var e=$(this.$el);e.off("_formChange"),e.emapForm("destroy"),this.destroyOutline()}},ready:function(){var e=this;this.init(),this.$watch("options.readonly",function(t,n){e.reload()})},beforeDestory:function(){this.destroy(),this.inited=!1}}},283:function(e,t){e.exports=" <div></div> "}})});