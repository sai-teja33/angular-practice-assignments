import { AfterViewChecked, Component, ViewChild, viewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-lifecyclehooks',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './lifecyclehooks.component.html',
  styleUrl: './lifecyclehooks.component.css'
})
export class LifecyclehooksComponent{
  inputValue=123;
  inputUser={
    name:"nama sai",
    age:21
  }
  generateRandomNumber(){ 
    this.inputValue=Math.floor(Math.random()*100);
  }
 
}
