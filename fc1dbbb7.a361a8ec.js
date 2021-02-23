(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{262:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),o=(n(0),n(268)),a={id:"style_guide",title:"Style Guide",sidebar_label:"Style Guide"},l={unversionedId:"development/style_guide",id:"version-1.0/development/style_guide",isDocsHomePage:!1,title:"Style Guide",description:"The code need to pass verification by the following tools:",source:"@site/versioned_docs/version-1.0/development/style_guide.md",slug:"/development/style_guide",permalink:"/docs/development/style_guide",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/development/style_guide.md",version:"1.0",lastUpdatedBy:"Jasha",lastUpdatedAt:1614059253,sidebar_label:"Style Guide",sidebar:"version-1.0/docs",previous:{title:"Testing",permalink:"/docs/development/testing"},next:{title:"Documentation",permalink:"/docs/development/documentation"}},c=[],s={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The code need to pass verification by the following tools:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"black .")," : Automatic code formatting for Python"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"flake8")," : PEP8 compliance checker for Python, this includes copyright header verification"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"isort .")," : Ensure imports are sorted properly"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mypy --strict .")," : Ensures code passes strict type checking"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yamllint .")," : Ensures that yaml files are syntactically correct and properly indented.")),Object(o.b)("p",null,"The easiest way to run the required verifications is: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nox -s lint")," : for the Hydra core"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nox -s lint_plugins")," : for the included plugins")),Object(o.b)("p",null,"isort is a bit tricky to run for plugins. the best way to get it to sort the plugins imports is with the FIX environment\nvariable:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ FIX=1 nox -s lint_plugins\n")),Object(o.b)("p",null,"It is also recommended that you install pre-commit hooks (use ",Object(o.b)("inlineCode",{parentName:"p"},"pre-commit install"),").\npre-commit will execute some of the above tests when you commit your code locally.\nYou can disable it by appending ",Object(o.b)("inlineCode",{parentName:"p"},"-n")," to your commit command: ",Object(o.b)("inlineCode",{parentName:"p"},"git commit -m wip -n")),Object(o.b)("p",null,"Pull requests that do not lint will fail the automated testing."))}p.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);