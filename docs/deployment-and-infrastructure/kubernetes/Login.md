---
sidebar_position: 2
---

# Intro, installments and login

## Install Requirements

- Install kubectl `brew install kubectl` (`apt install kubectl`)
- Download and install vsphere tanzu plugin [here](https://k8s.tanzu.bratislava.sk), you need to be connected on cable or through VPN to magistrat
  - Windows - copy `kubectl` and `kubectl-vsphere` to `c:/windows/system32` (needed admin rights) otherwise `kubectl vsphere login` commands will not work
- Install kubeseal `brew install kubeseal` (`apt install kubeseal`), for generating secrets
- Downlad and install lens [here](https://k8slens.dev)

## Login

- be connected on cable or through VPN to magistrat, where username is your email.
- run kubectl login commands
  - main login \
    `kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify -u {{username}}`
    - to login through Windows you need to set password `export KUBECTL_VSPHERE_PASSWORD={{password}}`
  - logins to clusters
    - `kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-dev -u {{username}}`
    - `kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-staging -u {{username}}`
    - `kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-prod -u {{username}}`
    - `kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-master -u {{username}}` \
       (optional, you don't need this, its only master cluster)
- open Lens and you shoud see clusters
