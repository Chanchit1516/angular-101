import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { map } from 'rxjs/operators';

export class Product {
  id!: string;
  name!: string;
  price!: string;
  description!: string;
  createdBy!: number;
  createdDateTime!: Date;
  updatedBy!: number;
  updatedDateTime!: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  REST_API: string = `${environment.apiUrl}/api/v1/Products`;

  constructor(private httpClient: HttpClient) {}

  AddProduct(data: Product): Observable<any> {
    let API_URL = `${this.REST_API}/Insert`;
    return this.httpClient.post(API_URL, data);
  }

  GetProducts() {
    let API_URL = `${this.REST_API}/GetAll`;
    return this.httpClient.get(`${API_URL}`);
  }

  GetProduct(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/GetById/${id}`;
    return this.httpClient.get(`${API_URL}`).pipe(
      map((res: any) => {
        return res || {};
      })
    );
  }

  UpdateProduct(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/Update/${id}`;
    return this.httpClient.put(API_URL, data);
  }

  DeleteProduct(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/Delete/${id}`;
    return this.httpClient.delete(API_URL);
  }
}
