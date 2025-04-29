import { Component } from '@angular/core';
 import { ReversePipe } from '../reverse.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [FormsModule,CommonModule,ReversePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  title = 'demo';
  name='Nama Sai Teja';
  city='Hyderabad';
  salary=21000;
  info={"role":"intern"}
  date=new Date();
  type='text'
  showAlert(message:string){
    alert(message);
  }
}
