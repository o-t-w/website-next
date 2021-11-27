"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[6296],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=l(n),d=s,f=c["".concat(p,".").concat(d)]||c[d]||y[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(7462),s=n(3366),o=(n(7294),n(3905)),i=["components"],a={title:"TypeScript",sidebar_label:"TypeScript",hide_title:!1},p=void 0,l={unversionedId:"TypeScript",id:"version-v1/TypeScript",isDocsHomePage:!1,title:"TypeScript",description:"Fastify is shipped with a typings file, but it still require to install @types/node, depending on the Node.js version that you are using.",source:"@site/versioned_docs/version-v1/TypeScript.md",sourceDirName:".",slug:"/TypeScript",permalink:"/website-next/docs/v1/TypeScript",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v1/TypeScript.md",tags:[],version:"v1",frontMatter:{title:"TypeScript",sidebar_label:"TypeScript",hide_title:!1},sidebar:"version-v1/sidebar",previous:{title:"Testing",permalink:"/website-next/docs/v1/Testing"},next:{title:"Validation and Serialization",permalink:"/website-next/docs/v1/Validation-and-Serialization"}},u=[{value:"Types support",id:"types-support",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Generic Parameters",id:"generic-parameters",children:[],level:2},{value:"HTTP Prototypes",id:"http-prototypes",children:[],level:2},{value:"Contributing",id:"contributing",children:[{value:"Core Types",id:"core-types",children:[],level:3},{value:"Plugin Types",id:"plugin-types",children:[],level:3},{value:"Authoring Plugin Types",id:"authoring-plugin-types",children:[],level:3}],level:2}],y={toc:u};function c(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Fastify is shipped with a typings file, but it still require to install ",(0,o.kt)("inlineCode",{parentName:"p"},"@types/node"),", depending on the Node.js version that you are using."),(0,o.kt)("h2",{id:"types-support"},"Types support"),(0,o.kt)("p",null,"We do care about the TypeScript community, but the framework is written in plain JavaScript and currently no one of the core team is a TypeScript user while only one of the collaborators is.\nWe do our best to have the typing updated with the latest version of the API, but ",(0,o.kt)("em",{parentName:"p"},"it can happen")," that the typings are not in sync.",(0,o.kt)("br",null),"\nLuckly this is Open Source and you can contribute to fix them, we will be very happy to accept the fix and release it as soon as possible as a patch release. Checkout the ",(0,o.kt)("a",{parentName:"p",href:"#contributing"},"contributing")," rules!"),(0,o.kt)("p",null,"Plugins may or may not include typings. See ",(0,o.kt)("a",{parentName:"p",href:"#plugin-types"},"Plugin Types")," for more information."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This example TypeScript app closely aligns with the JavaScript examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as fastify from 'fastify'\nimport { Server, IncomingMessage, ServerResponse } from 'http'\n\n// Create a http server. We pass the relevant typings for our http version used.\n// By passing types we get correctly typed access to the underlying http objects in routes.\n// If using http2 we'd pass <http2.Http2Server, http2.Http2ServerRequest, http2.Http2ServerResponse>\nconst server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({})\n\nconst opts: fastify.RouteShorthandOptions = {\n  schema: {\n    response: {\n      200: {\n        type: 'object',\n        properties: {\n          pong: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n\nserver.get('/ping', opts, (request, reply) => {\n  console.log(reply.res) // this is the http.ServerResponse with correct typings!\n  reply.code(200).send({ pong: 'it worked!' })\n})\n")),(0,o.kt)("h2",{id:"generic-parameters"},"Generic Parameters"),(0,o.kt)("a",{id:"generic-parameters"}),(0,o.kt)("p",null,"Since you can validate the querystring, params, body, and headers, you can also override the default types of those values on the request interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as fastify from 'fastify'\n\nconst server = fastify({})\n\ninterface Query {\n  foo?: number\n}\n\ninterface Params {\n  bar?: string\n}\n\ninterface Body {\n  baz?: string\n}\n\ninterface Headers {\n  a?: string\n}\n\nconst opts: fastify.RouteShorthandOptions = {\n  schema: {\n    querystring: {\n      type: 'object',\n      properties: {\n        foo: {\n          type: 'number'\n        }\n      }\n    },\n    params: {\n      type: 'object',\n      properties: {\n        bar: {\n          type: 'string'\n        }\n      }\n    },\n    body: {\n      type: 'object',\n      properties: {\n        baz: {\n          type: 'string'\n        }\n      }\n    },\n    headers: {\n      type: 'object',\n      properties: {\n        a: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n\nserver.get<Query, Params, Body, Headers>('/ping/:bar', opts, (request, reply) => {\n  console.log(request.query) // this is of type Query!\n  console.log(request.params) // this is of type Params!\n  console.log(request.body) // this is of type Body!\n  console.log(request.headers) // this is of type Headers!\n  reply.code(200).send({ pong: 'it worked!' })\n})\n")),(0,o.kt)("p",null,"All generic types are optional, so you can also pass types for the parts you validate with schemas:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as fastify from 'fastify'\n\nconst server = fastify({})\n\ninterface Params {\n  bar?: string\n}\n\nconst opts: fastify.RouteShorthandOptions = {\n  schema: {\n    params: {\n      type: 'object',\n      properties: {\n        bar: {\n          type: 'string'\n        }\n      }\n    },\n  }\n}\n\nserver.get<fastify.DefaultQuery, Params, unknown>('/ping/:bar', opts, (request, reply) => {\n  console.log(request.query) // this is of type fastify.DefaultQuery!\n  console.log(request.params) // this is of type Params!\n  console.log(request.body) // this is of type unknown!\n  console.log(request.headers) // this is of type fastify.DefaultHeader because typescript will use the default type value!\n  reply.code(200).send({ pong: 'it worked!' })\n})\n\n// Given that you haven't validated the querystring, body, or headers, it would be best\n// to type those params as 'unknown'. However, it's up to you. The example below is the\n// best way to prevent you from shooting yourself in the foot. In other words, don't\n// use values you haven't validated.\nserver.get<unknown, Params, unknown, unknown>('/ping/:bar', opts, (request, reply) => {\n  console.log(request.query) // this is of type unknown!\n  console.log(request.params) // this is of type Params!\n  console.log(request.body) // this is of type unknown!\n  console.log(request.headers) // this is of type unknown!\n  reply.code(200).send({ pong: 'it worked!' })\n})\n")),(0,o.kt)("h2",{id:"http-prototypes"},"HTTP Prototypes"),(0,o.kt)("a",{id:"http-prototypes"}),(0,o.kt)("p",null,"By default, fastify will determine which version of http is being used based on the options you pass to it. If for any\nreason you need to override this you can do so as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface CustomIncomingMessage extends http.IncomingMessage {\n  getClientDeviceType: () => string\n}\n\n// Passing overrides for the http prototypes to fastify\nconst server: fastify.FastifyInstance<http.Server, CustomIncomingMessage, http.ServerResponse> = fastify()\n\nserver.get('/ping', (request, reply) => {\n  // Access our custom method on the http prototype\n  const clientDeviceType = request.raw.getClientDeviceType()\n\n  reply.send({ clientDeviceType: `you called this endpoint from a ${clientDeviceType}` })\n})\n")),(0,o.kt)("p",null,"In this example we pass a modified ",(0,o.kt)("inlineCode",{parentName:"p"},"http.IncomingMessage")," interface since it has been extended elsewhere in our\napplication."),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("a",{id:"contributing"}),(0,o.kt)("p",null,"TypeScript related changes can be considered to fall into one of two categories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Core - The typings bundled with fastify"),(0,o.kt)("li",{parentName:"ul"},"Plugins - Fastify ecosystem plugins")),(0,o.kt)("p",null,"Make sure to read our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/CONTRIBUTING.md"},(0,o.kt)("inlineCode",{parentName:"a"},"CONTRIBUTING.md"))," file before getting started to make sure things go smoothly!"),(0,o.kt)("h3",{id:"core-types"},"Core Types"),(0,o.kt)("a",{id:"core-types"}),(0,o.kt)("p",null,"When updating core types you should make a PR to this repository. Ensure you:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update ",(0,o.kt)("inlineCode",{parentName:"li"},"examples/typescript-server.ts")," to reflect the changes (if necessary)"),(0,o.kt)("li",{parentName:"ol"},"Update ",(0,o.kt)("inlineCode",{parentName:"li"},"test/types/index.ts")," to validate changes work as expected")),(0,o.kt)("h3",{id:"plugin-types"},"Plugin Types"),(0,o.kt)("a",{id:"plugin-types"}),(0,o.kt)("p",null,"Typings for plugins are hosted in DefinitelyTyped. This means when using plugins you should install like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install fastify-url-data @types/fastify-url-data\n")),(0,o.kt)("p",null,"After this you should be good to go. Some types might not be available yet, so don't be shy about contributing."),(0,o.kt)("h3",{id:"authoring-plugin-types"},"Authoring Plugin Types"),(0,o.kt)("a",{id:"authoring-plugin-types"}),(0,o.kt)("p",null,"Typings for many plugins that extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"FastifyRequest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FastifyReply")," objects can be achieved as shown below."),(0,o.kt)("p",null,"This code demonstrates adding types for ",(0,o.kt)("inlineCode",{parentName:"p"},"fastify-url-data")," to your application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// filename: custom-types.d.ts\n\n// Core typings and values\nimport fastify = require('fastify');\n\n// Extra types that will be used for plugin typings\nimport { UrlObject } from 'url';\n\n// Extend FastifyReply with the \"fastify-url-data\" plugin\ndeclare module 'fastify' {\n  interface FastifyRequest {\n    urlData (): UrlObject\n  }\n}\n\ndeclare function urlData (): void\n\ndeclare namespace urlData {}\n\nexport = urlData;\n")),(0,o.kt)("p",null,"Now you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"fastify-url-data")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as fastify from 'fastify'\nimport * as urlData from 'fastify-url-data'\n\n/// <reference types=\"./custom-types.d.ts\"/>\n\nconst server = fastify();\n\nserver.register(urlData)\n\nserver.get('/data', (request, reply) => {\n  console.log(request.urlData().auth)\n  console.log(request.urlData().host)\n  console.log(request.urlData().port)\n  console.log(request.urlData().query)\n\n  reply.send({msg: 'ok'})\n})\n\nserver.listen(3030)\n")),(0,o.kt)("p",null,"Remember, if you author typings for a plugin you should publish them to DefinitelyTyped!"))}c.isMDXComponent=!0}}]);