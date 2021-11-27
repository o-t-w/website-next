"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[585],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,u=c["".concat(p,".").concat(f)]||c[f]||m[f]||i;return r?n.createElement(u,l(l({ref:t},d),{},{components:r})):n.createElement(u,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5422:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={title:"Long Term Support",sidebar_label:"Long Term Support",hide_title:!1},p=void 0,s={unversionedId:"LTS",id:"version-v1/LTS",isDocsHomePage:!1,title:"Long Term Support",description:"Fastify's Long Term Support (LTS) is provided according the schedule laid",source:"@site/versioned_docs/version-v1/LTS.md",sourceDirName:".",slug:"/LTS",permalink:"/website-next/docs/v1/LTS",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v1/LTS.md",tags:[],version:"v1",frontMatter:{title:"Long Term Support",sidebar_label:"Long Term Support",hide_title:!1},sidebar:"version-v1/sidebar",previous:{title:"Hooks",permalink:"/website-next/docs/v1/Hooks"},next:{title:"Lifecycle",permalink:"/website-next/docs/v1/Lifecycle"}},d=[{value:"Schedule",id:"schedule",children:[],level:3},{value:"CI tested operating systems",id:"ci-tested-operating-systems",children:[],level:3}],m={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Fastify's Long Term Support (LTS) is provided according the schedule laid\nout in this document:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Major releases, "X" release of ',(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning")," X.Y.Z release\nversions, are supported for a minimum period of six months from their release\ndate. The release date of any specific version can be found at\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/releases"},"https://github.com/fastify/fastify/releases"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Major releases will receive security updates for an additional six months\nfrom the release of the next major release."))),(0,i.kt)("p",null,'A "month" is to be a period of 30 consecutive days.'),(0,i.kt)("a",{name:"lts-schedule"}),(0,i.kt)("h3",{id:"schedule"},"Schedule"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Release Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"End Of LTS Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Node.js"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1.0.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2018-03-06"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2019-09-01"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6, 8, 9, 10, 11, 12")))),(0,i.kt)("a",{name:"supported-os"}),(0,i.kt)("h3",{id:"ci-tested-operating-systems"},"CI tested operating systems"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"CI"),(0,i.kt)("th",{parentName:"tr",align:"left"},"OS"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Package Manager"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Node.js"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Azure pipelines"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Linux"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ubuntu 16.04"),(0,i.kt)("td",{parentName:"tr",align:"left"},"npm, yarn"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("del",{parentName:"td"},"6\xb9"),", 8, 10, 11, 12")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Azure pipelines"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Windows"),(0,i.kt)("td",{parentName:"tr",align:"left"},"vs2017-win2016"),(0,i.kt)("td",{parentName:"tr",align:"left"},"npm, yarn"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("del",{parentName:"td"},"6\xb9"),", 8, 10, 11, 12")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Azure pipelines"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mac"),(0,i.kt)("td",{parentName:"tr",align:"left"},"macOS 10.14"),(0,i.kt)("td",{parentName:"tr",align:"left"},"npm, yarn"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("del",{parentName:"td"},"6\xb9"),", 8, 10, 11, 12")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\xb9 yarn supports only node >= 8")))}c.isMDXComponent=!0}}]);