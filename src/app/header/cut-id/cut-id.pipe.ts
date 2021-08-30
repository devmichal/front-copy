import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutId'
})
export class CutIdPipe implements PipeTransform {

  transform(value: string): string {

    if (!value) {
      return '';
    }

    return value.slice(1,4);
  }

}
