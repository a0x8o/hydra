(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(346)),u=n(353),o={id:"submitit_launcher",title:"Submitit Launcher plugin",sidebar_label:"Submitit Launcher plugin"},c={unversionedId:"plugins/submitit_launcher",id:"version-1.1/plugins/submitit_launcher",isDocsHomePage:!1,title:"Submitit Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.1/plugins/submitit_launcher.md",slug:"/plugins/submitit_launcher",permalink:"/docs/plugins/submitit_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.1/plugins/submitit_launcher.md",version:"1.1",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1623898640,formattedLastUpdatedAt:"6/17/2021",sidebar_label:"Submitit Launcher plugin",sidebar:"version-1.1/docs",previous:{title:"RQ Launcher plugin",permalink:"/docs/plugins/rq_launcher"},next:{title:"Ax Sweeper plugin",permalink:"/docs/plugins/ax_sweeper"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://pypi.org/project/hydra-submitit-launcher/"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-submitit-launcher",alt:"PyPI"})),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-submitit-launcher",alt:"PyPI - License"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-submitit-launcher",alt:"PyPI - Python Version"}),"\n",Object(i.b)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-submitit-launcher"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-submitit-launcher.svg",alt:"PyPI - Downloads"})),Object(i.b)(u.a,{text:"Example application",to:"plugins/hydra_submitit_launcher/examples",mdxType:"ExampleGithubLink"}),Object(i.b)(u.a,{text:"Plugin source",to:"plugins/hydra_submitit_launcher",mdxType:"ExampleGithubLink"})),Object(i.b)("p",null,"The Submitit Launcher plugin provides a ",Object(i.b)("a",{parentName:"p",href:"https://slurm.schedmd.com/documentation.html"},"SLURM")," Launcher based on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebookincubator/submitit"},"Submitit"),"."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-submitit-launcher --upgrade\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher=submitit_slurm")," to your command line. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/launcher: submitit_slurm\n")),Object(i.b)("p",null,"There are several standard approaches for configuring plugins. Check ",Object(i.b)("a",{parentName:"p",href:"/docs/patterns/configuring_plugins"},"this page")," for more information.\nNote that this plugin expects a valid environment in the target host. Usually this means a shared file system between\nthe launching host and the target host."),Object(i.b)("p",null,"The Submitit Plugin implements 2 different launchers: ",Object(i.b)("inlineCode",{parentName:"p"},"submitit_slurm")," to run on a SLURM cluster, and ",Object(i.b)("inlineCode",{parentName:"p"},"submitit_local")," for basic local tests."),Object(i.b)("details",null,Object(i.b)("summary",null,"Discover the SLURM Launcher parameters ",Object(i.b)("b",null,"(Expand)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=submitit_slurm --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"submitit_slurm","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\nsubmitit_folder: $&#123;hydra.sweep.dir/.submitit/%j\ntimeout_min: 60\ncpus_per_task: null\ngpus_per_node: null\ntasks_per_node: 1\nmem_gb: null\nnodes: 1\nname: ${hydra.job.name}\n_target_: hydra_plugins.hydra_submitit_launcher.submitit_launcher.SlurmLauncher\npartition: null\ncomment: null\nconstraint: null\nexclude: null\ncpus_per_gpu: null\ngpus_per_task: null\nmem_per_gpu: null\nmem_per_cpu: null\nsignal_delay_s: 120\nmax_num_timeout: 0\nadditional_parameters: {}\narray_parallelism: 256\nsetup: null\n"))),Object(i.b)("details",null,Object(i.b)("summary",null,"Discover the Local Launcher parameters ",Object(i.b)("b",null,"(Expand)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python example/my_app.py hydra/launcher=submitit_local --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"example/my_app.py":!0,"hydra/launcher":"submitit_local","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\n_target_: hydra_plugins.hydra_submitit_launcher.submitit_launcher.LocalLauncher\nsubmitit_folder: ${hydra.sweep.dir}/.submitit/%j\ntimeout_min: 60\ncpus_per_task: 1\ngpus_per_node: 0\ntasks_per_node: 1\nmem_gb: 4\nnodes: 1\nname: ${hydra.job.name}\n"))),Object(i.b)("br",null),"You can set all these parameters in your configuration file and/or override them in the command-line:",Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"python foo.py --multirun hydra/launcher=submitit_slurm hydra.launcher.timeout_min=3\n")),Object(i.b)("p",null,"For more details, including descriptions for each parameter, check out the ",Object(i.b)(u.b,{to:"plugins/hydra_submitit_launcher/hydra_plugins/hydra_submitit_launcher/config.py",mdxType:"GithubLink"},"config file"),".\nYou can also check the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebookincubator/submitit"},"Submitit documentation"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Caution"),": use of ",Object(i.b)("inlineCode",{parentName:"p"},"--multirun")," is required for the launcher to be picked up."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"An ",Object(i.b)(u.b,{to:"plugins/hydra_submitit_launcher/example",mdxType:"GithubLink"},"example application")," using this launcher is provided in the plugin repository."),Object(i.b)("p",null,"Starting the app with ",Object(i.b)("inlineCode",{parentName:"p"},"python my_app.py task=1,2,3 --multirun")," (see ",Object(i.b)("a",{parentName:"p",href:"/docs/tutorials/basic/running_your_app/multi-run"},"Multi-run")," for details) will launch 3 executions (you can override the launcher to run locally for testing by adding ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher=submitit_local"),"):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py task=1,2,3 --multirun\n[HYDRA] Sweep output dir : multirun/2020-05-28/15-05-22\n[HYDRA]        #0 : task=1\n[HYDRA]        #1 : task=2\n[HYDRA]        #2 : task=3\n")),Object(i.b)("p",null,"You will be able to see the output of the app in the output dir:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-commandline"},"$ tree\n.\n\u251c\u2500\u2500 0\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u251c\u2500\u2500 1\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u251c\u2500\u2500 2\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u2514\u2500\u2500 multirun.yaml\n\n$ cat 0/my_app.log \n[2020-05-28 15:05:23,511][__main__][INFO] - Process ID 15887 executing task 1 ...\n[2020-05-28 15:05:24,514][submitit][INFO] - Job completed successfully\n")))}p.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(u,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var s=2;s<i;s++)u[s]=n[s];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},347:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},348:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(11),u=n(347),o=n(7),c=Object(r.createContext)({collectLink:function(){}}),s=n(349),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,b=e.to,m=e.href,h=e.activeClassName,g=e.isActive,f=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(s.b)().withBaseUrl,_=Object(r.useContext)(c),x=b||m,D=Object(u.a)(x),w=null==x?void 0:x.replace("pathname://",""),P=void 0!==w?(n=w,v&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,A=Object(r.useRef)(!1),k=d?i.e:i.c,N=o.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!N&&D&&window.docusaurus.prefetch(P),function(){N&&p&&p.disconnect()}}),[P,N,D]);var L=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,E=!P||!D||L;return P&&D&&!L&&!f&&_.collectLink(P),E?a.a.createElement("a",Object.assign({href:P},x&&!D&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(k,Object.assign({},O,{onMouseEnter:function(){A.current||(window.docusaurus.preload(P),A.current=!0)},innerRef:function(e){var t,n;N&&e&&D&&(t=e,n=function(){window.docusaurus.prefetch(P)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:P||""},d&&{isActive:g,activeClassName:h}))}},349:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(10),a=n(347);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,o=void 0!==u&&u,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},350:function(e,t,n){try{e.exports=n(351)}catch(a){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),a=n(38),i=n(352);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=r.useLocation().pathname;return i.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getDocVersionSuggestions(n,a)}},352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,i,u=t.getActiveVersion(e,n),o=null==u?void 0:u.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:u,activeDoc:o,alternateDocVersions:o?(a=o.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),i=a.activeVersion!==r;return{latestDocSuggestion:i?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},353:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(0),i=n.n(a),u=n(348),o=n(10),c=n(350);function s(e){return i.a.createElement(u.a,Object(r.a)({},e,{to:(t=e.to,a=Object(c.useActiveVersion)(),Object(o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==a?void 0:a.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,a}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(s,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);