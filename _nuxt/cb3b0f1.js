(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{340:function(e,t,r){var content=r(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(126).default)("0ffc307c",content,!0,{sourceMap:!1})},349:function(e,t,r){"use strict";r(340)},350:function(e,t,r){var n=r(125)((function(i){return i[1]}));n.push([e.i,".swiper{width:100%;height:100%}.swiper-slide{text-align:center;font-size:18px;display:flex;justify-content:center;align-items:center}.swiper-button-next,.swiper-button-prev{right:10px;padding:30px;color:#000!important;fill:#000!important;stroke:#000!important}",""]),n.locals={},e.exports=n},353:function(e,t,r){"use strict";r.r(t);r(47),r(41),r(46),r(23),r(69),r(42),r(70);var n=r(27),o=r(8),c=(r(58),r(351)),l=r.n(c);r(352);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"Swiper",props:["slides","options"],mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:new l.a(e.$refs.swiper,w({},e.options));case 3:case"end":return t.stop()}}),t)})))()}},O=(r(349),r(18)),component=Object(O.a)(d,(function(){var e=this,t=e._self._c;return t("client-only",[t("div",{ref:"swiper",staticClass:"swiper bg-white dark:bg-gray-500"},[t("div",{staticClass:"swiper-wrapper"},e._l(e.slides,(function(e){return t("div",{key:e,staticClass:"swiper-slide"},[t("img",{attrs:{src:e}})])})),0)])])}),[],!1,null,null,null);t.default=component.exports}}]);