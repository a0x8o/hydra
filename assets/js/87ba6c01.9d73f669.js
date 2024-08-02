"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[168],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return d},mdx:function(){return y},useMDXComponents:function(){return u},withMDXComponents:function(){return l}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=i,f=l["".concat(a,".").concat(d)]||l[d]||m[d]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92383:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={id:"unit_testing",title:"Hydra in Unit Tests"},s=void 0,p={unversionedId:"advanced/unit_testing",id:"version-1.0/advanced/unit_testing",title:"Hydra in Unit Tests",description:"Use initialize(), initializeconfigmodule() or initializeconfigdir() in conjunction with compose()",source:"@site/versioned_docs/version-1.0/advanced/unit_testing.md",sourceDirName:"advanced",slug:"/advanced/unit_testing",permalink:"/docs/1.0/advanced/unit_testing",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/advanced/unit_testing.md",tags:[],version:"1.0",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1722609481,formattedLastUpdatedAt:"8/2/2024",frontMatter:{id:"unit_testing",title:"Hydra in Unit Tests"},sidebar:"version-1.0/docs",previous:{title:"Hydra in Jupyter Notebooks",permalink:"/docs/1.0/advanced/jupyter_notebooks"},next:{title:"Introduction",permalink:"/docs/1.0/experimental/intro"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Use ",(0,o.mdx)("inlineCode",{parentName:"p"},"initialize()"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"initialize_config_module()")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"initialize_config_dir()")," in conjunction with ",(0,o.mdx)("inlineCode",{parentName:"p"},"compose()"),"\nto compose configs inside your unit tests.",(0,o.mdx)("br",{parentName:"p"}),"\n","Be sure to read the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.0/experimental/compose_api"},"Compose API documentation"),"."),(0,o.mdx)("p",null,"The Hydra example application contains complete ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/advanced/hydra_app_example/tests/test_example.py"},"example test"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Testing example with initialize()"',title:'"Testing',example:!0,with:!0,'initialize()"':!0},'from hydra.experimental import initialize, compose\n# 1. initialize will add config_path the config search path within the context\n# 2. The module with your configs should be importable. \n#    it needs to have a __init__.py (can be empty).\n# 3. THe config path is relative to the file calling initialize (this file)\ndef test_with_initialize() -> None:\n    with initialize(config_path="../hydra_app/conf"):\n        # config is relative to a module\n        cfg = compose(config_name="config", overrides=["app.user=test_user"])\n        assert cfg == {\n            "app": {"user": "test_user", "num1": 10, "num2": 20},\n            "db": {"host": "localhost", "port": 3306},\n        }\n')))}d.isMDXComponent=!0}}]);