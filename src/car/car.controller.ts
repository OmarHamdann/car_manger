import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';

//this is the controller for car
@Controller('car')
export class CarController {
    constructor(private carService:CarService) {}

    @Get('/')
    public getCars() {
        return this.carService.getCars();
    }

    @Get('/:id') 
    public getCarById(@Param("id") id:number)  {
        return this.carService.getCarById(id);
    }

    @Post("/")
    public addCar(@Body() car:CarDto) {
        return this.carService.addCar(car);
    }

    @Delete("/:id")
    public deleteCar(@Param("id") id:number) {
        return this.carService.deleteCar(id);
    }

    @Put("/:id")
    public async updateCar(@Param("id") id:number,@Query() query) {
        const property_name=query.property_name;
        const property_value=query.property_value;
        return this.carService.updateCar(id,property_name,property_value);
    }




}
