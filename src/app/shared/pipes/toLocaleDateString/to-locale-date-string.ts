import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocaleDateString',
})
export class toLocaleDateString implements PipeTransform {
  transform(value: Date, dateFormat = 'ro-RO'): string {
    return value.toLocaleDateString(dateFormat);
  }
}
