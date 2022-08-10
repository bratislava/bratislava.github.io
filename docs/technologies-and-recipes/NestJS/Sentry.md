# Sentry in Nest.js

## Installation

`@ntegral/nestjs-sentry`

## Setup

1. Add into `app.module.ts` into imports:
   ```typescript
   @Module({
     imports: [
       SentryModule.forRoot({
         dsn: 'https://{{id}}@o{{id}}.ingest.sentry.io/{{id}}',
         debug: false,
         environment: 'production',
         release: APP_VERSION, // must create a release in sentry.io dashboard
         tracesSampleRate: 1.0,
       }),
     ],
     controllers: [AppController],
     providers: [AppService],
   })
   ```
2. Add into your controller file new sentry decorator:
   ```typescript
   @Controller('api')
   @UseInterceptors(new SentryInterceptor())
   export class AppController {
     @Get('healthcheck')
     healthcheck(): string {
       return 'OK';
     }
   }
   ```
