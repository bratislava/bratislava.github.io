# Github actions

### Setup github actions for Next/Strapi project
We have predefined actions for repetev pipelines so there is only one file which needs to be added to repo:

Deploy version 1.0. (02.09.2022)
```yaml
name: Strapi/Next deploy pipeline
on:
  push:
    tags:
      - 'dev**'
      - 'staging**'
      - 'prod**'
  pull_request:
    types:
      - closed

jobs:
  conditions:
    name: Check for cluster conditions
    uses: bratislava/github-actions/.github/workflows/cluster-deploy-conditions.yml@stable

  deploy-dev:
    name: after dev Strapi deploy Next
    if: needs.conditions.outputs.dev == 'true'
    needs: [conditions, deploy-dev-strapi]
    uses: bratislava/github-actions/.github/workflows/deploy-with-bratiska-cli.yml@stable
    with:
      directory: next/
      cluster: tkg-innov-dev
      url: https://tkg.dev.bratislava.sk
      debug: --debug
    secrets:
      service-account: ${{ secrets.DEV_STANDALONE_TOKEN }}
      registry-pass: ${{ secrets.HARBOR_REGISTRY_PASSWORD }}

  deploy-dev-strapi:
    name: dev Strapi
    needs: conditions
    if: needs.conditions.outputs.dev-strapi == 'true'
    uses: bratislava/github-actions/.github/workflows/deploy-with-bratiska-cli.yml@stable
    with:
      directory: strapi/
      cluster: tkg-innov-dev
      url: https://tkg.dev.bratislava.sk
    secrets:
      service-account: ${{ secrets.DEV_STANDALONE_TOKEN }}
      registry-pass: ${{ secrets.HARBOR_REGISTRY_PASSWORD }}

  deploy-dev-next:
    name: dev Next
    needs: conditions
    if: needs.conditions.outputs.dev-next == 'true'
    uses: bratislava/github-actions/.github/workflows/deploy-with-bratiska-cli.yml@stable
    with:
      directory: next/
      cluster: tkg-innov-dev
      url: https://tkg.dev.bratislava.sk
    secrets:
      service-account: ${{ secrets.DEV_STANDALONE_TOKEN }}
      registry-pass: ${{ secrets.HARBOR_REGISTRY_PASSWORD }}

  deploy-staging:
    name: after staging Strapi deploy Next
    if: needs.conditions.outputs.staging == 'true'
    needs: [conditions, deploy-staging-strapi]
    uses: bratislava/github-actions/.github/workflows/deploy-with-bratiska-cli.yml@stable
    with:
      directory: next/
      cluster: tkg-innov-staging
      url: https://tkg.staging.bratislava.sk
      flag: --staging
    secrets:
      service-account: ${{ secrets.STAGING_STANDALONE_TOKEN }}
      registry-pass: ${{ secrets.HARBOR_REGISTRY_PASSWORD }}

  deploy-staging-strapi:
    name: staging Strapi
    needs: conditions
    if: needs.conditions.outputs.staging-strapi == 'true'
    uses: bratislava/github-actions/.github/workflows/deploy-with-bratiska-cli.yml@stable
    with:
      directory: strapi/
      cluster: tkg-innov-staging
      url: https://tkg.staging.bratislava.sk
      flag: --staging
    secrets:
      service-account: ${{ secrets.STAGING_STANDALONE_TOKEN }}
      registry-pass: ${{ secrets.HARBOR_REGISTRY_PASSWORD }}

  deploy-staging-next:
    name: staging Next
    needs: conditions
    if: needs.conditions.outputs.staging-next == 'true'
    uses: bratislava/github-actions/.github/workflows/deploy-with-bratiska-cli.yml@stable
    with:
      directory: next/
      cluster: tkg-innov-staging
      url: https://tkg.staging.bratislava.sk
      flag: --staging
    secrets:
      service-account: ${{ secrets.STAGING_STANDALONE_TOKEN }}
      registry-pass: ${{ secrets.HARBOR_REGISTRY_PASSWORD }}

  deploy-prod:
    name: after prod Strapi deploy Next
    if: needs.conditions.outputs.prod == 'true'
    needs: [conditions, deploy-prod-strapi]
    uses: bratislava/github-actions/.github/workflows/deploy-with-bratiska-cli.yml@stable
    with:
      directory: next/
      cluster: tkg-innov-prod
      url: https://tkg.bratislava.sk
      flag: --production
    secrets:
      service-account: ${{ secrets.PROD_STANDALONE_TOKEN }}
      registry-pass: ${{ secrets.HARBOR_REGISTRY_PASSWORD }}

  deploy-prod-strapi:
    name: prod Strapi
    needs: conditions
    if: needs.conditions.outputs.prod-strapi == 'true'
    uses: bratislava/github-actions/.github/workflows/deploy-with-bratiska-cli.yml@stable
    with:
      directory: strapi/
      cluster: tkg-innov-prod
      url: https://tkg.bratislava.sk
      flag: --production
      debug: --debug
    secrets:
      service-account: ${{ secrets.PROD_STANDALONE_TOKEN }}
      registry-pass: ${{ secrets.HARBOR_REGISTRY_PASSWORD }}

  deploy-prod-next:
    name: prod Next
    needs: conditions
    if: needs.conditions.outputs.prod-next == 'true'
    uses: bratislava/github-actions/.github/workflows/deploy-with-bratiska-cli.yml@stable
    with:
      directory: next/
      cluster: tkg-innov-prod
      url: https://tkg.bratislava.sk
      flag: --production
    secrets:
      service-account: ${{ secrets.PROD_STANDALONE_TOKEN }}
      registry-pass: ${{ secrets.HARBOR_REGISTRY_PASSWORD }}
```

