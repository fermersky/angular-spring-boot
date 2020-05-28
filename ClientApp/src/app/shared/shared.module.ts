import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeDotSplitterComponent } from './three-dot-splitter/three-dot-splitter.component';

@NgModule({
  declarations: [ThreeDotSplitterComponent],
  imports: [CommonModule],
  exports: [ThreeDotSplitterComponent],
})
export class SharedModule {}
