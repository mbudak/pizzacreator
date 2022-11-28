export class Topping {
    id: string | undefined;
    groupName: string | undefined;
    isSelected: boolean | undefined;
    img: string | undefined;
    name: string | undefined;
    price: number | undefined;
    priceLevel: number;

    constructor() {
        this.priceLevel = 1;
    }
}
