(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(268)),o={id:"overview",title:"Instantiating objects with Hydra",sidebar_label:"Overview"},s={unversionedId:"patterns/instantiate_objects/overview",id:"version-1.0/patterns/instantiate_objects/overview",isDocsHomePage:!1,title:"Instantiating objects with Hydra",description:"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.",source:"@site/versioned_docs/version-1.0/patterns/instantiate_objects/overview.md",slug:"/patterns/instantiate_objects/overview",permalink:"/docs/patterns/instantiate_objects/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/patterns/instantiate_objects/overview.md",version:"1.0",lastUpdatedBy:"Jasha",lastUpdatedAt:1614059253,sidebar_label:"Overview",sidebar:"version-1.0/docs",previous:{title:"Config Store API",permalink:"/docs/tutorials/structured_config/config_store"},next:{title:"Config files example",permalink:"/docs/patterns/instantiate_objects/config_files"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.\nThe code using the instantiated object only knows the interface which remains constant, but the behavior\nis determined by the actual object instance."),Object(i.b)("p",null,"Hydra provides ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.utils.call()")," (and its alias ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.utils.instantiate()"),") for instantiating objects and calling functions. Prefer ",Object(i.b)("inlineCode",{parentName:"p"},"instantiate")," for creating objects and ",Object(i.b)("inlineCode",{parentName:"p"},"call")," for invoking functions."),Object(i.b)("p",null,"Call/instantiate supports:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Class names : Call the ",Object(i.b)("inlineCode",{parentName:"li"},"__init__")," method"),Object(i.b)("li",{parentName:"ul"},"Callables like functions, static functions, class methods and objects")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'def call(config: Any, *args: Any, **kwargs: Any) -> Any:\n    """\n    :param config: An object describing what to call and what params to use.\n                   Must have a _target_ field.\n    :param args: optional positional parameters pass-through\n    :param kwargs: optional named parameters pass-through\n    :return: the return value from the specified class or method\n    """\n    ...\n\n# Alias for call\ninstantiate = call\n')),Object(i.b)("p",null,"The config passed to these functions must have a key called ",Object(i.b)("inlineCode",{parentName:"p"},"_target_"),", with the value of a fully qualified class name, class method, static method or callable.",Object(i.b)("br",{parentName:"p"}),"\n","Any additional parameters are passed as keyword arguments to the target."),Object(i.b)("p",null,"For example, your application may have a User class that looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="user.py"',title:'"user.py"'}),"class User:\n  name: str\n  age : int\n  \n  def __init__(self, name: str, age: int):\n    self.name = name\n    self.age = age\n")),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Config"',title:'"Config"'}),"bond:\n  _target_: user.User\n  name: Bond\n  age: 7\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Instantiation"',title:'"Instantiation"'}),'user : User = instantiate(cfg.bond)\nassert isinstance(user, user.User)\nassert user.name == "Bond"\nassert user.age == 7\n')))),Object(i.b)("p",null,"For convenience, instantiate/call returns ",Object(i.b)("inlineCode",{parentName:"p"},"None")," when receiving ",Object(i.b)("inlineCode",{parentName:"p"},"None")," as input."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"assert instantiate(None) is None\n")))}p.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,f=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(f,s(s({ref:t},l),{},{components:n})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);