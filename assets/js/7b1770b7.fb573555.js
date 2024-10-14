"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8944],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),m=function(e){return function(n){var t=c(n.components);return r.createElement(e,a({},n,{components:t}))}},c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,p(p({ref:n},l),{},{components:t})):r.createElement(g,p({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},49595:(e,n,t)=>{t.d(n,{A:()=>s,C:()=>l});var r=t(58168),o=t(96540),a=t(75489),i=t(44586),p=t(74098);function s(e){return o.createElement(a.default,(0,r.A)({},e,{to:(n=e.to,s=(0,p.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==s?void 0:s.name)?t:"current"]+n),target:"_blank"}));var n,t,s}function l(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(s,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},80489:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var r=t(58168),o=t(98587),a=(t(96540),t(15680)),i=t(49595),p=["components"],s={id:"config_groups",title:"Grouping config files"},l=void 0,m={unversionedId:"tutorials/basic/your_first_app/config_groups",id:"version-1.0/tutorials/basic/your_first_app/config_groups",title:"Grouping config files",description:"Suppose you want to benchmark your application on each of PostgreSQL and MySQL. To do this, use config groups.",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/4_config_groups.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/config_groups",permalink:"/docs/1.0/tutorials/basic/your_first_app/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/4_config_groups.md",tags:[],version:"1.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1728940470,formattedLastUpdatedAt:"10/14/2024",sidebarPosition:4,frontMatter:{id:"config_groups",title:"Grouping config files"},sidebar:"version-1.0/docs",previous:{title:"Using the config object",permalink:"/docs/1.0/tutorials/basic/your_first_app/using_config"},next:{title:"Selecting defaults for config groups",permalink:"/docs/1.0/tutorials/basic/your_first_app/defaults"}},c=[{value:"Using config groups",id:"using-config-groups",children:[],level:3},{value:"More advanced usages of config groups",id:"more-advanced-usages-of-config-groups",children:[],level:3}],d={toc:c};function u(e){var n=e.components,t=(0,o.A)(e,p);return(0,a.mdx)("wrapper",(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(i.C,{to:"examples/tutorials/basic/your_first_hydra_app/4_config_groups",mdxType:"ExampleGithubLink"}),(0,a.mdx)("p",null,"Suppose you want to benchmark your application on each of PostgreSQL and MySQL. To do this, use config groups. "),(0,a.mdx)("p",null,"A ",(0,a.mdx)("em",{parentName:"p"},(0,a.mdx)("strong",{parentName:"em"},"Config Group"))," is a named group with a set of valid options."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"The config options are mutually exclusive. Only one can be selected."),(0,a.mdx)("li",{parentName:"ul"},"Selecting a non-existent config option generates an error message with the valid options.")),(0,a.mdx)("p",null,"To create a config group, create a directory. e.g. ",(0,a.mdx)("inlineCode",{parentName:"p"},"db")," to hold a file for each database configuration option.\nSince we are expecting to have multiple config groups, we will proactively move all the configuration files\ninto a ",(0,a.mdx)("inlineCode",{parentName:"p"},"conf")," directory."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Directory layout"',title:'"Directory','layout"':!0},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2514\u2500\u2500 db\n\u2502\xa0\xa0     \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 postgresql.yaml\n\u2514\u2500\u2500 my_app.py\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"# @package _group_\ndriver: mysql\nuser: omry\npassword: secret\n")),(0,a.mdx)("p",null,"The config group determines the ",(0,a.mdx)("inlineCode",{parentName:"p"},"package")," of the config content inside the final config object.  "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Interpretation of db/mysql.yaml" {1}',title:'"Interpretation',of:!0,'db/mysql.yaml"':!0,"{1}":!0},"db:\n  driver: mysql\n  user: omry\n  password: secret \n")),(0,a.mdx)("p",null,"In Hydra 1.1 ",(0,a.mdx)("inlineCode",{parentName:"p"},"_group_")," will become the default package.",(0,a.mdx)("br",{parentName:"p"}),"\n","For now, add ",(0,a.mdx)("inlineCode",{parentName:"p"},"# @package _group_")," at the top of your config group files.",(0,a.mdx)("br",{parentName:"p"}),"\n","Learn more about packages directive ",(0,a.mdx)("a",{parentName:"p",href:"/docs/1.0/advanced/overriding_packages"},"here"),". "),(0,a.mdx)("h3",{id:"using-config-groups"},"Using config groups"),(0,a.mdx)("p",null,"Since we moved all the configs into the ",(0,a.mdx)("inlineCode",{parentName:"p"},"conf")," directory, we need to tell Hydra where to find them using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"config_path")," parameter.\n",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("inlineCode",{parentName:"strong"},"config_path")," is a directory relative to ",(0,a.mdx)("inlineCode",{parentName:"strong"},"my_app.py")),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py" {1}',title:'"my_app.py"',"{1}":!0},'@hydra.main(config_path="conf")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),(0,a.mdx)("p",null,"Running ",(0,a.mdx)("inlineCode",{parentName:"p"},"my_app.py")," without requesting a configuration will print an empty config."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\n{}\n")),(0,a.mdx)("p",null,"You can append an item a config group to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Defaults List"),".",(0,a.mdx)("br",{parentName:"p"}),"\n","The ",(0,a.mdx)("inlineCode",{parentName:"p"},"Defaults List")," is described on the next page."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgres_user\n")),(0,a.mdx)("p",null,"Like before, you can still override individual values in the resulting config:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),(0,a.mdx)("h3",{id:"more-advanced-usages-of-config-groups"},"More advanced usages of config groups"),(0,a.mdx)("p",null,"Config groups can be nested. For example the config group ",(0,a.mdx)("inlineCode",{parentName:"p"},"db/mysql/storage_engine")," can contain ",(0,a.mdx)("inlineCode",{parentName:"p"},"innodb.yaml")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"myisam.yaml"),".\nWhen selecting an option from a nested config group, use ",(0,a.mdx)("inlineCode",{parentName:"p"},"/"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ python my_app.py +db=mysql +db/mysql/storage_engine=innodb\ndb:\n  driver: mysql\n  user: omry\n  password: secret \n  mysql:\n    storage_engine:\n      innodb_data_file_path: /var/lib/mysql/ibdata1\n      max_file_size: 1G\n")),(0,a.mdx)("p",null,"This simple example also demonstrated a very powerful feature of Hydra:\nYou can compose your configuration object from multiple configuration groups."))}u.isMDXComponent=!0}}]);