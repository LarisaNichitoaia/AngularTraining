import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../modules/shared/types/products.types';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prods';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products$: Observable<Product[]> | undefined;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  }

  getProduct(productId:string):Observable<Product>{
    return this.http.get<Product>(`${environment.apiUrl}/products/${productId}`);
  }

  deleteProduct(productID:string){
    return this.http.delete(`${environment.apiUrl}/products/${productID}`);
  }

  updateProduct(product:Product){
    return this.http.put(`${environment.apiUrl}/products/${product.id}`, product);
  }

  postProduct(product:Product){
    return this.http.post(`${environment.apiUrl}/products`,product);
  }
}
