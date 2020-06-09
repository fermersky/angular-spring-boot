import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateAuthorComponent } from './create-author/create-author.component';
import { AuthorRoutingModule } from './author-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CreateAuthorComponent],
  imports: [CommonModule, SharedModule, AuthorRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class AuthorModule {}
