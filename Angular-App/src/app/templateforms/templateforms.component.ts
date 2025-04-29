import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-templateforms',
  standalone: true,
  imports: [CommonModule,FormsModule,JsonPipe],
  templateUrl: './templateforms.component.html',
  styleUrl: './templateforms.component.css'
})
export class TemplateformsComponent {
  contact:any={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    gender:"male",
    isMarried:false,
  }
   countryList:any[]=["India","USA","England"];
   onSubmit(form: NgForm){
    console.log(form.value);
    this.onReset(form);
   }
   onReset(form:NgForm){
    form.resetForm();
   }
}
