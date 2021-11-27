"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[704],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,f=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9232:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Server",sidebar_label:"Server",hide_title:!1},l=void 0,p={unversionedId:"Server",id:"version-v1/Server",isDocsHomePage:!1,title:"Server",description:"Factory",source:"@site/versioned_docs/version-v1/Server.md",sourceDirName:".",slug:"/Server",permalink:"/website-next/docs/v1/Server",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v1/Server.md",tags:[],version:"v1",frontMatter:{title:"Server",sidebar_label:"Server",hide_title:!1},sidebar:"version-v1/sidebar",previous:{title:"Routes",permalink:"/website-next/docs/v1/Routes"},next:{title:"Testing",permalink:"/website-next/docs/v1/Testing"}},d=[{value:"<code>http2</code> (Status: experimental)",id:"http2-status-experimental",children:[],level:3},{value:"<code>https</code>",id:"https",children:[],level:3},{value:"<code>ignoreTrailingSlash</code>",id:"ignoretrailingslash",children:[],level:3},{value:"<code>maxParamLength</code>",id:"maxparamlength",children:[],level:3},{value:"<code>bodyLimit</code>",id:"bodylimit",children:[],level:3},{value:"<code>onProtoPoisoning</code>",id:"onprotopoisoning",children:[],level:3},{value:"<code>logger</code>",id:"logger",children:[],level:3},{value:"<code>serverFactory</code>",id:"serverfactory",children:[],level:3},{value:"<code>caseSensitive</code>",id:"casesensitive",children:[],level:3},{value:"<code>requestIdHeader</code>",id:"requestidheader",children:[],level:3},{value:"<code>trustProxy</code>",id:"trustproxy",children:[],level:3},{value:"<code>versioning</code>",id:"versioning",children:[],level:3},{value:"Instance",id:"instance",children:[{value:"Server Methods",id:"server-methods",children:[{value:"server",id:"server",children:[],level:4},{value:"after",id:"after",children:[],level:4},{value:"ready",id:"ready",children:[],level:4},{value:"listen",id:"listen",children:[],level:4},{value:"route",id:"route",children:[],level:4},{value:"close",id:"close",children:[],level:4},{value:"decorate",id:"decorate",children:[],level:4},{value:"register",id:"register",children:[],level:4},{value:"use",id:"use",children:[],level:4},{value:"addHook",id:"addhook",children:[],level:4},{value:"basepath",id:"basepath",children:[],level:4},{value:"log",id:"log",children:[],level:4},{value:"inject",id:"inject",children:[],level:4},{value:"addSchema",id:"addschema",children:[],level:4},{value:"setSchemaCompiler",id:"setschemacompiler",children:[],level:4},{value:"setNotFoundHandler",id:"setnotfoundhandler",children:[],level:4},{value:"setErrorHandler",id:"seterrorhandler",children:[],level:4},{value:"printRoutes",id:"printroutes",children:[],level:4}],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"factory"}),"## Factory",(0,i.kt)("p",null,"The Fastify module exports a factory function that is used to create new"),(0,i.kt)("a",{href:"https://github.com/fastify/fastify/blob/master/docs/Server.md"},(0,i.kt)("code",null,(0,i.kt)("b",null,"Fastify server"))),"instances. This factory function accepts an options object which is used to customize the resulting instance. This document describes the properties available in that options object.",(0,i.kt)("h3",{id:"http2-status-experimental"},(0,i.kt)("inlineCode",{parentName:"h3"},"http2")," (Status: experimental)"),(0,i.kt)("a",{name:"factory-http2"}),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," Node.js core's ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v8.x/docs/api/http2.html"},"HTTP/2")," module is used for binding the socket."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h3",{id:"https"},(0,i.kt)("inlineCode",{parentName:"h3"},"https")),(0,i.kt)("a",{name:"factory-https"}),(0,i.kt)("p",null,"An object used to configure the server's listening socket for TLS. The options\nare the same as the Node.js core\n",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v8.x/docs/api/https.html#https_https_createserver_options_requestlistener"},(0,i.kt)("inlineCode",{parentName:"a"},"createServer")," method"),".\nWhen this property is ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", the socket will not be configured for TLS."),(0,i.kt)("p",null,"This option also applies when the"),(0,i.kt)("a",{href:"https://github.com/fastify/fastify/blob/master/docs/Server.md#factory-http2"},(0,i.kt)("code",null,(0,i.kt)("b",null,"http2")))," option is set.",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"null"))),(0,i.kt)("h3",{id:"ignoretrailingslash"},(0,i.kt)("inlineCode",{parentName:"h3"},"ignoreTrailingSlash")),(0,i.kt)("a",{name:"factory-ignore-slash"}),(0,i.kt)("p",null,"Fastify uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/delvedor/find-my-way"},"find-my-way")," to handle\nrouting. This option may be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to ignore trailing slashes in routes.\nThis option applies to ",(0,i.kt)("em",{parentName:"p"},"all")," route registrations for the resulting server\ninstance."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')({\n  ignoreTrailingSlash: true\n})\n\n// registers both \"/foo\" and \"/foo/\"\nfastify.get('/foo/', function (req, reply) {\n  res.send('foo')\n})\n\n// registers both \"/bar\" and \"/bar/\"\nfastify.get('/bar', function (req, reply) {\n  res.send('bar')\n})\n")),(0,i.kt)("h3",{id:"maxparamlength"},(0,i.kt)("inlineCode",{parentName:"h3"},"maxParamLength")),(0,i.kt)("a",{name:"factory-max-param-length"}),(0,i.kt)("p",null,"You can set a custom length for parameters in parametric (standard, regex and multi) routes by using ",(0,i.kt)("inlineCode",{parentName:"p"},"maxParamLength")," option, the default value is 100 characters.",(0,i.kt)("br",null),"\nThis can be useful especially if you have some regex based route, protecting you against ",(0,i.kt)("a",{parentName:"p",href:"https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS"},"DoS attacks"),".",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"If the maximum length limit is reached, the not found route will be invoked.")),(0,i.kt)("h3",{id:"bodylimit"},(0,i.kt)("inlineCode",{parentName:"h3"},"bodyLimit")),(0,i.kt)("a",{name:"factory-body-limit"}),(0,i.kt)("p",null,"Defines the maximum payload, in bytes, the server is allowed to accept."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1048576")," (1MiB)")),(0,i.kt)("h3",{id:"onprotopoisoning"},(0,i.kt)("inlineCode",{parentName:"h3"},"onProtoPoisoning")),(0,i.kt)("a",{name:"factory-on-proto-poisoning"}),(0,i.kt)("p",null,"Defines what action the framework must take when parsing a JSON object\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"__proto__"),". This functionality is provided by\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hapijs/bourne"},"bourne"),".\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://hueniverse.com/a-tale-of-prototype-poisoning-2610fa170061"},"https://hueniverse.com/a-tale-of-prototype-poisoning-2610fa170061"),"\nfor more details about prototype poisoning attacks."),(0,i.kt)("p",null,"Possible values are ",(0,i.kt)("inlineCode",{parentName:"p"},"'error'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'remove'")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"'ignore'"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'error'"))),(0,i.kt)("h3",{id:"logger"},(0,i.kt)("inlineCode",{parentName:"h3"},"logger")),(0,i.kt)("a",{name:"factory-logger"}),(0,i.kt)("p",null,"Fastify includes built-in logging via the ",(0,i.kt)("a",{parentName:"p",href:"https://getpino.io/"},"Pino")," logger.\nThis property is used to configure the internal logger instance."),(0,i.kt)("p",null,"The possible values this property may have are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". The logger is disabled. All logging methods will point to a\nnull logger ",(0,i.kt)("a",{parentName:"p",href:"https://npm.im/abstract-logging"},"abstract-logging")," instance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"pinoInstance"),": a previously instantiated instance of Pino. The internal\nlogger will point to this instance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"object"),": a standard Pino ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino/blob/c77d8ec5ce/docs/API.md#constructor"},"options object"),".\nThis will be passed directly to the Pino constructor. If the following properties\nare not present on the object, they will be added accordingly:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"* `genReqId`: a synchronous function that will be used to generate identifiers\nfor incoming requests. The default function generates sequential identifiers.\n* `level`: the minimum logging level. If not set, it will be set to `'info'`.\n* `serializers`: a hash of serialization functions. By default, serializers\n  are added for `req` (incoming request objects), `res` (outgoing repsonse\n  objets), and `err` (standard `Error` objects). When a log method receives\n  an object with any of these properties then the respective serializer will\n  be used for that property. For example:\n    ```js\n    fastify.get('/foo', function (req, res) {\n      req.log.info({req}) // log the serialized request object\n      res.send('foo')\n    })\n    ```\n  Any user supplied serializer will override the default serializer of the\n  corresponding property.\n")))),(0,i.kt)("h3",{id:"serverfactory"},(0,i.kt)("inlineCode",{parentName:"h3"},"serverFactory")),(0,i.kt)("a",{name:"custom-http-server"}),(0,i.kt)("p",null,"You can pass a custom http server to Fastify by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"serverFactory")," option.",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"serverFactory")," is a function that takes an ",(0,i.kt)("inlineCode",{parentName:"p"},"handler")," parameter, which takes the ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"response")," objects as parameters, and an options object, which is the same you have passed to Fastify."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const serverFactory = (handler, opts) => {\n  const server = http.createServer((req, res) => {\n    handler(req, res)\n  })\n\n  return server\n}\n\nconst fastify = Fastify({ serverFactory })\n\nfastify.get('/', (req, reply) => {\n  reply.send({ hello: 'world' })\n})\n\nfastify.listen(3000)\n")),(0,i.kt)("p",null,"Internally Fastify uses the API of Node core http server, so if you are using a custom server you must be sure to have the same API exposed. If not, you can enhance the server instance inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"serverFactory")," function before the ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement."),(0,i.kt)("h3",{id:"casesensitive"},(0,i.kt)("inlineCode",{parentName:"h3"},"caseSensitive")),(0,i.kt)("a",{name:"factory-case-sensitive"}),(0,i.kt)("p",null,"By default, value equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", routes are registered as case sensitive. That is, ",(0,i.kt)("inlineCode",{parentName:"p"},"/foo")," is not equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"/Foo"),". When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", routes are registered in a fashion such that ",(0,i.kt)("inlineCode",{parentName:"p"},"/foo")," is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"/Foo")," which is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"/FOO"),"."),(0,i.kt)("p",null,"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"caseSensitive")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," will also result in\nall params (and all value matched by regexps) to be lowercased as well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/user/:username', (request, reply) => {\n  // Given the URL: /user/NodeJS\n  console.log(request.params.username) // -> 'nodejs'\n})\n")),(0,i.kt)("p",null,"Please note this setting this option to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," goes against\n",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3986#section-6.2.2.1"},"RFC3986"),"."),(0,i.kt)("h3",{id:"requestidheader"},(0,i.kt)("inlineCode",{parentName:"h3"},"requestIdHeader")),(0,i.kt)("a",{name:"factory-request-id-header"}),(0,i.kt)("p",null,"The header name used to know the request id. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Logging.md#logging-request-id"},"the request id")," section."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'request-id'"))),(0,i.kt)("h3",{id:"trustproxy"},(0,i.kt)("inlineCode",{parentName:"h3"},"trustProxy")),(0,i.kt)("a",{name:"factory-trust-proxy"}),(0,i.kt)("p",null,"By enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"trustProxy")," option, Fastify will have knowledge that it's sitting behind a proxy and that the ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Forwarded-*")," header fields may be trusted, which otherwise may be easily spoofed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = Fastify({ trustProxy: true })\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"true/false"),": Trust all proxies (",(0,i.kt)("inlineCode",{parentName:"li"},"true"),") or do not trust any proxies (",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Trust only given IP/CIDR (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"'127.0.0.1'"),"). May be a list of comma separated values (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"'127.0.0.1,192.168.1.1/24'"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Array<string>"),": Trust only given IP/CIDR list (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"['127.0.0.1']"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),": Trust the nth hop from the front-facing proxy server as the client."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Function"),": Custom trust function that takes ",(0,i.kt)("inlineCode",{parentName:"li"},"address")," as first arg",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function myTrustFn(address, hop) {\n  return address === '1.2.3.4' || hop === 1\n}\n")))),(0,i.kt)("p",null,"For more examples refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/proxy-addr"},"proxy-addr")," package."),(0,i.kt)("p",null,"You may also access ",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname")," values from raw ",(0,i.kt)("inlineCode",{parentName:"p"},"request"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/', (request, reply) => {\n  console.log(request.raw.ip)\n  console.log(request.raw.hostname)\n})\n")),(0,i.kt)("a",{name:"plugin-timeout"}),"### `pluginTimeout`",(0,i.kt)("p",null,"The maximum amount of time in milliseconds in which a plugin can load.\nIf not, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Server.md#ready"},(0,i.kt)("inlineCode",{parentName:"a"},"ready")),"\nwill complete with an ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," with code ",(0,i.kt)("inlineCode",{parentName:"p"},"'ERR_AVVIO_PLUGIN_TIMEOUT'"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," (disabled)")),(0,i.kt)("h3",{id:"versioning"},(0,i.kt)("inlineCode",{parentName:"h3"},"versioning")),(0,i.kt)("a",{name:"versioning"}),(0,i.kt)("p",null,"By default you can version your routes with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Routes.md#version"},"semver versioning"),", which is provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"find-my-way"),". There is still an option to provide custom versioning strategy. You can find more information in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/delvedor/find-my-way#versioned-routes"},"find-my-way")," documentation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const versioning = {\n  storage: function () {\n    let versions = {}\n    return {\n      get: (version) => { return versions[version] || null },\n      set: (version, store) => { versions[version] = store },\n      del: (version) => { delete versions[version] },\n      empty: () => { versions = {} }\n    }\n  },\n  deriveVersion: (req, ctx) => {\n    return req.headers['accept']\n  }\n}\n\nconst fastify = require('fastify')({\n  versioning\n})\n")),(0,i.kt)("h2",{id:"instance"},"Instance"),(0,i.kt)("h3",{id:"server-methods"},"Server Methods"),(0,i.kt)("h4",{id:"server"},"server"),(0,i.kt)("a",{name:"server"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.server"),": The Node core ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#http_class_http_server"},"server")," object as returned by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Server.md"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Fastify factory function"))),"."),(0,i.kt)("h4",{id:"after"},"after"),(0,i.kt)("a",{name:"after"}),(0,i.kt)("p",null,"Invoked when the current plugin and all the plugins\nthat have been registered within it have finished loading.\nIt is always executed before the method ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify.ready"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify\n  .register((instance, opts, next) => {\n    console.log('Current plugin')\n    next()\n  })\n  .after(err => {\n    console.log('After current plugin')\n  })\n  .register((instance, opts, next) => {\n    console.log('Next plugin')\n    next()\n  })\n  .ready(err => {\n    console.log('Everything has been loaded')\n  })\n")),(0,i.kt)("h4",{id:"ready"},"ready"),(0,i.kt)("a",{name:"ready"}),(0,i.kt)("p",null,"Function called when all the plugins have been loaded.\nIt takes an error parameter if something went wrong."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.ready(err => {\n  if (err) throw err\n})\n")),(0,i.kt)("p",null,"If it is called without any arguments, it will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.ready().then(() => {\n  console.log('successfully booted!')\n}, (err) => {\n  console.log('an error happened', err)\n})\n")),(0,i.kt)("h4",{id:"listen"},"listen"),(0,i.kt)("a",{name:"listen"}),(0,i.kt)("p",null,"Starts the server on the given port after all the plugins are loaded, internally waits for the ",(0,i.kt)("inlineCode",{parentName:"p"},".ready()")," event. The callback is the same as the Node core. By default, the server will listen on the address resolved by ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," when no specific address is provided (",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"::1")," depending on the operating system). If listening on any available interface is desired, then specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," for the address will listen on all IPv4 address. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"::")," for the address will listen on all IPv6 addresses, and, depending on OS, may also listen on all IPv4 addresses. Be careful when deciding to listen on all interfaces; it comes with inherent ",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20170831174611/https://snyk.io/blog/mongodb-hack-and-secure-defaults/"},"security risks"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.listen(3000, (err, address) => {\n  if (err) {\n    fastify.log.error(err)\n    process.exit(1)\n  }\n})\n")),(0,i.kt)("p",null,"Specifying an address is also supported:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.listen(3000, '127.0.0.1', (err, address) => {\n  if (err) {\n    fastify.log.error(err)\n    process.exit(1)\n  }\n})\n")),(0,i.kt)("p",null,"Specifying a backlog queue size is also supported:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.listen(3000, '127.0.0.1', 511, (err, address) => {\n  if (err) {\n    fastify.log.error(err)\n    process.exit(1)\n  }\n})\n")),(0,i.kt)("p",null,"If no callback is provided a Promise is returned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.listen(3000)\n  .then((address) => console.log(`server listening on ${address}`))\n  .catch(err => {\n    console.log('Error starting server:', err)\n    process.exit(1)\n  })\n")),(0,i.kt)("p",null,"Specifying an address without a callback is also supported:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.listen(3000, '127.0.0.1')\n  .then((address) => console.log(`server listening on ${address}`))\n  .catch(err => {\n    console.log('Error starting server:', err)\n    process.exit(1)\n  })\n")),(0,i.kt)("p",null,"When deploying to a Docker, and potentially other, containers, it is advisable to listen on ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," because they do not default to exposing mapped ports to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.listen(3000, '0.0.0.0', (err, address) => {\n  if (err) {\n    fastify.log.error(err)\n    process.exit(1)\n  }\n})\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"port")," is omitted (or is set to zero), a random available port is automatically chosen (later available via ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify.server.address().port"),")."),(0,i.kt)("h4",{id:"route"},"route"),(0,i.kt)("a",{name:"route"}),(0,i.kt)("p",null,"Method to add routes to the server, it also has shorthand functions, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Routes.md"},"here"),"."),(0,i.kt)("h4",{id:"close"},"close"),(0,i.kt)("a",{name:"close"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.close(callback)"),": call this function to close the server instance and run the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Hooks.md#on-close"},(0,i.kt)("inlineCode",{parentName:"a"},"'onClose'"))," hook.",(0,i.kt)("br",null),"\nCalling ",(0,i.kt)("inlineCode",{parentName:"p"},"close")," will also cause the server to respond to every new incoming request with a ",(0,i.kt)("inlineCode",{parentName:"p"},"503")," error and destroy that request."),(0,i.kt)("h4",{id:"decorate"},"decorate"),(0,i.kt)("a",{name:"decorate"}),(0,i.kt)("p",null,"Function useful if you need to decorate the fastify instance, Reply or Request, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Decorators.md"},"here"),"."),(0,i.kt)("h4",{id:"register"},"register"),(0,i.kt)("a",{name:"register"}),(0,i.kt)("p",null,"Fastify allows the user to extend its functionality with plugins.\nA plugin can be a set of routes, a server decorator or whatever, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Plugins.md"},"here"),"."),(0,i.kt)("h4",{id:"use"},"use"),(0,i.kt)("a",{name:"use"}),(0,i.kt)("p",null,"Function to add middlewares to Fastify, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Middlewares.md"},"here"),"."),(0,i.kt)("h4",{id:"addhook"},"addHook"),(0,i.kt)("a",{name:"addHook"}),(0,i.kt)("p",null,"Function to add a specific hook in the lifecycle of Fastify, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Hooks.md"},"here"),"."),(0,i.kt)("h4",{id:"basepath"},"basepath"),(0,i.kt)("a",{name:"base-path"}),(0,i.kt)("p",null,"The full path that will be prefixed to a route."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register(function (instance, opts, next) {\n  instance.get('/foo', function (request, reply) {\n    // Will log \"basePath: /v1\"\n    request.log.info('basePath: %s', instance.basePath)\n    reply.send({basePath: instance.basePath})\n  })\n\n  instance.register(function (instance, opts, next) {\n    instance.get('/bar', function (request, reply) {\n      // Will log \"basePath: /v1/v2\"\n      request.log.info('basePath: %s', instance.basePath)\n      reply.send({basePath: instance.basePath})\n    })\n\n    next()\n  }, { prefix: '/v2' })\n\n  next()\n}, { prefix: '/v1' })\n")),(0,i.kt)("h4",{id:"log"},"log"),(0,i.kt)("a",{name:"log"}),(0,i.kt)("p",null,"The logger instance, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Logging.md"},"here"),"."),(0,i.kt)("h4",{id:"inject"},"inject"),(0,i.kt)("a",{name:"inject"}),(0,i.kt)("p",null,"Fake http injection (for testing purposes) ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Testing.md#inject"},"here"),"."),(0,i.kt)("h4",{id:"addschema"},"addSchema"),(0,i.kt)("a",{name:"add-schema"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.addSchema(schemaObj)"),", adds a shared schema to the Fastify instance. This allows you to reuse it everywhere in your application just by writing the schema id that you need.",(0,i.kt)("br",null),"\nTo learn more, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Validation-and-Serialization.md#shared-schema"},"shared schema example")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Validation-and-Serialization.md"},"Validation and Serialization")," documentation."),(0,i.kt)("h4",{id:"setschemacompiler"},"setSchemaCompiler"),(0,i.kt)("a",{name:"set-schema-compiler"}),(0,i.kt)("p",null,"Set the schema compiler for all routes ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Validation-and-Serialization.md#schema-compiler"},"here"),"."),(0,i.kt)("h4",{id:"setnotfoundhandler"},"setNotFoundHandler"),(0,i.kt)("a",{name:"set-not-found-handler"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.setNotFoundHandler(handler(request, reply))"),": set the 404 handler. This call is encapsulated by prefix, so different plugins can set different not found handlers if a different ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Plugins.md#route-prefixing-option"},(0,i.kt)("inlineCode",{parentName:"a"},"prefix")," option")," is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify.register()"),". The handler is treated like a regular route handler so requests will go through the full ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/docs/Lifecycle.md#lifecycle"},"Fastify lifecycle"),"."),(0,i.kt)("p",null,"You can also register ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Hooks/#beforehandler"},"beforeHandler")," hook for the 404 handler."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.setNotFoundHandler({\n  beforeHandler: (req, reply, next) => {\n    req.body.beforeHandler = true\n    next()\n  }\n}, function (request, reply) {\n    // Default not found handler with beforeHandler hook\n})\n\nfastify.register(function (instance, options, next) {\n  instance.setNotFoundHandler(function (request, reply) {\n    // Handle not found request without beforeHandler hook\n    // to URLs that begin with '/v1'\n  })\n  next()\n}, { prefix: '/v1' })\n")),(0,i.kt)("h4",{id:"seterrorhandler"},"setErrorHandler"),(0,i.kt)("a",{name:"set-error-handler"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.setErrorHandler(handler(error, request, reply))"),": Set a function that will be called whenever an error happens. The handler is fully encapsulated, so different plugins can set different error handlers. ",(0,i.kt)("em",{parentName:"p"},"async-await")," is supported as well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.setErrorHandler(function (error, request, reply) {\n  // Send error response\n})\n")),(0,i.kt)("h4",{id:"printroutes"},"printRoutes"),(0,i.kt)("a",{name:"print-routes"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.printRoutes()"),": Prints the representation of the internal radix tree used by the router, useful for debugging.",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"Remember to call it inside or after a ",(0,i.kt)("inlineCode",{parentName:"em"},"ready")," call.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/test', () => {})\nfastify.get('/test/hello', () => {})\nfastify.get('/hello/world', () => {})\n\nfastify.ready(() => {\n  console.log(fastify.printRoutes())\n  // \u2514\u2500\u2500 /\n  //   \u251c\u2500\u2500 test (GET)\n  //   \u2502   \u2514\u2500\u2500 /hello (GET)\n  //   \u2514\u2500\u2500 hello/world (GET)\n})\n")))}u.isMDXComponent=!0}}]);