# Grafana

We're using grafana for monitoring purposes.

## Access

Grafana is available only to whitelisted people. If you need you access to grafana, please ask an administrator. Or if you have an acceess rights you can add new person here:
https://portal.azure.com/#blade/Microsoft_AAD_IAM/ManagedAppMenuBlade/Users/objectId/efcd09e4-9cf1-418f-aaa9-55f848c3f027/appId/0ed658f0-929d-499f-a198-da9b563b44ee

If you need to add an external developer, you can Invite them as guests into Bratislava Active Directory (Azure portal -> Active Directory -> Users -> New/Invite -> Guest/External).

## Monitoring dashboard

You can have a look on all our services in this dashboard:
https://grafana.bratislava.sk/d/NEYiLUzik/health-status

There you can find results from health cron worker and metrics from our kubernetes cluster. So if some service is not working, have a look it there to see its status.

## Installing plugins

If you need install some plugins in Grafana you need to change it in helm settings, because otherwise your changes will not last long.

Have a look in this file:
https://dev.azure.com/bratislava-innovation/_git/Infrastructure?path=/helm-overrides/master/grafana.yml

```yaml
global:
storageClass: vsan-default-storage-policy

config:
useGrafanaIniFile: true
grafanaIniConfigMap: grafana

service:
type: ClusterIP
ports:
grafana: 80

admin:
password: n6msH52T02D7z7dO

plugins: yesoreyeram-infinity-datasource

grafana:
updateStrategy:
type: Recreate
```

in `plugins` you can specify more plugins. But be aware that array values are not working, and it needs to be added as comma separated values, like:

```yaml
plugins: yesoreyeram-infinity-datasource, other-special-plugin
```

Then you need to commit and push the changes. Pipelines will deploy the newest changes to kubernetes.
