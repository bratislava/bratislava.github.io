---
sidebar_position: 2
---

# Intro, installments and login

## Install Requirements

- Install kubectl based `brew install kubectl` or based on you platform you can follow https://kubernetes.io/docs/tasks/tools/
- Download and install vsphere tanzu plugin [here](https://k8s.tanzu.bratislava.sk), you need to be connected on cable or through VPN to magistrate network
  - Windows - copy `kubectl` and `kubectl-vsphere` to `c:/windows/system32` (needed admin rights) otherwise `kubectl vsphere login` commands will not work
- Install [kubeseal](https://github.com/bitnami-labs/sealed-secrets#installation) `brew install kubeseal` (`apt install kubeseal`), a tool for generating secrets
- Download and install Kubernetes [Lens](https://k8slens.dev), a GUI tool for easier management of cluster deployments
- If you prefer command line environments there is also a tool called [k9s](https://k9scli.io/), which can serve as alternative to Lens.

## Login

- be connected on cable or through VPN to magistrate, where username is your email.
- run kubectl login commands
  - main login \
    `kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify -u {{username}}`
    - to login through Windows you need to set password `export KUBECTL_VSPHERE_PASSWORD={{password}}`
  - logins to clusters
    - `kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-dev -u {{username}}`
    - `kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-staging -u {{username}}`
    - `kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-prod -u {{username}}`
    - `kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-master -u {{username}}` 
       (optional, you don't need this, its only master cluster)
- open Lens and you should see clusters

## Tips & Tricks

If you are running reasonable command line environment you can create aliases for these logins.   

For *nix based command line environment you can add these to your `~/.bash_aliases` or `~/.bashrc`. For example:

```bash
# k8 login aliases
alias k8dev='kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-dev -u {{username}} && kubectl config use-context tkg-innov-dev'

alias k8stage='kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-staging -u {{username}} && kubectl config use-context tkg-innov-staging'
alias k8staging='k8stage'

alias k8prod='kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-prod -u {{username}} && kubectl config use-context tkg-innov-prod'
```

These will also set a correct config context to use for our clusters. To apply changes re-log to your console or called (any relevant equivalent to) `source ~/.bashrc`. After this, you can log in just by running `k8dev`. Note, if you don't have `$KUBECTL_VSPHERE_PASSWORD` environment variable set it will ask you for your NT password.
