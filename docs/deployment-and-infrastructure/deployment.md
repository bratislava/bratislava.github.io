# Deployment & Environments

TODO CONTINUE HERE

Most of our projects are set up to be dockerized and deployed into our Kubernetes infrastructure. This can be done semi-manually using out [bratiska-cli](https://github.com/bratislava/bratiska-cli) tool. You can find detailed manual & requirements in the [README](https://github.com/bratislava/bratiska-cli#readme), but most of the time all you need is:

1. make sure you are signed into docker harbor
2. make sure your are signed into the correct kbs cluster
3. run `bratiska-cli deploy --<env>` where `<env>` is one of `dev`, `staging`, `prod`

## Accesses required for deployment

1. Docker Harbor access - can be granted [here](https://portal.azure.com/#view/Microsoft_AAD_IAM/ManagedAppMenuBlade/~/Users/objectId/7b1ee611-cf01-4179-a765-215ee291f687/appId/216af6db-a39f-44b3-94d1-fd5142f14e6a) (note - [OIADS_EMPLOYEES](https://portal.azure.com/#view/Microsoft_AAD_IAM/GroupDetailsMenuBlade/~/Members/groupId/48fcf79f-46c5-44fc-8608-70eb512f840c) are included by default)
2. Kubernetes access - contact the IT department or this
3. Github access