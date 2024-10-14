"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8400],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>c});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){return function(t){var r=d(t.components);return n.createElement(e,o({},t,{components:r}))}},d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=i,f=c["".concat(a,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},49595:(e,t,r)=>{r.d(t,{A:()=>l,C:()=>u});var n=r(58168),i=r(96540),o=r(75489),a=r(44586),s=r(74098);function l(e){return i.createElement(o.default,(0,n.A)({},e,{to:(t=e.to,l=(0,s.useActiveVersion)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==l?void 0:l.name)?r:"current"]+t),target:"_blank"}));var t,r,l}function u(e){var t,r=null!=(t=e.text)?t:"Example (Click Here)";return i.createElement(l,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example (Click Here)"}))}},14907:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(58168),i=r(98587),o=(r(96540),r(15680)),a=r(49595),s=["components"],l={id:"intro",title:"Introduction to Structured Configs",sidebar_label:"Introduction to Structured Configs"},u=void 0,c={unversionedId:"tutorials/structured_config/intro",id:"version-1.0/tutorials/structured_config/intro",title:"Introduction to Structured Configs",description:"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the Basic Tutorial.",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/0_intro.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/intro",permalink:"/docs/1.0/tutorials/structured_config/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/structured_config/0_intro.md",tags:[],version:"1.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1728940470,formattedLastUpdatedAt:"10/14/2024",sidebarPosition:0,frontMatter:{id:"intro",title:"Introduction to Structured Configs",sidebar_label:"Introduction to Structured Configs"},sidebar:"version-1.0/docs",previous:{title:"Tab completion",permalink:"/docs/1.0/tutorials/basic/running_your_app/tab_completion"},next:{title:"Minimal example",permalink:"/docs/1.0/tutorials/structured_config/minimal_example"}},d=[{value:"Structured Configs supports:",id:"structured-configs-supports",children:[],level:4},{value:"Structured Configs Limitations:",id:"structured-configs-limitations",children:[],level:4},{value:"There are two primary patterns for using Structured configs",id:"there-are-two-primary-patterns-for-using-structured-configs",children:[],level:4}],m={toc:d};function p(e){var t=e.components,r=(0,i.A)(e,s);return(0,o.mdx)("wrapper",(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/your_first_app/simple_cli"},"Basic Tutorial"),".\nThe examples in this tutorial are available ",(0,o.mdx)(a.A,{to:"examples/tutorials/structured_configs",mdxType:"GithubLink"},"here"),"."),(0,o.mdx)("p",null,"Structured Configs use Python ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.python.org/3.7/library/dataclasses.html"},"dataclasses")," to\ndescribe your configuration structure and types. They enable:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Runtime type checking")," as you compose or mutate your config "),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Static type checking")," when using static type checkers (mypy, PyCharm, etc.)")),(0,o.mdx)("h4",{id:"structured-configs-supports"},"Structured Configs supports:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Primitive types (",(0,o.mdx)("inlineCode",{parentName:"li"},"int"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"bool"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"float"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"str"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"Enums"),") "),(0,o.mdx)("li",{parentName:"ul"},"Nesting of Structured Configs"),(0,o.mdx)("li",{parentName:"ul"},"Containers (List and Dict) containing primitives or Structured Configs"),(0,o.mdx)("li",{parentName:"ul"},"Optional fields")),(0,o.mdx)("h4",{id:"structured-configs-limitations"},"Structured Configs Limitations:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Union")," types are not supported (except ",(0,o.mdx)("inlineCode",{parentName:"li"},"Optional"),")"),(0,o.mdx)("li",{parentName:"ul"},"User methods are not supported")),(0,o.mdx)("h4",{id:"there-are-two-primary-patterns-for-using-structured-configs"},"There are two primary patterns for using Structured configs"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"As a ",(0,o.mdx)("a",{parentName:"li",href:"/docs/1.0/tutorials/structured_config/minimal_example"},"config"),", in place of configuration files (often a starting place)"),(0,o.mdx)("li",{parentName:"ul"},"As a ",(0,o.mdx)("a",{parentName:"li",href:"/docs/1.0/tutorials/structured_config/schema"},"config schema")," validating configuration files (better for complex use cases)")),(0,o.mdx)("p",null,"With both patterns, you still get everything Hydra has to offer (config composition, Command line overrides etc).\nThis tutorial covers both. ","*",(0,o.mdx)("strong",{parentName:"p"},"Read it in order"),"*","."),(0,o.mdx)("p",null,"Hydra supports OmegaConf's Structured Configs via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ConfigStore")," API.\nThis tutorial does not assume any knowledge of them.\nIt is recommended that you visit the ",(0,o.mdx)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html",target:"_blank"},"OmegaConf Structured Configs page")," to learn more later."),(0,o.mdx)("div",{class:"alert alert--info",role:"alert"},"1. The ConfigStore API is new and subject to change.",(0,o.mdx)("br",null),"2. OmegaConf's Structured Configs are new.",(0,o.mdx)("br",null),"Please report any issues.",(0,o.mdx)("br",null)),(0,o.mdx)("br",null))}p.isMDXComponent=!0}}]);