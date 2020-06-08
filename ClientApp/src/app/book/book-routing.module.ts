import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './book-create/book-create.component';

import { AuthrorizeGuard } from '../core/guards/authorize.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'details/:id', component: BookDetailsComponent },
      { path: 'create', component: BookCreateComponent, canActivate: [AuthrorizeGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
