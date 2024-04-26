# OpenAPI Client

To generate the client, we use the [openapi-generator-cli](https://openapi-generator.tech/). Among the available options, the `typescript-axios` client is the best for our use.

## Steps to Generate the Client

1. **Install the CLI** - Ensure you have `prettier` installed and configured for code formatting.

   ```sh
   yarn add @openapitools/openapi-generator-cli -D
   ```

2. **Setup the Clients Directory** - Create a `clients` folder where the generated clients will be stored. In this folder, create:
  - **Axios Instance**: If needed, set up an instance of Axios. See this [Example (adds access token to the request)](https://github.com/bratislava/konto.bratislava.sk/blob/master/next/clients/axios-instance.ts)
  - **Client Files**: For each client, to simplify usage, merge the factories into a single API object. See [Example 1](https://github.com/bratislava/konto.bratislava.sk/blob/master/next/clients/forms.ts) and [Example 2](https://github.com/bratislava/konto.bratislava.sk/blob/master/next/clients/tax.ts)

3. **Configure ESLint** - Add the generated client folders to the ESLint ignore list in `.eslintrc.js`. See this [Example](https://github.com/bratislava/konto.bratislava.sk/blob/master/next/.eslintrc.js)

4. **Create Generate Script** - Add a script in `package.json` to generate the client. Since the generated client has its own formatting, run `prettier` on the generated files to maintain consistency with the rest of the codebase. The schemas may contain many errors, so the `--skip-validate-spec` flag is necessary. Target the `staging` version of the API. If there are more clients, you can create a one command that generates all of them. See this [Example](https://github.com/bratislava/konto.bratislava.sk/blob/master/next/package.json)

   ```
   {
     "scripts": {
       "generate-client-forms": "openapi-generator-cli generate -i https://nest-forms-backend.staging.bratislava.sk/api-json -g typescript-axios -o ./clients/openapi-forms --skip-validate-spec && prettier --write ./clients/openapi-forms",
        ...
       "generate-clients": "yarn generate-client-forms && yarn generate-client-tax",
     }
   }
   ```

5. **Manage Configuration** - An `openapitools.json` file will be created. Regularly update the `generator-cli` version to keep up with the latest changes.
