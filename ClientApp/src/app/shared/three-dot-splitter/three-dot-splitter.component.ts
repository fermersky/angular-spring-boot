import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bks-shared-splitter',
  templateUrl: './three-dot-splitter.component.html',
  styleUrls: ['./three-dot-splitter.component.css'],
})
export class ThreeDotSplitterComponent implements OnInit {
  @Input() dotsColor: string;

  constructor() {}

  ngOnInit(): void {}
}
