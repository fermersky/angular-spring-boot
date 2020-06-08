import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { SignInComponent } from './signin/signin.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { PanelComponent } from './panel/panel.component';
import { TableWidgetComponent } from './table-widget/table-widget.component';

@NgModule({
  declarations: [SignInComponent, PanelComponent, TableWidgetComponent],
  imports: [CommonModule, AccountRoutingModule, SharedModule, ReactiveFormsModule, MaterialModule],
})
export class AccountModule {}
