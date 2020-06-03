import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bks-shared-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() author: string;
  @Input() genre: string;
  @Input() imageSrc: string;

  constructor() {}

  ngOnInit(): void {}
}
