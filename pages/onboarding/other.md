## Install Podman

A [podman](https://podman.io/) is open source container system like Docker. You can install the latest version by running

```bash copy
echo 'deb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/unstable/xUbuntu_22.04/ /' | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:unstable.list
curl -fsSL https://download.opensuse.org/repositories/devel:kubic:libcontainers:unstable/xUbuntu_22.04/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/devel_kubic_libcontainers_unstable.gpg > /dev/null
sudo apt update
sudo apt install -y podman
```

_Note: in the current Ubuntu upstream repository podman is stuck in version 3.x. This should use "unstable" repository, which should have a latest stable podman version (at time of this writing 4.2.x)_

For most usecases this is full fledge container system and can replace docker. You can even alias it (in your ~/.bashrc or ~/.bash_aliases)

```bash copy
alias docker=podman
```

or create symlink to it. Podman should be installed in `/usr/bin`, but you can check by running `which podman`

```bash copy
cd /usr/bin
ln -s podman docker
```

### podman-compose

There is also a replacement for `docker-compose` called [`podman-compose`](https://github.com/containers/podman-compose), but it is shipped as a different (python) package. You can install it by running

```bash copy
pip3 install podman-compose
```

After that most likely you will also need to run, due to this issue https://github.com/microsoft/WSL/issues/7948

```bash copy
update-alternatives --set iptables /usr/sbin/iptables-legacy
update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
```

## Install `kubectl` and other plugins

### `kubectl`

To install `kubectl` tool follow the official guide https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/

Verify you installation by running

```bash copy
kubectl --version
```

### `vsphere plugin`

You will also need to download bratislava vsphere plugin, here: https://k8s.tanzu.bratislava.sk/. Note, that you have to be connected to magistrate network.

You can download it and install it by running

```bash copy
wget -qO- https://k8s.tanzu.bratislava.sk/wcp/plugin/linux-amd64/vsphere-plugin.zip | tar xzv
sudo install -o root -g root -m 0755 kubectl-vsphere /usr/local/bin/kubectl-vsphere
```

After this you should be able to log into our kubernetes cluster. You can test and login in by following our [Login guide](../onboarding/kubernetes-lens-setup).

### `kubeseal`

And lastly you will also need a client side utility: [`kubeseal`](https://github.com/bitnami-labs/sealed-secrets/), which you can download here https://github.com/bitnami-labs/sealed-secrets/releases and is used to encrypt sensitive data.

You can also use following lines to download and install

```bash copy
wget https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.18.1/kubeseal-0.18.1-linux-$(dpkg --print-architecture).tar.gz -qO- | tar xvz
sudo install -o root -g root -m 0755 kubeseal /usr/local/bin/kubeseal
```

You can read more about creating secrets [here](../deployment-and-infrastructure/env-vars-and-secrets).

## Install `bratiska-cli`

If you plan on deploying to our kubernetes cluster, most likely you will need [`bratiska-cli`](https://github.com/bratislava/bratiska-cli) npm package.
But first, you need to install and gain accesses to all of it's [prerequisites](https://github.com/bratislava/bratiska-cli#prerequisites).

### Install `npm`

First we need to [install npm](https://stackoverflow.com/a/61976982). You can use following script

```bash copy
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
cat <<EOT >> ~/.bashrc
export NVM_DIR="${HOME}/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
EOT
source ~/.bashrc
nvm install node
```

### Install `yarn`

To Install `yarn`, you can use your preferred version. Here, we will follow [official documentation](https://classic.yarnpkg.com/lang/en/docs/install/)

```bash copy
npm install --global yarn
```

Add `yarn` to your path

```bash copy
echo "export PATH=\"$PATH:${HOME}/.yarn/bin\"" >> ~/.bashrc
source ~/.bashrc
```

### Install `bratiska-cli`

After successful installation of `yarn` (to verify you can run `yarn --version`) follow  
[bratiska-cli installation instruction](https://github.com/bratislava/bratiska-cli#installation). Please, verify one more time that you have met all of the required [prerequisites](https://github.com/bratislava/bratiska-cli#prerequisites).

Now you should have everything needed to [deploy](https://github.com/bratislava/bratiska-cli#deployment) your application through `bratiska-cli`.  
To login to our cluster you can follow our [Login guide](../onboarding/kubernetes-lens-setup).
