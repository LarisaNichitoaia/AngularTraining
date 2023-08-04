import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs';
import { AppRoutes } from 'src/app/modules/shared/routs/route.enum';
import { Login } from 'src/app/modules/shared/types/login.types';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isAlive: boolean=true;
  constructor(private router: NavigationService, private authService: AuthService) { }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  })
  
  login(credentials:Login){
    this.authService.postLogin(credentials).pipe(takeWhile(() => this.isAlive)).subscribe( (data) => {
      localStorage.setItem("token",data.access_token);
      this.router.navigateTo(AppRoutes.Products);
    });
  }
  ngOnDestroy() {
    this.isAlive = false;
  }
}
