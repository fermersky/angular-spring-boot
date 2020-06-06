import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { SignInComponent } from './signin/signin.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, AccountRoutingModule, SharedModule, ReactiveFormsModule, MaterialModule],
})
export class AccountModule {}
