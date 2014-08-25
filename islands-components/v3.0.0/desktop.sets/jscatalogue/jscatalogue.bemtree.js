(function(g) {

  var __xjst = (function(exports) {

     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var cache;var cache;var __$r=__$g2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}[function(exports){var BEM_={},toString=Object.prototype.toString,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},buildEscape=function(){var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};return function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}}}();function BEMContext(context,apply_){this.ctx=context;this.apply=apply_;this._buf={};this._=this;this._mode="";this.block=undefined;this.elem=undefined;this.mods=undefined;this.elemMods=undefined}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){var t=typeof obj;return t==="string"||t==="number"||t==="boolean"};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando])return obj[expando];else return obj[expando]=get()};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};BEMContext.prototype.doAsync=function(fn){var mode=this._mode,ctx=this.ctx,block=this.block,elem=this.elem,mods=this.mods,elemMods=this.elemMods,promise=Vow.invoke(fn);(this.__queue||(this.__queue=[])).push(promise);promise.always(function(){this._mode=mode;this.ctx=ctx;this.block=block;this.elem=elem;this.mods=mods;this.elemMods=elemMods}.bind(this));return promise};var oldApply=exports.apply;exports.apply=BEMContext.applyAsync=function _applyAsync(context){var ctx=new BEMContext(context||this,oldApply);ctx.__queue=[];ctx._buf=ctx.apply();return Vow.allResolved(ctx.__queue).always(function(){return ctx._buf})}}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.__$anflg8=false;ctx.ctx=undefined;ctx._mode=undefined;ctx.__$anflg7=false;ctx.__$anflg6=false;ctx.__$anflg5=false;ctx.__$anflg4=false;ctx.__$anflg3=false;ctx.__$anflg2=false;ctx._data=undefined;ctx.__$anflg1=false;ctx.block=undefined;ctx._currBlock=undefined;ctx.elem=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b1(__$ctx,__$ref){__$ctx.__$a=0;{var _$hprefix__$0=__$ctx.ctx._prefix;return[{block:"heading",mods:{level:3},anchor:_$hprefix__$0+"events",content:"События"},__$ctx.ctx._data.map(function(event){return[{block:"heading",mods:{level:4},anchor:_$hprefix__$0+"event-"+event.name,content:event.name},{elem:"event-desc",content:event.description},event.params&&event.params.length?[{block:"heading",mods:{level:5},content:"Параметры"},{elem:"params-section",_data:event.params}]:""]})]}return}function __$b2(__$ctx,__$ref){__$ctx.__$a=0;{var _$gprefix__$1=__$ctx.ctx._prefix;return[{block:"heading",mods:{level:3},anchor:_$gprefix__$1+"props",content:"Свойства"},__$ctx.ctx._data.map(function(prop){return{elem:"property",content:[{block:"heading",mods:{level:4},anchor:_$gprefix__$1+"prop-"+prop.name,content:prop.name},prop.scope==="static"&&{elem:"static",content:"STATIC"},prop.access==="protected"&&{elem:"protected",content:"PROTECTED"},prop.types&&prop.types.length?{elem:"prop-type",content:"Типы: "+prop.types.join(" | ")}:"",prop.deprecated&&{elem:"deprecated",content:"Deprecated: "+method.deprecated},{elem:"prop-desc",content:prop.description}]}})]}return}function __$b6(__$ctx,__$ref){__$ctx.__$a=0;{var _$cdata__$2=__$ctx.ctx._data,_$cprefix__$3=__$ctx.ctx._prefix;return[{block:"heading",mods:{level:3},anchor:_$cprefix__$3+"methods",content:"Методы"},_$cdata__$2.map(function(method){return{elem:"method",content:[{block:"heading",mods:{level:4},anchor:_$cprefix__$3+"method-"+method.name,content:method.name},method.scope==="static"&&{elem:"static",content:"STATIC"},method.access==="protected"&&{elem:"protected",content:"PROTECTED"},method.final&&{elem:"final",content:"FINAL"},method.deprecated&&{elem:"deprecated",content:"Deprecated: "+method.deprecated},{elem:"method-description",content:method.description},method.params&&method.params.length?{elem:"method-params",_data:method.params}:"",method.returns&&method.returns.length?{elem:"method-returns",_data:method.returns}:""]}})]}return}function __$b8(__$ctx,__$ref){__$ctx.__$a=0;{var _$adata__$4=__$ctx.ctx._data,_$aprefix__$5=__$ctx.ctx._blockName+"_"+_$adata__$4.name+"_"+_$adata__$4.value+"-";return[{block:"heading",mods:{level:2},mix:{elem:"mod-name"},anchor:_$aprefix__$5+"desc",content:"Модификатор _"+_$adata__$4.name+"_"+_$adata__$4.value},{elem:"description",content:_$adata__$4.description},_$adata__$4.methods.length>0?{elem:"methods",_data:_$adata__$4.methods,_prefix:_$aprefix__$5}:"",_$adata__$4.properties.length>0?{elem:"properties",_data:_$adata__$4.properties,_preifix:_$aprefix__$5}:"",_$adata__$4.events.length>0?{elem:"events",_data:_$adata__$4.events,_prefix:_$aprefix__$5}:""]}return}function __$b9(__$ctx,__$ref){__$ctx.__$a=0;{var _$9data__$6=__$ctx._data,_$9prefix__$7=_$9data__$6.blockName+"-";return[{block:"heading",mods:{level:2},anchor:_$9prefix__$7+"desc",content:"Описание"},{elem:"description",content:_$9data__$6.description},_$9data__$6.jsParams.length>0?{elem:"js-params",_data:_$9data__$6.jsParams,_prefix:_$9prefix__$7}:"",_$9data__$6.methods.length>0?{elem:"methods",_data:_$9data__$6.methods,_prefix:_$9prefix__$7}:"",_$9data__$6.properties.length>0?{elem:"properties",_data:_$9data__$6.properties,_prefix:_$9prefix__$7}:"",_$9data__$6.events.length>0?{elem:"events",_data:_$9data__$6.events,_prefix:_$9prefix__$7}:""]}return}function __$b10(__$ctx,__$ref){__$ctx.__$a=0;{var _$3data__$40=__$ctx.ctx._data;return[{elem:"toc-block",_data:_$3data__$40},_$3data__$40.mods.map(function(mod){return{elem:"toc-mod",_data:mod,_blockName:_$3data__$40.blockName}})]}return}function __$b11(__$ctx,__$ref){__$ctx.__$a=0;{var _$2data__$41=__$ctx._data;var __$r__$42;var __$l0__$43=__$ctx.__$anflg3;__$ctx.__$anflg3=true;var __$r__$44;var __$l1__$45=__$ctx.ctx;__$ctx.ctx=[{block:"header",content:[{block:"link",mods:{pos:"right"},url:"../index/index.html",content:"← каталог"},{elem:"block-name",tag:"span",content:"Блок "+_$2data__$41.blockName}]},{elem:"toc",_data:_$2data__$41},{elem:"bem-block",_data:_$2data__$41},_$2data__$41.mods.map(function(mod){return{elem:"bem-mod",_data:mod,_blockName:_$2data__$41.blockName}})];var __$l2__$46=__$ctx._mode;__$ctx._mode="";__$r__$44=applyc(__$ctx,__$ref);__$ctx.ctx=__$l1__$45;__$ctx._mode=__$l2__$46;__$r__$42=__$r__$44;__$ctx.__$anflg3=__$l0__$43;return __$r__$42}return}function __$b13(__$ctx,__$ref){__$ctx.__$a=0;{var _$8prefix__$8=__$ctx.ctx._prefix+"event-";var __$r__$9;var __$l0__$10=__$ctx.__$anflg8;__$ctx.__$anflg8=true;var __$r__$11;var __$l1__$12=__$ctx.ctx;__$ctx.ctx={elem:"toc-item",link:__$ctx.ctx._prefix+"events",title:"События",content:__$ctx.ctx._data.map(function(event){return{elem:"toc-item",link:_$8prefix__$8+event.name,title:event.name}})};var __$l2__$13=__$ctx._mode;__$ctx._mode="";__$r__$11=applyc(__$ctx,__$ref);__$ctx.ctx=__$l1__$12;__$ctx._mode=__$l2__$13;__$r__$9=__$r__$11;__$ctx.__$anflg8=__$l0__$10;return __$r__$9}return}function __$b14(__$ctx,__$ref){__$ctx.__$a=0;{var _$7prefix__$14=__$ctx.ctx._prefix+"prop-";var __$r__$15;var __$l0__$16=__$ctx.__$anflg7;__$ctx.__$anflg7=true;var __$r__$17;var __$l1__$18=__$ctx.ctx;__$ctx.ctx={elem:"toc-item",link:__$ctx.ctx._prefix+"props",title:"Свойства",content:__$ctx.ctx._data.map(function(property){return{elem:"toc-item",link:_$7prefix__$14+property.name,title:property.name}})};var __$l2__$19=__$ctx._mode;__$ctx._mode="";__$r__$17=applyc(__$ctx,__$ref);__$ctx.ctx=__$l1__$18;__$ctx._mode=__$l2__$19;__$r__$15=__$r__$17;__$ctx.__$anflg7=__$l0__$16;return __$r__$15}return}function __$b15(__$ctx,__$ref){__$ctx.__$a=0;{var _$6prefix__$20=__$ctx.ctx._prefix+"method-";var __$r__$21;var __$l0__$22=__$ctx.__$anflg6;__$ctx.__$anflg6=true;var __$r__$23;var __$l1__$24=__$ctx.ctx;__$ctx.ctx={elem:"toc-item",link:__$ctx.ctx._prefix+"methods",title:"Методы",content:__$ctx.ctx._data.map(function(method){return{elem:"toc-item",link:_$6prefix__$20+method.name,title:method.name}})};var __$l2__$25=__$ctx._mode;__$ctx._mode="";__$r__$23=applyc(__$ctx,__$ref);__$ctx.ctx=__$l1__$24;__$ctx._mode=__$l2__$25;__$r__$21=__$r__$23;__$ctx.__$anflg6=__$l0__$22;return __$r__$21}return}function __$b16(__$ctx,__$ref){__$ctx.__$a=0;{var _$5data__$26=__$ctx.ctx._data,_$5prefix__$27="#"+__$ctx.ctx._blockName+"_"+_$5data__$26.name+"_"+_$5data__$26.value+"-";var __$r__$28;var __$l0__$29=__$ctx.__$anflg5;__$ctx.__$anflg5=true;var __$r__$30;var __$l1__$31=__$ctx.ctx;__$ctx.ctx={elem:"toc-item",link:_$5prefix__$27+"desc",title:"Модификатор _"+_$5data__$26.name+"_"+_$5data__$26.value,content:[_$5data__$26.methods.length>0?{elem:"toc-methods",_data:_$5data__$26.methods,_prefix:_$5prefix__$27}:"",_$5data__$26.properties.length>0?{elem:"toc-properties",_data:_$5data__$26.properties,_prefix:_$5prefix__$27}:"",_$5data__$26.events.length>0?{elem:"toc-events",_data:_$5data__$26.events,_prefix:_$5prefix__$27}:""]};var __$l2__$32=__$ctx._mode;__$ctx._mode="";__$r__$30=applyc(__$ctx,__$ref);__$ctx.ctx=__$l1__$31;__$ctx._mode=__$l2__$32;__$r__$28=__$r__$30;__$ctx.__$anflg5=__$l0__$29;return __$r__$28}return}function __$b17(__$ctx,__$ref){__$ctx.__$a=0;{var _$4data__$33=__$ctx.ctx._data,_$4prefix__$34="#"+_$4data__$33.blockName+"-";var __$r__$35;var __$l0__$36=__$ctx.__$anflg4;__$ctx.__$anflg4=true;var __$r__$37;var __$l1__$38=__$ctx.ctx;__$ctx.ctx={elem:"toc-item",link:_$4prefix__$34+"desc",title:"Описание",content:[_$4data__$33.jsParams.length>0?{elem:"toc-item",link:_$4prefix__$34+"jsparams",title:"JS-параметры"}:"",_$4data__$33.methods.length>0?{elem:"toc-methods",_data:_$4data__$33.methods,_prefix:_$4prefix__$34}:"",_$4data__$33.properties.length>0?{elem:"toc-properties",_data:_$4data__$33.properties,_prefix:_$4prefix__$34}:"",_$4data__$33.events.length>0?{elem:"toc-events",_data:_$4data__$33.events,_prefix:_$4prefix__$34}:""]};var __$l2__$39=__$ctx._mode;__$ctx._mode="";__$r__$37=applyc(__$ctx,__$ref);__$ctx.ctx=__$l1__$38;__$ctx._mode=__$l2__$39;__$r__$35=__$r__$37;__$ctx.__$anflg4=__$l0__$36;return __$r__$35}return}function __$b20(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$57;var __$l2__$58=__$ctx._mode;__$ctx._mode="content";__$r__$57=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$58;var content__$56=__$r__$57;if(content__$56||content__$56===0){var __$r__$59;var __$l0__$60=__$ctx._mode;__$ctx._mode="";var __$l1__$61=__$ctx.ctx;__$ctx.ctx=content__$56;__$r__$59=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$60;__$ctx.ctx=__$l1__$61;__$ctx.ctx.content=__$r__$59}return __$ctx.ctx}function __$b21(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$62=__$ctx.ctx;if(ctx__$62&&ctx__$62!==true||ctx__$62===0){return ctx__$62}return}function __$b22(__$ctx,__$ref){__$ctx.__$a=0;var v__$63=__$ctx.ctx,l__$64=v__$63.length,i__$65=0,buf__$66=[];while(i__$65<l__$64)buf__$66.push(function(){var __$r__$67;var __$l0__$68=__$ctx.ctx;__$ctx.ctx=v__$63[i__$65++];__$r__$67=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$68;return __$r__$67}());return buf__$66}function __$b23(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$69=__$ctx.ctx.block,vElem__$70=__$ctx.ctx.elem,block__$71=__$ctx._currBlock||__$ctx.block;var __$r__$72;var __$l0__$73=__$ctx._mode;__$ctx._mode="default";var __$l1__$74=__$ctx.block;__$ctx.block=vBlock__$69||(vElem__$70?block__$71:undefined);var __$l2__$75=__$ctx._currBlock;__$ctx._currBlock=vBlock__$69||vElem__$70?undefined:block__$71;var __$l3__$76=__$ctx.elem;__$ctx.elem=__$ctx.ctx.elem;var __$l4__$77=__$ctx.mods;__$ctx.mods=(vBlock__$69?__$ctx.ctx.mods:__$ctx.mods)||{};var __$l5__$78=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$r__$72=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$73;__$ctx.block=__$l1__$74;__$ctx._currBlock=__$l2__$75;__$ctx.elem=__$l3__$76;__$ctx.mods=__$l4__$77;__$ctx.elemMods=__$l5__$78;return __$r__$72}function __$g0(__$ctx,__$ref){var __$t=__$ctx.elem;if(__$t==="events"){__$ctx.__$a=0;var __$r=__$b1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="properties"){__$ctx.__$a=0;var __$r=__$b2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="params-section"){__$ctx.__$a=0;var __$r=__$ctx.ctx._data.map(function(param){return{elem:"param",content:[{elem:"param-name",content:param.name},{elem:"param-type",content:param.types.join(" | ")},{elem:"param-desc",content:param.description}]}});if(__$r!==__$ref)return __$r}else if(__$t==="method-returns"){__$ctx.__$a=0;return[{block:"heading",mods:{level:5},content:"Возвращаемое значение"},__$ctx.ctx._data.map(function(returns){return{elem:"returns",content:[returns.types.join(", "),{elem:"returns-description",content:returns.description}]}})]}else if(__$t==="method-params"){__$ctx.__$a=0;return[{block:"heading",mods:{level:5},content:"Параметры"},{elem:"params-section",_data:__$ctx.ctx._data}]}else if(__$t==="methods"){__$ctx.__$a=0;var __$r=__$b6(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="js-params"){__$ctx.__$a=0;return[{block:"heading",mods:{level:3},anchor:__$ctx.ctx._prefix+"jsparams",content:"JS-параметры"},{elem:"params-section",_data:__$ctx.ctx._data}]}else if(__$t==="bem-mod"){__$ctx.__$a=0;var __$r=__$b8(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="bem-block"){__$ctx.__$a=0;var __$r=__$b9(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="toc"){__$ctx.__$a=0;var __$r=__$b10(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.elem&&__$ctx["__$anflg3"]!==true){__$ctx.__$a=0;var __$r=__$b11(__$ctx,__$ref);if(__$r!==__$ref)return __$r}return __$ref}function __$g1(__$ctx,__$ref){var __$t=__$ctx.elem;if(__$t==="toc-events"){if(__$ctx["__$anflg8"]!==true){__$ctx.__$a=0;var __$r=__$b13(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="toc-properties"){if(__$ctx["__$anflg7"]!==true){__$ctx.__$a=0;var __$r=__$b14(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="toc-methods"){if(__$ctx["__$anflg6"]!==true){__$ctx.__$a=0;var __$r=__$b15(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="toc-mod"){if(__$ctx["__$anflg5"]!==true){__$ctx.__$a=0;var __$r=__$b16(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="toc-block"){if(__$ctx["__$anflg4"]!==true){__$ctx.__$a=0;var __$r=__$b17(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}if(!__$ctx.elem&&__$ctx["__$anflg2"]!==true){__$ctx.__$a=0;var __$r__$47;var __$l0__$48=__$ctx.__$anflg2;__$ctx.__$anflg2=true;var __$r__$49;var __$l1__$50=__$ctx._data;__$ctx._data=__$ctx.ctx.data;__$r__$49=applyc(__$ctx,__$ref);__$ctx._data=__$l1__$50;__$r__$47=__$r__$49;__$ctx.__$anflg2=__$l0__$48;var __$r=__$r__$47;if(__$r!==__$ref)return __$r}return __$ref}function __$g2(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="content"){var __$t=__$ctx.block;if(__$t==="jsdoc"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return __$ctx.ctx.content}else if(__$t==="default"){var __$t=__$ctx.block;if(__$t==="jsdoc"){var __$r=__$g1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="page"){if(!__$ctx.elem&&__$ctx["__$anflg1"]!==true){__$ctx.__$a=0;var __$r__$51;var __$l0__$52=__$ctx.__$anflg1;__$ctx.__$anflg1=true;var __$r__$53;var __$l1__$54=__$ctx.ctx;__$ctx.ctx={block:"b-page",title:__$ctx.ctx.data.blockName,favicon:"/favicon.ico",head:[{elem:"meta",attrs:{name:"description",content:"TODO"}},{elem:"css",url:"../jscatalogue/_jscatalogue.css",ie:false},{elem:"css",url:"_index.ie.css",ie:"lte IE 9"},{elem:"css",url:"http://fonts.googleapis.com/css?family=Open+Sans:400,600&subset=latin,cyrillic"}],content:[{block:"jsdoc",data:__$ctx.ctx.data},{elem:"js",url:"../jscatalogue/_jscatalogue.js"}]};var __$l2__$55=__$ctx._mode;__$ctx._mode="";__$r__$53=applyc(__$ctx,__$ref);__$ctx.ctx=__$l1__$54;__$ctx._mode=__$l2__$55;__$r__$51=__$r__$53;__$ctx.__$anflg1=__$l0__$52;var __$r=__$r__$51;if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b20(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t===""){if(__$ctx._.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b21(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx._.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b22(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b23(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return __$ref};
     return exports;
  })({});
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMTREE"] = __xjst;
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMTREE", function(provide) { provide(__xjst) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMTREE"] = __xjst);
})(this);