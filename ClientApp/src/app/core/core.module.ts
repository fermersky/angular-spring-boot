import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule({
  declarations: [HeaderComponent, MainContainerComponent],
  imports: [MaterialModule, RouterModule],
  exports: [HeaderComponent, MainContainerComponent],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
