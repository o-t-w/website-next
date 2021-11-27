"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[1848],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3204:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Routes",sidebar_label:"Routes",hide_title:!1},s=void 0,p={unversionedId:"Routes",id:"version-v1/Routes",isDocsHomePage:!1,title:"Routes",description:"You have two ways to declare a route with Fastify, the shorthand method and the full declaration. Let's start with the second one:",source:"@site/versioned_docs/version-v1/Routes.md",sourceDirName:".",slug:"/Routes",permalink:"/website-next/docs/v1/Routes",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v1/Routes.md",tags:[],version:"v1",frontMatter:{title:"Routes",sidebar_label:"Routes",hide_title:!1},sidebar:"version-v1/sidebar",previous:{title:"Request",permalink:"/website-next/docs/v1/Request"},next:{title:"Server",permalink:"/website-next/docs/v1/Server"}},u=[{value:"Full declaration",id:"full-declaration",children:[],level:3},{value:"Shorthand declaration",id:"shorthand-declaration",children:[],level:3},{value:"Url building",id:"url-building",children:[],level:3},{value:"Async Await",id:"async-await",children:[],level:3},{value:"Promise resolution",id:"promise-resolution",children:[],level:3},{value:"Route Prefixing",id:"route-prefixing",children:[],level:3},{value:"Custom Log Level",id:"custom-log-level",children:[],level:3},{value:"Config",id:"config",children:[],level:3},{value:"Version",id:"version",children:[{value:"Default",id:"default",children:[],level:4},{value:"Custom",id:"custom",children:[],level:4}],level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You have two ways to declare a route with Fastify, the shorthand method and the full declaration. Let's start with the second one:"),(0,i.kt)("h3",{id:"full-declaration"},"Full declaration"),(0,i.kt)("a",{name:"full-declaration"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.route(options)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"method"),": currently it supports ",(0,i.kt)("inlineCode",{parentName:"p"},"'DELETE'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'GET'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'HEAD'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'PATCH'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'POST'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'PUT'")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"'OPTIONS'"),". It could also be an array of methods.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"url"),": the path of the url to match this route (alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"schema"),": an object containing the schemas for the request and response.\nThey need to be in\n",(0,i.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON Schema")," format, check ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Validation-and-Serialization"},"here")," for more info."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"body"),": validates the body of the request if it is a POST or a\nPUT."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"querystring"),": validates the querystring. This can be a complete JSON\nSchema object, with the property ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"properties")," object of parameters, or\nsimply the values of what would be contained in the ",(0,i.kt)("inlineCode",{parentName:"li"},"properties")," object as shown below."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"),": validates the params."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"response"),": filter and generate a schema for the response, setting a\nschema allows us to have 10-20% more throughput."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"attachValidation"),": attach ",(0,i.kt)("inlineCode",{parentName:"p"},"validationError")," to request, if there is a schema validation error, instead of sending the error to the error handler.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"beforeHandler(request, reply, done)"),": a ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Hooks#before-handler"},"function")," called just before the request handler, useful if you need to perform authentication at route level for example, it could also be and array of functions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"handler(request, reply)"),": the function that will handle this request.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"schemaCompiler(schema)"),": the function that build the schema for the validations. See ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Validation-and-Serialization#schema-compiler"},"here"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bodyLimit"),": prevents the default JSON body parser from parsing request bodies larger than this number of bytes. Must be an integer. You may also set this option globally when first creating the Fastify instance with ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify(options)"),". Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"1048576")," (1 MiB).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"logLevel"),": set log level for this route. See below.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"config"),": object used to store custom configuration.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"version"),": a ",(0,i.kt)("a",{parentName:"p",href:"http://semver.org/"},"semver")," compatible string that defined the version of the endpoint. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/versioned-routes/docs/Routes.md#version"},"Example"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"request")," is defined in ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Request"},"Request"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"reply")," is defined in ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Reply"},"Reply"),"."))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.route({\n  method: 'GET',\n  url: '/',\n  schema: {\n    querystring: {\n      name: { type: 'string' },\n      excitement: { type: 'integer' }\n    },\n    response: {\n      200: {\n        type: 'object',\n        properties: {\n          hello: { type: 'string' }\n        }\n      }\n    }\n  },\n  handler: function (request, reply) {\n    reply.send({ hello: 'world' })\n  }\n})\n")),(0,i.kt)("h3",{id:"shorthand-declaration"},"Shorthand declaration"),(0,i.kt)("a",{name:"shorthand-declaration"}),(0,i.kt)("p",null,"The above route declaration is more ",(0,i.kt)("em",{parentName:"p"},"Hapi"),"-like, but if you prefer an ",(0,i.kt)("em",{parentName:"p"},"Express/Restify")," approach, we support it as well:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.get(path, [options], handler)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.head(path, [options], handler)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.post(path, [options], handler)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.put(path, [options], handler)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.delete(path, [options], handler)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.options(path, [options], handler)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.patch(path, [options], handler)")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const opts = {\n  schema: {\n    response: {\n      200: {\n        type: 'object',\n        properties: {\n          hello: { type: 'string' }\n        }\n      }\n    }\n  }\n}\nfastify.get('/', opts, (request, reply) => {\n  reply.send({ hello: 'world' })\n})\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fastify.all(path, [options], handler)")," will add the same handler to all the supported methods."),(0,i.kt)("p",null,"The handler may also be supplied via the ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const opts = {\n  schema: {\n    response: {\n      200: {\n        type: 'object',\n        properties: {\n          hello: { type: 'string' }\n        }\n      }\n    }\n  },\n  handler (request, reply) {\n    reply.send({ hello: 'world' })\n  }\n}\nfastify.get('/', opts)\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: if the handler is specified in both the ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," and as the third parameter to the shortcut method then throws duplicate ",(0,i.kt)("inlineCode",{parentName:"p"},"handler")," error.")),(0,i.kt)("h3",{id:"url-building"},"Url building"),(0,i.kt)("a",{name:"url-building"}),(0,i.kt)("p",null,"Fastify supports both static and dynamic urls."),(0,i.kt)("p",null,"To register a ",(0,i.kt)("strong",{parentName:"p"},"parametric")," path, use the ",(0,i.kt)("em",{parentName:"p"},"colon")," before the parameter name. For ",(0,i.kt)("strong",{parentName:"p"},"wildcard")," use the ",(0,i.kt)("em",{parentName:"p"},"star"),".\n",(0,i.kt)("em",{parentName:"p"},"Remember that static routes are always checked before parametric and wildcard.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// parametric\nfastify.get('/example/:userId', (request, reply) => {}))\nfastify.get('/example/:userId/:secretToken', (request, reply) => {}))\n\n// wildcard\nfastify.get('/example/*', (request, reply) => {}))\n")),(0,i.kt)("p",null,"Regular expression routes are supported as well, but pay attention, RegExp are very expensive in term of performance!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// parametric with regexp\nfastify.get('/example/:file(^\\\\d+).png', (request, reply) => {}))\n")),(0,i.kt)("p",null,'It\'s possible to define more than one parameter within the same couple of slash ("/"). Such as:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/example/near/:lat-:lng/radius/:r', (request, reply) => {}))\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'Remember in this case to use the dash ("-") as parameters separator.')),(0,i.kt)("p",null,"Finally it's possible to have multiple parameters with RegExp."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/example/at/:hour(^\\\\d{2})h:minute(^\\\\d{2})m', (request, reply) => {}))\n")),(0,i.kt)("p",null,"In this case as parameter separator it's possible to use whatever character is not matched by the regular expression."),(0,i.kt)("p",null,"Having a route with multiple parameters may affect negatively the performance, so prefer single parameter approach whenever possible, especially on routes which are on the hot path of your application.\nIf you are interested in how we handle the routing, checkout ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/delvedor/find-my-way"},"find-my-way"),"."),(0,i.kt)("h3",{id:"async-await"},"Async Await"),(0,i.kt)("a",{name:"async-await"}),(0,i.kt)("p",null,"Are you an ",(0,i.kt)("inlineCode",{parentName:"p"},"async/await")," user? We have you covered!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/', options, async function (request, reply) {\n  var data = await getData()\n  var processed = await processData(data)\n  return processed\n})\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning:")," You can't return ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),". For more details read ",(0,i.kt)("a",{parentName:"p",href:"#promise-resolution"},"promise-resolution"),"."),(0,i.kt)("p",null,"As you can see we are not calling ",(0,i.kt)("inlineCode",{parentName:"p"},"reply.send")," to send back the data to the user. You just need to return the body and you are done!"),(0,i.kt)("p",null,"If you need it you can also send back the data to the user with ",(0,i.kt)("inlineCode",{parentName:"p"},"reply.send"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/', options, async function (request, reply) {\n  var data = await getData()\n  var processed = await processData(data)\n  reply.send(processed)\n})\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you use ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"reply.send")," at the same time, the first one that happens takes precedence, the second value will be discarded, a ",(0,i.kt)("em",{parentName:"li"},"warn")," log will also be emitted because you tried to send a response twice."),(0,i.kt)("li",{parentName:"ul"},"You can't return ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),". For more details read ",(0,i.kt)("a",{parentName:"li",href:"#promise-resolution"},"promise-resolution"),".")),(0,i.kt)("h3",{id:"promise-resolution"},"Promise resolution"),(0,i.kt)("a",{name:"promise-resolution"}),(0,i.kt)("p",null,"If your handler is an ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," function or returns a promise, you should be aware of a special behaviour which is necessary to support the callback and promise control-flow. If the handler's promise is resolved with ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", it will be ignored causing the request to hang and an ",(0,i.kt)("em",{parentName:"p"},"error")," log to be emitted."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If you want to use ",(0,i.kt)("inlineCode",{parentName:"li"},"async/await")," or promises but respond a value with ",(0,i.kt)("inlineCode",{parentName:"li"},"reply.send"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Don't")," ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," any value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Don't")," forget to call ",(0,i.kt)("inlineCode",{parentName:"li"},"reply.send"),"."))),(0,i.kt)("li",{parentName:"ol"},"If you want to use ",(0,i.kt)("inlineCode",{parentName:"li"},"async/await")," or promises:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Don't")," use ",(0,i.kt)("inlineCode",{parentName:"li"},"reply.send"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Don't")," return ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),".")))),(0,i.kt)("p",null,"In this way, we can support both ",(0,i.kt)("inlineCode",{parentName:"p"},"callback-style")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"async-await"),", with the minimum trade-off. In spite of so much freedom we highly recommend to go with only one style because error handling should be handled in a consistent way within your application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notice"),": Every async function returns a promise by itself."),(0,i.kt)("h3",{id:"route-prefixing"},"Route Prefixing"),(0,i.kt)("a",{name:"route-prefixing"}),(0,i.kt)("p",null,"Sometimes you need to maintain two or more different versions of the same api, a classic approach is to prefix all the routes with the api version number, ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/user")," for example.\nFastify offers you a fast and smart way to create different version of the same api without changing all the route names by hand, ",(0,i.kt)("em",{parentName:"p"},"route prefixing"),". Let's see how it works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// server.js\nconst fastify = require('fastify')()\n\nfastify.register(require('./routes/v1/users'), { prefix: '/v1' })\nfastify.register(require('./routes/v2/users'), { prefix: '/v2' })\n\nfastify.listen(3000)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// routes/v1/users.js\nmodule.exports = function (fastify, opts, next) {\n  fastify.get('/user', handler_v1)\n  next()\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// routes/v2/users.js\nmodule.exports = function (fastify, opts, next) {\n  fastify.get('/user', handler_v2)\n  next()\n}\n")),(0,i.kt)("p",null,"Fastify will not complain because you are using the same name for two different routes, because at compilation time it will handle the prefix automatically ",(0,i.kt)("em",{parentName:"p"},"(this also means that the performance will not be affected at all!)"),"."),(0,i.kt)("p",null,"Now your clients will have access to the following routes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/v1/user")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/v2/user"))),(0,i.kt)("p",null,"You can do this as many times as you want, it works also for nested ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," and routes parameter are supported as well.\nBe aware that if you use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-plugin"))," this option won't work."),(0,i.kt)("h3",{id:"custom-log-level"},"Custom Log Level"),(0,i.kt)("a",{name:"custom-log-level"}),(0,i.kt)("p",null,"It could happen that you need different log levels in your routes, with Fastify achieve this is very straightforward."),(0,i.kt)("p",null,"You just need to pass the option ",(0,i.kt)("inlineCode",{parentName:"p"},"logLevel")," to the plugin option or the route option with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino/blob/master/docs/API.md#discussion-3"},"value")," that you need."),(0,i.kt)("p",null,"Be aware that if you set the ",(0,i.kt)("inlineCode",{parentName:"p"},"logLevel")," at plugin level, also the ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Server#setnotfoundhandler"},(0,i.kt)("inlineCode",{parentName:"a"},"setNotFoundHandler"))," and ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Server#seterrorhandler"},(0,i.kt)("inlineCode",{parentName:"a"},"setErrorHandler"))," will be affected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// server.js\nconst fastify = require('fastify')({ logger: true })\n\nfastify.register(require('./routes/user'), { logLevel: 'warn' })\nfastify.register(require('./routes/events'), { logLevel: 'debug' })\n\nfastify.listen(3000)\n")),(0,i.kt)("p",null,"Or you can directly pass it to a route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/', { logLevel: 'warn' }, (request, reply) => {\n  reply.send({ hello: 'world' })\n})\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Remember that the custom log level is applied only to the routes, and not to the global Fastify Logger, accessible with ",(0,i.kt)("inlineCode",{parentName:"em"},"fastify.log"))),(0,i.kt)("h3",{id:"config"},"Config"),(0,i.kt)("a",{name:"routes-config"}),(0,i.kt)("p",null,"Registering a new handler, you can pass a configuration object to it and retrieve it in the handler."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// server.js\nconst fastify = require('fastify')()\n\nfunction handler (req, reply) {\n  reply.send(reply.context.config.output)\n}\n\nfastify.get('/en', { config: { output: 'hello world!' } }, handler)\nfastify.get('/it', { config: { output: 'ciao mondo!' } }, handler)\n\nfastify.listen(3000)\n")),(0,i.kt)("h3",{id:"version"},"Version"),(0,i.kt)("a",{name:"version"}),(0,i.kt)("h4",{id:"default"},"Default"),(0,i.kt)("p",null,"If needed you can provide a version option, which will allow you to declare multiple versions of the same route. The versioning should follow the ",(0,i.kt)("a",{parentName:"p",href:"http://semver.org/"},"semver")," specification."),(0,i.kt)("p",null,"Fastify will automatically detect the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Version")," header and route the request accordingly (advanced ranges and pre-releases currently are not supported)."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Be aware that using this feature will cause a degradation of the overall performances of the router.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.route({\n  method: 'GET',\n  url: '/',\n  version: '1.2.0',\n  handler: function (request, reply) {\n    reply.send({ hello: 'world' })\n  }\n})\n\nfastify.inject({\n  method: 'GET',\n  url: '/',\n  headers: {\n    'Accept-Version': '1.x' // it could also be '1.2.0' or '1.2.x'\n  }\n}, (err, res) => {\n  // { hello: 'world' }\n})\n")),(0,i.kt)("p",null,"If you declare multiple versions with the same major or minor, Fastify will always choose the highest compatible with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Version")," header value."),(0,i.kt)("p",null,"If the request will not have the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Version")," header, a 404 error will be returned."),(0,i.kt)("h4",{id:"custom"},"Custom"),(0,i.kt)("p",null,"It's possible to define a custom versioning logic. This can be done through the ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Server#versioning"},(0,i.kt)("inlineCode",{parentName:"a"},"versioning"))," configuration, when creating a fastify server instance."))}m.isMDXComponent=!0}}]);