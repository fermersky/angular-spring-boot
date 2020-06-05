import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IFetchedBook } from 'src/app/core/interfaces';

@Component({
  selector: 'bks-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookViewComponent implements OnInit {
  @Input() book: IFetchedBook;

  constructor() {}

  ngOnInit(): void {}
}
