import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BookRoutingModule } from './book-routing.module';
import { BookViewComponent } from './book-view/book-view.component';
import { BookCreateComponent } from './book-create/book-create.component';

@NgModule({
  declarations: [BookDetailsComponent, BookViewComponent, BookCreateComponent],
  imports: [CommonModule, BookRoutingModule, SharedModule, MaterialModule, ReactiveFormsModule],
})
export class BookModule {}
