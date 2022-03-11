import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { InventuraModel } from '../inventura-dashboard/inventura-dashboard.model';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-dodaj-proizvod',
  templateUrl: './dodaj-proizvod.component.html',
  styleUrls: ['./dodaj-proizvod.component.css']
})
export class DodajProizvodComponent implements OnInit {
  
  formValue !: FormGroup;
  inventuraModelObject : InventuraModel = new InventuraModel();
  inventuraData !: any;
  showAdd! : boolean;
  showUpdate!: boolean;
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      marka : [''],
      model : [''],
      datum : [''],
      napomena : ['']
    })
    this.getAllInventura();
  }
  postProizvodDetails(){
    this.inventuraModelObject.marka = this.formValue.value.marka;
    this.inventuraModelObject.model = this.formValue.value.model;
    this.inventuraModelObject.datum = this.formValue.value.datum
    this.inventuraModelObject.napomena = this.formValue.value.napomena;

    this.api.postProizvod(this.inventuraModelObject)
    .subscribe(res =>{
      alert("Proizvod uspješno dodan");
      let reset = document.getElementById('cancel')
      reset?.click();
      this.formValue.reset();
      this.getAllInventura();
    },
    err=>{
      alert("Nešto nije u redu");
    })
  }
  getAllInventura(){
    this.api.getProizvod()
    .subscribe(res=>{
      this.inventuraData = res;
    })
  }
  deleteProizvod(row: any){
    this.api.deleteProizvod(row.id)
    .subscribe(res =>{
      alert("Proizvod iz inventure je izbrisan!")
      this.getAllInventura();
    })
  }
  /* clickDodajProizvod(){
    this.formValue.reset()
    this.showAdd = true;
    this.showUpdate = false;
  } */
  onEdit(row: any){
    
    this.inventuraModelObject.id = row.id;
    this.formValue.controls['marka'].setValue(row.marka)
    this.formValue.controls['model'].setValue(row.model)
    this.formValue.controls['datum'].setValue(row.datum)
    this.formValue.controls['napomena'].setValue(row.napomena)
  }
  updateProizvodDetalji(){
    this.inventuraModelObject.marka = this.formValue.value.marka;
    this.inventuraModelObject.model = this.formValue.value.model;
    this.inventuraModelObject.datum = this.formValue.value.datum
    this.inventuraModelObject.napomena = this.formValue.value.napomena;

    this.api.updateProizvod(this.inventuraModelObject, this.inventuraModelObject.id)
    .subscribe(res =>{
      alert("Uspješno ažurirano")
      let reset = document.getElementById('cancel')
      reset?.click();
      this.formValue.reset();
      this.getAllInventura();
    })
  }
}
