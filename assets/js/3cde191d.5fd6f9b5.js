"use strict";(self.webpackChunkbratislava_github_io=self.webpackChunkbratislava_github_io||[]).push([[2090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="Prisma",s={unversionedId:"technologies/NestJS/Prisma",id:"technologies/NestJS/Prisma",title:"Prisma",description:"Some of this is out-of-date / legacy from the projects being part of single monorepo",source:"@site/docs/technologies/NestJS/Prisma.md",sourceDirName:"technologies/NestJS",slug:"/technologies/NestJS/Prisma",permalink:"/docs/technologies/NestJS/Prisma",draft:!1,editUrl:"https://github.com/bratislava/bratislava.github.io/edit/master/docs/technologies/NestJS/Prisma.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenAPI",permalink:"/docs/technologies/NestJS/OpenAPI"},next:{title:"Project Structure",permalink:"/docs/technologies/NestJS/ProjectStructure"}},p={},l=[{value:"Setup",id:"setup",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prisma"},"Prisma"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Some of this is out-of-date / legacy from the projects being part of single monorepo")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update ",(0,a.kt)("inlineCode",{parentName:"p"},"prisma/schema.prisma")," with"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'generator client {\n  provider = "prisma-client-js"\n  output   = "../../../../node_modules/.prisma/client/nest-{app-name}"\n}\n')),(0,a.kt)("p",{parentName:"li"},"and create for prod build ",(0,a.kt)("inlineCode",{parentName:"p"},"prisma/schema.prisma.prod")," with"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'generator client {\n  provider = "prisma-client-js"\n  output   = "../node_modules/.prisma/client/nest-{app-name}"\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create models in prisma/schema.prisma")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Generate and migrate prisma")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create new service in services/database or in prisma folder ",(0,a.kt)("inlineCode",{parentName:"p"},"prisma.service.ts")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';\nimport { PrismaClient } from '.prisma/client/app-name';\n\n@Injectable()\nexport class PrismaService extends PrismaClient implements OnModuleInit {\n  async onModuleInit() {\n    await this.$connect();\n  }\n\n  async enableShutdownHooks(app: INestApplication) {\n    this.$on('beforeExit', async () => {\n      await app.close();\n    });\n  }\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create repository files ",(0,a.kt)("inlineCode",{parentName:"p"},"services/database/repository/{{model-name}}.repository.ts")," for each entity you want to communicate with database")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use prisma by its ",(0,a.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/"},"documentation")," or prisma in Nest.js ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/recipes/prisma"},"documentation")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"EXAMPLE:")," ",(0,a.kt)("inlineCode",{parentName:"p"}," {{model}}.repository.ts")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class {{Model}}Repository {\n  constructor(private prisma = new PrismaService()) {}\n\n  async create{{Model}}(data: Prisma.{{Model}}CreateInput): Promise<{{Model}}> {\n    return this.prisma.{{model}}.create({\n      data,\n    });\n  }\n\n  async get{{Model}}(\n    {{model}}WhereUniqueInput: Prisma.{{Model}}WhereUniqueInput\n  ): Promise<{{Model}} | null> {\n    try {\n      const data = await this.prisma.{{model}}.findUnique({\n        where: {{model}}WhereUniqueInput,\n      });\n      if (data === null) {\n        throw new HttpException({ message: 'data not found' }, 400);\n      }\n      return data;\n    } catch {\n      throw new HttpException({ message: 'data not found' }, 400);\n    }\n  }\n\n  async get{{Model}}(getData: DtoForGetting): Promise<{{Model}}[]> {\n    const where = {\n      variable1: {\n        equals: false,\n      },\n      variable2: {\n        equals: get{{Model}}.variable2,\n      },\n    };\n    const data = await this.prisma.{{model}}.findMany({\n      // skip: data[skip],\n      // take: data[take],\n      where: where,\n      orderBy: [\n        {\n          updated_at: 'desc',\n        },\n      ],\n    });\n\n    return data;\n  }\n\n  async update{{Model}}(params: {\n    where: Prisma.{{Model}}WhereUniqueInput;\n    data: Prisma.{{Model}}UpdateInput;\n  }): Promise<{{Model}}> {\n    const { where, data } = params;\n    return this.prisma.{{model}}.update({\n      data,\n      where,\n    });\n  }\n}\n\n")))))}m.isMDXComponent=!0}}]);