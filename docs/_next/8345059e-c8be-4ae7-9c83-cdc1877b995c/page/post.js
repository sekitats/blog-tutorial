module.exports=__NEXT_REGISTER_PAGE("/post",function(){return{page:webpackJsonp([0],{100:function(e,t,r){r(19),r(101),e.exports=r(0).Array.from},101:function(e,t,r){"use strict";var n=r(11),o=r(2),a=r(23),i=r(73),u=r(74),c=r(35),l=r(102),s=r(52);o(o.S+o.F*!r(77)(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,o,f,p=a(e),d="function"==typeof this?this:Array,y=arguments.length,b=y>1?arguments[1]:void 0,h=void 0!==b,m=0,v=s(p);if(h&&(b=n(b,y>2?arguments[2]:void 0,2)),void 0==v||d==Array&&u(v))for(r=new d(t=c(p.length));t>m;m++)l(r,m,h?b(p[m],m):p[m]);else for(f=v.call(p),r=new d;!(o=f.next()).done;m++)l(r,m,h?i(f,b,[o.value,m],!0):o.value);return r.length=m,r}})},102:function(e,t,r){"use strict";var n=r(8),o=r(26);e.exports=function(e,t,r){t in e?n.f(e,t,o(0,r)):e[t]=r}},103:function(e,t,r){e.exports=r(104)},104:function(e,t,r){r(27),r(19),e.exports=r(105)},105:function(e,t,r){var n=r(36),o=r(3)("iterator"),a=r(24);e.exports=r(0).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(n(t))}},106:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},107:function(e,t,r){"use strict";var n=r(16),o=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var o,y=new f.default;function b(n){o=e((0,s.default)(y)),h.canUseDOM?t.call(n,o):r&&(o=r(o))}var h=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,u.default)(t,[{key:"componentWillMount",value:function(){y.add(this),b(this)}},{key:"componentDidUpdate",value:function(){b(this)}},{key:"componentWillUnmount",value:function(){y.delete(this),b(this)}},{key:"render",value:function(){return p.default.createElement(n,null,this.props.children)}}],[{key:"peek",value:function(){return o}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,y.clear(),e}}]),t}(p.Component);return Object.defineProperty(h,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"SideEffect(".concat((0,d.getDisplayName)(n),")")}),Object.defineProperty(h,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:n.contextTypes}),Object.defineProperty(h,"canUseDOM",{configurable:!0,enumerable:!0,writable:!0,value:"undefined"!=typeof window}),h}};var a=o(r(13)),i=o(r(6)),u=o(r(7)),c=o(r(14)),l=o(r(15)),s=o(r(46)),f=o(r(28)),p=n(r(5)),d=r(17)},130:function(e,t){e.exports={title:"第一話 三重県",date:20180721,category:"自転車",bodyContent:"# 伊勢125社巡りの旅",bodyHtml:"<h1>伊勢125社巡りの旅</h1>\n",preview:"伊勢125社巡りの旅",dir:"json",base:"sample1.json",ext:".json",sourceBase:"sample1.md",sourceExt:".md"}},131:function(e,t){e.exports={title:"第二話 日本一周の旅",date:20180722,category:"自転車",bodyContent:"人と比べて生きては幸せになれない。",bodyHtml:"<p>人と比べて生きては幸せになれない。</p>\n",preview:"人と比べて生きては幸せになれない。",dir:"json",base:"sample2.json",ext:".json",sourceBase:"sample2.md",sourceExt:".md"}},132:function(e,t){e.exports={title:"第三話 台湾一周の旅",date:20180723,category:"自転車",bodyContent:"発信することが大事だって何度も自分に言い聞かせてきた\b。\n今日俺は何かを発信することができたのだろうかと...",bodyHtml:"<p>発信することが大事だって何度も自分に言い聞かせてきた\b。\n今日俺は何かを発信することができたのだろうかと...</p>\n",preview:"発信することが大事だって何度も自分に言い聞かせてきた\b。\n今日俺は何かを発信することができたのだろうかと...",dir:"json",base:"sample3.json",ext:".json",sourceBase:"sample3.md",sourceExt:".md"}},133:function(e,t){e.exports={title:"第四話 世界一周の旅",date:20180724,category:"自転車",script:"hoge.js",bodyContent:"人と同じはイコール無価値だ",bodyHtml:"<p>人と同じはイコール無価値だ</p>\n",preview:"人と同じはイコール無価値だ",dir:"json",base:"sample4.json",ext:".json",sourceBase:"sample4.md",sourceExt:".md"}},234:function(e,t,r){e.exports=r(235)},235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"default",function(){return f});var n=r(5),o=r.n(n),a=r(83),i=r.n(a),u=r(236);r.n(u);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props.post;return o.a.createElement("main",null,o.a.createElement(i.a,{href:"/about",prefetch:!0},o.a.createElement("a",null,"About"))," |",o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.bodyHtml}}),o.a.createElement("script",{src:"/static/".concat(e.script)}))}}])&&l(r.prototype,a),u&&l(r,u),t}();f.getInitialProps=function(e){var t=e.query;return{post:r(237)("./".concat(t.path))}}},236:function(e,t,r){e.exports=r(96)},237:function(e,t,r){var n={"./sample1":130,"./sample1.json":130,"./sample2":131,"./sample2.json":131,"./sample3":132,"./sample3.json":132,"./sample4":133,"./sample4.json":133,"./summary":55,"./summary.json":55};function o(e){return r(a(e))}function a(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=237},41:function(e,t,r){"use strict";var n=r(42),o=r(90),a="function"==typeof Symbol&&"symbol"==typeof Symbol(),i=Object.prototype.toString,u=Object.defineProperty&&function(){var e={};try{for(var t in Object.defineProperty(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(e){return!1}}(),c=function(e,t,r,n){var o;t in e&&("function"!=typeof(o=n)||"[object Function]"!==i.call(o)||!n())||(u?Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r)},l=function(e,t){var r=arguments.length>2?arguments[2]:{},i=n(t);a&&(i=i.concat(Object.getOwnPropertySymbols(t))),o(i,function(n){c(e,n,t[n],r[n])})};l.supportsDescriptors=!!u,e.exports=l},42:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,a=Array.prototype.slice,i=r(89),u=Object.prototype.propertyIsEnumerable,c=!u.call({toString:null},"toString"),l=u.call(function(){},"prototype"),s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],f=function(e){var t=e.constructor;return t&&t.prototype===e},p={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},d=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{f(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),y=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===o.call(e),a=i(e),u=t&&"[object String]"===o.call(e),p=[];if(!t&&!r&&!a)throw new TypeError("Object.keys called on a non-object");var y=l&&r;if(u&&e.length>0&&!n.call(e,0))for(var b=0;b<e.length;++b)p.push(String(b));if(a&&e.length>0)for(var h=0;h<e.length;++h)p.push(String(h));else for(var m in e)y&&"prototype"===m||!n.call(e,m)||p.push(String(m));if(c)for(var v=function(e){if("undefined"==typeof window||!d)return f(e);try{return f(e)}catch(e){return!1}}(e),j=0;j<s.length;++j)v&&"constructor"===s[j]||!n.call(e,s[j])||p.push(s[j]);return p};y.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var e=Object.keys;Object.keys=function(t){return i(t)?e(a.call(t)):e(t)}}}else Object.keys=y;return Object.keys||y},e.exports=y},43:function(e,t,r){"use strict";var n=r(42),o=r(44),a=r(92)(),i=Object,u=o.call(Function.call,Array.prototype.push),c=o.call(Function.call,Object.prototype.propertyIsEnumerable),l=a?Object.getOwnPropertySymbols:null;e.exports=function(e,t){if(void 0===(r=e)||null===r)throw new TypeError("target must be an object");var r,o,s,f,p,d,y,b,h=i(e);for(o=1;o<arguments.length;++o){s=i(arguments[o]),p=n(s);var m=a&&(Object.getOwnPropertySymbols||l);if(m)for(d=m(s),f=0;f<d.length;++f)b=d[f],c(s,b)&&u(p,b);for(f=0;f<p.length;++f)y=s[b=p[f]],c(s,b)&&(h[b]=y)}return h}},44:function(e,t,r){"use strict";var n=r(91);e.exports=Function.prototype.bind||n},45:function(e,t,r){"use strict";var n=r(43);e.exports=function(){return Object.assign?function(){if(!Object.assign)return!1;for(var e="abcdefghijklmnopqrst",t=e.split(""),r={},n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r),a="";for(var i in o)a+=i;return e!==a}()?n:function(){if(!Object.assign||!Object.preventExtensions)return!1;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return!1}()?n:Object.assign:n}},46:function(e,t,r){var n=r(97),o=r(98),a=r(106);e.exports=function(e){return n(e)||o(e)||a()}},55:function(e,t){e.exports={fileMap:{"json/sample1.json":{title:"第一話 三重県",date:20180721,category:"自転車",preview:"伊勢125社巡りの旅",dir:"json",base:"sample1.json",ext:".json",sourceBase:"sample1.md",sourceExt:".md"},"json/sample3.json":{title:"第三話 台湾一周の旅",date:20180723,category:"自転車",preview:"発信することが大事だって何度も自分に言い聞かせてきた\b。\n今日俺は何かを発信することができたのだろうかと...",dir:"json",base:"sample3.json",ext:".json",sourceBase:"sample3.md",sourceExt:".md"},"json/sample4.json":{title:"第四話 世界一周の旅",date:20180724,category:"自転車",script:"hoge.js",preview:"人と同じはイコール無価値だ",dir:"json",base:"sample4.json",ext:".json",sourceBase:"sample4.md",sourceExt:".md"},"json/sample2.json":{title:"第二話 日本一周の旅",date:20180722,category:"自転車",preview:"人と比べて生きては幸せになれない。",dir:"json",base:"sample2.json",ext:".json",sourceBase:"sample2.md",sourceExt:".md"}},sourceFileArray:["content/sample1.md","content/sample2.md","content/sample3.md","content/sample4.md"]}},83:function(e,t,r){e.exports=r(84)},84:function(e,t,r){"use strict";var n=r(16),o=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(40)),i=o(r(85)),u=o(r(13)),c=o(r(6)),l=o(r(7)),s=o(r(14)),f=o(r(15)),p=o(r(54)),d=r(80),y=n(r(5)),b=o(r(25)),h=o(r(87)),m=n(r(39)),v=r(17),j=function(e){function t(e){var r,n;(0,c.default)(this,t);for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return(n=(0,s.default)(this,(r=t.__proto__||(0,u.default)(t)).call.apply(r,[this,e].concat(a)))).linkClicked=n.linkClicked.bind((0,p.default)(n)),n.formatUrls(e),n}return(0,f.default)(t,e),(0,l.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.formatUrls(e)}},{key:"linkClicked",value:function(e){var t=this;if("A"!==e.currentTarget.nodeName||!(e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=this.props.shallow,n=this.href,o=this.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(n)){var a=window.location.pathname;n=(0,d.resolve)(a,n),o=o?(0,d.resolve)(a,o):n,e.preventDefault();var i=this.props.scroll;null==i&&(i=o.indexOf("#")<0);var u=this.props.replace?"replace":"push";m.default[u](n,o,{shallow:r}).then(function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){t.props.onError&&t.props.onError(e)})}}}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=(0,d.resolve)(e,this.href);m.default.prefetch(t)}}},{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,i.default)(this.props.href)!==(0,i.default)(e.href)&&this.prefetch()}},{key:"formatUrls",value:function(e){this.href=e.href&&"object"===(0,a.default)(e.href)?(0,d.format)(e.href):e.href,this.as=e.as&&"object"===(0,a.default)(e.as)?(0,d.format)(e.as):e.as}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.href,n=this.as;"string"==typeof t&&(t=y.default.createElement("a",null,t));var o=y.Children.only(t),a={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=n||r),a.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,m._rewriteUrlForNextExport)(a.href)),y.default.cloneElement(o,a)}}]),t}(y.Component);t.default=j,Object.defineProperty(j,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:(0,h.default)({href:b.default.oneOfType([b.default.string,b.default.object]).isRequired,as:b.default.oneOfType([b.default.string,b.default.object]),prefetch:b.default.bool,replace:b.default.bool,shallow:b.default.bool,passHref:b.default.bool,scroll:b.default.bool,children:b.default.oneOfType([b.default.element,function(e,t){return"string"==typeof e[t]&&g("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired})});var g=(0,v.execOnce)(v.warn)},85:function(e,t,r){e.exports=r(86)},86:function(e,t,r){var n=r(0),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},87:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(0,a.default)(e))throw new TypeError("given propTypes must be an object");if((0,o.default)(e,c)&&(t=e[c],!t||t[c]!==l))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");var t;return(0,n.default)({},e,u({},c,(r=function(){return function(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,o.default)(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}}(),(0,n.default)(r,u({},c,l)))));var r};var n=i(r(88)),o=i(r(94)),a=i(r(95));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c="prop-types-exact: ​",l={};e.exports=t.default},88:function(e,t,r){"use strict";var n=r(41),o=r(43),a=r(45),i=r(93),u=a();n(u,{getPolyfill:a,implementation:o,shim:i}),e.exports=u},89:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function(e){var t=n.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),r}},90:function(e,t){var r=Object.prototype.hasOwnProperty,n=Object.prototype.toString;e.exports=function(e,t,o){if("[object Function]"!==n.call(t))throw new TypeError("iterator must be a function");var a=e.length;if(a===+a)for(var i=0;i<a;i++)t.call(o,e[i],i,e);else for(var u in e)r.call(e,u)&&t.call(o,e[u],u,e)}},91:function(e,t,r){"use strict";var n=Array.prototype.slice,o=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==o.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var r,a=n.call(arguments,1),i=Math.max(0,t.length-a.length),u=[],c=0;c<i;c++)u.push("$"+c);if(r=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof r){var o=t.apply(this,a.concat(n.call(arguments)));return Object(o)===o?o:this}return t.apply(e,a.concat(n.call(arguments)))}),t.prototype){var l=function(){};l.prototype=t.prototype,r.prototype=new l,l.prototype=null}return r}},92:function(e,t,r){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},93:function(e,t,r){"use strict";var n=r(41),o=r(45);e.exports=function(){var e=o();return n(Object,{assign:e},{assign:function(){return Object.assign!==e}}),e}},94:function(e,t,r){"use strict";var n=r(44);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},95:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)},e.exports=t.default},96:function(e,t,r){"use strict";var n=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=b,t.default=void 0;var o=n(r(28)),a=n(r(46)),i=n(r(13)),u=n(r(6)),c=n(r(7)),l=n(r(14)),s=n(r(15)),f=n(r(5)),p=n(r(25)),d=n(r(107)),y=function(e){function t(){return(0,u.default)(this,t),(0,l.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return null}}]),t}(f.default.Component);function b(){return[f.default.createElement("meta",{charSet:"utf-8",className:"next-head"})]}Object.defineProperty(y,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{headManager:p.default.object}});var h=["name","httpEquiv","charSet","itemProp","property"],m=["article:tag"];var v=(0,d.default)(function(e){var t,r,n,i,u;return(t=e.map(function(e){return e.props.children}).map(function(e){return f.default.Children.toArray(e)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return f.default.Fragment&&t.type===f.default.Fragment?e.concat(f.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse()).concat.apply(t,(0,a.default)(b())).filter(function(e){return!!e}).filter((r=new o.default,n=new o.default,i=new o.default,u={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(r.has(e.key))return!1;r.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var t=0,a=h.length;t<a;t++){var c=h[t];if(e.props.hasOwnProperty(c))if("charSet"===c){if(i.has(c))return!1;i.add(c)}else{var l=e.props[c],s=u[c]||new o.default;if(s.has(l)&&-1===m.indexOf(l))return!1;s.add(l),u[c]=s}}}return!0})).reverse().map(function(e){var t=(e.props&&e.props.className?e.props.className+" ":"")+"next-head";return f.default.cloneElement(e,{className:t})})},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(y);t.default=v},97:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},98:function(e,t,r){var n=r(99),o=r(103);e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return n(e)}},99:function(e,t,r){e.exports=r(100)}},[234]).default}});