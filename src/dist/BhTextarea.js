!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BhTextarea=t():e.BhTextarea=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var s=o[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}({0:function(e,t,o){e.exports=o(215)},215:function(e,t,o){var r,s,n={};r=o(216),s=o(217),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},216:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{jqxObj:null}},props:["value","placeholder","source","disabled"],ready:function(){var e=$(this.$el);this.jqxObj=e.jqxTextArea({placeHolder:this.placeholder,source:this.source?this.source:[],disabled:this.disabled}),this.$watch("disabled",function(t){e.jqxTextArea({disabled:t})})},beforeDestroy:function(){var e=$(this.$el);e.jqxTextArea("destroy")}}},217:function(e,t){e.exports=" <textarea v-model=value></textarea> "}})});