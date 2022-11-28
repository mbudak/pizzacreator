import { PizzaSize } from "../enums/pizza-size";
import { Topping } from "./topping.model";

export class Pizza {
    id: string | undefined;
    name: string | undefined;
    size: PizzaSize | undefined;
    price: number | undefined;
    total: number | undefined;
    toppings: Array<Topping>;
    
    constructor() {
        this.total = 0;
        this.toppings = [];
    }
}
