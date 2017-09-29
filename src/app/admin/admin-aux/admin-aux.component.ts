import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-aux',
  template: `
    <p>
      admin-aux Works!
    </p>
    <a href="#" [routerLink]="['/admin']">Admin List</a>
    <a href="#" [routerLink]="['other']">Admin Other</a>
  `,
})
export class AdminAuxComponent { }
