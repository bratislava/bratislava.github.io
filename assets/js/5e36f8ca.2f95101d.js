"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[1246],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return a?t.createElement(y,o(o({ref:n},c),{},{components:a})):t.createElement(y,o({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7686:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=a(7462),r=(a(7294),a(3905));const s={sidebar_position:4},o="Kubernetes components",i={unversionedId:"deployment-and-infrastructure/kubernetes/Components",id:"deployment-and-infrastructure/kubernetes/Components",title:"Kubernetes components",description:"All components are autogenerated by pipeline in monorepo. This is only for understanding how it works and how to create manually new namespace and new app pod with all components.",source:"@site/docs/deployment-and-infrastructure/kubernetes/Components.md",sourceDirName:"deployment-and-infrastructure/kubernetes",slug:"/deployment-and-infrastructure/kubernetes/Components",permalink:"/docs/deployment-and-infrastructure/kubernetes/Components",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/deployment-and-infrastructure/kubernetes/Components.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Structure of kubernetes",permalink:"/docs/deployment-and-infrastructure/kubernetes/Structure"},next:{title:"Connections",permalink:"/docs/deployment-and-infrastructure/kubernetes/Connections"}},p={},l=[{value:"Namespaces",id:"namespaces",level:2},{value:"Pods",id:"pods",level:2},{value:"Services",id:"services",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Ingresses",id:"ingresses",level:2},{value:"ConfigMaps",id:"configmaps",level:2},{value:"Secrets",id:"secrets",level:2},{value:"Deployments",id:"deployments",level:2},{value:"StatefulSets",id:"statefulsets",level:2},{value:"Others",id:"others",level:2}],c={toc:l};function m(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kubernetes-components"},"Kubernetes components"),(0,r.kt)("p",null,"All components are autogenerated by pipeline in monorepo. This is only for understanding how it works and how to create manually new namespace and new app pod with all components.\nYou can create your component in Lens from terminal and kubectl command or by plus -> create new resource and setup your config and save. Here is example of YAML head"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: service\nmetadata:\n  name: next-new-service-test\n  namespace: bratislava-monorepo\n---\n")),(0,r.kt)("h2",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,"Namespaces is something like group of application, in which are similar apps, or using same components etc.\nyou can create new namespace by terminal command: ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create namespace")),(0,r.kt)("h2",{id:"pods"},"Pods"),(0,r.kt)("p",null,"pod is the smallest deployable unit. Usually has one container, can have more, where image with config is running. All pods are created automatically by Deployment or StatefulSets (mentioned lower)"),(0,r.kt)("h2",{id:"services"},"Services"),(0,r.kt)("p",null,"Abstract way how to run application on pod or pods. You can create a service by creating new resource. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: { { service name } }\n  namespace: { { your namespace } }\n  labels:\n    app: { { app name } }\n    service: app\n    source: { { app name } }\nstatus:\n  loadBalancer: {}\nspec:\n  ports:\n    - protocol: TCP\n      port: { { port where service will run } }\n      targetPort: { { port where image in container / pod is running } }\n  selector:\n    app: platba-dani-be\n    service: app\n    source: platba-dani-be\n")),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"Is created automatically by service or ingress"),(0,r.kt)("h2",{id:"ingresses"},"Ingresses"),(0,r.kt)("p",null,"Is for forwarding endpoint to public, you can setup also DNS and letsencrypt. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: { { ingress name } }\n  namespace: { { namespace name } }\n  labels:\n    app: { { app name } }\n    service: app\n    source: { { app name } }\n  annotations:\n    cert-manager.io/cluster-issuer: letsencrypt\n    cert-manager.io/issue-temporary-certificate: 'true'\n    kubernetes.io/ingress.class: haproxy\nstatus:\n  loadBalancer:\n    ingress:\n      - {}\nspec:\n  tls:\n    - hosts:\n        - { { host name - dns. ... .dev.bratislava.sk } }\n      secretName:\n        {\n          {\n            name of secret,\n            which will be automaticly generated,\n            idealy appName-tls,\n          },\n        }\n  rules:\n    - host: { { host name - dns. ... .dev.bratislava.sk } }\n      http:\n        paths:\n          - path: /\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: { { service name } }\n                port:\n                  number: { { port were service is running } }\n")),(0,r.kt)("h2",{id:"configmaps"},"ConfigMaps"),(0,r.kt)("p",null,"Config map is used as .env file. In env variables, don't use values in quotes. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: {{config map name}}\n  namespace: {{namespace name}}\n  labels:\n    app: {{app name}}\n    source: {{app name}}\ndata:\n  NODE_ENV: production\n  ...\n  ...\n\n")),(0,r.kt)("h2",{id:"secrets"},"Secrets"),(0,r.kt)("p",null,"You can genrate secret file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"from terminal, for example:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl create secret generic test \\\n  --from-literal=VARIABLE_NAME=value \\\n  --namespace=platba-dani \\\n  --dry-run=client\n")),(0,r.kt)("em",{parentName:"li"},"NOTE:")," use dry-run=client only for test and not create, and use namespace, you can also have more --from-literal."),(0,r.kt)("li",{parentName:"ul"},"from monorepo using command ",(0,r.kt)("inlineCode",{parentName:"li"},"nx add-secret {{app name}} --help"),". In help you will see how to set variable names and values. This will create new file in kustomize folder with your suffix.")),(0,r.kt)("p",null,"From this two possibilities, you can copy your key and insert to create new resource"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: platba-dani-be-db-secret\n  namespace: bratislava-monorepo\ndata:\n  POSTGRES_DB: cGxhdGJhLWRhbmk=\n  POSTGRES_PASSWORD: WUFQTktwbndqTDdXdUVyOA==\n  POSTGRES_USER: cGxhdGJhLWRhbmk=\ntype: { { some type } }\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"NOTE:")," type can be opaque, generic or else from terminal exmaple or kubernetes.io/tls if it is from monrepo"),(0,r.kt)("h2",{id:"deployments"},"Deployments"),(0,r.kt)("p",null,"if you want to deploy your app, setup here on which image, configMaps, Secrets, Services will it run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: { { app deployment name } }\n  namespace: { { namespace name } }\n  labels:\n    app: { { app name } }\n    service: app\n    source: { { app name } }\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: { { app name } }\n      service: app\n      source: { { app name } }\n    # template:  #you can use it or not\n    #   metadata:\n    #     creationTimestamp: null\n    #     labels:\n    #       app: {{app name}}\n    #       service: app\n    #       source: {{app name}}\n    #     annotations:\n    #       repositoryUrl: >-\n    #         {{repository}}\n    spec:\n      containers:\n        - name: app\n          image: >-\n            {{image link in our monorepo it is on ghcr.io/...}}\n          envFrom: #setup secrets and config maps this is only example\n            - secretRef:\n                name: { { app secret } }\n            - secretRef:\n                name: { { app db secret } }\n            - configMapRef:\n                name: { { app config map } }\n          env:\n            - name: DB_POSTGRES_CS #will setup new environment variable by secret from app db secret\n              value: >-\n                postgresql://$(POSTGRES_USER):$(POSTGRES_PASSWORD)@{{database}}:5432/$(POSTGRES_DB)?schema=public\n          resources:\n            limits:\n              cpu: 500m\n              memory: 1Gi\n            requests:\n              cpu: 50m\n              memory: 64Mi\n          terminationMessagePath: /dev/termination-log\n          terminationMessagePolicy: File\n          imagePullPolicy: IfNotPresent\n      restartPolicy: Always\n      terminationGracePeriodSeconds: 30\n      dnsPolicy: ClusterFirst\n      securityContext: {}\n      imagePullSecrets:\n        - name: ghcr-secret\n      schedulerName: default-scheduler\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 25%\n      maxSurge: 25%\n  revisionHistoryLimit: 10\n  progressDeadlineSeconds: 600\n")),(0,r.kt)("h2",{id:"statefulsets"},"StatefulSets"),(0,r.kt)("p",null,"It is usually used for database deployment. This can be used, when you want to deploy your app with persistent storage, setup here on which image, configMaps, Secrets, Services will it run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: { { app stateFull name } }\n  namespace: bratislava-monorepo\n  labels:\n    app: { { app name } }\n    service: database\n    source: { { app name } }\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: { { app name } }\n      service: database\n      source: { { app name } }\n    # template: #you can use it or not\n    #   metadata:\n    #     creationTimestamp: null\n    #     labels:\n    #       app: {{app name}}\n    #       service: database\n    #       source: {{app name}}\n    #     annotations:\n    #       repositoryUrl: >-\n    #         {{repository url}}\n    spec:\n      containers:\n        - name: database\n          image: postgres:14-alpine\n          envFrom:\n            - secretRef:\n                name: { { db secret } }\n          resources:\n            limits:\n              cpu: 500m\n              memory: 1Gi\n            requests:\n              cpu: 100m\n              memory: 128Mi\n          volumeMounts:\n            - name: postgresql\n              mountPath: /var/lib/postgresql/data\n              subPath: postgresql\n          terminationMessagePath: /dev/termination-log\n          terminationMessagePolicy: File\n          imagePullPolicy: IfNotPresent\n      restartPolicy: Always\n      terminationGracePeriodSeconds: 30\n      dnsPolicy: ClusterFirst\n      securityContext: {}\n      imagePullSecrets:\n        - name: ghcr-secret\n      schedulerName: default-scheduler\n  volumeClaimTemplates:\n    - kind: PersistentVolumeClaim\n      apiVersion: v1\n      metadata:\n        name: postgresql\n        creationTimestamp: null\n        labels:\n          app: { { app name } }\n          service: database\n          source: { { app name } }\n      spec:\n        accessModes:\n          - ReadWriteOnce\n        resources:\n          requests:\n            storage: 10Gi\n        volumeMode: Filesystem\n      status:\n        phase: Pending\n  serviceName: { { app service name } }\n  podManagementPolicy: OrderedReady\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      partition: 0\n  revisionHistoryLimit: 10\n")),(0,r.kt)("h2",{id:"others"},"Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"jobs and cronjobs"),(0,r.kt)("li",{parentName:"ul"},"other configurations: \\\nhere you can setup quotas, limits and autoscalings"),(0,r.kt)("li",{parentName:"ul"},"other network settings: \\\nhere, you can setup additional network policies and port forwarding"),(0,r.kt)("li",{parentName:"ul"},"storage: \\\nhere, you can see all volumes for pods")))}m.isMDXComponent=!0}}]);