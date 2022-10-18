import { Injectable } from '@nestjs/common';
import { Coffee } from 'entities/coffee.entity';

@Injectable()
export class CoffeeService {
    data : Coffee[] = [
        {
            id : 1, flavors : 'chocolate', brand : 'lhfd', name : '1MAR CHOC'
        },
        {
            id : 2, flavors : 'vanilla', brand : 'straucks', name : '1MAR VAN'
        },
        {
            id : 3, flavors : 'vanilla', brand : 'coffec', name : '1MAR Normal'
        }
    ];
    deleteCoffee(id : number)  { 
        let list = this.data.filter(obj => obj.id != id);
        return list;
    }
    updateCoffee (id : number, coffee : Coffee){
        const indexOfObject = this.data.findIndex(object => {
            return object.id == id;
          });
          //console.log(indexOfObject);
        this.data[indexOfObject].flavors = (coffee.flavors ?? this.data[indexOfObject].flavors);
        this.data[indexOfObject].brand = coffee.brand;
        this.data[indexOfObject].name = coffee.name;
        return this.data;
    }

    getById(id : number)  { 
        let coffee = this.data.find(obj => obj.id == id);
        return coffee;
    }
    saveCoffee(coffee : Coffee)  { 
        this.data.push(coffee)
        return this.data;
    }

}
