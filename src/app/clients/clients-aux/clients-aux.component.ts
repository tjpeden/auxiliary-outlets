import { Component } from '@angular/core';

@Component({
  selector: 'app-clients-aux',
  template: `
    <p>
      clients-aux Works!
    </p>
    <a href="#" [routerLink]="['/clients']">Clients List</a>
    <a href="#" [routerLink]="['other']">Clients Other</a>
  `,
  styles: []
})
export class ClientsAuxComponent { }
