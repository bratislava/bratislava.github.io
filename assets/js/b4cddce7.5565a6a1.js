"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[9143],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=n.createContext({}),p=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,h=d["".concat(r,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1663:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const s={},i="Windows WSL setup",o={unversionedId:"recipes/wsl",id:"recipes/wsl",title:"Windows WSL setup",description:"Here we briefly show to setup a WSL v2 and our bratislava tools within.",source:"@site/docs/recipes/wsl.md",sourceDirName:"recipes",slug:"/recipes/wsl",permalink:"/docs/recipes/wsl",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/recipes/wsl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sync Strapi database to different environment",permalink:"/docs/recipes/sync-strapi-db-to-different-env"},next:{title:"Deployment and Infrastructure",permalink:"/docs/category/deployment-and-infrastructure"}},r={},p=[{value:"Install WSL",id:"install-wsl",level:2},{value:"Install Podman",id:"install-podman",level:2},{value:"podman-compose",id:"podman-compose",level:3},{value:"Install <code>kubectl</code> and other plugins",id:"install-kubectl-and-other-plugins",level:2},{value:"<code>kubectl</code>",id:"kubectl",level:3},{value:"<code>vsphere plugin</code>",id:"vsphere-plugin",level:3},{value:"<code>kubeseal</code>",id:"kubeseal",level:3},{value:"Install <code>bratiska-cli</code>",id:"install-bratiska-cli",level:2},{value:"Install <code>npm</code>",id:"install-npm",level:3},{value:"Install <code>yarn</code>",id:"install-yarn",level:3},{value:"Install <code>bratiska-cli</code>",id:"install-bratiska-cli-1",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"windows-wsl-setup"},"Windows WSL setup"),(0,l.kt)("p",null,"Here we briefly show to setup a WSL v2 and our bratislava tools within."),(0,l.kt)("h2",{id:"install-wsl"},"Install WSL"),(0,l.kt)("p",null,"For this you will need administrator access to your computer. There are plenty of guides out there to install wsl. You can most likely follow any of them"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"https://docs.microsoft.com/en-us/windows/wsl/install")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pureinfotech.com/install-windows-subsystem-linux-2-windows-10/"},"https://pureinfotech.com/install-windows-subsystem-linux-2-windows-10/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.ssl.com/how-to/enable-linux-subsystem-install-ubuntu-windows-10/"},"https://www.ssl.com/how-to/enable-linux-subsystem-install-ubuntu-windows-10/"))),(0,l.kt)("p",null,"But, with that said, here is our take on it"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"First you need to ",(0,l.kt)("a",{parentName:"p",href:"https://www.ssl.com/how-to/enable-linux-subsystem-install-ubuntu-windows-10/"},"enable linux subsystem")," in your Windows settings."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},'Hit windows key and search for "Turn Windows features on or off", or in Slovak localization it is "Zapn\xfa\u0165 alebo vypn\xfa\u0165 s\xfa\u010dasti syst\xe9mu Windows"'),(0,l.kt)("li",{parentName:"ol"},'In the list search for "Windows Subsystem for Linux" or again in Slovak localization "Podsyst\xe9m Windowsu pre Linux"'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Once enabled, navigate to Microsoft Store and search for Ubuntu (or preferred Linux distro) and hit "GET" button. ',(0,l.kt)("em",{parentName:"p"},'Note: we suggest you install Ubuntu as there might be fewer issues. At the time of this writing the latest version is "Ubuntu 22.04.1 LTS"'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Now you should have your Linux distro installed. Hit windows key and open it. This should install/unpack everything necessary it will also prompt you for your Linux username and password (this will be the password that you will use, for example, when you use ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo"),")")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Lastly, upgrade to WSL v2."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Open PowerShell with administrator access"),(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"wsl -l -v")," command to see the installed distribution and their wsl versions"),(0,l.kt)("li",{parentName:"ol"},"To change versions, use the command: ",(0,l.kt)("inlineCode",{parentName:"li"},"wsl --set-version <distro name> 2"),". In our case it is ",(0,l.kt)("inlineCode",{parentName:"li"},"wsl --set-version Ubuntu-22.04 2")),(0,l.kt)("li",{parentName:"ol"},"(Optional) You can also set a default wsl version for any future installation by running ",(0,l.kt)("inlineCode",{parentName:"li"},"wsl --set-default-version <Version#>")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After this you can reopen your terminal and you should be running your WSL v2 Linux distribution")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"(Optional but probably desired) As a first thing you should probably upgrade and update your system with the latest packages. You can do so by running"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt upgrade\nsudo apt update\n")))),(0,l.kt)("h2",{id:"install-podman"},"Install Podman"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"https://podman.io/"},"podman")," is open source container system like Docker. You can install the latest version by running"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'deb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/unstable/xUbuntu_22.04/ /' | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:unstable.list\ncurl -fsSL https://download.opensuse.org/repositories/devel:kubic:libcontainers:unstable/xUbuntu_22.04/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/devel_kubic_libcontainers_unstable.gpg > /dev/null\nsudo apt update\nsudo apt install -y podman\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'Note: in the current Ubuntu upstream repository podman is stuck in version 3.x. This should use "unstable" repository, which should have a latest stable podman version (at time of this writing 4.2.x)')),(0,l.kt)("p",null,"For most usecases this is full fledge container system and can replace docker. You can even alias it (in your ~/.bashrc or ~/.bash_aliases)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alias docker=podman\n")),(0,l.kt)("p",null,"or create symlink to it. Podman should be installed in ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/bin"),", but you can check by running ",(0,l.kt)("inlineCode",{parentName:"p"},"which podman")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/bin\nln -s podman docker\n")),(0,l.kt)("h3",{id:"podman-compose"},"podman-compose"),(0,l.kt)("p",null,"There is also a replacement for ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," called ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-compose"},(0,l.kt)("inlineCode",{parentName:"a"},"podman-compose")),", but it is shipped as a different (python) package. You can install it by running"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install podman-compose\n")),(0,l.kt)("p",null,"After that most likely you will also need to run, due to this issue ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/WSL/issues/7948"},"https://github.com/microsoft/WSL/issues/7948")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"update-alternatives --set iptables /usr/sbin/iptables-legacy\nupdate-alternatives --set ip6tables /usr/sbin/ip6tables-legacy\n")),(0,l.kt)("h2",{id:"install-kubectl-and-other-plugins"},"Install ",(0,l.kt)("inlineCode",{parentName:"h2"},"kubectl")," and other plugins"),(0,l.kt)("h3",{id:"kubectl"},(0,l.kt)("inlineCode",{parentName:"h3"},"kubectl")),(0,l.kt)("p",null,"To install ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," tool follow the official guide ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/"},"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/")),(0,l.kt)("p",null,"Verify you installation by running"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl --version\n")),(0,l.kt)("h3",{id:"vsphere-plugin"},(0,l.kt)("inlineCode",{parentName:"h3"},"vsphere plugin")),(0,l.kt)("p",null,"You will also need to download bratislava vsphere plugin, here: ",(0,l.kt)("a",{parentName:"p",href:"https://k8s.tanzu.bratislava.sk/"},"https://k8s.tanzu.bratislava.sk/"),". Note, that you have to be connected to magistrate network."),(0,l.kt)("p",null,"You can download it and install it by running"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://k8s.tanzu.bratislava.sk/wcp/plugin/linux-amd64/vsphere-plugin.zip | tar xzv\nsudo install -o root -g root -m 0755 kubectl-vsphere /usr/local/bin/kubectl-vsphere\n")),(0,l.kt)("p",null,"After this you should be able to log into our kubernetes cluster. You can test and login in by following our ",(0,l.kt)("a",{parentName:"p",href:"/docs/recipes/kubernetes-lens-setup"},"Login guide"),"."),(0,l.kt)("h3",{id:"kubeseal"},(0,l.kt)("inlineCode",{parentName:"h3"},"kubeseal")),(0,l.kt)("p",null,"And lastly you will also need a client side utility: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bitnami-labs/sealed-secrets/"},(0,l.kt)("inlineCode",{parentName:"a"},"kubeseal")),", which you can download here ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bitnami-labs/sealed-secrets/releases"},"https://github.com/bitnami-labs/sealed-secrets/releases")," and is used to encrypt sensitive data."),(0,l.kt)("p",null,"You can also use following lines to download and install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.18.1/kubeseal-0.18.1-linux-$(dpkg --print-architecture).tar.gz -qO- | tar xvz\nsudo install -o root -g root -m 0755 kubeseal /usr/local/bin/kubeseal\n")),(0,l.kt)("p",null,"You can read more about creating secrets ",(0,l.kt)("a",{parentName:"p",href:"/docs/recipes/env-vars-and-secrets"},"here"),"."),(0,l.kt)("h2",{id:"install-bratiska-cli"},"Install ",(0,l.kt)("inlineCode",{parentName:"h2"},"bratiska-cli")),(0,l.kt)("p",null,"If you plan on deploying to our kubernetes cluster, most likely you will need ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bratislava/bratiska-cli"},(0,l.kt)("inlineCode",{parentName:"a"},"bratiska-cli"))," npm package.\nBut first, you need to install and gain accesses to all of it's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bratislava/bratiska-cli#prerequisites"},"prerequisites"),"."),(0,l.kt)("h3",{id:"install-npm"},"Install ",(0,l.kt)("inlineCode",{parentName:"h3"},"npm")),(0,l.kt)("p",null,"First we need to ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/61976982"},"install npm"),". You can use following script"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash\ncat <<EOT >> ~/.bashrc\nexport NVM_DIR="${HOME}/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion\nEOT\nsource ~/.bashrc\nnvm install node\n')),(0,l.kt)("h3",{id:"install-yarn"},"Install ",(0,l.kt)("inlineCode",{parentName:"h3"},"yarn")),(0,l.kt)("p",null,"To Install ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),", you can use your preferred version. Here, we will follow ",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/install/"},"official documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global yarn\n")),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," to your path"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export PATH=\\"$PATH:${HOME}/.yarn/bin\\"" >> ~/.bashrc\nsource ~/.bashrc\n')),(0,l.kt)("h3",{id:"install-bratiska-cli-1"},"Install ",(0,l.kt)("inlineCode",{parentName:"h3"},"bratiska-cli")),(0,l.kt)("p",null,"After successful installation of ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," (to verify you can run ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn --version"),") follow",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bratislava/bratiska-cli#installation"},"bratiska-cli installation instruction"),". Please, verify one more time that you have met all of the required ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bratislava/bratiska-cli#prerequisites"},"prerequisites"),"."),(0,l.kt)("p",null,"Now you should have everything needed to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bratislava/bratiska-cli#deployment"},"deploy")," your application through ",(0,l.kt)("inlineCode",{parentName:"p"},"bratiska-cli"),".",(0,l.kt)("br",{parentName:"p"}),"\n","To login to our cluster you can follow our ",(0,l.kt)("a",{parentName:"p",href:"/docs/recipes/kubernetes-lens-setup"},"Login guide"),"."))}c.isMDXComponent=!0}}]);