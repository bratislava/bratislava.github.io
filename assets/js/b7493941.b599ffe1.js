"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[8280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Strapi",s={unversionedId:"technologies/strapi",id:"technologies/strapi",title:"Strapi",description:"Initial Strapi Project (& Deployment) setup",source:"@site/docs/technologies/strapi.md",sourceDirName:"technologies",slug:"/technologies/strapi",permalink:"/docs/technologies/strapi",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/technologies/strapi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sentry",permalink:"/docs/technologies/sentry"},next:{title:"Deployment and Infrastructure",permalink:"/docs/category/deployment-and-infrastructure"}},l={},p=[{value:"Initial Strapi Project (&amp; Deployment) setup",id:"initial-strapi-project--deployment-setup",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"strapi"},"Strapi"),(0,a.kt)("h2",{id:"initial-strapi-project--deployment-setup"},"Initial Strapi Project (& Deployment) setup"),(0,a.kt)("p",null,"As of Strapi v4.3 (and unlikely to change in near future), the 'clean' Strapi init generates a few secrets for you into ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file - these are used as seeds to generate one-time tokens and thus the ones used in production shouldn't be stored in github."),(0,a.kt)("p",null,"This means you need to insert the following env vars as secrets:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADMIN_JWT_SECRET\nAPI_TOKEN_SALT\nAPP_KEYS\nJWT_SECRET\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"ADMIN_JWT_SECRET")," are 4 base64 encoded strings separated by comma ",(0,a.kt)("inlineCode",{parentName:"p"},",")," character, and the rest are base64 encoded strings. Strapi docs ",(0,a.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html"},"recommend")," generating the secrets with ",(0,a.kt)("inlineCode",{parentName:"p"},"openssl")," command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"openssl rand -base64 32")),(0,a.kt)("p",null,"Specifically, for APP_KEYS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"APP_KEYS=$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32)\n")),(0,a.kt)("p",null,"This means the secret file will look something like this (replace the placeholder values with the openssl result ",(0,a.kt)("em",{parentName:"p"},"encoded once more into base64")," - more details in ",(0,a.kt)("a",{parentName:"p",href:"/docs/deployment-and-infrastructure/secrets"},"secrets docs"),")):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: bratislava-strapi-internals-secret\ndata:\n  ADMIN_JWT_SECRET: YmFuYW5h\n  API_TOKEN_SALT: YmFuYW5h\n  APP_KEYS: YmFuYW5h\n  JWT_SECRET: YmFuYW5h\n")),(0,a.kt)("p",null,"Other than that, your setup should include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dockerfile"),(0,a.kt)("li",{parentName:"ul"},"dockerignore"),(0,a.kt)("li",{parentName:"ul"},"kubernetes directory")),(0,a.kt)("p",null,"best copied over from one of the maintained project (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"bratislava.sk"),")"))}u.isMDXComponent=!0}}]);