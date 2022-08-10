[back](../NestJS.md)

# Project Structure

This part will show you, how to create basic structure of your NEST application. How to generate project and how to prepare folders and document structure. If you are familiar with nest after, this you can start programming. If not, you can check nest documentation https://docs.nestjs.com, or check other parts of this docs.

## Project generator

For generate project use [this](../../tools/generators/nest.md).

## File structure

Consider if you will need two or more separate apps in backend or you need only one.

### Main basic structure is:

```
├── src
│   ├── app
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   ├── app.dtos.ts
│   │   ├── app.models.ts
│   │   ├── app.modul.ts
│   ├── main.ts
```

### Complex structure with prisma is:

```
├── prisma
│   ├── migrations
│   ├── schema.prisma
│   ├── schema.prisma.prod
│   ├── seed.ts
├── src
│   ├── app1
│   │   ├── controllers
│   │   │   ├── app.controller1.ts
│   │   │   ├── app.controller2.ts
│   │   ├── services
│   │   │   ├── app.service1.ts
│   │   │   ├── app.service2.ts
│   │   │   ├── database
│   │   │   │   ├── repository
│   │   │   │   │   ├── app.repository1.ts
│   │   │   │   │   ├── app.repository2.ts
│   │   │   │   ├── database.service.ts
│   │   │   ├── vendors
│   │   │   │   ├── vendor1.service.ts
│   │   │   │   ├── vendor2.service.ts
│   │   ├── dto
│   │   │   ├── app.dto1.ts
│   │   │   ├── app.dto2.ts
│   │   ├── public
│   │   ├── app1.module.ts
│   ├── app2
│   │   ├── ... (same as app1)
│   │   ├── app2.module.ts
│   ├── module.ts
│   ├── main.ts
```

**_NOTE:_**

- Please use logical names by type of project instead of `app` if you have more than one app or more then 1 service | controller | repository ...
- if you have one app please use only one module.ts, else you can import all modules into main module which is used in main.ts
