import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthorsService } from 'src/app/core/services/authors.service';
import { IFetchedAuthor, IFetchedBook } from 'src/app/core/interfaces';
import { SubSink } from 'subsink';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'bks-author-details',
  template: `<bks-author-view [books]="booksByAuthor" [authorDetails]="author"></bks-author-view>`,
})
export class AuthorDetailsComponent implements OnInit, OnDestroy {
  author: IFetchedAuthor;
  booksByAuthor: IFetchedBook[];
  subsink = new SubSink();

  constructor(
    private authorsService: AuthorsService,
    private booksService: BooksService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subsink.sink = this.router.params.subscribe((params) => {
      this.fetchAuthorById(params['id']);
      this.fetchBooksByAuthor(params['id']);
    });
  }

  private fetchBooksByAuthor(authorId: number) {
    this.subsink.sink = this.booksService
      .getByAuthor(authorId)
      .subscribe((books) => (this.booksByAuthor = books));
  }

  private fetchAuthorById(id: number) {
    this.subsink.sink = this.authorsService
      .getById(id)
      .subscribe((author) => (this.author = author));
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
