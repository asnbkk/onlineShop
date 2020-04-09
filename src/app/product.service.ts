import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../assets/interfaces/order'
import { Product } from '../assets/interfaces/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private url = 'api/products/'
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  OrderProducts(products, userInfo): Observable<Order> {
    return this.http.post<Order>(this.url, {products, userInfo}, this.httpHeaders)
  }

  Create(product): Observable<Product> {
    return this.http.post<Product>(this.url+'set', product, this.httpHeaders)
  }

}
