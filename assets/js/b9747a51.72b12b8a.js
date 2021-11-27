"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[1643],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),f=r,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},3228:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return b}});var a=n(7462),r=n(3366),o=n(7294),s=n(3905),i=n(2389),l=n(9443);var u=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(9521),d=n(6010),c="tabItem_vU9c";function f(e){var t,n,a,r=e.lazy,s=e.block,i=e.defaultValue,l=e.values,f=e.groupId,m=e.className,y=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=l?l:y.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,p.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===i?i:null!=(t=null!=i?i:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=y[0])?void 0:a.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=u(),b=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,o.useState)(k),x=N[0],T=N[1],j=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=b[f];null!=S&&S!==x&&h.some((function(e){return e.value===S}))&&T(S)}var I=function(e){var t=e.currentTarget,n=j.indexOf(t),a=h[n].value;a!==x&&(C(t),T(a),null!=f&&w(f,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":s},m)},h.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,d.Z)("tabs__item",c,{"tabs__item--active":x===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:P,onFocus:I,onClick:I},null!=n?n:t)}))),r?(0,o.cloneElement)(y.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return o.createElement(f,(0,a.Z)({key:String(t)},e))}var y=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},h=["components"],g={title:"Getting Started",sidebar_label:"Getting Started",hide_title:!1},k=void 0,v={unversionedId:"Guides/Getting-Started",id:"Guides/Getting-Started",isDocsHomePage:!1,title:"Getting Started",description:"Hello! Thank you for checking out Fastify!",source:"@site/docs/Guides/Getting-Started.md",sourceDirName:"Guides",slug:"/Guides/Getting-Started",permalink:"/website-next/docs/v3/Guides/Getting-Started",editUrl:"https://github.com/fastify/website-next/edit/main/docs/docs/Guides/Getting-Started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",sidebar_label:"Getting Started",hide_title:!1},sidebar:"sidebar",previous:{title:"Contributing",permalink:"/website-next/docs/v3/Guides/Contributing"},next:{title:"Guides",permalink:"/website-next/docs/v3/Guides/index"}},b=[{value:"Install",id:"install",children:[],level:3},{value:"Your first server",id:"your-first-server",children:[],level:3},{value:"Your first plugin",id:"your-first-plugin",children:[],level:2},{value:"Loading order of your plugins",id:"loading-order-of-your-plugins",children:[],level:2},{value:"Validate your data",id:"validate-your-data",children:[],level:2},{value:"Serialize your data",id:"serialize-your-data",children:[],level:2},{value:"Parsing request payloads",id:"parsing-request-payloads",children:[],level:2},{value:"Extend your server",id:"extend-your-server",children:[],level:2},{value:"Test your server",id:"test-your-server",children:[],level:2},{value:"Run your server from CLI",id:"run-your-server-from-cli",children:[{value:"Slides and Videos",id:"slides-and-videos",children:[],level:3}],level:2}],w={toc:b};function N(e){var t=e.components,n=(0,r.Z)(e,h);return(0,s.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Hello! Thank you for checking out Fastify!"),(0,s.kt)("p",null,"This document aims to be a gentle introduction to the framework and its features. It is an elementary preface with examples and links to other parts of the documentation."),(0,s.kt)("p",null,"Let's start!"),(0,s.kt)("h3",{id:"install"},"Install"),(0,s.kt)(m,{mdxType:"Tabs"},(0,s.kt)(y,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i fastify --save\n"))),(0,s.kt)(y,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add fastify\n")))),(0,s.kt)("h3",{id:"your-first-server"},"Your first server"),(0,s.kt)("p",null,"Let's write our first server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Require the framework and instantiate it\n\n// ESM\nimport Fastify from 'fastify'\nconst fastify = Fastify({\n  logger: true\n})\n// CommonJs\nconst fastify = require('fastify')({\n  logger: true\n})\n\n// Declare a route\nfastify.get('/', function (request, reply) {\n  reply.send({ hello: 'world' })\n})\n\n// Run the server!\nfastify.listen(3000, function (err, address) {\n  if (err) {\n    fastify.log.error(err)\n    process.exit(1)\n  }\n  // Server is now listening on ${address}\n})\n")),(0,s.kt)("p",null,"Do you prefer to use ",(0,s.kt)("inlineCode",{parentName:"p"},"async/await"),"? Fastify supports it out-of-the-box.\n(We also suggest using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mcollina/make-promises-safe"},"make-promises-safe")," to avoid file descriptor and memory leaks.)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// ESM\nimport Fastify from 'fastify'\nconst fastify = Fastify({\n  logger: true\n})\n// CommonJs\nconst fastify = require('fastify')({\n  logger: true\n})\n\nfastify.get('/', async (request, reply) => {\n  return { hello: 'world' }\n})\n\nconst start = async () => {\n  try {\n    await fastify.listen(3000)\n  } catch (err) {\n    fastify.log.error(err)\n    process.exit(1)\n  }\n}\nstart()\n")),(0,s.kt)("p",null,"Awesome, that was easy."),(0,s.kt)("p",null,"Unfortunately, writing a complex application requires significantly more code than this example. A classic problem when you are building a new application is how to handle multiple files, asynchronous bootstrapping, and the architecture of your code.\nFastify offers an easy platform that helps to solve all of the problems outlined above, and more!"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The above examples, and subsequent examples in this document, default to listening only on the localhost ",(0,s.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," interface. To listen on all available IPv4 interfaces the example should be modified to listen on ",(0,s.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," like so:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"fastify.listen(3000, '0.0.0.0', function (err, address) {\n  if (err) {\n    fastify.log.error(err)\n    process.exit(1)\n  }\n  fastify.log.info(`server listening on ${address}`)\n})\n")),(0,s.kt)("p",{parentName:"div"},"Similarly, specify ",(0,s.kt)("inlineCode",{parentName:"p"},"::1")," to accept only local connections via IPv6. Or specify ",(0,s.kt)("inlineCode",{parentName:"p"},"::")," to accept connections on all IPv6 addresses, and, if the operating system supports it, also on all IPv4 addresses."),(0,s.kt)("p",{parentName:"div"},"When deploying to a Docker (or another type of) container using ",(0,s.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"::")," would be the easiest method for exposing the application."))),(0,s.kt)("h2",{id:"your-first-plugin"},"Your first plugin"),(0,s.kt)("p",null,"As with JavaScript, where everything is an object, with Fastify everything is a plugin."),(0,s.kt)("p",null,"Before digging into it, let's see how it works!\nLet's declare our basic server, but instead of declaring the route inside the entry point, we'll declare it in an external file (check out the ",(0,s.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Routes"},"route declaration")," docs)."),(0,s.kt)(m,{mdxType:"Tabs"},(0,s.kt)(y,{value:"esm",label:"ESM",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import Fastify from 'fastify'\nimport firstRoute from './our-first-route'\nconst fastify = Fastify({\n  logger: true\n})\n\nfastify.register(firstRoute)\n\nfastify.listen(3000, function (err, address) {\n  if (err) {\n    fastify.log.error(err)\n    process.exit(1)\n  }\n  // Server is now listening on ${address}\n})\n"))),(0,s.kt)(y,{value:"commonjs",label:"CommonJS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')({\n  logger: true\n})\n\nfastify.register(require('./our-first-route'))\n\nfastify.listen(3000, function (err, address) {\n  if (err) {\n    fastify.log.error(err)\n    process.exit(1)\n  }\n  // Server is now listening on ${address}\n})\n")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="our-first-route.js"',title:'"our-first-route.js"'},"async function routes (fastify, options) {\n  fastify.get('/', async (request, reply) => {\n    return { hello: 'world' }\n  })\n}\n\nmodule.exports = routesver is now listening on ${address}\n})\n")),(0,s.kt)("p",null,"In this example, we used the ",(0,s.kt)("inlineCode",{parentName:"p"},"register")," API, which is the core of the Fastify framework. It is the only way to add routes, plugins, et cetera."),(0,s.kt)("p",null,"At the beginning of this guide, we noted that Fastify provides a foundation that assists with asynchronous bootstrapping of your application. Why is this important? Consider the scenario where a database connection is needed to handle data storage. The database connection needs to be available before the server is accepting connections. How do we address this problem?\nA typical solution is to use a complex callback, or promises - a system that will mix the framework API with other libraries and the application code.\nFastify handles this internally, with minimum effort!"),(0,s.kt)("p",null,"Let's rewrite the above example with a database connection."),(0,s.kt)("p",null,"First, install ",(0,s.kt)("inlineCode",{parentName:"p"},"fastify-plugin")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"fastify-mongodb"),":"),(0,s.kt)(m,{mdxType:"Tabs"},(0,s.kt)(y,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save fastify-plugin fastify-mongodb\n"))),(0,s.kt)(y,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add fastify-plugin fastify-mongodb\n")))),(0,s.kt)(m,{mdxType:"Tabs"},(0,s.kt)(y,{value:"esm",label:"ESM",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"import Fastify from 'fastify'\nimport dbConnector from './our-db-connector'\nimport firstRoute from './our-first-route'\n\nconst fastify = Fastify({\n  logger: true\n})\nfastify.register(dbConnector)\nfastify.register(firstRoute)\n\nfastify.listen(3000, function (err, address) {\n  if (err) {\n    fastify.log.error(err)\n    process.exit(1)\n  }\n  // Server is now listening on ${address}\n})\n"))),(0,s.kt)(y,{value:"commonjs",label:"CommonJS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const fastify = require('fastify')({\n  logger: true\n})\n\nfastify.register(require('./our-db-connector'))\nfastify.register(require('./our-first-route'))\n\nfastify.listen(3000, function (err, address) {\n  if (err) {\n    fastify.log.error(err)\n    process.exit(1)\n  }\n  // Server is now listening on ${address}\n})\n")))),(0,s.kt)(m,{mdxType:"Tabs"},(0,s.kt)(y,{value:"esm",label:"ESM",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="our-db-connector.js"',title:'"our-db-connector.js"'},"import fastifyPlugin from 'fastify-plugin'\nimport fastifyMongo from 'fastify-mongodb'\n\nasync function dbConnector (fastify, options) {\n  fastify.register(fastifyMongo, {\n    url: 'mongodb://localhost:27017/test_database'\n  })\n}\n\n// Wrapping a plugin function with fastify-plugin exposes the decorators    \n// and hooks, declared inside the plugin to the parent scope.\nmodule.exports = fastifyPlugin(dbConnector)\n"))),(0,s.kt)(y,{value:"commonjs",label:"CommonJS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="our-db-connector.js"',title:'"our-db-connector.js"'},"const fastifyPlugin = require('fastify-plugin')\n\nasync function dbConnector (fastify, options) {\n  fastify.register(require('fastify-mongodb'), {\n    url: 'mongodb://localhost:27017/test_database'\n  })\n}\n\n// Wrapping a plugin function with fastify-plugin exposes the decorators    \n// and hooks, declared inside the plugin to the parent scope.\nmodule.exports = fastifyPlugin(dbConnector)\n")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="our-first-route.js"',title:'"our-first-route.js"'},"async function routes (fastify, options) {\n  const collection = fastify.mongo.db.collection('test_collection')\n\n  fastify.get('/', async (request, reply) => {\n    return { hello: 'world' }\n  })\n\n  fastify.get('/animals', async (request, reply) => {\n    const result = await collection.find().toArray()\n    if (result.length === 0) {\n      throw new Error('No documents found')\n    }\n    return result\n  })\n\n  fastify.get('/animals/:animal', async (request, reply) => {\n    const result = await collection.findOne({ animal: request.params.animal })\n    if (!result) {\n      throw new Error('Invalid value')\n    }\n    return result\n  })\n\n  const animalBodyJsonSchema = {\n    type: 'object',\n    required: ['animal'],\n    properties: {\n      animal: { type: 'string' },\n    },\n  }\n\n  const schema = {\n    body: animalBodyJsonSchema,\n  }\n\n  fastify.post('/animals', { schema }, async (request, reply) => {\n    // we can use the `request.body` object to get the data sent by the client\n    const result = await collection.insertOne({ animal: request.body.animal })\n    return result\n  })\n}\n\nmodule.exports = routes\n")),(0,s.kt)("p",null,"Wow, that was fast!"),(0,s.kt)("p",null,"Let's recap what we have done here since we've introduced some new concepts.\nAs you can see, we used ",(0,s.kt)("inlineCode",{parentName:"p"},"register")," for both the database connector and the registration of the routes. This is one of the best features of Fastify, it will load your plugins in the same order you declare them, and it will load the next plugin only once the current one has been loaded. In this way, we can register the database connector in the first plugin and use it in the second (read ",(0,s.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Plugins#handle-the-scope"},"here")," to understand how to handle the scope of a plugin). Plugin loading starts when you call ",(0,s.kt)("inlineCode",{parentName:"p"},"fastify.listen()"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"fastify.inject()")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"fastify.ready()")),(0,s.kt)("p",null,"The MongoDB plugin uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"decorate")," API to add custom objects to the Fastify instance, making them available for use everywhere. Use of this API is encouraged to facilitate easy code reuse and to decrease code or logic duplication."),(0,s.kt)("p",null,"To dig deeper into how Fastify plugins work, how to develop new plugins, and for details on how to use the whole Fastify API to deal with the complexity of asynchronously bootstrapping an application, read ",(0,s.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Plugins-Guide"},"the hitchhiker's guide to plugins"),"."),(0,s.kt)("h2",{id:"loading-order-of-your-plugins"},"Loading order of your plugins"),(0,s.kt)("p",null,"To guarantee consistent and predictable behavior of your application, we highly recommend to always load your code as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 plugins (from the Fastify ecosystem)\n\u2514\u2500\u2500 your plugins (your custom plugins)\n\u2514\u2500\u2500 decorators\n\u2514\u2500\u2500 hooks\n\u2514\u2500\u2500 your services\n")),(0,s.kt)("p",null,"In this way, you will always have access to all of the properties declared in the current scope.\nAs discussed previously, Fastify offers a solid encapsulation model, to help you build your application as single and independent services. If you want to register a plugin only for a subset of routes, you just have to replicate the above structure."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 plugins (from the Fastify ecosystem)\n\u2514\u2500\u2500 your plugins (your custom plugins)\n\u2514\u2500\u2500 decorators\n\u2514\u2500\u2500 hooks\n\u2514\u2500\u2500 your services\n    \u2502\n    \u2514\u2500\u2500  service A\n    \u2502     \u2514\u2500\u2500 plugins (from the Fastify ecosystem)\n    \u2502     \u2514\u2500\u2500 your plugins (your custom plugins)\n    \u2502     \u2514\u2500\u2500 decorators\n    \u2502     \u2514\u2500\u2500 hooks\n    \u2502     \u2514\u2500\u2500 your services\n    \u2502\n    \u2514\u2500\u2500  service B\n          \u2514\u2500\u2500 plugins (from the Fastify ecosystem)\n          \u2514\u2500\u2500 your plugins (your custom plugins)\n          \u2514\u2500\u2500 decorators\n          \u2514\u2500\u2500 hooks\n          \u2514\u2500\u2500 your services\n")),(0,s.kt)("h2",{id:"validate-your-data"},"Validate your data"),(0,s.kt)("p",null,"Data validation is extremely important and a core concept of the framework.\nTo validate incoming requests, Fastify uses ",(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema"),". (JTD schemas are loosely supported, but ",(0,s.kt)("inlineCode",{parentName:"p"},"jsonShorthand")," must be disabled first)"),(0,s.kt)("p",null,"Let's look at an example demonstrating validation for routes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const opts = {\n  schema: {\n    body: {\n      type: 'object',\n      properties: {\n        someKey: { type: 'string' },\n        someOtherKey: { type: 'number' }\n      }\n    }\n  }\n}\n\nfastify.post('/', opts, async (request, reply) => {\n  return { hello: 'world' }\n})\n")),(0,s.kt)("p",null,"This example shows how to pass an options object to the route, which accepts a ",(0,s.kt)("inlineCode",{parentName:"p"},"schema")," key that contains all of the schemas for ",(0,s.kt)("inlineCode",{parentName:"p"},"route"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"body"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"querystring"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"params"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"headers"),"."),(0,s.kt)("p",null,"Read ",(0,s.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Validation-and-Serialization"},"Validation and Serialization")," to learn more."),(0,s.kt)("h2",{id:"serialize-your-data"},"Serialize your data"),(0,s.kt)("p",null,"Fastify has first class support for JSON. It is extremely optimized to parse JSON bodies and to serialize JSON output.\nTo speed up JSON serialization (yes, it is slow!) use the ",(0,s.kt)("inlineCode",{parentName:"p"},"response")," key of the schema option as shown in the following example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const opts = {\n  schema: {\n    response: {\n      200: {\n        type: 'object',\n        properties: {\n          hello: { type: 'string' }\n        }\n      }\n    }\n  }\n}\n\nfastify.get('/', opts, async (request, reply) => {\n  return { hello: 'world' }\n})\n")),(0,s.kt)("p",null,"By specifying a schema as shown, you can speed up serialization by a factor of 2-3. This also helps to protect against leakage of potentially sensitive data, since Fastify will serialize only the data present in the response schema. Read ",(0,s.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Validation-and-Serialization"},"Validation and Serialization")," to learn more."),(0,s.kt)("h2",{id:"parsing-request-payloads"},"Parsing request payloads"),(0,s.kt)("p",null,"Fastify parses ",(0,s.kt)("inlineCode",{parentName:"p"},"'application/json'")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"'text/plain'")," request payloads natively, with the result accessible from the ",(0,s.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Request"},"Fastify request")," object at ",(0,s.kt)("inlineCode",{parentName:"p"},"request.body"),"."),(0,s.kt)("p",null,"The following example returns the parsed body of a request back to the client:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const opts = {}\nfastify.post('/', opts, async (request, reply) => {\n  return request.body\n})\n")),(0,s.kt)("p",null,"Read ",(0,s.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Content-Type-Parser"},"Content-Type Parser")," to learn more about Fastify's default parsing functionality and how to support other content types."),(0,s.kt)("h2",{id:"extend-your-server"},"Extend your server"),(0,s.kt)("p",null,'Fastify is built to be extremely extensible and minimal, we believe that a bare-bones framework is all that is necessary to make great applications possible.\nIn other words, Fastify is not a "batteries included" framework, and relies on an amazing ',(0,s.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Ecosystem"},"ecosystem"),"!"),(0,s.kt)("h2",{id:"test-your-server"},"Test your server"),(0,s.kt)("p",null,"Fastify does not offer a testing framework, but we do recommend a way to write your tests that uses the features and architecture of Fastify."),(0,s.kt)("p",null,"Read the ",(0,s.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Testing"},"testing")," documentation to learn more!"),(0,s.kt)("h2",{id:"run-your-server-from-cli"},"Run your server from CLI"),(0,s.kt)("p",null,"Fastify also has CLI integration thanks to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-cli"},"fastify-cli"),"."),(0,s.kt)("p",null,"First, install ",(0,s.kt)("inlineCode",{parentName:"p"},"fastify-cli"),":"),(0,s.kt)(m,{mdxType:"Tabs"},(0,s.kt)(y,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i fastify-cli\n"))),(0,s.kt)(y,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add fastify-cli\n")))),(0,s.kt)("p",null,"You can also install it globally with ",(0,s.kt)("inlineCode",{parentName:"p"},"-g"),"."),(0,s.kt)("p",null,"Then, add the following lines to ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "start": "fastify start server.js"\n  }\n}\n')),(0,s.kt)("p",null,"And create your server file(s):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"'use strict'\n\nmodule.exports = async function (fastify, opts) {\n  fastify.get('/', async (request, reply) => {\n    return { hello: 'world' }\n  })\n}\n")),(0,s.kt)("p",null,"Then run your server with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,s.kt)("h3",{id:"slides-and-videos"},"Slides and Videos"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Slides"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://mcollina.github.io/take-your-http-server-to-ludicrous-speed"},"Take your HTTP server to ludicrous speed")," by ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/mcollina"},"@mcollina")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://delvedor.github.io/What-if-I-told-you-that-HTTP-can-be-fast"},"What if I told you that HTTP can be fast")," by ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/delvedor"},"@delvedor")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Videos"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=5z46jJZNe8k"},"Take your HTTP server to ludicrous speed")," by ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/mcollina"},"@mcollina")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.webexpo.net/prague2017/talk/what-if-i-told-you-that-http-can-be-fast/"},"What if I told you that HTTP can be fast")," by ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/delvedor"},"@delvedor"))))))}N.isMDXComponent=!0}}]);