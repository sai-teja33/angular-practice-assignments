import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css'
})
export class AgGridComponent  implements OnInit{
  users:any[]=[];
  colDefs: ColDef[] = [
    { field: "id",headerName:"ID" ,
      cellRenderer:(item:any)=>{
return "EMP-"+item.value;
    }},
    { field: "name",headerName:"Name" },
    { field: "username" },
    {field:"email"}
    
];
def={
  flex:1,
  minWidth:100
}
 constructor(private http:HttpClient){}
 ngOnInit(): void {
   this.getUsers();
 }
 getUsers(){
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data:any)=>{
    this.users=data;
  })
 }
}
