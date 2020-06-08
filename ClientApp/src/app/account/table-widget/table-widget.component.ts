import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { IEntityInfoDto } from 'src/app/core/interfaces';

@Component({
  selector: 'acc-table-widget',
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.css'],
})
export class TableWidgetComponent implements OnInit, OnDestroy {
  @Input() entityInfo: IEntityInfoDto;
  @Input() intervalRange: number;

  mutableCount: number = 0;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.mutableCount < this.entityInfo.value) {
        this.mutableCount++;
      }
    }, this.intervalRange / this.entityInfo.value);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
