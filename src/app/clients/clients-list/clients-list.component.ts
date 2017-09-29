import { Component } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  template: `
    <p>
      clients-list Works!
    </p>
    <a *ngFor="let user of clients" href="#" [routerLink]="['/clients', user.id]">{{user.name}}</a>
  `,
})
export class ClientsListComponent {
  clients = [
    { id: 2, name: "Darth Vador" }
  ]
}
