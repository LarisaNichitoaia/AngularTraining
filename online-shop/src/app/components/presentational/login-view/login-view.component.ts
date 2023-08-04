import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/modules/shared/types/login.types';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {
  @Input() loginForm!:FormGroup;
  @Output() credentials: EventEmitter<Login> = new EventEmitter<Login>();


  onSubmit() {
    this.credentials.emit(this.loginForm.value);
  }
}
