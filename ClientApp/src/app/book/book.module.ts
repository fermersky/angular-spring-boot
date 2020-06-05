import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BookRoutingModule } from './book-routing.module';
import { BookViewComponent } from './book-view/book-view.component';

@NgModule({
  declarations: [BookDetailsComponent, BookViewComponent],
  imports: [CommonModule, BookRoutingModule, SharedModule, MaterialModule],
})
export class BookModule {}
