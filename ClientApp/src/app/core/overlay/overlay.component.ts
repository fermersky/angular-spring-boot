import { OnInit, Component } from '@angular/core';
import { EventBusService, EventType } from '../services/event-bus.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'bks-core-overlay',
  template: `
    <div *ngIf="display" class="overlay-block">
      <mat-spinner></mat-spinner>
    </div>
  `,
  styles: [
    `
      .overlay-block {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background: #fff;
        padding: 50px;
        border-radius: 20px;
      }
    `,
  ],
})
export class OverlayComponent implements OnInit {
  display = false;

  constructor(private eventBus: EventBusService) {}

  ngOnInit(): void {
    this.eventBus.bus$.subscribe((event: EventType) => {
      if (event === EventType.httpRequest) {
        this.display = true;
      } else if (event === EventType.httpResponse) {
        this.display = false;
      }
    });
  }
}
