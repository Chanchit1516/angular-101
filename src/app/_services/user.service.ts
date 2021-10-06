import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  REST_API: string = `${environment.apiUrl}`;
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.apiUrl}/users`);
  }
}
