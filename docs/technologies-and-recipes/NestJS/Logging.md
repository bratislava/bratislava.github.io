# Logging

For now use nest default logger, but it will be adjusted in few months

## Installation

nothing

## Setup

1. create service `services/vendors/my-logger.service.ts`:

   ```typescript
   import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

   import { Request, Response, NextFunction } from 'express';

   @Injectable()
   export class AppLoggerMiddleware implements NestMiddleware {
     use(request: Request, response: Response, next: NextFunction): void {
       const { ip, method, originalUrl } = request;

       const userAgent = request.get('user-agent') || '';
       response.on('close', () => {
         const { statusCode } = response;
         const contentLength = response.get('content-length');
         let status = 'HTTP';
         if (statusCode >= 400) {
           status = 'ERROR HTTP';
         }
         const logger = new Logger(status);

         logger.log(
           `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip},  request-body: ${JSON.stringify(
             request.body
           )}, response-data: ???`
         );
       });

       next();
     }
   }
   ```

2. update `app.module.ts`
   ```typescript
   export class AppModule {}
   ```
   into
   ```typescript
   export class AppModule implements NestModule {
     configure(consumer: MiddlewareConsumer): void {
       consumer.apply(AppLoggerMiddleware).forRoutes('*');
     }
   }
   ```
