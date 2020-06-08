import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  authenticate(token: string) {
    localStorage.setItem('token', token);
  }

  signOut() {
    localStorage.setItem('token', '');
  }

  isSignedIn(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      let payload: any = token.split('.')[1];
      payload = JSON.parse(window.atob(payload));

      return payload.exp > Date.now() / 1000;
    }

    return false;
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
