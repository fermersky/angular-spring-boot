import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books/books.component';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, BooksRoutingModule, SharedModule],
})
export class BooksModule {}
