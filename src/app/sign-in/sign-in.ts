import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Auth } from '../service/auth';
import { User } from '../types';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  constructor(private auth:Auth){}
  login(form : NgForm) {
    const user : User = new User();
    user.Email = form.form.get('email')?.value ?? ''
    user.Password = form.form.get('password')?.value ?? ''
    this.auth.login(user);
  }
}
