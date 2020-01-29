import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, exponent: any): any {
    console.log('my  value is:' + value);
    console.log('my  exponent is:' + exponent);

    return value + ' lastname';
  }

}
