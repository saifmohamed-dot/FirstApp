import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';
import { Auth } from '../service/auth';
import { User } from '../types';
function passwordSpecsValidator(control : AbstractControl) : ValidationError | null {
  let valid : boolean = /^(?=.*[A-Za-z])(?=.*\d).{5,}$/.test(control.value)
  if (valid)
    return null;
  return {
    kind : "weak password" ,
    message : "Your password should contains letters and number and len at least 5"
  };
}
function passwordConfirmationValidations(controlGroup : AbstractControl) : ValidationError | null {
  const password : string = controlGroup.get('password')?.value
  const passwordConfirmation : string = controlGroup.get('passwordConfirmation')?.value
  if (password == passwordConfirmation)
    return null
  return {
    kind : "passwords mismatch",
    message: "The confirmation password should be equal the password ."
  }
}
@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})

export class SignUp {
  constructor(private auth : Auth){ }
  signUpForm : FormGroup = new FormGroup(
  {
    username : new FormControl('' , [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    email : new FormControl('' , [Validators.required , Validators.email]),
    password : new FormControl('' , passwordSpecsValidator),
    passwordConfirmation : new FormControl('' , passwordSpecsValidator)
  },
  {
    validators: passwordConfirmationValidations
  });

  getFieldError(field : string) : string {
    const errors = this.signUpForm.get(field)?.errors ?? {}
    let key =  Object.keys(errors)[0];
    if (key == 'kind')
      key = errors[`${key}`]
    return key;
  }
  register() {
    const user = new User();
    user.Email = this.signUpForm.get('email')?.value ?? ''
    user.Username = this.signUpForm.get('username')?.value ?? ''
    user.Password = this.signUpForm.get('password')?.value ?? ''
    this.auth.register(user);
    this.signUpForm.reset();
  }
}
