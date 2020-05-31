import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'toBase64' })
export class ToBase64 implements PipeTransform {
  transform(value: any): string {
    const base64 = value;

    return 'data:image/jpeg;base64,' + base64;
  }
}
