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
    ]

}
