(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),i=(n(0),n(236)),o={id:"rq_launcher",title:"RQ Launcher plugin",sidebar_label:"RQ Launcher plugin"},l={unversionedId:"plugins/rq_launcher",id:"version-1.0/plugins/rq_launcher",isDocsHomePage:!1,title:"RQ Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/rq_launcher.md",slug:"/plugins/rq_launcher",permalink:"/docs/plugins/rq_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/plugins/rq_launcher.md",version:"1.0",lastUpdatedBy:"Evan",lastUpdatedAt:1600577457,sidebar_label:"RQ Launcher plugin",sidebar:"version-1.0/docs",previous:{title:"Nevergrad Sweeper plugin",permalink:"/docs/plugins/nevergrad_sweeper"},next:{title:"Submitit Launcher plugin",permalink:"/docs/plugins/submitit_launcher"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypi.org/project/hydra-rq-launcher/"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-rq-launcher",alt:"PyPI"}))),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-rq-launcher",alt:"PyPI - License"})),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-rq-launcher",alt:"PyPI - Python Version"})),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-rq-launcher"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-rq-launcher.svg",alt:"PyPI - Downloads"}))),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_rq_launcher/example"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_rq_launcher"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(i.b)("p",null,"The RQ Launcher plugin provides a launcher for distributed execution and job queuing based on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://python-rq.org"}),"Redis Queue (RQ)"),"."),Object(i.b)("p",null,"RQ launcher allows parallelizing across multiple nodes and scheduling jobs in queues. Usage of this plugin requires a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.io/topics/quickstart"}),"Redis server"),". When parallelisation on a single node is intended, the Joblib launcher may be preferable, since it works without a database."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-rq-launcher --upgrade\n")),Object(i.b)("p",null,"Usage of this plugin requires a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redis.io/topics/quickstart"}),"Redis server"),"."),Object(i.b)("p",null,"Note that RQ does ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://python-rq.org/docs/#limitations"}),"not support Windows"),"."),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher=rq")," to your command line. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/launcher: rq\n")),Object(i.b)("p",null,"The configuration packaged with the plugin is defined ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_rq_launcher/hydra_plugins/hydra_rq_launcher/config.py"}),"here"),". The default configuration is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=rq --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"rq","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0}),'# @package hydra.launcher\n_target_: hydra_plugins.hydra_rq_launcher.rq_launcher.RQLauncher\nenqueue:\n  job_timeout: null                  # maximum runtime of the job before it\'s killed (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  ttl: null                          # maximum queued time before the job before is discarded (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  result_ttl: null                   # how long successful jobs and their results are kept (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  failure_ttl: null                  # specifies how long failed jobs are kept (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  at_front: false                    # place job at the front of the queue, instead of the back\n  job_id: null                       # job id, will be overidden automatically by a uuid unless specified explicitly\n  description: null                  # description, will be overidden automatically unless specified explicitly\nqueue: default                       # queue name\nredis:\n  host: ${env:REDIS_HOST,localhost}  # host address via REDIS_HOST environment variable, default: localhost\n  port: ${env:REDIS_PORT,6379}       # port via REDIS_PORT environment variable, default: 6379\n  db: ${env:REDIS_DB,0}              # database via REDIS_DB environment variable, default: 0\n  password: ${env:REDIS_PASSWORD,}   # password via REDIS_PASSWORD environment variable, default: no password\n  mock: ${env:REDIS_MOCK,False}      # switch to run without redis server in single thread, for testing purposes only\nstop_after_enqueue: false            # stop after enqueueing by raising custom exception\nwait_polling: 1.0                    # wait time in seconds when polling results\n')),Object(i.b)("p",null,"The plugin is using environment variables to store Redis connection information. The environment variables ",Object(i.b)("inlineCode",{parentName:"p"},"REDIS_HOST"),", ",Object(i.b)("inlineCode",{parentName:"p"},"REDIS_PORT"),", ",Object(i.b)("inlineCode",{parentName:"p"},"REDIS_DB"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"REDIS_PASSWORD"),", are used for the host address, port, database, and password of the server, respectively."),Object(i.b)("p",null,"For example, they might be set as follows when using ",Object(i.b)("inlineCode",{parentName:"p"},"bash")," or ",Object(i.b)("inlineCode",{parentName:"p"},"zsh")," as a shell:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),'export REDIS_HOST="localhost"\nexport REDIS_PORT="6379"\nexport REDIS_DB="0"\nexport REDIS_PASSWORD=""\n')),Object(i.b)("p",null,"Assuming configured environment variables, workers connecting to the Redis server can be launched using:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"rq worker --url redis://:$REDIS_PASSWORD@$REDIS_HOST:$REDIS_PORT/$REDIS_DB\n")),Object(i.b)("p",null,"An ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_rq_launcher/example"}),"example application")," using this launcher is provided in the plugin repository."),Object(i.b)("p",null,"Starting the app with ",Object(i.b)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will enqueue five jobs to be processed by worker instances:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py --multirun task=1,2,3,4,5\n\n[HYDRA] RQ Launcher is enqueuing 5 job(s) in queue : default\n[HYDRA] Sweep output dir : multirun/2020-06-15/18-00-00\n[HYDRA] Enqueued 13b3da4e-03f7-4d16-9ca8-cfb3c48afeae\n[HYDRA]     #1 : task=1\n[HYDRA] Enqueued 00c6a32d-e5a4-432c-a0f3-b9d4ef0dd585\n[HYDRA]     #2 : task=2\n[HYDRA] Enqueued 63b90f27-0711-4c95-8f63-70164fd850df\n[HYDRA]     #3 : task=3\n[HYDRA] Enqueued b1d49825-8b28-4516-90ca-8106477e1eb1\n[HYDRA]     #4 : task=4\n[HYDRA] Enqueued ed96bdaa-087d-4c7f-9ecb-56daf948d5e2\n[HYDRA]     #5 : task=5\n[HYDRA] Finished enqueuing\n[HYDRA] Polling job statuses every 1.0 sec\n")),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://python-rq.org/"}),"RQ documentation")," holds further information on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://python-rq.org/docs/monitoring/"}),"job monitoring"),", which can be done via console or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nvie/rq-dashboard"}),"web interfaces"),", and provides ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://python-rq.org/patterns/"}),"patterns")," for worker and exception handling."))}p.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(h,l(l({ref:t},c),{},{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);