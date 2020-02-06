import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, param: any): any {
    let currency;

    if(param == 'kr'){
      currency = 'Svenska enkronor';
    };

    console.log('my value is:' + value);
    console.log('my param is:' + param);

    return value + currency;
  }

}
