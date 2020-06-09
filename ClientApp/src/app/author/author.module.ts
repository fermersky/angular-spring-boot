import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateAuthorComponent } from './create-author/create-author.component';
import { AuthorRoutingModule } from './author-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorViewComponent } from './author-view/author-view.component';

@NgModule({
  declarations: [CreateAuthorComponent, AuthorDetailsComponent, AuthorViewComponent],
  imports: [CommonModule, SharedModule, AuthorRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class AuthorModule {}
