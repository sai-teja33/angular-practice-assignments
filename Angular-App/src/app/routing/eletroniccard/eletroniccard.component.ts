import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-eletroniccard',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './eletroniccard.component.html',
  styleUrl: './eletroniccard.component.css'
})
export class EletroniccardComponent implements OnInit {
  product: any;
  productId:number=0;
  constructor(private route: ActivatedRoute, private data:DataService) {}
ngOnInit(): void {
  this.route.paramMap.subscribe((params)=>{
    this.productId=Number(params.get('id'));
  })

this.product=this.data.getProductsById(this.productId);
  }
}

