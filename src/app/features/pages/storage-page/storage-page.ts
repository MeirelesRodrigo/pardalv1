import { Component } from '@angular/core';
import { SideBarComponents } from "../../components/side-bar-components/side-bar-components";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';


@Component({
  selector: 'app-storage-page',
  imports: [ReactiveFormsModule, SideBarComponents,StepperModule, ButtonModule],
  templateUrl: './storage-page.html',
  styleUrl: './storage-page.css',
})
export class StoragePage {
  storageForm: FormGroup
  submitted = false

  constructor(private fb: FormBuilder){
    this.storageForm = this.fb.group({
      codigoProduto: ['',Validators.required],
      nomeProduto: ['',Validators.required],
      marcaProduto: ['',Validators.required],
      fornecedorProduto: ['',Validators.required],
      undMedidaProduto: ['',Validators.required],
      undEstoque: ['',Validators.required],
      valorCustoProduto: ['', Validators.required],
      valorVendaProduto: ['', Validators.required],
      percentualLucroProduto: ['', Validators.required],
      corredorEstoque: ['', Validators.required],
      prateleiraEstoque: ['', Validators.required],
    })
  }

  control(name: string){
    return this.storageForm.get(name)
  }

  submit(){
    this.submitted = true

    if(this.storageForm.invalid){
      this.storageForm.markAllAsTouched()
      return
    }
    console.log(this.storageForm.value)
  }

  formClean(){
    this.storageForm.reset()
  }
}
