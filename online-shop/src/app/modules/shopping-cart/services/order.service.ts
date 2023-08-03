import { Injectable } from '@angular/core';
import { Order } from '../../shared/types/orders.types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prods'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  saveOrder(order: Order):Observable<Order>{
    return this.http.post<Order>(`${environment.apiUrl}/orders`, order);
  }
}
