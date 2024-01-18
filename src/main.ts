import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Use NestFactory to create an application's instance.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
