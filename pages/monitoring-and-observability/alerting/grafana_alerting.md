# Grafana Alerting

In recipes for this section, we will discuss

- How to setup a new **[alert](https://grafana.bratislava.sk/alerting/list)** for your application
- How to link alerts with specific **[contact points](https://grafana.com/docs/grafana/latest/alerting/contact-points/)** for better relevant targeting [&#8690;](./contact-point).

We, somewhat arbitrary, split the alert into 3 different categories

- Alerting on application **system resources** (CPU, Memory, Disk, etc.) [&#8690;](./resource_alert)
- Alerting on application's **logs** and specific keywords or pattern in those logs [&#8690;](./log_alert)
- Alerting on **availability** of specific endpoints or data provided by those endpoints [&#8690;](./endpoint_alert)

This categorization is in line with the supporting Grafana applications/data sources, that all have different use-cases and all need a bit different syntax. Currently we support

- _[Prometheus](https://prometheus.io/)_ is a monitoring tool that sits on top of our kubernetes infrastructure and provides various metrics about nodes and application health, resources, etc.
- _[Loki](https://grafana.com/oss/loki/)_ is a Grafana application that specializes in logs monitoring and alerting.
- _[Infinity](https://grafana.com/grafana/plugins/yesoreyeram-infinity-datasource/)_ is a very simple application that provides HTTP requests capabilities, it can be used to monitor health endpoint and is capable of parsing JSON responses and alerting on them

And for more information on how all of this is setup, please visit [Monitoring and Observability](../grafana) section.
