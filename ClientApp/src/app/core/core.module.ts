// anuglar
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';

// modules
import { MaterialModule } from '../material/material.module';

// guards
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

// components
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, MainContainerComponent, FooterComponent],
  imports: [MaterialModule, RouterModule],
  exports: [HeaderComponent, MainContainerComponent, FooterComponent],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
