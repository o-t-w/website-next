"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[1361],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3052:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"Testing",sidebar_label:"Testing",hide_title:!1},l=void 0,p={unversionedId:"Testing",id:"version-v2/Testing",isDocsHomePage:!1,title:"Testing",description:"Testing is one of the most important parts of developing an application. Fastify is very flexible when it comes to testing and is compatible with most testing frameworks (such as Tap, which is used in the examples below).",source:"@site/versioned_docs/version-v2/Testing.md",sourceDirName:".",slug:"/Testing",permalink:"/website-next/docs/v2/Testing",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v2/Testing.md",tags:[],version:"v2",frontMatter:{title:"Testing",sidebar_label:"Testing",hide_title:!1},sidebar:"version-v2/tutorialSidebar",previous:{title:"Serverless",permalink:"/website-next/docs/v2/Serverless"},next:{title:"TypeScript",permalink:"/website-next/docs/v2/TypeScript"}},c=[{value:"Testing with http injection",id:"testing-with-http-injection",children:[{value:"Example:",id:"example",children:[],level:4}],level:3},{value:"Testing with a running server",id:"testing-with-a-running-server",children:[{value:"Example:",id:"example-1",children:[],level:4}],level:3},{value:"How to inspect tap tests",id:"how-to-inspect-tap-tests",children:[],level:3}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Testing is one of the most important parts of developing an application. Fastify is very flexible when it comes to testing and is compatible with most testing frameworks (such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/tap"},"Tap"),", which is used in the examples below)."),(0,i.kt)("h3",{id:"testing-with-http-injection"},"Testing with http injection"),(0,i.kt)("a",{name:"inject"}),(0,i.kt)("p",null,"Fastify comes with built-in support for fake http injection thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/light-my-request"},(0,i.kt)("inlineCode",{parentName:"a"},"light-my-request")),"."),(0,i.kt)("p",null,"To inject a fake http request, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"inject")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.inject({\n  method: String,\n  url: String,\n  query: Object,\n  payload: Object,\n  headers: Object,\n  cookies: Object\n}, (error, response) => {\n  // your tests\n})\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".inject")," methods can also be chained by omitting the callback function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify\n  .inject()\n  .get('/')\n  .headers({ foo: 'bar' })\n  .query({ foo: 'bar' })\n  .end((err, res) => { // the .end call will trigger the request\n    console.log(res.payload)\n  })\n")),(0,i.kt)("p",null,"or in the promisified version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify\n  .inject({\n    method: String,\n    url: String,\n    query: Object,\n    payload: Object,\n    headers: Object,\n    cookies: Object\n  })\n  .then(response => {\n    // your tests\n  })\n  .catch(err => {\n    // handle error\n  })\n")),(0,i.kt)("p",null,"Async await is supported as well!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  const res = await fastify.inject({ method: String, url: String, payload: Object, headers: Object })\n  // your tests\n} catch (err) {\n  // handle error\n}\n")),(0,i.kt)("h4",{id:"example"},"Example:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"app.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Fastify = require('fastify')\n\nfunction buildFastify () {\n  const fastify = Fastify()\n\n  fastify.get('/', function (request, reply) {\n    reply.send({ hello: 'world' })\n  })\n  \n  return fastify\n}\n\nmodule.exports = buildFastify\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"test.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const tap = require('tap')\nconst buildFastify = require('./app')\n\ntap.test('GET `/` route', t => {\n  t.plan(4)\n  \n  const fastify = buildFastify()\n  \n  // At the end of your tests it is highly recommended to call `.close()`\n  // to ensure that all connections to external services get closed.\n  t.tearDown(() => fastify.close())\n\n  fastify.inject({\n    method: 'GET',\n    url: '/'\n  }, (err, response) => {\n    t.error(err)\n    t.strictEqual(response.statusCode, 200)\n    t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')\n    t.deepEqual(response.json(), { hello: 'world' })\n  })\n})\n")),(0,i.kt)("h3",{id:"testing-with-a-running-server"},"Testing with a running server"),(0,i.kt)("p",null,"Fastify can also be tested after starting the server with ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify.listen()")," or after initializing routes and plugins with ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify.ready()"),"."),(0,i.kt)("h4",{id:"example-1"},"Example:"),(0,i.kt)("p",null,"Uses ",(0,i.kt)("strong",{parentName:"p"},"app.js")," from the previous example."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"test-listen.js")," (testing with ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/request"},(0,i.kt)("inlineCode",{parentName:"a"},"Request")),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const tap = require('tap')\nconst request = require('request')\nconst buildFastify = require('./app')\n\ntap.test('GET `/` route', t => {\n  t.plan(5)\n  \n  const fastify = buildFastify()\n  \n  t.tearDown(() => fastify.close())\n  \n  fastify.listen(0, (err) => {\n    t.error(err)\n    \n    request({\n      method: 'GET',\n      url: 'http://localhost:' + fastify.server.address().port\n    }, (err, response, body) => {\n      t.error(err)\n      t.strictEqual(response.statusCode, 200)\n      t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')\n      t.deepEqual(JSON.parse(body), { hello: 'world' })\n    })\n  })\n})\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"test-ready.js")," (testing with ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/supertest"},(0,i.kt)("inlineCode",{parentName:"a"},"SuperTest")),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const tap = require('tap')\nconst supertest = require('supertest')\nconst buildFastify = require('./app')\n\ntap.test('GET `/` route', async (t) => {\n  const fastify = buildFastify()\n\n  t.tearDown(() => fastify.close())\n  \n  await fastify.ready()\n  \n  const response = await supertest(fastify.server)\n    .get('/')\n    .expect(200)\n    .expect('Content-Type', 'application/json; charset=utf-8')\n  t.deepEqual(response.body, { hello: 'world' })\n})\n")),(0,i.kt)("h3",{id:"how-to-inspect-tap-tests"},"How to inspect tap tests"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Isolate your test by passing the ",(0,i.kt)("inlineCode",{parentName:"li"},"{only: true}")," option")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"test('should ...', {only: true}, t => ...)\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"tap")," using ",(0,i.kt)("inlineCode",{parentName:"li"},"npx"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> npx tap -O -T --node-arg=--inspect-brk test/<test-file.test.js>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-O")," specifies to run tests with the ",(0,i.kt)("inlineCode",{parentName:"li"},"only")," option enabled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-T")," specifies not to timeout (while you're debugging)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--node-arg=--inspect-brk")," will launch the node debugger")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In VS Code, create and launch a ",(0,i.kt)("inlineCode",{parentName:"li"},"Node.js: Attach")," debug configuration. No modification should be necessary.")),(0,i.kt)("p",null,"Now you should be able to step through your test file (and the rest of ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify"),") in your code editor."))}d.isMDXComponent=!0}}]);