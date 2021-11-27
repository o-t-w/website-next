"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[2932],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3618:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={title:"Benchmarking",sidebar_label:"Benchmarking",hide_title:!1},s=void 0,l={unversionedId:"Benchmarking",id:"version-v2/Benchmarking",isDocsHomePage:!1,title:"Benchmarking",description:"Benchmarking is important if you want to measure how a change can impact the performance of your application. We provide a simple way to benchmark your application from the point of view of a user and contributor. The setup allows you to automate benchmarks in different branches and on different Node.js versions.",source:"@site/versioned_docs/version-v2/Benchmarking.md",sourceDirName:".",slug:"/Benchmarking",permalink:"/website-next/docs/v2/Benchmarking",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v2/Benchmarking.md",tags:[],version:"v2",frontMatter:{title:"Benchmarking",sidebar_label:"Benchmarking",hide_title:!1},sidebar:"version-v2/tutorialSidebar",next:{title:"Content-Type Parser",permalink:"/website-next/docs/v2/ContentTypeParser"}},u=[{value:"Simple",id:"simple",children:[{value:"Run the test in the current branch",id:"run-the-test-in-the-current-branch",children:[],level:3},{value:"Run the test against different Node.js versions \u2728",id:"run-the-test-against-different-nodejs-versions-",children:[],level:3}],level:2},{value:"Advanced",id:"advanced",children:[{value:"Run the test in different branches",id:"run-the-test-in-different-branches",children:[],level:3},{value:"Run the test in different branches against different Node.js versions \u2728",id:"run-the-test-in-different-branches-against-different-nodejs-versions-",children:[],level:3},{value:"Compare current branch with master (Gitflow)",id:"compare-current-branch-with-master-gitflow",children:[],level:3},{value:"Run different examples",id:"run-different-examples",children:[],level:3}],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Benchmarking is important if you want to measure how a change can impact the performance of your application. We provide a simple way to benchmark your application from the point of view of a user and contributor. The setup allows you to automate benchmarks in different branches and on different Node.js versions."),(0,i.kt)("p",null,"The modules we'll use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mcollina/autocannon"},"Autocannon"),": A HTTP/1.1 benchmarking tool written in node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/StarpTech/branch-comparer"},"Branch-comparer"),": Checkout multiple git branches, execute scripts and log the results."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kimmobrunfeldt/concurrently"},"Concurrently"),": Run commands concurrently."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zkat/npx"},"Npx")," NPM package runner - We are using it to run scripts against different Node.js Versions and to execute local binaries. Shipped with ",(0,i.kt)("a",{parentName:"li",href:"mailto:npm@5.2.0"},"npm@5.2.0"),".")),(0,i.kt)("h2",{id:"simple"},"Simple"),(0,i.kt)("h3",{id:"run-the-test-in-the-current-branch"},"Run the test in the current branch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run benchmark\n")),(0,i.kt)("h3",{id:"run-the-test-against-different-nodejs-versions-"},"Run the test against different Node.js versions \u2728"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx -p node@6 -- npm run benchmark\n")),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("h3",{id:"run-the-test-in-different-branches"},"Run the test in different branches"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'branchcmp --rounds 2 --script "npm run benchmark"\n')),(0,i.kt)("h3",{id:"run-the-test-in-different-branches-against-different-nodejs-versions-"},"Run the test in different branches against different Node.js versions \u2728"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'branchcmp --rounds 2 --script "npm run benchmark"\n')),(0,i.kt)("h3",{id:"compare-current-branch-with-master-gitflow"},"Compare current branch with master (Gitflow)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'branchcmp --rounds 2 --gitflow --script "npm run benchmark"\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run bench\n")),(0,i.kt)("h3",{id:"run-different-examples"},"Run different examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'branchcmp --rounds 2 -s "node ./node_modules/concurrently -k -s first \\"node ./examples/asyncawait.js\\" \\"node ./node_modules/autocannon -c 100 -d 5 -p 10 localhost:3000/\\""\n')))}m.isMDXComponent=!0}}]);