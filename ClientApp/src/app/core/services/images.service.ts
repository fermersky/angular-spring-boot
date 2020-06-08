import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFetchedFile } from '../interfaces';

@Injectable()
export class ImagesService {
  private baseUrl = 'http://localhost:7000/api/images';

  constructor(private http: HttpClient) {}

  downloadAsBlob(filename: string): Observable<Blob> {
    console.log(this.baseUrl);
    return this.http.get(`${this.baseUrl}/get/${filename}`, { responseType: 'blob' });
  }

  upload(file: File): Observable<IFetchedFile> {
    const formData = new FormData();
    formData.append('imageFile', file, file.name);

    return this.http.post<IFetchedFile>(`${this.baseUrl}/upload`, formData);
  }
}
