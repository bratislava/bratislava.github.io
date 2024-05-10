# Deployment & Releases

## Production releases

Most of our projects are set up to be dockerized and deployed into our Kubernetes infrastructure. This can be done semi-manually using out [bratiska-cli](https://github.com/bratislava/bratiska-cli) tool, or can be setup using github pipelines. 

### Frontend / Backend apps

This assumes Github Actions CI/CD pipeline is in place - every project running in production should have those by now. If this is not the case, one should be setup. Afterwards:

#### Do's and Don'ts

 * ✅ every production deployment should be created using a github "release"
 * ✅ format of the tag created with release is **prod-YY.MMDD.HHMM** i.e. when releasing on May 10, 2024 at 11:00, the tag would be **prod-24.0510.1100** - inspired by https://calver.org/ and https://samver.org/
 * ✅ autogenerate release notes. Feel free to add anything relevant on top of those
 * ✅ release to dev* using the same strategy but marking it as pre-release (feel free to release to dev simply by creating a tag)
 * ❌ release to prod from your local machine
 * ❌ release to prod by creating a tag

### Libraries

Github Actions CI/CD pipeline must be in place

#### Do's and Don'ts

 * ✅ every production deployment should be created using a github "release"
 * ✅ follow format of the tag created with release is prod-(semver) - follow [semver](https://semver.org) strictly
 * ✅ autogenerate release notes. Feel free to add anything relevant on top of those
 * ❌ release to prod from your local machine
 * ❌ release to prod by creating a tag

### Native

TODO - if there's a standard approach we use on multiple native apps, please document here

## Manual deployment using bratiska-cli

<Callout emoji="⚠️" type="warning">
  In general don't do this - this is either for CI setup or a fallback for emergencies.
</Callout>

You can find detailed manual & requirements in the [bratiska-cli README](https://github.com/bratislava/bratiska-cli#readme). TLDR:

1. make sure you are signed into docker harbor
2. make sure your are signed into the correct kbs cluster
3. run `bratiska-cli deploy --<env>` where `<env>` is one of `dev`, `staging`, `prod`

## Harbor Policies

As we have a somewhat limited space in our Harbor instance, all repositories are subjected to retention policy.  
Currently, every project is entitled to 30 images altogether, split across different tags: 

* 5 *latest* images with `prod*` tag
* 5 *latest* images with `stag*` tag
* 10 *latest* images with `dev*` tag
* 10 *latest* images with **some** tag
* Images without **any** tags will be removed

The policy is ran once a day at midnight, so during the day you might push more then specified limits. Also, please note that `bratiska-cli` will automatically add `dev-latest`, `stage-latest` or `prod-latest` tags, so be careful when running production or staging pushes not to remove currently deployed production images.
