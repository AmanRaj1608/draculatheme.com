(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var o=i(n("q1tI")),u=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,i=void 0!==r&&r,o=t.hasQuery;return n||i&&(void 0!==o&&o)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(u.AmpStateContext))}},"0iUn":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),i=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};i(e,"__esModule",{value:!0});var u=o(n("q1tI")),a=o(n("Xuae")),c=n("lwAK"),s=n("FYa8"),f=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[u.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function h(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===u.default.Fragment?t.concat(u.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var p=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=u.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(h,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,i={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?u=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?u=!1:e.add(o.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var f=p[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?u=!1:n.add(f);else{var l=o.props[f],h=i[f]||new r;h.has(l)?u=!1:(h.add(l),i[f]=h)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return u.default.cloneElement(t,{key:n})}))}var v=a.default();function m(t){var e=t.children;return u.default.createElement(c.AmpStateContext.Consumer,null,(function(t){return u.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return u.default.createElement(v,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:f.isInAmpMode(t)},e)}))}))}m.rewind=v.rewind,e.default=m},"8iia":function(t,e,n){var r=n("QMMT"),i=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},B1Ei:function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("0iUn"),u=n("sLSF"),a=n("MI3g"),c=n("a7VT"),s=n("Tit0"),f={"dracula.svg":{width:168,height:176},"hat-magic.png":{width:237,height:196},"glass.png":{width:174,height:204},"skull.png":{width:198,height:182},"broom.png":{width:186,height:202},"ghost.png":{width:198,height:181},"cauldron.png":{width:198,height:184},"spider.png":{width:171,height:185},"candies.png":{width:198,height:184},"candle.png":{width:198,height:184},"axe.png":{width:198,height:174},"moon.png":{width:168,height:168},"pumpkin.png":{width:198,height:182},"eye.png":{width:168,height:170},"coffin.png":{width:200,height:197},"tombstone.png":{width:238,height:190},"bat.png":{width:222,height:158},"frankenstein.png":{width:175,height:150},"cone.png":{width:168,height:189}},l=i.a.createElement,h=function(t){function e(){return Object(o.a)(this,e),Object(a.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(u.a)(e,[{key:"renderDescription",value:function(){return this.props.query.repo?l("h2",{className:"subtitle"},"A dark theme for ",this.props.query.title," ",l("a",{href:"/"},"and ",this.props.query.total,"+ apps")):"About Dracula"===this.props.query.title?l("h2",{className:"subtitle"},"A dark theme for ",this.props.query.total,"+ apps"):l("h2",{className:"subtitle"},"A dark theme for ",l("span",{className:"rotating"}))}},{key:"renderGithubButtons",value:function(){if("About Dracula"!==this.props.query.title)return l("p",{className:"gh-btns"},l("iframe",{src:"https://ghbtns.com/github-btn.html?user=dracula&repo=dracula-theme&type=watch&count=true&size=large",title:"GitHub Stars",allowtransparency:"true",frameBorder:"0",scrolling:"0",width:"152",height:"30"}),l("iframe",{src:"https://ghbtns.com/github-btn.html?user=dracula&repo=dracula-theme&type=fork&count=true&size=large",title:"GitHub Forks",allowtransparency:"true",frameBorder:"0",scrolling:"0",width:"156",height:"30"}))}},{key:"render",value:function(){return l("div",null,l("nav",null,l("ul",null,l("li",null,l("a",{href:"/about"},"About")))),l("header",{className:"header row center-xs"},l("div",{className:"col-xs-12"},l("a",{href:"/"},l("img",{className:"icon",src:"/static/img/icons/".concat(this.props.query.icon),width:f[this.props.query.icon].width,height:f[this.props.query.icon].height,alt:this.props.query.title}),l("h1",{className:"title"},"Dracula")),this.renderDescription(),this.renderGithubButtons())))}}]),e}(r.Component),p=i.a.createElement,d=function(t){function e(){return Object(o.a)(this,e),Object(a.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return p("p",{className:"credits"},"Made with ",p("span",{className:"love"},"\u2665")," by ",p("a",{className:"green",href:"https://zenorocha.com",target:"blank"},"Zeno Rocha"),p("br",null),"under ",p("a",{className:"orange",href:"http://zenorocha.mit-license.org/",target:"blank"},"MIT license"))}}]),e}(r.Component),v=i.a.createElement;e.a=function(t){var e=t.children;return v("div",{className:e.props.query.color},v("div",{className:"container-fluid"},v(h,{query:e.props.query}),v("div",null,e),v(d,null)))}},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),i=n("n3ko");t.exports=n("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),i=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},MI3g:function(t,e,n){"use strict";var r=n("XVgq"),i=n.n(r),o=n("Z7t5"),u=n.n(o);function a(t){return(a="function"===typeof u.a&&"symbol"===typeof i.a?function(t){return typeof t}:function(t){return t&&"function"===typeof u.a&&t.constructor===u.a&&t!==u.a.prototype?"symbol":typeof t})(t)}function c(t){return(c="function"===typeof u.a&&"symbol"===a(i.a)?function(t){return a(t)}:function(t){return t&&"function"===typeof u.a&&t.constructor===u.a&&t!==u.a.prototype?"symbol":a(t)})(t)}function s(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",(function(){return s}))},PQJW:function(t,e,n){var r=n("d04V"),i=n("yLu3");t.exports=function(t){if(i(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},TbGu:function(t,e,n){var r=n("fGSI"),i=n("PQJW"),o=n("2PDY");t.exports=function(t){return r(t)||i(t)||o()}},Tit0:function(t,e,n){"use strict";var r=n("SqZg"),i=n.n(r),o=n("TRZx"),u=n.n(o);function a(t,e){return(a=u.a||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=i()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}n.d(e,"a",(function(){return c}))},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),i=n("Y7ZC"),o=n("JB68"),u=n("sNwI"),a=n("NwJ3"),c=n("tEej"),s=n("IP1Z"),f=n("fNZA");i(i.S+i.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,l,h=o(t),p="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,m=void 0!==v,g=0,y=f(h);if(m&&(v=r(v,d>2?arguments[2]:void 0,2)),void 0==y||p==Array&&a(y))for(n=new p(e=c(h.length));e>g;g++)s(n,g,m?v(h[g],g):h[g]);else for(l=y.call(h),n=new p;!(i=l.next()).done;g++)s(n,g,m?u(l,v,[i.value,g],!0):i.value);return n.length=g,n}})},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,i=n("oVml"),o=n("XJU/"),u=n("2GTP"),a=n("EXMj"),c=n("oioR"),s=n("MPFp"),f=n("UO39"),l=n("TJWN"),h=n("jmDH"),p=n("6/1s").fastKey,d=n("n3ko"),v=h?"_s":"size",m=function(t,e){var n,r=p(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,s){var f=t((function(t,r){a(t,f,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=r&&c(r,n,t[s],t)}));return o(f.prototype,{clear:function(){for(var t=d(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=d(this,e),r=m(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[v]--}return!!r},forEach:function(t){d(this,e);for(var n,r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(d(this,e),t)}}),h&&r(f.prototype,"size",{get:function(){return d(this,e)[v]}}),f},def:function(t,e,n){var r,i,o=m(t,e);return o?o.v=n:(t._l=o={i:i=p(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[v]++,"F"!==i&&(t._i[i]=o)),t},getEntry:m,setStrong:function(t,e,n){s(t,e,(function(t,n){this._t=d(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?f(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,f(1))}),n?"entries":"values",!n,!0),l(e)}}},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),i=n("ZDA2"),o=n("/+P4"),u=n("K47E"),a=n("WaGi"),c=n("N9n2"),s=n("TbGu"),f=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var l=n("q1tI"),h=!1;e.default=function(){var t,e=new f;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(s){function f(t){var a;return r(this,f),a=i(this,o(f).call(this,t)),h&&(e.add(u(a)),n(u(a))),a}return c(f,s),a(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component)}},a7VT:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("Bhuq"),i=n.n(r),o=n("TRZx"),u=n.n(o);function a(t){return(a=u.a?i.a:function(t){return t.__proto__||i()(t)})(t)}},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var o=i(n("q1tI"));e.AmpStateContext=o.createContext({})},sLSF:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hfKm"),i=n.n(r);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(t,r.key,r)}}function u(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")}}]);