// anuglar
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// modules
import { MaterialModule } from '../material/material.module';

// guards
import { EnsureModuleLoadedOnceGuard } from './guards/ensure-module-loaded-once.guard';
import { AuthrorizeGuard } from './guards/authorize.guard';

// components
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FooterComponent } from './footer/footer.component';

// services
import { BooksService } from './services/books.service';
import { FilesService } from './services/files.service';
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';
import { AuthorsService } from './services/authors.service';
import { ImagesService } from './services/images.service';
import { DatabaseInfoService } from './services/database.info.service';
import { EventBusService } from './services/event-bus.service';

// interceptors
import { AppendBearerTokenInterceptor } from './interceptors/append-bearer-token.interceptor';
import { OverlayInterceptor } from './interceptors/overlay.interceptor';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [HeaderComponent, MainContainerComponent, FooterComponent, OverlayComponent],
  imports: [MaterialModule, RouterModule, HttpClientModule, CommonModule],
  exports: [HeaderComponent, MainContainerComponent, FooterComponent, OverlayComponent],
  providers: [
    BooksService,
    FilesService,
    AccountService,
    AuthService,
    AuthrorizeGuard,
    AuthorsService,
    ImagesService,
    DatabaseInfoService,
    EventBusService,
    { provide: HTTP_INTERCEPTORS, useClass: AppendBearerTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: OverlayInterceptor, multi: true },
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
