# Environment variables & Secrets

> If you want an easy-to-follow guide on where to place your env config based on your project, jump directly to [Env vars cookbook](#env-vars-cookbook) - if you're new to this topic it's recommended to read and understand at least the section on [Run time vs Build time](#run-time-vs-build-time) env vars beforehand

There are 4 main sources of configuration for our apps, each group being stored slightly differently:

- **local development environment variables**, these will not be used in any of the deployments
- **build time environment variables**, which need to be available on local machine / in pipelines at build time
- **run time environment variables**, accessible by the running (server) instance in Kubernetes
- **secrets** stored in Kubernetes using [Sealed secrets](https://github.com/bitnami-labs/sealed-secrets), accessible at **run time**

There are also build-time secrets - but the need for these is rare and we won't go into them.

## Run time vs Build time

Our applications run in k8s cluster but are typically built on a local machine or in pipelines. Therefore we distinguish between groups of environment variables based on when they are available to the application.

- if it's **accessible on frontend** it's typically a **build time** variable (i.e. next.js preps the frontend bundle during build-time, despite it being also the one serving it run-time)
- if it **configures** the behaviour of **the build itself** it's a **build time** variable - these are usually set-up by the environment itself, and **super rare**. One example of build-time variable like this is the `SENTRY_AUTH_TOKEN` which is needed to upload source_maps - but this is usually configured either by using `.sentryrc` file or is taken from pipelines global config. Other typical one is `process.env.CI`, which is set by Github pipelines automatically
- **everything else** is a **run time** variable - these can be accessed by server at runtime and typically includes secrets which shouldn't leak to end users (or be placed under source control)

## Local development environment variables

### Next.js

Next.js loads `.env.development` automatically - values in here can be overwritten using `.env.local` or `.env.development.local`. More info in [Next.js environment variable order guide](https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order)

### Strapi

Our Strapi setup (usually) loads data from `.env.local` file in development - this file is gitignored and should be created from `.env.example` during dev setup.

### Nest.js

Our nest.js tempalte configuration loads data from `.env` file in development - this file is gitignored and should be created from `.env.example` during dev setup.

## Build time environment variables

### Next.js

Use `.env.production` for those common for all environments. Use the `.env.bratiska-cli-build.<env>` files for setup specific to environment.

:::caution bratiska-cli

Today `bratiska-cli` works by overriding `.env.production.local` file - your data stored in this file will be over-written on each build!

:::

### Strapi

You can use `.env`. We don't have a way to set these up per-environment at the moment.

### Nest.js

We don't have a mechanism (or at the moment a need) to have or persist these.

## Run time environment variables

These are the same for all frameworks and are stored in `.env` files in `kubernetes` directory of each project. There are a few options _where_ to put this `.env` files, based on whether the config is global for all deployment environments, or only for some:

- use `/kubernetes/base/.env` for config common for all deployments
- use `/kubernetes/envs/<Env>/.env` for specific env, where `<Env>` is one of `Dev`, `Prod`, `Staging`

## Secrets

We are using `Sealed Secrets` https://github.com/bitnami-labs/sealed-secrets.
To use a secret in your project, you have to install `kubeseal` if you haven`t installed it yet.

```bash
brew install kubeseal
```

Afterwards go to the folder `secrets` where all our secrets are stored:

```bash
cd kubernetes/base/secrets
```

:::note Sealed secret can be generated in a single step from the cli

For a simpler way of creating the secrets file, go to the Tips & Tricks section at the bottom

:::

After that, we need to create a temp file for our new secrets. Let's assume we want database connection secretes. You need to make this file `database.yml`

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: database-secret
annotation:
  sealedsecrets.bitnami.com/managed: "true"
data:
  POSTGRES_DB: YmFuYW5h
  POSTGRES_USER: YmFuYW5h
  POSTGRES_PASSWORD: YmFuYW5h
```

- `metadata.name` is the name of the group of secrets in our case, `database-secret` - if this is app specific, it is often prefix by app name, so for example `bratislava-strapi-database-secret`
- `annotation/sealedsecrets.bitnami.com` automatically creates "unsealed" secret inside k8 cluster, managed by the bitnami secret plugin
- `data` contains environment variables keys (`POSTGRES_DB`) and base64 encode values (`YmFuYW5h`).

For example, if you need to set up the database name to `banana`, you need to base64 encode this value. You can use an online base64 converter like https://www.base64encode.org and encode `banana` to `YmFuYW5h`. This has to happen even if the value you want to provide is base64 encoded! In such case you'll take your base64 encoded value and encode it again.

The last thing is encrypting our secrets by kubeseal to be used on Kubernetes. You need to run this command that creates the file `database.secret.yml` where all our values are encrypted and safe to add to the repository.

Before running this command be sure you are [logged](./kubernetes-lens-setup.md) in right cluster `kubectl config use-context tkg-innov-<env>` (replace `<env>` with one of `dev`, `staging` or `prod`. Cluster you are logged in is used when generating secret. Regarding to this, if you are generating secret for more then one cluster you need to switch between clusters between each generation of secret.

```bash
kubeseal --controller-name=sealed-secrets --scope=namespace-wide --namespace=standalone --format=yaml < database.yml > database.secret.yml
```

If you want to propagate a sealed secret to Kubernetes without a pipeline, you can run this command:

```bash
kubectl create -f database.secret.yml
```

If you already have a sealed secret in Kubernetes, you can update it with the command:

```bash
kubectl apply -f database.secret.yml
```

Usually, you get this kind of error: `Error from server (AlreadyExists): error when creating "database.secret.yml": sealedsecrets.bitnami.com "nest-Prisma-template-database-secret" already exists`

If you want to check if your secret is there, you can run this command:

```bash
kubectl get secret --namespace=standalone nest-prisma-template-database-secret
```

After creating file with secret using previous commands, we need to erase previously added secret which shouldn't leak to end users (or be placed under source control).

That's why we edit file including secret, in our case `database.yml`. Usually, we replace it with `<replace-with-base64-password>`. So before committing into source control, file should look like this:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: database-secret
annotation:
  sealedsecrets.bitnami.com/managed: "true"
data:
  POSTGRES_DB: <replace-with-base64-password>
  POSTGRES_USER: <replace-with-base64-password>
  POSTGRES_PASSWORD: <replace-with-base64-password>
```

To use this secret in k8 deployment you need to add secret name from file `database.yml` property `metadata.name` in our case, `database-secret` to `kubernetes/base/deployment.yml` into

```yaml
spec:
  template:
    spec:
      containers:
        - image: ${IMAGE_TAG}
          envFrom:
            - secretRef:
                name: ${BUILD_REPOSITORY_NAME}-database-secret
```

### Database naming convention

Please use our services names (project-slugs) as database names and users. In this case, we will use `nest-prisma-template`. And for passwords, use at least 16 characters long pass with random chars.

```yml
POSTGRES_DB: nest-prisma-template
POSTGRES_USER: nest-prisma-template
POSTGRES_PASSWORD: LBcdso08b&aasd(ck2*d!p
```

which after base64 encoding looks like this:

```yml
POSTGRES_DB: bmVzdC1wcmlzbWEtdGVtcGxhdGU=
POSTGRES_USER: bmVzdC1wcmlzbWEtdGVtcGxhdGU=
POSTGRES_PASSWORD: TEJjZHNvMDhiJmFhc2QoY2syKmQhcA==
```

### Tips & Tricks

If you don't need special settings for your secret, you can create entire `kubesealed` secret by running following command:

```bash
 kubectl create secret generic <SECRET_NAME> --from-literal=<KEY>=<VALUE> --dry-run=client -o json \
 | jq '. += { "annotation": {"sealedsecrets.bitnami.com/managed": "true"} }' \
 | jq '.metadata += { "labels": {"app": "${BUILD_REPOSITORY_NAME}", "source": "${BUILD_REPOSITORY_NAME}"} }' `# this will add bratiska-cli build labels to secret` \  
 | kubeseal --controller-name=sealed-secrets --scope=namespace-wide -o yaml --namespace=<NAMESPACE>
```

Sticking with our banana example, we create a `database-secret` with "banana" user, password and DB in namespace `"standalone"` and push it to the file name `database.secret.yml`:

```bash
 kubectl create secret generic database-secret \
    --from-literal=POSTGRES_DB=banana \
    --from-literal=POSTGRES_USER=banana \
    --from-literal=POSTGRES_PASSWORD=banana \
  --dry-run=client -o json \
 | jq '. += { "annotation": {"sealedsecrets.bitnami.com/managed": "true"} }' \
 | jq '.metadata += { "labels": {"app": "${BUILD_REPOSITORY_NAME}", "source": "${BUILD_REPOSITORY_NAME}"} }' \
 | kubeseal --controller-name=sealed-secrets --scope=namespace-wide -o yaml --namespace=standalone > database.secret.yml
```

_Note, you may need to install [`jq`](https://stedolan.github.io/jq/) by standard means like_

```bash
brew install jq
```

_or Debian based_

```bash
apt install jq
```

## Env vars cookbook

Use the first that applies for the framework you are using

### Next.js

- if it's local development only value, that can be public to the world, store it in `.env.development`
- if it's local development value that can't be committed / shared with the world, put a placeholder into `.env.development` guiding devs to ask for this value (i.e. `SECRET_VAR=<get-this-from-@user>`) - store the value itself in `.env.development.local` which is gitignored
- if it's public information and/or build-time variable common to all deployments store it in `.env.production` file (committed to git) - anything prefixed with `NEXT_PUBLIC_` common to all deployments is here
- if it's public information and/or build-time variable different across deployments use one (or all) of the files: `.env.bratiska-cli-build.dev`, `.env.bratiska-cli-build.staging`, `.env.bratiska-cli-build.prod`
- if it shouldn't be stored in git / viewed by public use `kubeseal` and create a sealed secret - this can be common for all environments in a file like `kubernetes/base/secrets/your-secret.secret.all.yml` or specific for each one i.e. `kubernetes/base/secrets/your-secret.secret.staging.yml` - see the appropriate section in Secrets on how to create these

When in doubt, use the [Next.js environment variable order guide](https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order).

### Strapi

- if it's local development only value, that can be public to the world, store it in `.env.example` - during development these values should be copied to `.env.local`
- if it's local development value that can't be committed / shared with the world, put a placeholder into `.env.example` guiding devs to ask for this value (i.e. `SECRET_VAR=<get-this-from-@user>`), store the value itself in `.env.local`
- if it's public information and/or build-time variable common to all environments store it in `.env` file (committed to git)
- if it's public information different across deployments use one (or all) of the files: `/kubernetes/envs/Dev/.env`, `/kubernetes/envs/Staging/.env`, `/kubernetes/envs/Prod/.env`
- if it shouldn't be stored in git / viewed by public use `kubeseal` and create a sealed secret - this can be common for all environments in a file like `kubernetes/base/secrets/your-secret.secret.all.yml` or specific for each one i.e. `kubernetes/base/secrets/your-secret.secret.staging.yml` - see the appropriate section in Secrets on how to create these

### Nest.js

- if it's local development only value, that can be public to the world, store it in `.env.example` - during development these values should be copied to `.env.local`
- if it's local development value that can't be committed / shared with the world, put a placeholder into `.env.example` guiding devs to ask for this value (i.e. `SECRET_VAR=<get-this-from-@user>`), store the value itself in `.env.local`
- if it's public information same for all deployments use `/kubernetes/base/.env`
- if it's public information different across deployments use one (or all) of the files: `/kubernetes/envs/Dev/.env`, `/kubernetes/envs/Staging/.env`, `/kubernetes/envs/Prod/.env`
- if it shouldn't be stored in git / viewed by public use `kubeseal` and create a sealed secret - this can be common for all environments in a file like `kubernetes/base/secrets/your-secret.secret.all.yml` or specific for each one i.e. `kubernetes/base/secrets/your-secret.secret.staging.yml` - see the appropriate section in Secrets on how to create these
