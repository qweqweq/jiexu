(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c4e3fe2"],{"553a":function(t,i,e){"use strict";e("e93b");var n=e("c6f7"),a=e("b64a"),o=e("6a18"),s=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t};i["a"]={name:"v-footer",mixins:[Object(n["a"])(null,["height","inset"]),a["a"],o["a"]],props:{height:{default:32,type:[Number,String]},inset:Boolean},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},computedMarginBottom:function(){if(this.app)return this.$vuetify.application.bottom},computedPaddingLeft:function(){return this.app&&this.inset?this.$vuetify.application.left:0},computedPaddingRight:function(){return this.app&&this.inset?this.$vuetify.application.right:0},styles:function(){var t={height:isNaN(this.height)?this.height:this.height+"px"};return this.computedPaddingLeft&&(t.paddingLeft=this.computedPaddingLeft+"px"),this.computedPaddingRight&&(t.paddingRight=this.computedPaddingRight+"px"),this.computedMarginBottom&&(t.marginBottom=this.computedMarginBottom+"px"),t}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var i=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:s({"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--inset":this.inset},this.themeClasses),style:this.styles,ref:"content"});return t("footer",i,this.$slots.default)}}},a71c:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-footer",{attrs:{height:"auto"}},[e("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[e("v-flex",{attrs:{"py-3":"","text-xs-center":"","black--text":"",xs12:""}},[t._v("\n      ©"+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("杰旭教育MBA")])])],1)],1)},a=[],o=e("2877"),s=e("6544"),p=e.n(s),r=e("0e8f"),c=e("553a"),u=e("a722"),h={},l=Object(o["a"])(h,n,a,!1,null,null,null);i["default"]=l.exports;p()(l,{VFlex:r["a"],VFooter:c["a"],VLayout:u["a"]})},c6f7:function(t,i,e){"use strict";e.d(i,"a",function(){return o});var n=e("c22b"),a=e("58df");function o(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,i){i?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,i){this.$vuetify.application.unbind(this._uid,i)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,e=i.length;t<e;t++)this.$watch(i[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.bind(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unbind(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},e93b:function(t,i,e){}}]);