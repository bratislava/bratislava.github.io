---
sidebar_position: 7
---

# Debuging

## How to debug Kubernetes pod?

Let's assume you want to check the pod for `next-city-library`.

1. ### Connect to proper Kubernetes cluster

   In our case, we will connect to `tkg-innov-prod`.

2. ### Check if you are incorrect cluster context

   Run `kubectl config current-context`, and if it matches your desired cluster, you are good to go.

3. ### Check if your service is running in a pod.

   Run `kubectl get pods --namespace=bratislava-monorepo` and find your desired pod and copy its name like: `next-city-library-app-b868fcd5c-lj6tb`

4. ### Create a new debug pod with ubuntu

   Now we will create a new debug pod with ubuntu, and we will attach the container to the pod so we can easily debug it. Run this command: `kubectl debug next-city-library-app-b868fcd5c-lj6to -it --namespace=bratislava-monorepo --image=ubuntu --share-processes --copy-to=next-city-library-app-debug`. Don't forget to update the proper pod and `--copy-to` to the name you want. Under `--copy-to`, you will find the running pod. This command will also open a terminal in the pod.

5. ### Update repositories in ubuntu

   To be able to use `apt install`, you need first to update its registries with this command: `apt-get update`

6. ### Install needed debugging utilities for ubuntu
   For debugging, you will probably need some networking tools. You can install it with these commands:

- ping: `apt-get install iputils-ping`
- nslookup: `apt-get install dnsutils`
- wget: `apt install wget`
- curl: `apt install curl`

7. ### Clean ubuntu
   After you are done with debugging, you can clean the ubuntu pod with this command: `kubectl delete pod next-city-library-app-debug --namespace=bratislava-monorepo`
