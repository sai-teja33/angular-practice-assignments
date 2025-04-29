import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { error } from 'console';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent {
  data:number[]=[];
 obs=new Observable((observer)=>{
 setTimeout(()=>observer.next(1),1000) ;
 setTimeout(()=>observer.next(2),2000) ;
 setTimeout(()=>observer.next(3),3000) ;
//  setTimeout(()=>observer.error(new Error("something went wrong")),3500)
  setTimeout(()=>observer.next(4),4000) ;
  setTimeout(()=>observer.next(5),5000) ;
  setTimeout(()=>observer.complete(),6000)
 })
 onClick(){
  this.obs.pipe(
    filter((val:any)=>val>2),
    map((res)=>res*5)
  ).subscribe({
    next:(val)=>this.data.push(val),
    error:(err)=>alert(err.message),
    complete:()=>alert("data stream completed")
  })
 }
}
