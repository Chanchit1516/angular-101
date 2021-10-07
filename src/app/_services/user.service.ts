import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  REST_API: string = `${environment.apiUrl}`;
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.apiUrl}/users`);
  }
}
