!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.EmapDatatable=e():t.EmapDatatable=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var a=o[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}({0:function(t,e,o){t.exports=o(291)},33:function(t,e,o){t.exports={default:o(34),__esModule:!0}},34:function(t,e,o){var n=o(35),a=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},35:function(t,e){var o=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=o)},291:function(t,e,o){var n,a,r={};n=o(292),a=o(293),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(r).forEach(function(t){var e=r[t];i.computed[t]=function(){return e}})},292:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(33),r=n(a),i={height:null,checkable:!1,operations:null,colHasMinWidth:!0},s=function(t,e){return"button"===e.type?"<button data-name='"+e.name+"' data-row='"+t+"' class='opt-button'> style='padding: 0 5px;'"+e.title+"</button>":"<a href='javascript:void(0)' data-name='"+e.name+"' data-row='"+t+"' class='opt-button' style='padding: 0 5px;'>"+e.title+"</a>"},d=function(t){var e="undefined"==typeof t.options.operations.colIndex;return{colIndex:e?"last":t.options.operations.colIndex,type:"tpl",column:{width:t.options.operations.width,text:t.options.operations.title,align:"center",cellsAlign:"center",cellsRenderer:function(e,o,n,a){var r=t.options.operations.items;$.isFunction(r)&&(r=r.call(t,a));var i="";return $.each(r,function(t,o){i+=s(e,o)}),i}}}},c=function(t){var e=t.hiddenColumns,o=$(t.$el);e&&e.length>0&&e.forEach(function(t){o.jqxDataTable("hideColumn",t)})},l=function(t){if(!t.inited){var e=$(t.$el),o=$.extend({customColumns:[]},i,t.options),n=o.customColumns=$.extend([],o.customColumns),a=o.operations;t.hiddenColumns=o.hiddenColumns,o.hiddenColumns=void 0,o.checkable&&n.unshift({colIndex:0,showCheckAll:!0,width:32,type:"checkbox"}),a&&n.push(d(t));var s=["click","mouseover"];o.checkable=void 0,o.operations=void 0,o.lazyInit=void 0,e.off("rowExpand").on("rowExpand",function(){t.$dispatch("expand")}),e.off("rowCollapse").on("rowCollapse",function(){t.$dispatch("collapse")}),o.ready=function(){c(t),t.$dispatch(t.readyName,t)},o.rendered=function(){var o=e.jqxDataTable("getRows");t.$emit("rendered"),o.forEach(function(e,o){t.cachedMap[o]=e}),Vue.nextTick(function(){e.find(".jqx-grid-table tr").each(function(e,o){s.forEach(function(n){var a=$(o).find("[data-"+n+"]");a.length>0&&a.prop("row",t.cachedMap[e])})})})},o.formatData=function(t){return t?(delete t.pagesize,delete t.pagenum,delete t.filterslength,delete t.sortdatafield,delete t.sortorder,"GET"===o.method||"get"===o.method?t:(0,r.default)(t)):{}},e.emapdatatable(o),e.on("click",".opt-button",function(e){var o=$(this),n=o.attr("data-row"),a=o.attr("data-name");t.$dispatch(a,t.cachedMap[n]||t.getDataByRow(n),parseInt(n),e)}),s.forEach(function(o){e.on("click","[data-"+o+"]",function(e){var n=$(this),a=n.prop("row"),r=n.attr("data-"+o);t.$dispatch(r,a)})}),t.inited=!0}},u=function(t){return t&&t.datas&&t.datas.rows};e.default={data:function(){return{inited:!1,readyName:"ready",cachedMap:{},hiddenColumns:[]}},props:{options:Object},ready:function(){this.options.readyName&&(this.readyName=this.options.readyName,this.options.readyName=void 0),this.options.lazyInit||l(this)},methods:{init:function(){l(this)},reload:function(t,e){var o=this;$(this.$el).emapdatatable("reload",t,function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];c(o),e&&e(n)})},checkedRecords:function(){return $(this.$el).emapdatatable("checkedRecords")},reloadFirstPage:function(t,e){var o=this;return $(this.$el).emapdatatable("reloadFirstPage",t,function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];c(o),e&&e(n)})},getTotalRecords:function(){return $(this.$el).emapdatatable("getTotalRecords")},getModel:function(){return $(this.$el).emapdatatable("getModel")},getResult:function(){return $(this.$el).emapdatatable("getResult")},getDataByRow:function(t){var e=this.options.getRows||u,o=this.getResult(),n=e(o);return n&&n[t]},selectColumnsExport:function(t){var e=$.extend({type:"export"},t);return $(this.$el).emapdatatable("selectColumnsExport",e)},selectToShowColumns:function(t){return $(this.$el).emapdatatable("selectToShowColumns",t)},export:function(t){return $(this.$el).emapdatatable("export",t)}},beforeDestroy:function(){this.inited=!1,this.cachedMap={}}}},293:function(t,e){t.exports=" <div></div> "}})});