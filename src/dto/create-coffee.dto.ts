import { IsNumber, IsString } from "class-validator";

export class CreateCoffeeDto {
    @IsNumber()
    id?: number;
    @IsString()
    name: string;
    @IsString({each:true})
    brand: string;
    flavors: string[]
}
