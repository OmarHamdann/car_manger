import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';

//this is the module for car
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.8zwnzz4.mongodb.net/?retryWrites=true&w=majority'),
    CarModule],
})
export class AppModule {}
