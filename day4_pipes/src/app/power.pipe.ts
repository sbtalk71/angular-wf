import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number,power=1): number {
    return Math.pow(value,power);
  }

  // 4|power:5
}
