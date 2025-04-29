import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shell';
  accountComponent: any;
  transactionComponent: any;
 
  async ngOnInit() {
    const accountModule = await loadRemoteModule({ //method by module-federation returns a promise
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component',
    });
    this.accountComponent = accountModule.AppComponent; //initializing AppComponent
 
    const transactionModule = await loadRemoteModule({ //method by module-federation returns a promise
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Component',
    });
    this.transactionComponent = transactionModule.AppComponent;

  }
  
}
