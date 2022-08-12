"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[532],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2991:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={},o="Secrets",l={unversionedId:"deployment-and-infrastructure/secrets",id:"deployment-and-infrastructure/secrets",title:"Secrets",description:"We are using Sealed Secrets https://github.com/bitnami-labs/sealed-secrets.",source:"@site/docs/deployment-and-infrastructure/secrets.md",sourceDirName:"deployment-and-infrastructure",slug:"/deployment-and-infrastructure/secrets",permalink:"/docs/deployment-and-infrastructure/secrets",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/deployment-and-infrastructure/secrets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Grafana",permalink:"/docs/deployment-and-infrastructure/grafana"},next:{title:"Recipes",permalink:"/docs/category/recipes"}},i={},c=[{value:"Database convention naming",id:"database-convention-naming",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"secrets"},"Secrets"),(0,r.kt)("p",null,"We are using ",(0,r.kt)("inlineCode",{parentName:"p"},"Sealed Secrets")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitnami-labs/sealed-secrets"},"https://github.com/bitnami-labs/sealed-secrets"),".\nTo use a secret in your project, you have to install ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeseal")," if you haven`t installed it yet. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kubeseal\n")),(0,r.kt)("p",null,"The next thing is going to the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"secrets")," where all our secrets are stored:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd kubernetes/base/secrets\n")),(0,r.kt)("p",null,"After that, we need to create a temp file for our new secrets. Let's assume we want database connection secretes. You need to make this file ",(0,r.kt)("inlineCode",{parentName:"p"},"database.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: database-secret\ndata:\n  POSTGRES_DB: YmFuYW5h\n  POSTGRES_USER: YmFuYW5h\n  POSTGRES_PASSWORD: YmFuYW5h\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"metadata.name")," is the name of the group of secrets in our case, ",(0,r.kt)("inlineCode",{parentName:"p"},"database-secret")," - if this is app specific, it is often prefix by app name, so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"bratislava-strapi-database-secret"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data")," contains environment variables keys (",(0,r.kt)("inlineCode",{parentName:"p"},"POSTGRES_DB"),") and base64 encode values (",(0,r.kt)("inlineCode",{parentName:"p"},"YmFuYW5h"),")."))),(0,r.kt)("p",null,"For example, if you need to set up the database name to ",(0,r.kt)("inlineCode",{parentName:"p"},"banana"),", you need to base64 encode this value. You can use an online base64 converter like ",(0,r.kt)("a",{parentName:"p",href:"https://www.base64encode.org"},"https://www.base64encode.org")," and encode ",(0,r.kt)("inlineCode",{parentName:"p"},"banana")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"YmFuYW5h"),". This has to happen even if the value you want to provide is base64 encoded! In such case you'll take your base64 encoded value and encode it again."),(0,r.kt)("p",null,"The last thing is encrypting our secrets by kubeseal to be used on Kubernetes. You need to run this command that creates the file ",(0,r.kt)("inlineCode",{parentName:"p"},"database.secret.yml")," where all our values are encrypted and safe to add to the repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeseal --controller-name=sealed-secrets --scope=namespace-wide --namespace=standalone --format=yaml < database.yml > database.secret.yml \n")),(0,r.kt)("p",null,"If you want to propagate a sealed secret to Kubernetes without a pipeline, you can run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f database.secret.yml\n")),(0,r.kt)("p",null,"If you already have a sealed secret in Kubernetes, you can update it with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f database.secret.yml\n")),(0,r.kt)("p",null,"Usually, you get this kind of error: ",(0,r.kt)("inlineCode",{parentName:"p"},'Error from server (AlreadyExists): error when creating "database.secret.yml": sealedsecrets.bitnami.com "nest-Prisma-template-database-secret" already exists')),(0,r.kt)("p",null,"If you want to check if your secret is there, you can run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret --namespace=standalone nest-prisma-template-database-secret\n")),(0,r.kt)("h4",{id:"database-convention-naming"},"Database convention naming"),(0,r.kt)("p",null,"Please use our services as database name and user the project slug. In this case, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"nest-prisma-template"),". And for passwords, use at least 16 characters long pass with random chars."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"POSTGRES_DB: nest-prisma-template\nPOSTGRES_USER: nest-prisma-template\nPOSTGRES_PASSWORD: LBcdso08b&aasd(ck2*d!p\n")),(0,r.kt)("p",null,"which after base64 encoding looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"POSTGRES_DB: bmVzdC1wcmlzbWEtdGVtcGxhdGU=\nPOSTGRES_USER: bmVzdC1wcmlzbWEtdGVtcGxhdGU=\nPOSTGRES_PASSWORD: TEJjZHNvMDhiJmFhc2QoY2syKmQhcA==\n")))}u.isMDXComponent=!0}}]);