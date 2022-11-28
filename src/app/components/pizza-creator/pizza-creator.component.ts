import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PizzaSize } from 'src/app/enums/pizza-size';
import { Topping } from 'src/app/models/topping.model';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-pizza-creator',
  templateUrl: './pizza-creator.component.html',
  styleUrls: ['./pizza-creator.component.css']
})
export class PizzaCreatorComponent {
  constructor() {

  }

  toppings : Topping[] = [    
    { id: "tomatoes", groupName: "Veggie", isSelected: false, img:"tomatoe.png", name: "Tomatoes", price: 1.00, priceLevel: 1 },
    { id: "onions", groupName: "Veggie", isSelected: false, img:"onion.png", name: "Onions", price: .50, priceLevel: 1 },
    { id: "bell-peppers", groupName: "Veggie", isSelected: false, img:"bell-pepper.png", name: "Bell Peppers", price: 1.00, priceLevel: 1 },
    { id: "mushrooms", groupName: "Veggie", isSelected: false, img: "mushroom.png", name: "Mushrooms", price: 1.20, priceLevel: 1 },
    { id: "pineapple", groupName: "Veggie", isSelected: false, img:"pineapple.png", name: "Pineapple", price: 0.75, priceLevel: 1 },    
    // Non Veggies
    { id: "sausage", groupName: "Non Veggie", isSelected: false, img:"sausage.png", name: "Sausage", price: 1.00, priceLevel: 1 },
    { id: "pepperoni", groupName: "Non Veggie", isSelected: false, img:"pepperoni.png", name: "Pepperoni", price: 2.00, priceLevel: 2 },
    { id: "barbeque-chicken", groupName: "Non Veggie", isSelected: false, img:"barbeque-chicken.png", name: "Barbeque Chicken", price: 3.00, priceLevel: 2 },
  ]  

  pizzas: Pizza[] = [
    { 
      id:"small",
      size: PizzaSize.Small,
      name: "Small",
      price: 5.00 ,
      total: 0,
      // we don't need original references. This is new copy
      toppings: this.toppings.map(newArray => ({ ...newArray })),
      
    },
    { 
      id:"medium", 
      size: PizzaSize.Medium,
      name: 'Medium', 
      price: 7.00,
      total: 0,
      // we don't need original references. This is new copy
      toppings: this.toppings.map(newArray => ({ ...newArray })),
    },
    { 
      id:"large", 
      size: PizzaSize.Large,
      name: 'Large', 
      price: 8.00,
      total: 0,
      // we don't need original references. This is new copy
      toppings: this.toppings.map(newArray => ({ ...newArray })),
    },      
    { 
      id:"extralarge", 
      size: PizzaSize.Extra_Large,
      name: 'Extra Large', 
      price: 9.00,
      total: 0,
      // we don't need original references. This is new copy
      toppings: this.toppings.map(newArray => ({ ...newArray })),
    }  
  ]
  

  
  summaryOfPizza(pizzaSize: number) {
    var summary: number = 0;

    var arr: Topping[] = this.pizzas[pizzaSize].toppings.filter(el => el.isSelected === true) || [];
    summary += Number(this.pizzas[pizzaSize].price);
    arr.forEach(el => {
      summary += Number(el.price);
    })

    return summary * Number(this.pizzas[pizzaSize].total);
  }
  
  CheckOffers(pizzaSize: PizzaSize) {
    var offer = {
      name: "N/A",
      value: 0.00
    }

    // Offer 1: $5
    // 1 Medium + 2 Toppings
    if (pizzaSize == PizzaSize.Medium && Number(this.pizzas[pizzaSize].total) == 1)
    {
      var toppings: Topping[] = this.pizzas[pizzaSize].toppings.filter(el => el.isSelected === true) || [];
      if (toppings.length == 2) {
        offer.name = "Offer 1";
        offer.value = 5.00;
        return offer;
      }      
    }

    // Offer 2
    // 2 medium 4 toppings each $9 
    if (pizzaSize == PizzaSize.Medium) {
      var toppings: Topping[] = this.pizzas[pizzaSize].toppings.filter(el => el.isSelected === true) || [];
      if (this.pizzas[1].total == 2 && toppings.length == 4) {
        offer.name = "Offer 2";
        offer.value = this.pizzas[1].total * 9.00;
        return offer;
      }
    }

    // Offer 3: 50% discount
    // 1 Large 4 Toppings (Pepperoni and Barbeque Chickes counted as 2 toppings)
    if (pizzaSize == PizzaSize.Large) {
      var toppingCounter = 0;
      var toppings: Topping[] = this.pizzas[pizzaSize].toppings.filter(el => el.isSelected === true) || [];
      
      // some toppings are extra
      toppings.forEach(topping => {
        toppingCounter += topping.priceLevel;
      })
      if (this.pizzas[2].total == 1 && toppingCounter == 4) {
        offer.name = "Offer 3"
        offer.value = this.summaryOfPizza(2) * .50;
        return offer;
      }

    }

    return offer;
  }

  
}
