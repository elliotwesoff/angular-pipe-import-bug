import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemsCount'
})
export default class ItemsCountPipe implements PipeTransform {

  transform(value: any[]): number {
    return value.length;
  }

}
