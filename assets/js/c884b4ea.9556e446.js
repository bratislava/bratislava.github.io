"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[5571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Authentication",s={unversionedId:"technologies/NestJS/Authentication",id:"technologies/NestJS/Authentication",title:"Authentication",description:"This module is for authentication by Azure B2B, but you can use it similar with different auths services.",source:"@site/docs/technologies/NestJS/Authentication.md",sourceDirName:"technologies/NestJS",slug:"/technologies/NestJS/Authentication",permalink:"/docs/technologies/NestJS/Authentication",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/technologies/NestJS/Authentication.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NestJS index",permalink:"/docs/technologies/NestJS/"},next:{title:"Card Web Pay",permalink:"/docs/technologies/NestJS/CardWebPay"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"This module is for authentication by Azure B2B, but you can use it similar with different auths services."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm install @nestjs/passport ")),(0,a.kt)("p",null,"for azure-ad auth install also"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm install passport-azure-ad' ")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"create guard file ",(0,a.kt)("inlineCode",{parentName:"p"},"services/vendors/{{service}}.guard.ts")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Example for azure-ad:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable } from '@nestjs/common';\nimport { PassportStrategy, AuthGuard } from '@nestjs/passport';\nimport { BearerStrategy } from 'passport-azure-ad';\n\nconst clientID = {{clientId}};\nconst tenantID = {{tenantId}};\n\n/**\n * Extracts ID token from header and validates it.\n */\n@Injectable()\nexport class AzureADStrategy extends PassportStrategy(\n  BearerStrategy,\n  'azure-ad'\n) {\n  constructor() {\n    super({\n      identityMetadata: `https://login.microsoftonline.com/${tenantID}/v2.0/.well-known/openid-configuration`,\n      clientID: clientID,\n    });\n  }\n\n  async validate(data) {\n    return data;\n  }\n}\n\nexport const AzureADGuard = AuthGuard('azure-ad');\n\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"NOTE")),': Don\'t Forget to have right scope from AD into get token login (you need to generate scope in azure-ad - overview -> Application ID URI) also to create\nUser.Read in API permissions. In get token call you will have {"scope": api://{{clientId}}/user_auth offline_access user.read}')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"import into ",(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts")," PassportModule and add into providers your passport strategy created in 1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AzureADStrategy } from './services/vendors/azure-ad.guard';\nimport { PassportModule } from '@nestjs/passport';\n\n@Module({\n  imports: [PassportModule],\n  controllers: [AppController],\n  providers: [AppService, AzureADStrategy],\n})\nexport class AppModule {}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"add decorator UseGuards into ",(0,a.kt)("inlineCode",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@UseGuards(AzureADGuard)\n@Controller('api')\nexport class MainAppController {\n  @Get('healthcheck')\n  healthcheck(): string {\n    return 'OK';\n  }\n}\n")))))}u.isMDXComponent=!0}}]);