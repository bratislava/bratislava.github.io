# GINIS

> If you're looking for quick examples of how to interact with the GINIS system, jump ahead
> to [Interacting with the API](#interacting-with-the-api)

[GINIS](https://www.gordic.cz/ginis) is the system which tracks all of the official documents which the city hall
processes, their assignment and resolution, as well as all of the official communication of the city, whether it's
between the government and the citizen, or government-to-government.

> A somehow-inaccurate-but-straightforward explanation for someone coming from a private sector is that it serves a
> similar role as a [CRM](https://www.oracle.com/cx/what-is-crm/) system might serve in a sales driven company.

The slovak name for all of this is "registratúra".

> GINIS is not to be confused with NORIS, which is the city hall's financial system. Often the two systems need to
> integrate and interact.

## Access

You can access this system either by web interface (as the clerks handling the documents do) or through API. To do so
you'll need credentials, permissions to view the appropriate environment/section and you can only do this from an
internal network or through VPN.

- general web interface [here](http://ginis.bratislava.sk/usu/#)
- access to e-forms section through [here](http://172.25.1.195/pod/)

## Documentation and system hierarchy

The definite source of docs for the API
is [the official Gordic documentation](https://robot.gordic.cz/xrg/Default.html). You need to register on the site
before you can access them. Note that not all of the interfaces listed are available to us (we should be able to request
them if needed though).

### Modules / Interfaces / services

GINIS consists of multiple "modules" or "interfaces" or "services" - as far as we know these terms are interchangeble
within the GINIS system. These are the 3 letter abbreviations like SSL ("spisová služba"), UDE ("uradni deska"), POD ("
podatelna"), which group together similar functionalities. Each service runs on a separate url and can be configured by
GORDIC.

### Actions

Each interface groups together a related list of actions you can do against the GINIS system (again,
the [official docs](https://robot.gordic.cz/xrg/Default.html) are your best reference). These allow you to request and
interact with the entities stored in the GINIS system.

The modules seem to overlap in the entities that they deal with (for example, you can manipulate the documents submitted
through e-forms through both SSL and POD), but different interfaces may provide different actions, and those in turn may
provide different data about those entities.

## Interacting with the API

If you are at home in the js/ts/node environment, you can start by looking
at [@bratislava/ginis-sdk](https://github.com/bratislava/ginis-sdk) and it's docs - either using it's methods directly
or browsing the code to get an idea how the requests towards GINIS look like.

Within the [official GINIS documentation](https://robot.gordic.cz/xrg/Default.html), you can browse through valid
request/response formats of all the interfaces and available actions - this should get you started when you need to
expand the ginis-sdk capabilities.

If expanding in this way, it's preferred to add this functionality into the ginis-sdk to keep it as our single source of
GINIS integration.
