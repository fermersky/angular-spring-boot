import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFetchedBook } from '../interfaces';

@Injectable()
export class BooksService {
  private baseUrl = 'http://localhost:7000/api';

  constructor(private http: HttpClient) {}

  get(): Observable<IFetchedBook[]> {
    return this.http.get<IFetchedBook[]>(`${this.baseUrl}/books`);
  }

  getById(id: number): Observable<IFetchedBook> {
    return this.http.get<IFetchedBook>(`${this.baseUrl}/books/${id}`);
  }
}
