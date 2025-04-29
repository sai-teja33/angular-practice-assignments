import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Console, error } from 'console';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges,OnInit,DoCheck ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() value!:number;
  @Input() user!:{
    name:string,
    age:number
  }
  previousUser!:{
    name:string,
    age:number
  }
  counter:number=0;
  private subscription!:Subscription;
  @ViewChild('btn') btn!:ElementRef;
  @ContentChild('projectedContent') projectedContent:any;
  currentValue!:number;
  previousValue!:number;
  products:any[]=[];
ngOnChanges(changes: SimpleChanges): void {
  console.log("On Changes Called",changes);
  if(changes['value']){
    this.currentValue=changes['value'].currentValue;
    this.previousValue=changes['value'].previousValue;
  } 
}
constructor(private data:DataService){}
ngOnInit(): void {
  console.log("ONINIT called");
  this.fetchData();
  //userobject
  if(this.user){
    this.previousUser={
      ...this.user
    }
  }
}
fetchData(){
  this.subscription=this.data.getProducts$().pipe(
    map((val)=>val.slice(0,4))
  ).subscribe({
    next:(val: any[])=>this.products=val,
    error:(err: any)=>console.error(err)
  })
}
ngDoCheck(): void {
  if(this.userHasChanged()){
    console.log("NGDOCHECK called!:user obejct changed")
  }
}
userHasChanged():boolean{
  return this.user.name!==this.previousUser.name ||this.user.age!==this.previousUser.age;
}
ngAfterContentInit(): void {
  console.log("CONTENT INIT: ",this.projectedContent)
}
ngAfterContentChecked(): void {
  console.log(" CONTENT CHECKED:projected content checked")
}
ngAfterViewInit(): void {
  console.log("after viewinit: ",this.btn)
  this.btn.nativeElement.innerHTML="button text updated"
}
onCounterChange(){
  this.counter++;
}
 ngAfterViewChecked(): void {
   console.log("view check called",this.counter)
 }
  ngOnDestroy(): void {
    if(this.subscription){
      console.log("Destroy called")
    this.subscription.unsubscribe()
    }
  }
}
