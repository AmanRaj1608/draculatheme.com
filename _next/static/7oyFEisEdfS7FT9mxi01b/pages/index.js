(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3niX":function(e,s,a){"use strict";s.__esModule=!0,s.flush=function(){var e=c.cssRules();return c.flush(),e},s.default=void 0;var t,i=a("q1tI");var c=new(((t=a("SevZ"))&&t.__esModule?t:{default:t}).default),l=function(e){var s,a;function t(s){var a;return(a=e.call(this,s)||this).prevProps={},a}a=e,(s=t).prototype=Object.create(a.prototype),s.prototype.constructor=s,s.__proto__=a,t.dynamic=function(e){return e.map((function(e){var s=e[0],a=e[1];return c.computeId(s,a)})).join(" ")};var i=t.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){c.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&c.remove(this.prevProps),c.add(this.props),this.prevProps=this.props),null},t}(i.Component);s.default=l},"9kyW":function(e,s,a){"use strict";e.exports=function(e){for(var s=5381,a=e.length;a;)s=33*s^e.charCodeAt(--a);return s>>>0}},B1Ei:function(e,s,a){"use strict";var t=a("q1tI"),i=a.n(t),c=a("0iUn"),l=a("sLSF"),n=a("MI3g"),p=a("a7VT"),r=a("Tit0"),o={"dracula.svg":{width:168,height:176},"hat-magic.png":{width:237,height:196},"glass.png":{width:174,height:204},"skull.png":{width:198,height:182},"broom.png":{width:186,height:202},"ghost.png":{width:198,height:181},"cauldron.png":{width:198,height:184},"spider.png":{width:171,height:185},"candies.png":{width:198,height:184},"candle.png":{width:198,height:184},"axe.png":{width:198,height:174},"moon.png":{width:168,height:168},"pumpkin.png":{width:198,height:182},"eye.png":{width:168,height:170},"coffin.png":{width:200,height:197},"tombstone.png":{width:238,height:190},"bat.png":{width:222,height:158},"frankenstein.png":{width:175,height:150},"cone.png":{width:168,height:189}},m=i.a.createElement,h=function(e){function s(){return Object(c.a)(this,s),Object(n.a)(this,Object(p.a)(s).apply(this,arguments))}return Object(r.a)(s,e),Object(l.a)(s,[{key:"renderDescription",value:function(){return this.props.query.repo?m("h2",{className:"subtitle"},"A dark theme for ",this.props.query.title," ",m("a",{href:"/"},"and ",this.props.query.total,"+ apps")):m("h2",{className:"subtitle"},"A dark theme for ",m("span",{className:"rotating"}))}},{key:"render",value:function(){return m("header",{className:"header row center-xs"},m("div",{className:"col-xs-12"},m("a",{href:"/"},m("img",{className:"icon",src:"/static/img/icons/".concat(this.props.query.icon),width:o[this.props.query.icon].width,height:o[this.props.query.icon].height,alt:this.props.query.title}),m("h1",{className:"title"},"Dracula")),this.renderDescription(),m("p",{className:"gh-btns"},m("iframe",{src:"https://ghbtns.com/github-btn.html?user=dracula&repo=dracula-theme&type=watch&count=true&size=large",title:"GitHub Stars",allowtransparency:"true",frameBorder:"0",scrolling:"0",width:"152",height:"30"}),m("iframe",{src:"https://ghbtns.com/github-btn.html?user=dracula&repo=dracula-theme&type=fork&count=true&size=large",title:"GitHub Forks",allowtransparency:"true",frameBorder:"0",scrolling:"0",width:"156",height:"30"}))))}}]),s}(t.Component),g=i.a.createElement,d=function(e){function s(){return Object(c.a)(this,s),Object(n.a)(this,Object(p.a)(s).apply(this,arguments))}return Object(r.a)(s,e),Object(l.a)(s,[{key:"render",value:function(){return g("p",{className:"credits"},"Made with ",g("span",{className:"love"},"\u2665")," by ",g("a",{className:"green",href:"https://zenorocha.com",target:"blank"},"Zeno Rocha"),g("br",null),"under ",g("a",{className:"orange",href:"http://zenorocha.mit-license.org/",target:"blank"},"MIT license"))}}]),s}(t.Component),u=i.a.createElement;s.a=function(e){var s=e.children;return u("div",{className:s.props.query.color},u("div",{className:"container-fluid"},u(h,{query:s.props.query}),u("div",null,s),u(d,null)))}},MX0m:function(e,s,a){e.exports=a("3niX")},RNiq:function(e,s,a){"use strict";a.r(s);var t=a("ln6h"),i=a.n(t),c=a("0iUn"),l=a("sLSF"),n=a("MI3g"),p=a("a7VT"),r=a("Tit0"),o=a("q1tI"),m=a.n(o),h=a("8Kt/"),g=a.n(h),d=a("B1Ei"),u=a("f+GR"),N=m.a.createElement,f=function(e){function s(){return Object(c.a)(this,s),Object(n.a)(this,Object(p.a)(s).apply(this,arguments))}return Object(r.a)(s,e),Object(l.a)(s,[{key:"render",value:function(){var e="A dark theme for Atom, Alfred, Brackets, Emacs, iTerm, Mintty, Notepad++, Slack, Sequel Pro, Sublime Text, Telegram, Textmate, Terminal.app, Ulysses, Vim, Visual Studio Code, Wox, Xcode, and Zsh";return N("div",null,N(g.a,null,N("meta",{charSet:"utf-8"}),N("title",null,"Dracula"," \u2014 ",e),N("meta",{content:"Dracula",property:"og:title"}),N("meta",{content:e,name:"description"}),N("meta",{content:e,property:"og:description"}),N("meta",{content:"Zeno Rocha",name:"author"}),N("meta",{content:"https://draculatheme.com",property:"og:url"}),N("meta",{content:"https://draculatheme.com/static/img/facebook.png",property:"og:image"})),N("main",null,N("div",{className:"row around-xs"},N("h2",{className:"category-title cyan tilt-right"},"Featured")),N("div",{className:"row around-xs"},N("a",{href:"/notepad-plus-plus/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"Notepad++")),N("a",{href:"/iterm/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/pumpkin.png",width:"198",height:"182",alt:"Pumpkin"})),N("h3",{className:"app-title orange"},"iTerm")),N("a",{href:"/visual-studio-code/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/tombstone.png",width:"238",height:"190",alt:"Tombstone"})),N("h3",{className:"app-title purple"},"Visual Studio Code"))),N("div",{style:{backgroundColor:"#2a2c37",marginRight:"-2rem",marginLeft:"-2rem",marginBottom:"80px",padding:"30px 0 60px"}},N(u.a,null)),N("div",{className:"row around-xs"},N("h2",{className:"category-title orange tilt-left"},"Code Editors")),N("div",{className:"row around-xs"},N("a",{href:"/vim/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/eye.png",width:"168",height:"170",alt:"Eye"})),N("h3",{className:"app-title purple"},"Vim")),N("a",{href:"/sublime/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"Sublime")),N("a",{href:"/xcode/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"Xcode"))),N("div",{className:"row around-xs"},N("a",{href:"/atom/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/glass.png",width:"174",height:"204",alt:"Glass"})),N("h3",{className:"app-title orange"},"Atom")),N("a",{href:"/visual-studio-code/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/tombstone.png",width:"238",height:"190",alt:"Tombstone"})),N("h3",{className:"app-title purple"},"Visual Studio Code")),N("a",{href:"/emacs/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/spider.png",width:"181",height:"175",alt:"Spider"})),N("h3",{className:"app-title cyan"},"Emacs"))),N("div",{className:"row around-xs"},N("a",{href:"/notepad-plus-plus/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"Notepad++")),N("a",{href:"/jetbrains/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/frankenstein.png",width:"175",height:"150",alt:"Frankenstein"})),N("h3",{className:"app-title pink"},"JetBrains")),N("a",{href:"/visual-studio/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/broom.png",width:"186",height:"202",alt:"Broom"})),N("h3",{className:"app-title purple"},"Visual Studio"))),N("div",{className:"row around-xs"},N("a",{href:"/coda/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"Coda")),N("a",{href:"/brackets/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"Brackets")),N("a",{href:"/light-table/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/pumpkin.png",width:"198",height:"182",alt:"Pumpkin"})),N("h3",{className:"app-title orange"},"Light Table"))),N("div",{className:"row around-xs"},N("a",{href:"/textmate/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/skull.png",width:"198",height:"182",alt:"Skull"})),N("h3",{className:"app-title cyan"},"TextMate")),N("a",{href:"/gedit/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/moon.png",width:"168",height:"168",alt:"Moon"})),N("h3",{className:"app-title orange"},"Gedit")),N("a",{href:"/pythonista/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candle.png",width:"198",height:"184",alt:"Candle"})),N("h3",{className:"app-title purple"},"Pythonista"))),N("div",{className:"row around-xs"},N("a",{href:"/arduino-ide/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/tombstone.png",width:"238",height:"190",alt:"Tombstone"})),N("h3",{className:"app-title purple"},"Arduino IDE")),N("a",{href:"/coteditor/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/axe.png",width:"198",height:"174",alt:"Axe"})),N("h3",{className:"app-title cyan"},"CotEditor")),N("a",{href:"/geany/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cone.png",width:"168",height:"189",alt:"Cone"})),N("h3",{className:"app-title orange"},"Geany"))),N("div",{className:"row around-xs"},N("a",{href:"/lightpaper/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/eye.png",width:"168",height:"170",alt:"Eye"})),N("h3",{className:"app-title purple"},"LightPaper")),N("a",{href:"/monodevelop/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/spider.png",width:"181",height:"175",alt:"Spider"})),N("h3",{className:"app-title cyan"},"MonoDevelop")),N("a",{href:"/qtcreator/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"Qt Creator"))),N("div",{className:"row around-xs"},N("a",{href:"/bbedit/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/broom.png",width:"186",height:"202",alt:"Broom"})),N("h3",{className:"app-title purple"},"BBEdit")),N("a",{href:"/editplus/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"Editplus")),N("a",{href:"/gamemaker-studio/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/frankenstein.png",width:"175",height:"150",alt:"Frankenstein"})),N("h3",{className:"app-title pink"},"GameMaker Studio"))),N("div",{className:"row around-xs"},N("a",{href:"/kate/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/glass.png",width:"174",height:"204",alt:"Glass"})),N("h3",{className:"app-title orange"},"Kate")),N("a",{href:"/wing/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/coffin.png",width:"200",height:"197",alt:"Broom"})),N("h3",{className:"app-title cyan"},"Wing"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title purple tilt-right"},"Terminal")),N("div",{className:"row around-xs"},N("a",{href:"/iterm/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/pumpkin.png",width:"198",height:"182",alt:"Pumpkin"})),N("h3",{className:"app-title orange"},"iTerm")),N("a",{href:"/hyper/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"Hyper")),N("a",{href:"/zsh/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"Zsh"))),N("div",{className:"row around-xs"},N("a",{href:"/windows-terminal/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/spider.png",width:"181",height:"175",alt:"Spider"})),N("h3",{className:"app-title cyan"},"Windows Terminal")),N("a",{href:"/tilix/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/moon.png",width:"168",height:"168",alt:"Moon"})),N("h3",{className:"app-title orange"},"Tilix")),N("a",{href:"/termux/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/eye.png",width:"168",height:"170",alt:"Eye"})),N("h3",{className:"app-title purple"},"Termux"))),N("div",{className:"row around-xs"},N("a",{href:"/terminal/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candle.png",width:"198",height:"184",alt:"Candle"})),N("h3",{className:"app-title purple"},"Terminal.app")),N("a",{href:"/mintty/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/coffin.png",width:"200",height:"197",alt:"Broom"})),N("h3",{className:"app-title cyan"},"Mintty")),N("a",{href:"/mutt/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/tombstone.png",width:"238",height:"190",alt:"Tombstone"})),N("h3",{className:"app-title purple"},"Mutt"))),N("div",{className:"row around-xs"},N("a",{href:"/kitty/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/skull.png",width:"198",height:"182",alt:"Skull"})),N("h3",{className:"app-title cyan"},"Kitty")),N("a",{href:"/gnome-terminal/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/broom.png",width:"186",height:"202",alt:"Broom"})),N("h3",{className:"app-title orange"},"Gnome Terminal")),N("a",{href:"/mobaxterm/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"MobaXterm"))),N("div",{className:"row around-xs"},N("a",{href:"/konsole/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"Konsole")),N("a",{href:"/conemu/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/hat-magic.png",width:"237",height:"196",alt:"Magic Hat"})),N("h3",{className:"app-title purple"},"ConEmu")),N("a",{href:"/xresources/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cone.png",width:"168",height:"189",alt:"Cone"})),N("h3",{className:"app-title orange"},"Xresources"))),N("div",{className:"row around-xs"},N("a",{href:"/alacritty/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/axe.png",width:"198",height:"174",alt:"Axe"})),N("h3",{className:"app-title cyan"},"Alacritty")),N("a",{href:"/cmder/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/glass.png",width:"174",height:"204",alt:"Glass"})),N("h3",{className:"app-title orange"},"Cmder")),N("a",{href:"/fish/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"Fish"))),N("div",{className:"row around-xs"},N("a",{href:"/powershell/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/frankenstein.png",width:"175",height:"150",alt:"Frankenstein"})),N("h3",{className:"app-title pink"},"PowerShell")),N("a",{href:"/fluent-terminal/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/pumpkin.png",width:"198",height:"182",alt:"Pumpkin"})),N("h3",{className:"app-title orange"},"Fluent Terminal")),N("a",{href:"/termite/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"Termite"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title cyan tilt-left"},"Syntax Highlight")),N("div",{className:"row around-xs"},N("a",{href:"https://github.com/codemirror/CodeMirror/blob/master/theme/dracula.css",target:"_blank",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/moon.png",width:"168",height:"168",alt:"Moon"})),N("h3",{className:"app-title orange"},"CodeMirror")),N("a",{href:"/highlightjs/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/skull.png",width:"198",height:"182",alt:"Skull"})),N("h3",{className:"app-title cyan"},"Highlight.js")),N("a",{href:"/pygments/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/broom.png",width:"186",height:"202",alt:"Broom"})),N("h3",{className:"app-title purple"},"Pygments"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title purple tilt-right"},"Messaging")),N("div",{className:"row around-xs"},N("a",{href:"/slack/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/axe.png",width:"198",height:"174",alt:"Axe"})),N("h3",{className:"app-title cyan"},"Slack")),N("a",{href:"/telegram/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candle.png",width:"198",height:"184",alt:"Candle"})),N("h3",{className:"app-title purple"},"Telegram Desktop")),N("a",{href:"/telegram-android/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cone.png",width:"168",height:"189",alt:"Cone"})),N("h3",{className:"app-title orange"},"Telegram Android"))),N("div",{className:"row around-xs"},N("a",{href:"/facebook-messenger/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"Facebook Messenger")),N("a",{href:"/limechat/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"LimeChat")),N("a",{href:"/textual/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/glass.png",width:"174",height:"204",alt:"Glass"})),N("h3",{className:"app-title orange"},"Textual"))),N("div",{className:"row around-xs"},N("a",{href:"/mattermost/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/pumpkin.png",width:"198",height:"182",alt:"Pumpkin"})),N("h3",{className:"app-title orange"},"Mattermost")),N("a",{href:"/quassel/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"Quassel")),N("a",{href:"/xchat/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"XChat"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title orange tilt-left"},"Notes")),N("div",{className:"row around-xs"},N("a",{href:"/bear/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"Bear")),N("a",{href:"/ulysses/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/glass.png",width:"174",height:"204",alt:"Glass"})),N("h3",{className:"app-title orange"},"Ulysses")),N("a",{href:"/macdown/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/broom.png",width:"186",height:"202",alt:"Broom"})),N("h3",{className:"app-title purple"},"MacDown"))),N("div",{className:"row around-xs"},N("a",{href:"/typora/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"Typora")),N("a",{href:"/quiver/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/moon.png",width:"168",height:"168",alt:"Moon"})),N("h3",{className:"app-title orange"},"Quiver"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title cyan tilt-right"},"Launchers")),N("div",{className:"row around-xs"},N("a",{href:"/alfred/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/hat-magic.png",width:"237",height:"196",alt:"Magic Hat"})),N("h3",{className:"app-title purple"},"Alfred")),N("a",{href:"/ulauncher/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"Ulauncher")),N("a",{href:"/wox/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/eye.png",width:"168",height:"170",alt:"Eye"})),N("h3",{className:"app-title purple"},"Wox"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title purple tilt-left"},"Miscellaneous")),N("div",{className:"row around-xs"},N("a",{href:"/base16/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/skull.png",width:"198",height:"182",alt:"Skull"})),N("h3",{className:"app-title cyan"},"Base16")),N("a",{href:"/gh-pages/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"GitHub Pages")),N("a",{href:"/vivaldi/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"Vivaldi"))),N("div",{className:"row around-xs"},N("a",{href:"/blender/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/spider.png",width:"181",height:"175",alt:"Spider"})),N("h3",{className:"app-title cyan"},"Blender")),N("a",{href:"/couscous/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/frankenstein.png",width:"175",height:"150",alt:"Frankenstein"})),N("h3",{className:"app-title pink"},"Couscous")),N("a",{href:"/duckduckgo/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/broom.png",width:"186",height:"202",alt:"Broom"})),N("h3",{className:"app-title purple"},"DuckDuckGo"))),N("div",{className:"row around-xs"},N("a",{href:"/gitk/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/axe.png",width:"198",height:"174",alt:"Axe"})),N("h3",{className:"app-title cyan"},"Gitk")),N("a",{href:"/gmk/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"GMK")),N("a",{href:"/sequel-pro/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cone.png",width:"168",height:"189",alt:"Cone"})),N("h3",{className:"app-title orange"},"Sequel Pro"))),N("div",{className:"row around-xs"},N("a",{href:"/react-devtools/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"React DevTools")),N("a",{href:"/mindnode/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candle.png",width:"198",height:"184",alt:"Candle"})),N("h3",{className:"app-title purple"},"Mindnode")),N("a",{href:"/nylas-n1/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/coffin.png",width:"200",height:"197",alt:"Broom"})),N("h3",{className:"app-title cyan"},"Nylas N1"))),N("div",{className:"row around-xs"},N("a",{href:"/oracle-sql-developer/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cone.png",width:"168",height:"189",alt:"Cone"})),N("h3",{className:"app-title orange"},"Oracle SQL Developer")),N("a",{href:"/jgrasp/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/hat-magic.png",width:"237",height:"196",alt:"Magic Hat"})),N("h3",{className:"app-title purple"},"jGrasp")),N("a",{href:"/i3/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"i3"))),N("div",{className:"row around-xs"},N("a",{href:"/steam/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/tombstone.png",width:"238",height:"190",alt:"Tombstone"})),N("h3",{className:"app-title purple"},"Steam")),N("a",{href:"/vimium/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/pumpkin.png",width:"198",height:"182",alt:"Pumpkin"})),N("h3",{className:"app-title orange"},"Vimium")),N("a",{href:"/wordpress/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/eye.png",width:"168",height:"170",alt:"Eye"})),N("h3",{className:"app-title purple"},"Wordpress")))),N("script",{src:"https://wzrd.in/standalone/malarkey@1.3.3"}),N("script",{src:"/static/js/main.js"}))}}],[{key:"getInitialProps",value:function(e){var s;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return s=e.query,a.abrupt("return",{query:s});case 2:case"end":return a.stop()}}))}}]),s}(m.a.Component);f.Layout=d.a,s.default=f},SevZ:function(e,s,a){"use strict";s.__esModule=!0,s.default=void 0;var t=c(a("9kyW")),i=c(a("bVZc"));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(e){var s=void 0===e?{}:e,a=s.styleSheet,t=void 0===a?null:a,c=s.optimizeForSpeed,l=void 0!==c&&c,n=s.isBrowser,p=void 0===n?"undefined"!==typeof window:n;this._sheet=t||new i.default({name:"styled-jsx",optimizeForSpeed:l}),this._sheet.inject(),t&&"boolean"===typeof l&&(this._sheet.setOptimizeForSpeed(l),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=p,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var s=e.prototype;return s.add=function(e){var s=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,s){return e[s]=0,e}),{}));var a=this.getIdAndRules(e),t=a.styleId,i=a.rules;if(t in this._instancesCounts)this._instancesCounts[t]+=1;else{var c=i.map((function(e){return s._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[t]=c,this._instancesCounts[t]=1}},s.remove=function(e){var s=this,a=this.getIdAndRules(e).styleId;if(function(e,s){if(!e)throw new Error("StyleSheetRegistry: "+s+".")}(a in this._instancesCounts,"styleId: `"+a+"` not found"),this._instancesCounts[a]-=1,this._instancesCounts[a]<1){var t=this._fromServer&&this._fromServer[a];t?(t.parentNode.removeChild(t),delete this._fromServer[a]):(this._indices[a].forEach((function(e){return s._sheet.deleteRule(e)})),delete this._indices[a]),delete this._instancesCounts[a]}},s.update=function(e,s){this.add(s),this.remove(e)},s.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},s.cssRules=function(){var e=this,s=this._fromServer?Object.keys(this._fromServer).map((function(s){return[s,e._fromServer[s]]})):[],a=this._sheet.cssRules();return s.concat(Object.keys(this._indices).map((function(s){return[s,e._indices[s].map((function(e){return a[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},s.createComputeId=function(){var e={};return function(s,a){if(!a)return"jsx-"+s;var i=String(a),c=s+i;return e[c]||(e[c]="jsx-"+(0,t.default)(s+"-"+i)),e[c]}},s.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var s={};return function(a,t){this._isBrowser||(t=t.replace(/\/style/gi,"\\/style"));var i=a+t;return s[i]||(s[i]=t.replace(e,a)),s[i]}},s.getIdAndRules=function(e){var s=this,a=e.children,t=e.dynamic,i=e.id;if(t){var c=this.computeId(i,t);return{styleId:c,rules:Array.isArray(a)?a.map((function(e){return s.computeSelector(c,e)})):[this.computeSelector(c,a)]}}return{styleId:this.computeId(i),rules:Array.isArray(a)?a:[a]}},s.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,s){return e[s.id.slice(2)]=s,e}),{})},e}();s.default=l},bVZc:function(e,s,a){"use strict";(function(e){function a(e,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}s.__esModule=!0,s.default=void 0;var t="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var s=void 0===e?{}:e,a=s.name,c=void 0===a?"stylesheet":a,n=s.optimizeForSpeed,p=void 0===n?t:n,r=s.isBrowser,o=void 0===r?"undefined"!==typeof window:r;l(i(c),"`name` must be a string"),this._name=c,this._deletedRulePlaceholder="#"+c+"-deleted-rule____{}",l("boolean"===typeof p,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=p,this._isBrowser=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var m=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=m?m.getAttribute("content"):null}var s,c,n,p=e.prototype;return p.setOptimizeForSpeed=function(e){l("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),l(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},p.isOptimizeForSpeed=function(){return this._optimizeForSpeed},p.inject=function(){var e=this;if(l(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(t||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(s,a){return"number"===typeof a?e._serverSheet.cssRules[a]={cssText:s}:e._serverSheet.cssRules.push({cssText:s}),a},deleteRule:function(s){e._serverSheet.cssRules[s]=null}}},p.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var s=0;s<document.styleSheets.length;s++)if(document.styleSheets[s].ownerNode===e)return document.styleSheets[s]},p.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},p.insertRule=function(e,s){if(l(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof s&&(s=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,s),this._rulesCount++;if(this._optimizeForSpeed){var a=this.getSheet();"number"!==typeof s&&(s=a.cssRules.length);try{a.insertRule(e,s)}catch(n){return t||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var c=this._tags[s];this._tags.push(this.makeStyleTag(this._name,e,c))}return this._rulesCount++},p.replaceRule=function(e,s){if(this._optimizeForSpeed||!this._isBrowser){var a=this._isBrowser?this.getSheet():this._serverSheet;if(s.trim()||(s=this._deletedRulePlaceholder),!a.cssRules[e])return e;a.deleteRule(e);try{a.insertRule(s,e)}catch(c){t||console.warn("StyleSheet: illegal rule: \n\n"+s+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),a.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];l(i,"old rule at index `"+e+"` not found"),i.textContent=s}return e},p.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var s=this._tags[e];l(s,"rule at index `"+e+"` not found"),s.parentNode.removeChild(s),this._tags[e]=null}else this._serverSheet.deleteRule(e)},p.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},p.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(s,a){return a?s=s.concat(Array.prototype.map.call(e.getSheetForTag(a).cssRules,(function(s){return s.cssText===e._deletedRulePlaceholder?null:s}))):s.push(null),s}),[]):this._serverSheet.cssRules},p.makeStyleTag=function(e,s,a){s&&l(i(s),"makeStyleTag acceps only strings as second parameter");var t=document.createElement("style");this._nonce&&t.setAttribute("nonce",this._nonce),t.type="text/css",t.setAttribute("data-"+e,""),s&&t.appendChild(document.createTextNode(s));var c=document.head||document.getElementsByTagName("head")[0];return a?c.insertBefore(t,a):c.appendChild(t),t},s=e,(c=[{key:"length",get:function(){return this._rulesCount}}])&&a(s.prototype,c),n&&a(s,n),e}();function l(e,s){if(!e)throw new Error("StyleSheet: "+s+".")}s.default=c}).call(this,a("8oxB"))},"f+GR":function(e,s,a){"use strict";var t=a("0iUn"),i=a("sLSF"),c=a("MI3g"),l=a("a7VT"),n=a("Tit0"),p=a("MX0m"),r=a.n(p),o=a("q1tI"),m=a.n(o).a.createElement,h=function(e){function s(){return Object(t.a)(this,s),Object(c.a)(this,Object(l.a)(s).apply(this,arguments))}return Object(n.a)(s,e),Object(i.a)(s,[{key:"render",value:function(){return m("div",{className:"jsx-810049475 green"},m("h1",{style:{marginBottom:20},className:"jsx-810049475 title"},"Dracula Pro"),m("div",{style:{backgroundColor:"#1d1e26",borderRadius:"10px",margin:"0 auto"},className:"jsx-810049475 box"},m("h2",{style:{textAlign:"center",color:"#fff"},className:"jsx-810049475"},"a new theme is coming."),m("p",{style:{textAlign:"center",color:"rgba(255, 255, 255, .6)"},className:"jsx-810049475"},"Enter your email and we'll put you on the invite list."),m("form",{action:"https://draculatheme.us4.list-manage.com/subscribe/post?u=91b5113403e18d357704e4b08&id=05d188e2db",method:"post",className:"jsx-810049475 form"},m("input",{style:{display:"none"},type:"checkbox",value:"1",name:"group[66939][1]",id:"mce-group[66939]-66939-0",className:"jsx-810049475"}),m("input",{style:{display:"none"},type:"checkbox",value:"2",name:"group[66939][2]",id:"mce-group[66939]-66939-1",defaultChecked:!0,className:"jsx-810049475"}),m("input",{style:{fontSize:"18px",backgroundColor:"#333"},name:"EMAIL",placeholder:"your@email.com",id:"mce-EMAIL",type:"email",required:!0,className:"jsx-810049475"}),m("input",{style:{fontSize:"18px"},type:"submit",value:"Notify me",name:"subscribe",id:"mc-embedded-subscribe",className:"jsx-810049475"}))),m(r.a,{id:"810049475"},["h2.jsx-810049475{font-size:38px;}","p.jsx-810049475{font-size:19px;}",".box.jsx-810049475{padding:45px;max-width:400px;}","@media (max-width:840px){h2.jsx-810049475{font-size:32px;}p.jsx-810049475{font-size:16px;}.box.jsx-810049475{padding:20px;max-width:375px;}}"]))}}]),s}(o.Component);s.a=h},vlRD:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,1]]]);