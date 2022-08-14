import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


//this is the main function
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
//this is invoke the main function
bootstrap();
