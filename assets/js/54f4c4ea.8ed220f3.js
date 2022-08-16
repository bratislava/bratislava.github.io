"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[24],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},o="Deployment & Environments",l={unversionedId:"deployment-and-infrastructure/deployment",id:"deployment-and-infrastructure/deployment",title:"Deployment & Environments",description:"TODO CONTINUE HERE",source:"@site/docs/deployment-and-infrastructure/deployment.md",sourceDirName:"deployment-and-infrastructure",slug:"/deployment-and-infrastructure/deployment",permalink:"/docs/deployment-and-infrastructure/deployment",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/deployment-and-infrastructure/deployment.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debuging",permalink:"/docs/deployment-and-infrastructure/kubernetes/Debuging"},next:{title:"Environment variables & Secrets",permalink:"/docs/deployment-and-infrastructure/env-vars-and-secrets"}},s={},p=[{value:"Accesses required for deployment",id:"accesses-required-for-deployment",level:2},{value:"Harbor Policies",id:"harbor-policies",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deployment--environments"},"Deployment & Environments"),(0,a.kt)("p",null,"TODO CONTINUE HERE"),(0,a.kt)("p",null,"Most of our projects are set up to be dockerized and deployed into our Kubernetes infrastructure. This can be done semi-manually using out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bratislava/bratiska-cli"},"bratiska-cli")," tool. You can find detailed manual & requirements in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bratislava/bratiska-cli#readme"},"README"),", but most of the time all you need is:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"make sure you are signed into docker harbor"),(0,a.kt)("li",{parentName:"ol"},"make sure your are signed into the correct kbs cluster"),(0,a.kt)("li",{parentName:"ol"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"bratiska-cli deploy --<env>")," where ",(0,a.kt)("inlineCode",{parentName:"li"},"<env>")," is one of ",(0,a.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"staging"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"prod"))),(0,a.kt)("h2",{id:"accesses-required-for-deployment"},"Accesses required for deployment"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Docker Harbor access - can be granted ",(0,a.kt)("a",{parentName:"li",href:"https://portal.azure.com/#view/Microsoft_AAD_IAM/ManagedAppMenuBlade/~/Users/objectId/7b1ee611-cf01-4179-a765-215ee291f687/appId/216af6db-a39f-44b3-94d1-fd5142f14e6a"},"here")," (note - ",(0,a.kt)("a",{parentName:"li",href:"https://portal.azure.com/#view/Microsoft_AAD_IAM/GroupDetailsMenuBlade/~/Members/groupId/48fcf79f-46c5-44fc-8608-70eb512f840c"},"OIADS_EMPLOYEES")," are included by default)"),(0,a.kt)("li",{parentName:"ol"},"Kubernetes access - contact the IT department or this"),(0,a.kt)("li",{parentName:"ol"},"Github access")),(0,a.kt)("h2",{id:"harbor-policies"},"Harbor Policies"),(0,a.kt)("p",null,"As we have a somewhat limited space in our Harbor instance, all repositories are subjected to retention policy.",(0,a.kt)("br",{parentName:"p"}),"\n","Currently, every project is entitled to 30 images altogether, split across different tags: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"5 ",(0,a.kt)("em",{parentName:"li"},"latest")," images with ",(0,a.kt)("inlineCode",{parentName:"li"},"prod*")," tag"),(0,a.kt)("li",{parentName:"ul"},"5 ",(0,a.kt)("em",{parentName:"li"},"latest")," images with ",(0,a.kt)("inlineCode",{parentName:"li"},"stag*")," tag"),(0,a.kt)("li",{parentName:"ul"},"10 ",(0,a.kt)("em",{parentName:"li"},"latest")," images with ",(0,a.kt)("inlineCode",{parentName:"li"},"dev*")," tag"),(0,a.kt)("li",{parentName:"ul"},"10 ",(0,a.kt)("em",{parentName:"li"},"latest")," images with ",(0,a.kt)("strong",{parentName:"li"},"some")," tag"),(0,a.kt)("li",{parentName:"ul"},"Images without ",(0,a.kt)("strong",{parentName:"li"},"any")," tags will be removed")),(0,a.kt)("p",null,"The policy is ran once a day at midnight, so during the day you might push more then specified limits. Also, please note that ",(0,a.kt)("inlineCode",{parentName:"p"},"bratiska-cli")," will automatically add ",(0,a.kt)("inlineCode",{parentName:"p"},"dev-latest"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stage-latest")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"prod-latest")," tags, so be careful when running production or staging pushes not to remove currently deployed production images."))}u.isMDXComponent=!0}}]);