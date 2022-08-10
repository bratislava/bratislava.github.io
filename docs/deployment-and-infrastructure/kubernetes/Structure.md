---
sidebar_position: 3
---

# Structure of kubernetes

## clusters

We have 4 clusters Master cluster for managing others, dev, staging and prod. Dev is for development and testing application, staging is for simulating production and testing on this environments.

## namespaces

There are some namespaces functional namespace for releasing and running containers

- buildx \
  TBD
- cert-manager \
  TBD
- gloo-system \
  TBD
- haproxy \
  TBD
- kube-node-lease \
  TBD
- kube-public \
  TBD
- kube-system \
  TBD
- monitoring \
  TBD
- vmware-system-auth \
  TBD
- vmware-system-cloud-provider \
  TBD
- vmware-system-csi \
  TBD

There are also namespaces for our applications

- monorepo \
  For releasing applications and databases from monorepo
- wordpress \
  For releasing wordpress applications and databases
