# Rest Api

please use httpModule under Axios

## Install

`npm i @nestjs/axios`

## Setup

1. Insert into `app.module.ts` into imports:

   ```typescript
   import { HttpModule } from '@nestjs/axios';

   @Module({
     imports: [HttpModule],
     controllers: [AppController],
     providers: [AppService],
   })
   export class AppModule {}
   ```

2. Use [documentation](https://docs.nestjs.com/techniques/http-module#http-module) for axios
