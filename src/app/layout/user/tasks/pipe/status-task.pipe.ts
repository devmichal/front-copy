import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTask'
})
export class StatusTaskPipe implements PipeTransform {

  transform(status: boolean): string {

    if (status) {
      return 'Created';
    }
    return 'During';
  }

}
