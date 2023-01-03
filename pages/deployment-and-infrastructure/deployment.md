# Deployment

Most of our projects are set up to be dockerized and deployed into our Kubernetes infrastructure. This can be done semi-manually using out [bratiska-cli](https://github.com/bratislava/bratiska-cli) tool, or can be setup using github pipelines. 

## Deploy using pipelines

TODO

## Deploy using bratiska-cli

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
