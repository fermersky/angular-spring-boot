import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { IFetchedBook } from 'src/app/core/interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bks-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookViewComponent implements OnInit {
  @Input() book: IFetchedBook;
  @Output() onDownloadClick = new EventEmitter<String>();

  constructor() {}

  ngOnInit(): void {}

  downloadFile(): void {
    this.onDownloadClick.emit(this.book.filename);
  }
}
