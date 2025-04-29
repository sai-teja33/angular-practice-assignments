import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent implements OnInit {
  products:any;
constructor(private route:ActivatedRoute,private data:DataService,private router:Router){
  this.products=this.data.getProducts();
}
ngOnInit(): void {
  this.route.queryParamMap.subscribe((params)=>{
    let category=params.get('category');
    if(category){
      this.products=this.data.productsList.filter((item: { category: string; })=>{
        return item.category==category;
      })
    }
  })
}
logoff(){
  localStorage.removeItem('loginuser');
  this.router.navigateByUrl('login');

}
}



  
  

    
  
  

