import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AppendBearerTokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method == 'POST') {
      const headers = req.headers.set('Authorization', 'Bearer ' + this.auth.getToken());
      const authReq = req.clone({ headers });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
