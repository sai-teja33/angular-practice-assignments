import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css'
})
export class ReactiveformsComponent {
  //using formgroup
// studentForm:FormGroup=new FormGroup({
//   firstName:new FormControl("",[Validators.required,Validators.minLength(3)]),
//   lastName:new FormControl("",[Validators.required,Validators.maxLength(5)]),
//   username:new FormControl("",[Validators.required,Validators.email]),
//   isAccept:new FormControl(""),
//   address:new FormGroup({
//     street:new FormControl(""),
//     city:new FormControl(""),
//     zipcode:new FormControl(""),
//   })
// })

//using formbuilder
 private formbuilder=inject(FormBuilder);
studentForm=this.formbuilder.group({
  firstName:['',[Validators.required,Validators.minLength(3)]],
  lastName:['',[Validators.required,Validators.maxLength(5)]],
  username:['',[Validators.email]],
  isAccept:[''],
  address:this.formbuilder.group({
    street:[""],
    city:[""],
    zipcode:['']
  })
})

formValue:any;
onSubmit(){
this.formValue=this.studentForm.value;
}
updateavalue(){
  this.studentForm.patchValue({
    firstName:"nama",
    address:{
      zipcode:"501203"
    }
  })
}
updateallvalues(){
this.studentForm.setValue({
  firstName:"nama",
  lastName:"saiteja",
  username:"nama@gmail.com",
  isAccept:"false",
  address:{
    street:"crystal colony",
    city:"hyd",
    zipcode:"501203"
  }
})
}
}
