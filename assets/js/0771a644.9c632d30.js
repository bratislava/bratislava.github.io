"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[5134],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),p=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(h,i(i({ref:e},u),{},{components:a})):r.createElement(h,i({ref:e},u))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2956:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={},i="Monitoring & Observability",s={unversionedId:"deployment-and-infrastructure/grafana",id:"deployment-and-infrastructure/grafana",title:"Monitoring & Observability",description:"In this section we will provide a bit of context on our monitoring infrastructure together with information about our alerting setup, through our Grafana.",source:"@site/docs/deployment-and-infrastructure/grafana.md",sourceDirName:"deployment-and-infrastructure",slug:"/deployment-and-infrastructure/grafana",permalink:"/docs/deployment-and-infrastructure/grafana",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/deployment-and-infrastructure/grafana.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/deployment-and-infrastructure/deployment"},next:{title:"NestJS",permalink:"/docs/category/nestjs"}},l={},p=[{value:"Access",id:"access",level:2},{value:"A Bit of Context",id:"a-bit-of-context",level:2},{value:"Dashboards",id:"dashboards",level:2},{value:"Pod Dashboard",id:"pod-dashboard",level:3},{value:"Persistent Volumes Dashboard",id:"persistent-volumes-dashboard",level:3},{value:"Health Status",id:"health-status",level:3},{value:"Alerting",id:"alerting",level:2}],u={toc:p};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"monitoring--observability"},"Monitoring & Observability"),(0,n.kt)("p",null,"In this section we will provide a bit of context on our monitoring infrastructure together with information about our alerting setup, through our ",(0,n.kt)("a",{parentName:"p",href:"https://grafana.bratislava.sk/"},"Grafana"),"."),(0,n.kt)("h2",{id:"access"},"Access"),(0,n.kt)("p",null,"Grafana is available only to whitelisted people. If you need you access, please ask an administrator. If you have an access rights you can add new person in our ",(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ManagedAppMenuBlade/Users/objectId/efcd09e4-9cf1-418f-aaa9-55f848c3f027/appId/0ed658f0-929d-499f-a198-da9b563b44ee"},"Azure Portal"),"."),(0,n.kt)("p",null,"If you need to add an external developer, you can Invite them as guests into Bratislava Active Directory ",(0,n.kt)("inlineCode",{parentName:"p"},"(Azure"),"\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"portal -> Active"),"\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"Directory -> Users -> New/Invite -> Guest/External)"),"."),(0,n.kt)("h2",{id:"a-bit-of-context"},"A Bit of Context"),(0,n.kt)("p",null,"For our monitoring and observability we use ",(0,n.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," with ",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),", ",(0,n.kt)("a",{parentName:"p",href:"https://grafana.com/oss/loki/"},"Loki")," and ",(0,n.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/plugins/yesoreyeram-infinity-datasource/"},"Infinity")," plugin/application stack."),(0,n.kt)("p",null,"You can read more in their linked documentations, but to describe the setup in short:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Grafana")," is only a visualization tool with alerting capabilities. You can add additional plugins and application to it to extend it's functionality"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Prometheus")," is a monitoring tool that sits on top of our kubernetes infrastructure and provides various metrics (exposed through ",(0,n.kt)("inlineCode",{parentName:"li"},"/metric")," endpoint) about nodes health, resources, and application (pod) state, resources, etc. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Loki")," is a Grafana application that specializes in logs monitoring and alerting. We use ",(0,n.kt)("inlineCode",{parentName:"li"},"promtail")," to push application logs into Loki."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Infinity")," is a very simple grafana plugin, that provides HTTP requests capabilities, it can be used to monitor health endpoint and is capable of parsing JSON responses and alerting on them")),(0,n.kt)("p",null,"All of these application can be use to monitor your application and alert in case of any issues.\nCurrently, we use this to monitor and observe our kubernetes infrastructure, together with some critical applications. For example, we are monitoring hardware resources for all our nodes and pods and when they reach critical usage >=95%, we alert on it. "),(0,n.kt)("h2",{id:"dashboards"},"Dashboards"),(0,n.kt)("p",null,"If you have access to Grafana you can take a look at our dashboards, that provide more information about the state of our infrastructure and individual applications together with their logs."),(0,n.kt)("h3",{id:"pod-dashboard"},"Pod Dashboard"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://grafana.bratislava.sk/d/liz0yRCZz/pod-dashboard?orgId=1"},"Pod Dashboard")," is a application dashboard where you can see  ",(0,n.kt)("em",{parentName:"p"},"logs")," of applications together with their ",(0,n.kt)("em",{parentName:"p"},"volume")," and ",(0,n.kt)("em",{parentName:"p"},"system")," statistics."),(0,n.kt)("p",null,"Dashboard is driven by filters that can go up to container granularity."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can search through the ",(0,n.kt)("strong",{parentName:"li"},"logs")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"regex")," pattern. Log volume is color coded base on the stream it was emitted to (",(0,n.kt)("font",{color:"#adadad"},"stdout"),"/",(0,n.kt)("font",{color:"#ce0000"},"stderr"),")."),(0,n.kt)("li",{parentName:"ul"},"It also provides current ",(0,n.kt)("strong",{parentName:"li"},"running status")," of all associated ",(0,n.kt)("em",{parentName:"li"},"containers")),(0,n.kt)("li",{parentName:"ul"},"Application ",(0,n.kt)("strong",{parentName:"li"},"system statics"),", such as, memory, CPU, network and disk (",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"PVC"),") usage"),(0,n.kt)("li",{parentName:"ul"},"At the bottom of the dashboard we have ",(0,n.kt)("strong",{parentName:"li"},"alerting panel")," where you can see all the alerting rules associated with your filter selection together with their ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/alerting/fundamentals/state-and-health/"},"state"))),(0,n.kt)("h3",{id:"persistent-volumes-dashboard"},"Persistent Volumes Dashboard"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://grafana.bratislava.sk/d/Y5d5lRhik/persistent-volumes"},"Persistent Volumes Dashboard ")," is monitoring on kubernetes ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://grafana.bratislava.sk/d/Y5d5lRhik/persistent-volumes"},"PV/PVC")," disk usage"),"."),(0,n.kt)("p",null,"Dashboard is driven by filters that can go up to application granularity."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It has ",(0,n.kt)("strong",{parentName:"li"},"current volume usage"),' with "standard" gradient color coding from green to red, when the usage start hitting ~60%'),(0,n.kt)("li",{parentName:"ul"},"It also provides a simple table showcasing the ",(0,n.kt)("strong",{parentName:"li"},"full volume capacity")),(0,n.kt)("li",{parentName:"ul"},"And lastly, it shows ",(0,n.kt)("strong",{parentName:"li"},"historical disk usage")," in % of full capacity")),(0,n.kt)("h3",{id:"health-status"},"Health Status"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://grafana.bratislava.sk/d/NEYiLUzik/health-status?orgId=1&refresh=5s"},"Health Status Dashboard")," is complex monitoring dashboard, where you can find everything from monitoring ",(0,n.kt)("em",{parentName:"p"},"single application state")," with their ",(0,n.kt)("em",{parentName:"p"},"logs")," all the way up to ",(0,n.kt)("em",{parentName:"p"},"kubernetes node resource utilization"),"."),(0,n.kt)("p",null,"Dashboard is driven by filters that can go up to individual POD granularity."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It provides statistics on ",(0,n.kt)("strong",{parentName:"li"},"health status")," of all the application running within the cluster and their listing"),(0,n.kt)("li",{parentName:"ul"},"You can also find there ",(0,n.kt)("strong",{parentName:"li"},"POD's system resource")," (CPU, Memory, ...) current and historical usage and running ",(0,n.kt)("strong",{parentName:"li"},"state")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Containers's system resource")," (CPU, Memory, ...) current and historical usage and running ",(0,n.kt)("strong",{parentName:"li"},"state")),(0,n.kt)("li",{parentName:"ul"},"It also has information about ",(0,n.kt)("strong",{parentName:"li"},"application replicas")),(0,n.kt)("li",{parentName:"ul"},"And lastly, also has ",(0,n.kt)("strong",{parentName:"li"},"resource")," (CPU, Memory, Disk) and ",(0,n.kt)("strong",{parentName:"li"},"health")," information on kubernetes cluster ",(0,n.kt)("strong",{parentName:"li"},"nodes"))),(0,n.kt)("h2",{id:"alerting"},"Alerting"),(0,n.kt)("p",null,"For actual alerting we have setup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Grafana Bratislava Slack application/bot, that you can add to your channel"),(0,n.kt)("li",{parentName:"ul"},"Email address ",(0,n.kt)("inlineCode",{parentName:"li"},"grafana[at]devops.bratislava.sk"),", that you can use to send a alert notification to you mailbox")),(0,n.kt)("p",null,"To setup a new contact point, for instance if you and only you want get some specific alert, please follow our ",(0,n.kt)("a",{parentName:"p",href:"/docs/recipes/alerting/contact-point"},'"Add New Contact Point"')," recipe. "),(0,n.kt)("p",null,"For recipes on how to create your own alert take a look at the following"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alerting on application ",(0,n.kt)("strong",{parentName:"li"},"system resources")," (CPU, Memory, Disk, etc.) ",(0,n.kt)("a",{parentName:"li",href:"/docs/recipes/alerting/resource_alert"},"\u21f2")),(0,n.kt)("li",{parentName:"ul"},"Alerting on application's ",(0,n.kt)("strong",{parentName:"li"},"logs")," and specific keywords or pattern in those logs ",(0,n.kt)("a",{parentName:"li",href:"/docs/recipes/alerting/log_alert"},"\u21f2")),(0,n.kt)("li",{parentName:"ul"},"Alerting on ",(0,n.kt)("strong",{parentName:"li"},"availability")," of specific endpoints or data provided by those endpoints ",(0,n.kt)("a",{parentName:"li",href:"/docs/recipes/alerting/endpoint_alert"},"\u21f2"))))}c.isMDXComponent=!0}}]);