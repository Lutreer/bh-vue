!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BhRadio=t():e.BhRadio=t()}(this,function(){return function(e){function t(i){if(o[i])return o[i].exports;var r=o[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}({0:function(e,t,o){e.exports=o(183)},183:function(e,t,o){var i,r,a={};i=o(184),r=o(185),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(n.template=r),n.computed||(n.computed={}),Object.keys(a).forEach(function(e){var t=a[e];n.computed[e]=function(){return t}})},184:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=0;t.default={data:function(){return{uuid:o++}},computed:{dirClass:function(){return"v"===this.dir?"bh-radio-vertical":""}},props:{value:"",items:{default:[]},dir:{default:"h"},nameMember:{default:"name"},valueMember:{default:"value"}},methods:{onchange:function(e){this.$dispatch("change",this.value)}}}},185:function(e,t){e.exports=' <div class=bh-radio :class=dirClass> <label v-for="item in items" :class=\'{"bh-disabled": item.disabled}\'> <input name=radio-btn-{{uuid}} type=radio :value=item[valueMember] :disabled=item.disabled v-model=value @change.stop=onchange> <i class=bh-choice-helper></i> {{item[nameMember]}} </label> </div> '}})});