import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {
  private baseUrl = 'http://localhost:7000/signin';

  constructor(private http: HttpClient) {}

  signIn(username, password): Observable<any> {
    return this.http.post<any>(this.baseUrl, { username, password });
  }
}
