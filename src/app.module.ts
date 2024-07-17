import { Module } from '@nestjs/common'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

// Each feature in the app will have one module.
// @Module is a decorator provided by nestJS
// Calling this Module decorator with an object as parameter to configure it

// The @Module decorator provides metadata that NestJS uses to organize the application structure.
// This metadata includes the controllers and providers that are associated with the module.
@Module({
  // adding our modules using the `imports` key.
  imports: [ProductsModule],

  // Controllers are responsible for handling incoming requests and returning responses to the client.
  controllers: [AppController],

  // Providers are services that can be injected into other classes.
  // They can be used to provide functionality that is shared across the application.
  // Services are classes that handle the business logic of the application.
  providers: [AppService],
})
export class AppModule {}
