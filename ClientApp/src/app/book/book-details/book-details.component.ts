import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/';
import { SubSink } from 'subsink';

import { BooksService } from 'src/app/core/services/books.service';
import { IFetchedBook } from 'src/app/core/interfaces';

@Component({
  selector: 'bks-book-details',
  template: `<bks-book-view [book]="book"></bks-book-view>`,
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book: IFetchedBook;
  subsink = new SubSink();

  constructor(private route: ActivatedRoute, private booksService: BooksService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.fetchBookById(params['id']));
  }

  fetchBookById(id: number): void {
    this.subsink.sink = this.booksService
      .getById(id)
      .pipe(catchError((_) => of(null)))
      .subscribe((book) => (this.book = book));
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
