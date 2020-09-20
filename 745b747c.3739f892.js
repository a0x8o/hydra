(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),i=(n(0),n(236)),o={id:"adding_a_package_directive",title:"Adding an @package directive"},c={unversionedId:"upgrades/0.11_to_1.0/adding_a_package_directive",id:"version-1.0/upgrades/0.11_to_1.0/adding_a_package_directive",isDocsHomePage:!1,title:"Adding an @package directive",description:"Hydra 1.0 introduces the concept of a config package. A package is the common parent",source:"@site/versioned_docs/version-1.0/upgrades/0.11_to_1.0/adding_a_package_directive.md",slug:"/upgrades/0.11_to_1.0/adding_a_package_directive",permalink:"/docs/upgrades/0.11_to_1.0/adding_a_package_directive",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/upgrades/0.11_to_1.0/adding_a_package_directive.md",version:"1.0",lastUpdatedBy:"Evan",lastUpdatedAt:1600577457,sidebar:"version-1.0/docs",previous:{title:"Config path changes",permalink:"/docs/upgrades/0.11_to_1.0/config_path_changes"},next:{title:"strict flag mode deprecation",permalink:"/docs/upgrades/0.11_to_1.0/strict_mode_flag_deprecated"}},l=[{value:"Upgrade instructions:",id:"upgrade-instructions",children:[{value:"Recommended (~10 seconds per config file):",id:"recommended-10-seconds-per-config-file",children:[]},{value:"Alternative (not recommended):",id:"alternative-not-recommended",children:[]},{value:"Example for <code>case 1</code>:",id:"example-for-case-1",children:[]},{value:"Example for <code>case 2</code>:",id:"example-for-case-2",children:[]}]}],d={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra 1.0 introduces the concept of a config ",Object(i.b)("inlineCode",{parentName:"p"},"package"),". A ",Object(i.b)("inlineCode",{parentName:"p"},"package")," is the common parent\npath of all nodes in the config file."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In Hydra 0.11, there was an implicit default of ",Object(i.b)("inlineCode",{parentName:"li"},"_global_"),' ("")'),Object(i.b)("li",{parentName:"ul"},"In Hydra 1.1 the default will be ",Object(i.b)("inlineCode",{parentName:"li"},"_group_")," (the name of the config group)."),Object(i.b)("li",{parentName:"ul"},"Hydra 1.0 maintains the implicit default of ",Object(i.b)("inlineCode",{parentName:"li"},"_global_")," and issues a warning for\nany config group file without a ",Object(i.b)("inlineCode",{parentName:"li"},"@package")," directive.")),Object(i.b)("p",null,"By adding an explicit ",Object(i.b)("inlineCode",{parentName:"p"},"@package")," to these configs now, you guarantee that your configs\nwill not break when you upgrade to Hydra 1.1."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@package")," directive is described in details ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced/overriding_packages"}),"here"),".  "),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade instructions:"),Object(i.b)("h3",{id:"recommended-10-seconds-per-config-file"},"Recommended (~10 seconds per config file):"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Case 1"),": For config files where the common parent path matches the config group name:  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"# @package _group_")," to the top of every config group file"),Object(i.b)("li",{parentName:"ul"},"Remove the common parent path config file like in the example below.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Case 2"),": For files without a common parent path:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"# @package _global_"),".")),Object(i.b)("h3",{id:"alternative-not-recommended"},"Alternative (not recommended):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you do not want to restructure the config at this time use ",Object(i.b)("inlineCode",{parentName:"li"},"Case 2")," for all your config files.")),Object(i.b)("h3",{id:"example-for-case-1"},"Example for ",Object(i.b)("inlineCode",{parentName:"h3"},"case 1"),":"),Object(i.b)("h4",{id:"before"},"Before"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'}),"db:\n  driver: mysql\n  host: localhost\n  port: 3306\n")),Object(i.b)("h4",{id:"after"},"After"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'}),"# @package _group_\ndriver: mysql\nhost: localhost\nport: 3306\n")),Object(i.b)("p",null,"The interpretations of the before and after files are identical."),Object(i.b)("h3",{id:"example-for-case-2"},"Example for ",Object(i.b)("inlineCode",{parentName:"h3"},"case 2"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="env/prod.yaml"',title:'"env/prod.yaml"'}),"# @package _global_\ndb:\n  driver: mysql\n  host: 10.0.0.11\n  port: 3306\n\nwebserver:\n  host: 10.0.0.11\n  port: 443\n")))}p.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(o,".").concat(u)]||s[u]||b[u]||i;return n?r.a.createElement(m,c(c({ref:t},d),{},{components:n})):r.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);