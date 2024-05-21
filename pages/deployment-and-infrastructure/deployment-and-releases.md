# Deployment & Releases

## Production releases

Most of our projects are set up to be [dockerized](https://www.docker.com/) and deployed into our Kubernetes infrastructure. This can be done semi-manually using [bratiska-cli](https://github.com/bratislava/bratiska-cli) tool, but primarily **should be done** by automatic GitHub pipelines. 

### Frontend / Backend apps

This assumes Github Actions CI/CD pipeline is in place - every project running in production should have those by now. If this is not the case, one should be setup. Afterwards:

#### DEV and STAGING deployments

 * ✅ Deployments to STAGING are done automatically from the `master` branch.
 * ✅ Deployments to DEV cluster should by done by creating tags only, never through releases.
 * ✅ Deployments to DEV have tags in format **devWHATEVER** i.e. **dev-testing-new-maplify-version**.
 * ❌ Don't release to staging manually.
 * ❌ Don't release to dev by creating a (pre-)release in Github.

 #### PROD deployments

 * ✅ Every production deployment should be created using a [GitHub Release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository).
 * ✅ Format of the tag created with release is **prodMAJOR.MINOR.PATCH** i.e. **prod1.23.0**.
 * ✅ When releasing a backend consumed by multiple actors, follow [semver](https://semver.org) strictly.
 * ✅ When releasing frontend apps or backends consumed by a single frontend, follow semver loosely - bump patch if it feels like a minor bugfix, minor if it feels like updating features, major to signify major changes. No strict rules about versioning apply in this case.
 * ✅ Always autogenerate release notes. Feel free to add anything relevant on top of those
 * ❌ Don't release to prod from your local machine
 * ❌ Don't release to prod by creating a tag

### Libraries

Github Actions CI/CD pipeline must be in place

#### Do's and Don'ts

 * ✅ Every production deployment should be created using a github "release".
 * ✅ Follow format of the tag created with release is **prodMAJOR.MINOR.PATCH** i.e. **prod1.23.0** - follow [semver](https://semver.org) strictly.
 * ✅ Autogenerate release notes. Feel free to add anything relevant on top of those.
 * ❌ Don't release the library from your local machine.
 * ❌ Don't release the library by creating a tag.

### Native

TODO - if there's a standard approach we use on multiple native apps, please document here

## Manual deployment using bratiska-cli

<Callout emoji="⚠️" type="warning">
  In general don't do this - this is either for CI setup or a fallback for emergencies.
</Callout>

You can find detailed manual & requirements in the [bratiska-cli README](https://github.com/bratislava/bratiska-cli#readme). TLDR:

1. make sure you are signed into docker harbor
2. make sure your are signed into the correct Kubernetes cluster  
3. run `bratiska-cli deploy --<env>` where `<env>` is one of `dev`, `staging`, `prod`

## Harbor Policies

As we have a somewhat limited space in our Harbor instance, all repositories are subjected to retention policy.  
Currently, every project is entitled to 30 images altogether, split across different tags: 

* 5 *latest* images with `prod*` tag
* 5 *latest* images with `staging*` tag
* 10 *latest* images with `dev*` tag
* 10 *latest* images with **some** tag
* Images without **any** tags will be removed

The policy is ran once a day at midnight, so during the day you might push more then specified limits. Also, please note that `bratiska-cli` will automatically add `dev-*`, `staging-*` or `prod-*` tags, so be careful when running production or staging pushes not to accidentally remove images currently deployed in production.  

