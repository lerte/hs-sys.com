(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{147:function(t,e,r){"use strict";r.r(e);var n={name:"Header",data:function(){return{show:!1,navigations:[{title:"首頁",to:"/"},{title:"關於我們",to:"/about"},{title:"產品系列",to:"/product"},{title:"代理品牌",to:"/brand"},{title:"成功案例",to:"/case"},{title:"HS資訊",to:"/news"},{title:"下載中心",to:"/download"},{title:"聯係我們",to:"/contact"}]}},watch:{$route:{handler:function(){this.show=!1}}},mounted:function(){this.initMode()},methods:{initMode:function(){("dark"===localStorage.getItem("color-theme")||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&document.documentElement.classList.add("dark"),"light"===localStorage.getItem("color-theme")&&document.documentElement.classList.remove("dark")},toggleMode:function(){localStorage.getItem("color-theme")?"light"===localStorage.getItem("color-theme")?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"))}}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"sticky top-0 z-10 shadow-md"},[e("nav",{staticClass:"bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"},[e("div",{staticClass:"flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"},[e("nuxt-link",{staticClass:"flex items-center",attrs:{to:"/"}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r(283),expression:"require('@/assets/images/logo.jpg')"}],staticClass:"h-6 sm:h-9",attrs:{alt:"Logo"}}),t._v(" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r(284),expression:"require('@/assets/images/logo-text.jpg')"}],staticClass:"h-6 sm:h-9",attrs:{alt:"Logo Text"}})]),t._v(" "),e("div",{staticClass:"flex items-center lg:order-2"},[e("button",{staticClass:"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5",attrs:{type:"button"},on:{click:t.toggleMode}},[e("svg",{staticClass:"dark:hidden w-5 h-5",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}})]),t._v(" "),e("svg",{staticClass:"hidden dark:block w-5 h-5",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule":"evenodd","clip-rule":"evenodd"}})])]),t._v(" "),e("button",{staticClass:"inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",attrs:{type:"button"},on:{click:function(e){t.show=!t.show}}},[e("span",{staticClass:"sr-only"},[t._v("Open main menu")]),t._v(" "),e("svg",{staticClass:"w-6 h-6",class:{hidden:t.show},attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})]),t._v(" "),e("svg",{staticClass:"w-6 h-6",class:{hidden:!t.show},attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),e("div",{staticClass:"justify-between items-center w-full lg:flex lg:w-auto lg:order-1",class:{hidden:!t.show}},[e("ul",{staticClass:"flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"},t._l(t.navigations,(function(nav){return e("li",{key:nav.to},[e("nuxt-link",{staticClass:"block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700",attrs:{to:nav.to,"exact-active-class":"block py-2 pr-4 pl-3 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white"}},[t._v("\n              "+t._s(nav.title)+"\n            ")])],1)})),0)])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(147).default})},148:function(t,e,r){"use strict";r.r(e);var n={name:"Footer",data:function(){return{currentYear:(new Date).getFullYear()}}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"p-4 shadow-inner bg-white md:p-5 dark:bg-gray-800"},[e("section",{staticClass:"max-w-screen-xl mx-auto md:flex md:items-center md:justify-between"},[e("span",{staticClass:"flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"},[t._v("\n      版權所有 © 2013-"+t._s(t.currentYear)+" 皇室音響（廣州）有限公司\n    ")]),t._v(" "),e("span",{staticClass:"text-sm text-gray-500 sm:text-center dark:text-gray-400"},[t._v("地址：廣州市花都區花東鎮先科一路8號微觀智庫產業園B棟6F\n      总机：+86-20-8653 8057（6線） 传真：+86-20-3773 3760\n    ")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:r(148).default})},154:function(t,e,r){"use strict";var n=r(1),o=r(220);n.a.use(o.a,{preLoad:1.33,error:"",loading:"/loading-spin.svg",attempt:2,throttleWait:500})},223:function(t,e,r){"use strict";var n=r(18),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dark:bg-grey-900"},[e("Header"),t._v(" "),e("main",{staticClass:"min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-120px)] flex flex-wrap md:flex-nowrap bg-white dark:bg-gray-500"},[e("aside",{staticClass:"w-full m-2 p-2 flex flex-col md:w-1/4 md:my-4 md:ml-4 md:mr-2 md:p-4 text-gray-500 dark:text-gray-400 bg-gray-50 rounded shadow-md dark:bg-gray-800"},[e("Sidebar")],1),t._v(" "),e("article",{staticClass:"w-full m-2 p-2 flex flex-col md:w-3/4 md:my-4 md:ml-2 md:mr-4 md:p-4 text-gray-500 dark:text-gray-400 bg-gray-50 rounded shadow-md dark:bg-gray-800"},[e("Nuxt")],1)]),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:r(147).default,Sidebar:r(336).default,Footer:r(148).default})},224:function(t,e,r){"use strict";var n=r(18),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dark:bg-grey-900"},[e("Header"),t._v(" "),e("Nuxt"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:r(147).default,Footer:r(148).default})},226:function(t,e,r){r(227),t.exports=r(228)},281:function(t,e,r){var content=r(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(126).default)("1992bd8b",content,!0,{sourceMap:!1})},282:function(t,e,r){var n=r(125)((function(i){return i[1]}));n.push([t.i,'/*! tailwindcss v3.2.0 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;}.static{position:static;}.sticky{position:sticky;}.top-0{top:0px;}.z-10{z-index:10;}.col-span-2{grid-column:span 2 / span 2;}.col-span-3{grid-column:span 3 / span 3;}.m-2{margin:0.5rem;}.mx-auto{margin-left:auto;margin-right:auto;}.mx-3{margin-left:0.75rem;margin-right:0.75rem;}.mr-2{margin-right:0.5rem;}.ml-1{margin-left:0.25rem;}.ml-2{margin-left:0.5rem;}.mt-3{margin-top:0.75rem;}.mt-4{margin-top:1rem;}.mb-2{margin-bottom:0.5rem;}.block{display:block;}.inline-block{display:inline-block;}.flex{display:flex;}.inline-flex{display:inline-flex;}.table{display:table;}.grid{display:grid;}.hidden{display:none;}.h-4{height:1rem;}.h-6{height:1.5rem;}.h-5{height:1.25rem;}.h-52{height:13rem;}.min-h-\\[calc\\(100vh-160px\\)\\]{min-height:calc(100vh - 160px);}.w-4{width:1rem;}.w-6{width:1.5rem;}.w-full{width:100%;}.w-5{width:1.25rem;}.w-40{width:10rem;}.max-w-screen-xl{max-width:1280px;}.max-w-7xl{max-width:80rem;}.cursor-pointer{cursor:pointer;}.list-inside{list-style-position:inside;}.list-none{list-style-type:none;}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr));}.grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr));}.grid-cols-7{grid-template-columns:repeat(7, minmax(0, 1fr));}.flex-col{flex-direction:column;}.flex-wrap{flex-wrap:wrap;}.items-center{align-items:center;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.justify-around{justify-content:space-around;}.gap-4{gap:1rem;}.space-x-1 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));}.space-y-2 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse));}.divide-y > :not([hidden]) ~ :not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));}.divide-gray-100 > :not([hidden]) ~ :not([hidden]){--tw-divide-opacity:1;border-color:rgb(243 244 246 / var(--tw-divide-opacity));}.overflow-y-auto{overflow-y:auto;}.rounded-lg{border-radius:0.5rem;}.rounded{border-radius:0.25rem;}.rounded-md{border-radius:0.375rem;}.border{border-width:1px;}.border-b{border-bottom-width:1px;}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity));}.border-gray-100{--tw-border-opacity:1;border-color:rgb(243 244 246 / var(--tw-border-opacity));}.border-\\[\\#474748\\]{--tw-border-opacity:1;border-color:rgb(71 71 72 / var(--tw-border-opacity));}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.bg-primary-700{--tw-bg-opacity:1;background-color:rgb(230 204 57 / var(--tw-bg-opacity));}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity));}.object-contain{-o-object-fit:contain;object-fit:contain;}.p-4{padding:1rem;}.p-2\\.5{padding:0.625rem;}.p-2{padding:0.5rem;}.p-1{padding:0.25rem;}.px-4{padding-left:1rem;padding-right:1rem;}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.px-3{padding-left:0.75rem;padding-right:0.75rem;}.pr-4{padding-right:1rem;}.pl-3{padding-left:0.75rem;}.pb-4{padding-bottom:1rem;}.text-center{text-align:center;}.text-right{text-align:right;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-xs{font-size:0.75rem;line-height:1rem;}.font-medium{font-weight:500;}.font-bold{font-weight:700;}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity));}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity));}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity));}.text-black{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.text-red-600{--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity));}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));}.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity));}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgb(17 24 39 / var(--tw-text-opacity));}.hover\\:text-\\[\\#f26427\\]:hover{--tw-text-opacity:1;color:rgb(242 100 39 / var(--tw-text-opacity));}.hover\\:text-orange-500:hover{--tw-text-opacity:1;color:rgb(249 115 22 / var(--tw-text-opacity));}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px;}.focus\\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}.focus\\:ring-gray-200:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(229 231 235 / var(--tw-ring-opacity));}.dark .dark\\:block{display:block;}.dark .dark\\:hidden{display:none;}.dark .dark\\:border-gray-700{--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity));}.dark .dark\\:bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));}.dark .dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity));}.dark .dark\\:bg-gray-500{--tw-bg-opacity:1;background-color:rgb(107 114 128 / var(--tw-bg-opacity));}.dark .dark\\:text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity));}.dark .dark\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.dark .dark\\:text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity));}.dark .dark\\:text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219 / var(--tw-text-opacity));}.dark .dark\\:hover\\:bg-gray-600:hover{--tw-bg-opacity:1;background-color:rgb(75 85 99 / var(--tw-bg-opacity));}.dark .dark\\:hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));}.dark .dark\\:hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.dark .dark\\:focus\\:ring-gray-700:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(55 65 81 / var(--tw-ring-opacity));}.dark .dark\\:focus\\:ring-gray-600:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(75 85 99 / var(--tw-ring-opacity));}@media (min-width: 640px){.sm\\:mt-0{margin-top:0px;}.sm\\:h-9{height:2.25rem;}.sm\\:text-center{text-align:center;}}@media (min-width: 768px){.md\\:my-4{margin-top:1rem;margin-bottom:1rem;}.md\\:ml-2{margin-left:0.5rem;}.md\\:ml-4{margin-left:1rem;}.md\\:mr-2{margin-right:0.5rem;}.md\\:mr-4{margin-right:1rem;}.md\\:flex{display:flex;}.md\\:min-h-\\[calc\\(100vh-120px\\)\\]{min-height:calc(100vh - 120px);}.md\\:w-1\\/4{width:25%;}.md\\:w-3\\/4{width:75%;}.md\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr));}.md\\:flex-nowrap{flex-wrap:nowrap;}.md\\:items-center{align-items:center;}.md\\:justify-between{justify-content:space-between;}.md\\:space-x-3 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.75rem * var(--tw-space-x-reverse));margin-left:calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));}.md\\:bg-transparent{background-color:transparent;}.md\\:p-5{padding:1.25rem;}.md\\:p-0{padding:0px;}.md\\:p-4{padding:1rem;}.md\\:text-primary-700{--tw-text-opacity:1;color:rgb(230 204 57 / var(--tw-text-opacity));}}@media (min-width: 1024px){.lg\\:order-2{order:2;}.lg\\:order-1{order:1;}.lg\\:mt-0{margin-top:0px;}.lg\\:flex{display:flex;}.lg\\:hidden{display:none;}.lg\\:w-auto{width:auto;}.lg\\:flex-row{flex-direction:row;}.lg\\:space-x-8 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(2rem * var(--tw-space-x-reverse));margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)));}.lg\\:border-0{border-width:0px;}.lg\\:p-0{padding:0px;}.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem;}.lg\\:hover\\:bg-transparent:hover{background-color:transparent;}.lg\\:hover\\:text-primary-700:hover{--tw-text-opacity:1;color:rgb(230 204 57 / var(--tw-text-opacity));}.dark .lg\\:dark\\:hover\\:bg-transparent:hover{background-color:transparent;}.dark .lg\\:dark\\:hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}}',""]),n.locals={},t.exports=n},283:function(t,e,r){t.exports=r.p+"img/logo.3d1e8da.jpg"},284:function(t,e,r){t.exports=r.p+"img/logo-text.d4e9eac.jpg"},336:function(t,e,r){"use strict";r.r(e);var n={name:"Sidebar",data:function(){return{categories:[{title:"專業音箱",children:[{title:"TCS系列",to:"/product/102"},{title:"PK系列",to:"/product/84"},{title:"KP系列",to:"/product/97"},{title:"AX系列",to:"/product/96"},{title:"CF系列",to:"/product/85"},{title:"C系列",to:"/product/86"},{title:"S系列",to:"/product/103"},{title:"中小型演出LA系列",to:"/product/81"}]},{title:"智能影K音箱",children:[{title:"影K系列",to:"/product/94"},{title:"會議系列",to:"/product/95"}]},{title:"專業功放",children:[{title:"DK系列",to:"/product/104"},{title:"GLC系列",to:"/product/98"},{title:"GLA系列",to:"/product/91"},{title:"K系列",to:"/product/99"},{title:"FP系列",to:"/product/89"}]},{title:"周邊系列",children:[{title:"音频处理器",to:"/product/93"},{title:"無線麥克風",to:"/product/92"},{title:"电源时序器",to:"/product/100"},{title:"调音台",to:"/product/101"}]}]}}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"},[e("ul",{staticClass:"space-y-2"},[t._l(t.categories,(function(t){return[e("Dropdowns",{key:t.title,attrs:{menus:t}})]}))],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Dropdowns:r(337).default})},337:function(t,e,r){"use strict";r.r(e);var n={name:"Dropdowns",props:{menus:{type:Object,default:function(){}}},data:function(){return{show:!1}}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("li",[e("button",{staticClass:"w-full text-black bg-grey-700 hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-grey-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-between dark:text-white dark:bg-grey-600 dark:hover:bg-grey-700 dark:focus:ring-grey-800",attrs:{type:"button"},on:{click:function(e){t.show=!t.show}}},[t._v("\n    "+t._s(t.menus.title)+"\n    "),e("svg",{staticClass:"ml-2 w-4 h-4",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])]),t._v(" "),e("div",{staticClass:"bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700",class:t.show?"block":"hidden"},[e("ul",{staticClass:"py-1 text-sm text-gray-700 dark:text-gray-200"},t._l(t.menus.children,(function(menu){return e("li",{key:menu.title},[e("nuxt-link",{staticClass:"block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",attrs:{to:menu.to}},[t._v(t._s(menu.title)+"\n        ")])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}},[[226,18,3,19]]]);