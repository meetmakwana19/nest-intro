import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

// Each feature in the app will have one module.
// @Module is a decorator provided by nestJS
// Calling this Module decorator with an object as parameter to configure it
@Module({
  // adding our modules using the `imports` key.
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
