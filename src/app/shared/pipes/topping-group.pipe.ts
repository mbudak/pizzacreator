import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toppingGroup'
})
export class ToppingGroupPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
