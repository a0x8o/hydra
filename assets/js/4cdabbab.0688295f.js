"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[816],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>o,withMDXComponents:()=>s});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),s=function(e){return function(n){var t=o(n.components);return a.createElement(e,i({},n,{components:t}))}},o=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(t),c=r,h=s["".concat(l,".").concat(c)]||s[c]||d[c]||i;return t?a.createElement(h,u(u({ref:n},m),{},{components:t})):a.createElement(h,u({ref:n},m))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=h;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var m=2;m<i;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},49595:(e,n,t)=>{t.d(n,{A:()=>p,C:()=>m});var a=t(58168),r=t(96540),i=t(75489),l=t(44586),u=t(74098);function p(e){return r.createElement(i.default,(0,a.A)({},e,{to:(n=e.to,p=(0,u.useActiveVersion)(),(0,l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==p?void 0:p.name)?t:"current"]+n),target:"_blank"}));var n,t,p}function m(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return r.createElement(p,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},72883:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>m,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>o});var a=t(58168),r=t(98587),i=(t(96540),t(15680)),l=t(49595),u=["components"],p={id:"submitit_launcher",title:"Submitit Launcher plugin",sidebar_label:"Submitit Launcher plugin"},m=void 0,s={unversionedId:"plugins/submitit_launcher",id:"version-1.3/plugins/submitit_launcher",title:"Submitit Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.3/plugins/submitit_launcher.md",sourceDirName:"plugins",slug:"/plugins/submitit_launcher",permalink:"/docs/1.3/plugins/submitit_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.3/plugins/submitit_launcher.md",tags:[],version:"1.3",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1728940470,formattedLastUpdatedAt:"10/14/2024",frontMatter:{id:"submitit_launcher",title:"Submitit Launcher plugin",sidebar_label:"Submitit Launcher plugin"},sidebar:"docs",previous:{title:"RQ Launcher plugin",permalink:"/docs/1.3/plugins/rq_launcher"},next:{title:"Ax Sweeper plugin",permalink:"/docs/1.3/plugins/ax_sweeper"}},o=[{value:"Installation",id:"installation",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],c={toc:o};function d(e){var n=e.components,t=(0,r.A)(e,u);return(0,i.mdx)("wrapper",(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://pypi.org/project/hydra-submitit-launcher/"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-submitit-launcher",alt:"PyPI"})),"\n",(0,i.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-submitit-launcher",alt:"PyPI - License"}),"\n",(0,i.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-submitit-launcher",alt:"PyPI - Python Version"}),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-submitit-launcher"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-submitit-launcher.svg",alt:"PyPI - Downloads"})),(0,i.mdx)(l.C,{text:"Example application",to:"plugins/hydra_submitit_launcher/examples",mdxType:"ExampleGithubLink"}),(0,i.mdx)(l.C,{text:"Plugin source",to:"plugins/hydra_submitit_launcher",mdxType:"ExampleGithubLink"})),(0,i.mdx)("p",null,"The Submitit Launcher plugin provides a ",(0,i.mdx)("a",{parentName:"p",href:"https://slurm.schedmd.com/documentation.html"},"SLURM")," Launcher based on ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/submitit"},"Submitit"),"."),(0,i.mdx)("h3",{id:"installation"},"Installation"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-submitit-launcher --upgrade\n")),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)("p",null,"Once installed, add ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/launcher=submitit_slurm")," to your command line. Alternatively, override ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/launcher: submitit_slurm\n")),(0,i.mdx)("p",null,"There are several standard approaches for configuring plugins. Check ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.3/patterns/configuring_plugins"},"this page")," for more information.\nNote that this plugin expects a valid environment in the target host. Usually this means a shared file system between\nthe launching host and the target host."),(0,i.mdx)("p",null,"The Submitit Plugin implements 2 different launchers: ",(0,i.mdx)("inlineCode",{parentName:"p"},"submitit_slurm")," to run on a SLURM cluster, and ",(0,i.mdx)("inlineCode",{parentName:"p"},"submitit_local")," for basic local tests."),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Discover the SLURM Launcher parameters ",(0,i.mdx)("b",null,"(Expand)")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=submitit_slurm --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"submitit_slurm","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\nsubmitit_folder: ${hydra.sweep.dir}/.submitit/%j\ntimeout_min: 60\ncpus_per_task: null\ngpus_per_node: null\ntasks_per_node: 1\nmem_gb: null\nnodes: 1\nname: ${hydra.job.name}\n_target_: hydra_plugins.hydra_submitit_launcher.submitit_launcher.SlurmLauncher\npartition: null\nqos: null\ncomment: null\nconstraint: null\nexclude: null\ngres: null\ncpus_per_gpu: null\ngpus_per_task: null\nmem_per_gpu: null\nmem_per_cpu: null\naccount: null\nsignal_delay_s: 120\nmax_num_timeout: 0\nadditional_parameters: {}\narray_parallelism: 256\nsetup: null\nsrun_args: null\n"))),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Discover the Local Launcher parameters ",(0,i.mdx)("b",null,"(Expand)")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python example/my_app.py hydra/launcher=submitit_local --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"example/my_app.py":!0,"hydra/launcher":"submitit_local","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\n_target_: hydra_plugins.hydra_submitit_launcher.submitit_launcher.LocalLauncher\nsubmitit_folder: ${hydra.sweep.dir}/.submitit/%j\ntimeout_min: 60\ncpus_per_task: 1\ngpus_per_node: 0\ntasks_per_node: 1\nmem_gb: 4\nnodes: 1\nname: ${hydra.job.name}\n"))),(0,i.mdx)("br",null),"You can set all these parameters in your configuration file and/or override them in the command-line:",(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"python foo.py --multirun hydra/launcher=submitit_slurm hydra.launcher.timeout_min=3\n")),(0,i.mdx)("p",null,"For more details, including descriptions for each parameter, check out the ",(0,i.mdx)(l.A,{to:"plugins/hydra_submitit_launcher/hydra_plugins/hydra_submitit_launcher/config.py",mdxType:"GithubLink"},"config file"),".\nYou can also check the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/submitit"},"Submitit documentation"),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Caution"),": use of ",(0,i.mdx)("inlineCode",{parentName:"p"},"--multirun")," is required for the launcher to be picked up."),(0,i.mdx)("h3",{id:"example"},"Example"),(0,i.mdx)("p",null,"An ",(0,i.mdx)(l.A,{to:"plugins/hydra_submitit_launcher/example",mdxType:"GithubLink"},"example application")," using this launcher is provided in the plugin repository."),(0,i.mdx)("p",null,"Starting the app with ",(0,i.mdx)("inlineCode",{parentName:"p"},"python my_app.py task=1,2,3 --multirun")," (see ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.3/tutorials/basic/running_your_app/multi-run"},"Multi-run")," for details) will launch 3 executions (you can override the launcher to run locally for testing by adding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/launcher=submitit_local"),"):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py task=1,2,3 --multirun\n[HYDRA] Sweep output dir : multirun/2020-05-28/15-05-22\n[HYDRA]        #0 : task=1\n[HYDRA]        #1 : task=2\n[HYDRA]        #2 : task=3\n")),(0,i.mdx)("p",null,"You will be able to see the output of the app in the output dir:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ tree\n.\n\u251c\u2500\u2500 0\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u251c\u2500\u2500 1\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u251c\u2500\u2500 2\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u2514\u2500\u2500 multirun.yaml\n\n$ cat 0/my_app.log \n[2020-05-28 15:05:23,511][__main__][INFO] - Process ID 15887 executing task 1 ...\n[2020-05-28 15:05:24,514][submitit][INFO] - Job completed successfully\n")))}d.isMDXComponent=!0}}]);