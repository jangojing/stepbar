/*! stepbar - v2.0.0 - 2013-09-13 1:34:22 PM
* Copyright (c) 2013 明河; Licensed  */
KISSY.add("kg/stepbar/2.0.0/index",function(a,b,c){function d(a,b){var c=this;d.superclass.constructor.call(c,b),c.set("target",a)}var e="",f=b.all;return d.event={RENDER:"render"},d.color={ORANGE:"orange",BLUE:"blue",GREEN:"green",RED:"red",PINK:"pink",GRAY:"gray"},d.cls={STEPS:"step-bar",ITEM:"step-bar-item",CURRENT:"current",DONE:"done",FIRST:"first",LAST:"last"},d.ZINDEX=500,d.ARROW_TPL='<div class="trigon"><span class="bor"></span><span class="blo"></span></div>',a.extend(d,c,{render:function(){var a=this,b=d.cls,c=a.get("target");if(!c.length)return!1;var e=c.children("li");if(!e.length)return!1;a.set("$steps",e),c.addClass(b.STEPS),a._setItemStyle(),a._setWidth(),a._setColor();var f=Number(c.attr("data-act"));return a._setAct(f),a._addTrigon(),a.fire("render",{$steps:e}),a},allowColor:function(){var b=[];return 0==b.length&&a.each(d.color,function(a){b.push(a)}),b},isAllowColor:function(b){var c=this,d=c.allowColor(),e=!1;return a.each(d,function(a){return a==b?(e=!0,!0):void 0}),e},_setItemStyle:function(){var a=this,b=a.get("$steps"),c=d.cls,e=d.ZINDEX;return b.each(function(a){a.addClass(c.ITEM).css("zIndex",e),e--}),a},_setWidth:function(a){var b=this,c=a||b.get("width"),d=b.get("target"),f=b.get("$steps"),g=f.length;if(c==e){if(0==g)return!1;var h=d.width(),i=h%g;c=Number((h-i)/g)}return f.width(c),i&&f.item(g-1).width(c+i),c},_setColor:function(a){var b=this,c=a||b.get("color"),d=b.get("target"),f=b.allowColor(),g=b.isAllowColor(c);return c!=e&&g?(d.removeClass(f.join(" ")).addClass(c),c):!1},_setAct:function(a){var b=this,c=a||b.get("act"),f=d.cls,g=b.get("$steps"),h=g.length;return h?c==e||c>h||1>c?(g.removeClass(f.DONE+" "+f.CURRENT),0):(g.each(function(a,b){0==b&&a.addClass(f.FIRST),b==h-1&&a.addClass(f.LAST),a.removeClass(f.DONE+" "+f.CURRENT)}),c--,g.item(c).addClass(f.CURRENT),g.each(function(a,b){return b>=c?!1:(a.addClass(f.DONE),void 0)}),c):!1},_addTrigon:function(){var a=this,b=a.get("$steps"),c=b.length,e=d.ARROW_TPL;return b.each(function(a,b){c-1>b&&a.append(e)}),a}},{ATTRS:{target:{value:e,getter:function(a){return f(a)}},$steps:{value:e},width:{value:e,setter:function(a){var b=this;return b._setWidth(a),a}},color:{value:d.color.ORANGE,setter:function(a){var b=this;return b._setColor(a),a}},act:{value:0,setter:function(a){var b=this;return b._setAct(a),a}}}}),d},{requires:["node","base"]});