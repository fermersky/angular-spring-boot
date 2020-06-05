import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { ThreeDotSplitterComponent } from './three-dot-splitter/three-dot-splitter.component';
import { BookComponent } from './book/book.component';
import { ToValidSrcPipe } from './to-valid-src.pipe';

@NgModule({
  declarations: [ThreeDotSplitterComponent, BookComponent, ToValidSrcPipe],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ThreeDotSplitterComponent, BookComponent, ToValidSrcPipe],
})
export class SharedModule {}
