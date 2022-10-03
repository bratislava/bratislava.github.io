# Monitoring & Observability

In this section we will provide a bit of context on our monitoring infrastructure together with information about our alerting setup, through our [Grafana](https://grafana.bratislava.sk/).

## Access

Grafana is available only to whitelisted people. If you need you access, please ask an administrator. If you have an access rights you can add new person in our [Azure Portal](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ManagedAppMenuBlade/Users/objectId/efcd09e4-9cf1-418f-aaa9-55f848c3f027/appId/0ed658f0-929d-499f-a198-da9b563b44ee).

If you need to add an external developer, you can Invite them as guests into Bratislava Active Directory `(Azure`&#160;`portal -> Active`&#160;`Directory -> Users -> New/Invite -> Guest/External)`.

## A Bit of Context

For our monitoring and observability we use [Grafana](https://grafana.com/) with [Prometheus](https://prometheus.io/), [Loki](https://grafana.com/oss/loki/) and [Infinity](https://grafana.com/grafana/plugins/yesoreyeram-infinity-datasource/) plugin/application stack.

You can read more in their linked documentations, but to describe the setup in short:
  - _Grafana_ is only a visualization tool with alerting capabilities. You can add additional plugins and application to it to extend it's functionality
  - _Prometheus_ is a monitoring tool that sits on top of our kubernetes infrastructure and provides various metrics (exposed through `/metric` endpoint) about nodes health, resources, and application (pod) state, resources, etc. 
  - _Loki_ is a Grafana application that specializes in logs monitoring and alerting. We use `promtail` to push application logs into Loki.
  - _Infinity_ is a very simple grafana plugin, that provides HTTP requests capabilities, it can be used to monitor health endpoint and is capable of parsing JSON responses and alerting on them

All of these application can be use to monitor your application and alert in case of any issues.
Currently, we use this to monitor and observe our kubernetes infrastructure, together with some critical applications. For example, we are monitoring hardware resources for all our nodes and pods and when they reach critical usage >=95%, we alert on it. 

## Dashboards

If you have access to Grafana you can take a look at our dashboards, that provide more information about the state of our infrastructure and individual applications together with their logs.

### Pod Dashboard

[Pod Dashboard](https://grafana.bratislava.sk/d/liz0yRCZz/pod-dashboard?orgId=1) is a application dashboard where you can see  _logs_ of applications together with their _volume_ and _system_ statistics.

Dashboard is driven by filters that can go up to container granularity.

  - You can search through the **logs** with `regex` pattern. Log volume is color coded base on the stream it was emitted to (<font color="#adadad">stdout</font>/<font color="#ce0000">stderr</font>).
  - It also provides current **running status** of all associated _containers_
  - Application **system statics**, such as, memory, CPU, network and disk ([PVC](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)) usage
  - At the bottom of the dashboard we have **alerting panel** where you can see all the alerting rules associated with your filter selection together with their [state](https://grafana.com/docs/grafana/latest/alerting/fundamentals/state-and-health/)

### Persistent Volumes Dashboard

[Persistent Volumes Dashboard ](https://grafana.bratislava.sk/d/Y5d5lRhik/persistent-volumes) is monitoring on kubernetes _[PV/PVC](https://grafana.bratislava.sk/d/Y5d5lRhik/persistent-volumes) disk usage_.

Dashboard is driven by filters that can go up to application granularity.

  - It has **current volume usage** with "standard" gradient color coding from green to red, when the usage start hitting ~60%
  - It also provides a simple table showcasing the **full volume capacity**
  - And lastly, it shows **historical disk usage** in % of full capacity

### Health Status

[Health Status Dashboard](https://grafana.bratislava.sk/d/NEYiLUzik/health-status?orgId=1&refresh=5s) is complex monitoring dashboard, where you can find everything from monitoring _single application state_ with their _logs_ all the way up to _kubernetes node resource utilization_.

Dashboard is driven by filters that can go up to individual POD granularity.

  - It provides statistics on **health status** of all the application running within the cluster and their listing
  - You can also find there **POD's system resource** (CPU, Memory, ...) current and historical usage and running **state** 
  - **Containers's system resource** (CPU, Memory, ...) current and historical usage and running **state**
  - It also has information about **application replicas**
  - And lastly, also has **resource** (CPU, Memory, Disk) and **health** information on kubernetes cluster **nodes**

## Alerting

For actual alerting we have setup:
  - A Grafana Bratislava Slack application/bot, that you can add to your channel
  - Email address `grafana[at]devops.bratislava.sk`, that you can use to send a alert notification to you mailbox

To setup a new contact point, for instance if you and only you want get some specific alert, please follow our ["Add New Contact Point"](../recipes/alerting/contact-point.md) recipe. 

For recipes on how to create your own alert take a look at the following
  - Alerting on application **system resources** (CPU, Memory, Disk, etc.) [&#8690;](../recipes/alerting/resource_alert.md)
  - Alerting on application's **logs** and specific keywords or pattern in those logs [&#8690;](../recipes/alerting/log_alert.md)
  - Alerting on **availability** of specific endpoints or data provided by those endpoints [&#8690;](../recipes/alerting/endpoint_alert.md)
