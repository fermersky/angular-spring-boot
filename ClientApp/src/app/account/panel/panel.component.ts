import { Component, OnInit, OnDestroy } from '@angular/core';

import { DatabaseInfoService } from 'src/app/core/services/database.info.service';
import { IEntityInfoDto, IFetchedBook, IFetchedAuthor } from 'src/app/core/interfaces';
import { BooksService } from 'src/app/core/services/books.service';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { AuthorsService } from 'src/app/core/services/authors.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit, OnDestroy {
  entitiesInfo: IEntityInfoDto[];
  books$: Observable<IFetchedBook[]>;
  authors$: Observable<IFetchedAuthor[]>;

  subsink = new SubSink();

  constructor(
    private dbInfoService: DatabaseInfoService,
    private booksService: BooksService,
    private authorsService: AuthorsService
  ) {}

  ngOnInit(): void {
    this.subsink.sink = this.dbInfoService.get().subscribe((data) => {
      this.entitiesInfo = data;
    });

    this.books$ = this.booksService.get();
    this.authors$ = this.authorsService.get(false);
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
