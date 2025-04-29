import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.css'
})
export class LatestComponent implements OnInit {
  latestArrivals = [
    {
      "id": 21,
      "name": "Samsung Galaxy S24 Ultra",
      "image": "https://www.sammobile.com/wp-content/uploads/2023/12/Samsung-Galaxy-S24-Ultra-Violet.jpg",
      "price": "$1299",
      "buyLink": "https://www.samsung.com/galaxy-s24-ultra",
      "category": "Mobiles"
    },
    {
      "id": 22,
      "name": "MacBook Air M3",
      "image": "https://www.thestreet.com/.image/t_share/MjA0Nzg2NDQ1MDQ5NzM0MTcz/4-13-inch15-inch-m3-macbook-air-hands-onfirst-look-thestreet.jpg",
      "price": "$1399",
      "buyLink": "https://www.apple.com/macbook-air-m3",
      "category": "Laptops"
    },
    {
      "id": 23,
      "name": "LG OLED evo G3 77-inch",
      "image": "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/0acbe124-4221-4e58-8240-8136cbd8b156/md08003935-DZ-01-jpg",
      "price": "$3499",
      "buyLink": "https://www.lg.com/us/tvs/lg-oled77g3pua",
      "category": "TVs"
    }
  ];
  latestproducts:any;

   ngOnInit(): void {
     this.latestproducts =this.latestArrivals;
   }
}
