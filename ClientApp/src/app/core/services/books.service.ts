import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFetchedBook, IBookDto } from '../interfaces';

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

  getByAuthor(authorId: number): Observable<IFetchedBook[]> {
    return this.http.get<IFetchedBook[]>(`${this.baseUrl}/books/by/author/${authorId}`);
  }

  post(book: IBookDto): Observable<IFetchedBook> {
    return this.http.post<IFetchedBook>(`${this.baseUrl}/books/`, book);
  }
}
