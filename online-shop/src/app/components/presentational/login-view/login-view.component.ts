import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/modules/shared/types/login.types';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {
  @Output() credentials: EventEmitter<Login> = new EventEmitter<Login>();

  productForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  })

  onSubmit() {
    const newLogin = {
      username: this.productForm.value.username!,
      password: this.productForm.value.password!,

    }
    this.credentials.emit(newLogin);
  }
}
