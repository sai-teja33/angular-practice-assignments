import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
  selectedColor: string = '';

  isDiv1visible:boolean=true;
   showDiv1(){
  this.isDiv1visible=true;
   }
   hideDiv1(){
    this.isDiv1visible=false;
   }
   isDiv2visible:boolean=true;
   toggle(){
    this.isDiv2visible=!this.isDiv2visible;
   }
   num1:string='';
   num2:string='';

   names:string[]=['arun','ram','tarun','rahul'];
   studentinfo:any[]=[
    {ID:1,name:"AAA",city:'hyd'} ,
    {ID:2,name:"BBB",city:'delhi'},
    {ID:3,name:'CCC',city:'mumbai'}

   ]
   div1color:string="";
   tored(){
    this.div1color='red';
   }
   togreen(){
    this.div1color='green';
   }
   isActive:boolean=true;
   colorchange(){
    this.isActive=!this.isActive;
   }
   properties:any={
    'background-color':'red',
    'color':'white',
    'height':'100px',
    'width':'100px'
   }
}
