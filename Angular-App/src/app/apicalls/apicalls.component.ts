import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

export  interface Person {
  "id": number;
  "name": string;
}
@Component({
  selector: 'app-apicalls',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apicalls.component.html',
  styleUrls: ['./apicalls.component.css']
})

export class ApicallsComponent {
  http = inject(HttpClient);
  people:any;
  person:any={
    "id":null,
    "name":""
  }
  baseURL: string = "http://localhost:3000/people";
  getPeople() {
    this.http.get(this.baseURL).subscribe((res:any)=>{
      this.people=res;
    })
  }
      addPerson(){
  this.http.post(this.baseURL,this.person).subscribe((res:any)=>{
    console.log(res)
    if (res && res.id) {
      alert('Person added successfully!');
      this.getPeople(); // Optionally refresh the list of people
      this.person = { id: null, name: '' };
    } else {
      alert('Failed to add person. Please try again.');
    }
  })
      }


}


