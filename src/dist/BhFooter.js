!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.BhFooter=e():t.BhFooter=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}({0:function(t,e,o){t.exports=o(126)},126:function(t,e,o){var r,n,p={};r=o(127),n=o(128),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(s.template=n),s.computed||(s.computed={}),Object.keys(p).forEach(function(t){var e=p[t];s.computed[t]=function(){return e}})},127:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["copyright"],ready:function(){$(this.$el).bhFooter({text:this.copyright})}}},128:function(t,e){t.exports=" <footer></footer> "}})});