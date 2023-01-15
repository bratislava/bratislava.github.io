# Load Production or Staging database dump in local development

You'll need access to our [Azure Devops project](https://dev.azure.com/bratislava-innovation/Inovacie) o access the database dumps

You can then use the [db-backup pipeline](https://dev.azure.com/bratislava-innovation/Inovacie/_build?definitionId=28) to browse recent backups on different k8s deployed projects. Each run produces an artifact in which you'll find the db dump.

In all likelihood, you'll be interested in the runs titled `<Env>_standalone`, where `<Env>` is the k8s cluster you are after.

Assuming you have:

- postgres server running locally & psql cli tool installed
- a user/role called `strapi`
- a database `your_strapi_db`

you can load the dump `newest-db-dump.sql` like so:

```
psql -h localhost -p 5432 -U strapi your_strapi_db < newest-db-dump.sql
```

> It's not always necessary, but recommended, to have a role called `strapi` on your local Postgres server when doing this with a Strapi db dump - as the tables may reference role with this name directly. Alternative might be editing the dump and renaming the role referenced to one you have available locally.

To login into the db dumped this way, you may need to ask for access from the project lead.

> See [Sync Strapi database to different environment](sync-strapi-db-to-different-env.md) for guide on dumping live database directly from the server, instead of relying on the regular db dumps in pipeline.
