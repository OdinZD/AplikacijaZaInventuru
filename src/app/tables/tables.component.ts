import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
 
  formValue !: FormGroup;
  showAdd! : boolean;
  showUpdate!: boolean;
  constructor() { }

 
  ngOnInit(): void {
  }
  /* clickDodajProizvod(){
    this.formValue.reset()
    this.showAdd = true;
    this.showUpdate = false;
} */
}
