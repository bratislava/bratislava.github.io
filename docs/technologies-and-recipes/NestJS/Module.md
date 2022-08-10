# Module

Into module you can insert used controllers and services. If you are using more apps, please create one base module.ts and import other modules into this one.

**_NOTE:_** services, which are used with single controller in a single (sub)module need to be inserted into this submodule, not into the root module.

Example of submodule.ts:

```typescript
@Module({
  imports: [],
  controllers: [MainAppController, AppController],
  providers: [AppSessionService, AppAddOnsService, PrismaService],
})
export class AppSubModule {}
```

Example of module.ts:

```typescript
@Module({
  imports: [AppSubModule1, AppSubModule2],
  controllers: [AppHealthController],
  providers: [],
})
export class AppModule {}
```

More documentation [here](https://docs.nestjs.com/modules)
