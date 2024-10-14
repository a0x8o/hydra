"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5387],{15680:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>d,MDXProvider:()=>s,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>c});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),c=function(e){return function(r){var n=m(r.components);return t.createElement(e,i({},r,{components:n}))}},m=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=m(e.components);return t.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=m(n),s=o,f=c["".concat(a,".").concat(s)]||c[s]||p[s]||i;return n?t.createElement(f,l(l({ref:r},d),{},{components:n})):t.createElement(f,l({ref:r},d))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98856:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>u,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var t=n(58168),o=n(98587),i=(n(96540),n(15680)),a=["components"],l={id:"intro",title:"Overview",sidebar_label:"Introduction"},u=void 0,d={unversionedId:"configure_hydra/intro",id:"version-0.11/configure_hydra/intro",title:"Overview",description:"Many things in Hydra can be customized, this includes:",source:"@site/versioned_docs/version-0.11/configure_hydra/Intro.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/intro",permalink:"/docs/0.11/configure_hydra/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/configure_hydra/Intro.md",tags:[],version:"0.11",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1728940470,formattedLastUpdatedAt:"10/14/2024",frontMatter:{id:"intro",title:"Overview",sidebar_label:"Introduction"},sidebar:"version-0.11/docs",previous:{title:"Specializing configuration",permalink:"/docs/0.11/patterns/specializing_config"},next:{title:"Customizing logging",permalink:"/docs/0.11/configure_hydra/logging"}},c=[{value:"Runtime variables",id:"runtime-variables",children:[],level:2}],m={toc:c};function s(e){var r=e.components,n=(0,o.A)(e,a);return(0,i.mdx)("wrapper",(0,t.A)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Many things in Hydra can be customized, this includes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Logging configuration"),(0,i.mdx)("li",{parentName:"ul"},"Run and Multirun output directory patterns"),(0,i.mdx)("li",{parentName:"ul"},"Application help (--help and --hydra-help)")),(0,i.mdx)("p",null,"Hydra can be customized using the same methods you are already familiar with from the tutorial.\nYou can include some Hydra config snippet in your own config to override it directly, or compose in different\nconfigurations provided by plugins or by your own code. You can also override everything in Hydra from the command\nline just like with your own configuration."),(0,i.mdx)("p",null,"The Hydra configuration actually lives in the same config object as your configuration, but is removed prior to running\nyour function to reduce confusion.\nYou can view the configuration with ",(0,i.mdx)("inlineCode",{parentName:"p"},"--cfg hydra|job|all")),(0,i.mdx)("p",null,"The Hydra configuration itself is composed from multiple config files. here is a partial list:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging : default     # Job's logging config\n  - hydra/launcher: basic           # Launcher config\n  - hydra/sweeper: basic            # Sweeper config\n  - hydra/output: default           # Output directory\n")),(0,i.mdx)("p",null,"You can view the Hydra config structure ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/hydra/conf"},"here"),"."),(0,i.mdx)("p",null,"This is a subset of the composed Hydra configuration node:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    # Output directory for normal runs\n    dir: ./outputs/${now:%Y-%m-%d_%H-%M-%S}\n  sweep:\n    # Output directory for sweep runs\n    dir: /checkpoint/${env:USER}/outputs/${now:%Y-%m-%d_%H-%M-%S}\n    # Output sub directory for sweep runs.\n    subdir: ${hydra.job.num}_${hydra.job.id}\n")),(0,i.mdx)("h2",{id:"runtime-variables"},"Runtime variables"),(0,i.mdx)("p",null,"The following variables are populated at runtime.\nYou can access them as config variables."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job"),":"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("em",{parentName:"li"},"hydra.job.name")," : Job name, defaults to python file name without suffix. can be overridden."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("em",{parentName:"li"},"hydra.job.override_dirname")," : Pathname derived from the overrides for this job"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("em",{parentName:"li"},"hydra.job.num")," : job serial number in sweep"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("em",{parentName:"li"},"hydra.job.id")," : Job ID in the underlying jobs system (Slurm etc) ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.runtime"),":"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("em",{parentName:"li"},"hydra.runtime.version"),": Hydra's version"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("em",{parentName:"li"},"hydra.runtime.cwd"),": Original working directory the app was executed from")))}s.isMDXComponent=!0}}]);