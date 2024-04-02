# Docker / Podman setup

We recommend using [podman](https://podman.io/). Depending on your OS, you may need other components as well, i.e. [podman-compose](https://github.com/containers/podman-compose). Use `podman` and `podman-compose` as substitute everytime you see `docker` or `docker compose`.

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
