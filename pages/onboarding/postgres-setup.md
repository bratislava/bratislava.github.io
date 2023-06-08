# Setup Postgres & tools

We recommend running your postgres database in a docker. For docker setup recommendations, look [here](./docker-setup).

## Installing psql

It's recommended that you have a cli interface to interact with Postgres instances - you can check [here](https://www.timescale.com/blog/how-to-install-psql-on-mac-ubuntu-debian-windows/) to see how to instal psql.

## Installing pgAdmin

If you prefer a GUI to navigate the database, we recommend [pgAdmin](https://www.pgadmin.org/)

## Setting up local database with docker compose

Using `docker` and `docker-compose` is an easy way to setup . Often you'll have4 a `docker-compose.yml` file next to a project for this exact purpose. If you need to quickly spin-up a new database, here's a template for it - put it in a `docker-compose.yml` file somewhere on your computer and run `docker compose up` in the same directory.

```
version: '3.8'
services:
  postgres:
    image: postgres:latest
    environment:
      POSTGRES_USER: strapi
      POSTGRES_PASSWORD: password
      POSTGRES_DB: strapi
      PGPORT: 5432
    expose:
      - '5432'
    ports:
      - '127.0.0.1:5432:5432'

volumes:
  postgres:
```

Feel free to change the user/pw/db_name to whatever suits you.
