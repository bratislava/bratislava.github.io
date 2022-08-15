"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[2349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),y=i,h=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a="Sentry",l={unversionedId:"technologies/sentry",id:"technologies/sentry",title:"Sentry",description:"We're using Sentry to collect FE errors, as well as for FE/BE alerting.",source:"@site/docs/technologies/sentry.md",sourceDirName:"technologies",slug:"/technologies/sentry",permalink:"/docs/technologies/sentry",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/technologies/sentry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Index",permalink:"/docs/technologies/"},next:{title:"Strapi",permalink:"/docs/technologies/strapi"}},s={},p=[{value:"Global pipeline setup",id:"global-pipeline-setup",level:2},{value:"Authorization",id:"authorization",level:3},{value:"Release/Version",id:"releaseversion",level:3},{value:"Local build",id:"local-build",level:3},{value:"Next.js setup",id:"nextjs-setup",level:2},{value:"Sentry environment variables on next&#39;s FE &amp; BE",id:"sentry-environment-variables-on-nexts-fe--be",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sentry"},"Sentry"),(0,i.kt)("p",null,"We're using Sentry to collect FE errors, as well as for FE/BE alerting."),(0,i.kt)("h2",{id:"global-pipeline-setup"},"Global pipeline setup"),(0,i.kt)("h3",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"sentry-cli sends the sourcemaps to sentry.io during the build step. This means it needs ",(0,i.kt)("inlineCode",{parentName:"p"},"SENTRY_AUTH_TOKEN")," available during this set - this token is set as ",(0,i.kt)("inlineCode",{parentName:"p"},"Sentry.AuthToken")," pipeline secret variable (and can be read through the inovacie.bratislava Sentry account). To access (your account's) token go ",(0,i.kt)("a",{parentName:"p",href:"https://sentry.io/settings/account/api/auth-tokens/"},"here"),'. You can also use Sentry company-wide "',(0,i.kt)("a",{parentName:"p",href:"https://sentry.io/settings/bratislava-city-hall/developer-settings/pipeline-integrations-1f0400/"},"Internal Integration"),'" token, this is preferred for pipelines or otherwise shared build envs - you can find such token within the Sentry dashboard as well.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Local builds on sentry-enabled projects will fail without SENTRY_AUTH_TOKEN set in your environment - when building locally, you need to set this env var.")),(0,i.kt)("h3",{id:"releaseversion"},"Release/Version"),(0,i.kt)("p",null,"We set the ",(0,i.kt)("inlineCode",{parentName:"p"},"SENTRY_RELEASE")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_SENTRY_RELEASE")," - you can override this behaviour per project."),(0,i.kt)("h3",{id:"local-build"},"Local build"),(0,i.kt)("h2",{id:"nextjs-setup"},"Next.js setup"),(0,i.kt)("p",null,"See ",(0,i.kt)("inlineCode",{parentName:"p"},"sentry.client/server.config.ts")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"next.config.js")," files in ",(0,i.kt)("inlineCode",{parentName:"p"},"tax-landing")," project (TODO soon to be opened). Notice also all the ",(0,i.kt)("inlineCode",{parentName:"p"},"SENTRY")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_SENTRY")," (see the next section why you might need both)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"withSentry")," needs to be the last transformation on ",(0,i.kt)("inlineCode",{parentName:"p"},"next.config")," but it does not play nicely with typescript types potentially exported from previous transformations - you'll likely need to force typecast if importing config into a ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," file."),(0,i.kt)("h3",{id:"sentry-environment-variables-on-nexts-fe--be"},"Sentry environment variables on next's FE & BE"),(0,i.kt)("p",null,"While using ",(0,i.kt)("inlineCode",{parentName:"p"},"SENTRY_RELEASE")," works for different technologies or even Next server environment, for Sentry library to be able to read the var successfully on frontend it needs to be prefixed as ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_"),"."),(0,i.kt)("p",null,"Therefore, we also provide ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_SENTRY_RELEASE")," to pipelines. For the similar reasons we have just ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_SENTRY_ENVIRONMENT")," set in our Next projects to indicate environment - this can be read by both BE & FE Sentry clients."))}u.isMDXComponent=!0}}]);