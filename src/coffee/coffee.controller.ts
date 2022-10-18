import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Coffee } from 'entities/coffee.entity';
import { get } from 'http';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  sayHello(@Query('id') query : any) {
    return query;
  }
  @Get('key/:key')
  getById(@Param() param : any) {
    //return param;
    const {id, key} = param;
    return id + key;
  }
  @Post()
  saveCoffee(@Body() body : Coffee) : any { 
      return this.coffeeService.saveCoffee(body);
  }

  @Delete(':id')//method delete = localhost:3000/coffee/1
  deleteCoffee(@Param('id') id : number)  { 
    return this.coffeeService.deleteCoffee(id);
  }

  @Put(':id')
  updateCoffee(@Param('id') id : any, @Body() body : Coffee)  { 
    return this.coffeeService.updateCoffee(id, body)
  }
  @Get('getCoffee/:id')
  getCoffeeById(@Param('id') id : number) {
    
    return this.coffeeService.getById(id);
  }
}