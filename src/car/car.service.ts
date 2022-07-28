import { HttpException, Injectable } from '@nestjs/common';
import { ICar } from './interface/car.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CarDto } from './car.dto';

@Injectable()
export class CarService {
  constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) {}

  //this method is used to get all cars
  public async getCars(): Promise<CarDto[]> {
    const cars = await this.carModel.find().exec();
    if (!cars) {
      throw new HttpException('Cars not found', 404);
    }
    return cars;
  }

  //this method is used to get car by id
  public async getCarById(id: number): Promise<CarDto> {
    const car = await this.carModel.findOne({ id }).exec();
    if (!car) {
      throw new HttpException('Car nottt found', 404);
    }
    return car;
  }
  //this method is used to add car
  public async addCar(newCar: CarDto) {
    const car = await new this.carModel(newCar);
    return car.save();
  }

  //this method is used to update car
  public updateCar(
    id: number,
    property_name: string,
    property_value: string,
  ): Promise<any> {
    const car = this.carModel
      .updateOne({ id }, { [property_name]: property_value })
      .exec();
    if (!car) {
      throw new HttpException('Car not found', 404);
    }
    return car;
  }

  //this method is used to delete car
  public async deleteCar(id: number): Promise<any> {
    const car = await this.carModel.deleteOne({ id }).exec();
    if (car.deletedCount === 0) {
      throw new HttpException('Car not found', 404);
    }
    return car;
  }
}
