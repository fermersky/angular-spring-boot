import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IFetchedAuthor, IFetchedBook } from 'src/app/core/interfaces';

@Component({
  selector: 'bks-author-view',
  templateUrl: './author-view.component.html',
  styleUrls: ['./author-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorViewComponent implements OnInit {
  @Input() authorDetails: IFetchedAuthor;
  @Input() books: IFetchedBook[];

  constructor() {}

  ngOnInit(): void {}
}
