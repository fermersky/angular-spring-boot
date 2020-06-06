import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'splitIntoParagraphs',
})
export class SplitIntoParagraphsPipe implements PipeTransform {
  transform(plainText: string): string {
    let textToSplit = plainText.trim().replace(/[\n\r]+/gim, ''); // cut spaces and and break lines
    let sentences = textToSplit.split(/([\w\s\W]{20,500})\./gm); // smart split into sentences

    return sentences
      .map((s) => s.trim())
      .filter((s) => s != '')
      .join('.\n\n'); // make sure that html element has {white-space: pre-wrap} css rule
  }
}
