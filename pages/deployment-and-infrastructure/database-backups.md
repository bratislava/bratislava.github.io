# Database backups

We have a [db-backup pipeline](https://dev.azure.com/bratislava-innovation/Inovacie/_build?definitionId=28) available on our [Azure Devops project](https://dev.azure.com/bratislava-innovation/Inovacie) which dumps all the postgres instances running on all of our clusters 3 times a day.

You need access to the Azure Devops project to be able to view these.

For guide on loading dumps like this locally (i.e. for Strapi CMS) see [the appropriate recipe](../strapi/load-strapi-db-in-local-dev).
