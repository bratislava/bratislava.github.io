# Kubernetes / Lens setup

You can only do this with sufficient access rights - ask Innovations team or Bratislava IT department if connecting to k8s infrastructure is relevant to you.

## Installation

- Install kubectl `brew install kubectl` (`apt install kubectl`)
- Download and install vsphere tanzu plugin [here](https://k8s.tanzu.bratislava.sk), you need to be connected on cable or through VPN to magistrat
  - Windows - copy `kubectl` and `kubectl-vsphere` to `c:/windows/system32` (needed admin rights) otherwise `kubectl vsphere login` commands will not work
- Install kubeseal `brew install kubeseal` (`apt install kubeseal`), for generating secrets
- Downlad and install lens [here](https://k8slens.dev)
- optional - if connecting from the outside, [openfortivpn](https://github.com/adrienverge/openfortivpn) or similar for establishing VPN connection

## Login

- if you're not on local magistrate network, connect to VPN: `sudo openfortivpn vpn.bratislava.sk:443 --username=user.name --trusted-cert 249c03e8a78ee9b45b9f2afa2e13bd59da1384b7377d133fa0caff86af45b28d`
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
