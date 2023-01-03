# Application Backups

For backups we are using standalone installation of [Velero](https://velero.io/) with [restic](https://restic.net/) on our Tanzu kubernetes clusters ([info](https://docs.vmware.com/en/VMware-vSphere/7.0/vmware-vsphere-with-tanzu/GUID-A24A6B91-0CDF-4D02-AD08-7BA5EAC25A42.html)).

## Description

Velero creates a _custom resource_ **velero.io** on kubernetes cluster, where it's stores all of it information about backups, schedules, restores, _backup locations_, etc. We are using S3 buckets as a storage, which were configured during installation and can be found in "velero.io/BackupStorageLocation" and can be listed by running 

```bash
kubectl get backupstoragelocation --all-namespaces
```

Currently, we are running daily backups of only most important infrastructure, but this is subject to change in the future. All cluster with Velero installed and correctly configured backup locations can access all backups throughout all clusters. Meaning you can make a backup on _"prod"_ cluster and restore it on _"dev"_. This is possible since we are using [restic](https://restic.net/) to actually make backups of files and persistent volumes. Restic uses generic format to store data and therefore our backups should be portable between cluster, different infrastructures or kubernetes version. This allows us, in case of emergency, to spin up an emergency cluster and restore entire infrastructure if needed. 

The critical services are labeled `critical=true`, which you can use as selector when restoring a backups.

## Installation

To use Velero, you need to install it's CLI client, which can be found [here](https://velero.io/docs/v1.8/basic-install/#install-the-cli).   
To validate if Velero is correctly install, you can run

```bash
velero help
```

which should list all available commands. By default `velero` will use your current kubeconfig and `current-context` cluster. To check if everything is working with our infrastructure you can run

```bash
velero get backups
```

which no matter what cluster you are connected to, should list the same backups.

As we are using S3 as backup locations, it is advisable to also install tools, that can work with S3 bucket, such as
  - [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
  - [s5cmd](https://github.com/peak/s5cmd)
  - [S3 browser](https://s3browser.com/)

## Usage 

Here is a non exhaustive list of examples, how to work with Velero

### 💾 To make a backup with Velero

```bash
velero backup create app-namespace-backup-$(date -I) --include-namespaces my-app-namespace
```

which will create a backup of entire namespace `my-app-namespace` with name `"app-namespace-backup-2022-01-01"` (if it would be ran on date 2022-01-01).

### 🕛 To make repeating backup with Velero

you can create [`schedule`](https://velero.io/docs/main/backup-reference/#schedule-a-backup)

```bash
velero schedule create app-namespace-backup --include-namespaces my-app-namespace --schedule="0 0 * * *"
```

which will create a daily backup, each day at 00:00AM, of `my-app-namespace` kubernetes namespace.

### ⏪ To restore backup with Velero

```bash
velero restore create my-app-restore --from-backup app-namespace-backup
```

or restore from schedule

```bash
velero restore create my-app-restore --from-schedule app-namespace-backup
```

which will restore the latest backup made from given schedule.   
You can also use standard kubectl syntax and specify selector when creating a backup, restore, etc. For example, to restore only critical services from `"backup123"`

```bash
velero restore create --from-backup backup-123 --selector=critical=true
```

More information and examples can be found in
 - VMWare Tanzu [documentation](https://docs.vmware.com/en/VMware-vSphere/7.0/vmware-vsphere-with-tanzu/GUID-9816E07A-466C-451D-A43B-D415B2FAB7D6.html)
 - Official Velero [documentation](https://velero.io/docs/v1.10/backup-reference/)