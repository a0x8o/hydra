(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7199],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),g=o,m=f["".concat(c,".").concat(g)]||f[g]||p[g]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3899:function(e,t,n){"use strict";n.d(t,{Z:function(){return c},T:function(){return l}});var r=n(2122),o=n(7294),i=n(6742),a=n(2263),s=n(907);function c(e){return o.createElement(i.Z,(0,r.Z)({},e,{to:(t=e.to,c=(0,s.zu)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==c?void 0:c.name)?n:"current"]+t),target:"_blank"}));var t,n,c}function l(e){var t,n=null!=(t=e.text)?t:"Example";return o.createElement(c,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},3998:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=n(3899),s=["components"],c={id:"using_config",title:"Using the config object"},l=void 0,u={unversionedId:"tutorials/basic/your_first_app/using_config",id:"version-1.1/tutorials/basic/your_first_app/using_config",isDocsHomePage:!1,title:"Using the config object",description:"Here are some basic features of the Hydra Configuration Object:",source:"@site/versioned_docs/version-1.1/tutorials/basic/your_first_app/3_using_config.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/using_config",permalink:"/docs/tutorials/basic/your_first_app/using_config",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/tutorials/basic/your_first_app/3_using_config.md",version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1630639296,formattedLastUpdatedAt:"9/3/2021",sidebarPosition:3,frontMatter:{id:"using_config",title:"Using the config object"},sidebar:"version-1.1/docs",previous:{title:"Specifying a config file",permalink:"/docs/tutorials/basic/your_first_app/config_file"},next:{title:"Grouping config files",permalink:"/docs/tutorials/basic/your_first_app/config_groups"}},p=[],f={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.T,{to:"examples/tutorials/basic/your_first_hydra_app/3_using_config",mdxType:"ExampleGithubLink"}),(0,i.kt)("p",null,"Here are some basic features of the Hydra Configuration Object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},'node:                         # Config is hierarchical\n  loompa: 10                  # Simple value\n  zippity: ${node.loompa}     # Value interpolation\n  do: "oompa ${node.loompa}"  # String interpolation\n  waldo: ???                  # Missing value, must be populated prior to access\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'@hydra.main(config_path=".", config_name="config")\ndef my_app(cfg: DictConfig):\n    assert cfg.node.loompa == 10          # attribute style access\n    assert cfg["node"]["loompa"] == 10    # dictionary style access\n\n    assert cfg.node.zippity == 10         # Value interpolation\n    assert isinstance(cfg.node.zippity, int)  # Value interpolation type\n    assert cfg.node.do == "oompa 10"      # string interpolation\n\n    cfg.node.waldo                        # raises an exception\n')),(0,i.kt)("p",null,"Outputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ python my_app.py \nTraceback (most recent call last):\n  File "my_app.py", line 32, in my_app\n    cfg.node.waldo\nomegaconf.errors.MissingMandatoryValue: Missing mandatory value: node.waldo\n    full_key: node.waldo\n    object_type=dict\n')),(0,i.kt)("p",null,"Hydra's configuration object is an instance of OmegaConf's DictConfig.\nYou can learn more about OmegaConf ",(0,i.kt)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation",target:"_blank"},"here"),"."))}g.isMDXComponent=!0}}]);