# Introduction

This is the central repository for technical documentation of projects developed and maintained by [Department of Innovation and Technology of the City of Bratislava](https://inovacie.bratislava.sk). if you'd like to contribute, get in touch via [email](mailto:innovationteam@bratislava.sk) or [github](https://github.com/bratislava/bratislava.github.io)

> If you are an individual or a company who’d like to take part in these efforts, collaborate closely on development or report an issue, we’d love to hear from you! 🙌 Contact us using this repository or at [innovationteam@bratislava.sk](mailto:innovationteam@bratislava.sk)

Our goal is to be transparent about services we’re developing and providing, as well as to invite other cities and municipalities to build on top of the same or similar open-source technologies we’ve already tested and used - to foster [an ecosystem of collaboration](https://publiccode.eu) between teams facing similar challenges. We’ll be happy to [get in touch.](mailto:innovationteam@bratislava.sk)

## Getting started

Hey! 👋 If you're a new contributor, member of the Innovations team or an external contractor, these are the pages we recommend starting with:

### General

- [Editor setup](onboarding/editor-setup)
- [Git workflow](onboarding/git-workflow)
- [Docker setup](onboarding/docker-setup)
- [Postgres setup](onboarding/postgres-setup)

### Frontend

If you're not familiar with any of these technologies:

- [NextJS](https://nextjs.org)
- [Typescript](https://www.typescriptlang.org)
- [Strapi CMS](https://strapi.io/)
- [GraphQL](https://graphql.org/), which we use for connecting Next to Strapi
- [GraphQL Codegen](https://www.graphql-code-generator.com/), which we use to generate typesafe SDK from our GraphQL queries
- [Meilisearch](https://www.meilisearch.com/), often connected to Strapi via [meilisearch-strapi plugin](https://github.com/meilisearch/strapi-plugin-meilisearch)

Afterwards:

- [our GraphQL Codegen setup](./graphql)
- [how we handle environment variables](./deployment-and-infrastructure/env-vars-and-secrets)

### Backend

- [Nest.js](https://nestjs.com/)
- [Typescript](https://www.typescriptlang.org)
- [Prisma](https://www.prisma.io/)

Afterwards, you can check out the NextJS section of documentation for more details on how we use these technologies.

## Structure

The site is split into following sections (see the main menu on the left).

### Setup & Onboarding

Start here if you are a new contributor, colleague or an external contractor. This section contains information about our development environment, workflows, tools and the way to set them up.

### Project specific documentation

Contains documentation relevant only for the specific projects.

### Frontend / Web development

All the docs about common techniques, libraries and tools we use in frontend development, as well as about our CMS (Strapi) and fulltext-search tool (Meilisearch), which are also usually developed and maintained by the frontend team.

### Backend development

Libraries and services used by backend, common accross multiple projects.

### Deployment, infrastructure, monitoring

Kubernetes, cloud services, Grafana.
