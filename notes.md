# NestJS for RESTFULL API :

> Under the hood Nest works on ExpressJS only.

> The goal while using NestJS is to modularize the app's components as much as possible.
> 
- Each feature in the app will have one module. 
- `@Module` is a decorator provided by nestJS
- The naming convention is to write the feature name followed by what type it is and then extension like `products.controller.ts`
- Will use `ES-Modules` import export file system and not the traditional CommonJS format like we do in ExpressJS.
- NestJS wont scan all the files untill we are using it somewhere in the app, so we need to clear to import required files to connect various components together.

## Controllers : 

- Controllers are important for handling incoming requests and sending back responses.
- Usually the controllers HTTP methods dont need to have req, res objects. Nest handles it for us. 
  - So we can directly return any type of response by the API.


## Services :

- This should have heavy lifting business logic stuff so that controllers can stay lean.
- The `@Injectable` decorator defines a service. 
- Services are used for business logic and can be injected into controllers or other services.

## Modules :

- There is a module file for each feature combining all the controllers and providers used for that feature.
- The App module combines all the other modules from app using the `imports` key.

## Decorator : 

- A special kind of declaration that can be attached to a class, method, property, or parameter to add metadata or modify its behavior.
- Decorators in NestJS are a core concept used to add metadata to classes, methods, properties, and parameters. 
- They allow you to modify the behavior of these elements.
- Examples : 
  - @Module, @Controller, @Get, @Post, @Put, @Delete, etc.