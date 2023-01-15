# Sync Strapi database to different environment

Below is a set of commands to copy production Strapi data to staging environment - can be modified for other similar tasks. If you need exact copy of database, you should scale down strapi & next deployments and drop & recreate database before loading the data.

```bash
# below, update user@bratislava.sk, user.name and optionally strapi-backup.sql to unique file name

# recommended to do step-by-step
# skip the first step if on Magistrate network or already on vpn, skip the second if already logged in to kubernetes clusters

# Step 1 - vpn

sudo openfortivpn vpn.bratislava.sk:443 --username=user.name --trusted-cert 249c03e8a78ee9b45b9f2afa2e13bd59da1384b7377d133fa0caff86af45b28d

# Step 2 - kubectl login

kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-staging -u user@bratislava.sk
kubectl vsphere login --server=10.10.10.1 --insecure-skip-tls-verify --tanzu-kubernetes-cluster-name=tkg-innov-prod -u user@bratislava.sk

# Step 3 - download dump

kubectl config use-context tkg-innov-prod
kubectl exec -t -n standalone bratislava-strapi-database-0 -c database -- sh -c "pg_dump -c -U strapi strapi > strapi-backup.sql"
kubectl cp standalone/bratislava-strapi-database-0:/strapi-backup.sql ./strapi-backup.sql
kubectl config use-context tkg-innov-staging

# Checkpoint - recheck that you are in correct context!

kubectl config get-contexts

# Step 4 - import dump

kubectl cp ./strapi-backup.sql standalone/bratislava-strapi-database-0:/strapi-backup.sql
kubectl exec -t -n standalone bratislava-strapi-database-0 -c database -- sh -c "psql -U strapi strapi < strapi-backup.sql"
```
