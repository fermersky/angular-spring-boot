import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { ThreeDotSplitterComponent } from './three-dot-splitter/three-dot-splitter.component';
import { BookComponent } from './book/book.component';
import { ToBase64 } from './tobase64.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ThreeDotSplitterComponent, BookComponent, ToBase64],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ThreeDotSplitterComponent, BookComponent, ToBase64],
})
export class SharedModule {}
