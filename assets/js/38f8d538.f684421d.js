(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8071],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3899:function(e,n,t){"use strict";t.d(n,{Z:function(){return s},T:function(){return p}});var r=t(2122),a=t(7294),i=t(6742),l=t(2263),o=t(907);function s(e){return a.createElement(i.Z,(0,r.Z)({},e,{to:(n=e.to,s=(0,o.zu)(),(0,l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==s?void 0:s.name)?t:"current"]+n),target:"_blank"}));var n,t,s}function p(e){var n,t=null!=(n=e.text)?n:"Example";return a.createElement(s,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}},3303:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),l=t(3899),o=["components"],s={id:"rq_launcher",title:"RQ Launcher plugin",sidebar_label:"RQ Launcher plugin"},p=void 0,u={unversionedId:"plugins/rq_launcher",id:"version-1.1/plugins/rq_launcher",isDocsHomePage:!1,title:"RQ Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.1/plugins/rq_launcher.md",sourceDirName:"plugins",slug:"/plugins/rq_launcher",permalink:"/docs/plugins/rq_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/plugins/rq_launcher.md",version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1630639296,formattedLastUpdatedAt:"9/3/2021",frontMatter:{id:"rq_launcher",title:"RQ Launcher plugin",sidebar_label:"RQ Launcher plugin"},sidebar:"version-1.1/docs",previous:{title:"Ray Launcher plugin",permalink:"/docs/plugins/ray_launcher"},next:{title:"Submitit Launcher plugin",permalink:"/docs/plugins/submitit_launcher"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],d={toc:c};function h(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/hydra-rq-launcher/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-rq-launcher",alt:"PyPI"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-rq-launcher",alt:"PyPI - License"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-rq-launcher",alt:"PyPI - Python Version"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-rq-launcher"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-rq-launcher.svg",alt:"PyPI - Downloads"})),(0,i.kt)(l.T,{text:"Example application",to:"plugins/hydra_rq_launcher/examples",mdxType:"ExampleGithubLink"}),(0,i.kt)(l.T,{text:"Plugin source",to:"plugins/hydra_rq_launcher",mdxType:"ExampleGithubLink"})),(0,i.kt)("p",null,"The RQ Launcher plugin provides a launcher for distributed execution and job queuing based on ",(0,i.kt)("a",{parentName:"p",href:"https://python-rq.org"},"Redis Queue (RQ)"),"."),(0,i.kt)("p",null,"RQ launcher allows parallelizing across multiple nodes and scheduling jobs in queues. Usage of this plugin requires a ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/topics/quickstart"},"Redis server"),". When parallelisation on a single node is intended, the Joblib launcher may be preferable, since it works without a database."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-rq-launcher --upgrade\n")),(0,i.kt)("p",null,"Usage of this plugin requires a ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/topics/quickstart"},"Redis server"),"."),(0,i.kt)("p",null,"Note that RQ does ",(0,i.kt)("a",{parentName:"p",href:"https://python-rq.org/docs/#limitations"},"not support Windows"),"."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Once installed, add ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra/launcher=rq")," to your command line. Alternatively, override ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/launcher: rq\n")),(0,i.kt)("p",null,"The default configuration is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=rq --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"rq","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\n_target_: hydra_plugins.hydra_rq_launcher.rq_launcher.RQLauncher\nenqueue:\n  job_timeout: null\n  ttl: null\n  result_ttl: null\n  failure_ttl: null\n  at_front: false\n  job_id: null\n  description: null\nqueue: default \nredis:\n  host: ${oc.env:REDIS_HOST,localhost}\n  port: ${oc.env:REDIS_PORT,6379}\n  db: ${oc.env:REDIS_DB,0}\n  password: ${oc.env:REDIS_PASSWORD,null}\n  ssl: ${oc.env:REDIS_SSL,False}\n  ssl_ca_certs: ${oc.env:REDIS_SSL_CA_CERTS,null\n  mock: ${oc.env:REDIS_MOCK,False}\nstop_after_enqueue: false\nwait_polling: 1.0\n")),(0,i.kt)("p",null,"Further descriptions on the variables can be found in the plugin config file, defined ",(0,i.kt)(l.Z,{to:"plugins/hydra_rq_launcher/hydra_plugins/hydra_rq_launcher/config.py",mdxType:"GithubLink"},"here"),". There are several standard approaches for configuring plugins. Check ",(0,i.kt)("a",{parentName:"p",href:"/docs/patterns/configuring_plugins"},"this page")," for more information."),(0,i.kt)("p",null,"The plugin is using environment variables to store Redis connection information. The environment variables ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_HOST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_PORT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_DB"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_PASSWORD"),", are used for the host address, port, database, and password of the server, respectively. Support for Redis SSL connections is controlled through ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_SSL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"REDIS_SSL_CA_CERTS"),"; see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/andymccurdy/redis-py#ssl-connections"},"redis-py")," documentation."),(0,i.kt)("p",null,"For example, they might be set as follows when using ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"zsh")," as a shell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},'export REDIS_HOST="localhost"\nexport REDIS_PORT="6379"\nexport REDIS_DB="0"\nexport REDIS_PASSWORD=""\n')),(0,i.kt)("p",null,"Enable SSL by setting the relevant environment variables. e.g:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"export REDIS_SSL=true\nexport REDIS_SSL_CA_CERTS=/etc/ssl/certs/ca-certificates.crt\n")),(0,i.kt)("p",null,"Assuming configured environment variables, workers connecting to the Redis server can be launched using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"rq worker --url redis://:$REDIS_PASSWORD@$REDIS_HOST:$REDIS_PORT/$REDIS_DB\n")),(0,i.kt)("p",null,"An ",(0,i.kt)(l.Z,{to:"plugins/hydra_rq_launcher/example",mdxType:"GithubLink"},"example application")," using this launcher is provided in the plugin repository."),(0,i.kt)("p",null,"Starting the app with ",(0,i.kt)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will enqueue five jobs to be processed by worker instances:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --multirun task=1,2,3,4,5\n\n[HYDRA] RQ Launcher is enqueuing 5 job(s) in queue : default\n[HYDRA] Sweep output dir : multirun/2020-06-15/18-00-00\n[HYDRA] Enqueued 13b3da4e-03f7-4d16-9ca8-cfb3c48afeae\n[HYDRA]     #1 : task=1\n[HYDRA] Enqueued 00c6a32d-e5a4-432c-a0f3-b9d4ef0dd585\n[HYDRA]     #2 : task=2\n[HYDRA] Enqueued 63b90f27-0711-4c95-8f63-70164fd850df\n[HYDRA]     #3 : task=3\n[HYDRA] Enqueued b1d49825-8b28-4516-90ca-8106477e1eb1\n[HYDRA]     #4 : task=4\n[HYDRA] Enqueued ed96bdaa-087d-4c7f-9ecb-56daf948d5e2\n[HYDRA]     #5 : task=5\n[HYDRA] Finished enqueuing\n[HYDRA] Polling job statuses every 1.0 sec\n")),(0,i.kt)("p",null,"Note that any dependencies need to be installed in the Python environment used to run the RQ worker. For serialization of jobs ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cloudpickle/cloudpickle"},(0,i.kt)("inlineCode",{parentName:"a"},"cloudpickle"))," is used."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://python-rq.org/"},"RQ documentation")," holds further information on ",(0,i.kt)("a",{parentName:"p",href:"http://python-rq.org/docs/monitoring/"},"job monitoring"),", which can be done via console or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvie/rq-dashboard"},"web interfaces"),", and provides ",(0,i.kt)("a",{parentName:"p",href:"https://python-rq.org/patterns/"},"patterns")," for worker and exception handling."))}h.isMDXComponent=!0}}]);