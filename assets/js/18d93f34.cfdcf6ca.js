"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6358],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return p},mdx:function(){return y},useMDXComponents:function(){return m},withMDXComponents:function(){return u}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),u=function(e){return function(n){var t=m(n.components);return o.createElement(e,a({},n,{components:t}))}},m=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(t),p=r,f=u["".concat(i,".").concat(p)]||u[p]||d[p]||a;return t?o.createElement(f,s(s({ref:n},c),{},{components:t})):o.createElement(f,s({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},86762:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"composition",title:"Config composition",sidebar_label:"Config composition"},l=void 0,c={unversionedId:"tutorial/composition",id:"version-0.11/tutorial/composition",title:"Config composition",description:"As software gets more complex, we resort to modularity and composition to keep it manageable.",source:"@site/versioned_docs/version-0.11/tutorial/5_composition.md",sourceDirName:"tutorial",slug:"/tutorial/composition",permalink:"/docs/0.11/tutorial/composition",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/5_composition.md",tags:[],version:"0.11",lastUpdatedBy:"Jasha",lastUpdatedAt:1668447324,formattedLastUpdatedAt:"11/14/2022",sidebarPosition:5,frontMatter:{id:"composition",title:"Config composition",sidebar_label:"Config composition"},sidebar:"version-0.11/docs",previous:{title:"Defaults",permalink:"/docs/0.11/tutorial/defaults"},next:{title:"Multi-run",permalink:"/docs/0.11/tutorial/multi-run"}},u=[],m={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.mdx)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"As software gets more complex, we resort to modularity and composition to keep it manageable.\nWe can do the same with configs: suppose we want our working example to support multiple databases, with\nmultiple schemas per database, and different UIs. We wouldn't write a separate class\nfor each permutation of db, schema and UI, so we shouldn't write separate configs either. We use\nthe same solution in configuration as in writing the underlying software: composition. "),(0,a.mdx)("p",null,"To do this in Hydra, we first add a ",(0,a.mdx)("inlineCode",{parentName:"p"},"schema")," and a ",(0,a.mdx)("inlineCode",{parentName:"p"},"ui")," config group:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 postgresql.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 schema\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 school.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 support.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 warehouse.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 ui\n\u2502\xa0\xa0     \u251c\u2500\u2500 full.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 view.yaml\n\u2514\u2500\u2500 my_app.py\n")),(0,a.mdx)("p",null,"With these configs, we already have 12 possible combinations. Without composition we would need 12 separate configs,\nand a single change (such as renaming ",(0,a.mdx)("inlineCode",{parentName:"p"},"db.user")," to ",(0,a.mdx)("inlineCode",{parentName:"p"},"db.username"),") would need to be done separately in every one of them. "),(0,a.mdx)("p",null,"This is a maintainability nightmare -- but composition can come to the rescue."),(0,a.mdx)("p",null,"Configuration file: ",(0,a.mdx)("inlineCode",{parentName:"p"},"config.yaml")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - db: mysql\n  - ui: full\n  - schema: school\n")),(0,a.mdx)("p",null,"The defaults are ordered:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"If there are two configurations that defines the same value, the second one would win. "),(0,a.mdx)("li",{parentName:"ul"},"If two configurations are contributing to the same dictionary the result would be the combined dictionary.")),(0,a.mdx)("p",null,"When running this, we will compose a configuration with ",(0,a.mdx)("inlineCode",{parentName:"p"},"mysql"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"full")," ui and the ",(0,a.mdx)("inlineCode",{parentName:"p"},"school")," database schema (which we are seeing for the first time here):"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\nschema:\n  database: school\n  tables:\n  - fields:\n    - name: string\n    - class: int\n    name: students\n  - fields:\n    - profession: string\n    - time: data\n    - class: int\n    name: exams\nui:\n  windows:\n    create_db: true\n    view: true\n")),(0,a.mdx)("p",null,"In much the same way you can compose any of the other 11 configurations by adding appropriate overrides such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"db=postgresql"),"."))}p.isMDXComponent=!0}}]);