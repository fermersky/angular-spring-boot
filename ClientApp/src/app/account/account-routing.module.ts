import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { PanelComponent } from './panel/panel.component';
import { AuthrorizeGuard } from '../core/guards/authorize.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'signin', component: SignInComponent },
      { path: 'panel', component: PanelComponent, canActivate: [AuthrorizeGuard] },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
