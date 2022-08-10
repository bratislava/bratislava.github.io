# Prisma

> Some of this is out-of-date / legacy from the projects being part of single monorepo

## Setup

1. Update `prisma/schema.prisma` with

   ```typescript
   generator client {
     provider = "prisma-client-js"
     output   = "../../../../node_modules/.prisma/client/nest-{app-name}"
   }
   ```

   and create for prod build `prisma/schema.prisma.prod` with

   ```typescript
   generator client {
     provider = "prisma-client-js"
     output   = "../node_modules/.prisma/client/nest-{app-name}"
   }
   ```

2. Create models in prisma/schema.prisma

3. Generate and migrate prisma

4. Create new service in services/database or in prisma folder `prisma.service.ts`

   ```typescript
   import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
   import { PrismaClient } from '.prisma/client/app-name';

   @Injectable()
   export class PrismaService extends PrismaClient implements OnModuleInit {
     async onModuleInit() {
       await this.$connect();
     }

     async enableShutdownHooks(app: INestApplication) {
       this.$on('beforeExit', async () => {
         await app.close();
       });
     }
   }
   ```

5. Create repository files `services/database/repository/{{model-name}}.repository.ts` for each entity you want to communicate with database

6. Use prisma by its [documentation](https://www.prisma.io/docs/) or prisma in Nest.js [documentation](https://docs.nestjs.com/recipes/prisma)

   **EXAMPLE:** ` {{model}}.repository.ts`

   ```typescript
   export class {{Model}}Repository {
     constructor(private prisma = new PrismaService()) {}

     async create{{Model}}(data: Prisma.{{Model}}CreateInput): Promise<{{Model}}> {
       return this.prisma.{{model}}.create({
         data,
       });
     }

     async get{{Model}}(
       {{model}}WhereUniqueInput: Prisma.{{Model}}WhereUniqueInput
     ): Promise<{{Model}} | null> {
       try {
         const data = await this.prisma.{{model}}.findUnique({
           where: {{model}}WhereUniqueInput,
         });
         if (data === null) {
           throw new HttpException({ message: 'data not found' }, 400);
         }
         return data;
       } catch {
         throw new HttpException({ message: 'data not found' }, 400);
       }
     }

     async get{{Model}}(getData: DtoForGetting): Promise<{{Model}}[]> {
       const where = {
         variable1: {
           equals: false,
         },
         variable2: {
           equals: get{{Model}}.variable2,
         },
       };
       const data = await this.prisma.{{model}}.findMany({
         // skip: data[skip],
         // take: data[take],
         where: where,
         orderBy: [
           {
             updated_at: 'desc',
           },
         ],
       });

       return data;
     }

     async update{{Model}}(params: {
       where: Prisma.{{Model}}WhereUniqueInput;
       data: Prisma.{{Model}}UpdateInput;
     }): Promise<{{Model}}> {
       const { where, data } = params;
       return this.prisma.{{model}}.update({
         data,
         where,
       });
     }
   }

   ```
