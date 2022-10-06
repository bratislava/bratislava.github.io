---
sidebar_position: 2
---

# Setup

This guide focuses on specific updates to the Strapi setup related to our own needs and requirements. For more general information about Strapi, please refer to the [official documentation](https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html).

## Making content accessible without authentication

This needs to be done:

- when you setup a new instance or database, either locally or on a new deployment
- every time you add a new content type, on every deployment

Go to `Settings` -> in the sidebar `USERS & PERMISSIONS PLUGIN: Roles` -> edit icon ✏️ next to the `Public` role -> `Permissions`. In all of your custom content types, particularly the newly added ones, make sure the following permissions are checked:

- find
- findOne (if available)

![](./assets/strapi-public-permissions.png)

### One-time production setup

The steps below are needed to make our strapi instance deployment (and production) ready.

### ENV_PATH setup

Strapi takes [ENV_PATH](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/environment.html#strapi-s-environment-variables) environment variable to decide which .env file it should use - it's best to override the `"scripts"` section of `package.json`. To make it work under both Windows and Unix-like systems, install `cross-env` beforehand:

```bash
yarn add -D cross-env
```

Then edit package.json as follows:

...
"scripts": {
"develop": "cross-env ENV_PATH='./.env.local' strapi develop",
"start": "strapi start",
"build": "strapi build",
"strapi": "strapi",
...
},
...

```

This will allow you to easily maintain different dev and prod env vars inside the git repo - we usually keep .env.local outside of git and commit `env.development` file, which the devs are encouraged to copy into their own `.env.local` which they can override. This system is not perfect, but seems reasonable enough in a system like Strapi which, by default, accepts only a single `.env` config file at once.

An example of `.env.local` file from `bratislava.sk` project:

```

HOST=0.0.0.0
PORT=1337
APP_KEYS=VivFhCHdok6Ui4H1yhF8DA==,fkXjik+gn+fRLqatGAE8QQ==,M8eRp3VNi4dzdfHOTBlT7w==,PODWh8urxrSZKWXWxiEV3w==
API_TOKEN_SALT=ilrHJDUcrKxGMpxyBh32VA==
ADMIN_JWT_SECRET=odOY9wudFDnl//bE+nVWAQ==
JWT_SECRET=U4RUqp1ohkwtt6gRopMtdg==

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=password
DATABASE_SCHEMA=public

```

### Production JWT Secrets

As of Strapi v4.3 (and unlikely to change in near future), the 'clean' Strapi init generates a few secrets for you into `.env` file - these are used as seeds to generate one-time tokens and thus the ones used in production shouldn't be stored in github.

This means you need to insert the following env vars as secrets:

```

ADMIN_JWT_SECRET
API_TOKEN_SALT
APP_KEYS
JWT_SECRET

````

where `ADMIN_JWT_SECRET` are 4 base64 encoded strings separated by comma `,` character, and the rest are base64 encoded strings. Strapi docs [recommend](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html) generating the secrets with `openssl` command:

`openssl rand -base64 32`

Specifically, for APP_KEYS:

```bash
APP_KEYS=$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32)
````

This means the secret file will look something like this (replace the placeholder values with the openssl result _encoded once more into base64_ - more details in [secrets docs](../recipes/env-vars-and-secrets.md))):

```yml
apiVersion: v1
kind: Secret
metadata:
  name: bratislava-strapi-internals-secret
annotation:
  sealedsecrets.bitnami.com/managed: "true"
data:
  ADMIN_JWT_SECRET: YmFuYW5h
  API_TOKEN_SALT: YmFuYW5h
  APP_KEYS: YmFuYW5h
  JWT_SECRET: YmFuYW5h
```

### Other 'production setup' files

Other than that, your setup should include:

- Dockerfile
- dockerignore
- kubernetes directory

best copied over from one of the maintained project (i.e. `bratislava.sk`)
