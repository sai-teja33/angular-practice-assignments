import { Component } from '@angular/core';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editprice',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterModule],
  templateUrl: './editprice.component.html',
  styleUrl: './editprice.component.css'
})
export class EditpriceComponent {
username='akash';
dirty=false;
onuserchange(event:Event){
  this.dirty=true;
}
}
