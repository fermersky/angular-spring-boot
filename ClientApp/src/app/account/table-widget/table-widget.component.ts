import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'acc-table-widget',
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.css'],
})
export class TableWidgetComponent implements OnInit, OnDestroy {
  @Input() summary: string;
  @Input() count: number;
  @Input() suffix: number;
  @Input() prefix: number;
  @Input() intervalRange: number;

  mutableCount: number = 0;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.mutableCount < this.count) {
        this.mutableCount++;
      }
    }, this.intervalRange / this.count);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
