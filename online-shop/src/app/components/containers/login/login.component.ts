import { Component } from '@angular/core';
import { Observable, takeWhile } from 'rxjs';
import { AccesToken } from 'src/app/modules/shared/types/acces-token.types';
import { Login } from 'src/app/modules/shared/types/login.types';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isAlive: boolean=true;
  constructor(private authService: AuthService) { }
  
  login(credentials:Login){
    this.authService.postLogin(credentials).pipe(takeWhile(() => this.isAlive)).subscribe( (data) => {
      localStorage.setItem("token",data.access_token);
    });
  }
  ngOnDestroy() {
    this.isAlive = false;
  }
}
