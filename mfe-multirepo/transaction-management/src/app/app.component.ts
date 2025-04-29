import { CommonModule, JsonPipe } from '@angular/common';
import { Component,  OnInit,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'transaction-management';

  transactionId!:number;
  transactions: any[] = [];

  // Simulate transaction data based on account ID
  accountTransactions: Record<number,any[]>={

    1: [
      { date: '2025-04-20', type: 'Deposit', amount: 1000 },
      { date: '2025-04-18', type: 'Withdrawal', amount: 500 },
      { date: '2025-04-15', type: 'Transfer', amount: 2000 },
    ],
    
    2: [
      { date: '2025-04-21', type: 'Deposit', amount: 1500 },
      { date: '2025-04-19', type: 'Withdrawal', amount: 300 },
      { date: '2025-04-16', type: 'Transfer', amount: 500 },
    ],
    
    3: [
      { date: '2025-04-22', type: 'Deposit', amount: 2000 },
      { date: '2025-04-17', type: 'Withdrawal', amount: 1000 },
      { date: '2025-04-14', type: 'Transfer', amount: 1500 },
    ],
  }

  ngOnInit() {
    window.addEventListener('account-selected', (event: any) => this.getTransactions(event));
  }
  
  getTransactions(event: any) {
    this.transactionId = event.detail.id
    console.log(this.transactionId);
    //load transactions
    this.transactions=this.accountTransactions[this.transactionId]||[];
    console.log('transactions loaded: ',this.transactions);
  }
  
}
