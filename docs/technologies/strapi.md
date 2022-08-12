# Strapi

##  Initial Strapi Project (& Deployment) setup

As of Strapi v4.3 (and unlikely to change in near future), the 'clean' Strapi init generates a few secrets for you into `.env` file - these are used as seeds to generate one-time tokens and thus the ones used in production shouldn't be stored in github.

This means you need to insert the following env vars as secrets:

```
ADMIN_JWT_SECRET
API_TOKEN_SALT
APP_KEYS
JWT_SECRET
```

where `ADMIN_JWT_SECRET` are 4 base64 encoded strings separated by comma `,` character, and the rest are base64 encoded strings. Strapi docs [recommend](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html) generating the secrets with `openssl` command:

`openssl rand -base64 32`

Specifically, for APP_KEYS:

```bash
APP_KEYS=$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32)
```

This means the secret file will look something like this (replace the placeholder values with the openssl result *encoded once more into base64* - more details in [secrets docs](../deployment-and-infrastructure/secrets.md))):

```yml
apiVersion: v1
kind: Secret
metadata:
  name: bratislava-strapi-internals-secret
data:
  ADMIN_JWT_SECRET: YmFuYW5h
  API_TOKEN_SALT: YmFuYW5h
  APP_KEYS: YmFuYW5h
  JWT_SECRET: YmFuYW5h
```

Other than that, your setup should include:

- Dockerfile
- dockerignore
- kubernetes directory

best copied over from one of the maintained project (i.e. `bratislava.sk`)