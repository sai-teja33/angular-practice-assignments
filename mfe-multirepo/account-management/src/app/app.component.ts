import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CurrencyPipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'account-management';
  accounts = [
    { id: 1, name: 'John Doe', balance: 5000 },
    { id: 2, name: 'Jane Smith', balance: 3000 },
    { id: 3, name: 'Alice Johnson', balance: 4500 },
  ];

  selectAccount(account: any) {
    const event=new CustomEvent('account-selected',{detail:account});
    window.dispatchEvent(event);
  }
}


