(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6112],{4373:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deployment-and-infrastructure/connecting-to-kubernetes",function(){return s(420)}])},9369:function(e,n,s){"use strict";var r=s(5893);s(7294);let t={logo:(0,r.jsx)("span",{children:"\uD83D\uDCDA Bratislava Documentation"}),project:{link:"https://github.com/bratislava"},docsRepositoryBase:"https://github.com/bratislava/bratislava.github.io",sidebar:{defaultMenuCollapseLevel:0},footer:{text:"Department of Innovation and Technology of the City of Bratislava"},faviconGlyph:"\uD83D\uDCDA"};n.Z=t},420:function(e,n,s){"use strict";s.r(n);var r=s(5893),t=s(2673),i=s(4376),o=s(9369);s(9966);var a=s(1151);s(5675);let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/deployment-and-infrastructure/connecting-to-kubernetes.md",route:"/deployment-and-infrastructure/connecting-to-kubernetes",headings:[{depth:1,value:"Connecting to Kubernetes",id:"connecting-to-kubernetes"},{depth:2,value:"How to connect to database",id:"how-to-connect-to-database"},{depth:3,value:"OpenLens",id:"openlens"},{depth:3,value:"kubectl",id:"kubectl"},{depth:2,value:"How to see logs",id:"how-to-see-logs"},{depth:3,value:"OpenLens",id:"openlens-1"},{depth:3,value:"kubectl",id:"kubectl-1"},{depth:2,value:"How to connect to app/pod terminal",id:"how-to-connect-to-apppod-terminal"},{depth:3,value:"OpenLens",id:"openlens-2"},{depth:3,value:"kubectl",id:"kubectl-2"},{depth:2,value:"Tips & Tricks",id:"tips--tricks"},{depth:3,value:"Attach to POD within your terminal without knowing full name",id:"attach-to-pod-within-your-terminal-without-knowing-full-name"}],pageMap:[{kind:"MdxPage",name:"GINIS",route:"/GINIS"},{kind:"Meta",data:{index:"Introduction",onboarding:"Setup & Onboarding","-- Eslint --":{type:"separator"},"eslint-and-prettier":"Eslint & Prettier","-- Web development --":{type:"separator"},frontend:"Frontend",strapi:"Strapi",graphql:"GraphQL",meilisearch:"Meilisearch",openapi:"OpenAPI client","-- Backend --":{type:"separator"},GINIS:"GINIS","-- DevOps --":{type:"separator"},"deployment-and-infrastructure":"Deployment & Infrastructure","monitoring-and-observability":"Monitoring & Observability","-- Projects --":{type:"separator"}}},{kind:"Folder",name:"deployment-and-infrastructure",route:"/deployment-and-infrastructure",children:[{kind:"MdxPage",name:"backups",route:"/deployment-and-infrastructure/backups"},{kind:"MdxPage",name:"connecting-to-kubernetes",route:"/deployment-and-infrastructure/connecting-to-kubernetes"},{kind:"MdxPage",name:"database-backups",route:"/deployment-and-infrastructure/database-backups"},{kind:"MdxPage",name:"debug-cluster-connectivity",route:"/deployment-and-infrastructure/debug-cluster-connectivity"},{kind:"MdxPage",name:"deployment-and-releases",route:"/deployment-and-infrastructure/deployment-and-releases"},{kind:"MdxPage",name:"env-vars-and-secrets",route:"/deployment-and-infrastructure/env-vars-and-secrets"},{kind:"Meta",data:{backups:"Backups","connecting-to-kubernetes":"Connecting to Kubernetes","database-backups":"Database Backups","debug-cluster-connectivity":"Debug Cluster Connectivity","deployment-and-releases":"Deployment and Releases","env-vars-and-secrets":"Env Vars and Secrets"}}]},{kind:"MdxPage",name:"eslint-and-prettier",route:"/eslint-and-prettier"},{kind:"Folder",name:"frontend",route:"/frontend",children:[{kind:"Meta",data:{components:{title:"Components"},svg:{title:"SVG setup"},captcha:{display:"hidden",title:"Captcha"},"data-fetching-listing":{title:"Data fetching & listing",display:"hidden"},"date-and-time":{title:"Date & time",display:"hidden"},fonts:{display:"hidden",title:"Fonts"},gallery:{display:"hidden",title:"Gallery"},icons:{display:"hidden",title:"Icons"},images:{display:"hidden",title:"Images"},localization:{display:"hidden",title:"Localization"},menu:{display:"hidden",title:"Menu"},"navigation-breadcrumbs":{title:"Navigation & breadcrumbs",display:"hidden"},search:{display:"hidden",title:"Search"},seo:{display:"hidden",title:"Seo"},texts:{display:"hidden",title:"Texts"}}},{kind:"MdxPage",name:"captcha",route:"/frontend/captcha"},{kind:"Folder",name:"components",route:"/frontend/components",children:[{kind:"Meta",data:{cards:{title:"Cards"},links:{display:"hidden",title:"Links"},modals:{display:"hidden",title:"Modals"},tables:{display:"hidden",title:"Tables"}}},{kind:"MdxPage",name:"cards",route:"/frontend/components/cards"},{kind:"MdxPage",name:"links",route:"/frontend/components/links"},{kind:"MdxPage",name:"modals",route:"/frontend/components/modals"},{kind:"MdxPage",name:"tables",route:"/frontend/components/tables"}]},{kind:"MdxPage",name:"components",route:"/frontend/components"},{kind:"MdxPage",name:"data-fetching-listing",route:"/frontend/data-fetching-listing"},{kind:"MdxPage",name:"date-and-time",route:"/frontend/date-and-time"},{kind:"MdxPage",name:"fonts",route:"/frontend/fonts"},{kind:"MdxPage",name:"gallery",route:"/frontend/gallery"},{kind:"MdxPage",name:"icons",route:"/frontend/icons"},{kind:"MdxPage",name:"images",route:"/frontend/images"},{kind:"MdxPage",name:"localization",route:"/frontend/localization"},{kind:"MdxPage",name:"menu",route:"/frontend/menu"},{kind:"MdxPage",name:"navigation-breadcrumbs",route:"/frontend/navigation-breadcrumbs"},{kind:"MdxPage",name:"search",route:"/frontend/search"},{kind:"MdxPage",name:"seo",route:"/frontend/seo"},{kind:"MdxPage",name:"svg",route:"/frontend/svg"},{kind:"MdxPage",name:"texts",route:"/frontend/texts"}]},{kind:"MdxPage",name:"graphql",route:"/graphql"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"meilisearch",route:"/meilisearch"},{kind:"Folder",name:"monitoring-and-observability",route:"/monitoring-and-observability",children:[{kind:"Folder",name:"alerting",route:"/monitoring-and-observability/alerting",children:[{kind:"MdxPage",name:"contact-point",route:"/monitoring-and-observability/alerting/contact-point"},{kind:"MdxPage",name:"endpoint_alert",route:"/monitoring-and-observability/alerting/endpoint_alert"},{kind:"MdxPage",name:"grafana_alerting",route:"/monitoring-and-observability/alerting/grafana_alerting"},{kind:"MdxPage",name:"log_alert",route:"/monitoring-and-observability/alerting/log_alert"},{kind:"MdxPage",name:"resource_alert",route:"/monitoring-and-observability/alerting/resource_alert"},{kind:"Meta",data:{"contact-point":"Contact Point",endpoint_alert:"Endpoint Alert",grafana_alerting:"Grafana Alerting",log_alert:"Log Alert",resource_alert:"Resource Alert"}}]},{kind:"MdxPage",name:"grafana",route:"/monitoring-and-observability/grafana"},{kind:"Meta",data:{grafana:"Grafana"}}]},{kind:"Folder",name:"onboarding",route:"/onboarding",children:[{kind:"Meta",data:{"editor-setup":"Editor Setup","docker-setup":"Docker / Podman Setup","wsl-setup":"Windows WSL Setup","kubernetes-lens-setup":"Kubernetes & Lens Setup","postgres-setup":"Postgres Setup",other:"Other Setups","--- Workflow ---":{type:"separator"},"developer-accesses":"Developer Accesses","git-workflow":"Git Workflow"}},{kind:"MdxPage",name:"developer-accesses",route:"/onboarding/developer-accesses"},{kind:"MdxPage",name:"docker-setup",route:"/onboarding/docker-setup"},{kind:"MdxPage",name:"editor-setup",route:"/onboarding/editor-setup"},{kind:"MdxPage",name:"git-workflow",route:"/onboarding/git-workflow"},{kind:"MdxPage",name:"kubernetes-lens-setup",route:"/onboarding/kubernetes-lens-setup"},{kind:"MdxPage",name:"other",route:"/onboarding/other"},{kind:"MdxPage",name:"postgres-setup",route:"/onboarding/postgres-setup"},{kind:"MdxPage",name:"wsl-setup",route:"/onboarding/wsl-setup"}]},{kind:"MdxPage",name:"openapi",route:"/openapi"},{kind:"Folder",name:"strapi",route:"/strapi",children:[{kind:"Meta",data:{"best-practices":"Best practices","make-content-public":"Make the content public",setup:"Setup","load-strapi-db-in-local-dev":"Load DB for local development","sync-strapi-db-to-different-env":"Sync DB between deployments"}},{kind:"MdxPage",name:"best-practices",route:"/strapi/best-practices"},{kind:"MdxPage",name:"load-strapi-db-in-local-dev",route:"/strapi/load-strapi-db-in-local-dev"},{kind:"MdxPage",name:"make-content-public",route:"/strapi/make-content-public"},{kind:"MdxPage",name:"setup",route:"/strapi/setup"},{kind:"MdxPage",name:"sync-strapi-db-to-different-env",route:"/strapi/sync-strapi-db-to-different-env"}]}],flexsearch:{codeblocks:!0},title:"Connecting to Kubernetes"},pageNextRoute:"/deployment-and-infrastructure/connecting-to-kubernetes",nextraLayout:i.ZP,themeConfig:o.Z};function c(e){let n=Object.assign({h1:"h1",p:"p",code:"code",br:"br",a:"a",h2:"h2",h3:"h3",ol:"ol",li:"li",em:"em",pre:"pre",span:"span"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"connecting-to-kubernetes",children:"Connecting to Kubernetes"}),"\n",(0,r.jsxs)(n.p,{children:["This section briefly shows how to do some basic connecting to Service and PODs in kubernetes cluster through ",(0,r.jsx)(n.code,{children:"kubectl"})," or kubernetes OpenLens.",(0,r.jsx)(n.br,{}),"\n","As stated you will obviously need access to our cluster. To login to specific cluster you can follow our ",(0,r.jsx)(n.a,{href:"../onboarding/kubernetes-lens-setup",children:"Login guide"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"how-to-connect-to-database",children:"How to connect to database"}),"\n",(0,r.jsx)(n.h3,{id:"openlens",children:"OpenLens"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open OpenLens and on the left hand side panel navigate to ",(0,r.jsx)(n.code,{children:"Network -> Services"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Find the Service that you want to connect to, usually something like ",(0,r.jsx)(n.code,{children:"anything-database"})," or ",(0,r.jsx)(n.code,{children:"anything-database-service"})]}),"\n",(0,r.jsxs)(n.li,{children:["Click on right service and scroll down to find Connection section and under there should be a button ",(0,r.jsx)(n.code,{children:"Forward"}),". Click it and choose your local free port"]}),"\n",(0,r.jsx)(n.li,{children:"Now your database should be accessible through localhost"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Note: it is password free, but if you want to find password to db, go to secrets and find db secret for this db"})}),"\n",(0,r.jsx)(n.h3,{id:"kubectl",children:"kubectl"}),"\n",(0,r.jsxs)(n.p,{children:["You can also port forward directly through ",(0,r.jsx)(n.code,{children:"kubectl"})," command by running"]}),"\n",(0,r.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"kubectl"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"port-forward"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"service/anything-database-service"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"5432"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:":5432"})]})})}),"\n",(0,r.jsxs)(n.p,{children:["For more information checkout ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/",children:"official port-forward"})," documentation."]}),"\n",(0,r.jsx)(n.h2,{id:"how-to-see-logs",children:"How to see logs"}),"\n",(0,r.jsx)(n.h3,{id:"openlens-1",children:"OpenLens"}),"\n",(0,r.jsxs)(n.p,{children:["You can follow this official video guide on extracting Logs ",(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=QIHqOd05TBA",children:"https://www.youtube.com/watch?v=QIHqOd05TBA"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"kubectl-1",children:"kubectl"}),"\n",(0,r.jsxs)(n.p,{children:["You can get pod logs in you terminal with ",(0,r.jsx)(n.code,{children:"kubectl"})," by running"]}),"\n",(0,r.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"kubectl"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"get"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"logs"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"my-pod"})]})})}),"\n",(0,r.jsxs)(n.p,{children:["For more information, check out ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/#interacting-with-running-pods",children:"interacting with running pods"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"how-to-connect-to-apppod-terminal",children:"How to connect to app/pod terminal"}),"\n",(0,r.jsx)(n.h3,{id:"openlens-2",children:"OpenLens"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open OpenLens and on the left hand side panel navigate to ",(0,r.jsx)(n.code,{children:"Workloads -> Pods"})]}),"\n",(0,r.jsx)(n.li,{children:"Find the POD in question and click on it"}),"\n",(0,r.jsx)(n.li,{children:"Click in right top corner find Pod Shell button (next to Pod Logs)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"kubectl-2",children:"kubectl"}),"\n",(0,r.jsxs)(n.p,{children:["If you prefer to attach to POD within your terminal, you can do so with ",(0,r.jsx)(n.code,{children:"kubectl"})]}),"\n",(0,r.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"kubectl"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"exec"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-i"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-t"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--namespace"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"namespac"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"pod_nam"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--container"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"containe"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"r"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"sh"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-c"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"clear; (bash || ash || sh)"'})]})})}),"\n",(0,r.jsxs)(n.p,{children:["For example, to attach to pod with name ",(0,r.jsx)(n.code,{children:'"next-city-gallery-app-debug"'})," in a namespace ",(0,r.jsx)(n.code,{children:'"bratislava-monorepo"'})," and container ",(0,r.jsx)(n.code,{children:'"app"'}),", run the following"]}),"\n",(0,r.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"kubectl"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"exec"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-i"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-t"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--namespace"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"bratislava-monorepo"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"next-city-gallery-app-debug"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--container"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"app"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"sh"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-c"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"clear; (bash || ash || sh)"'})]})})}),"\n",(0,r.jsx)(n.h2,{id:"tips--tricks",children:"Tips & Tricks"}),"\n",(0,r.jsxs)(n.p,{children:["If you are running reasonable ",(0,r.jsx)(n.code,{children:"*nix"})," terminal you can automate most of these task from your terminal, here are just some examples"]}),"\n",(0,r.jsx)(n.h3,{id:"attach-to-pod-within-your-terminal-without-knowing-full-name",children:"Attach to POD within your terminal without knowing full name"}),"\n",(0,r.jsxs)(n.p,{children:["You can create a simple script, for example ",(0,r.jsx)(n.code,{children:"k8att.sh"}),", that will ",(0,r.jsx)(n.em,{children:"search"})," and attach to the right POD and it's container within your terminal. As this will search through available PODs you don't need to know full name to attach to as sometimes the PODs name can be long and in different namespaces."]}),"\n",(0,r.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"#!/bin/bash"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" [[ "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"-z"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$1"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ]]"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"echo"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"ERROR: You have to give us name of the pod to attach to"'})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"exit"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"fi"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"POD_RESP"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"$("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"kubectl"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"get"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"pods"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--all-namespaces"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"grep"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-E"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:' "$1")'})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"POD_NAME"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"$("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"echo"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:' "$POD_RESP" '}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"awk"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" '{print $2}')"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"POD_NAMESPACE"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"$("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"echo"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:' "$POD_RESP" '}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"awk"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" '{print $1}')"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"POD_CONTAINERS"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"$("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"kubectl"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"get"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"pod"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--namespace"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:' "$POD_NAMESPACE" "$POD_NAME" '}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-o"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"jsonpath="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'{.spec.containers[*].name}')"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"IFS"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"' '"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"read"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-ra"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"CONTAINERS"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<<"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$POD_CONTAINERS"'})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" [ "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"${'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"#"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'CONTAINERS[@]}"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"-gt"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ]; "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"${'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'CONTAINERS[@]}"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"%s\\t%s\\n"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$i"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"${CONTAINERS[$i]}"'})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"done"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"read"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-p"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Choose container index (expecting int): "'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"CONTAINER_IX"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    CONTAINER_IX"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"fi"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"CONTAINER"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"${CONTAINERS[$CONTAINER_IX]}"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"echo"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-e"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"\"Attaching to pod \\033[0;32m'$POD_NAME'\\033[0m, container \\033[0;32m'$CONTAINER'\\033[0m in \\033[0;34m'$POD_NAMESPACE'\\033[0m namespace \""})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"kubectl"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"exec"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-i"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-t"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--namespace"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$POD_NAMESPACE"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$POD_NAME"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--container"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$CONTAINER"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"--"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"sh"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-c"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"clear; (bash || ash || sh)"'})]})]})}),"\n",(0,r.jsxs)(n.p,{children:["Then you just ",(0,r.jsx)(n.code,{children:"chmod +x k8att.sh"})," and you can use it to attach. Sticking with our previous attach example, now to attach to a pod ",(0,r.jsx)(n.code,{children:'"next-city-gallery-app-debug"'})," you can just do"]}),"\n",(0,r.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"./k8att"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"gallery-app-debug"})]})})}),"\n",(0,r.jsxs)(n.p,{children:["If it has more containers to choose from, the script will prompt you to pick ID of the one that you want to attach to. Script use ",(0,r.jsx)(n.code,{children:"grep"})," extended regex syntax, therefore you can also pass valid regex to it, e.g., ",(0,r.jsx)(n.code,{children:"gallery-[a-z]+-debug"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A very similar use are ",(0,r.jsx)(n.code,{children:"pod logs"})," for which you can basically use the same script just adjust the last line to ",(0,r.jsx)(n.code,{children:"kubectl get logs"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can add these scripts to your aliases in ",(0,r.jsx)(n.code,{children:"~/.bashrc"})," or ",(0,r.jsx)(n.code,{children:"~/.bash_aliases"})]}),"\n",(0,r.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"alias"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" k8att"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'~/k8att.sh'"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"alias"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" k8logs"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'~/k8logs.sh'"})]})]})}),"\n",(0,r.jsx)(n.p,{children:"and just use it as any other command in your workflow."})]})}n.default=(0,t.j)(l)}},function(e){e.O(0,[9774,5840,2888,179],function(){return e(e.s=4373)}),_N_E=e.O()}]);