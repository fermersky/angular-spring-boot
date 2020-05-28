import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './home/home.component';
import { HomePlainSectionComponent } from './home-plain-section/home-plain-section.component';

@NgModule({
  declarations: [HomeComponent, HomePlainSectionComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, MaterialModule],
})
export class HomeModule {}
