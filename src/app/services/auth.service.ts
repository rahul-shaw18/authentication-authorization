import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() != null;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({email,password}:any){
    if(email === 'admin@admin.com' && password === '1234'){
      this.setToken('abcdefghijkmnopqrstuvwxyz')
      return { name: 'Rahul Shaw', email: 'admin@admin.com' };
    } else {
      return null
    }
  }
}
