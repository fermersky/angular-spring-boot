import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bks-core-container',
  template: `
    <main class="main-container">
      <ng-content></ng-content>
    </main>
  `,
  styles: [
    `
      .app-main-container {
        min-height: 77vh;
        padding: 40px;
        background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
      }
    `,
  ],
})
export class MainContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
