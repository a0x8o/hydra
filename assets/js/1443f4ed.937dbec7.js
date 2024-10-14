"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2082],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>s});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=a.createContext({}),s=function(e){return function(n){var t=d(n.components);return a.createElement(e,r({},n,{components:t}))}},d=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=d(t),u=i,g=s["".concat(l,".").concat(u)]||s[u]||p[u]||r;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},49595:(e,n,t)=>{t.d(n,{A:()=>c,C:()=>m});var a=t(58168),i=t(96540),r=t(75489),l=t(44586),o=t(74098);function c(e){return i.createElement(r.default,(0,a.A)({},e,{to:(n=e.to,c=(0,o.useActiveVersion)(),(0,l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==c?void 0:c.name)?t:"current"]+n),target:"_blank"}));var n,t,c}function m(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return i.createElement(c,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},18756:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var a=t(58168),i=t(98587),r=(t(96540),t(15680)),l=(t(49595),["components"]),o={id:"configuring_plugins",title:"Configuring Plugins"},c=void 0,m={unversionedId:"patterns/configuring_plugins",id:"version-1.3/patterns/configuring_plugins",title:"Configuring Plugins",description:"Hydra plugins usually come with sensible defaults which work with minimal configuration.",source:"@site/versioned_docs/version-1.3/patterns/configuring_plugins.md",sourceDirName:"patterns",slug:"/patterns/configuring_plugins",permalink:"/docs/1.3/patterns/configuring_plugins",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.3/patterns/configuring_plugins.md",tags:[],version:"1.3",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1728940470,formattedLastUpdatedAt:"10/14/2024",frontMatter:{id:"configuring_plugins",title:"Configuring Plugins"},sidebar:"docs",previous:{title:"Configuring Experiments",permalink:"/docs/1.3/patterns/configuring_experiments"},next:{title:"Selecting multiple configs from a Config Group",permalink:"/docs/1.3/patterns/select_multiple_configs_from_config_group"}},s=[{value:"Overriding in primary config",id:"overriding-in-primary-config",children:[],level:3},{value:"Extending plugin default config",id:"extending-plugin-default-config",children:[],level:3}],d={toc:s};function u(e){var n=e.components,t=(0,i.A)(e,l);return(0,r.mdx)("wrapper",(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Hydra plugins usually come with sensible defaults which work with minimal configuration.\nThere are two primary ways to customize the configuration of a plugin:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Overriding it directly in your primary config"),(0,r.mdx)("li",{parentName:"ul"},"Extending the config and using it from your primary config.")),(0,r.mdx)("p",null,"The first method is the simpler, but it makes it harder to switch to a different plugin configuration.\nThe second method is a bit more complicated, but makes it easier to switch between different plugin configurations."),(0,r.mdx)("p",null,"The following methods apply to all Hydra plugins. In the following examples, we will configure an imaginary Launcher plugin\n",(0,r.mdx)("inlineCode",{parentName:"p"},"MoonLauncher"),". The Launcher has two modes: ",(0,r.mdx)("inlineCode",{parentName:"p"},"falcon9"),", which actually launches the application to the Moon and\n",(0,r.mdx)("inlineCode",{parentName:"p"},"sim")," which simulates a launch."),(0,r.mdx)("p",null,"The config schema for MoonLauncher looks like:"),(0,r.mdx)("div",{className:"row"},(0,r.mdx)("div",{className:"col col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"@dataclass\nclass Falcon9Conf:\n  ton_fuel:  int = 10\n\n\n\n\n"))),(0,r.mdx)("div",{className:"col  col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"@dataclass\nclass Simulation:\n  ton_fuel:  int = 10\n  window_size:\n    width: 1024\n    height: 768\n\n")))),(0,r.mdx)("h3",{id:"overriding-in-primary-config"},"Overriding in primary config"),(0,r.mdx)("p",null,"We can directly override Launcher config in primary config."),(0,r.mdx)("div",{className:"row"},(0,r.mdx)("div",{className:"col col--4"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"a: 1\n\nhydra:\n  launcher:\n    ton_fuel: 2\n\n\n\n\n\n\n\n\n\n"))),(0,r.mdx)("div",{className:"col col--4"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline",metastring:'title="command-line override"',title:'"command-line','override"':!0},"hydra/launcher=falcon9\n\n\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resulting launcher config"  {3}',title:'"resulting',launcher:!0,'config"':!0,"":!0,"{3}":!0},"hydra:\n  launcher:\n    ton_fuel: 2\n\n\n\n"))),(0,r.mdx)("div",{className:"col col--4"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline",metastring:'title="command-line override"',title:'"command-line','override"':!0},"hydra/launcher=sim\n\n\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resulting launcher config"  {3}',title:'"resulting',launcher:!0,'config"':!0,"":!0,"{3}":!0},"hydra:\n  launcher:\n    ton_fuel: 2\n    window_size:\n      width: 1024\n      height: 768\n")))),(0,r.mdx)("p",null,"This approach makes the assumption that the Launcher used has all the fields we are overriding.\nIf we wanted to override a field that exists in the Simulation Launcher but not in the Falcon9 Launcher,\nlike ",(0,r.mdx)("inlineCode",{parentName:"p"},"window_size.width"),", we would no longer be able to use the Falcon9 Launcher! The next section solves this problem."),(0,r.mdx)("h3",{id:"extending-plugin-default-config"},"Extending plugin default config"),(0,r.mdx)("p",null,"This section assumes that you are familiar with the contents of ",(0,r.mdx)("a",{parentName:"p",href:"/docs/1.3/patterns/extending_configs"},"Common Patterns/Extending Configs"),"."),(0,r.mdx)("p",null,"Extending plugin default config has several advantages:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Separate configuration concerns, keep primary config clean."),(0,r.mdx)("li",{parentName:"ul"},"Easier to switch between different plugin configurations."),(0,r.mdx)("li",{parentName:"ul"},"Provides flexibility when a Plugin has different modes\nthat requires different schema.")),(0,r.mdx)("p",null,"Say that we want to override certain values for different Launcher mode:"),(0,r.mdx)("div",{className:"row"},(0,r.mdx)("div",{className:"col col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/launcher/my_falcon9.yaml" {4}',title:'"hydra/launcher/my_falcon9.yaml"',"{4}":!0},"defaults:\n  - falcon9\n\nton_fuel: 2\n\n\n"))),(0,r.mdx)("div",{className:"col col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/sweeper/my_sim.yaml" {5}',title:'"hydra/sweeper/my_sim.yaml"',"{5}":!0},"defaults:\n  - sim\n\nwindow_size:\n  width: 768\n\n")))),(0,r.mdx)("p",null,"We can easily user command-line overrides to get the configuration needed:"),(0,r.mdx)("div",{className:"row"},(0,r.mdx)("div",{className:"col col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline",metastring:'title="command-line override"',title:'"command-line','override"':!0},"hydra/launcher=my_falcon9\n\n\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resulting launcher config"  {3}',title:'"resulting',launcher:!0,'config"':!0,"":!0,"{3}":!0},"hydra:\n  launcher:\n    ton_fuel: 2\n\n\n\n"))),(0,r.mdx)("div",{className:"col col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline",metastring:'title="command-line override"',title:'"command-line','override"':!0},"hydra/launcher=my_sim\n\n\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="resulting launcher config"  {5}',title:'"resulting',launcher:!0,'config"':!0,"":!0,"{5}":!0},"hydra:\n  launcher:\n    ton_fuel: 10\n    window_size:\n      width: 768\n      height: 768\n")))))}u.isMDXComponent=!0}}]);