There are defined 9 different jobs. We can split it to three categories:
- deployment of `strapi` to `dev`, `staging`, `prod`
- deployment of `next` to `dev`, `staging`, `prod`
- deployment of whole stack `strapi` and `next`. This deployment deploy at first `strapi` and then `next`

### How to deploy to different clusters? 

#### dev
For deployment `next` to `dev` you need to tag your commit in whatever branch with tag `dev-next*` which can be like `dev-next1.0`
For deployment `strapi` to `dev` you need to tag your commit in whatever branch with tag `dev-strpai*` which can be like `dev-strapi1.0`
Or for whole stack, you just tag it like `dev1.0`.

Tagging command: `git tag -a dev-next1.0 -m "dev-next1.0 - updated feature"`
Push changed to prod: `git push --tags`

#### staging
For deployment to `staging` you can merge pull request or tag it accordingly with tag format `staging-next*`, `staging-strapi*`, `staging*`,

#### prod
For deployment to `prod` you can merge pull request or tag it accordingly with tag format `prod-next*`, `prod-strapi*`, `prod*`. You need to be also on `master`

### More commands
If you need here are more commands which can be usefull:
Delete tag locally: `git tag -d staging1.0`
Delete tag on server: `git push --delete origin staging1.0`

### Pipelines explanation
```yaml
deploy-dev:
    name: after dev Strapi deploy Next
    if: needs.conditions.outputs.dev == 'true'
    needs: [conditions, deploy-dev-strapi]
    uses: bratislava/github-actions/.github/workflows/deploy-with-bratiska-cli.yml@stable
    with:
        directory: next/
        cluster: tkg-innov-dev
        url: https://tkg.dev.bratislava.sk
        debug: --debug
    secrets:
        service-account: ${{ secrets.DEV_STANDALONE_TOKEN }}
        registry-pass: ${{ secrets.HARBOR_REGISTRY_PASSWORD }}
```

```yaml
 if: needs.conditions.outputs.dev == 'true'
```
this condition is checking if this deployment shoud be deployed. Conditions are sotred in repo `bratislava/github-actions`

```yaml
    needs: [conditions, deploy-dev-strapi]
```
as this job is deploing whole stack, then it needs to deploy first strapi `deploy-dev-strapi`. `conditions` are used in the `if` above

```yaml
    uses: bratislava/github-actions/.github/workflows/deploy-with-bratiska-cli.yml@stable
```
for deployment we are using `bratiska-cli` which is handled by this action `deploy-with-bratiska-cli.yml`. `stable` means stable version of pipelines

```yaml
 with:
    directory: next/
    cluster: tkg-innov-dev
    url: https://tkg.dev.bratislava.sk
    debug: --debug
```
passed arguments to `deploy-with-bratiska-cli.yml` for proper deployment

```yaml
secrets:
    service-account: ${{ secrets.DEV_STANDALONE_TOKEN }}
    registry-pass: ${{ secrets.HARBOR_REGISTRY_PASSWORD }}
```