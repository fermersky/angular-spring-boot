import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IFetchedBook } from '../../core/interfaces';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  fetchedBooks$: Observable<IFetchedBook[]>;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.fetchedBooks$ = this.booksService.get();
  }
}
