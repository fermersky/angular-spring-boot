import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'toValidSrc' })
export class ToValidSrcPipe implements PipeTransform {
  transform(value: any): string {
    const base64 = value;

    return 'data:image/jpeg;base64,' + base64;
  }
}
