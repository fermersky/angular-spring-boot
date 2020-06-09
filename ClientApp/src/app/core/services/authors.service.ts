import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFetchedAuthor } from '../interfaces';

@Injectable()
export class AuthorsService {
  private baseUrl = 'http://localhost:7000/api';

  constructor(private http: HttpClient) {}

  get(withImages: boolean = true): Observable<IFetchedAuthor[]> {
    return this.http.get<IFetchedAuthor[]>(`${this.baseUrl}/authors?withImages?=${withImages}`);
  }

  post(firstname, lastname, imageId): Observable<IFetchedAuthor> {
    return this.http.post<IFetchedAuthor>(`${this.baseUrl}/authors`, {
      firstname,
      lastname,
      imageId,
    });
  }
}
