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
      .main-container {
        min-height: 77vh;
        padding: 70px 60px;
        background-image: linear-gradient(#fdfbfb 0%, #ebedee 100%);
      }
    `,
  ],
})
export class MainContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
