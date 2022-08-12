# Sentry

We're using Sentry to collect FE errors, as well as for FE/BE alerting.

## Global pipeline setup

### Authorization

sentry-cli sends the sourcemaps to sentry.io during the build step. This means it needs `SENTRY_AUTH_TOKEN` available during this set - this token is set as `Sentry.AuthToken` pipeline secret variable (and can be read through the inovacie.bratislava Sentry account). To access (your account's) token go [here](https://sentry.io/settings/account/api/auth-tokens/). You can also use Sentry company-wide "Internal Integration" token, this is preferred for pipelines or otherwise shared build envs - you can find such token within the Sentry dashboard as well.

**Local builds on sentry-enabled projects will fail without SENTRY_AUTH_TOKEN set in your environment - when building locally, you need to set this env var.**

### Release/Version

We set the `SENTRY_RELEASE` & `NEXT_PUBLIC_SENTRY_RELEASE` - you can override this behaviour per project.

### Local build

## Next.js setup

See `sentry.client/server.config.ts` & `next.config.js` files in `tax-landing` project (TODO soon to be opened). Notice also all the `SENTRY` or `NEXT_PUBLIC_SENTRY` (see the next section why you might need both).

`withSentry` needs to be the last transformation on `next.config` but it does not play nicely with typescript types potentially exported from previous transformations - you'll likely need to force typecast if importing config into a `.ts` file.

### Sentry environment variables on next's FE & BE

While using `SENTRY_RELEASE` works for different technologies or even Next server environment, for Sentry library to be able to read the var successfully on frontend it needs to be prefixed as `NEXT_PUBLIC_`.

Therefore, we also provide `NEXT_PUBLIC_SENTRY_RELEASE` to pipelines. For the similar reasons we have just `NEXT_PUBLIC_SENTRY_ENVIRONMENT` set in our Next projects to indicate environment - this can be read by both BE & FE Sentry clients.
