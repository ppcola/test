/*! airbrake-js v1.6.2 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(function(){try{return require("os")}catch(t){}}(),require("cross-fetch")):"function"==typeof define&&define.amd?define(["os","cross-fetch"],e):"object"==typeof exports?exports.Client=e(function(){try{return require("os")}catch(t){}}(),require("cross-fetch")):(t.airbrakeJs=t.airbrakeJs||{},t.airbrakeJs.Client=e(t[void 0],t.fetch))}("undefined"!=typeof self?self:this,function(t,e){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(20),o=r(22);e.makeRequester=function(t){return t.request?o.makeRequester(t.request):n.request},e.errors={unauthorized:new Error("airbrake: unauthorized: project id or key are wrong"),ipRateLimited:new Error("airbrake: IP is rate limited")}},function(t,e,r){"use strict";e.a=function(t){var e=this.constructor;return this.then(function(r){return e.resolve(t()).then(function(){return r})},function(r){return e.resolve(t()).then(function(){return e.reject(r)})})}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";(function(t){var n=r(1),o=setTimeout;function i(){}function s(t){if(!(this instanceof s))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(t,this)}function a(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,s._immediateFn(function(){var r=1===t._state?e.onFulfilled:e.onRejected;if(null!==r){var n;try{n=r(t._value)}catch(t){return void c(e.promise,t)}u(e.promise,n)}else(1===t._state?u:c)(e.promise,t._value)})):t._deferreds.push(e)}function u(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if(e instanceof s)return t._state=3,t._value=e,void f(t);if("function"==typeof r)return void h((n=r,o=e,function(){n.apply(o,arguments)}),t)}t._state=1,t._value=e,f(t)}catch(e){c(t,e)}var n,o}function c(t,e){t._state=2,t._value=e,f(t)}function f(t){2===t._state&&0===t._deferreds.length&&s._immediateFn(function(){t._handled||s._unhandledRejectionFn(t._value)});for(var e=0,r=t._deferreds.length;e<r;e++)a(t,t._deferreds[e]);t._deferreds=null}function l(t,e,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=r}function h(t,e){var r=!1;try{t(function(t){r||(r=!0,u(e,t))},function(t){r||(r=!0,c(e,t))})}catch(t){if(r)return;r=!0,c(e,t)}}s.prototype.catch=function(t){return this.then(null,t)},s.prototype.then=function(t,e){var r=new this.constructor(i);return a(this,new l(t,e,r)),r},s.prototype.finally=n.a,s.all=function(t){return new s(function(e,r){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var n=Array.prototype.slice.call(t);if(0===n.length)return e([]);var o=n.length;function i(t,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(e){i(t,e)},r)}n[t]=s,0==--o&&e(n)}catch(t){r(t)}}for(var s=0;s<n.length;s++)i(s,n[s])})},s.resolve=function(t){return t&&"object"==typeof t&&t.constructor===s?t:new s(function(e){e(t)})},s.reject=function(t){return new s(function(e,r){r(t)})},s.race=function(t){return new s(function(e,r){for(var n=0,o=t.length;n<o;n++)t[n].then(e,r)})},s._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){o(t,0)},s._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.a=s}).call(this,r(7).setImmediate)},function(t,e,r){t.exports=r(5)},function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(6);var o=n(r(9)),i=n(r(10)),s=n(r(13)),a=n(r(14)),u=n(r(15)),c=n(r(16)),f=n(r(17)),l=n(r(18)),h=r(0),p=r(23),d=r(25),m=function(){function t(t){void 0===t&&(t={});var e=this;if(this.filters=[],this.offline=!1,this.todo=[],this.onClose=[],!t.projectId||!t.projectKey)throw new Error("airbrake: projectId and projectKey are required");this.opts=t,this.opts.host=this.opts.host||"https://api.airbrake.io",this.opts.timeout=this.opts.timeout||1e4,this.opts.keysBlacklist=this.opts.keysBlacklist||[/password/,/secret/],this.url=this.opts.host+"/api/v3/projects/"+this.opts.projectId+"/notices?key="+this.opts.projectKey,this.processor=this.opts.processor||i.default,this.requester=h.makeRequester(this.opts),this.addFilter(s.default),this.addFilter(a.default()),this.addFilter(u.default),this.addFilter(c.default),!this.opts.environment&&"undefined"!=typeof process&&process.env.NODE_ENV&&(this.opts.environment=process.env.NODE_ENV),this.opts.environment&&this.addFilter(function(t){return t.context.environment=e.opts.environment,t}),"object"==typeof window?(this.addFilter(f.default),window.addEventListener&&(this.onOnline=this.onOnline.bind(this),window.addEventListener("online",this.onOnline),this.onOffline=this.onOffline.bind(this),window.addEventListener("offline",this.onOffline),this.onUnhandledrejection=this.onUnhandledrejection.bind(this),window.addEventListener("unhandledrejection",this.onUnhandledrejection),this.onClose.push(function(){window.removeEventListener("online",e.onOnline),window.removeEventListener("offline",e.onOffline),window.removeEventListener("unhandledrejection",e.onUnhandledrejection)}))):this.addFilter(l.default);var r,n=t.instrumentation||{};void 0===typeof n.console&&(n.console=!((r=t.environment)&&r.startsWith&&r.startsWith("dev"))),this.historian=p.Historian.instance(n),this.historian.registerNotifier(this)}return t.prototype.close=function(){for(var t=0,e=this.onClose;t<e.length;t++){(0,e[t])()}this.historian.unregisterNotifier(this)},t.prototype.addFilter=function(t){this.filters.push(t)},t.prototype.notify=function(t){var e=this,r={id:"",errors:[],context:Object.assign({severity:"error"},t.context),params:t.params||{},environment:t.environment||{},session:t.session||{}};if("object"==typeof t&&void 0!==t.error||(t={error:t}),!t.error)return r.error=new Error("airbrake: got err="+JSON.stringify(t.error)+", wanted an Error"),Promise.resolve(r);if(this.opts.ignoreWindowError&&t.context&&t.context.windowError)return r.error=new Error("airbrake: window error is ignored"),Promise.resolve(r);if(this.offline)return new Promise(function(n,o){for(e.todo.push({err:t,resolve:n,reject:o});e.todo.length>100;){var i=e.todo.shift();if(void 0===i)break;r.error=new Error("airbrake: offline queue is too large"),i.resolve(r)}});var n=this.historian.getHistory();n.length>0&&(r.context.history=n);var o=this.processor(t.error);r.errors.push(o);for(var i=0,s=this.filters;i<s.length;i++){var a=(0,s[i])(r);if(null===a)return r.error=new Error("airbrake: error is filtered"),Promise.resolve(r);r=a}return r.context||(r.context={}),r.context.language="JavaScript",r.context.notifier={name:"airbrake-js",version:"1.6.2",url:"https://github.com/airbrake/airbrake-js"},this.sendNotice(r)},t.prototype.sendNotice=function(t){var e=o.default(t,{keysBlacklist:this.opts.keysBlacklist});if(this.opts.reporter)return this.opts.reporter(t);var r={method:"POST",url:this.url,body:e};return this.requester(r).then(function(e){return t.id=e.json.id,t}).catch(function(e){return t.error=e,t})},t.prototype.wrap=function(t,e){if(void 0===e&&(e=[]),t._airbrake)return t;var r=this,n=function(){var e=Array.prototype.slice.call(arguments),n=r.wrapArguments(e);try{return t.apply(this,n)}catch(t){throw r.notify({error:t,params:{arguments:e}}),this.historian.ignoreNextWindowError(),t}};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);for(var i=0,s=e;i<s.length;i++){o=s[i];t.hasOwnProperty(o)&&(n[o]=t[o])}return n._airbrake=!0,n.inner=t,n},t.prototype.wrapArguments=function(t){for(var e=0;e<t.length;e++){var r=t[e];"function"==typeof r&&(t[e]=this.wrap(r))}return t},t.prototype.call=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return this.wrap(t).apply(this,Array.prototype.slice.call(arguments,1))},t.prototype.onerror=function(){this.historian.onerror.apply(this.historian,arguments)},t.prototype.notifyRequest=function(t){this.routes||(this.routes=new d.Routes(this.opts)),this.routes.notifyRequest(t)},t.prototype.onOnline=function(){this.offline=!1;for(var t=function(t){e.notify(t.err).then(function(e){t.resolve(e)})},e=this,r=0,n=this.todo;r<n.length;r++){t(n[r])}this.todo=[]},t.prototype.onOffline=function(){this.offline=!0},t.prototype.onUnhandledrejection=function(t){var e=t.reason||t.detail&&t.detail.reason||"unhandled rejection with no reason given",r=e.message||String(e);r.indexOf&&0===r.indexOf("airbrake: ")||this.notify(e)},t}();t.exports=m},function(t,e,r){"use strict";r.r(e),function(t){var e=r(3),n=r(1),o=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();"Promise"in o?o.Promise.prototype.finally||(o.Promise.prototype.finally=n.a):o.Promise=e.a}.call(this,r(2))},function(t,e,r){(function(t){var n=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,n,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,n,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(n,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},r(8),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,r(2))},function(t,e,r){(function(t){!function(t,e){"use strict";if(!t.setImmediate){var r,n,o,i,s,a=1,u={},c=!1,f=t.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(t);l=l&&l.setTimeout?l:t,"[object process]"==={}.toString.call(t.process)?r=function(t){process.nextTick(function(){p(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,r=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=r,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){p(t.data)},r=function(t){o.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(n=f.documentElement,r=function(t){var e=f.createElement("script");e.onreadystatechange=function(){p(t),e.onreadystatechange=null,n.removeChild(e),e=null},n.appendChild(e)}):r=function(t){setTimeout(p,0,t)}:(i="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(i)&&p(+e.data.slice(i.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),r=function(e){t.postMessage(i+e,"*")}),l.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return u[a]=o,r(a),a++},l.clearImmediate=h}function h(t){delete u[t]}function p(t){if(c)setTimeout(p,0,t);else{var r=u[t];if(r){c=!0;try{!function(t){var r=t.callback,n=t.args;switch(n.length){case 0:r();break;case 1:r(n[0]);break;case 2:r(n[0],n[1]);break;case 3:r(n[0],n[1],n[2]);break;default:r.apply(e,n)}}(r)}finally{h(t),c=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,r(2))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=128;function o(t,e){return t>>e||1}e.default=function(t,e){var r=void 0===e?{}:e,n=r.maxLength,o=void 0===n?64e3:n,a=r.keysBlacklist,u=void 0===a?[]:a;if(t.errors)for(var c=0;c<t.errors.length;c++){var f=new i({keysBlacklist:u});t.errors[c]=f.truncate(t.errors[c])}for(var l="",h=["context","params","environment","session"],p=0;p<8;p++){for(var d={level:p,keysBlacklist:u},m=0,v=h;m<v.length;m++)(x=t[b=v[m]])&&(t[b]=s(x,d));if((l=JSON.stringify(t)).length<o)return l}var y={json:l.slice(0,Math.floor(o/2))+"..."};h.push("errors");for(var g=0,w=h;g<w.length;g++){var b,x;(x=t[b=w[g]])&&(l=JSON.stringify(x),y[b]=l.length)}var j=new Error("airbrake: notice exceeds max length and can't be truncated");throw j.params=y,j};var i=function(){function t(t){this.maxStringLength=1024,this.maxObjectLength=n,this.maxArrayLength=n,this.maxDepth=8,this.keys=[],this.keysBlacklist=[],this.seen=[];var e=t.level||0;this.keysBlacklist=t.keysBlacklist||[],this.maxStringLength=o(this.maxStringLength,e),this.maxObjectLength=o(this.maxObjectLength,e),this.maxArrayLength=o(this.maxArrayLength,e),this.maxDepth=o(this.maxDepth,e)}return t.prototype.truncate=function(t,e,r){if(void 0===e&&(e=""),void 0===r&&(r=0),null==t)return t;switch(typeof t){case"boolean":case"number":case"function":return t;case"string":return this.truncateString(t);case"object":break;default:return this.truncateString(String(t))}if(t instanceof String)return this.truncateString(t.toString());if(t instanceof Boolean||t instanceof Number||t instanceof Date||t instanceof RegExp)return t;if(t instanceof Error)return this.truncateString(t.toString());if(this.seen.indexOf(t)>=0)return"[Circular "+this.getPath(t)+"]";var n=function(t){return Object.prototype.toString.apply(t).slice("[object ".length,-1)}(t);if(++r>this.maxDepth)return"[Truncated "+n+"]";switch(this.keys.push(e),this.seen.push(t),n){case"Array":return this.truncateArray(t,r);case"Object":return this.truncateObject(t,r);default:var o=this.maxDepth;this.maxDepth=0;var i=this.truncateObject(t,r);return i.__type=n,this.maxDepth=o,i}},t.prototype.getPath=function(t){for(var e=this.seen.indexOf(t),r=[this.keys[e]],n=e;n>=0;n--){var o=this.seen[n];o&&a(o,r[0])===t&&(t=o,r.unshift(this.keys[n]))}return"~"+r.join(".")},t.prototype.truncateString=function(t){return t.length>this.maxStringLength?t.slice(0,this.maxStringLength)+"...":t},t.prototype.truncateArray=function(t,e){void 0===e&&(e=0);for(var r=0,n=[],o=0;o<t.length;o++){var i=t[o];if(n.push(this.truncate(i,o.toString(),e)),++r>=this.maxArrayLength)break}return n},t.prototype.truncateObject=function(t,e){void 0===e&&(e=0);var r=0,n={};for(var o in t)if(t.hasOwnProperty(o))if(u(o,this.keysBlacklist))n[o]="[Filtered]";else{var i=a(t,o);if(void 0!==i&&"function"!=typeof i&&(n[o]=this.truncate(i,o,e),++r>=this.maxObjectLength))break}return n},t}();function s(t,e){return void 0===e&&(e={}),new i(e).truncate(t)}function a(t,e){try{return t[e]}catch(t){return}}function u(t,e){for(var r=0,n=e;r<n.length;r++){var o=n[r];if(o===t)return!0;if(o instanceof RegExp&&t.match(o))return!0}return!1}e.truncate=s},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(11),o="object"==typeof console&&console.warn;function i(t){try{return n.parse(t)}catch(e){o&&t.stack&&console.warn("ErrorStackParser:",e.toString(),t.stack)}return t.fileName?[t]:[]}e.default=function(t){var e=[];if(!t.noStack){var r=i(t);if(0===r.length)try{throw new Error("fake")}catch(t){(r=i(t)).shift(),r.shift()}for(var n=0,o=r;n<o.length;n++){var s=o[n];e.push({function:s.functionName||"",file:s.fileName||"",line:s.lineNumber||0,column:s.columnNumber||0})}}return{type:t.name?t.name:"",message:t.message?String(t.message):String(t),backtrace:e}}},function(t,e,r){!function(e,n){"use strict";t.exports=n(r(12))}(0,function(t){"use strict";var e=/(^|@)\S+\:\d+/,r=/^\s*at .*(\S+\:\d+|\(native\))/m,n=/^(eval@)?(\[native code\])?$/;return{parse:function(t){if(void 0!==t.stacktrace||void 0!==t["opera#sourceloc"])return this.parseOpera(t);if(t.stack&&t.stack.match(r))return this.parseV8OrIE(t);if(t.stack)return this.parseFFOrSafari(t);throw new Error("Cannot parse given Error object")},extractLocation:function(t){if(-1===t.indexOf(":"))return[t];var e=/(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(t.replace(/[\(\)]/g,""));return[e[1],e[2]||void 0,e[3]||void 0]},parseV8OrIE:function(e){return e.stack.split("\n").filter(function(t){return!!t.match(r)},this).map(function(e){e.indexOf("(eval ")>-1&&(e=e.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""));var r=e.replace(/^\s+/,"").replace(/\(eval code/g,"(").split(/\s+/).slice(1),n=this.extractLocation(r.pop()),o=r.join(" ")||void 0,i=["eval","<anonymous>"].indexOf(n[0])>-1?void 0:n[0];return new t({functionName:o,fileName:i,lineNumber:n[1],columnNumber:n[2],source:e})},this)},parseFFOrSafari:function(e){return e.stack.split("\n").filter(function(t){return!t.match(n)},this).map(function(e){if(e.indexOf(" > eval")>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),-1===e.indexOf("@")&&-1===e.indexOf(":"))return new t({functionName:e});var r=/((.*".+"[^@]*)?[^@]*)(?:@)/,n=e.match(r),o=n&&n[1]?n[1]:void 0,i=this.extractLocation(e.replace(r,""));return new t({functionName:o,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:e})},this)},parseOpera:function(t){return!t.stacktrace||t.message.indexOf("\n")>-1&&t.message.split("\n").length>t.stacktrace.split("\n").length?this.parseOpera9(t):t.stack?this.parseOpera11(t):this.parseOpera10(t)},parseOpera9:function(e){for(var r=/Line (\d+).*script (?:in )?(\S+)/i,n=e.message.split("\n"),o=[],i=2,s=n.length;i<s;i+=2){var a=r.exec(n[i]);a&&o.push(new t({fileName:a[2],lineNumber:a[1],source:n[i]}))}return o},parseOpera10:function(e){for(var r=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,n=e.stacktrace.split("\n"),o=[],i=0,s=n.length;i<s;i+=2){var a=r.exec(n[i]);a&&o.push(new t({functionName:a[3]||void 0,fileName:a[2],lineNumber:a[1],source:n[i]}))}return o},parseOpera11:function(r){return r.stack.split("\n").filter(function(t){return!!t.match(e)&&!t.match(/^Error created at/)},this).map(function(e){var r,n=e.split("@"),o=this.extractLocation(n.pop()),i=n.shift()||"",s=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;i.match(/\(([^\)]*)\)/)&&(r=i.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var a=void 0===r||"[arguments not available]"===r?void 0:r.split(",");return new t({functionName:s,args:a,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:e})},this)}}})},function(t,e,r){!function(e,r){"use strict";t.exports=r()}(0,function(){"use strict";function t(t){return!isNaN(parseFloat(t))&&isFinite(t)}function e(t){return t.charAt(0).toUpperCase()+t.substring(1)}function r(t){return function(){return this[t]}}var n=["isConstructor","isEval","isNative","isToplevel"],o=["columnNumber","lineNumber"],i=["fileName","functionName","source"],s=n.concat(o,i,["args"]);function a(t){if(t instanceof Object)for(var r=0;r<s.length;r++)t.hasOwnProperty(s[r])&&void 0!==t[s[r]]&&this["set"+e(s[r])](t[s[r]])}a.prototype={getArgs:function(){return this.args},setArgs:function(t){if("[object Array]"!==Object.prototype.toString.call(t))throw new TypeError("Args must be an Array");this.args=t},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(t){if(t instanceof a)this.evalOrigin=t;else{if(!(t instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new a(t)}},toString:function(){return(this.getFunctionName()||"{anonymous}")+("("+(this.getArgs()||[]).join(",")+")")+(this.getFileName()?"@"+this.getFileName():"")+(t(this.getLineNumber())?":"+this.getLineNumber():"")+(t(this.getColumnNumber())?":"+this.getColumnNumber():"")}};for(var u=0;u<n.length;u++)a.prototype["get"+e(n[u])]=r(n[u]),a.prototype["set"+e(n[u])]=function(t){return function(e){this[t]=Boolean(e)}}(n[u]);for(var c=0;c<o.length;c++)a.prototype["get"+e(o[c])]=r(o[c]),a.prototype["set"+e(o[c])]=function(e){return function(r){if(!t(r))throw new TypeError(e+" must be a Number");this[e]=Number(r)}}(o[c]);for(var f=0;f<i.length;f++)a.prototype["get"+e(i[f])]=r(i[f]),a.prototype["set"+e(i[f])]=function(t){return function(e){this[t]=String(e)}}(i[f]);return a})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["Script error","Script error.","InvalidAccessError"];e.default=function(t){var e=t.errors[0];return""===e.type&&-1!==n.indexOf(e.message)?null:e.backtrace&&e.backtrace.length>0&&"<anonymous>"===e.backtrace[0].file?null:t}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t,e;return function(r){var n=JSON.stringify(r.errors);return n===t?null:(e&&clearTimeout(e),t=n,e=setTimeout(function(){t=""},1e3),r)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=new RegExp(["^","Uncaught\\s","(.+?)",":\\s","(.+)","$"].join(""));e.default=function(t){var e=t.errors[0];if(""!==e.type&&"Error"!==e.type)return t;var r=e.message.match(n);return null!==r&&(e.type=r[1],e.message=r[2]),t}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=new RegExp(["^","\\[(\\$.+)\\]","\\s","([\\s\\S]+)","$"].join(""));e.default=function(t){var e=t.errors[0];if(""!==e.type&&"Error"!==e.type)return t;var r=e.message.match(n);return null!==r&&(e.type=r[1],e.message=r[2]),t}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return window.navigator&&window.navigator.userAgent&&(t.context.userAgent=window.navigator.userAgent),window.location&&(t.context.url=String(window.location),t.context.rootDirectory=window.location.protocol+"//"+window.location.host),t}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e;try{e=r(19)}catch(t){}return e&&(t.context.os=e.type()+"/"+e.release(),t.context.architecture=e.arch(),t.context.hostname=e.hostname(),t.params.os={homedir:e.homedir(),uptime:e.uptime(),freemem:e.freemem(),totalmem:e.totalmem(),loadavg:e.loadavg()}),process&&(t.context.platform=process.platform,t.context.rootDirectory||(t.context.rootDirectory=process.cwd()),t.params.process={pid:process.pid,cwd:process.cwd(),execPath:process.execPath,argv:process.argv},["uptime","cpuUsage","memoryUsage"].map(function(e){process[e]&&(t.params.process[e]=process[e]())})),t}},function(e,r){if(void 0===t){var n=new Error("Cannot find module 'undefined'");throw n.code="MODULE_NOT_FOUND",n}e.exports=t},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(21),o=r(0),i=0;e.request=function(t){if(Date.now()/1e3<i)return Promise.reject(o.errors.ipRateLimited);var e={method:t.method,body:t.body};return n(t.url,e).then(function(t){if(401===t.status)throw o.errors.unauthorized;if(429===t.status){var e=t.headers.get("X-RateLimit-Delay");if(!e)throw o.errors.ipRateLimited;var r=parseInt(e,10);throw r>0&&(i=Date.now()/1e3+r),o.errors.ipRateLimited}return 204===t.status?{json:null}:t.status>=200&&t.status<300?t.json().then(function(t){return{json:t}}):t.status>=400&&t.status<500?t.json().then(function(t){throw new Error(t.message)}):t.text().then(function(e){throw new Error("airbrake: fetch: unexpected response: code="+t.status+" body='"+e+"'")})})}},function(t,r){t.exports=e},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0);e.makeRequester=function(t){return function(e){return function(t,e){return Date.now()/1e3<o?Promise.reject(n.errors.ipRateLimited):new Promise(function(r,i){e({url:t.url,method:t.method,body:t.body,headers:{"content-type":"application/json"},timeout:t.timeout},function(t,e,s){if(t)i(t);else if(e.statusCode)if(401!==e.statusCode)if(429!==e.statusCode)if(204!==e.statusCode)if(e.statusCode>=200&&e.statusCode<300){var a=void 0;try{a=JSON.parse(s)}catch(c){return void i(c)}r(a)}else if(e.statusCode>=400&&e.statusCode<500){var a=void 0;try{a=JSON.parse(s)}catch(c){return void i(c)}var u=new Error(a.message);i(u)}else{s=s.trim();var c=new Error("airbrake: node: unexpected response: code="+e.statusCode+" body='"+s+"'");i(c)}else r({json:null});else{i(n.errors.ipRateLimited);var f=e.headers["x-ratelimit-delay"];if(!f)return;var l=void 0;if("string"==typeof f)l=f;else{if(!(f instanceof Array))return;l=f[0]}var h=parseInt(l,10);h>0&&(o=Date.now()/1e3+h)}else i(n.errors.unauthorized);else{var p=new Error("airbrake: request: response statusCode is "+e.statusCode);i(p)}})})}(e,t)}};var o=0},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(24),o=["debug","log","info","warn","error"],i=function(){function t(t){void 0===t&&(t={});var e=this;if(this.historyMaxLen=20,this.notifiers=[],this.errors=[],this.ignoreWindowError=0,this.history=[],this.ignoreNextXHR=0,s(t.console)&&"object"==typeof console&&console.error&&(this.consoleError=console.error),"object"==typeof window){if(s(t.onerror)){var r=this,n=window.onerror;window.onerror=function(){n&&n.apply(this,arguments),r.onerror.apply(r,arguments)}}this.domEvents(),s(t.fetch)&&"function"==typeof fetch&&this.fetch(),s(t.history)&&"object"==typeof history&&this.location()}"object"==typeof process&&"function"==typeof process.on&&(process.on("uncaughtException",function(t){e.notify(t).then(function(){1===process.listeners("uncaughtException").length&&(e.consoleError&&e.consoleError("uncaught exception",t),process.exit(1))})}),process.on("unhandledRejection",function(t,r){var n=t.message||String(t);n.indexOf&&0===n.indexOf("airbrake: ")||e.notify(t).then(function(){1===process.listeners("unhandledRejection").length&&(e.consoleError&&e.consoleError("unhandled rejection",t),process.exit(1))})})),s(t.console)&&"object"==typeof console&&this.console(),s(t.xhr)&&"undefined"!=typeof XMLHttpRequest&&this.xhr()}return t.instance=function(e){return void 0===e&&(e={}),t._instance||(t._instance=new t(e)),t._instance},t.prototype.registerNotifier=function(t){this.notifiers.push(t);for(var e=0,r=this.errors;e<r.length;e++){var n=r[e];this.notifyNotifiers(n)}this.errors=[]},t.prototype.unregisterNotifier=function(t){var e=this.notifiers.indexOf(t);-1!==e&&this.notifiers.splice(e,1)},t.prototype.notify=function(t){return this.notifiers.length>0?this.notifyNotifiers(t):(this.errors.push(t),this.errors.length>this.historyMaxLen&&(this.errors=this.errors.slice(-this.historyMaxLen)),Promise.resolve({}))},t.prototype.notifyNotifiers=function(t){for(var e=[],r=0,n=this.notifiers;r<n.length;r++){var o=n[r];e.push(o.notify(t))}return Promise.all(e).then(function(t){return t[0]})},t.prototype.onerror=function(t,e,r,n,o){this.ignoreWindowError>0||(o?this.notify({error:o,context:{windowError:!0}}):e&&r&&this.notify({error:{message:t,fileName:e,lineNumber:r,columnNumber:n,noStack:!0},context:{windowError:!0}}))},t.prototype.ignoreNextWindowError=function(){var t=this;this.ignoreWindowError++,setTimeout(function(){return t.ignoreWindowError--})},t.prototype.getHistory=function(){return this.history},t.prototype.pushHistory=function(t){this.isDupState(t)?this.lastState.num?this.lastState.num++:this.lastState.num=2:(t.date||(t.date=new Date),this.history.push(t),this.lastState=t,this.history.length>this.historyMaxLen&&(this.history=this.history.slice(-this.historyMaxLen)))},t.prototype.isDupState=function(t){if(!this.lastState)return!1;for(var e in t)if(t.hasOwnProperty(e)&&"date"!==e&&t[e]!==this.lastState[e])return!1;return!0},t.prototype.domEvents=function(){var t=n.makeEventHandler(this);window.addEventListener&&(window.addEventListener("load",t),window.addEventListener("error",function(e){"error"in e||t(e)},!0)),"object"==typeof document&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",t),document.addEventListener("click",t),document.addEventListener("keypress",t))},t.prototype.console=function(){for(var t=this,e=function(e){if(!(e in console))return"continue";var r=console[e],n=function(){r.apply(console,arguments),t.pushHistory({type:"log",severity:e,arguments:Array.prototype.slice.call(arguments)})};n.inner=r,console[e]=n},r=0,n=o;r<n.length;r++){e(n[r])}},t.prototype.unwrapConsole=function(){for(var t=0,e=o;t<e.length;t++){var r=e[t];r in console&&console[r].inner&&(console[r]=console[r].inner)}},t.prototype.fetch=function(){var t=this,e=window.fetch;window.fetch=function(r,n){var o={type:"xhr",date:new Date};return o.url="string"==typeof r?r:r.url,n&&n.method?o.method=n.method:o.method="GET",t.ignoreNextXHR++,setTimeout(function(){return t.ignoreNextXHR--}),e.apply(this,arguments).then(function(e){return o.statusCode=e.status,o.duration=(new Date).getTime()-o.date.getTime(),t.pushHistory(o),e}).catch(function(e){throw o.error=e,o.duration=(new Date).getTime()-o.date.getTime(),t.pushHistory(o),e})}},t.prototype.xhr=function(){var t=this,e=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(r,n,o,i,s){0===t.ignoreNextXHR&&(this.__state={type:"xhr",method:r,url:n}),e.apply(this,arguments)};var r=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(e){var n=this.onreadystatechange;return this.onreadystatechange=function(e){if(4===this.readyState&&this.__state&&t.recordReq(this),n)return n.apply(this,arguments)},this.__state&&(this.__state.date=new Date),r.apply(this,arguments)}},t.prototype.recordReq=function(t){var e=t.__state;e.statusCode=t.status,e.duration=(new Date).getTime()-e.date.getTime(),this.pushHistory(e)},t.prototype.location=function(){this.lastLocation=document.location.pathname;var t=this,e=window.onpopstate;window.onpopstate=function(r){if(t.recordLocation(document.location.pathname),e)return e.apply(this,arguments)};var r=history.pushState;history.pushState=function(e,n,o){o&&t.recordLocation(o.toString()),r.apply(this,arguments)}},t.prototype.recordLocation=function(t){var e=t.indexOf("://");e>=0?(e=(t=t.slice(e+3)).indexOf("/"),t=e>=0?t.slice(e):"/"):"/"!==t.charAt(0)&&(t="/"+t),this.pushHistory({type:"location",from:this.lastLocation,to:t}),this.lastLocation=t},t}();function s(t){return void 0===t||!0===t}e.Historian=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["type","name","src"];function o(t){if(!t)return"";var e=[];if(t.tagName&&e.push(t.tagName.toLowerCase()),t.id&&(e.push("#"),e.push(t.id)),t.classList)e.push("."),e.push(Array.from(t.classList).join("."));else if(t.className){var r=function(t){if(t.split)return t.split(" ").join(".");if(t.baseVal&&t.baseVal.split)return t.baseVal.split(" ").join(".");return console.log("unsupported HTMLElement.className type",typeof t),""}(t.className);""!==r&&(e.push("."),e.push(r))}if(t.getAttribute)for(var o=0,i=n;o<i.length;o++){var s=i[o],a=t.getAttribute(s);a&&e.push("["+s+'="'+a+'"]')}return e.join("")}e.makeEventHandler=function(t){return function(e){var r;try{r=e.target}catch(t){return}if(r){var n={type:e.type};try{n.target=function(t){for(var e=[],r=t;r;){var n=o(r);if(""!==n&&(e.push(n),e.length>10))break;r=r.parentNode}return 0===e.length?String(t):e.reverse().join(" > ")}(r)}catch(t){n.target="<"+t.toString()+">"}t.pushHistory(n)}}}},function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=function(){function t(t){this.m={},this.opts=t,this.url=this.opts.host+"/api/v5/projects/"+this.opts.projectId+"/routes-stats?key="+this.opts.projectKey,this.requester=o.makeRequester(this.opts)}return t.prototype.notifyRequest=function(t){var e=this,r=function(t,e){if(t instanceof Date&&e instanceof Date)return e.getTime()-t.getTime();if("number"==typeof t&&"number"==typeof e)return e-t;if(t instanceof Array&&e instanceof Array){var r=e[0]-t[0];return r+=(e[1]-t[1])/s}throw new Error("unsupported type: "+typeof t)}(t.start,t.end);0===r&&(r=.1);t.start=new Date(6e4*Math.floor(function(t){if(t instanceof Date)return t.getTime();if("number"==typeof t)return t;if(t instanceof Array)return t[0]+t[1]/s;throw new Error("unsupported type: "+typeof t)}(t.start)/6e4));var n,o={method:t.method,route:t.route,statusCode:t.statusCode,time:t.start},i=JSON.stringify(o);i in this.m?n=this.m[i]:(n={count:0,sum:0,sumsq:0},this.opts.TDigest&&(n.tdigest=new this.opts.TDigest),this.m[i]=n),n.count++,n.sum+=r,n.sumsq+=r*r,n.tdigest&&n.tdigest.push(r),this.timer||(this.timer=setTimeout(function(){e.flush()},15e3))},t.prototype.flush=function(){var t=[];for(var e in this.m)if(this.m.hasOwnProperty(e)){var r=JSON.parse(e),o=n({},r,this.m[e]);o.tdigest&&(o.tdigestCentroids=this.tdigestCentroids(o.tdigest),delete o.tdigest),t.push(o)}this.m={},this.timer=null;var i={method:"POST",url:this.url,body:JSON.stringify({routes:t})};this.requester(i).then(function(t){}).catch(function(t){console.error&&console.error("can not report routes stats",t)})},t.prototype.tdigestCentroids=function(t){var e=[],r=[];return t.centroids.each(function(t){e.push(t.mean),r.push(t.n)}),{mean:e,count:r}},t}();e.Routes=i;var s=1e6}])});
//# sourceMappingURL=client.min.js.map