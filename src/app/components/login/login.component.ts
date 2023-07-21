import { Component } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  faLock = faLock;
  loginForm: any;
  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router
  ) {
    if (auth.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get gf() {
    return this.loginForm.controls;
  }
  submitLoginForm() {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      let x = this.auth.login(this.loginForm.value);
      if (x == null) {
        alert('Invalid Input');
      } else {
        this.router.navigate(['/admin']);
      }
    }
  }
}
