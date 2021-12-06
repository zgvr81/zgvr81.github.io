/*! modernizr 3.11.8 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvastext-setclasses !*/
!function(e,n,t,a){function o(e,n){return typeof e===n}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):r?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var i=[],l={_version:"3.11.8",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){i.push({name:e,fn:n,options:t})},addAsyncTest:function(e){i.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var c=[],f=t.documentElement,r="svg"===f.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return!1!==Modernizr.canvas&&"function"==typeof s("canvas").getContext("2d").fillText}),function(){var e,n,t,a,s,l,f;for(var r in i)if(i.hasOwnProperty(r)){if(e=[],n=i[r],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(a=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)l=e[s],f=l.split("."),1===f.length?Modernizr[f[0]]=a:(Modernizr[f[0]]&&(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean)||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=a),c.push((a?"":"no-")+f.join("-"))}}(),function(e){var n=f.className,t=Modernizr._config.classPrefix||"";if(r&&(n=n.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(a,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e.length>0&&(n+=" "+t+e.join(" "+t)),r?f.className.baseVal=n:f.className=n)}(c),delete l.addTest,delete l.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();e.Modernizr=Modernizr}(window,window,document);