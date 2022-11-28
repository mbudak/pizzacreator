import { Pipe, PipeTransform } from '@angular/core';
import { Topping } from '../models/topping.model';

@Pipe({
  name: 'toppingFilter'
})
export class ToppingFilterPipe implements PipeTransform {

  transform(value: Topping[], filterstring:string): any {
    if(value === undefined  || value === null) return value;
    
    return value.filter(el => el.groupName === filterstring);
  }

}
