"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7041],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,u=m["".concat(i,".").concat(d)]||m[d]||g[d]||a;return n?r.createElement(u,s(s({ref:t},c),{},{components:n})):r.createElement(u,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49595:(e,t,n)=>{n.d(t,{A:()=>l,C:()=>c});var r=n(58168),o=n(96540),a=n(75489),i=n(44586),s=n(74098);function l(e){return o.createElement(a.default,(0,r.A)({},e,{to:(t=e.to,l=(0,s.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+t),target:"_blank"}));var t,n,l}function c(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return o.createElement(l,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},47493:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var r=n(58168),o=n(98587),a=(n(96540),n(15680)),i=n(49595),s=["components"],l={id:"dynamic_schema",title:"Dynamic schema with many configs"},c=void 0,m={unversionedId:"tutorials/structured_config/dynamic_schema",id:"version-1.0/tutorials/structured_config/dynamic_schema",title:"Dynamic schema with many configs",description:"In this page we will see how to get runtime type safety for configs with dynamic schema.",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/7_dynamic_schema_many_configs.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/dynamic_schema",permalink:"/docs/1.0/tutorials/structured_config/dynamic_schema",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/structured_config/7_dynamic_schema_many_configs.md",tags:[],version:"1.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1728940470,formattedLastUpdatedAt:"10/14/2024",sidebarPosition:7,frontMatter:{id:"dynamic_schema",title:"Dynamic schema with many configs"},sidebar:"version-1.0/docs",previous:{title:"Static schema with many configs",permalink:"/docs/1.0/tutorials/structured_config/static_schema"},next:{title:"Config Store API",permalink:"/docs/1.0/tutorials/structured_config/config_store"}},p=[],d={toc:p};function g(e){var t=e.components,n=(0,o.A)(e,s);return(0,a.mdx)("wrapper",(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(i.C,{to:"examples/tutorials/structured_configs/7_dynamic_schema_many_configs",mdxType:"ExampleGithubLink"}),(0,a.mdx)("p",null,"In this page we will see how to get runtime type safety for configs with dynamic schema.\nOur top level config contains a single field - ",(0,a.mdx)("inlineCode",{parentName:"p"},"db"),", with the type ",(0,a.mdx)("inlineCode",{parentName:"p"},"DBConfig"),".\nBased on user choice, we would like its type to be either ",(0,a.mdx)("inlineCode",{parentName:"p"},"MySQLConfig")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"PostGreSQLConfig")," at runtime.\nThe two schemas differs: config files that are appropriate for one are inappropriate for the other."),(0,a.mdx)("p",null,"For each of the two schemas, we have two options - one for prod and one for staging:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Config directory"',title:'"Config','directory"':!0},"\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql_prod.yaml\n    \u251c\u2500\u2500 mysql_staging.yaml\n    \u251c\u2500\u2500 postgresql_prod.yaml\n    \u2514\u2500\u2500 postgresql_staging.yaml\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = MISSING\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    encoding: str = MISSING\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    timeout: int = MISSING\n\n@dataclass\nclass Config:\n    db: DBConfig = MISSING\n\ncs = ConfigStore.instance()\ncs.store(group="schema/db", name="mysql", node=MySQLConfig, package="db")\ncs.store(group="schema/db", name="postgresql", node=PostGreSQLConfig, package="db")\ncs.store(name="config", node=Config)\n\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),(0,a.mdx)("p",null,"When composing the config, we need to select both the schema and the actual config group option.\nThis is what the defaults list looks like:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - schema/db: mysql\n  - db: mysql_staging\n")),(0,a.mdx)("p",null,"Let's dissect the how we store the schemas into the ",(0,a.mdx)("inlineCode",{parentName:"p"},"ConfigStore"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'cs.store(group="schema/db", name="mysql", node=MySQLConfig, package="db")\n')),(0,a.mdx)("p",null,"There are several notable things here:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"We use the group ",(0,a.mdx)("inlineCode",{parentName:"li"},"schema/db")," and not ",(0,a.mdx)("inlineCode",{parentName:"li"},"db"),".",(0,a.mdx)("br",{parentName:"li"}),"Config Groups are mutually exclusive, only one option can be selected from a Config Group. We want to select both the schema and the config.\nStoring all schemas in subgroups of the config group schema is good practice. This also helps in preventing name collisions."),(0,a.mdx)("li",{parentName:"ul"},"We need to specify the package to be ",(0,a.mdx)("inlineCode",{parentName:"li"},"db"),".\nBy default, the package for configs stored in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"ConfigStore")," is ",(0,a.mdx)("inlineCode",{parentName:"li"},"_group_"),". We want to schematize ",(0,a.mdx)("inlineCode",{parentName:"li"},"db")," and not ",(0,a.mdx)("inlineCode",{parentName:"li"},"schema.db")," in the config so we have to override that. ")),(0,a.mdx)("p",null,"By default, we get the mysql staging config:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0},"db:\n  driver: mysql\n  host: mysql001.staging\n  encoding: utf-8\n")),(0,a.mdx)("p",null,"We can change both the schema and the config: "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py schema/db=postgresql db=postgresql_prod"',title:'"$',python:!0,"my_app.py":!0,"schema/db":"postgresql",db:'postgresql_prod"'},"db:\n  driver: postgresql\n  host: postgresql01.prod\n  timeout: 10\n")),(0,a.mdx)("p",null,"If we try to use a postgresql config without changing the schema as well we will get an error:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py db=postgresql_prod"',title:'"$',python:!0,"my_app.py":!0,db:'postgresql_prod"'},"Error merging db=postgresql_prod\nKey 'timeout' not in 'MySQLConfig'\n        full_key: db.timeout\n        reference_type=DBConfig\n        object_type=MySQLConfig\n")))}g.isMDXComponent=!0}}]);