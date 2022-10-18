import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  sayHello() {
    return "Hello from Coffee!";
  }
  @Get(':id/:key')
  getById(@Param() param : any) {
    //return param;
    const {id, key} = param;
    return id + key;
  }
  @Post()
  savePost(@Body() body : any) : any { 
    const {username, password} = body ; 
    return username + password;
  }
  @Delete(':id')
  deleteCoffee(@Param('id') id : any)  { 
    let listCoffee = this.coffeeService.data;
    //console.log(id)
    let list = listCoffee.filter(obj => obj.id != id)
    //console.log(index)
    //listCoffee.splice(index, 1)
    //console.log(listCoffee)
    return list
  }
}