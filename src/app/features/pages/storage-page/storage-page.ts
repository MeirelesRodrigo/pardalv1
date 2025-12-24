import { Component } from '@angular/core';
import { SideBarComponents } from "../../components/side-bar-components/side-bar-components";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-storage-page',
  imports: [ReactiveFormsModule, SideBarComponents],
  templateUrl: './storage-page.html',
  styleUrl: './storage-page.css',
})
export class StoragePage {
  storageForm: FormGroup
  submitted = false


  constructor(private fb: FormBuilder){
    this.storageForm = this.fb.group({
      nomeProduto: ['',Validators.required],
      qtdEstoqueproduto: ['', Validators.required],
      valorProduto: ['', Validators.required],
      corredorEstoque: ['', Validators.required],
      prateleiraEstoque: ['', Validators.required],
      descricaoProduto: ['']
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
  }

  formClean(){
    this.storageForm.reset()
  }


}
