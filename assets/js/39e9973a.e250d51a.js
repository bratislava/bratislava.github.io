"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[3655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i="Connecting to Kubernetes",l={unversionedId:"recipes/connecting-to-kubernetes",id:"recipes/connecting-to-kubernetes",title:"Connecting to Kubernetes",description:"This section briefly shows how to do some basic connecting to Service and PODs in kubernetes cluster through kubectl or kubernetes Lens.",source:"@site/docs/recipes/connecting-to-kubernetes.md",sourceDirName:"recipes",slug:"/recipes/connecting-to-kubernetes",permalink:"/docs/recipes/connecting-to-kubernetes",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/recipes/connecting-to-kubernetes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alerting on Resources Utilization",permalink:"/docs/recipes/alerting/resource_alert"},next:{title:"Debugging k8s cluster connectivity to an outside service",permalink:"/docs/recipes/debug-cluster-connectivity"}},s={},c=[{value:"How to connect to database",id:"how-to-connect-to-database",level:2},{value:"Lens",id:"lens",level:3},{value:"kubectl",id:"kubectl",level:3},{value:"How to see logs",id:"how-to-see-logs",level:2},{value:"Lens",id:"lens-1",level:3},{value:"kubectl",id:"kubectl-1",level:3},{value:"How to connect to app/pod terminal",id:"how-to-connect-to-apppod-terminal",level:2},{value:"Lens",id:"lens-2",level:3},{value:"kubectl",id:"kubectl-2",level:3},{value:"Tips &amp; Tricks",id:"tips--tricks",level:2},{value:"Attach to POD within your terminal without knowing full name",id:"attach-to-pod-within-your-terminal-without-knowing-full-name",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-to-kubernetes"},"Connecting to Kubernetes"),(0,o.kt)("p",null,"This section briefly shows how to do some basic connecting to Service and PODs in kubernetes cluster through ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," or kubernetes Lens.",(0,o.kt)("br",{parentName:"p"}),"\n","As stated you will obviously need access to our cluster. To login to specific cluster you can follow our ",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/kubernetes-lens-setup"},"Login guide"),"."),(0,o.kt)("h2",{id:"how-to-connect-to-database"},"How to connect to database"),(0,o.kt)("h3",{id:"lens"},"Lens"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Lens and on the left hand side panel navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Network -> Services"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the Service that you want to connect to, usually something like ",(0,o.kt)("inlineCode",{parentName:"li"},"anything-database")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"anything-database-service")),(0,o.kt)("li",{parentName:"ol"},"Click on right service and scroll down to find Connection section and under there should be a button ",(0,o.kt)("inlineCode",{parentName:"li"},"Forward"),". Click it and choose your local free port"),(0,o.kt)("li",{parentName:"ol"},"Now your database should be accessible through localhost")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: it is password free, but if you want to find password to db, go to secrets and find db secret for this db")),(0,o.kt)("h3",{id:"kubectl"},"kubectl"),(0,o.kt)("p",null,"You can also port forward directly through ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," command by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward service/anything-database-service 5432:5432\n")),(0,o.kt)("p",null,"For more information checkout ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/"},"official port-forward")," documentation."),(0,o.kt)("h2",{id:"how-to-see-logs"},"How to see logs"),(0,o.kt)("h3",{id:"lens-1"},"Lens"),(0,o.kt)("p",null,"You can follow this official video guide on extracting Logs ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=QIHqOd05TBA"},"https://www.youtube.com/watch?v=QIHqOd05TBA"),"."),(0,o.kt)("h3",{id:"kubectl-1"},"kubectl"),(0,o.kt)("p",null,"You can get pod logs in you terminal with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get logs my-pod\n")),(0,o.kt)("p",null,"For more information, check out ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/#interacting-with-running-pods"},"interacting with running pods"),"."),(0,o.kt)("h2",{id:"how-to-connect-to-apppod-terminal"},"How to connect to app/pod terminal"),(0,o.kt)("h3",{id:"lens-2"},"Lens"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Lens and on the left hand side panel navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Workloads -> Pods")),(0,o.kt)("li",{parentName:"ol"},"Find the POD in question and click on it"),(0,o.kt)("li",{parentName:"ol"},"Click in right top corner find Pod Shell button (next to Pod Logs)")),(0,o.kt)("h3",{id:"kubectl-2"},"kubectl"),(0,o.kt)("p",null,"If you prefer to attach to POD within your terminal, you can do so with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl exec -i -t --namespace <namespace> <pod_name> --container <container> -- sh -c "clear; (bash || ash || sh)"\n')),(0,o.kt)("p",null,"For example, to attach to pod with name ",(0,o.kt)("inlineCode",{parentName:"p"},'"next-city-gallery-app-debug"')," in a namespace ",(0,o.kt)("inlineCode",{parentName:"p"},'"bratislava-monorepo"')," and container ",(0,o.kt)("inlineCode",{parentName:"p"},'"app"'),", run the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl exec -i -t --namespace bratislava-monorepo next-city-gallery-app-debug --container app -- sh -c "clear; (bash || ash || sh)"\n')),(0,o.kt)("h2",{id:"tips--tricks"},"Tips & Tricks"),(0,o.kt)("p",null,"If you are running reasonable ",(0,o.kt)("inlineCode",{parentName:"p"},"*nix")," terminal you can automate most of these task from your terminal, here are just some examples"),(0,o.kt)("h3",{id:"attach-to-pod-within-your-terminal-without-knowing-full-name"},"Attach to POD within your terminal without knowing full name"),(0,o.kt)("p",null,"You can create a simple script, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"k8att.sh"),", that will ",(0,o.kt)("em",{parentName:"p"},"search")," and attach to the right POD and it's container within your terminal. As this will search through available PODs you don't need to know full name to attach to as sometimes the PODs name can be long and in different namespaces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\nif [[ -z "$1" ]]\nthen\n    echo "ERROR: You have to give us name of the pod to attach to"\n    exit 1\nfi\n\nPOD_RESP=$(kubectl get pods --all-namespaces | grep -E "$1")\nPOD_NAME=$(echo "$POD_RESP" | awk \'{print $2}\')\nPOD_NAMESPACE=$(echo "$POD_RESP" | awk \'{print $1}\')\n\nPOD_CONTAINERS=$(kubectl get pod --namespace "$POD_NAMESPACE" "$POD_NAME" -o jsonpath=\'{.spec.containers[*].name}\')\nIFS=\' \' read -ra CONTAINERS <<< "$POD_CONTAINERS"\n\nif [ "${#CONTAINERS[@]}" -gt 1 ]; then\n    for i in "${!CONTAINERS[@]}"; do\n        printf "%s\\t%s\\n" "$i" "${CONTAINERS[$i]}"\n    done\n    read -p "Choose container index (expecting int): " CONTAINER_IX\nelse\n    CONTAINER_IX=0\nfi\n\nCONTAINER=${CONTAINERS[$CONTAINER_IX]}\necho -e "Attaching to pod \\033[0;32m\'$POD_NAME\'\\033[0m, container \\033[0;32m\'$CONTAINER\'\\033[0m in \\033[0;34m\'$POD_NAMESPACE\'\\033[0m namespace "\nkubectl exec -i -t --namespace "$POD_NAMESPACE" "$POD_NAME" --container "$CONTAINER" -- sh -c "clear; (bash || ash || sh)"\n')),(0,o.kt)("p",null,"Then you just ",(0,o.kt)("inlineCode",{parentName:"p"},"chmod +x k8att.sh")," and you can use it to attach. Sticking with our previous attach example, now to attach to a pod ",(0,o.kt)("inlineCode",{parentName:"p"},'"next-city-gallery-app-debug"')," you can just do"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./k8att gallery-app-debug\n")),(0,o.kt)("p",null,"If it has more containers to choose from, the script will prompt you to pick ID of the one that you want to attach to. Script use ",(0,o.kt)("inlineCode",{parentName:"p"},"grep")," extended regex syntax, therefore you can also pass valid regex to it, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"gallery-[a-z]+-debug"),"."),(0,o.kt)("p",null,"A very similar use are ",(0,o.kt)("inlineCode",{parentName:"p"},"pod logs")," for which you can basically use the same script just adjust the last line to ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get logs"),"."),(0,o.kt)("p",null,"You can add these scripts to your aliases in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bash_aliases")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"alias k8att='~/k8att.sh'\nalias k8logs='~/k8logs.sh'\n")),(0,o.kt)("p",null,"and just use it as any other command in your workflow."))}u.isMDXComponent=!0}}]);