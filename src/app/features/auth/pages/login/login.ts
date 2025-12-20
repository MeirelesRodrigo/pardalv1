import { Component, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  

  hardCodeUser = 'pardal'
  hardCodePassword = '123'

  inputUser = ''
  inputPassword = ''

  loginForm: FormGroup
  submitted = false

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit() {
    this.submitted = true

    if (this.loginForm.invalid) {
      return
    }

    this.inputUser = this.loginForm.value.user
    this.inputPassword = this.loginForm.value.password
    console.log(this.inputUser)
    console.log(this.inputPassword)

    if (this.hardCodeUser === this.inputUser && this.hardCodePassword === this.inputPassword) {
      console.log('LoginValidado')
    }

  }
}
