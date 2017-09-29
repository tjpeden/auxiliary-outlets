import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  template: `
    <p>
      admin-list Works!
    </p>
    <a *ngFor="let user of admin" href="#" [routerLink]="['/admin', user.id]">{{user.name}}</a>
  `,
})
export class AdminListComponent {
  admin = [
    { id: 1, name: "Luke Skywalker" }
  ]
}
