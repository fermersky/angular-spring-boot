import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsRoutingModule } from './authors-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AuthorsListComponent],
  imports: [CommonModule, AuthorsRoutingModule, SharedModule, MaterialModule],
})
export class AuthorsModule {}
