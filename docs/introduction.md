---
sidebar_position: 1
---

# Introduction

> 🔧 This site is under active development - if you'd like to contribute, get in touch via [email](mailto:innovationteam@bratislava.sk) or [github](https://github.com/bratislava/bratislava.github.io)

This site is maintained by the [Department of Innovation and Technology of the City of Bratislava](https://inovacie.bratislava.sk). We believe in making public-sector code open source, promoting [savings, collaboration, auditability and innovation](https://publiccode.eu).

Our goal is to be transparent about services we’re developing and providing, as well as to invite other cities and municipalities to build on top of the same or similar open-source technologies we’ve already tested and used - to foster an ecosystem of collaboration between teams facing similar challenges. We’ll be happy to [get in touch.](mailto:innovationteam@bratislava.sk)

We intend to make many more of our projects open-source by the end of 2022 - stay tuned!

> If you are an individual or a company who’d like to take part in these efforts, collaborate closely on development or report an issue, we’d love to hear from you! 🙌 Contact us using this repository or at [innovationteam@bratislava.sk](mailto:innovationteam@bratislava.sk)

## Getting started

Hey! 👋 If you're a new contributor, member of the Innovations team or an external contractor, these are the pages we recommend starting with:

### General

- [Editor setup](./recipes/editor-setup.md)
- [Git workflow](./recipes/git-workflow.md)
- [Docker setup](./recipes/docker-setup.md)
- [Postgres setup](./recipes/postgres-setup.md)

### Frontend

If you're not familiar with any of these technologies:

- [NextJS](https://nextjs.org)
- [Typescript](https://www.typescriptlang.org)
- [Strapi CMS](https://strapi.io/)
- [GraphQL](https://graphql.org/), which we use for connecting Next to Strapi
- [GraphQL Codegen](https://www.graphql-code-generator.com/), which we use to generate typesafe SDK from our GraphQL queries
- [Meilisearch](https://www.meilisearch.com/), often connected to Strapi via [meilisearch-strapi plugin](https://github.com/meilisearch/strapi-plugin-meilisearch)
- [Sentry](https://sentry.io/)

Afterwards:

- [our GraphQL Codegen setup](./recipes/graphql-codegen-setup.md)
- [how we handle environment variables](./recipes/env-vars-and-secrets.md)

### Backend

- [Nest.js](https://nestjs.com/)
- [Typescript](https://www.typescriptlang.org)
- [Prisma](https://www.prisma.io/)

Afterwards, you can check out the NextJS section of documentation for more details on how we use these technologies.

## Structure

### Recipes

This section serves as a "cookbook" for jobs and setups we need to do repeatedly. If you encounter (and struggle through) a task, steps of which were not trivial, and with which you can help with your newly gained knowledge, please write anything relevant into this section of the documentation.

### Deployment and infrastructure

Contains the documentation & information for tasks concerning deployment and maintenance of our apps on our Kubernetes clusters (or elsewhere). If you are an open-source contributor or an external contractor, you likely won't need to work with this part of the setup.

### *Technology-name* pages

Contain information about our use of the technology or library common across all of our projects.

### *Project-name* pages

Contain information specific to the project.

### Other

Organizational, onboarding, not related to development itself, other 🙂