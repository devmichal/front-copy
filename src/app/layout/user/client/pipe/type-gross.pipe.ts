import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeGross'
})
export class TypeGrossPipe implements PipeTransform {

  transform(value: boolean): string {

    return value ? 'Gross' : 'Net';
  }

}
