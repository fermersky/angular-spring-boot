import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateAuthorComponent } from './create-author/create-author.component';
import { AuthrorizeGuard } from '../core/guards/authorize.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create', component: CreateAuthorComponent, canActivate: [AuthrorizeGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthorRoutingModule {}
