"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4205],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return m},MDXProvider:function(){return s},mdx:function(){return g},useMDXComponents:function(){return l},withMDXComponents:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),p=function(e){return function(n){var t=l(n.components);return r.createElement(e,o({},n,{components:t}))}},l=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=l(t),s=a,f=p["".concat(i,".").concat(s)]||p[s]||u[s]||o;return t?r.createElement(f,c(c({ref:n},m),{},{components:t})):r.createElement(f,c({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},50348:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return s}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"decorating_main",title:"Decorating the main function"},d=void 0,m={unversionedId:"advanced/decorating_main",id:"advanced/decorating_main",title:"Decorating the main function",description:"@hydra.main can be used over decorated functions:",source:"@site/docs/advanced/decorating_main.md",sourceDirName:"advanced",slug:"/advanced/decorating_main",permalink:"/docs/advanced/decorating_main",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/decorating_main.md",tags:[],version:"current",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1722609481,formattedLastUpdatedAt:"8/2/2024",frontMatter:{id:"decorating_main",title:"Decorating the main function"},sidebar:"docs",previous:{title:"Application packaging",permalink:"/docs/advanced/app_packaging"},next:{title:"Hydra in Jupyter Notebooks",permalink:"/docs/advanced/jupyter_notebooks"}},p=[],l={toc:p};function s(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"@hydra.main")," can be used over decorated functions:"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"from omegaconf import DictConfig, OmegaConf\nimport hydra\n\nfrom mypackage import mydecorator\n\n@hydra.main(version_base=None)\n@mydecorator\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n"))),(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="mypackage.py"',title:'"mypackage.py"'},"from functools import wraps\nfrom typing import Callable\n\nfrom omegaconf import DictConfig\n\ndef mydecorator(func: Callable) -> Callable:\n  @wraps(func)\n  def inner_decorator(cfg: DictConfig):\n    print(OmegaConf.to_yaml(cfg))  # do some stuff\n    return func(cfg) # pass cfg to decorated function\n\n  return inner_decorator\n")))),(0,o.mdx)("p",null,"Decorator should be compatible with rules below:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"It should be created using ",(0,o.mdx)("inlineCode",{parentName:"li"},"@functools.wraps")," decorator"),(0,o.mdx)("li",{parentName:"ol"},"It should accept an argument of type ",(0,o.mdx)("inlineCode",{parentName:"li"},"omegaconf.DictConfig")," and pass it to the underlying function")),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},(0,o.mdx)("inlineCode",{parentName:"p"},"@functools.wraps")," passes name and docstring of underlying function to the decorated one."),(0,o.mdx)("p",{parentName:"div"},"But more importantly, it saves underlying function into ",(0,o.mdx)("inlineCode",{parentName:"p"},"__wrapped__")," attribute of decorated function,\nwhich is used by ",(0,o.mdx)("inlineCode",{parentName:"p"},"hydra.main")," to calculate the absolute path of config file."),(0,o.mdx)("p",{parentName:"div"},"Without ",(0,o.mdx)("inlineCode",{parentName:"p"},"@wraps")," hydra will fail while searching for the config path:"),(0,o.mdx)("pre",{parentName:"div"},(0,o.mdx)("code",{parentName:"pre",className:"language-log"},"hydra.errors.MissingConfigException: Primary config directory not found.\nCheck that the config directory '/usr/local/lib/python3.7/conf' exists and readable\n")))))}s.isMDXComponent=!0}}]);