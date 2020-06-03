import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [BookDetailsComponent],
  imports: [CommonModule, BookRoutingModule],
})
export class BookModule {}
