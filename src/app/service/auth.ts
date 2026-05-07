import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private httpClient:HttpClient , private router : Router){}
  login(user : User) {
    this.httpClient.get<Array<User>>('http://localhost:3000/Users')
    .subscribe(users => {
      const result = users.find(u => u.Email.trim() === user.Email.trim() && u.Password.trim() === user.Password.trim())
      if (result == undefined)
        return
      sessionStorage.setItem('user' , JSON.stringify(result))
      this.router.navigate(['/home'])
    })
  }
  register(user : User) {
    this.httpClient.post('http://localhost:3000/Users' , user).subscribe(_ => {
      this.router.navigate(['/auth/signin']);
    })
  }
  isLogged() : boolean {
    return sessionStorage.getItem('user') != null
  }
  Logout() {
    sessionStorage.removeItem('user')
    this.router.navigate(['/auth/signin'])
  }
}
