import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
  private cars = CARS;

  //this method is used to get all cars
  public getCars() {
    return this.cars;
  }

  //this method is used to get car by id
  public getCarById(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve, reject) => {
      const car = this.cars.find((car) => car.id === carId);
      if (!car) {
        throw new HttpException('Car not found', 404);
      }
      return resolve(car);
    });
  }
  //this method is used to add car
  public addCar(car: any) {
    const index = this.cars.findIndex((c) => c.id == car.id);
    if (index !== -1) {
      throw new HttpException('Car already exists', 409);
    }
    const carLength = this.cars.length;
    this.cars.push(car);
    if (carLength === this.cars.length) {
      throw new HttpException('something went wrong', 500);
    }
    return car;
  }

  //this method is used to update car
  public updateCar(
    id: number,
    property_name: string,
    property_value: string,
  ): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve, reject) => {
      let index = this.cars.findIndex((c) => c.id == carId);

      if (index === -1) {
        throw new HttpException('Car not found', 404);
      } else {
        if(property_name==='id'){
            throw new HttpException('Id cannot be updated', 409);
        }

        this.cars[index][property_name] = property_value;
        return resolve(this.cars[index]);
      }
    });
  }

  //this method is used to delete car
  public deleteCar(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve, reject) => {
      let index = this.cars.findIndex((c) => c.id == carId);
      this.cars.splice(index, 1);
      if (index === -1) {
        throw new HttpException('Car not found', 404);
      } else {
        return resolve(this.cars);
      }
    });
  }
}
