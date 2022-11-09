# Moving to live production checklist
### What to not forget when moving from staging to live production.

## 1. Set up secrets on production
Don't forget to check folder /kubernetes/base/secrets and synchronize all needed secrets to the `prod` cluster.
Handy commands for secrets:

We are saving secrets by kubeseal. You need to run this command that creates the file `database.secret.yml`, where all our values are encrypted and safe to add to the repository.
```bash
kubeseal --controller-name=sealed-secrets --scope=namespace-wide --namespace=standalone --format=yaml < database.yml > database.secret.yml
```

If you want to propagate a sealed secret to Kubernetes, you can run this command:
```bash
kubectl create -f database.secret.yml
```

## 2. Deploy the app to production.
If the project uses pipelines, you can quickly call bratiska-cli with the command `bratiska-cli tag prod` from the app folder. If you are not using pipelines, you need to:
1. `git checkout master`
2. `git pull`
3. move to the folder where is `package.json` located
4. `bratiska-cli deploy --production`

## 3. Synchronize databases from staging
If the deployment has the database, don't forget to move the newest version to production. You can grab the db from azure backup pipelines or download it from the staging cluster directly. If you have a db file, you can run the following:
1. `kubectl config use-context tkg-innov-prod`
2. change accordingly: `kubectl cp ./strapi-backup.sql standalone/marianum-strapi-database-0:/strapi-backup.sql`
3. change accordingly: `kubectl exec -t -n standalone marianum-strapi-database-0 -c database -- sh -c "psql -U strapi strapi < strapi-backup.sql"`

## 4. Add external hostname in ingress.
If the web is going to be live in a different address, you must first add `bratislavainovuje.sk` as your hostname to check if all network features are working correctly.
Like here:
```yaml
spec:
  tls:
    - hosts:
        - marianum-next.bratislava.sk
        - www.marianum-next.bratislava.sk
        - www.bratislavainovuje.sk
        - bratislavainovuje.sk
      secretName: marianum-next-tls
  rules:
    - host: marianum-next.bratislava.sk
      http:
        paths:
          - path: /
            pathType: ImplementationSpecific
            backend:
              service:
                name: marianum-next-app
                port:
                  number: 80
    - host: www.marianum-next.bratislava.sk
      http:
        paths:
          - path: /
            pathType: ImplementationSpecific
            backend:
              service:
                name: marianum-next-app
                port:
                  number: 80
    - host: bratislavainovuje.sk
      http:
        paths:
          - path: /
            pathType: ImplementationSpecific
            backend:
              service:
                name: marianum-next-app
                port:
                  number: 80
    - host: www.bratislavainovuje.sk
      http:
        paths:
          - path: /
            pathType: ImplementationSpecific
            backend:
              service:
                name: marianum-next-app
                port:
                  number: 80
```
As you can see `marianum-next.bratislava.sk` is default app name and `bratislavainovuje.sk` is new host name.

Also, don't forget to update `config.json` in `kubernetes/envs/Prod` where the host is specified:
```json
{
  "host": "bratislavainovuje.sk"
}
```

## 5. Check if everything is fine
Now you need to check if all website features are working fine and if there are no bugs. It is worth trying external services used on the page if they work away from the `bratislava.sk` domain.

## 6. Add a new domain to the internal DNS
Your new domain needs to be manually added to the internal network DNS. Please get in touch with filip.krajcik@bratislava.sk on this issue. Otherwise, certificate creation will not work!

## 7. Prepare for the final hostname move
The new domain must check its current DNS records to avoid misconfiguration. So use this website for nslookup:
https://www.nslookup.io/domains/bratislavainovuje.sk/dns-records/ where you add your desired domain.
If the results contain AAAA records, it is necessary to remove them immediately because this can cause an issue. Our kubernetes infrastructure is IPV4 only. So after removal in 15 mins, AAAA records should be empty.
Recheck if everything is done with the website: https://www.nslookup.io.
Also, it is good to check if everything is prepared for let's encrypt where you add your new domain: https://letsdebug.net/

## 8. Add new hostname to ingress and config.json
The time has come, now add to ingress your new hostname, same as you added `bratislavainovuje.sk`. Also, you need to change a value in `config.json` to your new hostname:
```json
{
  "host": "newhostname.sk"
}
```
Let things propagate, and we are now ready for the moving procedure.

## 9. Change DNS records to kubernetes records
Set A records in DNS to kubernetes public IP: `90.176.20.247`
Delete any remaining AAAA records, as this can cause certificate issues.

## 10. Check the status
After 15 mins, all changes should be propagated, and the new Certificate with a domain should be properly running in our production kubernetes. If something is failing, check the Troubleshooting section.


# Troubleshooting

## Webpage is not in kubernetes
The webpage link still shows the old version on the old server. Check if DNS was changed correctly and if there are no remaining AAAA records that can point out to the different server.

## Certificate not generated
There can be multiple errors. I try to cover them all.

### Certificate is invalid
If you receive an error on acme request 404 or 503, there is a chance that some of the DNS records are not properly routed.
Check https://letsdebug.net/ and type the domain there and see if there are some errors.
Check if the Certificate is generated for the `www` domain like `www.bratislavainovuje.sk` and see if there are the same errors or Certificate is generated without any problem.
