"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9101],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>s,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>d});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),d=function(e){return function(n){var t=c(n.components);return r.createElement(e,o({},n,{components:t}))}},c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(t),s=i,g=d["".concat(a,".").concat(s)]||d[s]||m[s]||o;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8074:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(58168),i=t(98587),o=(t(96540),t(15680)),a=["components"],l={id:"debugging",title:"Debugging",sidebar_label:"Debugging"},p=void 0,u={unversionedId:"tutorials/basic/running_your_app/debugging",id:"version-1.2/tutorials/basic/running_your_app/debugging",title:"Debugging",description:"Hydra provides a few options to improve debuggability.",source:"@site/versioned_docs/version-1.2/tutorials/basic/running_your_app/5_debugging.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/debugging",permalink:"/docs/1.2/tutorials/basic/running_your_app/debugging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/tutorials/basic/running_your_app/5_debugging.md",tags:[],version:"1.2",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1728940470,formattedLastUpdatedAt:"10/14/2024",sidebarPosition:5,frontMatter:{id:"debugging",title:"Debugging",sidebar_label:"Debugging"},sidebar:"docs",previous:{title:"Logging",permalink:"/docs/1.2/tutorials/basic/running_your_app/logging"},next:{title:"Tab completion",permalink:"/docs/1.2/tutorials/basic/running_your_app/tab_completion"}},d=[{value:"Printing the configuration",id:"printing-the-configuration",children:[],level:3},{value:"Info",id:"info",children:[],level:3}],c={toc:d};function s(e){var n=e.components,t=(0,i.A)(e,a);return(0,o.mdx)("wrapper",(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Hydra provides a few options to improve debuggability."),(0,o.mdx)("h3",{id:"printing-the-configuration"},"Printing the configuration"),(0,o.mdx)("p",null,"Print the config for your app without running your function by adding ",(0,o.mdx)("inlineCode",{parentName:"p"},"--cfg")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"-c")," to the command line."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"--cfg")," option takes one argument indicating which part of the config to print:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"job"),": Your config"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"hydra"),": Hydra's config"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"all"),": The full config, which is a union of ",(0,o.mdx)("inlineCode",{parentName:"li"},"job")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"hydra"),".")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"# A normal run:\n$ python my_app.py\nMySQL connecting to localhost with user=root and password=1234\n\n# just show the config without running your function:\n$ python my_app.py --cfg job\ndb:\n  host: localhost\n  user: root\n  password: 1234\n")),(0,o.mdx)("p",null,"The printed config includes any modifications done via the command line:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"{3}","{3}":!0},"$ python my_app.py db.host=10.0.0.1 --cfg job\ndb:\n  host: 10.0.0.1\n  user: root\n  password: 1234\n")),(0,o.mdx)("p",null,"You can use --package or -p to display a subset of the configuration:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"python my_app.py --cfg hydra --package hydra.job\n# @package hydra.job\nname: my_app\nconfig_name: config\n...\n")),(0,o.mdx)("p",null,"By default, config interpolations are not resolved. To print resolved config use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"--resolve")," flag in addition to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"--cfg")," flag"),(0,o.mdx)("h3",{id:"info"},"Info"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"--info")," flag can provide information about various aspects of Hydra and your application:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--info all"),": Default behavior, prints everything"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--info config"),": Prints information useful to understanding the config composition:",(0,o.mdx)("br",{parentName:"li"}),"Config Search Path, Defaults Tree, Defaults List and the final config."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--info defaults"),": Prints the Final Defaults List"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--info defaults-tree"),": Prints the Defaults Tree"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--info plugins"),": Prints information about installed plugins")))}s.isMDXComponent=!0}}]);