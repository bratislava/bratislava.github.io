"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[1774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7996:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},s="Project Structure",i={unversionedId:"technologies/NestJS/ProjectStructure",id:"technologies/NestJS/ProjectStructure",title:"Project Structure",description:"This part will show you, how to create basic structure of your NEST application. How to generate project and how to prepare folders and document structure. If you are familiar with nest after, this you can start programming. If not, you can check nest documentation https://docs.nestjs.com, or check other parts of this docs.",source:"@site/docs/technologies/NestJS/ProjectStructure.md",sourceDirName:"technologies/NestJS",slug:"/technologies/NestJS/ProjectStructure",permalink:"/docs/technologies/NestJS/ProjectStructure",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/technologies/NestJS/ProjectStructure.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prisma",permalink:"/docs/technologies/NestJS/Prisma"},next:{title:"Rest Api",permalink:"/docs/technologies/NestJS/RestApi"}},c={},p=[{value:"File structure",id:"file-structure",level:2},{value:"Main basic structure is:",id:"main-basic-structure-is",level:3},{value:"Complex structure with prisma is:",id:"complex-structure-with-prisma-is",level:3}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-structure"},"Project Structure"),(0,o.kt)("p",null,"This part will show you, how to create basic structure of your NEST application. How to generate project and how to prepare folders and document structure. If you are familiar with nest after, this you can start programming. If not, you can check nest documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com"},"https://docs.nestjs.com"),", or check other parts of this docs."),(0,o.kt)("h2",{id:"file-structure"},"File structure"),(0,o.kt)("p",null,"Consider if you will need two or more separate apps in backend or you need only one."),(0,o.kt)("h3",{id:"main-basic-structure-is"},"Main basic structure is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app\n\u2502   \u2502   \u251c\u2500\u2500 app.controller.ts\n\u2502   \u2502   \u251c\u2500\u2500 app.service.ts\n\u2502   \u2502   \u251c\u2500\u2500 app.dtos.ts\n\u2502   \u2502   \u251c\u2500\u2500 app.models.ts\n\u2502   \u2502   \u251c\u2500\u2500 app.modul.ts\n\u2502   \u251c\u2500\u2500 main.ts\n")),(0,o.kt)("h3",{id:"complex-structure-with-prisma-is"},"Complex structure with prisma is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 prisma\n\u2502   \u251c\u2500\u2500 migrations\n\u2502   \u251c\u2500\u2500 schema.prisma\n\u2502   \u251c\u2500\u2500 schema.prisma.prod\n\u2502   \u251c\u2500\u2500 seed.ts\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app1\n\u2502   \u2502   \u251c\u2500\u2500 controllers\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 app.controller1.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 app.controller2.ts\n\u2502   \u2502   \u251c\u2500\u2500 services\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 app.service1.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 app.service2.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 database\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 repository\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 app.repository1.ts\n\u2502   \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 app.repository2.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 database.service.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 vendors\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 vendor1.service.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 vendor2.service.ts\n\u2502   \u2502   \u251c\u2500\u2500 dto\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 app.dto1.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 app.dto2.ts\n\u2502   \u2502   \u251c\u2500\u2500 public\n\u2502   \u2502   \u251c\u2500\u2500 app1.module.ts\n\u2502   \u251c\u2500\u2500 app2\n\u2502   \u2502   \u251c\u2500\u2500 ... (same as app1)\n\u2502   \u2502   \u251c\u2500\u2500 app2.module.ts\n\u2502   \u251c\u2500\u2500 module.ts\n\u2502   \u251c\u2500\u2500 main.ts\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please use logical names by type of project instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"app")," if you have more than one app or more then 1 service | controller | repository ..."),(0,o.kt)("li",{parentName:"ul"},"if you have one app please use only one module.ts, else you can import all modules into main module which is used in main.ts")))}l.isMDXComponent=!0}}]);