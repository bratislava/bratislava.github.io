# Connecting to Kubernetes

This section briefly shows how to do some basic connecting to Service and PODs in kubernetes cluster through `kubectl` or kubernetes Lens.   
As stated you will obviously need access to our cluster. To login to specific cluster you can follow our [Login guide](./Login.md).

## How to connect to database

### Lens

1. Open Lens and on the left hand side panel navigate to `Network -> Services`.
2. Find the Service that you want to connect to, usually something like `anything-database` or `anything-database-service`
3. Click on right service and scroll down to find Connection section and under there should be a button `Forward`. Click it and choose your local free port
4. Now your database should be accessible through localhost 

*Note: it is password free, but if you want to find password to db, go to secrets and find db secret for this db*

### kubectl

You can also port forward directly through `kubectl` command by running

```bash
kubectl port-forward service/anything-database-service 5432:5432
```

For more information checkout [official port-forward](https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/) documentation.

## How to see logs

### Lens

You can follow this official video guide on extracting Logs https://www.youtube.com/watch?v=QIHqOd05TBA.

### kubectl

You can get pod logs in you terminal with `kubectl` by running 

```bash
kubectl get logs my-pod
```

For more information, check out [interacting with running pods](https://kubernetes.io/docs/reference/kubectl/cheatsheet/#interacting-with-running-pods).

## How to connect to app/pod terminal

### Lens

1. Open Lens and on the left hand side panel navigate to `Workloads -> Pods`
2. Find the POD in question and click on it
3. Click in right top corner find Pod Shell button (next to Pod Logs)

### kubectl

If you prefer to attach to POD within your terminal, you can do so with `kubectl`

```bash
kubectl exec -i -t --namespace <namespace> <pod_name> --container <container> -- sh -c "clear; (bash || ash || sh)"
```

For example, to attach to pod with name `"next-city-gallery-app-debug"` in a namespace `"bratislava-monorepo"` and container `"app"`, run the following

```bash
kubectl exec -i -t --namespace bratislava-monorepo next-city-gallery-app-debug --container app -- sh -c "clear; (bash || ash || sh)"
```

## Tips & Tricks

If you are running reasonable `*nix` terminal you can automate most of these task from your terminal, here are just some examples

### Attach to POD within your terminal without knowing full name

You can create a simple script, for example `k8att.sh`, that will *search* and attach to the right POD and it's container within your terminal. As this will search through available PODs you don't need to know full name to attach to as sometimes the PODs name can be long and in different namespaces.

```bash
#!/bin/bash

if [[ -z "$1" ]]
then
    echo "ERROR: You have to give us name of the pod to attach to"
    exit 1
fi

POD_RESP=$(kubectl get pods --all-namespaces | grep -E "$1")
POD_NAME=$(echo "$POD_RESP" | awk '{print $2}')
POD_NAMESPACE=$(echo "$POD_RESP" | awk '{print $1}')

POD_CONTAINERS=$(kubectl get pod --namespace "$POD_NAMESPACE" "$POD_NAME" -o jsonpath='{.spec.containers[*].name}')
IFS=' ' read -ra CONTAINERS <<< "$POD_CONTAINERS"

if [ "${#CONTAINERS[@]}" -gt 1 ]; then
    for i in "${!CONTAINERS[@]}"; do
        printf "%s\t%s\n" "$i" "${CONTAINERS[$i]}"
    done
    read -p "Choose container index (expecting int): " CONTAINER_IX
else
    CONTAINER_IX=0
fi

CONTAINER=${CONTAINERS[$CONTAINER_IX]}
echo -e "Attaching to pod \033[0;32m'$POD_NAME'\033[0m, container \033[0;32m'$CONTAINER'\033[0m in \033[0;34m'$POD_NAMESPACE'\033[0m namespace "
kubectl exec -i -t --namespace "$POD_NAMESPACE" "$POD_NAME" --container "$CONTAINER" -- sh -c "clear; (bash || ash || sh)"
```

Then you just `chmod +x k8att.sh` and you can use it to attach. Sticking with our previous attach example, now to attach to a pod `"next-city-gallery-app-debug"` you can just do 

```bash
./k8att gallery-app-debug
```

If it has more containers to choose from, the script will prompt you to pick ID of the one that you want to attach to. Script use `grep` extended regex syntax, therefore you can also pass valid regex to it, e.g., `gallery-[a-z]+-debug`.

A very similar use are `pod logs` for which you can basically use the same script just adjust the last line to `kubectl get logs`.

You can add these scripts to your aliases in `~/.bashrc` or `~/.bash_aliases`

```bash
alias k8att='~/k8att.sh'
alias k8logs='~/k8logs.sh'
```

and just use it as any other command in your workflow.