import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation'
export const routes: Routes = [
  {
    path: 'account',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component', // 🔁 this must match what you expose
      }).then(m => m.AppComponent),
  },
  {
    path: 'transaction',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Component', // 🔁 this must match what you expose
      }).then(m => m.AppComponent),
      
  }
];
