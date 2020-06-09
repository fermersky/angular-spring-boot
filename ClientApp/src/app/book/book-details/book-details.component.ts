import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/';
import { SubSink } from 'subsink';

import { BooksService } from 'src/app/core/services/books.service';
import { FilesService } from 'src/app/core/services/files.service';
import { IFetchedBook } from 'src/app/core/interfaces';

import * as fileSaver from 'file-saver';

@Component({
  selector: 'bks-book-details',
  template: `<bks-book-view
    (onDownloadClick)="downloadFile($event)"
    [book]="book"
  ></bks-book-view>`,
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book: IFetchedBook;
  subsink = new SubSink();

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private filesService: FilesService
  ) {}

  ngOnInit(): void {
    this.subsink.sink = this.route.params.subscribe((params) => this.fetchBookById(params['id']));
  }

  fetchBookById(id: number): void {
    this.subsink.sink = this.booksService
      .getById(id)
      .pipe(catchError((_) => of(null)))
      .subscribe((book) => (this.book = book));
  }

  downloadFile(filename: string): void {
    this.subsink.sink = this.filesService.downloadAsBlob(filename).subscribe((res) => {
      let blob: any = new Blob([res], { type: 'application/epub+zip; charset=utf-8' });
      fileSaver.saveAs(blob, filename);
    });
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
