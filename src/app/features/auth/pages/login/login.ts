import { Component, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ButtonModule, ToastModule],
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

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private messageService: MessageService){
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  control(name: string){
    return this.loginForm.get(name)
  }

  submit() {
    this.submitted = true

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()    
      return
    }

    this.inputUser = this.loginForm.value.user
    this.inputPassword = this.loginForm.value.password

    if (this.hardCodeUser === this.inputUser && this.hardCodePassword === this.inputPassword) {
      console.log('LoginValidado')
      this.router.navigate(['/main-page'])
    }
    this.showError()
  }
  showError() {
        this.messageService.add({ severity: 'error', summary: 'Atenção', detail: 'Login ou Senha Incorretos' });
    }
}
