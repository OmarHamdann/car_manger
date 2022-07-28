import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.8zwnzz4.mongodb.net/?retryWrites=true&w=majority'),
    CarModule],
})
export class AppModule {}
