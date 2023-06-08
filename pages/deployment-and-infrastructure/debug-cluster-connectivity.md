# Debugging k8s cluster connectivity to an outside service

To debug running pods in kubernetes you can follow official guide - https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/.  
Following is just a small example in our local context. Let's assume you want to check if you can ping a service from the `next-city-library` pod.

1. ### Connect to proper Kubernetes cluster

   In our case, we will connect to `tkg-innov-dev`. You can follow our [Login guide](../onboarding/kubernetes-lens-setup).
   To verify that you are correctly connected you can run

   ```bash
   kubectl config current-context
   ```

   The output should match `tkg-innov-dev`.

2. ### Check if your service is running in a pod.

   Run

   ```bash
   kubectl get pods --all-namespaces
   ```

   and find your desired pod and copy its name like: `next-city-library-app-b868fcd5c-lj6tb`.  
   If you are running a reasonable `*nix` shell, you can do

   ```bash
   kubectl get pods --all-namespaces | grep "next-city-library"
   ```

   which should help with finding your POD.

3. ### Create a new debug pod with ubuntu

   Now we will create a new debug pod with ubuntu, and we will attach the container to the pod so we can easily debug it.
   Run following command to create a new debug POD, which will be a exact copy of your original container (you can read more information in the official docs)

   ```bash
   kubectl debug next-city-library-app-b868fcd5c-lj6to -it --namespace=bratislava-monorepo --image=ubuntu --share-processes --copy-to=next-city-library-app-debug
   ```

   Don't forget to update the proper pod and `--copy-to` to the name you want. Under `--copy-to`, you will find the running pod. This command will also attach you to newly created POD.

4. ### Install needed debugging utilities for ubuntu

   Before any installations run, you might need to run

   ```bash
   sudo apt update --yes
   ```

   For debugging, you will probably need some networking tools. You can install it with these commands:

   - ping: `apt-get install iputils-ping`
   - nslookup: `apt-get install dnsutils`
   - wget: `apt install wget`
   - curl: `apt install curl`

5. ### Clean Up

   After you are done with debugging, please clean up after yourself and delete the pods that you have created and no longer need. For example you can delete our debug pod with following command

   ```bash
   kubectl delete pod next-city-library-app-debug --namespace=bratislava-monorepo
   ```
