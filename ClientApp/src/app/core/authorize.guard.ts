import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './services/auth.service';

@Injectable()
export class AuthrorizeGuard implements CanActivate {
  constructor(private authSerice: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authSerice.isSignedIn()) {
      this.router.navigate(['account/signin']);
      return false;
    }
    return true;
  }
}
