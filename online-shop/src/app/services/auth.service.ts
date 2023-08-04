import { Injectable } from '@angular/core';
import { Login } from '../modules/shared/types/login.types';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AccesToken } from '../modules/shared/types/acces-token.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  postLogin(credentials:Login):Observable<AccesToken>{
    return this.http.post<AccesToken>(`${environment.apiUrl}/auth/login`,credentials);
  }

  isLoggedIn(): Boolean {
    return localStorage.getItem("token") !== null
  }
}
