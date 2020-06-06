// anuglar
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// modules
import { MaterialModule } from '../material/material.module';

// guards
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

// components
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FooterComponent } from './footer/footer.component';

// services
import { BooksService } from './services/books.service';
import { FilesService } from './services/files.service';

@NgModule({
  declarations: [HeaderComponent, MainContainerComponent, FooterComponent],
  imports: [MaterialModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, MainContainerComponent, FooterComponent],
  providers: [BooksService, FilesService],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
