# Authentication

This module is for authentication by Azure B2B, but you can use it similar with different auths services.

## Installation

`npm install @nestjs/passport `

for azure-ad auth install also

`npm install passport-azure-ad' `

## Setup

1. create guard file `services/vendors/{{service}}.guard.ts`

   **Example for azure-ad:**

   ```typescript
   import { Injectable } from '@nestjs/common';
   import { PassportStrategy, AuthGuard } from '@nestjs/passport';
   import { BearerStrategy } from 'passport-azure-ad';

   const clientID = {{clientId}};
   const tenantID = {{tenantId}};

   /**
    * Extracts ID token from header and validates it.
    */
   @Injectable()
   export class AzureADStrategy extends PassportStrategy(
     BearerStrategy,
     'azure-ad'
   ) {
     constructor() {
       super({
         identityMetadata: `https://login.microsoftonline.com/${tenantID}/v2.0/.well-known/openid-configuration`,
         clientID: clientID,
       });
     }

     async validate(data) {
       return data;
     }
   }

   export const AzureADGuard = AuthGuard('azure-ad');

   ```

   **_NOTE_**: Don't Forget to have right scope from AD into get token login (you need to generate scope in azure-ad - overview -> Application ID URI) also to create
   User.Read in API permissions. In get token call you will have {"scope": api://{{clientId}}/user_auth offline_access user.read}

2. import into `app.module.ts` PassportModule and add into providers your passport strategy created in 1

   ```typescript
   import { AzureADStrategy } from './services/vendors/azure-ad.guard';
   import { PassportModule } from '@nestjs/passport';

   @Module({
     imports: [PassportModule],
     controllers: [AppController],
     providers: [AppService, AzureADStrategy],
   })
   export class AppModule {}
   ```

3. add decorator UseGuards into `app.controller.ts`
   ```typescript
   @UseGuards(AzureADGuard)
   @Controller('api')
   export class MainAppController {
     @Get('healthcheck')
     healthcheck(): string {
       return 'OK';
     }
   }
   ```
