import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IEntityInfoDto } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class DatabaseInfoService {
  private baseUrl = 'http://localhost:7000/api';

  constructor(private http: HttpClient) {}

  get(): Observable<IEntityInfoDto[]> {
    return this.http.get<IEntityInfoDto[]>(`${this.baseUrl}/tables/info`);
  }
}
