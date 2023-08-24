# GraphQL

We're using [GraphQL](https://graphql.org/) priarily when talking to our Strapi CMS servers. Read more about getting the Strapi data with GraphQL in general [in their docs](https://docs.strapi.io/developer-docs/latest/development/plugins/graphql.html).

> If you are joining an existing project and not setting up a new one, you can jump ahead to [Generating and using queries](#generating-and-using-queries)

## Connecting to GraphQL APIs using GraphQL Codegen

We're using [GraphQL Codegen](https://www.graphql-code-generator.com/) setup to generate typed clients for our gql servers - particularly Strapi CMS.

We're using [graphql-request plugin](https://www.graphql-code-generator.com/plugins/typescript/typescript-graphql-request)

:::note **Note on using graphql-request:** at the time of writing there is also apollo-next plugin - the reason we use graphql-request, which is more barebones, is because it did not exist when we were setting this up initially. Apollo-next may be worth a shot with some future project

### Project setup

Decide where your `.graphql` files will live, and where your client & types should be generated. Usually we use `/graphql/index.ts` for the client and `/graphql/queries/**/*.graphql` for both queries and mutations. With this setup, our `codegen.yml` in our frontend (i.e. Nextjs) root looks like this:

```
schema: "http://localhost:1337/graphql"
documents: "./graphql/queries/**/*.{gql,graphql}"
generates:
  graphql/index.ts:
    plugins:
      - typescript
      - typescript-operations
      - typescript-graphql-request
```

This means we're generating schema against a locally running strapi server.

> This implies we need a running local server to be able to regenerate our gql client - at the time of writing, strapi v4 does not have an easy way to export gql schema. We can use this approach once hey fix it.

Add the following line into `package.json`:

```
 "scripts": {
    ...
    "gen": "graphql-codegen"
  },
```

and install the following dependencies, both dev and nondev:

```
yarn add graphql graphql-tag graphql-request
yarn add -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-graphql-request @graphql-codegen/typescript-operations
```

To use the generated client (sdk) against your graphql server, you need to initialize it, passing in the server endpoint as a parameter. We usually setup a file like `utils/gql.ts` from which we export .the typed client itself The file below deals with different formats of urls being provided from within Kubernetes deployment and local development.

```ts
import { getSdk } from '../graphql/index'
import { GraphQLClient } from 'graphql-request'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

// URL becomes full url to strapi on server, but just /graphql (for proxy) on client
// all the dealings with protocol are here because we route to a local service address from within k8s and to a full https:// url from local development

const protocol =
  process.env.STRAPI_URL &&
  (process.env.STRAPI_URL.startsWith('http://') || process.env.STRAPI_URL.startsWith('https://'))
    ? ''
    : 'http://'
const gql = new GraphQLClient(
  `${
    process.env.STRAPI_URL ? `${protocol}${serverRuntimeConfig.strapiUrl}` : window.location.origin
  }/graphql`,
)
export const client = getSdk(gql)
```

### Generating and using queries

You need at least a single valid query among your graphql files for client to generate correctly. Check out [Exploring GraphQL Schema](#exploring-graphql-schema) to find a valid query for your server. Since most of our Strapi V4 instances have a 'pages' model, the following query to get the total amount of pages usually works:

```
query TotalPages {
  pages {
    meta {
      pagination {
        total
      }
    }
  }
}
```

You can put this query into a `*.graphql` file into `/graphql/queries` directory.

Afterwards, you should be able to run

```
yarn gen
```

If everything was setup correctly, this will generate `graphql/index.ts` file with valid types for your schema, as well as a client with a single query - `client.TotalPages`

## Using the generated client

Continuing from previous example, if you import which will will return the following data:

```ts
import { client } from '../utils/gql'

// ...

const data = await client.TotalPages()

/* 
  if successful, data will look as follows:
  data = {
    pages {
      meta {
        pagination {
          total: 358 // the actual number will differ
        }
      }
    }
  }
*/
```

In next.js, you often do this inside `getStaticProps` or `getServerSideProps`:

```ts
export const getStaticProps: GetStaticProps = async (ctx) => {
  // ...
  const { pages } = await client.TotalPages()
  return {
    props: {
      totalPages: pages.meta.pagination.total,
    },
  }
}
```

If you do this from frontend (loading data from within a React component), you likely want to wrap the client call in something like [SWR](https://swr.vercel.app/), [React-Query](https://react-query-v3.tanstack.com/overview), or just `useEffect`. With SWR it looks like this:

```ts
const MyComponent = () => {
  const { data, error } = useSWR('TotalPagesQuery', () => client.TotalPages())
  const isLoading = !data && !error
  return (
    <div>
      Total pages count:{' '}
      {isLoading ? 'Loading' : error ? 'Error!' : data.pages.meta.pagination.total}
    </div>
  )
}
```

Read more in SWR/ReactQuery docs on handling params and other.

### Error handling

If there's error on _any node_ of the result, the whole request will throw. You likely want it wrapped in a try-catch block.

This can be dealt with differently (and often should be - so that one missing piece of data does not break your whole page) - read more in the [docs of the graphql-request](https://github.com/prisma-labs/graphql-request) and the codegen graphql-request plugin linked above.

## Exploring GraphQL schema

You can use [our fork](https://github.com/bratislava/graphiql-explorer-example) of the [OneGraph GraphiQL Explorer](https://github.com/OneGraph/graphiql-explorer-example) to browse any GraphQL endpoint. In our case it's usually an endpoint of a Strapi instance. The only thing our fork adds is easy configuration of the endpoint via `.env`.

**[A quick example exploring SpaceX data here](https://api.spacex.land/graphql/)**

You can use the left panel to easily explore through all of the options provided by the api, and use the params to control filtering/sorting/pagination.
